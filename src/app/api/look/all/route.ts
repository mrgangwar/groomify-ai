import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

import { connectDB } from "@/lib/mongodb";

import { Look } from "@/models/look";

export async function GET() {
  try {
    const session =
      await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        [],
        {
          status: 401,
        }
      );
    }

    await connectDB();

    const looks = await Look.find({
      userId: session.user.email,
    }).sort({
      createdAt: -1,
    });

    return NextResponse.json(looks);
  } catch {
    return NextResponse.json(
      [],
      {
        status: 500,
      }
    );
  }
}