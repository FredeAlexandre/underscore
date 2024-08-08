"use client";

import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { fetchMapData } from "~/lib/valorant-api";
import { Skeleton } from "./ui/skeleton";

export function ValorantMapImage({ mapUuid }: { mapUuid: string }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["valorant-data", mapUuid],
    queryFn: fetchMapData(mapUuid),
  });
  if (isLoading) return <Skeleton className="h-[40px] w-[71px] rounded" />;

  if (!data || isError)
    return <div className="h-[40px] w-[71px] rounded bg-red-500"></div>;

  return (
    <Image
      className="rounded"
      src={data.splash}
      height={40}
      width={71}
      alt="Valorant map splash image"
    />
  );
}
