/*
 * SOLUTIONS HUB — /solutions/
 * Hub linking to 4 solution sub-pages
 * Exact content per master implementation prompt
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, Rocket } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const solutions = [
  {
    icon: Zap,
    number: "01",
    label: "Automation & Efficiency",
    desc: "Remove workflow friction. Structured intake routing, AI-assisted drafting, CRM-triggered escalation, and decision logs.",
    href: "/solutions/automation-efficiency",
    accent: "text-electric",
    border: "border-electric/25",
    bg: "bg-electric/5",
    iconColor: "text-electric",
  },
  {
    icon: TrendingUp,
    number: "02",
    label: "AI for Growth",
    desc: "Increase pipeline velocity with AI. Lead scoring, structured follow-up automation, CRM-integrated workflows.",
    href: "/solutions/ai-for-growth",
    accent: "text-emerald-600",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: Shield,
    number: "03",
    label: "Governance & Decision Architecture",
    desc: "Design AI systems that withstand scrutiny. Explicit decision ownership, escalation triggers, override logging, audit-ready workflows.",
    href: "/solutions/governance-decision-architecture",
    accent: "text-burgundy",
    border: "border-burgundy/25",
    bg: "bg-burgundy/5",
    iconColor: "text-burgundy",
  },
  {
    icon: Rocket,
    number: "04",
    label: "AI Implementation Sprint",
    desc: "Fast. Structured. Controlled. Two-week focused engagement. One production-grade AI workflow, built correctly.",
    href: "/solutions/ai-sprint",
    accent: "text-slate-600",
    border: "border-border",
    bg: "bg-card",
    iconColor: "text-slate-600",
  },
];

export default function SolutionsHub() {
  useHead("AI Solutions for Business Operators", "Structured AI implementation tied to measurable outcomes. No hype, no generic roadmaps. Systems built for operators who need results.");

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
              Solutions
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              AI Systems Built for Operators
            </h1>
            <p className="text-lg text-slate-text leading-relaxed">
              No hype. No generic roadmaps.
              <br />
              Structured implementation tied to measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution blocks */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
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
                    href={sol.href}
                    className={`block h-full p-8 rounded-2xl border ${sol.border} ${sol.bg} hover:translate-y-[-3px] hover:shadow-md transition-all duration-250 no-underline group`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`p-2.5 rounded-lg bg-white border ${sol.border} shrink-0`}>
                        <Icon size={20} className={sol.iconColor} />
                      </div>
                      <span className={`font-mono text-[10px] tracking-[0.15em] uppercase ${sol.accent} mt-1`}>
                        {sol.number}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-3 leading-snug">
                      {sol.label}
                    </h2>
                    <p className="text-sm text-slate-text leading-relaxed mb-6">{sol.desc}</p>
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${sol.accent} group-hover:gap-2.5 transition-all`}
                    >
                      Learn more <ArrowRight size={13} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualification Filter */}
      <section className="py-16 md:py-20 bg-navy border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Who This Is For */}
              <div className="rounded-2xl border border-electric/20 bg-electric/5 p-7">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Who This Is For</h3>
                <ul className="space-y-3">
                  {[
                    "Companies already using AI in production",
                    "Professional service firms",
                    "Regulated or compliance-sensitive environments",
                    "Growth-stage teams scaling beyond manual coordination",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-electric mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Who This Is Not For */}
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Who This Is Not For</h3>
                <ul className="space-y-3">
                  {[
                    "Hobby experimentation",
                    "Solo freelancers testing tools",
                    "Teams unwilling to define decision ownership",
                    "Organizations seeking quick hacks without structural clarity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-text leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Not sure where to start?
            </span>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Start with a conversation.
            </h3>
            <p className="text-slate-text text-sm leading-relaxed mb-6">
              Describe what's breaking in your current workflow and I'll tell you which solution fits.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
