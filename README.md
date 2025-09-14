# Basic MCP Server for Node.js

A simple MCP (Model Context Protocol) server implemented in Node.js that provides a tool to add two integers.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

To install globally:

```bash
npm install -g .
```

## Usage

Run the server:

```bash
node server.js
```

Or if installed globally:

```bash
basic-mcp-server
```

The server communicates via stdio and provides tools for MCP clients.

## Tools

- **add_integers**: Adds two integers and returns the sum.

  Input:
  - `a`: First integer
  - `b`: Second integer

  Output: The sum as a string.

## Docker

Build and run with Docker:

```bash
docker build -t basic-mcp-server .
docker run basic-mcp-server
```

