# Screenshot MCP Server

A Model Context Protocol (MCP) server that provides screenshot capabilities using Chromium browser automation via Playwright.

## Features

- **Full Page Screenshots**: Capture complete web pages
- **Element Screenshots**: Take screenshots of specific elements using CSS selectors  
- **Customizable Viewport**: Configure browser viewport dimensions
- **Wait Conditions**: Wait for specific elements before capturing
- **File Management**: Save screenshots to specified paths or temporary files
- **Base64 Encoding**: Returns screenshots as base64-encoded images for direct use

## Tools

### `take_screenshot`
Takes a screenshot of a web page.

**Parameters:**
- `url` (required): URL of the web page to screenshot
- `width` (optional): Viewport width in pixels (default: 1920)  
- `height` (optional): Viewport height in pixels (default: 1080)
- `full_page` (optional): Take full page screenshot (default: true)
- `wait_for` (optional): CSS selector to wait for before taking screenshot
- `delay` (optional): Delay in milliseconds before taking screenshot (default: 1000)
- `save_path` (optional): Path to save screenshot file

### `take_element_screenshot`
Takes a screenshot of a specific element on a web page.

**Parameters:**
- `url` (required): URL of the web page
- `selector` (required): CSS selector of the element to screenshot
- `width` (optional): Viewport width in pixels (default: 1920)
- `height` (optional): Viewport height in pixels (default: 1080)  
- `delay` (optional): Delay in milliseconds before taking screenshot (default: 1000)
- `save_path` (optional): Path to save screenshot file

## Installation

```bash
cd screenshot_mcp
pip install -e .

# Install playwright browsers
playwright install chromium
```

## Usage

### As MCP Server
Configure in your MCP client:

```json
{
  "servers": {
    "screenshot-mcp": {
      "command": "python",
      "args": ["-m", "screenshot_mcp.server"],
      "env": {}
    }
  }
}
```

### Direct Usage
```bash
python -m screenshot_mcp.server
```

## Examples

### Taking a Full Page Screenshot
```python
# Via MCP tool call
{
  "tool": "take_screenshot",
  "arguments": {
    "url": "https://example.com",
    "full_page": true,
    "save_path": "/path/to/screenshot.png"
  }
}
```

### Taking an Element Screenshot  
```python
# Via MCP tool call
{
  "tool": "take_element_screenshot", 
  "arguments": {
    "url": "https://example.com",
    "selector": ".header-navigation",
    "save_path": "/path/to/element.png"
  }
}
```

## Requirements

- Python 3.8+
- Playwright
- MCP (Model Context Protocol)

## License

MIT License