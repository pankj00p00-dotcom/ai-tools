import { tools } from "../../data/tools";
import Link from "next/link";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Tool Not Found
          </h1>

          <p className="text-gray-400 mt-4">
            The AI tool you are looking for does not exist.
          </p>

          <Link
            href="/tools"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            ← Back to AI Tools
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          href="/tools"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to AI Tools
        </Link>

        {/* Tool Header */}
        <div className="mt-10 bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">

          <div className="text-6xl">
            {tool.icon}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            {tool.name}
          </h1>

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

          <p className="text-gray-300 text-lg leading-relaxed mt-8">
            {tool.description}
          </p>

          {/* Open Tool */}
<a
  href={tool.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
>
  Visit {tool.name} →
</a>

        </div>

      </div>
    </main>
  );
}