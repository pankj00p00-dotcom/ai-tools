import { tools } from "../../data/tools";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import VideoDownloader from "../../components/VideoDownloader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://ai-tools-three-rho.vercel.app";

type DownloaderSEO = {
  title: string;
  description: string;
  keywords: string[];
  platform: "instagram" | "facebook" | "youtube" | "tiktok";
  heading: string;
  downloaderDescription: string;
  placeholder: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};


const downloaderGuides: Record<
  string,
  {
    title: string;
    href: string;
  }[]
> = {
  "instagram-video-downloader": [
    {
      title: "How to Download Instagram Reels",
      href: "/blog/how-to-download-instagram-reels",
    },
    {
      title: "How to Save Instagram Videos on iPhone",
      href: "/blog/how-to-save-instagram-videos-on-iphone",
    },
    {
      title: "How to Save Instagram Videos on Android",
      href: "/blog/how-to-save-instagram-videos-on-android",
    },
  ],

  "facebook-video-downloader": [
    {
      title: "How to Download Facebook Videos",
      href: "/blog/how-to-download-facebook-videos",
    },
    {
      title: "How to Save Facebook Videos on iPhone",
      href: "/blog/how-to-save-facebook-videos-on-iphone",
    },
    {
      title: "How to Save Facebook Videos on Android",
      href: "/blog/how-to-save-facebook-videos-on-android",
    },
  ],

  "youtube-video-downloader": [
    {
      title: "How to Download YouTube Videos",
      href: "/blog/how-to-download-youtube-videos",
    },
    {
      title: "How to Save YouTube Videos on iPhone",
      href: "/blog/how-to-save-youtube-videos-on-iphone",
    },
    {
      title: "How to Save YouTube Videos on Android",
      href: "/blog/how-to-save-youtube-videos-on-android",
    },
  ],
};

const downloaderSEO: Record<string, DownloaderSEO> = {
  "instagram-video-downloader": {
    title: "Instagram Video Downloader – Free Online",
    description:
      "Download publicly accessible Instagram videos and Reels online. Paste a video URL into this free, fast and mobile-friendly downloader.",
    keywords: [
      "Instagram video downloader",
      "Instagram Reels downloader",
      "download Instagram videos",
      "Instagram downloader",
      "Instagram Reel downloader",
      "save Instagram videos",
      "free Instagram video downloader",
    ],
    platform: "instagram",
    heading: "Instagram Video Downloader",
    downloaderDescription:
      "Download publicly accessible Instagram videos and Reels by pasting the video URL below.",
    placeholder: "Paste Instagram video or Reel URL...",
    faqs: [
      {
        question: "How do I download an Instagram video?",
        answer:
          "Copy the URL of a publicly accessible Instagram video or Reel, paste it into the downloader, and start the processing request.",
      },
      {
        question: "Can I download Instagram Reels?",
        answer:
          "The downloader is designed to process publicly accessible Instagram Reels when the content is available and downloading is permitted.",
      },
      {
        question: "Is the Instagram video downloader free?",
        answer:
          "Yes. The downloader is designed to be free to use without requiring separate software installation.",
      },
      {
        question: "Can I download private Instagram videos?",
        answer:
          "Private or login-required Instagram content may not be accessible. Only download content you own or have permission to download.",
      },
    ],
  },

  "facebook-video-downloader": {
    title: "Facebook Video Downloader – Free Online",
    description:
      "Download publicly accessible Facebook videos online by pasting a video URL. Free, fast and mobile-friendly Facebook video downloader.",
    keywords: [
      "Facebook video downloader",
      "download Facebook videos",
      "Facebook downloader",
      "free Facebook video downloader",
      "save Facebook videos",
      "Facebook video download",
    ],
    platform: "facebook",
    heading: "Facebook Video Downloader",
    downloaderDescription:
      "Save publicly accessible Facebook videos by pasting the video URL below. Simple, fast and mobile-friendly.",
    placeholder: "Paste Facebook video URL...",
    faqs: [
      {
        question: "How do I download a Facebook video?",
        answer:
          "Copy the URL of a publicly accessible Facebook video, paste it into the downloader, and start the processing request.",
      },
      {
        question: "Can I download private Facebook videos?",
        answer:
          "Private or login-required Facebook videos may not be accessible through the downloader.",
      },
      {
        question: "Is the Facebook video downloader free?",
        answer:
          "Yes. The downloader is designed to be free to use without requiring separate software installation.",
      },
      {
        question: "Why might a Facebook video fail to download?",
        answer:
          "A video may fail if it is private, unavailable, removed, protected, unsupported, or affected by platform changes.",
      },
    ],
  },

  "youtube-video-downloader": {
    title: "YouTube Video Downloader – Free Online",
    description:
      "Process eligible YouTube video URLs and download content when permitted. Free, simple and mobile-friendly YouTube video downloader.",
    keywords: [
      "YouTube video downloader",
      "download YouTube videos",
      "YouTube downloader",
      "free YouTube video downloader",
      "YouTube video download",
      "save YouTube videos",
    ],
    platform: "youtube",
    heading: "YouTube Video Downloader",
    downloaderDescription:
      "Paste an eligible YouTube video URL to process the video for downloading when downloading is permitted.",
    placeholder: "Paste YouTube video URL...",
    faqs: [
      {
        question: "How do I download a YouTube video?",
        answer:
          "Paste an eligible YouTube video URL into the downloader and start the processing request.",
      },
      {
        question: "Can I download every YouTube video?",
        answer:
          "No. Download availability depends on the video's accessibility, permissions, and applicable YouTube restrictions.",
      },
      {
        question: "Is the YouTube video downloader free?",
        answer:
          "Yes. The downloader interface is designed to be free to use.",
      },
      {
        question: "Why did my YouTube download fail?",
        answer:
          "A video can fail because it is unavailable, restricted, private, unsupported, or affected by changes to the platform.",
      },
    ],
  },

  "tiktok-video-downloader": {
    title: "TikTok Video Downloader – Free Online",
    description:
      "Download publicly accessible TikTok videos online by pasting a video URL. Fast, free and mobile-friendly TikTok video downloader.",
    keywords: [
      "TikTok video downloader",
      "download TikTok videos",
      "TikTok downloader",
      "free TikTok video downloader",
      "save TikTok videos",
      "TikTok video download",
    ],
    platform: "tiktok",
    heading: "TikTok Video Downloader",
    downloaderDescription:
      "Download publicly accessible TikTok videos by pasting the video URL below. Simple and mobile-friendly.",
    placeholder: "Paste TikTok video URL...",
    faqs: [
      {
        question: "How do I download a TikTok video?",
        answer:
          "Copy the URL of a publicly accessible TikTok video, paste it into the downloader, and start the processing request.",
      },
      {
        question: "Can I download private TikTok videos?",
        answer:
          "Private or login-required TikTok videos may not be accessible through the downloader.",
      },
      {
        question: "Is the TikTok video downloader free?",
        answer:
          "Yes. The downloader is designed to be free to use without requiring separate software installation.",
      },
      {
        question: "Why might a TikTok download fail?",
        answer:
          "A video may fail if it is private, unavailable, restricted, unsupported, or affected by platform changes.",
      },
    ],
  },
};

// Generate static pages for all tools
export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// SEO metadata for every tool page
export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found | AI Tools",
      description: "The requested tool could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const downloader = downloaderSEO[slug];

  if (downloader) {
    const url = `${SITE_URL}/tools/${tool.slug}`;

    return {
      title: downloader.title,
      description: downloader.description,
      keywords: downloader.keywords,

      robots: {
        index: true,
        follow: true,
      },

      alternates: {
        canonical: url,
      },

      openGraph: {
        title: downloader.title,
        description: downloader.description,
        url,
        siteName: "AI Tools",
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: downloader.title,
        description: downloader.description,
      },
    };
  }

  const title = `${tool.name} Review, Features & Pricing`;

  const description =
    `${tool.name} review: features, pricing, pros, cons, best use cases ` +
    `and alternatives. Explore this ${tool.category.toLowerCase()} AI tool.`;

  const url = `${SITE_URL}/tools/${tool.slug}`;

  return {
    title,
    description,

    keywords: [
      tool.name,
      `${tool.name} AI`,
      `${tool.name} review`,
      `${tool.name} pricing`,
      `${tool.name} features`,
      `${tool.name} alternatives`,
      `${tool.name} pros and cons`,
      `${tool.category} AI tools`,
      "AI tools",
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "AI Tools",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const url = `${SITE_URL}/tools/${tool.slug}`;
  const downloader = downloaderSEO[slug];

  // Related tools
  const relatedTools = tools
    .filter(
      (item) =>
        item.category === tool.category &&
        item.id !== tool.id
    )
    .slice(0, 3);

  // Special downloader page
  if (downloader) {
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.name,
      description: downloader.description,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
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
          name: "AI Tools",
          item: `${SITE_URL}/tools`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tool.name,
          item: url,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: downloader.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-black text-white px-6 pt-32 pb-20">
          <div className="max-w-5xl mx-auto">

            {/* Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareSchema),
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
                href="/tools"
                className="hover:text-white transition"
              >
                AI Tools
              </Link>

              <span className="mx-2">/</span>

              <span className="text-gray-400">
                {tool.name}
              </span>
            </nav>

            {/* Downloader */}
            <VideoDownloader
              platform={downloader.platform}
              title={downloader.heading}
              description={downloader.downloaderDescription}
              placeholder={downloader.placeholder}
            />

            {/* How to use */}
            <section className="mt-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                How to Use {tool.name}
              </h2>

              <div className="grid md:grid-cols-3 gap-5 mt-6">

                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-2xl font-bold">1</div>

                  <h3 className="font-semibold text-lg mt-3">
                    Copy the video URL
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Copy the link of the publicly accessible{" "}
                    {downloader.platform} video you want to process.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-2xl font-bold">2</div>

                  <h3 className="font-semibold text-lg mt-3">
                    Paste the link
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Paste the video URL into the downloader above.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-2xl font-bold">3</div>

                  <h3 className="font-semibold text-lg mt-3">
                    Download when available
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Process the URL and download the available content
                    when you have permission to do so.
                  </p>
                </div>

              </div>
            </section>

            {/* About */}
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl font-bold">
                About {tool.name}
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {tool.description}
              </p>
            </section>

            {/* Features */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {tool.name} Features
              </h2>

              <ul className="mt-5 space-y-3">
                {tool.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-blue-400 mt-1">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-4">
                {downloader.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-5"
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

            {/* Related Downloader Tools */}
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl font-bold">
                More Video Downloaders
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
                {tools
                  .filter(
                    (item) =>
                      item.category === "Video Downloader" &&
                      item.id !== tool.id
                  )
                  .map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      href={`/tools/${relatedTool.slug}`}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
                    >
                      <div
                        className="text-3xl"
                        aria-hidden="true"
                      >
                        {relatedTool.icon}
                      </div>

                      <h3 className="text-lg font-bold mt-3">
                        {relatedTool.name}
                      </h3>

                      <p className="text-gray-400 text-sm mt-2">
                        {relatedTool.description}
                      </p>

                      <span className="inline-block mt-4 text-blue-400 text-sm">
                        Use Tool →
                      </span>
                    </Link>
                  ))}
              </div>
            </section>


            {/* Related Guides */}
            {downloaderGuides[slug] && (
              <section className="mt-14">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Helpful {tool.name} Guides
                </h2>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  Learn more about saving and downloading eligible{" "}
                  {downloader.platform} videos on different devices.
                </p>

                <div className="grid md:grid-cols-3 gap-5 mt-6">
                  {downloaderGuides[slug].map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
                    >
                      <h3 className="text-lg font-bold">
                        {guide.title}
                      </h3>

                      <span className="inline-block mt-4 text-blue-400 text-sm">
                        Read Guide →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Disclaimer */}
            <section className="mt-14 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold">
                Download Responsibly
              </h2>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                Only download videos that are publicly accessible or that
                you own or have permission to download. Respect copyright,
                privacy and the terms of the platform hosting the content.
              </p>
            </section>

          </div>
        </main>
      </>
    );
  }

  // Software structured data for regular AI tools
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: tool.category,
    operatingSystem: "Web",
    url: tool.url,
    offers: {
      "@type": "Offer",
      ...(tool.pricing === "Free" ? { price: "0" } : {}),
      priceCurrency: "USD",
    },
  };

  // Breadcrumb structured data
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
        name: "AI Tools",
        item: `${SITE_URL}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.name,
        item: url,
      },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(softwareSchema),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbSchema),
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
              href="/tools"
              className="hover:text-white transition"
            >
              AI Tools
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-400">
              {tool.name}
            </span>
          </nav>

          {/* Back */}
          <Link
            href="/tools"
            className="text-gray-400 hover:text-white transition"
          >
            ← Back to AI Tools
          </Link>

          {/* Main Tool Card */}
          <article className="mt-8 bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">

            {/* Icon */}
            <div
              className="text-6xl"
              aria-hidden="true"
            >
              {tool.icon}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mt-6">
              {tool.name}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full">
                {tool.category}
              </span>

              <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full">
                {tool.pricing}
              </span>

              <span className="bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full">
                ⭐ {tool.rating}/5
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mt-8">
              {tool.description}
            </p>

            {/* Visit Tool */}
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Visit {tool.name} →
            </a>

            {/* About */}
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold">
                About {tool.name}
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {tool.name} is a {tool.category.toLowerCase()} AI
                tool designed to help users with AI-powered
                workflows and tasks. It is listed in our AI tools
                directory to help users discover and compare
                useful software.
              </p>
            </section>

            {/* Best For */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                Best For
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {tool.bestFor}
              </p>
            </section>

            {/* Features */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {tool.name} Features
              </h2>

              <ul className="mt-5 space-y-3">
                {tool.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-blue-400 mt-1">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pricing */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {tool.name} Pricing
              </h2>

              <div className="mt-5 bg-black border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">
                    Pricing type:
                  </strong>{" "}
                  {tool.pricing}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {tool.pricingDetails}
                </p>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-blue-400 hover:text-blue-300"
                >
                  Check official pricing →
                </a>
              </div>
            </section>

            {/* Pros and Cons */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {tool.name} Pros and Cons
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-6">

                {/* Pros */}
                <div className="bg-black border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold">
                    Pros
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {tool.pros.map((pro, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-green-400">
                          ✓
                        </span>

                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-black border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold">
                    Cons
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {tool.cons.map((con, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-red-400">
                          ✕
                        </span>

                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>

            {/* Rating */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {tool.name} Rating
              </h2>

              <div className="mt-5 bg-black border border-gray-800 rounded-2xl p-6">
                <div className="text-3xl font-bold">
                  ⭐ {tool.rating}/5
                </div>

                <p className="text-gray-400 mt-3">
                  Directory rating for {tool.name}.
                </p>
              </div>
            </section>

          </article>

          {/* Alternatives */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold">
              {tool.name} Alternatives
            </h2>

            <p className="text-gray-400 mt-3">
              Other AI tools you may want to compare with{" "}
              {tool.name}.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-6">
              {tool.alternatives.map((alternative) => {
                const alternativeTool = tools.find(
                  (item) => item.name === alternative
                );

                if (!alternativeTool) {
                  return null;
                }

                return (
                  <Link
                    key={alternativeTool.id}
                    href={`/tools/${alternativeTool.slug}`}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
                  >
                    <div
                      className="text-3xl"
                      aria-hidden="true"
                    >
                      {alternativeTool.icon}
                    </div>

                    <h3 className="text-lg font-bold mt-3">
                      {alternativeTool.name}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {alternativeTool.description}
                    </p>

                    <span className="inline-block mt-4 text-blue-400 text-sm">
                      View {alternativeTool.name} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <section className="mt-14">
              <h2 className="text-3xl font-bold">
                More {tool.category} AI Tools
              </h2>

              <div className="grid md:grid-cols-3 gap-5 mt-6">
                {relatedTools.map((relatedTool) => (
                  <Link
                    key={relatedTool.id}
                    href={`/tools/${relatedTool.slug}`}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
                  >
                    <div
                      className="text-3xl"
                      aria-hidden="true"
                    >
                      {relatedTool.icon}
                    </div>

                    <h3 className="text-lg font-bold mt-3">
                      {relatedTool.name}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {relatedTool.description}
                    </p>

                    <span className="inline-block mt-4 text-blue-400 text-sm">
                      View Tool →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
    </>
  );
}