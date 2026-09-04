export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "palsome",
    title: "Palsome",
    description: "Laravel-based social media platform with real-time features.",
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/images/projects/palsome.png",
    liveUrl: "https://palsome.com",
    featured: true,
  },
  // yahan apne baaki projects add karte jao
];