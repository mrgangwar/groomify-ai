import { FaceMeshViewer } from "@/components/ai/face-mesh-viewer";

export default function AIDemoPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">
            AI Face Detection
          </h1>

          <p className="mt-4 text-slate-400">
            Real-time face landmark tracking using
            MediaPipe Face Mesh.
          </p>
        </div>

        <FaceMeshViewer />
      </div>
    </main>
  );
}