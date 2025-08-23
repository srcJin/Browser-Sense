#!/usr/bin/env python3

import asyncio
import json
import sys
from pathlib import Path

# Add the screenshot_mcp module to path
sys.path.insert(0, str(Path(__file__).parent))

from server import take_screenshot


async def test_screenshot():
    """Test the screenshot functionality."""
    print("Testing screenshot functionality...")
    
    try:
        # Test taking a screenshot of the local test website
        result = await take_screenshot(
            url="http://localhost:3000",
            width=1200,
            height=800,
            full_page=True,
            delay=2000,
            save_path="/tmp/test_screenshot.png"
        )
        
        print("Screenshot test completed!")
        print(f"Result type: {type(result)}")
        print(f"Result length: {len(result)}")
        
        for item in result:
            if hasattr(item, 'type'):
                print(f"Item type: {item.type}")
                if item.type == "text":
                    print(f"Text content: {item.text[:200]}...")
                elif item.type == "image":
                    print(f"Image mime type: {item.mimeType}")
                    print(f"Image data length: {len(item.data)}")
        
        return True
        
    except Exception as e:
        print(f"Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


async def main():
    """Main test function."""
    print("Starting screenshot MCP server test...")
    
    # Test screenshot functionality
    success = await test_screenshot()
    
    if success:
        print("\n✅ All tests passed!")
    else:
        print("\n❌ Tests failed!")
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main())