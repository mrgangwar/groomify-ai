import mongoose, { Schema, models, model } from "mongoose";

export interface IUpload {
  userId: mongoose.Types.ObjectId;

  images: string[];

  createdAt: Date;
}

const UploadSchema = new Schema<IUpload>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UploadModel =
  models.Upload || model<IUpload>("Upload", UploadSchema);