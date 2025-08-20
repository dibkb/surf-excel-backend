import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./router.js";

// Create tRPC client
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000/trpc",
    }),
  ],
});

// Example usage functions
export async function testHello() {
  try {
    const result = await trpc.hello.query({ name: "tRPC User" });
    console.log("Hello query result:", result);
    return result;
  } catch (error) {
    console.error("Hello query error:", error);
    throw error;
  }
}

export async function testCreateUser() {
  try {
    const result = await trpc.createUser.mutate({
      name: "John Doe",
      email: "john@example.com",
    });
    console.log("Create user result:", result);
    return result;
  } catch (error) {
    console.error("Create user error:", error);
    throw error;
  }
}
