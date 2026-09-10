import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceContent from "@/components/ExperienceContent";
import WorkLog from "@/components/WorkLog";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Muhammad Salman — Laravel developer.",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <ExperienceContent />
      <WorkLog />
      <Footer />
    </>
  );
}