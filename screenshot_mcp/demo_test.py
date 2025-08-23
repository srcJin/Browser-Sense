#!/usr/bin/env python3

import asyncio
import sys
from pathlib import Path

# Add the screenshot_mcp module to path
sys.path.insert(0, str(Path(__file__).parent))

from server import take_screenshot, take_element_screenshot


async def demo_screenshots():
    """Demonstrate screenshot functionality."""
    print("🖼️  Screenshot MCP Server Demo")
    print("=" * 40)
    
    # Demo 1: Full page screenshot
    print("\n📸 Demo 1: Full Page Screenshot")
    print("-" * 30)
    
    try:
        result1 = await take_screenshot(
            url="http://localhost:3000",
            width=1200,
            height=800,
            full_page=True,
            delay=2000,
            save_path="/tmp/demo_full_page.png"
        )
        
        print("✅ Full page screenshot completed!")
        for item in result1:
            if item.type == "text":
                print(f"📝 {item.text}")
            elif item.type == "image":
                print(f"🖼️  Image: {item.mimeType}, {len(item.data)} chars base64 data")
        
    except Exception as e:
        print(f"❌ Full page screenshot failed: {e}")
    
    # Demo 2: Element screenshot
    print("\n📸 Demo 2: Element Screenshot (Language Toggle)")
    print("-" * 45)
    
    try:
        result2 = await take_element_screenshot(
            url="http://localhost:3000",
            selector=".language-toggle",
            width=1200,
            height=800,
            delay=1000,
            save_path="/tmp/demo_element.png"
        )
        
        print("✅ Element screenshot completed!")
        for item in result2:
            if item.type == "text":
                print(f"📝 {item.text}")
            elif item.type == "image":
                print(f"🖼️  Image: {item.mimeType}, {len(item.data)} chars base64 data")
                
    except Exception as e:
        print(f"❌ Element screenshot failed: {e}")
    
    # Demo 3: Header screenshot
    print("\n📸 Demo 3: Element Screenshot (Header)")
    print("-" * 35)
    
    try:
        result3 = await take_element_screenshot(
            url="http://localhost:3000",
            selector=".header",
            width=1200,
            height=800,
            delay=1000,
            save_path="/tmp/demo_header.png"
        )
        
        print("✅ Header screenshot completed!")
        for item in result3:
            if item.type == "text":
                print(f"📝 {item.text}")
            elif item.type == "image":
                print(f"🖼️  Image: {item.mimeType}, {len(item.data)} chars base64 data")
                
    except Exception as e:
        print(f"❌ Header screenshot failed: {e}")
    
    print("\n🎯 Demo Summary")
    print("-" * 15)
    
    import os
    files_created = []
    for filepath in ["/tmp/demo_full_page.png", "/tmp/demo_element.png", "/tmp/demo_header.png"]:
        if os.path.exists(filepath):
            size = os.path.getsize(filepath)
            files_created.append(f"  📁 {filepath} ({size:,} bytes)")
    
    if files_created:
        print("Files created:")
        for file_info in files_created:
            print(file_info)
    else:
        print("No files were created")
    
    print("\n🎉 Screenshot MCP server demo completed!")


if __name__ == "__main__":
    asyncio.run(demo_screenshots())