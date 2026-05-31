"use client";

import Image from "next/image";
import Link from "next/link";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LogOut, LayoutDashboard } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export function UserMenu() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="overflow-hidden rounded-full border border-white/10 transition hover:border-violet-500/50">
          <Image
  src={
    session.user.image ||
    "https://ui-avatars.com/api/?name=User"
  }
  alt={session.user.name || "User"}
  width={42}
  height={42}
  className="h-10 w-10 rounded-full object-cover"
/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          className="glass-effect z-50 min-w-[220px] rounded-2xl p-2"
        >
          <div className="border-b border-white/10 px-3 py-3">
            <p className="font-medium text-white">
              {session.user.name}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {session.user.email}
            </p>
          </div>

          <div className="mt-2 space-y-1">
            <DropdownMenu.Item asChild>
              <Link
                href="/dashboard"
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-300 outline-none transition hover:bg-white/10"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              onClick={() => signOut()}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-400 outline-none transition hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}