/*
 * SOLUTION PAGE — /solutions/governance-decision-architecture/
 * Exact content per master implementation prompt
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

const whatIMap = [
  "Execution layer",
  "Judgment layer",
  "Compliance foundation",
];

const whatIImplement = [
  "Explicit decision ownership",
  "Escalation triggers",
  "Override logging",
  "Structured review checkpoints",
  "Audit-ready workflows",
];

const related = [
  { label: "Automation & Efficiency", href: "/solutions/automation-efficiency" },
  { label: "AI for Growth", href: "/solutions/ai-for-growth" },
];

export default function SolutionGovernance() {
  useHead("AI Governance and Decision Architecture", "Design AI systems that withstand scrutiny. If you cannot reconstruct a decision in under five minutes, your system is fragile.");

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
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-burgundy block mb-4">
            Governance & Decision Architecture
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Design AI Systems That Withstand Scrutiny
          </h1>
          <p className="text-lg text-slate-text leading-relaxed italic">
            If you cannot reconstruct a decision in under five minutes, your system is fragile.
          </p>
        </motion.div>

        <div className="rule-divider my-10" />

        {/* What I Map */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">What I Map</h2>
          <ul className="space-y-3">
            {whatIMap.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-burgundy mt-2.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What I Implement */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">What I Implement</h2>
          <ul className="space-y-3">
            {whatIImplement.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85 leading-relaxed">
                <CheckCircle2 size={16} className="text-burgundy mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Why It Matters */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-5">Why It Matters</h2>
          <div className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-7">
            <p className="text-foreground leading-relaxed">
              When something goes wrong, you need clarity, not reconstruction.
            </p>
          </div>
        </motion.div>

        {/* Example Implementation */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Example Implementation</h2>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="text-foreground/85 leading-relaxed mb-5">
              A regulated advisory firm used AI to draft client recommendations but had no override logging.
            </p>
            <p className="text-foreground/85 leading-relaxed mb-6">
              We implemented decision ownership mapping, escalation triggers, and automated audit logs.
            </p>
            <div>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-burgundy block mb-3">Result</span>
              <ul className="space-y-2">
                {["Full reconstruction of any decision in under 3 minutes", "Clear accountability trail", "Reduced internal review time by 28 percent"].map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="w-1 h-1 rounded-full bg-burgundy mt-2 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mb-14">
          <a
            href="https://calendly.com/ikramrana15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-burgundy text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
          >
            Request a Governance Diagnostic <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="rule-divider my-10" />

        {/* Related */}
        <motion.div {...fadeUp}>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-dim block mb-5">
            Related Solutions
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                className="block p-5 rounded-xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group"
              >
                <span className="font-serif text-base font-semibold text-foreground group-hover:text-electric transition-colors">
                  {r.label}
                </span>
                <ArrowRight size={14} className="text-slate-dim mt-1 group-hover:text-electric transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
