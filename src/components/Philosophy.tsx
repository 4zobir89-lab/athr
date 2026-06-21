"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

export function Philosophy() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="philosophy" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/2 blur-[100px]" />

      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkle size={12} className="text-teal" weight="fill" />
          <span className="eyebrow">{t.philosophy.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-8 max-w-4xl"
        >
          {t.philosophy.heading}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-16">
          {t.philosophy.items.map((item: { label: string; title: string; body: string }, i: number) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={i === 2 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12" : ""}
            >
              <div>
                <span className="font-[family-name:var(--font-mono)] text-xs text-metal tracking-wider">
                  {item.label}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-ink mt-3 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-ink-soft/65 leading-relaxed max-w-lg">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
