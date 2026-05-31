import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { UserModel } from "@/models/user.model";

export async function getCurrentUser() {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  let user = await UserModel.findOne({
    email: session.user.email,
  });

  if (!user) {
    user = await UserModel.create({
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    });
  }

  return user;
}