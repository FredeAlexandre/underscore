"use client";

import {
  QueryClient,
  QueryClientProvider as RealQueryClientProvider,
} from "@tanstack/react-query";

const client = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RealQueryClientProvider client={client}>
      {children}
    </RealQueryClientProvider>
  );
}
