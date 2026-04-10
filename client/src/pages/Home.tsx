/*
 * DESIGN: The Architect's Blueprint — LIGHT THEME
 * HOME PAGE — Operator Version
 * Hero: Fix Your AI Before It Breaks Your Operations
 * Segmentation: Move Faster / Grow Revenue / Build It Right
 * Solutions Hub, Framework teaser, Essays
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import ThreeLayerDiagram from "@/components/diagrams/ThreeLayerDiagram";

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/UThcyylsqhlZAXIM9HOrSw/sandbox/cn98qOf0FLpUJbBpsfsKnM-img-1_1770868360000_na1fn_aGVyby1ibHVlcHJpbnQtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVRoY3l5bHNxaGxaQVhJTTlIT3JTdy9zYW5kYm94L2NuOThxT2YwRkxwVUpiQnBzZnNLbk0taW1nLTFfMTc3MDg2ODM2MDAwMF9uYTFmbl9hR1Z5YnkxaWJIVmxjSEpwYm5RdFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JAVK1~GkUUJYd8kaXeSmu665I1XOvmvjjgH0vNmb6PwhEC9~xlK2yxoW7H3B410cNrGCGz15b~FqSGDd6l48cGDhPmc6FEVNMViRZTFLX1VMrWoEzbTYyK~NmJFFkGq9fd0XjYdkaRW8H8V3KUJrcLbZe6m2LmjFdGweRTUQdKBvq~qQEhzbT1pT5jwxXRWIUurJcsVCsq6JCAsZlYx1tVwQjGrko559KcH-iMCxyc12js~ImpOWmuhSVbho9E-5dshg4m4TvPBchkmarrD74I2qKJGAMVkdfWgPj80JcO6lxEaRc7Hm6JraupqX8V4NUe2s74-P5RIQmqtkAdwlwg__";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const segments = [
  {
    icon: Zap,
    number: "01",
    label: "Move Faster",
    title: "Automation & Workflow Efficiency",
    tagline: "You don't need more tools. You need fewer manual steps.",
    items: [
      "Remove repetitive execution",
      "Fix broken CRM handoffs",
      "Reduce review fatigue",
      "Automate follow-ups properly",
      "Add escalation logic",
    ],
    result: "Less admin. Fewer errors. Clear ownership.",
    cta: "See Automation Systems",
    href: "/essay",
    accent: "text-electric",
    border: "border-electric/20",
    bg: "bg-electric/5",
    iconColor: "text-electric",
  },
  {
    icon: TrendingUp,
    number: "02",
    label: "Grow Revenue",
    title: "AI for Sales & Marketing",
    tagline: "AI should increase pipeline velocity — not create noise.",
    items: [
      "Qualify leads automatically",
      "Draft intelligent follow-ups",
      "Surface buying signals",
      "Integrate with your CRM",
      "Track conversion patterns",
    ],
    result: "Faster response. More booked calls. Better close rates.",
    cta: "See Growth Systems",
    href: "/essay",
    accent: "text-emerald-600",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: Shield,
    number: "03",
    label: "Build It Right",
    title: "Governance & Decision Architecture",
    tagline:
      "If AI touches client advice, compliance workflows, or regulated processes — you cannot improvise.",
    items: [
      "Decision ownership is explicit",
      "Escalation is enforced",
      "Overrides are logged",
      "Audit trails are automatic",
      "Human judgment is protected",
    ],
    result: "Speed without structural risk.",
    cta: "See Governance Architecture",
    href: "/governance",
    accent: "text-burgundy",
    border: "border-burgundy/20",
    bg: "bg-burgundy/5",
    iconColor: "text-burgundy",
  },
];

const sprintDeliverables = [
  "Workflow audit",
  "Automation opportunity mapping",
  "One production-grade AI workflow",
  "Escalation + logging embedded",
  "Documentation delivered",
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/88 via-[#0a0d14]/82 to-[#0a0d14]/92" />
        </div>
        <div className="relative z-10 container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-6 block">
              AI Systems for Operators
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Fix Your AI Before It Breaks
              <br />
              <span className="text-blue-300">Your Operations.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-4">
              I design AI systems that increase speed, protect judgment, and eliminate workflow chaos.
            </p>
            <p className="text-base text-white/55 leading-relaxed max-w-xl mb-3">
              Most teams add AI on top of broken processes. I rebuild the process first — then layer automation properly. If AI touches decisions in your company, structure matters.
            </p>
            <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-8 italic">
              For operators running structured teams where AI is already in production and workflow clarity matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_24px_oklch(0.45_0.2_250/0.35)] transition-all duration-200"
              >
                Explore Solutions <ArrowRight size={15} />
              </Link>
              <Link
                href="/the-model"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-sm no-underline hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SEGMENTATION: What Are You Trying to Improve? ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="mb-14">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Solutions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              What Are You Trying to Improve?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
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
                  className={`rounded-2xl border ${seg.border} ${seg.bg} p-8 flex flex-col`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`p-2.5 rounded-lg bg-white border ${seg.border}`}>
                      <Icon size={20} className={seg.iconColor} />
                    </div>
                    <div>
                      <span className={`font-mono text-[10px] tracking-[0.15em] uppercase ${seg.accent} block mb-0.5`}>
                        {seg.number} — {seg.label}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
                        {seg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-slate-text leading-relaxed mb-5 italic">
                    {seg.tagline}
                  </p>

                  {/* List */}
                  <div className="mb-5 flex-1">
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim block mb-3">
                      I help you:
                    </span>
                    <ul className="space-y-2">
                      {seg.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 size={14} className={`${seg.iconColor} mt-0.5 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className={`rounded-lg border ${seg.border} bg-white/60 px-4 py-3 mb-6`}>
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim block mb-1">
                      Result
                    </span>
                    <p className="text-sm font-semibold text-foreground">{seg.result}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={seg.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${seg.accent} no-underline hover:gap-3 transition-all`}
                  >
                    {seg.cta} <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS HUB ── */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              How I Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              AI Systems Built for Operators
            </h2>
            <p className="text-slate-text leading-relaxed">
              No hype. No generic roadmaps. Structured implementation tied to measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Implementation Sprint */}
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-electric/25 bg-card p-8 flex flex-col"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                Engagement
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                AI Implementation Sprint
              </h3>
              <p className="text-slate-text text-sm leading-relaxed mb-1">
                Fast. Structured. Controlled.
              </p>
              <p className="text-slate-dim text-sm mb-6">Two-week focused engagement.</p>
              <div className="mb-6 flex-1">
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim block mb-3">
                  Deliverables
                </span>
                <ul className="space-y-2">
                  {sprintDeliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-electric mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-foreground font-medium mb-6">
                You leave with a working system — built correctly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all self-start"
              >
                Start an AI Sprint <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Framework teaser */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-burgundy block mb-3">
                Framework
              </span>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                The Structure Behind Every System
              </h3>
              <p className="text-slate-text text-sm leading-relaxed mb-4">
                AI fails when execution outruns accountability. Every system I build follows three layers:
              </p>
              <div className="space-y-3 mb-6 flex-1">
                {[
                  { layer: "Execution", desc: "What AI automates", color: "bg-electric" },
                  { layer: "Judgment", desc: "What humans must own", color: "bg-burgundy" },
                  { layer: "Compliance", desc: "What the system enforces", color: "bg-slate-600" },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${l.color} shrink-0`} />
                    <span className="text-sm font-semibold text-foreground">{l.layer}</span>
                    <span className="text-sm text-slate-text">— {l.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-text italic mb-6">
                If those layers blur, risk increases.
              </p>
              <ThreeLayerDiagram compact />
              <div className="mt-6">
                <Link
                  href="/the-model"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy no-underline hover:gap-3 transition-all"
                >
                  See How It's Applied <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ESSAYS ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="rule-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Foundational Essay */}
            <motion.div {...fadeUp}>
              <div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                  Start Here
                </span>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Foundational Essay
                </h3>
                <p className="text-slate-text leading-relaxed mb-2 flex-1">
                  Where I Stand on AI Adoption, Operational Excellence, and Regulatory Integrity. The canonical statement of my position.
                </p>
                <span className="font-mono text-xs text-slate-dim block mb-6">15 min read</span>
                <Link
                  href="/foundational-essay"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground no-underline hover:bg-foreground/5 hover:border-foreground/20 transition-all self-start"
                >
                  Read
                </Link>
              </div>
            </motion.div>

            {/* Essays list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                  Essays
                </span>
                <ul className="space-y-0">
                  {[
                    {
                      title: "Why Buying More Software Makes Your Team Slower",
                      href: "/essays/entropy",
                    },
                    { title: "The Judgment Preservation Imperative", href: "/essays/judgment" },
                    { title: "Governance is Architecture, Not Paperwork", href: "/essays/governance" },
                    { title: "The Tuesday Morning Test", href: "/essays/tuesday" },
                  ].map((essay, i) => (
                    <li key={i} className="border-b border-border last:border-b-0">
                      <Link
                        href={essay.href}
                        className="flex items-center justify-between py-3.5 text-slate-text hover:text-electric transition-colors no-underline text-[15px] group"
                      >
                        {essay.title}
                        <ArrowRight size={14} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
