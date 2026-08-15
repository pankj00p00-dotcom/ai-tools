import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog/how-to-download-facebook-videos`;

export const metadata: Metadata = {
  title: "How to Download Facebook Videos – Easy Guide",
  description:
    "Learn how to save Facebook videos on Android, iPhone and desktop using Facebook's built-in options and a URL-based method for eligible public content.",
  keywords: [
    "how to download Facebook videos",
    "download Facebook videos",
    "save Facebook videos",
    "Facebook video downloader",
    "download Facebook videos on iPhone",
    "download Facebook videos on Android",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How to Download Facebook Videos – Easy Guide",
    description:
      "A practical guide to saving Facebook videos on mobile and desktop, including a URL-based method for eligible public content.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Download Facebook Videos – Easy Guide",
    description:
      "Learn practical ways to save Facebook videos on Android, iPhone and desktop.",
  },
};

const faqItems = [
  {
    question: "How do I download a Facebook video?",
    answer:
      "Copy the URL of a publicly accessible Facebook video, paste it into a compatible downloader, and start the processing request.",
  },
  {
    question: "Can I download private Facebook videos?",
    answer:
      "Private or login-required videos may not be accessible. Only download content that you own or have permission to save.",
  },
  {
    question: "How do I save a Facebook video on iPhone?",
    answer:
      "You can use Facebook's available save features, or for eligible public content, copy the video URL and use a compatible browser-based downloader.",
  },
  {
    question: "How do I save a Facebook video on Android?",
    answer:
      "Copy the URL of an eligible public Facebook video and use a compatible browser-based downloader. You can also use Facebook's own save features when available.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Download Facebook Videos – Easy Guide",
  description:
    "A practical guide to saving Facebook videos on mobile and desktop.",
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
      name: "How to Download Facebook Videos",
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

export default function HowToDownloadFacebookVideosPage() {
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
            How to Download Facebook Videos
          </span>
        </nav>

        <article>
          <header>
            <p className="text-sm text-blue-400 font-medium">
              Facebook Video Guide
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              How to Download Facebook Videos
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Learn simple ways to save Facebook videos on Android, iPhone
              and desktop. This guide covers Facebook's built-in options,
              URL-based downloading for eligible public content, and common
              download problems.
            </p>
          </header>

          {/* Tool CTA */}
          <section className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-bold">
              Download an Eligible Facebook Video
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              For publicly accessible Facebook content that you own or are
              permitted to save, copy the video URL and use our browser-based
              downloader.
            </p>

            <Link
              href="/tools/facebook-video-downloader"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Open Facebook Video Downloader →
            </Link>
          </section>

          {/* Facebook save */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              1. Use Facebook's Built-In Save Feature
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              If you only want to find a Facebook video again later, the
              platform's built-in save feature may be the easiest option.
              This keeps the content available inside your Facebook account
              without creating a separate video file.
            </p>
          </section>

          {/* URL method */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              2. Download a Facebook Video Using Its URL
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              For eligible public content, a URL-based workflow can be useful
              when you need a local copy that you are permitted to save.
            </p>

            <ol className="mt-6 space-y-4 text-gray-300 list-decimal pl-6">
              <li>
                Open the Facebook video you want to save.
              </li>
              <li>
                Copy the video URL using Facebook's share options.
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

          {/* iPhone */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Download Facebook Videos on iPhone
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              On iPhone, you can save videos inside Facebook for later access,
              or use a browser-based downloader for eligible public content.
              Copy the Facebook video URL, open the downloader in your
              browser, and paste the link.
            </p>
          </section>

          {/* Android */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Download Facebook Videos on Android
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Android users can follow the same URL-based workflow. Copy the
              Facebook video URL, open a compatible downloader, paste the link
              and process the available media when permitted.
            </p>
          </section>

          {/* Desktop */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Download Facebook Videos on Desktop
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              On a desktop browser, open the Facebook video, copy its URL and
              use a compatible downloader for eligible public content. A
              browser-based method can avoid the need to install additional
              software.
            </p>
          </section>

          {/* Problems */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why a Facebook Video May Not Download
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A download can fail when a video is private, unavailable,
              removed, restricted, protected or temporarily unsupported.
              Changes to Facebook's platform can also affect third-party
              downloading tools.
            </p>
          </section>

          {/* Related Instagram content */}
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

              <Link
                href="/blog/how-to-save-instagram-videos-on-android"
                className="block text-blue-400 hover:text-blue-300"
              >
                How to Save Instagram Videos on Android →
              </Link>
            </div>
          </section>

          {/* Privacy */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Privacy, Copyright and Responsible Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Only download content that you own, have permission to use, or
              are otherwise allowed to save. Downloading a copy does not
              automatically give you permission to republish or commercially
              use someone else's content. Respect privacy, copyright and the
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
              Try our browser-based downloader for eligible publicly
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