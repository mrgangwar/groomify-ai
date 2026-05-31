import { FaceShape } from "@/utils/face-shape";

export interface BeardRecommendation {
  name: string;

  image: string;

  description: string;
}

export const beardRecommendations: Record<
  FaceShape,
  BeardRecommendation[]
> = {
  Oval: [
    {
      name: "Short Boxed Beard",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      description:
        "Maintains clean balanced facial proportions.",
    },

    {
      name: "Heavy Stubble",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

      description:
        "Adds masculine texture without overpowering.",
    },
  ],

  Round: [
    {
      name: "Extended Goatee",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004",

      description:
        "Creates longer and slimmer facial appearance.",
    },

    {
      name: "Ducktail Beard",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",

      description:
        "Sharpens the jawline effectively.",
    },
  ],

  Square: [
    {
      name: "Circle Beard",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",

      description:
        "Softens strong angular jawlines naturally.",
    },

    {
      name: "Light Stubble",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598",

      description:
        "Keeps structure while reducing harshness.",
    },
  ],

  Heart: [
    {
      name: "Full Beard",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      description:
        "Adds volume around the lower face.",
    },

    {
      name: "Balbo Beard",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",

      description:
        "Balances forehead-heavy proportions.",
    },
  ],

  Diamond: [
    {
      name: "Classic Full Beard",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004",

      description:
        "Adds width around the jawline elegantly.",
    },

    {
      name: "Medium Stubble",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",

      description:
        "Balances cheekbone prominence subtly.",
    },
  ],

  Oblong: [
    {
      name: "Rounded Beard",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598",

      description:
        "Makes the face appear wider and shorter.",
    },

    {
      name: "Full Beard",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      description:
        "Adds balanced facial fullness.",
    },
  ],
};