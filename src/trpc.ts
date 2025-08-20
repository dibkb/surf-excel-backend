import { initTRPC } from "@trpc/server";
import { z } from "zod";

// Initialize tRPC
const t = initTRPC.create();

// Export reusable router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;

export const helloProcedure = publicProcedure.query(() => {
  return "Welcome to the hono tRPC API";
});

export const healthCheckProcedure = publicProcedure.query(() => {
  return {
    status: "healthy and running ❤️",
    timestamp: new Date().toISOString(),
  };
});
