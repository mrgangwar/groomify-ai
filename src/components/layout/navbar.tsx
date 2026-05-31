"use client";

import Link from "next/link";

import { useSession } from "next-auth/react";

import { Container } from "@/components/shared/container";

import { GoogleLoginButton } from "@/components/auth/google-login-button";
import { UserMenu } from "@/components/auth/user-menu";

export function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="shrink-0">
          <span className="text-xl font-bold tracking-tight text-white">
            Groomify{" "}
            <span className="text-violet-400">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          <Link
            href="#features"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            How it Works
          </Link>

          <Link
            href="#pricing"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {status === "loading" ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
          ) : session?.user ? (
            <UserMenu />
          ) : (
            <GoogleLoginButton />
          )}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            aria-hidden="true"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </Container>
    </header>
  );
}
