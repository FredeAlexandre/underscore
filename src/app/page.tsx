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

export function PlayerProfilePicture({ style }: { style?: CSSProperties }) {
  return <Skeleton style={style} className="h-9 w-9 rounded-full" />;
}

export default async function HomePage() {
  const response = await api.backend.events.get();
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
              <PlannerEvent>
                <PlannerEventThumbnail
                  src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
                  alt="Ascent"
                />
                <PlannerEventMetadata title="Ascent" start={new Date()} />
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
            </PlannerBlockContent>
          </PlannerBlock>
        </Planner>
      </div>
    </main>
  );
}
