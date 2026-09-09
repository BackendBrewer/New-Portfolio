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
      { name: "Python", level: "Comfortable" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "Comfortable" },
      { name: "React", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "HTML / CSS", level: "Strong" },
      { name: "Bootstrap", level: "Comfortable" },
      { name: "Tailwind CSS", level: "Comfortable" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: "Comfortable" },
      { name: "PostgreSQL", level: "Comfortable" },
    ],
  },
  {
    category: "Data Engineering",
    items: [
      { name: "ETL Pipelines", level: "Comfortable" },
      { name: "Data Warehousing", level: "Comfortable" },
      { name: "Power BI", level: "Comfortable" },
      { name: "Microsoft Fabric", level: "Comfortable" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "Docker", level: "Learning" },
      { name: "Vercel", level: "Comfortable" },
    ],
  },
];