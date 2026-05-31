import { NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";
import { getCurrentUser } from "@/lib/get-current-user";
import { connectDB } from "@/lib/mongodb";
import { UploadModel } from "@/models/upload.model";

export async function POST(req: Request) {
  try {
    await connectDB();

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body = await req.json();

    const { image } = body;

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          message: "Image is required",
        },
        {
          status: 400,
        }
      );
    }

    const uploadedImage =
      await cloudinary.uploader.upload(image, {
        folder: "groomify-ai",
      });

    await UploadModel.create({
      userId: currentUser._id,
      images: [uploadedImage.secure_url],
    });

    return NextResponse.json({
      success: true,
      imageUrl: uploadedImage.secure_url,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}