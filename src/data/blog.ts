export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "2026-09-08" format
  tags: string[];
  content: string[]; // har item ek paragraph hai
}

export const blogPosts: BlogPost[] = [
  {
    slug: "learning-laravel-on-the-job",
    title: "What I've Learned Building Real Features in Laravel",
    excerpt:
      "A few lessons from working on a live production app as an intern — things courses don't teach you.",
    date: "2026-09-01",
    tags: ["Laravel", "Career"],
    content: [
      "When I joined TRZ Technologies as a Laravel intern, I had a decent grasp of the basics — routes, controllers, Eloquent. But working on a live app like Palsome taught me things no tutorial covers.",
      "The biggest shift was thinking about existing data. Every migration, every query change, has to consider what's already in production — you can't just wipe and restart like in a personal project.",
      "I also learned to read other people's code carefully before adding my own. Understanding the existing patterns in a codebase matters more than knowing the 'best' way to do something from scratch.",
    ],
  },
];