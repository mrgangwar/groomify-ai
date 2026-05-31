"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { GoogleLoginButton } from "@/components/auth/google-login-button";
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-effect mb-6 inline-flex rounded-full px-4 py-2">
              <span className="text-sm text-violet-300">
                AI-Powered Grooming Experience
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Discover Your Perfect{" "}
              <span className="text-gradient">
                Hairstyle & Beard Style
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Upload your photos and let AI analyze your face shape
              to recommend hairstyles and beard styles tailored just
              for you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoogleLoginButton />

              <Button
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
    </section>
  );
}