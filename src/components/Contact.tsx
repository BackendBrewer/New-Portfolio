"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  ArrowRight,
} from "lucide-react";

const CONTACT_EMAIL = "muhammadsalmanzubair5@gmail.com";
const CONTACT_PHONE = "+92 310 4471034";
const LOCATION = "Lahore, Pakistan";

function FloatingField({
  label,
  name,
  type = "text",
  textarea = false,
  rows = 4,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const active = focused || filled;

  const sharedProps = {
    name,
    required: true,
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      setFilled(e.target.value.length > 0);
    },
    className:
      "w-full bg-transparent text-sm text-neutral-900 dark:text-white outline-none pt-4 pb-1",
  };

  return (
    <div className="relative border-b border-neutral-300 dark:border-neutral-700 focus-within:border-orange-500 transition-colors">
      <motion.label
        animate={{
          y: active ? -6 : 8,
          scale: active ? 0.8 : 1,
          color: active ? "#f97316" : undefined,
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 origin-left text-sm text-neutral-400 pointer-events-none"
      >
        {label}
      </motion.label>
      {textarea ? (
        <textarea rows={rows} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
    </div>
  );
}

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
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Let's work together
        </h2>
        <p className="mt-2 text-neutral-500">
          Have a project in mind, an opportunity, or just want to say hi?
        </p>
      </motion.div>

      <div className="mt-10 grid gap-10 sm:grid-cols-5">
        {/* Left — contact info */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="sm:col-span-2 space-y-5"
        >
          
          <a  href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
              <Mail size={16} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Email</p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-orange-500 transition-colors">
                {CONTACT_EMAIL}
              </p>
            </div>
          </a>

          
          <a  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
            className="group flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
              <Phone size={16} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Phone</p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-orange-500 transition-colors">
                {CONTACT_PHONE}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Location</p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                {LOCATION}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="sm:col-span-3"
        >
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center py-12 border border-neutral-200 dark:border-neutral-800 rounded-xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mb-4"
                >
                  <Check size={26} className="text-black" />
                </motion.div>
                <p className="font-medium text-neutral-900 dark:text-white">
                  Message sent!
                </p>
                <p className="text-sm text-neutral-500 mt-1">
                  I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <FloatingField label="Your name" name="name" />
                <FloatingField label="Your email" name="email" type="email" />
                <FloatingField label="Your message" name="message" textarea rows={4} />

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ x: status === "sending" ? 0 : 4 }}
                  className="group flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-neutral-400 border-t-orange-500 rounded-full"
                      />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight
                        size={16}
                        className="text-orange-500 group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </motion.button>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-500"
                  >
                    Something went wrong — try again, or email me directly.
                  </motion.p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}