"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "@phosphor-icons/react";

const plans = [
  {
    name: "Free",
    price: "0",
    desc: "For explorers. Start weaving your thoughts into living systems.",
    features: [
      "1,000 fragments",
      "Basic spatial canvas",
      "Manual connections",
      "7-day timeline",
      "Community access",
    ],
    cta: "Begin for free",
    featured: false,
  },
  {
    name: "Pro",
    price: "12",
    desc: "For creators and researchers building deep knowledge systems.",
    features: [
      "Unlimited fragments",
      "Full spatial canvas",
      "Auto-weave AI",
      "Unlimited timeline",
      "Export to any format",
      "API access",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Studio",
    price: "38",
    desc: "For teams weaving collective intelligence together.",
    features: [
      "Everything in Pro",
      "Team spaces",
      "Shared canvases",
      "Admin controls",
      "Priority AI processing",
      "Dedicated support",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-ivory-dark/30">
      <div className="max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="eyebrow">Pricing</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-4 max-w-3xl"
        >
          Simple, quiet pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-ink-soft/65 max-w-xl mb-12"
        >
          No hidden tiers. No features hidden behind paywalls. Just the right plan for how you think.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-2xl p-8 md:p-10 transition-all duration-500 ${
                plan.featured
                  ? "glass-card !bg-ink !text-ivory shadow-[0_8px_40px_rgba(0,0,0,0.12)] scale-[1.02]"
                  : "glass-card hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
              }`}
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl mb-2">
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-ivory/60" : "text-ink-soft/60"
                }`}
              >
                {plan.desc}
              </p>
              <div className="mb-8">
                <span className="font-[family-name:var(--font-display)] text-5xl">
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-ivory/50" : "text-metal"
                  }`}
                >
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={14}
                      className={`mt-0.5 ${
                        plan.featured ? "text-teal-light" : "text-teal"
                      }`}
                      weight="bold"
                    />
                    <span
                      className={
                        plan.featured ? "text-ivory/70" : "text-ink-soft/65"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`flex items-center justify-between w-full px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.featured
                    ? "bg-ivory text-ink hover:bg-ivory/90"
                    : "bg-ink/5 text-ink-soft/80 hover:bg-ink/10"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
