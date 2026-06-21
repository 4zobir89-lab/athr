"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

export function Showcase() {
  const { t } = useLocale();

  return (
    <section className="section-padding relative overflow-hidden bg-ink">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal/3 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-glow/4 blur-[120px]" />
      </div>

      <div className="max-w-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.18em] uppercase text-teal-light">
            {t.showcase.eyebrow}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mb-6 max-w-3xl"
        >
          {t.showcase.heading[0]}
          <span className="italic text-teal-light"> {t.showcase.heading[1]}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-ivory/50 leading-relaxed max-w-xl mb-16"
        >
          {t.showcase.sub}
        </motion.p>
      </div>

      <div className="max-w-content relative z-10 px-6">
        {t.showcase.screens.map((screen, i) => (
          <motion.div
            key={screen.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-8 last:mb-0"
          >
            <div className="glass-card !bg-white/5 !border-white/10 rounded-3xl overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-br from-teal/5 via-blue-glow/5 to-teal-dark/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(122,183,232,0.06)_0%,_transparent_70%)]" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(122,183,232,0.6)" strokeWidth="1.5">
                      <path d="M12 3v18M3 12h18" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-ivory mb-3">
                    {screen.title}
                  </h3>
                  <p className="text-sm text-ivory/50 max-w-md mx-auto leading-relaxed">
                    {screen.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
