"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function GoogleLoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button
        variant="secondary"
        onClick={() => signOut()}
      >
        Logout
      </Button>
    );
  }

  return (
    <Button onClick={() => signIn("google")}>
      Continue with Google
    </Button>
  );
}