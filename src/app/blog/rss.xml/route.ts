import { blogPosts } from "@/data/blog";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.vercel.app";

  const items = blogPosts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${base}/blog/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Muhammad Salman — Blog</title>
    <link>${base}/blog</link>
    <description>Thoughts on Laravel and web development.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}