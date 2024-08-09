"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

import { Button } from "~/components/ui/button";

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Avatar>
        <button
          onClick={async () => {
            await signOut();
          }}
        >
          <AvatarImage src={session.user.image ?? undefined} />
          <AvatarFallback>{session.user.name}</AvatarFallback>
        </button>
      </Avatar>
    );
  }

  return (
    <Button
      onClick={async () => {
        await signIn("discord");
      }}
    >
      Connect
    </Button>
  );
}
