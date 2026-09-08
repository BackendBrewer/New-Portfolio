import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsContent from "@/components/SkillsContent";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools used by Muhammad Salman.",
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <SkillsContent />
      <Footer />
    </>
  );
}