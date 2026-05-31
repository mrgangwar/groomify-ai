import {
  Schema,
  models,
  model,
} from "mongoose";

const LookSchema = new Schema(
  {
    userId: {
      type: String,

      required: true,
    },

    image: {
      type: String,

      required: true,
    },

    faceShape: {
      type: String,

      required: true,
    },

    hairstyle: {
      type: String,

      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Look =
  models.Look || model("Look", LookSchema);