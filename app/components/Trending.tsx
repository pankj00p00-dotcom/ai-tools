import ToolCard from "./ToolCard";

export default function Trending() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">
            🔥 Trending AI Tools
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Most popular AI tools used by millions of people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ToolCard
            icon="🤖"
            title="ChatGPT"
            category="Chatbot"
            price="Freemium"
          />

          <ToolCard
            icon="🎨"
            title="Midjourney"
            category="Image"
            price="Paid"
          />

          <ToolCard
            icon="🖌️"
            title="Canva AI"
            category="Design"
            price="Free"
          />

          <ToolCard
            icon="🎬"
            title="Runway ML"
            category="Video"
            price="Freemium"
          />

          <ToolCard
            icon="💻"
            title="GitHub Copilot"
            category="Coding"
            price="Paid"
          />

          <ToolCard
            icon="🎤"
            title="ElevenLabs"
            category="Voice"
            price="Freemium"
          />

        </div>
      </div>
    </section>
  );
}