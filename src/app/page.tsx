import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import type { CSSProperties } from "react";
import React from "react";
import { isSameWeek, parseISO } from "date-fns";

import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

import { ValorantMapImage } from "~/components/valorant-map-image";
import { ValorantMapName } from "~/components/valorant-map-name";
import { api } from "~/server/backend";
import type {
  PremierSeason,
  EventType,
} from "~/server/backend/hard_coded_henrik_data";

export function Match({
  children,
  event,
}: {
  children?: React.ReactNode;
  event: Event;
}) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border p-2">
      <div className="flex items-center gap-2">
        <ValorantMapImage mapUuid={event.map} />
        <div className="space-y-1">
          <ValorantMapName mapUuid={event.map} />
          <p className="text-xs text-muted-foreground">
            {event.type}
            {" - "}
            {event.from.toDateString()}
          </p>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PlayerProfilePicture({ style }: { style?: CSSProperties }) {
  return (
    <Skeleton
      style={style}
      className="absolute top-1/2 h-9 w-9 -translate-y-1/2 rounded-full"
    />
  );
}

type Event = { type: EventType; from: Date; to: Date; map: string };

export function Week({
  no,
  events,
}: {
  children?: React.ReactNode;
  no: number;
  events: Event[];
}) {
  const [from, to] = React.useMemo(() => {
    if (events.length == 0)
      return [
        { from: new Date(0), to: new Date(0) },
        { from: new Date(0), to: new Date(0) },
      ] as const;
    const from = events[0];
    const to = events[events.length - 1];
    if (!from || !to)
      return [
        { from: new Date(0), to: new Date(0) },
        { from: new Date(0), to: new Date(0) },
      ] as const;
    return [from, to] as const;
  }, [events]);

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex justify-between">
        <h2 className="font-bold">Week #{no + 1}</h2>
        <p className="text-muted-foreground">
          {from.from.toDateString()} → {to.to.toDateString()}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-2">
        {events.map((event, key) => (
          <Match key={key} event={event}>
            <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
            <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
            <PlayerProfilePicture style={{ zIndex: 12, right: "2.5rem" }} />
            <PlayerProfilePicture style={{ zIndex: 12, right: "3.75rem" }} />
            <PlayerProfilePicture style={{ zIndex: 12, right: "5rem" }} />
          </Match>
        ))}
      </div>
    </div>
  );
}

export function Season({ season }: { season: PremierSeason }) {
  const weeks = React.useMemo(() => {
    /**
     * const result: Event[][] = [[]];
    for (const event of season.events) {
      const scheduled_event = season.scheduled_events
        .filter((x) => x.conference === "EU_FRANCE")
        .find((e) => e.event_id == event.id);
      if (!scheduled_event) continue;
      const from = parseISO(scheduled_event.starts_at);
      const to = parseISO(scheduled_event.ends_at);
      (result[0] ?? []).push({
        from,
        to,
        type: event.type,
        map: (
          event.map_selection.maps[0] ?? {
            id: "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319",
          }
        ).id,
      });
    }
    return result;
     */
    const result: Event[][] = [];

    for (const event of season.events) {
      const scheduled_event = season.scheduled_events
        .filter((x) => x.conference === "EU_FRANCE")
        .find((e) => e.event_id == event.id);
      if (!scheduled_event) continue;
      const from = parseISO(scheduled_event.starts_at);
      const to = parseISO(scheduled_event.ends_at);
      let found_place = false;
      if (result.length != 0) {
        for (const week of result) {
          const first_event = week[0];
          if (!first_event) continue;
          if (isSameWeek(first_event.from, from)) {
            week.push({
              from,
              to,
              type: event.type,
              map: (
                event.map_selection.maps[0] ?? {
                  id: "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319",
                }
              ).id,
            });
            found_place = true;
            break;
          }
        }
      }
      if (!found_place) {
        result.push([
          {
            from,
            to,
            type: event.type,
            map: (
              event.map_selection.maps[0] ?? {
                id: "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319",
              }
            ).id,
          },
        ]);
      }
    }
    return result;
  }, [season]);

  return (
    <div className="grid w-full max-w-[60rem] grid-cols-1 gap-4">
      {weeks.map((events, key) => (
        <Week events={events} key={key} no={key} />
      ))}
    </div>
  );
}

export default async function HomePage() {
  const response = await api.backend.premier
    .season({ id: "last" })
    .get({ query: { region: "eu" }, fetch: { cache: "no-cache" } });

  const data = response.data as PremierSeason & { last: boolean; no: number };

  return (
    <main className="container flex flex-col items-center gap-20 px-4 py-20">
      <Image
        src="/underscore.svg"
        width={500}
        height={100}
        alt="UNDERSCORE logo"
      />
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex gap-10 text-2xl font-bold">
          <Button disabled={data.no == 0} variant="outline" size="icon">
            <ArrowLeftIcon />
          </Button>
          <p>Season {data.no + 1}</p>
          <Button disabled={data.last} variant="outline" size="icon">
            <ArrowRightIcon />
          </Button>
        </div>
        <Season season={data} />
      </div>
    </main>
  );
}
