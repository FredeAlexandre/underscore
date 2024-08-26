"use client";

import { DiscordIcon } from "~/components/icons/DiscordIcon";
import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";

const ICONS = {
  discord: <DiscordIcon className="mr-4" fill="#ffffff" width="40" height="40"/>
}

interface AuthButtonProps {
  type: string,
  className?: string
}

export function AuthButton(props: AuthButtonProps) {
  return (
    <Button
      className={props.className}
      onClick={async () => {
        await signIn(props.type);
      }}
    >
      {props.type === "discord" ? ICONS.discord : null}
      Sign In
    </Button>
  );
}
