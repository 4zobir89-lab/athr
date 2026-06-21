"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import en from "./translations/en";
import ar from "./translations/ar";
import type { Translations } from "./translations/en";

type Locale = "en" | "ar";

const translations: Record<Locale, Translations> = { en, ar } as any;

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("athr-locale");
  if (saved === "ar" || saved === "en") return saved;
  if (navigator.language?.startsWith("ar")) return "ar";
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("athr-locale", l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, mounted]);

  const value: LocaleContextValue = {
    locale,
    t: translations[locale],
    dir: locale === "ar" ? "rtl" : "ltr",
    setLocale,
    toggleLocale,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
