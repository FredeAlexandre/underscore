import Image from "next/image";
import type { CSSProperties } from "react";
import React from "react";

import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Planner,
  PlannerBlock,
  PlannerBlockHeader,
  PlannerBlockTitle,
  PlannerBlockTimespan,
  PlannerBlockContent,
  PlannerEvent,
  PlannerEventThumbnail,
  PlannerEventMetadata,
  PlannerEventRightSide,
} from "~/components/planner";

import { api } from "~/server/backend";
import { AuthButton } from "./_components/auth-button";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { parseISO } from "date-fns";

export function PlayerProfilePicture({ style }: { style?: CSSProperties }) {
  return <Skeleton style={style} className="h-9 w-9 rounded-full" />;
}

export default async function HomePage() {
  const response = await api.backend.events.get({
    fetch: { cache: "no-cache" },
  });

  const data = response.data as {
    id: string;
    name: string;
    start: string;
    end: string;
    include_time: boolean;
    thumbnail: string;
  }[];

  const formated = data.map((item) => ({
    ...item,
    title: item.name,
    start: parseISO(item.start),
    end: parseISO(item.end),
  }));

  return (
    <main className="container flex flex-col items-center gap-20 px-4 py-20">
      <Image
        src="/underscore.svg"
        width={500}
        height={100}
        alt="UNDERSCORE logo"
      />
      <div className="flex w-full flex-col items-center gap-6">
        <AuthButton />
        <Planner>
          <PlannerBlock>
            <PlannerBlockHeader>
              <PlannerBlockTitle>Week #1</PlannerBlockTitle>
              <PlannerBlockTimespan>20 → 21</PlannerBlockTimespan>
            </PlannerBlockHeader>
            <PlannerBlockContent>
              {formated.map((event) => (
                <PlannerEvent key={event.id}>
                  <PlannerEventThumbnail
                    src={event.thumbnail}
                    alt={event.name}
                  />
                  <PlannerEventMetadata {...event} />
                  <PlannerEventRightSide>
                    <PlayerProfilePicture />
                    <PlayerProfilePicture />
                    <PlayerProfilePicture />
                    <PlayerProfilePicture />
                    <PlayerProfilePicture />
                    <div className="flex gap-1 pl-2">
                      <Button variant="ghost" size="icon">
                        <CheckIcon />
                      </Button>
                      <Button disabled variant="ghost" size="icon">
                        <Cross2Icon />
                      </Button>
                    </div>
                  </PlannerEventRightSide>
                </PlannerEvent>
              ))}
            </PlannerBlockContent>
          </PlannerBlock>
        </Planner>
      </div>
    </main>
  );
}
