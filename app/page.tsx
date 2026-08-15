import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Trending from "./components/Trending";
import Collections from "./components/Collections";
import LatestTools from "./components/LatestTools";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

const downloadTools = [
  {
    name: "Instagram Video Downloader",
    description:
      "Download eligible publicly accessible Instagram videos and Reels using a simple URL.",
    href: "/tools/instagram-video-downloader",
  },
  {
    name: "Facebook Video Downloader",
    description:
      "Download eligible public Facebook videos with a simple browser-based workflow.",
    href: "/tools/facebook-video-downloader",
  },
  {
    name: "YouTube Video Downloader",
    description:
      "Check YouTube download availability for content you own or are authorized to save.",
    href: "/tools/youtube-video-downloader",
  },
];

const featuredGuides = [
  {
    title: "How to Download Instagram Reels",
    href: "/blog/how-to-download-instagram-reels",
  },
  {
    title: "How to Download Facebook Videos",
    href: "/blog/how-to-download-facebook-videos",
  },
  {
    title: "How to Download YouTube Videos",
    href: "/blog/how-to-download-youtube-videos",
  },
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Tools",
    url: "https://ai-tools-three-rho.vercel.app/",
    description:
      "Discover the best AI tools for writing, images, video, coding, SEO, marketing and productivity.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Tools",
    url: "https://ai-tools-three-rho.vercel.app/",
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main>
        <Hero />

        <Trending />

        <Categories />

        <Collections />

        <LatestTools />

        {/* Featured Downloaders */}
        <section
          className="px-6 py-20"
          aria-labelledby="featured-downloaders"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm text-blue-400 font-medium">
                Featured Tools
              </p>

              <h2
                id="featured-downloaders"
                className="text-3xl md:text-4xl font-bold mt-2 text-white"
              >
                Video Downloaders
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Explore browser-based video downloader tools for eligible
                publicly accessible content and content you are authorized
                to save.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
              {downloadTools.map((tool) => (
                <article
                  key={tool.href}
                  className="rounded-3xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition"
                >
                  <h3 className="text-xl font-bold text-white">
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

            <div className="text-center mt-8">
              <Link
                href="/tools"
                className="text-gray-300 hover:text-white transition"
              >
                Browse all AI tools →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section
          className="px-6 py-16"
          aria-labelledby="featured-guides"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-blue-400 font-medium">
                Helpful Guides
              </p>

              <h2
                id="featured-guides"
                className="text-3xl md:text-4xl font-bold mt-2 text-white"
              >
                Video Download Guides
              </h2>

              <p className="text-gray-400 mt-4">
                Learn how to save eligible videos and use our downloader tools
                on different platforms and devices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {featuredGuides.map((guide) => (
                <article
                  key={guide.href}
                  className="rounded-2xl border border-gray-800 bg-black/40 p-5"
                >
                  <Link
                    href={guide.href}
                    className="text-lg font-semibold text-white hover:text-blue-400 transition"
                  >
                    {guide.title} →
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Visit the AI Tools Blog →
              </Link>
            </div>
          </div>
        </section>

        <Stats />

        <WhyChoose />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}