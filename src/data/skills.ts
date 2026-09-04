export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { category: "Backend", items: ["Laravel", "PHP", "MySQL", "REST APIs"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "GitHub", "Laragon", "Vercel"] },
];