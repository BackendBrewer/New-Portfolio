export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  overview: string;
  challenges: {
    problem: string;
    solution: string;
  }[];
  role: string;
  duration: string;
}

export const projects: Project[] = [
  {
    slug: "palsome",
    title: "Palsome",
    description: "Laravel-based social media platform with real-time features.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/images/projects/palsome.png",
    gallery: [
      "/images/projects/palsome-1.png",
      "/images/projects/palsome-2.png",
    ],
    liveUrl: "https://palsome.com",
    featured: true,
    role: "Laravel Developer Intern",
    duration: "Jan 2026 — Present",
    overview:
      "Palsome is a live social media platform focused on privacy-first sharing. I work on backend features, bug fixes, and new functionality as part of the development team, handling everything from real-time chat issues to admin reporting tools.",
    challenges: [
      {
        problem:
          "QA reported nine separate issues in the group and individual chat system — blocked users appearing in search, media not displaying correctly, broken reply threads, and video scrolling glitches during calls.",
        solution:
          "Traced each issue back to its root cause across the chat and calling modules and resolved all nine as verified by QA, improving the reliability of real-time messaging platform-wide.",
      },
      {
        problem:
          "Broken or missing images were showing up as broken-icon placeholders across pages, groups, rooms, events, and friend suggestions — a small bug with a big visual footprint across the entire platform.",
        solution:
          "Built a reusable PHP and JS helper that detects broken media and automatically swaps in a default image, then applied it across every image tag site-wide for a consistent fallback experience.",
      },
      {
        problem:
          "Post expiry times were always displaying in English regardless of the user's selected language, even though translation worked correctly everywhere else on the platform.",
        solution:
          "Traced the bug to an AJAX route sitting outside the localization middleware group, so Laravel couldn't detect the active locale for that request. Moving it inside the correct middleware group fixed the translation immediately.",
      },
      {
        problem:
          "The platform needed a way to rank users by trending post engagement instead of the existing coin-based system, with no API in place to support it.",
        solution:
          "Designed and built new paginated APIs to surface trending users by engagement, then built the corresponding web controller and frontend from scratch to bring the feature to the website alongside the existing mobile app.",
      },
    ],
  },
  {
    slug: "express-it",
    title: "Express It",
    description: "Full-featured eCommerce platform for IT related products, built with Laravel.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/images/projects/express.jpg",
    featured: true,
    role: "Full Stack Developer",
    duration: "Personal Project",
    overview:
      "Express It is an eCommerce web application built for IT related products, covering the full purchase flow from browsing to checkout.",
    challenges: [
      {
        problem: "Building a smooth cart and checkout flow with accurate order tracking.",
        solution:
          "Designed the database schema around orders, order items, and product variants, and integrated a payment flow with proper validation at each step.",
      },
      {
        problem: "Managing product listings and inventory without a messy admin experience.",
        solution:
          "Built a clean admin panel for product and order management, keeping database queries efficient as the product catalog grew.",
      },
    ],
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description: "Full-stack personal finance tracker with per-user data isolation and visual analytics.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
    image: "/images/projects/expense-tracker.png",
    gallery: [
      "/images/projects/expense-tracker-1.png",
      "/images/projects/expense-tracker-2.png",
    ],
    liveUrl: "https://self-expense.vercel.app",
    featured: true,
    role: "Personal Project",
    duration: "Sep 2026",
    overview:
      "A privacy-first expense tracker built to practice full-stack development outside of Laravel. Users can log income and expenses, view spending patterns through interactive charts, and manage their financial records — with every account's data fully isolated at the database query level. Built end-to-end with Next.js App Router, Prisma ORM, and credentials-based authentication.",
    challenges: [
      {
        problem:
          "Needed every user's financial records to stay strictly private, with no risk of one account ever seeing or modifying another's data.",
        solution:
          "Scoped every database query (reads, updates, deletes) to the authenticated session's user ID, and added explicit ownership checks in Server Actions so a user could never mutate a transaction they didn't own — even by guessing another record's ID.",
      },
      {
        problem:
          "Prisma's Decimal type (used for currency precision) can't cross the Server-to-Client Component boundary in Next.js — passing raw transaction data to chart or export components threw serialization errors.",
        solution:
          "Converted Decimal fields to plain numbers immediately after fetching from the database, before any data reached a Client Component, keeping currency precision intact server-side while satisfying React's serialization rules.",
      },
      {
        problem:
          "The NextAuth middleware bundle exceeded Vercel's 1MB Edge Function limit because it pulled in Prisma and bcrypt — both incompatible with the Edge runtime.",
        solution:
          "Split the auth configuration into an Edge-safe config (used only by middleware for route protection) and a full config with the credentials provider and database logic (used only in Node runtime contexts), cutting the middleware bundle well under the limit.",
      },
      {
        problem:
          "Needed a way to filter and export transaction history without adding a heavy client-side state library.",
        solution:
          "Used URL search params as the single source of truth for filters (type, category, date range), letting Server Components re-fetch filtered data on navigation, and built CSV export client-side from the already-fetched transaction list.",
      },
    ],
  },
  {
    slug: "url-shortener",
    title: "URL Shortener + Analytics",
    description: "Laravel-based URL shortener with async click tracking and an analytics dashboard.",
    tags: ["Laravel", "PHP", "MySQL", "Sanctum"],
    image: "/images/projects/url-shortener.png",
    gallery: [
      "/images/projects/url-shortener-1.png",
      "/images/projects/url-shortener-2.png",
    ],
    featured: true,
    role: "Personal Project",
    duration: "Sep 2026",
    overview:
      "A URL shortener built to go deep on Laravel concepts that don't come up in day-to-day feature work — event-driven architecture, queued jobs, API authentication, and caching — inside a deliberately small, focused scope. Users create short links with optional custom aliases and expiry dates, then track clicks by device, browser, and referrer through a dashboard with live charts. A token-based API layer lets the same functionality be driven from outside the browser, e.g. Postman or an automation script.",
    challenges: [
      {
        problem:
          "Click tracking needed to happen without slowing down the redirect itself.",
        solution:
          "Dispatched a event on every click, so the redirect returns immediately while tracking data is recorded asynchronously in the background.",
      },
      {
        problem:
          "Custom aliases need to be globally unique across all users, which produced a poor experience when a user's chosen alias failed validation only after submitting the form.",
        solution:
          "Built a debounced live-availability check that tells the user whether their chosen alias is free while they're still typing, before they ever submit the form.",
      },
    ],
  },
];