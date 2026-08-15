import Link from "next/link";
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

const downloaderTools = [
  {
    name: "Instagram Video Downloader",
    description:
      "Download eligible publicly accessible Instagram videos and Reels using a simple URL.",
    href: "/tools/instagram-video-downloader",
  },
  {
    name: "Facebook Video Downloader",
    description:
      "Download eligible public Facebook videos using a browser-based URL workflow.",
    href: "/tools/facebook-video-downloader",
  },
  {
    name: "YouTube Video Downloader",
    description:
      "Check YouTube video download availability for content you own or are permitted to save.",
    href: "/tools/youtube-video-downloader",
  },
];

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

          {/* Featured Video Downloaders */}
          <section
            id="video-downloaders"
            className="mt-14"
            aria-labelledby="video-downloaders-heading"
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center">
                <p className="text-sm text-blue-400 font-medium">
                  Featured Tools
                </p>

                <h2
                  id="video-downloaders-heading"
                  className="text-3xl md:text-4xl font-bold mt-2"
                >
                  Video Downloaders
                </h2>

                <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
                  Explore our browser-based video downloader tools for
                  eligible publicly accessible content and content you are
                  authorized to save.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {downloaderTools.map((tool) => (
                  <article
                    key={tool.href}
                    className="rounded-3xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition"
                  >
                    <h3 className="text-xl font-bold">
                      {tool.name}
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">
                      {tool.description}
                    </p>

                    <Link
                      href={tool.href}
                      className="inline-block mt-5 text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Open {tool.name} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* AI Tools Search & Directory */}
          <section id="ai-tools-directory" className="mt-16">
            <ToolSearch />
          </section>

        </div>
      </section>
    </main>
  );
}