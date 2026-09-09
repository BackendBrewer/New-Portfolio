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
      "Palsome is a live social media platform focused on privacy-first sharing. I work on backend features and bug fixes as part of the development team.",
    challenges: [
      {
        problem:
          "Handling real-time-feeling feed updates without overloading the database on every request.",
        solution:
          "Implemented query caching and optimized eager loading to reduce redundant database calls, improving response times significantly.",
      },
      {
        problem: "Managing complex relationships between users, posts, and interactions cleanly.",
        solution:
          "Structured Eloquent relationships and used repository-style query scopes to keep controllers thin and logic reusable.",
      },
    ],
  },
  {
    slug: "express-it",
    title: "Express It",
    description: "Full-featured eCommerce platform for gym-related products, built with Laravel.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/images/projects/placeholder.png",
    featured: true,
    role: "Full Stack Developer",
    duration: "Personal Project",
    overview:
      "Express It is an eCommerce web application built for gym-related products, covering the full purchase flow from browsing to checkout.",
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
    slug: "ai-classroom-engagement",
    title: "AI-Driven Classroom Engagement System",
    description:
      "Final year project — deep learning system analyzing student engagement via facial expression, eye-tracking, and posture analysis.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    image: "/images/projects/placeholder.png",
    featured: true,
    role: "Final Year Project (FYP)",
    duration: "University Project",
    overview:
      "This system uses computer vision and deep learning to monitor and analyze student engagement in real time — tracking facial expressions, eye movement, and posture, then visualizing the data on a live dashboard.",
    challenges: [
      {
        problem: "Getting reliable real-time detection without lagging the video feed.",
        solution:
          "Optimized the OpenCV and TensorFlow pipeline for real-time inference, balancing accuracy with processing speed for smooth live monitoring.",
      },
      {
        problem: "Turning raw detection data into something meaningful for a teacher to act on.",
        solution:
          "Built a real-time dashboard that aggregates engagement metrics into clear visual reports instead of raw model output.",
      },
    ],
  },
  {
    slug: "data-warehouse-bi",
    title: "Data Warehouse for Business Intelligence",
    description:
      "Centralized data warehouse built with Microsoft Fabric and SQL, with Power BI dashboards for reporting.",
    tags: ["Microsoft Fabric", "SQL", "Power BI", "Azure Data Factory"],
    image: "/images/projects/placeholder.png",
    featured: false,
    role: "Data Engineer Trainee",
    duration: "Nov 2024 — Feb 2025",
    overview:
      "Built a centralized data warehouse to support data-driven decision-making, with ETL pipelines feeding clean, structured data into interactive Power BI dashboards.",
    challenges: [
      {
        problem: "Extracting and transforming data from multiple sources reliably.",
        solution:
          "Designed and implemented ETL pipelines using Azure Data Factory, standardizing the extraction and transformation process across sources.",
      },
      {
        problem: "Making raw warehouse data useful for non-technical stakeholders.",
        solution:
          "Developed interactive Power BI dashboards that turned warehouse data into actionable, easy-to-read business insights.",
      },
    ],
  },
];