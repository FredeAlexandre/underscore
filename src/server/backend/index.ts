import { Elysia, t } from "elysia";
import { data } from "./hard_coded_henrik_data";

export const app = new Elysia({ prefix: "/backend" })
  .get("/premier", data)
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });
