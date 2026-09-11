export interface WorkLogEntry {
  date: string;
  title: string;
  challenge: string;
  solution: string;
  tags: string[];
}

export const workLog: WorkLogEntry[] = [
  {
    date: "2026-08-21",
    title: "Fixing chat and calling bugs reported by QA",
    challenge:
      "QA flagged nine separate issues in the group and individual chat system — blocked users still appearing in search, media not displaying correctly, reply messages breaking, and video scrolling glitches during calls.",
    solution:
      "Went through each issue individually, tracing them back to their root cause in the chat and calling modules, and resolved all nine as verified by QA — improving the overall reliability of real-time messaging on the platform.",
    tags: ["Laravel", "Real-time", "Bug Fixing"],
  },
  {
    date: "2026-08-19",
    title: "Building a dynamic user activity report for admins",
    challenge:
      "The admin team needed a way to generate a report showing how many posts a specific user made across the entire platform — pages, groups, rooms, events, and the main timeline — within a custom date range.",
    solution:
      "Built a new Excel export feature where an admin enters a user's name, email, and date range, and the system compiles activity across every content type into one downloadable report — plus two additional report variants for page-level and page-by-user breakdowns.",
    tags: ["Laravel", "Excel Export", "Admin Tools"],
  },
  {
    date: "2026-08-04",
    title: "Making site settings dynamic across web and app",
    challenge:
      "Video/audio format restrictions, post and story size limits, and app refresh intervals were hardcoded, meaning every change required a code deployment instead of just updating a setting.",
    solution:
      "Connected the web platform to the same settings API used by the admin panel, so changes made there now apply instantly across both the web and mobile app — no redeployment needed for simple config changes.",
    tags: ["Laravel", "API Integration"],
  },
  {
    date: "2026-06-03",
    title: "Handling broken media gracefully across the platform",
    challenge:
      "Broken or missing images (deleted files, failed uploads) were showing as broken image icons across pages, groups, rooms, events, and friend suggestions — a small bug with a big visual impact site-wide.",
    solution:
      "Built a reusable PHP and JS helper that detects broken media and swaps in a default placeholder image automatically, then applied it across every image tag on the platform for a consistent, polished fallback.",
    tags: ["PHP", "JavaScript", "UX"],
  },
  {
    date: "2026-06-17",
    title: "Building the Wall of Fame API and frontend",
    challenge:
      "The platform needed a way to surface users with trending posts — previously ranked only by a coin system — as a paginated, engagement-based leaderboard, with no existing API for it.",
    solution:
      "Designed and built new APIs to fetch trending users by post engagement (paginated at 15 per page), then built the corresponding web controller and frontend from scratch to bring the feature to the website alongside the existing app version.",
    tags: ["Laravel", "API Design", "Frontend"],
  },
  {
    date: "2026-05-11",
    title: "Tracking down a stubborn translation bug",
    challenge:
      "Post expiry times were always displaying in English regardless of the user's selected language, even though translation worked correctly everywhere else on the platform.",
    solution:
      "Traced the issue to the AJAX route being defined outside the localization middleware group, which meant Laravel couldn't detect the active locale for that request. Moving the route inside the correct middleware group fixed the translation immediately.",
    tags: ["Laravel", "Localization", "Debugging"],
  },
  {
    date: "2026-05-20",
    title: "Fixing a double-notification bug in nested comment replies",
    challenge:
      "Users were receiving duplicate notifications when replying to nested comment threads — both the post owner and thread participants were being notified incorrectly for the same interaction.",
    solution:
      "Rebuilt the notification logic for nested replies so each participant receives exactly one accurate notification per interaction, cleaning up a source of notification spam that was affecting user experience.",
    tags: ["Laravel", "Notifications"],
  },
  {
    date: "2026-05-04",
    title: "Auto-blocking users for offensive content",
    challenge:
      "The platform needed automatic moderation for posts that crossed an offensiveness threshold, without relying entirely on manual admin review.",
    solution:
      "Integrated SightEngine's content moderation API into the post pipeline to automatically detect and block users whose posts exceeded the offensiveness limit, adding a layer of automated content safety.",
    tags: ["Laravel", "API Integration", "Moderation"],
  },
  {
    date: "2026-09-11",
    title: "Fixed UI Event Bubbling & Unintended Redirects",
    challenge: "Clicking empty space in a floating emoji panel accidentally triggered a background button due to DOM element overlap and unhandled click events.",
    solution: "Refactored the JS-based button into a standard HTML anchor tag in the Blade template, which stopped click-through issues and bypassed browser pop-up blocks.",
    tags: ["Laravel Blade", "JavaScript", "UI Debugging", "DOM Events"]
  }
//   {
//     date: "YYYY-MM-DD",
//     title: "Short, clear title",
//     challenge: "1-2 sentences — what was the problem",
//     solution: "1-2 sentences — what you did about it",
//     tags: ["relevant", "tech", "tags"],
//   },
];