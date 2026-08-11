import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🚀</span>

          <span className="text-2xl font-bold text-white">
            AI Tools
          </span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li>
            <Link
              href="/"
              className="hover:text-white transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/tools"
              className="hover:text-white transition"
            >
              AI Tools
            </Link>
          </li>

          <li>
            <Link
              href="/tools"
              className="hover:text-white transition"
            >
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/tools"
              className="hover:text-white transition"
            >
              Trending
            </Link>
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Link
            href="/tools"
            className="hidden md:block border border-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Explore Tools
          </Link>

          <Link
            href="/tools"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition"
          >
            Explore →
          </Link>

        </div>

      </nav>
    </header>
  );
}