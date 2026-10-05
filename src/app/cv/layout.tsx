import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Download the CV of Muhammad Salman — Laravel developer.",
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}