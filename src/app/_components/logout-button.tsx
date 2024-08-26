"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

interface LogoutButtonProps {
  className?: string,
}

export function LogoutButton(props: LogoutButtonProps) {
  return (
    <Button
      className={props.className}
      onClick={async () => {
        await signOut();
      }}
    >
      Log out
    </Button>
  );
}
