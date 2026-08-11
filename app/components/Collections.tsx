export default function Collections() {
  const collections = [
    {
      title: "AI for Students",
      desc: "Writing, Notes, Homework & Study",
      icon: "🎓",
    },
    {
      title: "AI for Business",
      desc: "Marketing, Sales & Productivity",
      icon: "💼",
    },
    {
      title: "AI for Developers",
      desc: "Coding, Debugging & APIs",
      icon: "💻",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white">
          ⭐ Featured Collections
        </h2>

        <p className="text-gray-400 text-center mt-3 mb-12">
          Explore AI tools by category.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#121826] border border-gray-800 p-8 hover:border-blue-500 transition"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>

              <button className="mt-6 text-blue-400 font-semibold">
                Explore →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}