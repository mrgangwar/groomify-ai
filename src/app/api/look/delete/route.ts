import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

import { connectDB } from "@/lib/mongodb";

import { Look } from "@/models/look";

export async function DELETE(
  request: Request
) {
  try {
    const session =
      await getServerSession(
        authOptions
      );

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

    const { id } =
      await request.json();

    await connectDB();

    await Look.findOneAndDelete({
      _id: id,

      userId:
        session.user.email,
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Failed to delete look",
      },
      {
        status: 500,
      }
    );
  }
}