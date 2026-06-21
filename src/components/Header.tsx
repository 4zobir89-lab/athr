"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale-context";

const navHrefs = ["#philosophy", "#product", "#how-it-works", "#pricing"];

export function Header() {
  const { t, locale, toggleLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-content flex items-center justify-between h-16 md:h-20 px-6">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-[family-name:var(--font-display)] text-xl italic text-ink">
            أثر
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-metal -mt-1">
            Athr
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {t.header.nav.map((label: string, i: number) => (
            <a
              key={navHrefs[i]}
              href={navHrefs[i]}
              className="text-sm text-ink-soft/70 hover:text-ink transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-5 py-2.5 rounded-full bg-ink text-ivory text-sm font-medium hover:bg-ink-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.header.cta}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 rounded-full bg-ink/5 hover:bg-ink/10 text-xs font-[family-name:var(--font-mono)] tracking-wider text-ink/70 hover:text-ink border border-ink/10 hover:border-ink/30 transition-all duration-300"
            aria-label={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
          >
            {locale === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 p-2"
            aria-label={t.header.toggleMenu}
          >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass absolute top-full inset-x-0 border-t border-white/20"
          >
            <nav className="flex flex-col gap-1 p-6">
              {t.header.nav.map((label: string, i: number) => (
                <a
                  key={navHrefs[i]}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink-soft/80 hover:text-ink transition-colors"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => { toggleLocale(); setOpen(false); }}
                className="py-3 text-ink-soft/80 hover:text-ink transition-colors text-left font-[family-name:var(--font-mono)] text-xs tracking-wider"
              >
                {locale === "en" ? "AR — العربية" : "EN — English"}
              </button>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-4 px-5 py-3 rounded-full bg-ink text-ivory text-sm font-medium text-center"
              >
                {t.header.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
