import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ai-tools-three-rho.vercel.app";
const PAGE_URL = `${SITE_URL}/blog/how-to-download-instagram-reels`;

export const metadata: Metadata = {
  title: "How to Download Instagram Reels – Easy Guide",
  description:
    "Learn how to download Instagram Reels on Android, iPhone and desktop. See simple ways to save publicly accessible Reels for permitted personal use.",
  keywords: [
    "how to download Instagram Reels",
    "download Instagram Reels",
    "save Instagram Reels",
    "Instagram Reel downloader",
    "download Instagram Reel on iPhone",
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
    title: "How to Download Instagram Reels – Easy Guide",
    description:
      "Learn how to download Instagram Reels on Android, iPhone and desktop, including a simple URL-based method for eligible public content.",
    url: PAGE_URL,
    siteName: "AI Tools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Download Instagram Reels – Easy Guide",
    description:
      "A practical guide to saving publicly accessible Instagram Reels on phone and desktop.",
  },
};

const faqItems = [
  {
    question: "Can I download any Instagram Reel?",
    answer:
      "Not every Reel is necessarily available for download. Availability can depend on whether the content is public, accessible and permitted to be saved.",
  },
  {
    question: "How do I download an Instagram Reel on iPhone?",
    answer:
      "For eligible public content, copy the Reel URL and use a compatible downloader that accepts Instagram video URLs. You can also use Instagram's own save or share features where available.",
  },
  {
    question: "How do I download an Instagram Reel on Android?",
    answer:
      "Copy the URL of the Reel and use a compatible downloader for eligible public content. Make sure you have permission to save and reuse the content.",
  },
  {
    question: "Is it legal to download Instagram Reels?",
    answer:
      "Downloading and reusing content can be subject to copyright, privacy and platform rules. Download content you own, have permission to use, or are otherwise allowed to save.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Download Instagram Reels – Easy Guide",
  description:
    "A practical guide to downloading and saving publicly accessible Instagram Reels on mobile and desktop.",
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
      name: "How to Download Instagram Reels",
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

export default function HowToDownloadInstagramReelsPage() {
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

          <span className="text-gray-400">Blog</span>

          <span className="mx-2">/</span>

          <span className="text-gray-400">
            How to Download Instagram Reels
          </span>
        </nav>

        {/* Article */}
        <article>
          <header>
            <p className="text-sm text-blue-400 font-medium">
              Instagram Guide
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              How to Download Instagram Reels
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Want to save an Instagram Reel for later? This guide explains
              simple ways to save publicly accessible Instagram Reels on
              Android, iPhone and desktop, including a URL-based method for
              eligible content.
            </p>
          </header>

          {/* Tool CTA */}
          <section className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-bold">
              Download an Instagram Reel
            </h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              For eligible public content, you can copy the Reel URL and use
              our Instagram Video Downloader.
            </p>

            <Link
              href="/tools/instagram-video-downloader"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Open Instagram Video Downloader →
            </Link>
          </section>

          {/* Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Download an Instagram Reel Using a URL
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A simple way to save an eligible public Reel is to copy its
              Instagram URL and use a compatible downloader. The basic process
              is straightforward:
            </p>

            <ol className="mt-6 space-y-4 text-gray-300 list-decimal pl-6">
              <li>
                Open the Instagram Reel you want to save.
              </li>
              <li>
                Copy the Reel URL using Instagram's share options.
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
                Paste the Reel URL into the downloader.
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
              How to Download Instagram Reels on iPhone
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              On iPhone, you can first copy the Reel link from Instagram and
              then use a browser-based tool for eligible public content. This
              can be more convenient than installing another app.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Keep in mind that access to the underlying media can vary based
              on the Reel's visibility and current Instagram behavior.
            </p>
          </section>

          {/* Android */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Download Instagram Reels on Android
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              On Android, copy the Reel URL from Instagram and open a browser
              to use a compatible downloader for eligible public content.
              Paste the URL, process it and download the available media when
              permitted.
            </p>
          </section>

          {/* Desktop */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              How to Save Instagram Reels on Desktop
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Desktop users can follow the same URL-based workflow. Open the
              Reel in Instagram, copy the URL and paste it into the downloader.
              A browser-based workflow means you do not need a dedicated
              downloader application.
            </p>
          </section>

          {/* Problems */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Why an Instagram Reel May Not Download
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              A Reel may fail to process for several reasons. The content may
              be private, unavailable, removed, restricted or temporarily
              unsupported. Instagram can also change how media URLs are
              delivered, which can affect third-party tools.
            </p>
          </section>

          {/* Privacy */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold">
              Privacy, Copyright and Responsible Use
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Only download content that you own, have permission to use, or
              are otherwise allowed to save. Downloading a file does not
              automatically give you permission to republish or commercially
              use it. Always respect copyright, privacy and the applicable
              platform rules.
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
              Ready to Save an Instagram Reel?
            </h2>

            <p className="text-gray-400 mt-3">
              Use our Instagram Video Downloader for eligible publicly
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