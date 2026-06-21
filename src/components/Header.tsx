"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft/70 hover:text-ink transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="ml-4 px-5 py-2.5 rounded-full bg-ink text-ivory text-sm font-medium hover:bg-ink-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get early access
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink-soft/80 hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-4 px-5 py-3 rounded-full bg-ink text-ivory text-sm font-medium text-center"
              >
                Get early access
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
