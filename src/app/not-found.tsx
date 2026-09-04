import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-neutral-900 dark:text-white">404</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        This page doesn't exist — probably went looking for a feature that
        isn't built yet.
      </p>
      <Link
        href="/"
        className="mt-8 px-5 py-2 rounded-md bg-orange-500 text-black font-medium text-sm hover:bg-orange-400 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}