"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
        Something went wrong
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        An unexpected error occurred. Try refreshing, or head back home.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          onClick={reset}
          className="px-5 py-2 rounded-md bg-orange-500 text-black font-medium text-sm hover:bg-orange-400 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}