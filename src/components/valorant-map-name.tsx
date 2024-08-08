"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMapData } from "~/lib/valorant-api";
import { Skeleton } from "./ui/skeleton";

export function ValorantMapName({ mapUuid }: { mapUuid: string }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["valorant-data", mapUuid],
    queryFn: fetchMapData(mapUuid),
  });

  if (isLoading)
    return <Skeleton className="h-[20px] w-[120px] rounded-full" />;

  if (!data || isError)
    return <div className="text-red-500">Error loading map data...</div>;

  return <p className="text-sm font-bold">{data.displayName}</p>;
}
