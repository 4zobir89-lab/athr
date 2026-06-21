"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

export function FAQ() {
  const { t } = useLocale();
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
          <span className="eyebrow">{t.faq.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-12 max-w-3xl"
        >
          {t.faq.heading}
        </motion.h2>

        <div className="max-w-3xl">
          {t.faq.items.map((item, i) => (
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
                  {item.q}
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
                      {item.a}
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
