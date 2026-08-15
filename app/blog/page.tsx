import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "AI Tools Blog – Video Downloader Guides & Tips",
  description:
    "Read practical guides about Instagram video downloads, Reels, Android, iPhone and other useful AI and online tool topics.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI Tools Blog – Video Downloader Guides & Tips",
    description:
      "Practical guides for Instagram video downloads, Reels, Android, iPhone and more.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Blog – Video Downloader Guides & Tips",
    description:
      "Practical guides for Instagram video downloads, Reels, Android, iPhone and more.",
  },
};

const articles = [
  {
    title: "How to Download Instagram Reels",
    description:
      "Learn simple ways to save publicly accessible Instagram Reels on Android, iPhone and desktop.",
    href: "/blog/how-to-download-instagram-reels",
    label: "Instagram Reels",
  },
  {
    title: "How to Save Instagram Videos on iPhone",
    description:
      "Learn how to save Instagram videos and Reels on iPhone using built-in options and eligible URL-based downloads.",
    href: "/blog/how-to-save-instagram-videos-on-iphone",
    label: "Instagram on iPhone",
  },
  {
    title: "How to Save Instagram Videos on Android",
    description:
      "Learn how to save Instagram videos and Reels on Android with simple, practical methods.",
    href: "/blog/how-to-save-instagram-videos-on-android",
    label: "Instagram on Android",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-500 mb-8"
        >
          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-400">
            Blog
          </span>
        </nav>

        <header className="max-w-3xl">
          <p className="text-sm text-blue-400 font-medium">
            AI Tools Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Helpful Guides for AI Tools and Video Downloads
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mt-5">
            Practical how-to guides covering Instagram videos, Reels,
            mobile downloads and useful online tools.
          </p>
        </header>

        <section className="mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.href}
                className="rounded-3xl border border-gray-800 bg-gray-900 p-6"
              >
                <p className="text-sm text-blue-400">
                  {article.label}
                </p>

                <h2 className="text-2xl font-bold mt-3">
                  {article.title}
                </h2>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="inline-block mt-6 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Read Guide →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-7">
          <h2 className="text-2xl md:text-3xl font-bold">
            Instagram Video Downloader
          </h2>

          <p className="text-gray-300 mt-3 leading-relaxed">
            Need to process an eligible public Instagram video or Reel?
            Use our browser-based Instagram Video Downloader.
          </p>

          <Link
            href="/tools/instagram-video-downloader"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
          >
            Open Instagram Video Downloader →
          </Link>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            More AI Tools
          </h2>

          <p className="text-gray-400 mt-3">
            Explore the full AI tools directory for writing, images,
            video, coding, SEO and productivity.
          </p>

          <Link
            href="/tools"
            className="inline-block mt-5 text-blue-400 hover:text-blue-300"
          >
            Browse All AI Tools →
          </Link>
        </section>
      </div>
    </main>
  );
}