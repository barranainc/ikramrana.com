/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * INSIGHTS HUB PAGE — /insights/
 * Hub linking to: Essays (/essays/) and Insight (/insight/)
 * Each has its own layout and URL — this page routes users cleanly.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, PenLine, Lightbulb } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const insightTypes = [
  {
    icon: PenLine,
    label: "Essays",
    meta: "Long-form writing",
    title: "Essays",
    desc: "Structured arguments on AI adoption, governance, and decision architecture. Each essay develops a single idea in full — from premise to implication. Written for practitioners who need to think clearly, not just move fast.",
    href: "/essays",
    highlights: [
      "Why Buying More Software Makes Your Team Slower",
      "The Judgment Preservation Imperative",
      "Governance is Architecture, Not Paperwork",
      "The Tuesday Morning Test",
    ],
    cta: "Browse Essays",
    accent: "text-electric",
    border: "border-electric/20",
    bg: "bg-electric/5",
    iconColor: "text-electric",
  },
  {
    icon: Lightbulb,
    label: "Insight",
    meta: "Shorter observations · Coming soon",
    title: "Insight",
    desc: "Shorter observations, patterns, and practical notes from the work. Less structured than essays — more immediate. These are the things worth saying before they become a full argument. This section is currently being built.",
    href: "/insight",
    highlights: [
      "Operational patterns in AI adoption",
      "Governance failures and what they reveal",
      "Decision architecture in practice",
      "Notes from implementation work",
    ],
    cta: "Browse Insight",
    accent: "text-emerald-600",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    iconColor: "text-emerald-600",
  },
];

export default function InsightsHub() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 md:py-28 bg-background border-b border-border/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-4">
              Insights
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Insights
            </h1>
            <p className="text-lg text-slate-text leading-relaxed">
              Two formats, two purposes. Essays develop full arguments. Insight captures shorter observations from the work. Both are written for operators who need clarity, not content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hub Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={type.href}
                    className={`block h-full p-8 rounded-2xl border ${type.border} ${type.bg} hover:translate-y-[-3px] hover:shadow-md transition-all duration-250 no-underline group`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`p-2.5 rounded-lg bg-white border ${type.border} shrink-0`}>
                        <Icon size={20} className={type.iconColor} />
                      </div>
                      <div>
                        <span className={`font-mono text-[10px] tracking-[0.15em] uppercase ${type.accent} block mb-0.5`}>
                          {type.meta}
                        </span>
                        <h2 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                          {type.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-slate-text leading-relaxed mb-6">
                      {type.desc}
                    </p>

                    {/* Sample topics */}
                    <div className="mb-6">
                      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim block mb-3">
                        Topics include
                      </span>
                      <ul className="space-y-1.5">
                        {type.highlights.map((h, j) => (
                          <li key={j} className="text-sm text-foreground flex items-start gap-2">
                            <span className={`w-1 h-1 rounded-full ${type.iconColor.replace("text-", "bg-")} mt-2 shrink-0`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${type.accent} group-hover:gap-2.5 transition-all`}>
                      {type.cta} <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Foundational Essay CTA */}
      <section className="py-16 bg-navy border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Start Here
            </span>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              New to this work?
            </h3>
            <p className="text-slate-text text-sm leading-relaxed mb-6">
              The Foundational Essay is the best entry point. It covers the core argument in full — why AI adoption is fundamentally a governance problem, and what to do about it.
            </p>
            <Link
              href="/foundational-essay"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-electric/30 text-electric font-semibold text-sm no-underline hover:bg-electric/10 transition-all"
            >
              Read the Foundational Essay <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
