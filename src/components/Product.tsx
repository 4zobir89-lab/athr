"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

export function Product() {
  const { t } = useLocale();

  return (
    <section id="product" className="section-padding relative overflow-hidden bg-ivory-dark/30">
      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="eyebrow">{t.product.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-6 max-w-3xl"
        >
          {t.product.heading[0]}
          <span className="italic text-teal"> {t.product.heading[1]}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-ink-soft/65 leading-relaxed max-w-2xl mb-16"
        >
          {t.product.sub}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.product.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500"
            >
              <span className="font-[family-name:var(--font-mono)] text-4xl text-teal/20 font-medium">
                {String(card.num).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink mt-4 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-ink-soft/65 leading-relaxed mb-6">
                {card.desc}
              </p>
              <div className="pt-4 border-t border-ink/5">
                <span className="font-[family-name:var(--font-mono)] text-2xl text-teal">
                  {card.stat}
                </span>
                <span className="block text-[11px] text-metal uppercase tracking-wider mt-1">
                  {card.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
