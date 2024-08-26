import { parseISO } from "date-fns";

import { db } from "~/server/db";
import { events, eventInvitations } from "~/server/db/schema";

const USER_ID = "C3Z5Ug1Fy0W986NEJAObY"

const default_thumbnail =
  "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png";

const main = async () => {
  console.log("Adding fake events on the database");
  const results = await db
    .insert(events)
    .values({
      name: "Lotus",
      start: parseISO("2024-08-09T10:00:00Z"),
      end: parseISO("2024-08-09T12:00:00Z"),
      include_time: true,
      thumbnail: default_thumbnail,
    })
    .returning();
  if (!results[0]) {
    console.log("oh no there was an error");
    return;
  }
  console.log(
    "The list of IDs of the events:",
    results.map((x) => x.id),
  );
  const invitations = await db
    .insert(eventInvitations)
    .values({ userId: USER_ID, eventId: results[0].id })
    .returning();
  console.log(invitations);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
