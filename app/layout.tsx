import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-tools-three-rho.vercel.app"),

  title: {
    default: "AI Tools – Discover the Best AI Tools",
    template: "%s | AI Tools",
  },

  description:
    "Discover the best AI tools for writing, images, video, coding, SEO, marketing, productivity and more.",

  keywords: [
    "AI tools",
    "best AI tools",
    "AI tools directory",
    "free AI tools",
    "AI software",
    "artificial intelligence tools",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Tools – Discover the Best AI Tools",
    description:
      "Explore the best AI tools for writing, images, video, coding, SEO, marketing and productivity.",
    url: "https://ai-tools-three-rho.vercel.app",
    siteName: "AI Tools",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Tools – Discover the Best AI Tools",
    description:
      "Explore the best AI tools for writing, images, video, coding, SEO, marketing and productivity.",
  },

  alternates: {
    canonical: "https://ai-tools-three-rho.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}