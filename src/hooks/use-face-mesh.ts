"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export function useFaceMesh() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(
    null
  );

  const [landmarks, setLandmarks] = useState<any[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!videoRef.current || cancelled) return;

      await loadScript(
        "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"
      );

      const FaceMeshCtor = (window as unknown as {
        FaceMesh?: new (opts: {
          locateFile: (file: string) => string;
        }) => any;
      }).FaceMesh;

      if (!FaceMeshCtor) {
        console.error("FaceMesh not available");

        return;
      }

      const faceMesh: any = new FaceMeshCtor({
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      faceMesh.onResults((results: any) => {
        if (
          !cancelled &&
          results.multiFaceLandmarks &&
          results.multiFaceLandmarks.length > 0
        ) {
          setLandmarks(
            results.multiFaceLandmarks[0]
          );
        }
      });

      if (!videoRef.current || cancelled)
        return;

      const stream = await navigator.mediaDevices.getUserMedia(
        {
          video: true,
        }
      );

      videoRef.current.srcObject = stream;

      await new Promise<void>((resolve) => {
        if (!videoRef.current) {
          resolve();
          return;
        }

        const onReady = async () => {
          if (videoRef.current) {
            await videoRef.current.play();
          }
          resolve();
        };

        videoRef.current.onloadedmetadata = onReady;
      });

      if (!videoRef.current) return;

      while (!cancelled) {
        try {
          await faceMesh.send({
            image: videoRef.current,
          });
        } catch {
          if (cancelled) return;

          await new Promise((resolve) =>
            requestAnimationFrame(resolve)
          );

          continue;
        }

        if (cancelled) return;

        await new Promise((resolve) =>
          requestAnimationFrame(resolve)
        );
      }
    }

    init();

    return () => {
      cancelled = true;

      const stream =
        videoRef.current?.srcObject as
          | MediaStream
          | undefined;

      if (stream) {
        stream.getTracks().forEach((track) =>
          track.stop()
        );
      }

      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  return {
    videoRef,
    canvasRef,
    landmarks,
  };
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load script: ${src}`));

    document.body.appendChild(script);
  });
}
