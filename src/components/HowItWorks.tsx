"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus, Eye, Sparkle } from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

const stepMeta = [
  { icon: Plus, color: "from-teal/5 to-teal/2" },
  { icon: Eye, color: "from-blue-glow/8 to-blue-glow/3" },
  { icon: Sparkle, color: "from-teal/8 to-blue-glow/5" },
];

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-teal/2 blur-[120px]" />

      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="eyebrow">{t.how.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-4 max-w-3xl"
        >
          {t.how.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-ink-soft/65 leading-relaxed max-w-xl mb-16"
        >
          {t.how.sub}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {t.how.steps.map((step, i) => {
            const Icon = stepMeta[i].icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div
                  className={`glass-card rounded-2xl p-8 md:p-10 bg-gradient-to-br ${stepMeta[i].color} relative`}
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs text-metal tracking-wider mb-6 block">
                    {step.label}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-ivory/80 flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={22} className="text-teal" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-soft/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {i < t.how.steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 z-10">
                    <ArrowRight
                      size={20}
                      className="text-metal/30"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
