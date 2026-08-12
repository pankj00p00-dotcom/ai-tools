import Navbar from "../components/Navbar";
import ToolSearch from "../components/ToolSearch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Directory – Best AI Tools",
  description:
    "Explore the best AI tools for writing, image generation, video, coding, SEO, marketing, productivity and more. Search and discover AI software in one directory.",
  keywords: [
    "AI tools",
    "AI tools directory",
    "best AI tools",
    "free AI tools",
    "AI software",
    "AI tools list",
    "artificial intelligence tools",
  ],
  alternates: {
    canonical: "https://ai-tools-three-rho.vercel.app/tools",
  },
  openGraph: {
    title: "AI Tools Directory – Best AI Tools",
    description:
      "Explore and discover the best AI tools for writing, images, video, coding, SEO, marketing and productivity.",
    url: "https://ai-tools-three-rho.vercel.app/tools",
    siteName: "AI Tools",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI Tools Directory – Best AI Tools",
    description:
      "Explore the best AI tools for every task in one AI tools directory.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToolsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Tools Directory",
    description:
      "A directory of AI tools for writing, images, video, coding, SEO, marketing and productivity.",
    url: "https://ai-tools-three-rho.vercel.app/tools",
    isPartOf: {
      "@type": "WebSite",
      name: "AI Tools",
      url: "https://ai-tools-three-rho.vercel.app/",
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <section className="px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Page Header */}
          <header className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold">
              Discover the Best AI Tools
            </h1>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              Explore a growing directory of AI tools for writing,
              image generation, video, coding, voice, music, SEO,
              marketing, research and productivity.
            </p>

            <p className="text-gray-500 mt-3">
              Search, filter and compare AI tools by category,
              pricing and rating.
            </p>
          </header>

          {/* AI Tools Search & Directory */}
          <ToolSearch />

        </div>
      </section>
    </main>
  );
}