/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * FRAMEWORK HUB PAGE — /framework/
 * Hub linking to: Foundational Essay, The Model, Governance, Dictionary
 * Each has its own layout and URL — this page just routes users cleanly.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Layers, Shield, BookMarked } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const frameworkPages = [
  {
    icon: BookOpen,
    label: "Foundational Essay",
    meta: "§01 — Where I Stand",
    title: "Where I Stand on AI Adoption, Operational Excellence, and Regulatory Integrity",
    desc: "The canonical statement of my position. Start here if you are new to this work. Covers why AI is fundamentally a governance problem, not a software purchase.",
    href: "/foundational-essay",
    readTime: "15 min read",
    accent: "text-electric",
    border: "border-electric/20",
    bg: "bg-electric/5",
    iconColor: "text-electric",
  },
  {
    icon: Layers,
    label: "The Three-Layer Model",
    meta: "§02 — Framework",
    title: "Execution · Judgment · Compliance",
    desc: "A decision-systems framework for AI adoption. Automate execution, protect judgment, embed compliance as the architectural foundation — not the audit.",
    href: "/the-model",
    readTime: "18 min read",
    accent: "text-electric",
    border: "border-electric/20",
    bg: "bg-electric/5",
    iconColor: "text-electric",
  },
  {
    icon: Shield,
    label: "Governance-by-Design",
    meta: "§03 — Application",
    title: "Governance is Architecture, Not Paperwork",
    desc: "How to embed compliance as a design property of the system itself — so your system is compliant by construction, not just by intention.",
    href: "/governance",
    readTime: "12 min read",
    accent: "text-burgundy",
    border: "border-burgundy/20",
    bg: "bg-burgundy/5",
    iconColor: "text-burgundy",
  },
  {
    icon: BookMarked,
    label: "Dictionary",
    meta: "§04 — Definitions",
    title: "Key Terms in AI Decision Systems",
    desc: "Precise definitions for the vocabulary used across this framework: Judgment Gap, Compliance Debt, Layer Bleed, Automation Creep, and 16 more.",
    href: "/dictionary",
    readTime: "Reference",
    accent: "text-slate-600",
    border: "border-slate-300",
    bg: "bg-slate-50",
    iconColor: "text-slate-600",
  },
];

export default function FrameworkHub() {
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
              Framework
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              The Structure Behind Every System
            </h1>
            <div className="space-y-4 text-slate-text leading-relaxed">
              <p className="font-medium text-foreground">This framework is not theoretical. It underpins every system I build.</p>
              <p>AI fails when execution outruns accountability.</p>
              <p>Every system I build follows three layers:</p>
              <div className="pl-4 border-l-2 border-electric/30 space-y-2 my-4">
                <p className="text-foreground"><span className="font-semibold text-electric">Execution</span> — what AI automates</p>
                <p className="text-foreground"><span className="font-semibold text-burgundy">Judgment</span> — what humans must own</p>
                <p className="text-foreground"><span className="font-semibold text-emerald-600">Compliance</span> — what the system enforces</p>
              </div>
              <p>If those layers blur, risk increases.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hub Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworkPages.map((page, i) => {
              const Icon = page.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={page.href}
                    className={`block h-full p-8 rounded-2xl border ${page.border} ${page.bg} hover:translate-y-[-3px] hover:shadow-md transition-all duration-250 no-underline group`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`p-2.5 rounded-lg bg-white border ${page.border} shrink-0`}>
                        <Icon size={20} className={page.iconColor} />
                      </div>
                      <div>
                        <span className={`font-mono text-[10px] tracking-[0.15em] uppercase ${page.accent} block mb-0.5`}>
                          {page.meta}
                        </span>
                        <span className="font-mono text-[10px] tracking-wide text-slate-dim">
                          {page.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-serif text-xl font-semibold text-foreground mb-3 leading-snug">
                      {page.title}
                    </h2>
                    <p className="text-sm text-slate-text leading-relaxed mb-6">
                      {page.desc}
                    </p>

                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${page.accent} group-hover:gap-2.5 transition-all`}>
                      {page.label} <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Apply the Framework
            </span>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              See how this framework is applied in practice.
            </h3>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
            >
              See Implementation Examples <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
