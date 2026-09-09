export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Laravel Developer",
    company: "TRZ Technologies",
    duration: "Jan 2026 — Present",
    description:
      "Joined as a paid intern working on Palsome, a live Laravel-based social media platform. Responsible for building new features, fixing bugs, and maintaining backend logic alongside a senior development team.",
  },
  {
    role: "Data Engineer Trainee",
    company: "Digifloat",
    duration: "Nov 2024 — Feb 2025",
    description:
      "Developed and optimized ETL pipelines for data processing, used PySpark for big data workloads, deployed containerized data solutions with Docker, managed real-time streaming with Apache Kafka, and integrated workflows into Microsoft Fabric.",
  },
];