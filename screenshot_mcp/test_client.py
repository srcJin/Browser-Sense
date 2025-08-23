#!/usr/bin/env python3

import asyncio
import json
import subprocess
import sys
from pathlib import Path

async def test_mcp_server():
    """Test the MCP server by sending JSON-RPC messages."""
    
    print("🔄 Starting MCP screenshot server test...")
    
    # Start the MCP server process
    server_process = subprocess.Popen(
        [sys.executable, "server.py"],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        cwd=Path(__file__).parent
    )
    
    try:
        # Send initialization request
        init_request = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {
                    "name": "test-client",
                    "version": "1.0.0"
                }
            }
        }
        
        print("📨 Sending initialization request...")
        server_process.stdin.write(json.dumps(init_request) + "\n")
        server_process.stdin.flush()
        
        # Read response
        response_line = server_process.stdout.readline()
        print(f"📬 Received: {response_line.strip()}")
        
        # Send tools list request
        tools_request = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "tools/list",
            "params": {}
        }
        
        print("\n📨 Requesting tools list...")
        server_process.stdin.write(json.dumps(tools_request) + "\n")
        server_process.stdin.flush()
        
        # Read response
        tools_response = server_process.stdout.readline()
        print(f"📬 Tools response: {tools_response.strip()}")
        
        # Parse and display tools
        try:
            tools_data = json.loads(tools_response)
            if "result" in tools_data:
                tools = tools_data["result"]["tools"]
                print(f"\n🛠️  Available tools ({len(tools)}):")
                for tool in tools:
                    print(f"  • {tool['name']}: {tool['description']}")
        except:
            pass
        
        # Send screenshot request
        screenshot_request = {
            "jsonrpc": "2.0", 
            "id": 3,
            "method": "tools/call",
            "params": {
                "name": "take_screenshot",
                "arguments": {
                    "url": "http://localhost:3000",
                    "width": 1200,
                    "height": 800,
                    "full_page": True,
                    "save_path": "/tmp/mcp_test_screenshot.png"
                }
            }
        }
        
        print("\n📨 Taking screenshot...")
        server_process.stdin.write(json.dumps(screenshot_request) + "\n")
        server_process.stdin.flush()
        
        # Read response
        screenshot_response = server_process.stdout.readline()
        print(f"📬 Screenshot response length: {len(screenshot_response)} chars")
        
        # Parse response
        try:
            screenshot_data = json.loads(screenshot_response)
            if "result" in screenshot_data:
                content = screenshot_data["result"]["content"]
                print(f"\n📸 Screenshot result:")
                print(f"  • Content items: {len(content)}")
                for i, item in enumerate(content):
                    if item["type"] == "text":
                        print(f"  • Text {i+1}: {item['text'][:100]}...")
                    elif item["type"] == "image":
                        print(f"  • Image {i+1}: {item['mimeType']}, {len(item['data'])} chars")
                        
                # Check if file was saved
                import os
                if os.path.exists("/tmp/mcp_test_screenshot.png"):
                    file_size = os.path.getsize("/tmp/mcp_test_screenshot.png")
                    print(f"  • File saved: /tmp/mcp_test_screenshot.png ({file_size} bytes)")
                    
        except Exception as e:
            print(f"Error parsing screenshot response: {e}")
        
        print("\n✅ MCP server test completed!")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        
    finally:
        # Clean up
        try:
            server_process.terminate()
            server_process.wait(timeout=5)
        except:
            server_process.kill()


if __name__ == "__main__":
    asyncio.run(test_mcp_server())