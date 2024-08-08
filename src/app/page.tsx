import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

import { ValorantMapImage } from "~/components/valorant-map-image";
import { ValorantMapName } from "~/components/valorant-map-name";
import { api } from "~/server/backend";

export function Match({
  children,
  mapUuid,
}: {
  children?: React.ReactNode;
  mapUuid: string;
}) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border p-2">
      <div className="flex items-center gap-2">
        <ValorantMapImage mapUuid={mapUuid} />
        <div className="space-y-2">
          <ValorantMapName mapUuid={mapUuid} />
          <Skeleton className="h-[10px] w-[80px] rounded-full" />
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

export function Week({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex justify-between">
        <h2 className="font-bold">Week #1</h2>
        <p className="text-muted-foreground">16 Juin 2024 → 23 Juin 2024</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-2">{children}</div>
    </div>
  );
}

export default async function HomePage() {
  const response = await api.backend.premier
    .season({ id: "last" })
    .get({ query: { region: "eu" } });

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
          <Button variant="outline" size="icon">
            <ArrowLeftIcon />
          </Button>
          <p>Season {response.data.no + 1}</p>
          <Button disabled variant="outline" size="icon">
            <ArrowRightIcon />
          </Button>
        </div>
        <div className="grid w-full max-w-[60rem] grid-cols-1 gap-4">
          <Week>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "2.5rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "3.75rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "5rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "2.5rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "3.75rem" }} />
            </Match>
          </Week>
          <Week>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "2.5rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "3.75rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "2.5rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "3.75rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "5rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
              <PlayerProfilePicture style={{ zIndex: 12, right: "2.5rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
            </Match>
          </Week>
          <Week>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
              <PlayerProfilePicture style={{ zIndex: 11, right: "1.25rem" }} />
            </Match>
            <Match mapUuid="7eaecc1b-4337-bbf6-6ab9-04b8f06b3319">
              <PlayerProfilePicture style={{ zIndex: 10, right: "0rem" }} />
            </Match>
          </Week>
        </div>
      </div>
    </main>
  );
}
