"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 space-y-8">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-4xl font-bold">Not Found</p>
      </div>
      <Link
        href="/"
        className="bg-[#231815] text-white py-2 px-4 rounded hover:bg-black transition duration-300"
        aria-label="Go back to homepage"
      >
        Go Back Home
      </Link>
    </div>
  );
}
