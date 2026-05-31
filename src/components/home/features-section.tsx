"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Sparkles,
  ScanFace,
  Download,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const features = [
  {
    icon: Camera,
    title: "Upload Your Photos",
    description:
      "Upload multiple face angles for accurate AI analysis.",
  },
  {
    icon: ScanFace,
    title: "AI Face Detection",
    description:
      "Advanced AI maps facial structure and proportions.",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description:
      "Get hairstyle and beard suggestions tailored to your face.",
  },
  {
    icon: Download,
    title: "Download Final Looks",
    description:
      "Save and share your AI-generated grooming styles instantly.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24"
    >
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything You Need For AI Grooming"
          description="Experience next-generation grooming recommendations powered by artificial intelligence."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
                  <Icon className="h-7 w-7 text-violet-400" />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}