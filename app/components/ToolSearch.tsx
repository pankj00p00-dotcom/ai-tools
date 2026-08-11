"use client";

import { useState } from "react";
import ToolCard from "./ToolCard";
import { tools } from "../data/tools";

export default function ToolSearch() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");
  const [sort, setSort] = useState("Top Rated");

  const categories = [
   "All",
  "Chatbot",
  "Research",
  "Writing",
  "Image",
  "Design",
  "Video",
  "Coding",
  "Voice",
  "Music",
  "SEO",
  "Productivity",
  
  ];

  const pricingOptions = [
    "All",
    "Free",
    "Freemium",
    "Paid",
  ];

  let filteredTools = tools.filter((tool) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      tool.name.toLowerCase().includes(searchText) ||
      tool.category.toLowerCase().includes(searchText) ||
      tool.description.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || tool.category === category;

    const matchesPricing =
      pricing === "All" || tool.pricing === pricing;

    return matchesSearch && matchesCategory && matchesPricing;
  });

  filteredTools = [...filteredTools].sort((a, b) => {
    if (sort === "Top Rated") {
      return b.rating - a.rating;
    }

    if (sort === "Name A-Z") {
      return a.name.localeCompare(b.name);
    }

    if (sort === "Name Z-A") {
      return b.name.localeCompare(a.name);
    }

    return 0;
  });

  return (
    <>
      {/* Search */}
      <div className="max-w-xl mx-auto mt-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search AI Tools..."
          className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full border transition ${
              category === item
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-700 text-gray-300 hover:border-blue-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Pricing + Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">

        {/* Pricing */}
        <div className="flex flex-wrap gap-2">
          {pricingOptions.map((item) => (
            <button
              key={item}
              onClick={() => setPricing(item)}
              className={`px-4 py-2 rounded-lg border transition ${
                pricing === item
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:border-blue-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Sorting */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2 outline-none"
        >
          <option>Top Rated</option>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
        </select>

      </div>

      {/* Results Count */}
      <p className="text-gray-500 mt-8">
        Showing {filteredTools.length} tools
      </p>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredTools.map((tool) => (
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

      {/* No Results */}
      {filteredTools.length === 0 && (
        <p className="text-center text-gray-400 mt-12">
          No AI tools found.
        </p>
      )}
    </>
  );
}