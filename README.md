# Hello World MCP Server

A simple MCP (Model Context Protocol) server using STDIO transport, built with TypeScript.

## Features

This server exposes:

### Tools
- **hello** - Says hello to someone (takes a `name` parameter)
- **get_greeting** - Returns a friendly greeting message (no parameters)

### Resources
- **server-info** (`info://server`) - Provides information about the server

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## Usage

### Running directly
```bash
npm start
```

### Using with Cursor

Add this to your Cursor MCP settings (`.cursor/mcp.json` in your project or global settings):

```json
{
  "mcpServers": {
    "hello-world": {
      "command": "node",
      "args": ["c:/Users/Mauri/CODE/surph-test-mcp/dist/index.js"]
    }
  }
}
```

## How it works

The server uses STDIO (standard input/output) transport to communicate with MCP clients. When a client connects, it can:

1. List available tools using `tools/list`
2. Call the `hello` tool with a name to get a personalized greeting
3. Call the `get_greeting` tool to get a simple greeting
4. Access the `server-info` resource for server information
