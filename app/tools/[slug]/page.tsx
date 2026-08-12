import { tools } from "../../data/tools";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate SEO metadata for every tool page
export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return {
      title: "AI Tool Not Found | AI Tools",
      description: "The requested AI tool could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${tool.name} – Features, Pricing & Review`;
  const description = `${tool.name} is a ${tool.category.toLowerCase()} AI tool. Learn about its features, pricing, rating and what you can use it for.`;

  const url = `https://ai-tools-three-rho.vercel.app/tools/${tool.slug}`;

  return {
    title,
    description,

    keywords: [
      tool.name,
      `${tool.name} AI`,
      `${tool.name} review`,
      `${tool.name} pricing`,
      `${tool.name} features`,
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
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Tool Not Found
            </h1>

            <p className="text-gray-400 mt-4">
              The AI tool you are looking for does not exist.
            </p>

            <Link
              href="/tools"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
            >
              ← Back to AI Tools
            </Link>
          </div>
        </main>
      </>
    );
  }

  const url = `https://ai-tools-three-rho.vercel.app/tools/${tool.slug}`;

  // Related tools from the same category
  const relatedTools = tools
    .filter(
      (item) =>
        item.category === tool.category &&
        item.id !== tool.id
    )
    .slice(0, 3);

  // Software/Application structured data
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: tool.category,
    operatingSystem: "Web",
    url: tool.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
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
        item: "https://ai-tools-three-rho.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Tools",
        item: "https://ai-tools-three-rho.vercel.app/tools",
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
        <div className="max-w-4xl mx-auto">

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
          <nav className="text-sm text-gray-500 mb-6">
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

          {/* Tool Header */}
          <article className="mt-10 bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">

            {/* Icon */}
            <div className="text-6xl" aria-hidden="true">
              {tool.icon}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mt-6">
              {tool.name}
            </h1>

            {/* Information */}
            <div className="flex flex-wrap gap-3 mt-5">

              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full">
                {tool.category}
              </span>

              <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full">
                {tool.pricing}
              </span>

              <span className="bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full">
                ⭐ {tool.rating}
              </span>

            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mt-8">
              {tool.description}
            </p>

            {/* About */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold">
                About {tool.name}
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {tool.name} is a {tool.category.toLowerCase()} AI
                tool listed in the AI Tools directory. It is
                designed to help users with tasks related to{" "}
                {tool.category.toLowerCase()} and AI-powered
                workflows.
              </p>
            </section>

            {/* Pricing */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold">
                {tool.name} Pricing
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Pricing category:{" "}
                <span className="text-white font-semibold">
                  {tool.pricing}
                </span>
                . Check the official website for the latest
                pricing, plans and available features.
              </p>
            </section>

            {/* Rating */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold">
                {tool.name} Rating
              </h2>

              <p className="text-gray-400 mt-4">
                Our directory rating:{" "}
                <span className="text-yellow-400 font-semibold">
                  ⭐ {tool.rating}/5
                </span>
              </p>
            </section>

            {/* Visit Tool */}
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Visit {tool.name} →
            </a>
          </article>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <section className="mt-14">
              <h2 className="text-3xl font-bold">
                Related {tool.category} AI Tools
              </h2>

              <div className="grid md:grid-cols-3 gap-5 mt-6">
                {relatedTools.map((relatedTool) => (
                  <Link
                    key={relatedTool.id}
                    href={`/tools/${relatedTool.slug}`}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
                  >
                    <div className="text-3xl">
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