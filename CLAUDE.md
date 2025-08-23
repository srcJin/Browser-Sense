# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BrowserSense is a QA agent with real senses — it sees, feels, and understands your app — beyond code perfection, like a real-user. It extends Browser-Use agents to test websites for UI bugs, broken links, accessibility issues, and other technical problems. It provides an MCP (Model Context Protocol) server interface for integration with Claude Code and other AI tools.

## Key Components

### Core Structure
- **`browser_sense/`**: Main Python package containing the core testing logic
  - `mcp_server.py`: MCP server implementation with `start()` and `results()` tools
  - `agents.py`: Browser automation agents using Playwright and Browser-Use framework
- **`browser-use-hacked/`**: Enhanced Browser-Use framework with custom modifications
- **`screenshot_mcp/`**: Separate MCP server for testing screenshot functionality using Chromium/Playwright
- **`test_website/`**: Next.js test website for development and testing

### Architecture
- **Scout Agent**: Initial reconnaissance agent that catalogs all interactive elements on a page before testing begins (`scout_page()` function)
- **Parallel Testing**: Multiple Browser-Use agents run simultaneously with configurable headless/windowed modes
- **Intelligent Task Distribution**: Scout findings are partitioned into specific testing tasks distributed across agents
- **LLM-Powered Analysis**: Uses Gemini 2.0 Flash for both agent actions and bug report analysis with severity classification
- **Browser Session Management**: Comprehensive cleanup handling for Chromium processes with multiple fallback methods

## Development Commands

### Main Project Setup
```bash
# Setup virtual environment
uv venv
source .venv/bin/activate
uv pip install -e .

# Install browser dependencies
playwright install chromium --with-deps --no-shell
```

### Test Website
```bash
cd test_website
npm install
npm run dev      # Development server
npm run build    # Production build  
npm run start    # Production server
npm run lint     # ESLint
```

### Screenshot MCP
```bash
cd screenshot_mcp
pip install -e .
playwright install chromium
```

## Environment Requirements

- **GOOGLE_API_KEY**: Required environment variable for Gemini API access
- **Python 3.11+**: Main runtime requirement  
- **Playwright/Chromium**: Browser automation backend

## MCP Integration

### Add to Claude Code:
```bash
claude mcp add browsersense /full/path/to/browser-sense/.venv/bin/browser-sense-mcp -e GOOGLE_API_KEY="your_api_key"
```

### Available MCP Tools:
- `start(url, num_agents=3, headless=False)`: Launch testing agents
- `results(test_id)`: Get consolidated bug report with severity analysis

## Testing Workflow

1. **Scout Phase**: Single agent catalogs all interactive elements
2. **Task Partitioning**: LLM converts scout findings into specific test tasks
3. **Parallel Execution**: Multiple agents test different elements simultaneously
4. **Cleanup**: Comprehensive browser process cleanup with fallback methods
5. **Analysis**: LLM analyzes findings and classifies by severity (high/medium/low)

## Browser Configuration

- **Headless Mode**: Configurable via `headless` parameter
- **Window Management**: Automatic positioning and sizing for multiple agents in non-headless mode
- **Zoom Settings**: 0.25x zoom for compact window viewing
- **Process Cleanup**: Multi-method cleanup including pkill fallback on macOS