import { tools } from "../../data/tools";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://ai-tools-three-rho.vercel.app";

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
      title: "AI Tool Not Found | AI Tools",
      description: "The requested AI tool could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${tool.name} Review, Features & Pricing`;
  const description = `${tool.name} review: features, pricing, pros, cons, best use cases and alternatives. Explore this ${tool.category.toLowerCase()} AI tool.`;

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
    notFound();
  }

  const url = `${SITE_URL}/tools/${tool.slug}`;

  // Related tools
  const relatedTools = tools
    .filter(
      (item) =>
        item.category === tool.category &&
        item.id !== tool.id
    )
    .slice(0, 3);

  // Software structured data
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
      price: tool.pricing === "Free" ? "0" : undefined,
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