import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

interface Cache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: Cache | undefined;
}

globalThis.mongooseCache ??= { conn: null, promise: null };

export async function connectDB() {
  const cached = globalThis.mongooseCache as Cache;

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "groomify-ai",
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      })
      .catch((error) => {
        console.error("[MongoDB] Connection error:", error);
        cached.promise = null;
        cached.conn = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
