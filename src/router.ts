import { healthCheckProcedure, router } from "./trpc.js";
import { helloProcedure } from "./trpc.js";

export const appRouter = router({
  hello: helloProcedure,
  health: healthCheckProcedure,
});

export type AppRouter = typeof appRouter;
