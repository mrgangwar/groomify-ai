import { FaceShape } from "@/utils/face-shape";

export interface HairstyleRecommendation {
  name: string;

  image: string;

  description: string;
}

export const hairstyleRecommendations: Record<
  FaceShape,
  HairstyleRecommendation[]
> = {
  Oval: [
    {
      name: "Textured Quiff",
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186",

      description:
        "Perfect balanced look for oval face shapes.",
    },

    {
      name: "Pompadour",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      description:
        "Adds stylish volume without widening the face.",
    },
  ],

  Round: [
    {
      name: "High Fade",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004",

      description:
        "Creates sharper facial definition.",
    },

    {
      name: "Undercut",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",

      description:
        "Adds height and elongates round faces.",
    },
  ],

  Square: [
    {
      name: "Side Part",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

      description:
        "Softens strong jawlines beautifully.",
    },

    {
      name: "Classic Taper",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      description:
        "Maintains masculine proportions elegantly.",
    },
  ],

  Heart: [
    {
      name: "Medium Fringe",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",

      description:
        "Balances wider foreheads naturally.",
    },

    {
      name: "Layered Flow",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598",

      description:
        "Adds lower-face balance and texture.",
    },
  ],

  Diamond: [
    {
      name: "Textured Crop",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      description:
        "Enhances cheekbones without excess width.",
    },

    {
      name: "Messy Volume",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",

      description:
        "Creates balanced proportions beautifully.",
    },
  ],

  Oblong: [
    {
      name: "Curtains Hairstyle",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

      description:
        "Reduces long-face appearance naturally.",
    },

    {
      name: "French Crop",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004",

      description:
        "Keeps proportions compact and stylish.",
    },
  ],
};