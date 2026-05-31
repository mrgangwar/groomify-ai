import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24">
      <Container>
        <div className="glass-effect relative overflow-hidden rounded-[2rem] p-10 md:p-16">
          <div className="absolute inset-0 bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to Transform Your Style?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Upload your photos and discover the perfect hairstyle
              and beard style powered by AI.
            </p>

            <div className="mt-10">
              <Button className="px-8 py-6 text-base">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}