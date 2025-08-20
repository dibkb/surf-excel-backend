import {
  generateSuggestionsProcedure,
  healthCheckProcedure,
  router,
} from "./trpc.js";
import { helloProcedure } from "./trpc.js";

export const appRouter = router({
  hello: helloProcedure,
  health: healthCheckProcedure,
  "auto-complete": generateSuggestionsProcedure,
});

export type AppRouter = typeof appRouter;
