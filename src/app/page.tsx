"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Product } from "@/components/Product";
import { Bento } from "@/components/Bento";
import { HowItWorks } from "@/components/HowItWorks";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] bg-ivory flex items-center justify-center transition-opacity duration-700 pointer-events-none ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <span className="font-[family-name:var(--font-display)] text-3xl italic text-ink">
            أثر
          </span>
          <div className="mt-4 flex gap-1.5 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-teal/30"
                style={{
                  animation: `pulse-soft 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Product />
        <Bento />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
