/*
 * SOLUTION PAGE — /solutions/automation-efficiency/
 * Exact content per master implementation prompt
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const whatIFix = [
  "Leads falling through the cracks",
  "Manual follow-up loops",
  "CRM inconsistencies",
  "AI drafts with no logging",
  "Escalation based on memory",
];

const whatIBuild = [
  "Structured intake routing",
  "AI-assisted drafting with defined review",
  "CRM-triggered escalation",
  "Automated status tracking",
  "Decision logs",
];

const typicalImpact = [
  "8–20 hours saved per week",
  "Faster client turnaround",
  "Fewer preventable mistakes",
  "Clear task ownership",
];

const related = [
  { label: "AI for Growth", href: "/solutions/ai-for-growth" },
  { label: "Governance & Decision Architecture", href: "/solutions/governance-decision-architecture" },
];

export default function SolutionAutomation() {
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
            Automation & Efficiency
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Remove Workflow Friction
          </h1>
        </motion.div>

        <div className="rule-divider my-10" />

        {/* What I Fix */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">What I Fix</h2>
          <ul className="space-y-3">
            {whatIFix.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What I Build */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">What I Build</h2>
          <ul className="space-y-3">
            {whatIBuild.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/85 leading-relaxed">
                <CheckCircle2 size={16} className="text-electric mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Typical Impact */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Typical Impact</h2>
          <div className="rounded-2xl border border-electric/20 bg-electric/5 p-7">
            <ul className="space-y-3">
              {typicalImpact.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground font-medium leading-relaxed">
                  <CheckCircle2 size={16} className="text-electric mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Example Implementation */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Example Implementation</h2>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="text-foreground/85 leading-relaxed mb-5">
              A 12-person consulting firm processing 90 client files per month had inconsistent intake and manual follow-ups.
            </p>
            <p className="text-foreground/85 leading-relaxed mb-6">
              We redesigned intake routing, embedded AI-assisted drafting with defined review checkpoints, and added escalation triggers.
            </p>
            <div>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">Result</span>
              <ul className="space-y-2">
                {["14 hours saved weekly", "37 percent reduction in client response time", "Zero undocumented overrides"].map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="w-1 h-1 rounded-full bg-electric mt-2 shrink-0" />
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
          >
            Book an Automation Call <ArrowRight size={14} />
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
