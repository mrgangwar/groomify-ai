import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

import { LookCard } from "@/components/dashboard/look-card";

const mockLooks = [
  {
    id: "1",

    title: "Textured Quiff",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },

  {
    id: "2",

    title: "Modern Pompadour",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },

  {
    id: "3",

    title: "Sharp Fade",

    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004",
  },
];

export default async function DashboardPage() {
  const session =
    await getServerSession(authOptions);

  return (
    <DashboardLayout>
      <div>
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-5xl font-bold">
              Welcome back,
            </h1>

            <p className="mt-3 text-2xl text-violet-400">
              {session?.user?.name}
            </p>
          </div>

          <div className="glass-effect rounded-3xl border border-white/10 px-6 py-4">
            <p className="text-sm text-slate-400">
              Total Saved Looks
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {mockLooks.length}
            </h2>
          </div>
        </div>

        {/* SAVED LOOKS */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Recent Looks
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mockLooks.map((look) => (
              <LookCard
                key={look.id}
                id={look.id}
                image={look.image}
                title={look.title}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}