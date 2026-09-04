"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md px-4 py-2 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600";

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white"
      >
        Contact
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <input name="name" type="text" placeholder="Your name" required className={inputClass} />
        <input name="email" type="email" placeholder="Your email" required className={inputClass} />
        <textarea name="message" placeholder="Your message" required rows={4} className={inputClass} />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-2 rounded-md bg-orange-500 text-black font-medium text-sm hover:bg-orange-400 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-600 dark:text-green-500">Message sent — thanks!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-500">Something went wrong, try again.</p>
        )}
      </motion.form>
    </section>
  );
}