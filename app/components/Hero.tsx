"use client";

import Link from "next/link";
import { useState } from "react";
import ToolCard from "./ToolCard";
import { tools } from "../data/tools";

export default function Hero() {
  const [search, setSearch] = useState("");

  const searchResults = tools.filter((tool) =>
    `${tool.name} ${tool.category} ${tool.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const displayedTools = search
    ? searchResults.slice(0, 4)
    : tools.slice(0, 4);

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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search AI Tools..."
        className="w-full max-w-xl rounded-xl border border-gray-700 bg-gray-900 p-4 text-white mt-8 outline-none focus:border-blue-500"
      />

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto w-full">

        {displayedTools.length > 0 ? (
          displayedTools.map((tool) => (
            <ToolCard
              key={tool.id}
              icon={tool.icon}
              title={tool.name}
              category={tool.category}
              price={tool.pricing}
              rating={tool.rating.toString()}
              description={tool.description}
              url={tool.url}
              slug={tool.slug}  // ✅ ADDED
            />
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No AI tool found.
          </p>
        )}

      </div>

      {/* View More */}
      {!search && (
        <Link
          href="/tools"
          className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
        >
          View More AI Tools →
        </Link>
      )}

    </main>
  );
}