/*
 * DESIGN: The Architect's Blueprint — LIGHT THEME
 * HOME PAGE — Updated content
 * Hero with bold headline, Tuesday Morning scenario, three cards, start here + essays
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ThreeLayerDiagram from "@/components/diagrams/ThreeLayerDiagram";
import DecisionFlowDiagram from "@/components/diagrams/DecisionFlowDiagram";
import CoherenceDiagram from "@/components/diagrams/CoherenceDiagram";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/UThcyylsqhlZAXIM9HOrSw/sandbox/cn98qOf0FLpUJbBpsfsKnM-img-1_1770868360000_na1fn_aGVyby1ibHVlcHJpbnQtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVRoY3l5bHNxaGxaQVhJTTlIT3JTdy9zYW5kYm94L2NuOThxT2YwRkxwVUpiQnBzZnNLbk0taW1nLTFfMTc3MDg2ODM2MDAwMF9uYTFmbl9hR1Z5YnkxaWJIVmxjSEpwYm5RdFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JAVK1~GkUUJYd8kaXeSmu665I1XOvmvjjgH0vNmb6PwhEC9~xlK2yxoW7H3B410cNrGCGz15b~FqSGDd6l48cGDhPmc6FEVNMViRZTFLX1VMrWoEzbTYyK~NmJFFkGq9fd0XjYdkaRW8H8V3KUJrcLbZe6m2LmjFdGweRTUQdKBvq~qQEhzbT1pT5jwxXRWIUurJcsVCsq6JCAsZlYx1tVwQjGrko559KcH-iMCxyc12js~ImpOWmuhSVbho9E-5dshg4m4TvPBchkmarrD74I2qKJGAMVkdfWgPj80JcO6lxEaRc7Hm6JraupqX8V4NUe2s74-P5RIQmqtkAdwlwg__";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/85 via-[#0a0d14]/80 to-[#0a0d14]/90" />
        </div>
        <div className="relative z-10 container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-6 block">
              For growing organizations adopting AI
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Your AI tools are multiplying.
              <br />
              <span className="text-blue-300">Your clarity isn't.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
              I help organizations see what's actually breaking: the invisible gap between automation and accountability. Before it becomes a compliance problem, a client disaster, or a lawsuit waiting to happen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/essay"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_24px_oklch(0.45_0.2_250/0.35)] transition-all duration-200"
              >
                Read the Foundational Essay
              </Link>
              <Link
                href="/model"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-sm no-underline hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                See the Three-Layer Model
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TUESDAY MORNING PROBLEM */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-8 md:p-10">
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-burgundy font-semibold block mb-4">
                The Tuesday Morning Problem
              </span>
              <p className="text-foreground leading-relaxed mb-4">
                Your CEO is CC'd on 40 emails because nobody knows who actually owns the AI-generated recommendation. Your CRM has no escalation protocol. The AI drafted a client response that went out with an error—but the audit log just says "system generated." Legal is asking questions. Nobody has answers.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-0">
                Your team is faster. Your decisions are muddier. Your liability is growing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE CARDS */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                meta: "Core Thesis",
                title: "AI is a governance problem disguised as a software purchase",
                desc: "Most organizations adopt tools before defining who owns the decision. That's not a tech problem. It's an architecture problem.",
                link: "/essay",
                cta: "Read the essay",
              },
              {
                meta: "Framework",
                title: "Execution · Judgment · Compliance",
                desc: "Three layers. One principle: automate execution, protect judgment, embed compliance as the foundation—not the audit.",
                link: "/model",
                cta: "See the model",
              },
              {
                meta: "Application",
                title: "Governance is architecture, not paperwork",
                desc: "If your system can't reconstruct who made a decision and why, you don't have governance. You have hope.",
                link: "/governance",
                cta: "Explore",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={card.link}
                  className="block h-full p-8 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-250 no-underline group"
                >
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                    {card.meta}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-text leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {card.cta} <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL: THREE-LAYER MODEL */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-2">Framework</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">The Three-Layer Model</h2>
            <p className="text-sm text-slate-text mt-2 max-w-xl mx-auto">Every AI-augmented decision system has three layers. Most organizations only see one.</p>
          </motion.div>
          <ThreeLayerDiagram compact />
          <div className="text-center mt-8">
            <Link href="/model" className="inline-flex items-center gap-2 text-sm text-electric font-semibold no-underline hover:gap-3 transition-all">
              Explore the full model <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL: DECISION FLOW */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-2">Process</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Decision Architecture Flow</h2>
            <p className="text-sm text-slate-text mt-2 max-w-xl mx-auto">Every AI-assisted decision should follow a traceable path from recommendation to audit.</p>
          </motion.div>
          <DecisionFlowDiagram />
        </div>
      </section>

      {/* VISUAL: COHERENCE VS FRAGMENTATION */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-burgundy block mb-2">The Problem</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Coherence vs. Fragmentation</h2>
            <p className="text-sm text-slate-text mt-2 max-w-xl mx-auto">Most organizations don't have a system — they have a collection of tools pretending to be one.</p>
          </motion.div>
          <CoherenceDiagram />
        </div>
      </section>

      {/* START HERE + ESSAYS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="rule-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Start Here */}
            <motion.div {...fadeUp}>
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                  Start Here
                </span>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Foundational Essay
                </h3>
                <p className="text-slate-text leading-relaxed mb-2">
                  Where I Stand on AI Adoption, Operational Excellence, and Regulatory Integrity. The canonical statement of my position.
                </p>
                <span className="font-mono text-xs text-slate-dim">15 min read</span>
                <div className="mt-6">
                  <Link
                    href="/essay"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground no-underline hover:bg-foreground/5 hover:border-foreground/20 transition-all"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Essays list */}
            <motion.div {...fadeUp}>
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                  Essays
                </span>
                <ul className="space-y-0">
                  {[
                    { title: "Why Buying More Software Makes Your Team Slower", href: "/essays/entropy" },
                    { title: "The Judgment Preservation Imperative", href: "/essays/judgment" },
                    { title: "Governance is Architecture, Not Paperwork", href: "/essays/governance" },
                    { title: "The Tuesday Morning Test", href: "/essays/tuesday" },
                  ].map((essay, i) => (
                    <li key={i} className="border-b border-border last:border-b-0">
                      <Link
                        href={essay.href}
                        className="block py-3.5 text-slate-text hover:text-electric transition-colors no-underline text-[15px]"
                      >
                        {essay.title}
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
