import Image from "next/image";

import { HairstyleRecommendation } from "@/data/hairstyles";

interface RecommendationCardProps {
  hairstyle: HairstyleRecommendation;
}

export function RecommendationCard({
  hairstyle,
}: RecommendationCardProps) {
  return (
    <div className="glass-effect overflow-hidden rounded-[2rem] border border-white/10">
      <div className="relative h-72 w-full">
        <Image
          src={hairstyle.image}
          alt={hairstyle.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {hairstyle.name}
        </h3>

        <p className="mt-3 text-slate-400">
          {hairstyle.description}
        </p>
      </div>
    </div>
  );
}