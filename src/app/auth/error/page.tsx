import Link from "next/link";

import { cn } from "@/lib/utils";

type AuthErrorPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export function generateMetadata() {
  return {
    title: "Authentication Error | Groomify AI",
    description: "Authentication error occurred",
  };
}

export default async function AuthErrorPage({
  searchParams,
}: AuthErrorPageProps) {
  const params = await searchParams;

  const error = params.error || "Authentication failed";

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-effect w-full max-w-md rounded-3xl p-10 text-center">
        <h1 className="text-2xl font-bold text-white">
          Authentication Error
        </h1>

        <p className="mt-4 text-slate-400">
          {error === "OAuthAccountNotLinked"
            ? "This Google account is already linked to another sign-in method."
            : "Something went wrong during authentication. Please try again."}
        </p>

        <Link
          href="/"
          className={cn(
            "mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium",
            "bg-violet-600 text-white transition hover:bg-violet-500"
          )}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
