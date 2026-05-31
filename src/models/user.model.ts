import { Schema, models, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  image?: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel =
  models.User || model<IUser>("User", UserSchema);