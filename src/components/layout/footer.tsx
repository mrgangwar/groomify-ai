import Link from "next/link";

import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-xl font-bold">
              Groomify <span className="text-violet-400">AI</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              AI-powered grooming recommendations.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}