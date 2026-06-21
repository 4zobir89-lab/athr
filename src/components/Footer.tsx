"use client";

import { motion } from "framer-motion";
import { X, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="section-padding bg-ink text-ivory relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/2 blur-[150px] pointer-events-none" />

      <div className="max-w-content relative z-10">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#" className="flex items-center gap-2 mb-4">
                <span className="font-[family-name:var(--font-display)] text-2xl italic text-ivory">
                  {t.footer.logo}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-ivory/30 -mt-1">
                  Athr
                </span>
              </a>
              <p className="text-sm text-ivory/40 leading-relaxed max-w-sm mb-6">
                {t.footer.desc}
              </p>
              <div className="flex items-center gap-3">
                {[X, GithubLogo, InstagramLogo].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-ivory/10 flex items-center justify-center text-ivory/40 hover:text-ivory hover:border-ivory/25 transition-all duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {t.footer.columns.map((col, i) => (
            <div key={col.title}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h4 className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] uppercase text-ivory/30 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
                        onClick={(e) => e.preventDefault()}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-ivory/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            {t.footer.copyright}
          </p>
          <p className="text-xs text-ivory/20 font-[family-name:var(--font-mono)]">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
