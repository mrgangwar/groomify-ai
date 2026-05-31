import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

import { connectDB } from "@/lib/mongodb";

import { Look } from "@/models/look";

export async function POST(
  request: Request
) {
  try {
    const session =
      await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },

        {
          status: 401,
        }
      );
    }

    await connectDB();

    const body = await request.json();

    const look = await Look.create({
      userId: session.user.email,

      image: body.image,

      faceShape: body.faceShape,

      hairstyle: body.hairstyle,
    });

    return NextResponse.json(look);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to save look",
      },

      {
        status: 500,
      }
    );
  }
}