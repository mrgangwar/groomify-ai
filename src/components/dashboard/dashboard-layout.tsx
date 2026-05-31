"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Sparkles,
  User,
  Heart,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },

  {
    label: "Saved Looks",
    icon: Sparkles,
    href: "/dashboard/saved",
  },

  {
    label: "Favorites",
    icon: Heart,
    href: "/dashboard/favorites",
  },

  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
];

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* SIDEBAR */}
      <aside className="hidden w-72 border-r border-white/10 bg-black/40 p-6 backdrop-blur-xl lg:block">
        <div>
          <h2 className="text-3xl font-bold text-violet-400">
            Groomify AI
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            AI Grooming Dashboard
          </p>
        </div>

        <nav className="mt-12 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-5 w-5" />

                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6 lg:p-10">
        {children}
      </main>
    </div>
  );
}