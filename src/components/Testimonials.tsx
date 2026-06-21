"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "Athr changed how I think about thinking. My scattered research notes became a living thesis I didn't know I was writing.",
    name: "Dr. Amira Hassan",
    role: "Researcher, MIT Media Lab",
  },
  {
    quote: "I've tried every productivity tool. Athr is the first that doesn't feel like I'm fighting against a system. It just... understands.",
    name: "Marcus Chen",
    role: "Founder, Studio Diatype",
  },
  {
    quote: "The spatial canvas is magic. I see connections between my design projects that were invisible before. It's like a sixth sense.",
    name: "Lena Vogt",
    role: "Design Director, Form Agency",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="eyebrow">Voices</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-16 max-w-3xl"
        >
          What people
          <span className="italic text-teal"> are saying</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500"
            >
              <Quotes size={20} className="text-teal/30 mb-6" />
              <p className="text-sm md:text-base text-ink-soft/70 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-ink/5">
                <span className="font-[family-name:var(--font-display)] text-base text-ink">
                  {t.name}
                </span>
                <span className="block text-xs text-metal mt-1">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
