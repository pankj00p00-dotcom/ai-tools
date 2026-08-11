export default function Testimonials() {
  const reviews = [
    {
      name: "John Carter",
      role: "Content Creator",
      text: "This website helped me discover amazing AI tools for writing and video editing.",
    },
    {
      name: "Sarah Wilson",
      role: "Startup Founder",
      text: "The clean interface and curated AI tools save me hours every week.",
    },
    {
      name: "Michael Lee",
      role: "Software Developer",
      text: "One of the best AI directories I've used. Everything is organized perfectly.",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            💬 What Users Say
          </h2>

          <p className="text-gray-400 mt-4">
            Thousands of users trust our AI tools directory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#121826] border border-gray-800 rounded-2xl p-8"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 leading-7">
                "{review.text}"
              </p>

              <div className="mt-8">
                <h3 className="text-white font-semibold">
                  {review.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {review.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}