import Image from "next/image";

import { BeardRecommendation } from "@/data/beards";

interface BeardCardProps {
  beard: BeardRecommendation;
}

export function BeardCard({
  beard,
}: BeardCardProps) {
  return (
    <div className="glass-effect overflow-hidden rounded-[2rem] border border-white/10">
      <div className="relative h-72 w-full">
        <Image
          src={beard.image}
          alt={beard.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {beard.name}
        </h3>

        <p className="mt-3 text-slate-400">
          {beard.description}
        </p>
      </div>
    </div>
  );
}