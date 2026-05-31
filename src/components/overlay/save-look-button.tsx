"use client";

import { Loader2, Save } from "lucide-react";

interface SaveLookButtonProps {
  onSave: () => void;

  loading: boolean;
}

export function SaveLookButton({
  onSave,
  loading,
}: SaveLookButtonProps) {
  return (
    <button
      onClick={onSave}
      disabled={loading}
      className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
    >
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Save className="h-5 w-5" />
      )}

      Save Look
    </button>
  );
}