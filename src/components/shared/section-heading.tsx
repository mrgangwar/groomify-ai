export function SectionHeading({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <div className="glass-effect mb-4 inline-flex rounded-full px-4 py-2">
          <span className="text-sm text-violet-300">{badge}</span>
        </div>
      )}

      <h2 className="text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
