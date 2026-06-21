"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What makes Athr different from Notion, Obsidian, or Roam?",
    a: "Athr is not a note-taking app or a knowledge base. It is a living system that actively weaves your fragments into connections over time. You don't organize — Athr observes your patterns and surfaces relationships. It's closer to a thinking companion than a tool.",
  },
  {
    q: "Do I need to learn how to use it?",
    a: "There is nothing to learn. Just start dropping your thoughts in. The spatial canvas behaves as naturally as arranging papers on a desk — except Athr remembers where everything connects.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. Your canvas is end-to-end encrypted. The AI that weaves your connections runs locally on-device by default. Cloud sync is optional and zero-knowledge encrypted.",
  },
  {
    q: "Can I export my work?",
    a: "Yes. Export to Markdown, JSON, PDF, or plain text at any time. Your intellectual property is yours — always.",
  },
  {
    q: "Does Athr work offline?",
    a: "Fully. Athr is built as a local-first application. Everything works offline. Sync happens quietly when you're connected.",
  },
  {
    q: "Who is Athr for?",
    a: "Researchers, writers, founders, designers, and anyone whose mind is fuller than their notes. If you've ever felt that your best ideas get lost in the noise, Athr is for you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue-glow/4 blur-[100px]" />

      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="eyebrow">Questions</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-12 max-w-3xl"
        >
          Still wondering?
        </motion.h2>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-b border-ink/5 last:border-0"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="flex items-center justify-between w-full py-6 text-left group"
              >
                <span className="text-base md:text-lg text-ink font-medium pr-4">
                  {faq.q}
                </span>
                <Plus
                  size={16}
                  className={`text-metal shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-ink-soft/65 leading-relaxed pb-6 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
