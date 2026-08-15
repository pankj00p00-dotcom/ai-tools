import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "AI Tools Blog – Video Downloader Guides & Tips",
  description:
    "Read practical guides about Instagram, Facebook and YouTube video downloads, Reels, Android, iPhone and useful online tools.",
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
      "Practical guides for Instagram, Facebook and YouTube video downloads, Reels, Android, iPhone and more.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Blog – Video Downloader Guides & Tips",
    description:
      "Practical guides for Instagram, Facebook and YouTube video downloads, Reels, Android, iPhone and more.",
  },
};

const articleGroups = [
  {
    platform: "Instagram",
    description:
      "Guides for saving eligible Instagram videos and Reels on different devices.",
    articles: [
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
    ],
    toolHref: "/tools/instagram-video-downloader",
    toolLabel: "Instagram Video Downloader",
  },

  {
    platform: "Facebook",
    description:
      "Practical guides for saving eligible Facebook videos on desktop, iPhone and Android.",
    articles: [
      {
        title: "How to Download Facebook Videos",
        description:
          "Learn how to save eligible public Facebook videos using simple browser-based methods.",
        href: "/blog/how-to-download-facebook-videos",
        label: "Facebook Videos",
      },
      {
        title: "How to Save Facebook Videos on iPhone",
        description:
          "Learn practical ways to save Facebook videos on iPhone using built-in options and eligible URL-based downloads.",
        href: "/blog/how-to-save-facebook-videos-on-iphone",
        label: "Facebook on iPhone",
      },
      {
        title: "How to Save Facebook Videos on Android",
        description:
          "Learn practical ways to save Facebook videos on Android and locate downloaded files.",
        href: "/blog/how-to-save-facebook-videos-on-android",
        label: "Facebook on Android",
      },
    ],
    toolHref: "/tools/facebook-video-downloader",
    toolLabel: "Facebook Video Downloader",
  },

  {
    platform: "YouTube",
    description:
      "Guides covering permitted ways to save YouTube videos and content you own or are authorized to use.",
    articles: [
      {
        title: "How to Download YouTube Videos",
        description:
          "Learn permitted ways to save YouTube videos, including official options and videos you own.",
        href: "/blog/how-to-download-youtube-videos",
        label: "YouTube Videos",
      },
      {
        title: "How to Save YouTube Videos on iPhone",
        description:
          "Learn permitted ways to save YouTube videos on iPhone using supported offline options and authorized methods.",
        href: "/blog/how-to-save-youtube-videos-on-iphone",
        label: "YouTube on iPhone",
      },
      {
        title: "How to Save YouTube Videos on Android",
        description:
          "Learn permitted ways to save YouTube videos on Android using supported offline features and authorized methods.",
        href: "/blog/how-to-save-youtube-videos-on-android",
        label: "YouTube on Android",
      },
    ],
    toolHref: "/tools/youtube-video-downloader",
    toolLabel: "YouTube Video Downloader",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
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

        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-sm text-blue-400 font-medium">
            AI Tools Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Helpful Guides for AI Tools and Video Downloads
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mt-5">
            Practical how-to guides covering Instagram, Facebook and YouTube
            videos, mobile downloads, Reels and useful online tools.
          </p>
        </header>

        {/* Platform Clusters */}
        <div className="mt-14 space-y-16">
          {articleGroups.map((group) => (
            <section
              key={group.platform}
              aria-labelledby={`${group.platform.toLowerCase()}-guides`}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-sm text-blue-400 font-medium">
                    {group.platform} Guides
                  </p>

                  <h2
                    id={`${group.platform.toLowerCase()}-guides`}
                    className="text-3xl md:text-4xl font-bold mt-2"
                  >
                    {group.platform} Video Guides
                  </h2>

                  <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <Link
                  href={group.toolHref}
                  className="text-blue-400 hover:text-blue-300 font-medium whitespace-nowrap"
                >
                  {group.toolLabel} →
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {group.articles.map((article) => (
                  <article
                    key={article.href}
                    className="rounded-3xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition"
                  >
                    <p className="text-sm text-blue-400">
                      {article.label}
                    </p>

                    <h3 className="text-2xl font-bold mt-3">
                      {article.title}
                    </h3>

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
          ))}
        </div>

        {/* Main Blog CTA */}
        <section className="mt-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-7">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore Our Video Downloader Tools
          </h2>

          <p className="text-gray-300 mt-3 leading-relaxed">
            Use our browser-based downloader tools for eligible publicly
            accessible content or content you own or have permission to save.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/tools/instagram-video-downloader"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              Instagram Downloader
            </Link>

            <Link
              href="/tools/facebook-video-downloader"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              Facebook Downloader
            </Link>

            <Link
              href="/tools/youtube-video-downloader"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              YouTube Downloader
            </Link>
          </div>
        </section>

        {/* More AI Tools */}
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