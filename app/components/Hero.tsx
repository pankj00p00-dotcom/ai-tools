import ToolCard from "./ToolCard";
import { tools } from "../data/tools";

export default function Hero() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 pt-28 pb-20">

      {/* Badge */}
      <div className="mb-6">
        <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
          ✨ Discover 1000+ AI Tools
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-center leading-tight">
        Discover the
        <br />
        <span className="text-blue-500">
          Best AI Tools
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-center text-xl text-gray-400">
        Find the best AI tools for Writing, Images, Video,
        Coding, SEO, Marketing and Productivity.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search AI Tools..."
        className="w-full max-w-xl rounded-xl border border-gray-700 bg-gray-900 p-4 text-white mt-8"
      />

      {/* Featured Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto w-full">

        {tools.slice(0, 4).map((tool) => (
          <ToolCard
            key={tool.id}
            icon={tool.icon}
            title={tool.name}
            slug={tool.slug}
            category={tool.category}
            price={tool.pricing}
            rating={tool.rating.toString()}
            description={tool.description}
          />
        ))}

      </div>

    </main>
  );
}