import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "CV",
  description: "Download the CV of Muhammad Salman — Laravel developer.",
};

export default function CVPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          CV
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Download my full CV as a PDF, or view it below.
        </p>

        
          <a href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-md bg-orange-500 text-black font-medium text-sm hover:bg-orange-400 transition-colors"
        >
          <Download size={16} />
          Download CV
        </a>

        <div className="mt-10 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
          <iframe
            src="/cv.pdf"
            className="w-full h-[70vh]"
            title="Muhammad Salman CV"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}