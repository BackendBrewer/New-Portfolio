import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on Laravel, web development, and building things.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Blog
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Thoughts on Laravel, web development, and things I'm learning.
        </p>

        <div className="mt-12 space-y-8">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border-b border-neutral-200 dark:border-neutral-800 pb-8 group"
            >
              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>·</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {post.excerpt}
              </p>
            </Link>
          ))}

          {sorted.length === 0 && (
            <p className="text-neutral-500">No posts yet — coming soon.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}