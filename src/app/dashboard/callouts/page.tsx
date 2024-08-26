import React from "react";

import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export const dynamic = "force-dynamic";

export default async function CalloutsPage() {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <main className="container flex flex-col items-center gap-20 px-4 py-20">
      <p>Callouts</p>
    </main>
  );
}
