"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  onDownload: () => void;
}

export function DownloadButton({
  onDownload,
}: DownloadButtonProps) {
  return (
    <button
      onClick={onDownload}
      className="flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
    >
      <Download className="h-5 w-5" />

      Download Look
    </button>
  );
}