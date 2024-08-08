import { Elysia, t } from "elysia";

export const app = new Elysia({ prefix: "/backend" })
  .get("/", () => "hello Next")
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });
