import { hairstyleRecommendations } from "@/data/hairstyles";

import { FaceShape } from "@/utils/face-shape";

import { RecommendationCard } from "./recommendation-card";

interface RecommendationResultsProps {
  faceShape: FaceShape;
}

export function RecommendationResults({
  faceShape,
}: RecommendationResultsProps) {
  const recommendations =
    hairstyleRecommendations[faceShape];

  return (
    <section className="mt-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Recommended Hairstyles
        </h2>

        <p className="mt-3 text-slate-400">
          AI-selected hairstyles for your{" "}
          <span className="text-violet-400">
            {faceShape}
          </span>{" "}
          face shape.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((hairstyle) => (
          <RecommendationCard
            key={hairstyle.name}
            hairstyle={hairstyle}
          />
        ))}
      </div>
    </section>
  );
}