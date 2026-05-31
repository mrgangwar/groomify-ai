import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-10 space-y-8">
      {/* HEADER */}
      <div className="flex justify-between">
        <div className="space-y-3">
          <Skeleton className="h-10 w-60" />
          <Skeleton className="h-6 w-40" />
        </div>

        <Skeleton className="h-20 w-40 rounded-2xl" />
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-2xl border border-white/10 p-4"
          >
            <Skeleton className="h-60 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}