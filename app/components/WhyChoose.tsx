export default function WhyChoose() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Search",
      desc: "Find the perfect AI tool in seconds.",
    },
    {
      icon: "✅",
      title: "Verified Tools",
      desc: "Only trusted and quality AI tools listed.",
    },
    {
      icon: "🆕",
      title: "Daily Updates",
      desc: "New AI tools added every day.",
    },
    {
      icon: "🌎",
      title: "1000+ Tools",
      desc: "Browse tools from every category.",
    },
  ];

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Why Choose AI Tools?
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Everything you need to discover the best AI tools.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}