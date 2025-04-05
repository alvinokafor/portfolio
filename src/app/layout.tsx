import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinedu Alvin Okafor | Software Engineer & Music Producer",
  description:
    "Software Engineer with 3+ years of experience building impactful consumer products. Specializing in React, Next.js, TypeScript, and more.",
  keywords: [
    "Software Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Music Producer",
  ],
  authors: [{ name: "Chinedu Alvin Okafor" }],
  creator: "Chinedu Alvin Okafor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.alvinokafor.xyz",
    title: "Chinedu Alvin Okafor | Software Engineer & Music Producer",
    description:
      "Software Engineer with 3+ years of experience building impactful consumer products.",
    siteName: "Chinedu Alvin Okafor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinedu Alvin Okafor | Software Engineer",
    description:
      "Software Engineer with 3+ years of experience building impactful consumer products.",
    creator: "@retrosearth",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
