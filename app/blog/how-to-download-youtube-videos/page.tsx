import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog/how-to-download-youtube-videos`;

export const metadata: Metadata = {
  title: "How to Download YouTube Videos – Complete Guide",
  description:
    "Learn about permitted ways to save YouTube videos, including official YouTube options and practical guidance for videos you own or have permission to download.",
  keywords: [
    "how to download YouTube videos",
    "download YouTube videos",
    "save YouTube videos",
    "YouTube video downloader",
    "how to save YouTube videos",
    "download YouTube videos legally",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Download YouTube Videos – Complete Guide",
    description:
      "A practical guide to permitted ways of saving YouTube videos and downloading content you own or are allowed to use.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Download YouTube Videos – Complete Guide",
    description:
      "Learn practical and permitted ways to save YouTube videos.",
  },
};

const faqItems = [
  {
    question: "Can I download any YouTube video?",
    answer:
      "Not necessarily. Download availability depends on the video's permissions, accessibility, applicable YouTube features and your right to save the content.",
  },
  {
    question: "What is the safest way to save a YouTube video?",
    answer:
      "Use YouTube's own available offline or download features where applicable, or download content that you own or are explicitly permitted to save.",
  },
  {
    question: "Can I download my own YouTube videos?",
    answer:
      "Yes. Creators can access and download their own uploaded content through the tools and account features provided by YouTube.",
  },
  {
    question: "Why might a YouTube download fail?",
    answer:
      "A download can fail because content is restricted, private, unavailable, unsupported, or because the platform has changed how the media is delivered.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Download YouTube Videos – Complete Guide",
  description:
    "A practical guide to permitted ways of saving YouTube videos.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Organization",
    name: "AI Tools",
  },
  publisher: {
    "@type": "Organization",
    name: "AI Tools",
  },
  url: PAGE_URL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE_URL}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Download YouTube Videos",
      item: PAGE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HowToDownloadYouTubeVideosPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

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

          <Link
            href="/blog"
            className="hover:text-white transition"
          >
            Blog
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-400">
            How to Download YouTube Videos
          </span>
        </nav>

        <article>
          <header>
            <p className="text-sm text-blue-400 font-medium">
              YouTube Video Guide
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              How to Download YouTube Videos
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Looking for ways to save a YouTube video? This guide explains
              official YouTube options and practical approaches for videos
              that you own or have permission to download.
            </p>
          </header>

          {/* Tool CTA */}
          <section className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-bold">
              YouTube Video Downloader
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Our YouTube downloader page is available for eligible content,
              but download availability can depend on the video and current
              platform restrictions.
            </p>

            <Link
              href="/tools/youtube-video-downloader"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Open YouTube Video Downloader →
            </Link>
          </section>

          {/* Official options */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              1. Use YouTube's Available Download or Offline Features
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Depending on the video, account and YouTube features available
              to you, YouTube may provide its own options for offline viewing.
              These features are generally the safest way to access supported
              content without creating an external video file.
            </p>
          </section>

          {/* Own videos */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              2. Download Videos You Own
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              If you uploaded a video yourself, use the creator and account
              tools provided by YouTube to access your own content. Keeping a
              local backup of videos you own is useful for archiving and
              editing.
            </p>
          </section>

          {/* Eligible content */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              3. Download Content You Have Permission to Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              In some situations, a creator may give you permission to save
              or reuse a video. Make sure that your intended use is actually
              allowed before downloading or republishing the content.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A public video is not automatically free of copyright
              restrictions. Permission and applicable platform rules still
              matter.
            </p>
          </section>

          {/* Mobile */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Saving YouTube Videos on a Phone
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              On Android or iPhone, the most reliable approach is to use
              YouTube's supported offline features or access videos that you
              own through your account. Third-party download availability can
              change depending on the platform and content.
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why a YouTube Download May Fail
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A download request may fail because a video is private,
              restricted, unavailable, unsupported, or affected by changes to
              YouTube's media delivery system.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A tool may also temporarily be unable to process a URL even
              when the video itself is publicly viewable.
            </p>
          </section>

          {/* Related guides */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              More Video Download Guides
            </h2>

            <div className="mt-6 space-y-3">
              <Link
                href="/blog/how-to-download-instagram-reels"
                className="block text-blue-400 hover:text-blue-300"
              >
                How to Download Instagram Reels →
              </Link>

              <Link
                href="/blog/how-to-download-facebook-videos"
                className="block text-blue-400 hover:text-blue-300"
              >
                How to Download Facebook Videos →
              </Link>
            </div>
          </section>

          {/* Responsible use */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Copyright and Responsible Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Only download or reuse YouTube content when you have the right
              or permission to do so. Respect copyright, privacy and the rules
              that apply to the platform and the content you're accessing.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-gray-800 bg-gray-900 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-lg">
                    {faq.question}
                  </summary>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-14 rounded-3xl border border-gray-800 bg-gray-900 p-7 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Explore the YouTube Video Downloader
            </h2>

            <p className="text-gray-400 mt-3">
              Check the downloader for eligible content and current
              availability.
            </p>

            <Link
              href="/tools/youtube-video-downloader"
              className="inline-block mt-6 bg-white text-black hover:bg-gray-200 px-7 py-3 rounded-xl font-semibold transition"
            >
              YouTube Video Downloader →
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}