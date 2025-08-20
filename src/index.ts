import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./router.ts";

const app = new Hono();

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

app.get("/", (c) => {
  return c.json("OK");
});

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
    console.log(
      `tRPC endpoint available at http://localhost:${info.port}/trpc`
    );
  }
);
