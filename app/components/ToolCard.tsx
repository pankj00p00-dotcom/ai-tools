import Link from "next/link";

type ToolCardProps = {
  icon: string;
  title: string;
  slug: string;
  category: string;
  price: string;
  description?: string;
  rating?: string;
};

export default function ToolCard({
  icon,
  title,
  slug,
  category,
  price,
  description,
  rating = "4.9",
}: ToolCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">

      {/* Icon */}
      <div className="text-4xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      {/* Category */}
      <p className="text-gray-400 mt-2">
        {category}
      </p>

      {/* Rating + Price */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-yellow-400">
          ⭐ {rating}
        </span>

        <span className="text-green-400 font-semibold">
          {price}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-400 text-sm mt-5 leading-relaxed">
          {description}
        </p>
      )}

      {/* Button */}
      <Link
        href={`/tools/${slug}`}
        className="block text-center mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2.5 font-semibold transition"
      >
        Open Tool →
      </Link>

    </div>
  );
}