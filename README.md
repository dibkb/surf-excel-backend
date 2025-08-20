# Surf Excel Backend

A Node.js backend built with Hono and tRPC for type-safe APIs.

## Features

- **Hono**: Fast web framework
- **tRPC**: End-to-end typesafe APIs
- **TypeScript**: Full type safety
- **Zod**: Runtime validation

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The server will start on `http://localhost:8000`

## tRPC API Endpoints

### Hello Query

- **URL**: `GET /trpc/hello`
- **Input**: `{ name?: string }` (optional)
- **Example**: `GET /trpc/hello?input={"name":"John"}`

### Create User Mutation

- **URL**: `POST /trpc/createUser`
- **Input**: `{ name: string, email: string }`
- **Example**:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Testing

Run the test script to verify tRPC endpoints:

```bash
node test-trpc.js
```

## Project Structure

```
src/
├── index.ts      # Main server file with Hono + tRPC
├── trpc.ts       # tRPC procedures and configuration
├── router.ts     # Main tRPC router
└── client.ts     # tRPC client for testing
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
