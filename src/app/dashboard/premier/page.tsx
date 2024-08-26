import Image from "next/image";
import React, { useEffect } from "react";

import { Button } from "~/components/ui/button";
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
import { LogoutButton } from "../../_components/logout-button";
import { PlayerProfilePicture } from "../../_components/player-profile-picture";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { parseISO } from "date-fns";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export const dynamic = "force-dynamic";

export default async function PremierPage() {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    redirect("/login");
  }

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
      <div className="flex w-full flex-col items-center gap-6">
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
