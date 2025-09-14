#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { addIntegers } from "./list_tools.js";
import { addIntegerCall } from "./call_tools.js";

const server = new Server(
  {
    name: "basic-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, addIntegers)

server.setRequestHandler(CallToolRequestSchema, addIntegerCall);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("Basic MCP Server running on stdio");
}

main().catch(err => {
    console.error("Server error: ", err)
    process.exit(1)
})
