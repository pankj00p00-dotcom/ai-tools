export default function Stats() {
  const stats = [
    {
      number: "10,000+",
      title: "AI Tools",
    },
    {
      number: "500K+",
      title: "Monthly Users",
    },
    {
      number: "250+",
      title: "Categories",
    },
    {
      number: "4.9★",
      title: "Average Rating",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white">
            📊 AI Tools in Numbers
          </h2>

          <p className="text-gray-400 mt-4">
            Trusted by thousands of creators, developers and businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-[#121826] border border-gray-800 rounded-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}