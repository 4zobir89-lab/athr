"use client";

import { motion } from "framer-motion";
import {
  Brain,
  LinkSimple,
  FlowArrow,
  ClockCounterClockwise,
  Note,
  PuzzlePiece,
} from "@phosphor-icons/react";

const features = [
  {
    icon: Brain,
    title: "Spatial canvas",
    desc: "Ideas arranged in space, not in lists. Move, connect, and see your thoughts from any angle.",
    size: "large",
  },
  {
    icon: LinkSimple,
    title: "Auto-weave",
    desc: "Athr connects related ideas across time — surfacing links you would never find manually.",
    size: "small",
  },
  {
    icon: FlowArrow,
    title: "Threading",
    desc: "Follow the natural flow of thought. Branch, merge, and revisit without losing context.",
    size: "small",
  },
  {
    icon: ClockCounterClockwise,
    title: "Timeline",
    desc: "Watch your thinking evolve. Every connection, every branch — your intellectual history alive.",
    size: "small",
  },
  {
    icon: Note,
    title: "Rich fragments",
    desc: "Text, sketches, voice notes, code, references. Every format welcome in your living canvas.",
    size: "small",
  },
  {
    icon: PuzzlePiece,
    title: "System builder",
    desc: "Assemble your fragments into structured knowledge bases, documents, or creative works.",
    size: "small",
  },
];

const sizeMap = {
  small: "md:col-span-1 md:row-span-1",
  large: "md:col-span-2 md:row-span-2",
};

export function Bento() {
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
          <span className="eyebrow">Capabilities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-12 max-w-3xl"
        >
          Everything you need.
          <span className="italic text-teal"> Nothing you don&apos;t.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[auto_auto]">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`glass-card rounded-2xl p-8 ${sizeMap[feature.size]} ${
                  i === 0
                    ? "bg-gradient-to-br from-teal/5 to-teal/2 border-teal/10"
                    : ""
                } hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group`}
              >
                <Icon
                  size={feature.size === "large" ? 28 : 22}
                  className="text-teal mb-5 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="font-[family-name:var(--font-display)] text-xl text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-soft/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
