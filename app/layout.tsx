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
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "AI Tools - Discover the Best AI Tools",
    template: "%s | AI Tools",
  },

  description:
    "Discover the best AI tools for writing, images, video, coding, SEO, marketing, productivity and more.",

  keywords: [
    "AI tools",
    "best AI tools",
    "AI tools directory",
    "free AI tools",
    "artificial intelligence tools",
  ],

  openGraph: {
    title: "AI Tools - Discover the Best AI Tools",
    description:
      "Explore the best AI tools for writing, images, video, coding, SEO, marketing and productivity.",
    type: "website",
    siteName: "AI Tools",
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