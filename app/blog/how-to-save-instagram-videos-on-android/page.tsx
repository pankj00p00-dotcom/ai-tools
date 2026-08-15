import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog/how-to-save-instagram-videos-on-android`;

export const metadata: Metadata = {
  title: "How to Save Instagram Videos on Android – Easy Guide",
  description:
    "Learn how to save Instagram videos and Reels on Android using Instagram's built-in options and a URL-based method for eligible public content.",
  keywords: [
    "how to save Instagram videos on Android",
    "save Instagram videos Android",
    "download Instagram videos Android",
    "Instagram video downloader Android",
    "save Instagram Reels Android",
    "download Instagram Reel on Android",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Save Instagram Videos on Android – Easy Guide",
    description:
      "A practical guide to saving Instagram videos and Reels on Android, including built-in Instagram options and a URL-based method for eligible public content.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Save Instagram Videos on Android – Easy Guide",
    description:
      "Learn simple ways to save Instagram videos and Reels on Android.",
  },
};

const faqItems = [
  {
    question: "How can I save an Instagram video on Android?",
    answer:
      "You can use Instagram's built-in save features where available, or copy the URL of eligible public content and use a compatible browser-based downloader.",
  },
  {
    question: "Can I save Instagram Reels on Android?",
    answer:
      "Yes, depending on the Reel and the features available for that content. You can save a Reel inside Instagram or use a compatible downloader for eligible public content.",
  },
  {
    question: "Where are downloaded Instagram videos stored on Android?",
    answer:
      "Files downloaded through a browser are commonly available through the Downloads folder or your device's file manager. The exact location can vary by browser and Android device.",
  },
  {
    question: "Why can't I download an Instagram video on Android?",
    answer:
      "The video may be private, unavailable, restricted, removed, or temporarily unsupported. Instagram can also change how media is delivered.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Save Instagram Videos on Android – Easy Guide",
  description:
    "A practical guide to saving Instagram videos and Reels on Android.",
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
      name: "How to Save Instagram Videos on Android",
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

export default function HowToSaveInstagramVideosOnAndroidPage() {
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
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-400">Blog</span>

          <span className="mx-2">/</span>

          <span className="text-gray-400">
            How to Save Instagram Videos on Android
          </span>
        </nav>

        <article>
          <header>
            <p className="text-sm text-blue-400 font-medium">
              Instagram Android Guide
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              How to Save Instagram Videos on Android
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Learn simple ways to save Instagram videos and Reels on Android.
              This guide covers Instagram's built-in options, browser-based
              downloading for eligible public content, and common problems.
            </p>
          </header>

          {/* Tool CTA */}
          <section className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-bold">
              Save an Eligible Instagram Video
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              For publicly accessible content that you are allowed to save,
              you can copy the Instagram URL and use our browser-based
              downloader.
            </p>

            <Link
              href="/tools/instagram-video-downloader"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Open Instagram Video Downloader →
            </Link>
          </section>

          {/* Built-in save */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              1. Use Instagram's Built-In Save Feature
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              If you only want to find a video again later, Instagram's
              built-in Save feature is usually the simplest option. Open the
              video or Reel, use the available save option, and access your
              saved content from your Instagram account.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              This method keeps the content inside Instagram rather than
              creating a separate video file on your Android device.
            </p>
          </section>

          {/* URL method */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              2. Save an Instagram Video Using Its URL
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              When you need a file for eligible public content that you are
              permitted to download, a browser-based URL workflow can be
              useful.
            </p>

            <ol className="mt-6 space-y-4 text-gray-300 list-decimal pl-6">
              <li>
                Open the Instagram video or Reel on your Android phone.
              </li>
              <li>
                Use Instagram's share options to copy the video URL.
              </li>
              <li>
                Open the{" "}
                <Link
                  href="/tools/instagram-video-downloader"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Instagram Video Downloader
                </Link>
                .
              </li>
              <li>
                Paste the copied URL into the downloader.
              </li>
              <li>
                Start processing and download the available file when
                permitted.
              </li>
            </ol>
          </section>

          {/* Downloads */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Where Downloads Go on Android
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Videos downloaded through a browser are commonly stored in the
              Downloads folder or another location selected by the browser.
              You can usually find them through the Files app or your phone's
              file manager.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The exact location can vary between Android devices and
              browsers, so check the Downloads section if the file is not
              immediately visible.
            </p>
          </section>

          {/* Reels */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Save Instagram Reels on Android
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The same general methods apply to Instagram Reels. You can save
              a Reel inside Instagram for easy access later, or use a URL-based
              downloader for eligible public content that you are allowed to
              save.
            </p>

            <Link
              href="/blog/how-to-download-instagram-reels"
              className="inline-block mt-5 text-blue-400 hover:text-blue-300"
            >
              Read our complete Instagram Reels download guide →
            </Link>
          </section>

          {/* iPhone article */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Using an iPhone Instead?
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              We also have a separate guide covering Instagram video downloads
              on iPhone, including where downloaded files can be found.
            </p>

            <Link
              href="/blog/how-to-save-instagram-videos-on-iphone"
              className="inline-block mt-5 text-blue-400 hover:text-blue-300"
            >
              Read the iPhone Instagram video guide →
            </Link>
          </section>

          {/* Troubleshooting */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why an Instagram Video May Not Download
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A download can fail when the video is private, unavailable,
              removed, restricted, or temporarily unsupported. Instagram can
              also change how media is delivered, which may affect third-party
              tools.
            </p>
          </section>

          {/* Privacy */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Privacy and Responsible Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Only save content that you own, have permission to use, or are
              otherwise allowed to download. A downloaded copy does not
              automatically give you permission to republish or commercially
              use someone else's content.
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
              Need an Instagram Video Downloader?
            </h2>

            <p className="text-gray-400 mt-3">
              Try our browser-based downloader for eligible publicly
              accessible content.
            </p>

            <Link
              href="/tools/instagram-video-downloader"
              className="inline-block mt-6 bg-white text-black hover:bg-gray-200 px-7 py-3 rounded-xl font-semibold transition"
            >
              Instagram Video Downloader →
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}