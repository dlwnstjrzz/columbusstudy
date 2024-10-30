"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full justify-between py-3 md:py-6 px-4 md:px-8 items-center bg-white">
      <Link href="/">
        <strong className="text-xl md:text-2xl cursor-pointer hover:text-blue-600 transition-colors">
          Columbus Study
        </strong>
      </Link>
      <div className="md:hidden relative">
        <button
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`z-20
            absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2
            transform transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Main
          </Link>
          <Link
            href="/regular-course"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Class
          </Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
        >
          Main
        </Link>
        <Link
          href="/regular-course"
          className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
        >
          Class
        </Link>
      </div>
    </div>
  );
}
