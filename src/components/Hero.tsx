"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-teal/3 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-glow/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ivory-dark/50 blur-[80px]" />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <Sparkle size={12} className="text-teal" weight="fill" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight text-ink mb-6 text-balance"
        >
          {t.hero.headline[0]}
          <br />
          <span className="italic text-teal">{t.hero.headline[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-ink-soft/65 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-ivory text-sm font-medium hover:bg-ink-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#product"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink/10 text-ink-soft/70 text-sm hover:border-ink/20 hover:text-ink transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-ink/15 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-ink/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
