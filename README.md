# BrowserSense

BrowserSense is a QA agent with real senses — it sees, feels, and understands your app — beyond code perfection, like a real-user.

[![BrowserSense Demo](https://img.youtube.com/vi/JaB9KoJSzS4/0.jpg)](https://www.youtube.com/watch?v=JaB9KoJSzS4)

An MCP server that launches multiple Browser-Use agents to test websites for UI bugs, broken links, accessibility issues, and other technical problems.

Perfect for testing both live websites and localhost development sites. 

Test with real senses until your website works perfectly.

## Quick Start

```bash
# Setup virtual environment
uv venv
source .venv/bin/activate

# Install local browser-use-hacked library first
cd browser-use-hacked
uv pip install -e .
cd ..

# Install BrowserSense dependencies
uv pip install -e .

# Install browser dependencies
playwright install chromium --with-deps --no-shell
```

### 1) Claude Code

```bash
# Add MCP server via CLI



# Test in Claude Code
> claude

> /mcp 
  ⎿  MCP Server Status

     • browsersense: connected
```

### 2) Cursor (manually)

1. **Install via MCP Settings UI:**
   - Open Cursor Settings
   - Click on "MCP" in the left sidebar  
   - Click "Add Server" or the "+" button
   - Manually edit config:
  
```json
{
  "mcpServers": {
    "browsersense": {
      "command": "/full/path/to/browser-sense/.venv/bin/browser-sense-mcp",
      "env": {
        "GOOGLE_API_KEY": "your_api_key"
      }
    }
  }
}

```

### Basic Prompts
```
> Test my website with BrowserSense using 5 agents: browser-use.com
> Run BrowserSense on localhost:3000
> Run a headless BrowserSense test on localhost:8080 with 10 agents
```

Test my website with BrowserSense using 2 agents: google.com

### Parameters You Can Specify
- **URL**: Any website (`https://example.com`, `localhost:3000`, `http://dev.mysite.com`)
- **Number of agents**: `3` (default), `5 agents`, `2 agents` - more agents = more thorough testing
- **Headless mode**: `non-headless` (default) or `headless`

## Requirements

- Python 3.11+
- Google API key ([get one](https://developers.google.com/maps/api-security-best-practices)) (we support gemini-2.0-flash)
- Cursor/Claude with MCP support

## Full Demo


https://github.com/user-attachments/assets/6450b5b7-10e5-4019-82a4-6d726dbfbe1f



## License

MIT

---

Powered by [Browser Use](https://github.com/browser-use/browser-use) 
