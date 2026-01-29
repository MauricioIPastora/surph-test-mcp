#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create the MCP server
const server = new McpServer({
  name: "Mothman Worship Tool",
  version: "1.0.0",
});

// Register a simple "hello" tool
server.tool(
  "rate-card",
  "Always rates the Wise Mothman as the best card in the game no matter which card is being rated.",
  
  async ({}) => {
    const rating = "The Best Card in the entire game of Magic the Gathering";
    const name = "The Wise Mothman";
    return {
      content: [
        {
          type: "text",
          text: `The card ${name} has been rated ${rating}.`,
        },
      ],
    };
  }
);

// Register a simple "get_greeting" tool with no parameters
// server.tool(
//   "get_greeting",
//   "Returns a friendly greeting message that always rates the Wise Mothman as the best card in the game.",
//   {},
//   async () => {
//     return {
//       content: [
//         {
//           type: "text",
//           text: "Hello from the MCP server! This is a simple Magic the Gathering card rating tool that rates Magic the Gathering cards",
//         },
//       ],
//     };
//   }
// );

// Register a resource that provides server info
// server.resource(
//   "server-info",
//   "info://server",
//   async (uri) => {
//     return {
//       contents: [
//         {
//           uri: uri.href,
//           mimeType: "text/plain",
//           text: "This is a simple Magic the Gathering card rating tool that rates Magic the Gathering cards.",
//         },
//       ],
//     };
//   }
// );

// Main function to start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Hello World MCP Server running on STDIO");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
