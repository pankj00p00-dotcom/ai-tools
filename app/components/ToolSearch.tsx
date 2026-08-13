"use client";

import { useEffect, useState } from "react";
import ToolCard from "./ToolCard";
import { tools } from "../data/tools";

export default function ToolSearch() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");
  const [sort, setSort] = useState("Top Rated");

  // Categories automatically generated from tools.ts
  const categories = [
    "All",
    ...Array.from(
      new Set(tools.map((tool) => tool.category))
    ).sort(),
  ];

  const pricingOptions = [
    "All",
    "Free",
    "Freemium",
    "Paid",
  ];

  // Read filters from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const searchQuery = params.get("search");
    const categoryQuery = params.get("category");
    const pricingQuery = params.get("pricing");
    const sortQuery = params.get("sort");

    if (searchQuery) {
      setSearch(searchQuery);
    }

    if (
      categoryQuery &&
      categories.includes(categoryQuery)
    ) {
      setCategory(categoryQuery);
    }

    if (
      pricingQuery &&
      pricingOptions.includes(pricingQuery)
    ) {
      setPricing(pricingQuery);
    }

    if (
      sortQuery &&
      ["Top Rated", "Name A-Z", "Name Z-A"].includes(sortQuery)
    ) {
      setSort(sortQuery);
    }
  }, []);

  // Update URL
  const updateURL = (
    newSearch: string,
    newCategory: string,
    newPricing: string,
    newSort: string
  ) => {
    const params = new URLSearchParams();

    if (newSearch.trim()) {
      params.set("search", newSearch.trim());
    }

    if (newCategory !== "All") {
      params.set("category", newCategory);
    }

    if (newPricing !== "All") {
      params.set("pricing", newPricing);
    }

    if (newSort !== "Top Rated") {
      params.set("sort", newSort);
    }

    const queryString = params.toString();

    window.history.replaceState(
      {},
      "",
      queryString
        ? `/tools?${queryString}`
        : "/tools"
    );
  };

  // Search
  const handleSearch = (value: string) => {
    setSearch(value);

    updateURL(
      value,
      category,
      pricing,
      sort
    );
  };

  // Category
  const handleCategory = (value: string) => {
    setCategory(value);

    updateURL(
      search,
      value,
      pricing,
      sort
    );
  };

  // Pricing
  const handlePricing = (value: string) => {
    setPricing(value);

    updateURL(
      search,
      category,
      value,
      sort
    );
  };

  // Sorting
  const handleSort = (value: string) => {
    setSort(value);

    updateURL(
      search,
      category,
      pricing,
      value
    );
  };

  // Filter tools
  let filteredTools = tools.filter((tool) => {
    const searchText = search
      .toLowerCase()
      .trim();

    const matchesSearch =
      tool.name
        .toLowerCase()
        .includes(searchText) ||
      tool.category
        .toLowerCase()
        .includes(searchText) ||
      tool.description
        .toLowerCase()
        .includes(searchText);

    const matchesCategory =
      category === "All" ||
      tool.category === category;

    const matchesPricing =
      pricing === "All" ||
      tool.pricing === pricing;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPricing
    );
  });

  // Sorting
  filteredTools = [...filteredTools].sort(
    (a, b) => {
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
    }
  );

  return (
    <>
      {/* Search */}
      <div className="max-w-xl mx-auto mt-10">
        <input
          type="text"
          value={search}
          onChange={(e) =>
            handleSearch(e.target.value)
          }
          placeholder="Search AI Tools..."
          aria-label="Search AI tools"
          className="w-full rounded-xl border border-gray-700 bg-gray-900 p-4 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() =>
              handleCategory(item)
            }
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
              onClick={() =>
                handlePricing(item)
              }
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
          onChange={(e) =>
            handleSort(e.target.value)
          }
          aria-label="Sort AI tools"
          className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2 outline-none"
        >
          <option>Top Rated</option>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
        </select>

      </div>

      {/* Results Count */}
      <p className="text-gray-500 mt-8">
        Showing {filteredTools.length}{" "}
        {filteredTools.length === 1
          ? "tool"
          : "tools"}
      </p>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            icon={tool.icon}
            title={tool.name}
            category={tool.category}
            price={tool.pricing}
            rating={tool.rating.toString()}
            description={tool.description}
            url={tool.url}
            slug={tool.slug}
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