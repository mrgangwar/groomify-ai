"use client";

import Image from "next/image";

import { overlayHairstyles } from "@/data/overlay-hairstyles";

interface HairstyleSelectorProps {
  selected: string;

  onSelect: (image: string) => void;
}

export function HairstyleSelector({
  selected,
  onSelect,
}: HairstyleSelectorProps) {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        Choose Hairstyle
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {overlayHairstyles.map((style) => (
          <button
            key={style.id}
            onClick={() =>
              onSelect(style.image)
            }
            className={`glass-effect overflow-hidden rounded-3xl border p-4 transition ${
              selected === style.image
                ? "border-violet-500"
                : "border-white/10"
            }`}
          >
            <div className="relative h-40 w-full">
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-4 font-medium">
              {style.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}