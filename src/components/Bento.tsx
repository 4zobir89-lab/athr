"use client";

import { motion } from "framer-motion";
import {
  Brain,
  LinkSimple,
  ArrowUpRight,
  ClockCounterClockwise,
  Note,
  PuzzlePiece,
} from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

const iconMap = [Brain, LinkSimple, ArrowUpRight, ClockCounterClockwise, Note, PuzzlePiece] as const;

const sizeMap: Record<number, string> = {
  0: "md:col-span-2 md:row-span-2",
  1: "md:col-span-1 md:row-span-1",
  2: "md:col-span-1 md:row-span-1",
  3: "md:col-span-1 md:row-span-1",
  4: "md:col-span-1 md:row-span-1",
  5: "md:col-span-1 md:row-span-1",
};

export function Bento() {
  const { t } = useLocale();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-glow/5 blur-[100px]" />

      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="eyebrow">{t.bento.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-12 max-w-3xl"
        >
          {t.bento.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[auto_auto]">
          {t.bento.items.map((item, i) => {
            const Icon = iconMap[i];
            const large = i === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`glass-card rounded-2xl p-8 ${sizeMap[i]} ${
                  large
                    ? "bg-gradient-to-br from-teal/5 to-teal/2 border-teal/10"
                    : ""
                } hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group`}
              >
                <Icon
                  size={large ? 28 : 22}
                  className="text-teal mb-5 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="font-[family-name:var(--font-display)] text-xl text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-soft/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
