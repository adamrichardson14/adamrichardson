import Link from "next/link";

export default function Header() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8 px-4
    sm:px-6 md:px-8 max-w-2xl mx-auto">
      <div>
        <Link href="/">
          <a className="text-gray-100 hover:text-gray-300 text-xl">Adam Richardson</a>
        </Link>
      </div>
      <div className="text-gray-100">
        <ul>
          <li className="inline-flex">
            <Link href="/">
              <a className="hover:text-gray-300">Home</a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/blog">
              <a className="hover:text-gray-300">Blog</a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/code">
              <a className="hover:text-gray-300">Snippets</a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/about">
              <a className="hover:text-gray-300">About</a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/videos">
              <a className="hover:text-gray-300">Videos</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
