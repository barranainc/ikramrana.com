/*
 * SOLUTION PAGE — /solutions/ai-sprint/
 * AI Implementation Sprint — exact content per master implementation prompt
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const deliverables = [
  "Workflow audit",
  "Automation opportunity mapping",
  "One production-grade AI workflow",
  "Escalation + logging embedded",
  "Documentation delivered",
];

const related = [
  { label: "Automation & Efficiency", href: "/solutions/automation-efficiency" },
  { label: "AI for Growth", href: "/solutions/ai-for-growth" },
  { label: "Governance & Decision Architecture", href: "/solutions/governance-decision-architecture" },
];

export default function SolutionSprint() {
  useHead("AI Sprint: Two-Week Implementation", "Two-week focused AI engagement for teams already using AI but lacking structural clarity. Fast, structured, controlled.");

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm text-slate-dim hover:text-electric transition-colors no-underline mb-6"
          >
            ← Solutions
          </Link>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">
            AI Implementation Sprint
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-5">
            Fast. Structured. Controlled.
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-3">
            Two-week focused engagement.
          </p>
          <p className="text-base text-slate-dim leading-relaxed">
            Designed for teams already using AI but lacking structural clarity.
          </p>
        </motion.div>

        <div className="rule-divider my-10" />

        {/* Deliverables */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Deliverables</h2>
          <ul className="space-y-3">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85 leading-relaxed">
                <CheckCircle2 size={16} className="text-electric mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Closing statement */}
        <motion.div {...fadeUp} className="mb-12">
          <div className="rounded-2xl border border-electric/20 bg-electric/5 p-7">
            <p className="font-serif text-lg text-foreground font-medium leading-relaxed">
              You leave with a working system, built correctly.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mb-14">
          <a
            href="https://calendly.com/ikramrana15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
          >
            Start an AI Sprint <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="rule-divider my-10" />

        {/* Related */}
        <motion.div {...fadeUp}>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-dim block mb-5">
            Related Solutions
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                className="block p-5 rounded-xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group"
              >
                <span className="font-serif text-sm font-semibold text-foreground group-hover:text-electric transition-colors block mb-1">
                  {r.label}
                </span>
                <ArrowRight size={13} className="text-slate-dim group-hover:text-electric transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
