import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <span className="text-3xl">🚀</span>

              <span className="text-2xl font-bold text-white">
                AI Tools
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed">
              Discover the best AI tools for writing, images,
              video, coding, marketing, SEO and productivity.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/tools"
                className="hover:text-white transition"
              >
                All AI Tools
              </Link>

              <Link
                href="/tools"
                className="hover:text-white transition"
              >
                Categories
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Popular Categories
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/tools" className="hover:text-white transition">
                Chatbots
              </Link>

              <Link href="/tools" className="hover:text-white transition">
                AI Image
              </Link>

              <Link href="/tools" className="hover:text-white transition">
                AI Video
              </Link>

              <Link href="/tools" className="hover:text-white transition">
                Coding
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/tools"
                className="hover:text-white transition"
              >
                Explore Tools
              </Link>

              <Link
                href="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white transition"
              >
                Terms of Use
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>
            © 2026 AI Tools. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}