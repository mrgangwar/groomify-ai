"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-effect max-w-md rounded-3xl p-10 text-center">
        <h1 className="text-2xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-400">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center justify-center rounded-2xl bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
