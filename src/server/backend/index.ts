import { Elysia, t } from "elysia";
import { treaty } from "@elysiajs/eden";
import { eq } from "drizzle-orm";

import { db } from "~/server/db";
import { events } from "~/server/db/schema";

import { env } from "~/env";

export const app = new Elysia({ prefix: "/backend" })
  .get("/events", async () => {
    return await db.select().from(events);
  })
  .get(
    "/event/:id",
    async ({ params: { id }, error }) => {
      const result = await db
        .select()
        .from(events)
        .where(eq(events.id, id))
        .limit(1);

      if (result.length == 0 || !result[0])
        return error(400, `Event with ${id} not found`);
      return result[0];
    },
    {
      params: t.Object({
        id: t.String(),
      }),
    },
  )
  .post(
    "/event",
    async ({ error, query: { name, start, end, include_time, thumbnail } }) => {
      const result = await db
        .insert(events)
        .values({ name, start, end, include_time, thumbnail })
        .returning();
      if (result.length == 0 || !result[0])
        return error(500, `Somehting went wrong with database`);
      return result[0];
    },
    {
      query: t.Object({
        name: t.String(),
        start: t.Date(),
        end: t.Date(),
        include_time: t.Boolean(),
        thumbnail: t.String(),
      }),
    },
  );

export type App = typeof app;

export const api = treaty<App>(env.ELYSIA_URL);
