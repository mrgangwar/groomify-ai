import { beardRecommendations } from "@/data/beards";

import { FaceShape } from "@/utils/face-shape";

import { BeardCard } from "./beard-card";

interface BeardResultsProps {
  faceShape: FaceShape;
}

export function BeardResults({
  faceShape,
}: BeardResultsProps) {
  const recommendations =
    beardRecommendations[faceShape];

  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Recommended Beard Styles
        </h2>

        <p className="mt-3 text-slate-400">
          AI beard styles designed for your{" "}
          <span className="text-violet-400">
            {faceShape}
          </span>{" "}
          face shape.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((beard) => (
          <BeardCard
            key={beard.name}
            beard={beard}
          />
        ))}
      </div>
    </section>
  );
}