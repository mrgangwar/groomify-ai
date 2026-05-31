import { CTASection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <CTASection />

      <Footer />
    </main>
  );
}