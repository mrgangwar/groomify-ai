import type { Metadata } from "next";

import { Inter, Space_Grotesk } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/providers/session-provider";

import "./globals.css";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default:
      "Groomify AI - AI-Powered Hairstyle & Beard Recommendations",
    template: "%s | Groomify AI",
  },

  description:
    "Upload your photos and let AI analyze your face shape to recommend hairstyles and beard styles tailored just for you.",

  keywords: [
    "AI hairstyle",
    "AI beard",
    "face shape detection",
    "AI grooming",
    "virtual hairstyle try on",
  ],

  authors: [{ name: "Groomify AI" }],

  openGraph: {
    title: "Groomify AI",
    description:
      "AI-powered hairstyle and beard recommendation platform",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* BACKGROUND GRADIENT */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at top, rgba(124,58,237,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 30%), #050816",
          }}
        />

        {/* TOAST NOTIFICATIONS */}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "glass-effect text-white",
          }}
        />

        {/* APP WRAPPER */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}