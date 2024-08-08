import { Elysia, t } from "elysia";
import { treaty } from "@elysiajs/eden";
import { data } from "./hard_coded_henrik_data";
import { env } from "~/env";

export const app = new Elysia({ prefix: "/backend" })
  .get(
    "/premier/seasons",
    ({ query, error }) => {
      if (query.region != "eu")
        return error(400, `Region ${query.region} has no data implemented yet`);
      return data.data.map((s, i) => ({ no: i, ...s }));
    },
    {
      query: t.Object({
        region: t.Union(
          [
            t.Literal("eu"),
            t.Literal("na"),
            t.Literal("latam"),
            t.Literal("br"),
            t.Literal("ap"),
            t.Literal("kr"),
          ],
          { default: "eu" },
        ),
      }),
    },
  )
  .get(
    "/premier/season/:id",
    ({ query, error, params: { id } }) => {
      if (query.region != "eu")
        return error(400, `Region ${query.region} has no data implemented yet`);
      if (typeof id == "number") {
        if (id >= data.data.length)
          return error(400, `Season ${id} doesn't exist`);
        return { no: id, last: id == data.data.length - 1, ...data.data[id] };
      } else {
        if (id == "last")
          return {
            no: data.data.length - 1,
            last: true,
            ...data.data[data.data.length - 1],
          };
        const seasonId = data.data.findIndex((s) => s.id === id);
        if (seasonId == -1) return error(400, `Season ${id} doesn't exist`);
        return {
          no: seasonId,
          last: seasonId == data.data.length - 1,
          ...data.data[seasonId],
        };
      }
    },
    {
      params: t.Object({
        id: t.Union([t.Number(), t.Literal("last"), t.String()]),
      }),
      query: t.Object({
        region: t.Union(
          [
            t.Literal("eu"),
            t.Literal("na"),
            t.Literal("latam"),
            t.Literal("br"),
            t.Literal("ap"),
            t.Literal("kr"),
          ],
          { default: "eu" },
        ),
      }),
    },
  );

export type App = typeof app;

export const api = treaty<App>(env.ELYSIA_URL);
