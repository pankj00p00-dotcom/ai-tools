import ToolCard from "./ToolCard";

export default function LatestTools() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            🚀 Latest AI Tools
          </h2>

          <p className="text-gray-400 mt-4">
            Freshly added AI tools you should explore.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
            All
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-blue-500">
            New
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-blue-500">
            Popular
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-blue-500">
            Free
          </button>

          <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-blue-500">
            Paid
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ToolCard icon="🎬" title="Pika Labs" category="Video" price="Freemium" />

          <ToolCard icon="🎨" title="Leonardo AI" category="Image" price="Free" />

          <ToolCard icon="🧠" title="Claude AI" category="Chatbot" price="Free" />

          <ToolCard icon="📈" title="Gamma AI" category="Presentation" price="Freemium" />

          <ToolCard icon="🎙️" title="HeyGen" category="Avatar" price="Paid" />

          <ToolCard icon="📄" title="Notion AI" category="Writing" price="Freemium" />

        </div>

      </div>
    </section>
  );
}