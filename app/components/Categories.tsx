export default function Categories() {
  const categories = [
    "✍️ Writing",
    "🎨 Image",
    "🎥 Video",
    "💻 Coding",
    "📈 Marketing",
    "🎵 Audio",
    "🤖 Chatbot",
    "📊 Productivity",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-gray-900 hover:bg-blue-600 transition-all duration-300 rounded-xl p-6 text-center cursor-pointer border border-gray-800 hover:border-blue-500"
          >
            <p className="text-lg font-medium text-white">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}