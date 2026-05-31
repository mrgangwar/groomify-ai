"use client";

import Image from "next/image";

import axios from "axios";

import toast from "react-hot-toast";

import { useState } from "react";

import { Trash2 } from "lucide-react";

interface LookCardProps {
  id: string;

  image: string;

  title: string;
}

export function LookCard({
  id,
  image,
  title,
}: LookCardProps) {
  const [loading, setLoading] = useState(false);

  const deleteLook =
    async () => {
      try {
        setLoading(true);

        await axios.delete(
          "/api/look/delete",
          {
            data: { id },
          }
        );

        toast.success("Look deleted");
      } catch {
        toast.error("Delete failed");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="glass-effect overflow-hidden rounded-[2rem] border border-white/10">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-80 w-full object-cover"
        />

        <button
          onClick={deleteLook}
          disabled={loading}
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/80 text-white backdrop-blur-xl transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Trash2 className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold capitalize">
          {title
            .split("/")
            .pop()
            ?.replace(".png", "")}
        </h3>
      </div>
    </div>
  );
}