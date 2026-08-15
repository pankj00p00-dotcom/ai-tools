import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog/how-to-save-facebook-videos-on-iphone`;

export const metadata: Metadata = {
  title: "How to Save Facebook Videos on iPhone – Easy Guide",
  description:
    "Learn how to save Facebook videos on iPhone using Facebook's built-in options and a browser-based method for eligible public content.",
  keywords: [
    "how to save Facebook videos on iPhone",
    "save Facebook videos iPhone",
    "download Facebook videos iPhone",
    "Facebook video downloader iPhone",
    "save Facebook videos on iPhone",
    "Facebook video download iPhone",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Save Facebook Videos on iPhone – Easy Guide",
    description:
      "A practical guide to saving Facebook videos on iPhone, including built-in Facebook options and a URL-based method for eligible public content.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Save Facebook Videos on iPhone – Easy Guide",
    description:
      "Learn practical ways to save Facebook videos on iPhone.",
  },
};

const faqItems = [
  {
    question: "How can I save a Facebook video on iPhone?",
    answer:
      "You can use Facebook's built-in save feature where available, or copy the URL of eligible public content and use a compatible browser-based downloader.",
  },
  {
    question: "Can I save Facebook videos to my iPhone?",
    answer:
      "Eligible public videos can sometimes be saved through a browser-based download workflow, while Facebook's built-in Save feature keeps content inside your Facebook account.",
  },
  {
    question: "Where are downloaded Facebook videos saved on iPhone?",
    answer:
      "Files downloaded through a browser are generally available through the iPhone's Downloads location or the Files app, depending on your browser and device settings.",
  },
  {
    question: "Why can't I download a Facebook video on iPhone?",
    answer:
      "The video may be private, unavailable, removed, restricted, protected, or temporarily unsupported. Platform changes can also affect third-party download tools.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Save Facebook Videos on iPhone – Easy Guide",
  description:
    "A practical guide to saving Facebook videos on iPhone.",
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
      name: "How to Save Facebook Videos on iPhone",
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

export default function HowToSaveFacebookVideosOnIPhonePage() {
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
            How to Save Facebook Videos on iPhone
          </span>
        </nav>

        <article>
          <header>
            <p className="text-sm text-blue-400 font-medium">
              Facebook iPhone Guide
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              How to Save Facebook Videos on iPhone
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Learn simple ways to save Facebook videos on iPhone. This guide
              covers Facebook's built-in save option, browser-based downloads
              for eligible public content, where downloaded files may be found,
              and common problems.
            </p>
          </header>

          {/* Tool CTA */}
          <section className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-bold">
              Save an Eligible Facebook Video
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              If you are allowed to save the video, copy its public URL and
              use our browser-based Facebook Video Downloader.
            </p>

            <Link
              href="/tools/facebook-video-downloader"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Open Facebook Video Downloader →
            </Link>
          </section>

          {/* Built-in save */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              1. Use Facebook's Built-In Save Feature
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              If your goal is simply to find a Facebook video again later,
              Facebook's Save feature can be the easiest option. It keeps the
              video associated with your Facebook account rather than creating
              a separate file on your iPhone.
            </p>
          </section>

          {/* URL method */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              2. Save a Facebook Video Using Its URL
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              For eligible public content that you own or have permission to
              save, a browser-based URL workflow can be useful.
            </p>

            <ol className="mt-6 space-y-4 text-gray-300 list-decimal pl-6">
              <li>
                Open the Facebook video on your iPhone.
              </li>
              <li>
                Use Facebook's share options to copy the video URL.
              </li>
              <li>
                Open the{" "}
                <Link
                  href="/tools/facebook-video-downloader"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Facebook Video Downloader
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

          {/* Downloads location */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Where Facebook Video Downloads Go on iPhone
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              When a browser downloads a video file, iPhone may place it in the
              configured Downloads location. You can usually find downloaded
              files through the Files app.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              The exact location can vary depending on your browser and
              settings, so check the Files app if the video does not appear
              immediately.
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why a Facebook Video May Not Download
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A download may fail when a video is private, unavailable,
              removed, restricted, protected, or temporarily unsupported.
              Facebook can also change its media delivery system, which may
              affect third-party tools.
            </p>
          </section>

          {/* Related Facebook guide */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              More Facebook Video Guides
            </h2>

            <Link
              href="/blog/how-to-download-facebook-videos"
              className="inline-block mt-5 text-blue-400 hover:text-blue-300"
            >
              How to Download Facebook Videos →
            </Link>
          </section>

          {/* Related Instagram guide */}
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
                href="/blog/how-to-save-instagram-videos-on-iphone"
                className="block text-blue-400 hover:text-blue-300"
              >
                How to Save Instagram Videos on iPhone →
              </Link>
            </div>
          </section>

          {/* Responsible use */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Privacy, Copyright and Responsible Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Only save content that you own, have permission to use, or are
              otherwise allowed to download. A downloaded copy does not
              automatically give you permission to republish or commercially
              use someone else's content. Respect privacy, copyright and
              applicable platform rules.
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
              Need a Facebook Video Downloader?
            </h2>

            <p className="text-gray-400 mt-3">
              Use our browser-based downloader for eligible publicly
              accessible content.
            </p>

            <Link
              href="/tools/facebook-video-downloader"
              className="inline-block mt-6 bg-white text-black hover:bg-gray-200 px-7 py-3 rounded-xl font-semibold transition"
            >
              Facebook Video Downloader →
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}