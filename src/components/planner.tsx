import Image from "next/image";

export function PlannerEventRightSide({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-grow items-center justify-end">{children}</div>
  );
}

export function PlannerEventMetadata({
  title,
  start,
}: {
  title: string;
  start: Date;
  end?: Date;
  include_time?: boolean;
}) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-muted-foreground">{start.toDateString()}</p>
    </div>
  );
}

export function PlannerEventThumbnail({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image className="rounded" src={src} height={40} width={71} alt={alt} />
  );
}

export function PlannerEvent({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border p-2">
      {children}
    </div>
  );
}

export function PlannerBlockContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="grid w-full grid-cols-1 gap-2">{children}</div>;
}

export function PlannerBlockTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <h2 className="font-bold">{children}</h2>;
}

export function PlannerBlockTimespan({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <p className="text-muted-foreground">{children}</p>;
}

export function PlannerBlockHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="flex justify-between">{children}</div>;
}

export function PlannerBlock({ children }: { children?: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-1">{children}</div>;
}

export function Planner({ children }: { children?: React.ReactNode }) {
  return (
    <div className="grid w-full max-w-[60rem] grid-cols-1 gap-4">
      {children}
    </div>
  );
}
