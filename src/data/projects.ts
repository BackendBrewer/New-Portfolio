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
  // {
  //   slug: "ai-classroom-engagement",
  //   title: "AI-Driven Classroom Engagement System",
  //   description:
  //     "Final year project — deep learning system analyzing student engagement via facial expression, eye-tracking, and posture analysis.",
  //   tags: ["Python", "OpenCV", "TensorFlow"],
  //   image: "/images/projects/placeholder.png",
  //   featured: true,
  //   role: "Final Year Project (FYP)",
  //   duration: "University Project",
  //   overview:
  //     "This system uses computer vision and deep learning to monitor and analyze student engagement in real time — tracking facial expressions, eye movement, and posture, then visualizing the data on a live dashboard.",
  //   challenges: [
  //     {
  //       problem: "Getting reliable real-time detection without lagging the video feed.",
  //       solution:
  //         "Optimized the OpenCV and TensorFlow pipeline for real-time inference, balancing accuracy with processing speed for smooth live monitoring.",
  //     },
  //     {
  //       problem: "Turning raw detection data into something meaningful for a teacher to act on.",
  //       solution:
  //         "Built a real-time dashboard that aggregates engagement metrics into clear visual reports instead of raw model output.",
  //     },
  //   ],
  // },
  // {
  //   slug: "data-warehouse-bi",
  //   title: "Data Warehouse for Business Intelligence",
  //   description:
  //     "Centralized data warehouse built with Microsoft Fabric and SQL, with Power BI dashboards for reporting.",
  //   tags: ["Microsoft Fabric", "SQL", "Power BI", "Azure Data Factory"],
  //   image: "/images/projects/placeholder.png",
  //   featured: false,
  //   role: "Data Engineer Trainee",
  //   duration: "Nov 2024 — Feb 2025",
  //   overview:
  //     "Built a centralized data warehouse to support data-driven decision-making, with ETL pipelines feeding clean, structured data into interactive Power BI dashboards.",
  //   challenges: [
  //     {
  //       problem: "Extracting and transforming data from multiple sources reliably.",
  //       solution:
  //         "Designed and implemented ETL pipelines using Azure Data Factory, standardizing the extraction and transformation process across sources.",
  //     },
  //     {
  //       problem: "Making raw warehouse data useful for non-technical stakeholders.",
  //       solution:
  //         "Developed interactive Power BI dashboards that turned warehouse data into actionable, easy-to-read business insights.",
  //     },
  //   ],
  // },
];