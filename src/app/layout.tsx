import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rare Earth Elements Index",
  description:
    "The 17 rare earth minerals and metals crucial for the AI buildout",
  openGraph: {
    title: "Rare Earth Elements Index",
    description:
      "The 17 rare earth minerals and metals crucial for the AI buildout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Earth Elements Index",
    description:
      "The 17 rare earth minerals and metals crucial for the AI buildout",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
