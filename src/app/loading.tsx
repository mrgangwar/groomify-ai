export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-violet-400 border-t-transparent" />

        <p className="h-8 w-48 font-medium text-white">
          Loading...
        </p>
      </div>
    </div>
  );
}
