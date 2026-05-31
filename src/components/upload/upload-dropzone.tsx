"use client";

import Image from "next/image";
import { useState } from "react";

import axios from "axios";
import { UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

import { Container } from "@/components/shared/container";

export function UploadDropzone() {
  const [uploading, setUploading] = useState(false);

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const onDrop = async (acceptedFiles: File[]) => {
    try {
      setUploading(true);

      const uploadedUrls: string[] = [];

      for (const file of acceptedFiles) {
        const base64 = await convertToBase64(file);

        const response = await axios.post("/api/upload", {
          image: base64,
        });

        uploadedUrls.push(response.data.imageUrl);
      }

      setUploadedImages(uploadedUrls);

      toast.success("Images uploaded successfully");
    } catch {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    maxFiles: 4,
    onDrop,
  });

  return (
    <section className="py-24">
      <Container>
        <div
          {...getRootProps()}
          className="glass-effect cursor-pointer rounded-[2rem] border border-dashed border-white/20 p-16 text-center transition hover:border-violet-500/50"
        >
          <input {...getInputProps()} />

          {uploading ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="h-14 w-14 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
              <p className="text-slate-300">
                Processing your face images...
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">
                <UploadCloud className="h-10 w-10 text-violet-400" />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                Upload Face Photos
              </h2>

              <p className="mt-4 max-w-xl text-slate-400">
                Drag & drop your images here or click to browse. Upload up to 4 images from different angles.
              </p>
            </div>
          )}
        </div>

        {uploadedImages.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {uploadedImages.map((image) => (
              <div
                key={image}
                className="glass-effect overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt="Uploaded"
                  width={400}
                  height={400}
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

// Convert file → base64
function convertToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}