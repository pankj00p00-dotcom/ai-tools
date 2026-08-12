import Navbar from "../components/Navbar";
import ToolSearch from "../components/ToolSearch";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center">
            Discover AI Tools
          </h1>

          <p className="text-gray-400 text-center mt-4">
            Explore the best AI tools for every task.
          </p>

          <ToolSearch />

        </div>
      </section>

    </main>
  );
}