import { initTRPC } from "@trpc/server";
import { z } from "zod";
import generateSuggestions from "@/ai/suggestions.ts";

// Initialize tRPC
const t = initTRPC.create();

// Export reusable router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;

export const helloProcedure = publicProcedure.query(() => {
  return "Welcome to the hono tRPC API";
});

export const generateSuggestionsProcedure = publicProcedure.query(async () => {
  const suggestions = await generateSuggestions("Hello world");
  return suggestions;
});

export const healthCheckProcedure = publicProcedure.query(() => {
  return {
    status: "healthy and running ❤️",
    timestamp: new Date().toISOString(),
  };
});
