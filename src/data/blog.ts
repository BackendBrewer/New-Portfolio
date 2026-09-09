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
    slug: "learning-laravel",
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
  {
    slug: "building-my-portfolio-with-nextjs",
    title: "Building My Portfolio with Next.js — Lessons Learned",
    excerpt:
      "What actually went wrong (and right) while building this site from scratch — real bugs, real fixes, no sugar-coating.",
    date: "2026-09-09",
    tags: ["Next.js", "Web Development"],
    content: [
      "I wanted this portfolio to be different from the templates I kept seeing — fast, no bloated CMS, and built entirely by me. That decision alone shaped almost every technical choice that followed: plain Next.js on the frontend, hardcoded data files instead of a database, and static generation wherever possible so pages load in milliseconds instead of seconds.",
      "The build went smoothly for the first few sections — hero, about, projects grid. Things got interesting once I started wiring up the more 'modern' features I wanted: a command palette, dark mode, and gallery previews. That's where most of the real lessons came from, not the basic setup.",
      "One of the earliest surprises was Tailwind v4. I expected a tailwind.config.ts file like every tutorial shows, but the newer version moved configuration into the CSS file itself. Dark mode specifically needed an extra @custom-variant declaration in globals.css before next-themes could actually control it — without that line, the dark: classes just silently did nothing, which took a while to figure out because there was no error, just a UI that refused to change.",
      "TypeScript build errors on Vercel taught me a hard lesson about dead code. I had deleted a component from my pages but forgot to delete the file itself. Locally, npm run dev never complained because unused files aren't checked unless something imports them — but npm run build type-checks the entire project, including files nobody imports anymore. That one unused file broke the whole deployment. Now I delete components the moment they stop being used, not later.",
      "Dynamic routes brought their own surprise. In the newest Next.js version, the params object in a dynamic route like /projects/[slug] isn't a plain object anymore — it's a Promise. I was accessing params.slug directly like older tutorials show, and it kept returning undefined, which quietly triggered a 404 instead of throwing a clear error. The fix was simple once I found it — await params before reading slug — but tracking down why a page 'just doesn't exist' when the slug is clearly right is a frustrating kind of bug.",
      "The most annoying issue, by far, was the social media preview image. I built a nice dynamic Open Graph image using next/og, and it worked perfectly on Facebook's debugger — but WhatsApp refused to show any preview at all. Eventually I learned dynamic OG images can be inconsistent with some crawlers, and on top of that, I'd accidentally left an old duplicate image route in the project, which meant two conflicting og:image tags were fighting for attention. WhatsApp also caches previews per-URL for a long time, so even after fixing the code, I had to test with completely fresh links to actually see the fix work. Switching to a plain static PNG instead of a dynamically generated one made everything far more predictable.",
      "Small Next.js Image warnings taught me more than I expected too. The 'missing sizes prop' warning isn't just noise — it's telling the browser exactly how much bandwidth to spend downloading an image. I was lazily setting sizes=\"100vw\" everywhere, even on images that were never actually full-width, which defeats the whole purpose of the optimization. Matching sizes to the actual rendered width of each image, not just copy-pasting the same value everywhere, made a real difference.",
      "I also learned that icon libraries change. lucide-react quietly dropped brand icons like GitHub and LinkedIn logos in a recent version, since those are trademarked assets, not generic icons. My build broke over something as small as an icon import, which was a good reminder that dependencies aren't static — what worked in a tutorial from a few months ago can silently stop existing.",
      "If I had to summarize the biggest lesson: most of the real problems weren't about writing code, they were about environment differences — local dev vs. production build, one crawler vs. another, one library version vs. the next. The code itself was rarely wrong; the assumptions around it were.",
    ],
  },
];