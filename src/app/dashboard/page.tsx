import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";

import { connectDB } from "@/lib/mongodb";

import { Look } from "@/models/look";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

import { LookCard } from "@/components/dashboard/look-card";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/");
  }

  await connectDB();

  const looks = await Look.find({
    userId: session.user.email,
  }).sort({
    createdAt: -1,
  });

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
              {session.user.name}
            </p>
          </div>

          <div className="glass-effect rounded-3xl border border-white/10 px-6 py-4">
            <p className="text-sm text-slate-400">
              Total Saved Looks
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {looks.length}
            </h2>
          </div>
        </div>

        {/* SAVED LOOKS */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Saved Looks
          </h2>

          {looks.length === 0 ? (
            <div className="glass-effect rounded-[2rem] border border-white/10 p-16 text-center">
              <h3 className="text-3xl font-bold">
                No saved looks yet
              </h3>

              <p className="mt-4 text-slate-400">
                Generate and save your first AI hairstyle look.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {looks.map((look) => (
                <LookCard
                  key={look._id.toString()}
                  id={look._id.toString()}
                  image={look.image}
                  title={look.hairstyle}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}