import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog/how-to-save-youtube-videos-on-android`;

export const metadata: Metadata = {
  title: "How to Save YouTube Videos on Android – Complete Guide",
  description:
    "Learn permitted ways to save YouTube videos on Android using YouTube's available offline features and guidance for videos you own or have permission to use.",
  keywords: [
    "how to save YouTube videos on Android",
    "save YouTube videos Android",
    "download YouTube videos Android",
    "YouTube video downloader Android",
    "save YouTube videos on Android",
    "download YouTube videos legally Android",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Save YouTube Videos on Android – Complete Guide",
    description:
      "A practical guide to permitted ways of saving YouTube videos on Android, including official offline options and videos you own.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Save YouTube Videos on Android – Complete Guide",
    description:
      "Learn permitted ways to save YouTube videos on Android.",
  },
};

const faqItems = [
  {
    question: "Can I save any YouTube video on Android?",
    answer:
      "Not necessarily. Available options depend on the video, your account, YouTube's supported features, and whether you have the right or permission to save the content.",
  },
  {
    question: "What is the safest way to save a YouTube video on Android?",
    answer:
      "Use YouTube's own available offline features where applicable, or use authorized methods to download videos that you own or have permission to save.",
  },
  {
    question: "Can I download my own YouTube videos on Android?",
    answer:
      "Yes. Creators can access their own uploaded content through YouTube's account and creator tools and use supported options to download or export their content.",
  },
  {
    question: "Why can't I save a YouTube video on Android?",
    answer:
      "The video may be private, restricted, unavailable, unsupported, or subject to limitations on downloading. Changes to the platform can also affect third-party tools.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Save YouTube Videos on Android – Complete Guide",
  description:
    "A practical guide to permitted ways of saving YouTube videos on Android.",
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
      name: "How to Save YouTube Videos on Android",
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

export default function HowToSaveYouTubeVideosOnAndroidPage() {
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
            How to Save YouTube Videos on Android
          </span>
        </nav>

        <article>
          <header>
            <p className="text-sm text-blue-400 font-medium">
              YouTube Android Guide
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              How to Save YouTube Videos on Android
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Learn permitted ways to save YouTube videos on Android,
              including YouTube's available offline features and options for
              videos you own or are authorized to download.
            </p>
          </header>

          {/* Tool CTA */}
          <section className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-bold">
              Check the YouTube Video Downloader
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              Our YouTube downloader page is available for eligible content,
              although availability can depend on the video and current
              platform restrictions.
            </p>

            <Link
              href="/tools/youtube-video-downloader"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Open YouTube Video Downloader →
            </Link>
          </section>

          {/* Official offline */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              1. Use YouTube's Available Offline Features
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Depending on the video, account and features available in your
              region, YouTube may provide an official way to make supported
              content available for offline viewing. This is generally the
              safest option because it uses YouTube's own functionality.
            </p>
          </section>

          {/* Own videos */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              2. Save Your Own YouTube Videos
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              If you uploaded the video yourself, use YouTube's creator or
              account tools to access your own content. Keeping a local backup
              can be useful for editing, archiving and future publishing where
              permitted.
            </p>
          </section>

          {/* Authorized content */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              3. Save Videos You Have Permission to Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              If a creator or rights holder has given you permission to save a
              video, make sure your intended use is covered by that
              permission before downloading or republishing it.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A public YouTube video is not automatically free of copyright
              restrictions, so permission and applicable platform rules still
              matter.
            </p>
          </section>

          {/* Android offline */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Where Offline YouTube Content Is Available on Android
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Official offline viewing is generally managed within YouTube
              rather than appearing as a normal video file in your phone's
              gallery. The exact behavior depends on the supported YouTube
              feature and your account.
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why a YouTube Video May Not Be Available for Download
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A video may be unavailable for download because it is private,
              restricted, unavailable, unsupported, or subject to limitations
              imposed by the platform or content owner.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Third-party tools can also temporarily fail when YouTube changes
              how media is delivered or when automated access is restricted.
            </p>
          </section>

          {/* Related guides */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              More Video Download Guides
            </h2>

            <div className="mt-6 space-y-3">
              <Link
                href="/blog/how-to-download-youtube-videos"
                className="block text-blue-400 hover:text-blue-300"
              >
                How to Download YouTube Videos →
              </Link>

              <Link
                href="/blog/how-to-save-youtube-videos-on-iphone"
                className="block text-blue-400 hover:text-blue-300"
              >
                How to Save YouTube Videos on iPhone →
              </Link>

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
              or permission to do so. Respect copyright, privacy and the
              applicable platform and content rules.
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