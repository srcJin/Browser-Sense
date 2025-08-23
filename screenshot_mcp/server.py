#!/usr/bin/env python3

import asyncio
import base64
import json
import logging
import os
import tempfile
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

import mcp.server.stdio
import mcp.types as types
from mcp.server import NotificationOptions, Server
from mcp.server.models import InitializationOptions
from playwright.async_api import async_playwright, Browser, BrowserContext, Page

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

server = Server("screenshot-mcp")

# Global browser instance
_browser: Optional[Browser] = None
_context: Optional[BrowserContext] = None


async def get_browser() -> Browser:
    """Get or create browser instance."""
    global _browser, _context
    
    if not _browser:
        playwright = await async_playwright().start()
        _browser = await playwright.chromium.launch(
            headless=True,
            args=[
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        )
        _context = await _browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            device_scale_factor=1,
            ignore_https_errors=True
        )
    
    return _browser


async def cleanup_browser():
    """Clean up browser resources."""
    global _browser, _context
    
    try:
        if _context:
            await _context.close()
            _context = None
        if _browser:
            await _browser.close()
            _browser = None
    except Exception as e:
        logger.error(f"Error cleaning up browser: {e}")


@server.list_tools()
async def handle_list_tools() -> List[types.Tool]:
    """List available screenshot tools."""
    return [
        types.Tool(
            name="take_screenshot",
            description="Take a screenshot of a web page using Chromium",
            inputSchema={
                "type": "object",
                "properties": {
                    "url": {
                        "type": "string",
                        "description": "URL of the web page to screenshot"
                    },
                    "width": {
                        "type": "integer",
                        "description": "Viewport width in pixels (default: 1920)",
                        "default": 1920
                    },
                    "height": {
                        "type": "integer", 
                        "description": "Viewport height in pixels (default: 1080)",
                        "default": 1080
                    },
                    "full_page": {
                        "type": "boolean",
                        "description": "Take full page screenshot (default: true)",
                        "default": True
                    },
                    "wait_for": {
                        "type": "string",
                        "description": "CSS selector to wait for before taking screenshot (optional)"
                    },
                    "delay": {
                        "type": "integer",
                        "description": "Delay in milliseconds before taking screenshot (default: 1000)",
                        "default": 1000
                    },
                    "save_path": {
                        "type": "string", 
                        "description": "Path to save screenshot file (optional, saves to temp if not specified)"
                    }
                },
                "required": ["url"]
            }
        ),
        types.Tool(
            name="take_element_screenshot",
            description="Take a screenshot of a specific element on a web page",
            inputSchema={
                "type": "object",
                "properties": {
                    "url": {
                        "type": "string",
                        "description": "URL of the web page"
                    },
                    "selector": {
                        "type": "string",
                        "description": "CSS selector of the element to screenshot"
                    },
                    "width": {
                        "type": "integer",
                        "description": "Viewport width in pixels (default: 1920)",
                        "default": 1920
                    },
                    "height": {
                        "type": "integer",
                        "description": "Viewport height in pixels (default: 1080)",
                        "default": 1080
                    },
                    "delay": {
                        "type": "integer",
                        "description": "Delay in milliseconds before taking screenshot (default: 1000)",
                        "default": 1000
                    },
                    "save_path": {
                        "type": "string",
                        "description": "Path to save screenshot file (optional, saves to temp if not specified)"
                    }
                },
                "required": ["url", "selector"]
            }
        )
    ]


@server.call_tool()
async def handle_call_tool(
    name: str, arguments: Dict[str, Any]
) -> List[types.TextContent | types.ImageContent | types.EmbeddedResource]:
    """Handle tool calls."""
    
    if name == "take_screenshot":
        return await take_screenshot(**arguments)
    elif name == "take_element_screenshot":
        return await take_element_screenshot(**arguments)
    else:
        raise ValueError(f"Unknown tool: {name}")


async def take_screenshot(
    url: str,
    width: int = 1920,
    height: int = 1080,
    full_page: bool = True,
    wait_for: Optional[str] = None,
    delay: int = 1000,
    save_path: Optional[str] = None
) -> List[types.TextContent | types.ImageContent]:
    """Take a screenshot of a web page."""
    
    try:
        browser = await get_browser()
        global _context
        
        # Create new context with updated viewport
        if _context:
            await _context.close()
        _context = await _browser.new_context(
            viewport={'width': width, 'height': height},
            device_scale_factor=1,
            ignore_https_errors=True
        )
        
        page = await _context.new_page()
        
        try:
            # Navigate to the URL
            logger.info(f"Navigating to {url}")
            await page.goto(url, wait_until="networkidle", timeout=30000)
            
            # Wait for specific element if provided
            if wait_for:
                logger.info(f"Waiting for selector: {wait_for}")
                await page.wait_for_selector(wait_for, timeout=10000)
            
            # Additional delay
            if delay > 0:
                await asyncio.sleep(delay / 1000)
            
            # Take screenshot
            logger.info("Taking screenshot")
            screenshot_options = {
                "full_page": full_page,
                "type": "png"
            }
            
            screenshot_bytes = await page.screenshot(**screenshot_options)
            
            # Save to file if path provided
            if save_path:
                save_path = Path(save_path)
                save_path.parent.mkdir(parents=True, exist_ok=True)
                with open(save_path, 'wb') as f:
                    f.write(screenshot_bytes)
                file_path = str(save_path)
            else:
                # Save to temporary file
                with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as f:
                    f.write(screenshot_bytes)
                    file_path = f.name
            
            # Encode as base64 for return
            screenshot_base64 = base64.b64encode(screenshot_bytes).decode('utf-8')
            
            result_info = {
                "url": url,
                "viewport": {"width": width, "height": height},
                "full_page": full_page,
                "file_path": file_path,
                "file_size": len(screenshot_bytes),
                "timestamp": datetime.now().isoformat()
            }
            
            return [
                types.TextContent(
                    type="text",
                    text=f"Screenshot taken successfully!\n\nDetails:\n{json.dumps(result_info, indent=2)}"
                ),
                types.ImageContent(
                    type="image",
                    data=screenshot_base64,
                    mimeType="image/png"
                )
            ]
            
        finally:
            await page.close()
            
    except Exception as e:
        logger.error(f"Error taking screenshot: {e}")
        return [
            types.TextContent(
                type="text", 
                text=f"Error taking screenshot: {str(e)}"
            )
        ]


async def take_element_screenshot(
    url: str,
    selector: str,
    width: int = 1920,
    height: int = 1080,
    delay: int = 1000,
    save_path: Optional[str] = None
) -> List[types.TextContent | types.ImageContent]:
    """Take a screenshot of a specific element."""
    
    try:
        browser = await get_browser()
        global _context
        
        # Create new context with updated viewport
        if _context:
            await _context.close()
        _context = await _browser.new_context(
            viewport={'width': width, 'height': height},
            device_scale_factor=1,
            ignore_https_errors=True
        )
        
        page = await _context.new_page()
        
        try:
            # Navigate to the URL
            logger.info(f"Navigating to {url}")
            await page.goto(url, wait_until="networkidle", timeout=30000)
            
            # Wait for element
            logger.info(f"Waiting for element: {selector}")
            await page.wait_for_selector(selector, timeout=10000)
            
            # Additional delay
            if delay > 0:
                await asyncio.sleep(delay / 1000)
            
            # Find element and take screenshot
            element = page.locator(selector)
            screenshot_bytes = await element.screenshot(type="png")
            
            # Save to file if path provided
            if save_path:
                save_path = Path(save_path)
                save_path.parent.mkdir(parents=True, exist_ok=True)
                with open(save_path, 'wb') as f:
                    f.write(screenshot_bytes)
                file_path = str(save_path)
            else:
                # Save to temporary file
                with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as f:
                    f.write(screenshot_bytes)
                    file_path = f.name
            
            # Encode as base64 for return
            screenshot_base64 = base64.b64encode(screenshot_bytes).decode('utf-8')
            
            result_info = {
                "url": url,
                "selector": selector,
                "viewport": {"width": width, "height": height},
                "file_path": file_path,
                "file_size": len(screenshot_bytes),
                "timestamp": datetime.now().isoformat()
            }
            
            return [
                types.TextContent(
                    type="text",
                    text=f"Element screenshot taken successfully!\n\nDetails:\n{json.dumps(result_info, indent=2)}"
                ),
                types.ImageContent(
                    type="image",
                    data=screenshot_base64,
                    mimeType="image/png"
                )
            ]
            
        finally:
            await page.close()
            
    except Exception as e:
        logger.error(f"Error taking element screenshot: {e}")
        return [
            types.TextContent(
                type="text",
                text=f"Error taking element screenshot: {str(e)}"
            )
        ]


async def main():
    """Main entry point for the MCP server."""
    # Import mcp.server.stdio here to avoid issues with event loop
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="screenshot-mcp",
                server_version="1.0.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )


if __name__ == "__main__":
    try:
        asyncio.run(main())
    finally:
        # Cleanup on exit
        try:
            asyncio.run(cleanup_browser())
        except:
            pass