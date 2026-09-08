export interface Skill {
  name: string;
  level: "Learning" | "Comfortable" | "Strong";
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      { name: "Laravel", level: "Strong" },
      { name: "PHP", level: "Strong" },
      { name: "MySQL", level: "Comfortable" },
      { name: "REST APIs", level: "Comfortable" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "Comfortable" },
      { name: "React", level: "Comfortable" },
      { name: "TypeScript", level: "Learning" },
      { name: "Tailwind CSS", level: "Comfortable" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "Laragon", level: "Strong" },
      { name: "Vercel", level: "Comfortable" },
    ],
  },
];