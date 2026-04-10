/*
 * CASE STUDIES — /case-studies/
 * Three anonymized case studies per master implementation prompt Part 2
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const cases = [
  {
    number: "01",
    title: "Workflow Architecture Overhaul",
    problem:
      "High-volume intake, inconsistent review checkpoints, escalating client complaints.",
    intervention:
      "Mapped execution layer, formalized judgment layer, embedded compliance logging.",
    results: [
      "15 hours saved weekly",
      "100 percent traceable decisions",
      "40 percent reduction in preventable errors",
    ],
    tag: "Automation & Efficiency",
    href: "/solutions/automation-efficiency",
  },
  {
    number: "02",
    title: "AI-Driven Revenue Acceleration",
    problem: "Manual lead qualification and slow response cycles.",
    intervention:
      "Implemented AI scoring, automated routing, structured follow-ups.",
    results: [
      "22 percent increase in booked calls",
      "2-hour average response time",
      "Clear visibility into pipeline health",
    ],
    tag: "AI for Growth",
    href: "/solutions/ai-for-growth",
  },
  {
    number: "03",
    title: "Governance-by-Design Implementation",
    problem: "AI recommendations being approved without structured review.",
    intervention:
      "Defined decision checkpoints, logged overrides, embedded escalation triggers.",
    results: [
      "Audit-ready workflow",
      "Reduced regulatory exposure",
      "Faster senior review cycles",
    ],
    tag: "Governance & Decision Architecture",
    href: "/solutions/governance-decision-architecture",
  },
];

export default function CaseStudies() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">
            Case Studies
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-5">
            Systems Built. Results Delivered.
          </h1>
          <p className="text-lg text-slate-text leading-relaxed max-w-xl">
            Each engagement focuses on measurable structural change, not tool installation.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-10 mb-16">
          {cases.map((c, i) => (
            <motion.div
              key={c.number}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Case header */}
              <div className="border-b border-border px-8 py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-slate-dim">
                    CASE {c.number}
                  </span>
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    {c.title}
                  </h2>
                </div>
                <Link
                  href={c.href}
                  className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-electric border border-electric/30 rounded-md px-3 py-1.5 hover:bg-electric/5 transition-colors no-underline whitespace-nowrap"
                >
                  {c.tag} <ArrowRight size={10} />
                </Link>
              </div>

              {/* Case body */}
              <div className="px-8 py-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Problem */}
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-dim block mb-3">
                    Problem
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{c.problem}</p>
                </div>

                {/* Intervention */}
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-dim block mb-3">
                    Intervention
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{c.intervention}</p>
                </div>

                {/* Results */}
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                    Result
                  </span>
                  <ul className="space-y-2">
                    {c.results.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="w-1 h-1 rounded-full bg-electric mt-2 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center">
          <div className="inline-block rounded-2xl border border-electric/20 bg-electric/5 px-10 py-8">
            <p className="font-serif text-lg text-foreground font-medium mb-5">
              Ready to build a system that holds under pressure?
            </p>
            <a
              href="https://calendly.com/ikramrana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
            >
              Start With a Consultation <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
