"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export function CTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal/3 to-teal/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal/3 blur-[150px]" />

      <div className="max-w-content relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Begin your journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mt-6 mb-6 max-w-3xl mx-auto"
        >
          Ready to leave an
          <span className="italic text-teal"> أثر?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-lg text-ink-soft/65 max-w-xl mx-auto mb-10"
        >
          Join the waitlist. Be among the first to experience a new way of thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-ivory text-sm font-medium hover:bg-ink-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            onClick={(e) => {
              e.preventDefault();
              alert("Thank you for your interest. The waitlist opens soon.");
            }}
          >
            Join the waitlist
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-xs text-metal mt-6"
        >
          No spam. No rush. Just an invitation when we&apos;re ready.
        </motion.p>
      </div>
    </section>
  );
}
