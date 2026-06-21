"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus, Eye, Sparkle } from "@phosphor-icons/react";

const steps = [
  {
    icon: Plus,
    title: "Pour your thoughts in",
    description: "Write a note. Record a voice memo. Save a link. Drop an image. There are no rules — just a space that accepts everything.",
    color: "from-teal/5 to-teal/2",
  },
  {
    icon: Eye,
    title: "Watch it connect",
    description: "Athr quietly begins weaving. Ideas link, clusters form, patterns emerge. You don't organize — you observe.",
    color: "from-blue-glow/8 to-blue-glow/3",
  },
  {
    icon: Sparkle,
    title: "Let it emerge",
    description: "One day, you notice: your fragments became a system. A plan. A creation. Something that leaves an أثر (athr).",
    color: "from-teal/8 to-blue-glow/5",
  },
];

export function HowItWorks() {
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
          <span className="eyebrow">Three movements</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-4 max-w-3xl"
        >
          How it works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-ink-soft/65 leading-relaxed max-w-xl mb-16"
        >
          Three steps. No dashboard. No tutorials. Just you and your evolving mind.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
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
                  className={`glass-card rounded-2xl p-8 md:p-10 bg-gradient-to-br ${step.color} relative`}
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs text-metal tracking-wider mb-6 block">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-ivory/80 flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={22} className="text-teal" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-soft/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
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
