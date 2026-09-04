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
];