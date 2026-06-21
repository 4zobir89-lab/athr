"use client";

import { motion } from "framer-motion";
import { ChatCircleText } from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

export function Testimonials() {
  const { t } = useLocale();

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
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-16 max-w-3xl"
        >
          {t.testimonials.heading[0]}
          <span className="italic text-teal"> {t.testimonials.heading[1]}</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={item.name}
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
              <ChatCircleText size={20} className="text-teal/30 mb-6" />
              <p className="text-sm md:text-base text-ink-soft/70 leading-relaxed mb-8 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-ink/5">
                <span className="font-[family-name:var(--font-display)] text-base text-ink">
                  {item.name}
                </span>
                <span className="block text-xs text-metal mt-1">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
