"use client";

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { BeardResults } from "@/components/recommendations/beard-results";

import { RecommendationResults } from "@/components/recommendations/recommendation-results";

import { HairstyleSelector } from "@/components/overlay/hairstyle-selector";

import { DownloadButton } from "@/components/overlay/download-button";

import { SaveLookButton } from "@/components/overlay/save-look-button";

import { useFaceMesh } from "@/hooks/use-face-mesh";

import { detectFaceShape } from "@/utils/face-shape";

export function FaceMeshViewer() {
  const { videoRef, canvasRef, landmarks } =
    useFaceMesh();

  const [activeTab, setActiveTab] =
    useState("all");

  const [selectedHairstyle, setSelectedHairstyle] =
    useState("/hairstyles/quiff.png");

  const [saving, setSaving] =
    useState(false);

  const faceShape = useMemo(() => {
    if (!landmarks || landmarks.length === 0) {
      return "Scanning...";
    }

    return detectFaceShape(landmarks);
  }, [landmarks]);

  // DOWNLOAD LOOK
  const downloadLook = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const image =
      canvas.toDataURL("image/png");

    const link =
      document.createElement("a");

    link.href = image;

    link.download =
      "groomify-ai-look.png";

    link.click();
  };

  // SAVE LOOK
  const saveLook = async () => {
    try {
      setSaving(true);

      const canvas = canvasRef.current;

      if (!canvas) return;

      const image =
        canvas.toDataURL("image/png");

      await axios.post(
        "/api/look/save",
        {
          image,

          faceShape,

          hairstyle:
            selectedHairstyle,
        }
      );

      toast.success(
        "Look saved successfully"
      );
    } catch {
      toast.error(
        "Failed to save look"
      );
    } finally {
      setSaving(false);
    }
  };

  // FACE MESH + OVERLAY
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || landmarks.length === 0)
      return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    ctx.imageSmoothingQuality = "high";

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.fillStyle = "#8b5cf6";

    // DRAW LANDMARKS
    landmarks.forEach((landmark) => {
      const x =
        landmark.x * canvas.width;

      const y =
        landmark.y * canvas.height;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        1.5,
        0,
        2 * Math.PI
      );

      ctx.fill();
    });

    // =========================
    // HAIRSTYLE OVERLAY
    // =========================

    const forehead = landmarks[10];

    const leftTemple = landmarks[127];

    const rightTemple = landmarks[356];

    if (
      forehead &&
      leftTemple &&
      rightTemple &&
      selectedHairstyle
    ) {
      const hair = new window.Image();

      hair.src = selectedHairstyle;

      hair.onload = () => {
        // FACE WIDTH
        const faceWidth =
          Math.abs(
            rightTemple.x -
              leftTemple.x
          ) * canvas.width;

        // DYNAMIC SIZE
        const hairWidth =
          faceWidth * 2;

        const hairHeight =
          hairWidth;

        // POSITION
        const x =
          forehead.x * canvas.width -
          hairWidth / 2;

        const y =
          forehead.y *
            canvas.height -
          hairHeight * 0.9;

        ctx.drawImage(
          hair,
          x,
          y,
          hairWidth,
          hairHeight
        );
      };
    }
  }, [
    landmarks,
    canvasRef,
    selectedHairstyle,
  ]);

  return (
    <div className="space-y-8">
      {/* CAMERA VIEWER */}
      <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-violet-500/10">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        />

        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* FACE SHAPE */}
        <div className="absolute bottom-4 left-4 z-10 rounded-2xl border border-violet-500/30 bg-black/70 px-5 py-3 backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-400">
            Detected Face Shape
          </p>

          <h2 className="text-2xl font-bold capitalize tracking-wide text-violet-400">
            {faceShape}
          </h2>
        </div>
      </div>

      {/* RESULTS */}
      {faceShape !== "Scanning..." && (
        <div className="mx-auto w-full max-w-5xl space-y-6">
          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            <DownloadButton
              onDownload={
                downloadLook
              }
            />

            <SaveLookButton
              onSave={saveLook}
              loading={saving}
            />
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-4">
            {[
              {
                id: "all",
                label: "Show All",
              },

              {
                id: "hairstyle",
                label: "Hairstyles",
              },

              {
                id: "beard",
                label: "Beard Styles",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* HAIRSTYLES */}
          {(activeTab === "all" ||
            activeTab ===
              "hairstyle") && (
            <div className="space-y-8">
              <RecommendationResults
                faceShape={faceShape}
              />

              <HairstyleSelector
                selected={
                  selectedHairstyle
                }
                onSelect={
                  setSelectedHairstyle
                }
              />
            </div>
          )}

          {/* BEARDS */}
          {(activeTab === "all" ||
            activeTab ===
              "beard") && (
            <BeardResults
              faceShape={faceShape}
            />
          )}
        </div>
      )}
    </div>
  );
}