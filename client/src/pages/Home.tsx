/*
 * DESIGN: The Architect's Blueprint , LIGHT THEME
 * HOME PAGE V2.9
 * Narrative order: Hero, Problem, Framework, Improvements, Decision Flow
 *                  How I Work, Use Cases, Essay, Evidence Policy, Final CTA
 * GEO/AEO: Person + Org schema, entity relationships, internal linking
 * No self-wrapping Layout , wrapped by App.tsx
 */

import { useHead } from "@/hooks/useHead";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import ThreeLayerDiagram from "@/components/diagrams/ThreeLayerDiagram";
import { FragmentedSystemDiagram, CoherentSystemDiagram } from "@/components/diagrams/OperationalSystemDiagrams";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const sprintDeliverables = [
  "Workflow audit",
  "Automation opportunity mapping",
  "One implementation-ready AI workflow",
  "Escalation + logging embedded",
  "Documentation delivered",
];

const caseStudyPreviews = [
  {
    industry: "Veterinary Clinic",
    result: "How appointment follow-up could reduce avoidable no-shows and front desk workload",
    slug: "ai-automation-case-study-veterinary-clinic",
  },
  {
    industry: "Marketing Agency",
    result: "How reporting and approvals could support more client work without immediate hiring",
    slug: "ai-automation-case-study-marketing-agency",
  },
  {
    industry: "Logistics Company",
    result: "How dispatch coordination and delivery updates could reduce manual follow-up",
    slug: "ai-automation-case-study-logistics-company",
  },
  {
    industry: "Financial Advisory",
    result: "How AI could prepare routine documentation while advisors retain judgment",
    slug: "ai-automation-case-study-financial-advisory",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ikramrana.com/#person",
  name: "Ikram Rana",
  url: "https://ikramrana.com/about",
  jobTitle: "AI Adoption and Workflow Implementation Specialist",
  description:
    "Ikram Rana helps businesses move from scattered AI experiments to working systems their teams actually use. Founder of Barrana.ai.",
  sameAs: ["https://www.linkedin.com/in/ikramrana/", "https://ikramrana.substack.com/"],
  worksFor: {
    "@id": "https://barrana.ai/#organization",
  },
  knowsAbout: [
    "AI adoption",
    "AI automation",
    "workflow systems",
    "decision systems",
    "AI governance",
    "business operations",
  ],
  areaServed: ["Canada", "United States", "Greater Toronto Area"],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://barrana.ai/#organization",
  name: "Barrana",
  url: "https://barrana.ai",
  founder: { "@id": "https://ikramrana.com/#person" },
  description:
    "Canadian AI automation company connecting existing business tools so routine work gets done reliably.",
  areaServed: ["Canada", "United States"],
  serviceType: [
    "AI Workflow Implementation",
    "AI Adoption Strategy",
    "Workflow Systems Design",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ikramrana.com/solutions#ai-adoption-service",
  name: "AI Adoption and Workflow Implementation",
  description:
    "Practical AI adoption and workflow implementation for businesses, including process documentation, automation, human oversight, and governance design.",
  provider: {
    "@id": "https://barrana.ai/#organization",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: "AI Adoption and Workflow Implementation",
  offers: {
    "@type": "Offer",
    url: "https://ikramrana.com/solutions",
    description: "AI adoption, workflow implementation, and governance for businesses.",
  },
};

export default function Home() {
  useHead(
    "Ikram Rana | AI Adoption and Workflow Implementation",
    "Helping businesses move from scattered AI experiments to working systems their teams actually use. Critical, practical guidance from Ikram Rana."
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── SECTION 1: HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.22),transparent_34%),linear-gradient(135deg,#07101f_0%,#0b1e38_55%,#07101f_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1e]/95 via-[#070f1e]/85 to-[#070f1e]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070f1e]/30 via-transparent to-[#070f1e]/60" />
        </div>

        <div className="relative z-10 container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-6 block">
                AI Adoption and Workflow Implementation
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                Turn Scattered AI Experiments Into
                <br />
                {" "}
                <span className="text-blue-300">Systems Your Team Actually Uses.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mb-4">
                I help businesses decide where AI can genuinely improve work, where it should not be used, and how to implement it without adding confusion or risk.
              </p>
              <p className="text-base text-white/55 leading-relaxed max-w-lg mb-3">
                Most teams add AI on top of broken processes. I clarify the work first, then implement automation with clear ownership, human oversight, and practical limits.
              </p>
              <p className="text-sm text-white/40 leading-relaxed max-w-lg mb-8 italic">
                For business owners, founders, and decision-makers dealing with disconnected workflows, repeated manual work, or AI tools that are not delivering consistent results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_24px_oklch(0.45_0.2_250/0.35)] transition-all duration-200"
                >
                  Find the Workflow AI Should Fix First <ArrowRight size={15} />
                </Link>
                <Link
                  href="/ai-adoption-framework-for-small-businesses"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-electric/40 text-electric font-semibold text-sm no-underline hover:bg-electric/10 hover:border-electric/60 transition-all duration-200"
                >
                  Learn the Framework
                </Link>
                <Link
                  href="/the-model"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-sm no-underline hover:bg-white/5 hover:border-white/30 transition-all duration-200"
                >
                  See How It Works
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:flex justify-center lg:justify-end items-end"
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-electric/60" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-electric/60" />
                <div className="absolute inset-0 blur-3xl bg-electric/10 scale-110" />
                <img
                  src="/images/ikram-rana-hero.webp"
                  alt="Ikram Rana, AI adoption and workflow implementation specialist"
                  className="relative w-full max-w-[420px] h-auto object-cover"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    filter: "contrast(1.05) brightness(0.95)",
                  }}
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <span
                    className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-1 border"
                    style={{
                      color: "#60a5fa",
                      borderColor: "rgba(96,165,250,0.3)",
                      background: "rgba(7,15,30,0.7)",
                    }}
                  >
                    Ikram Rana · AI Adoption and Workflow Implementation
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE OPERATIONAL PROBLEM ────────────────────── */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mb-14">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              The Problem
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Why Most AI Implementations Break Operations
            </h2>
            <p className="text-slate-text leading-relaxed max-w-2xl">
              Businesses add AI tools one by one , CRM integrations, chatbots, automation scripts , without a coherent system. The result is fragmentation, not efficiency. Ikram Rana of Barrana.ai designs AI adoption frameworks that replace fragmentation with operational clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Fragmented side , diagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-4"
            >
              <FragmentedSystemDiagram />
              <div className="rounded-xl border border-red-200 bg-red-50/60 px-5 py-4">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-red-500 mb-2">Result</p>
                <p className="text-sm text-red-700 leading-relaxed">
                  Tools operate in silos. No ownership, manual reconciliation, decision fatigue, and validation gaps slow every team down.
                </p>
              </div>
            </motion.div>

            {/* Coherent side , diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-4"
            >
              <CoherentSystemDiagram />
              <div className="rounded-xl border border-electric/25 bg-electric/5 px-5 py-4">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-2">Result</p>
                <p className="text-sm text-foreground leading-relaxed">
                  Clear ownership, clean workflows, traceable decisions, and operational clarity , built into the system from day one.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <Link
              href="/ai-adoption-framework-for-small-businesses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric no-underline hover:gap-3 transition-all"
            >
              See the AI Adoption Framework <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2B: WHO I AM ──────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: portrait */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Blueprint corner accents */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-electric/50" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-electric/50" />
                <div className="absolute inset-0 blur-3xl bg-electric/8 scale-110" />
                <img
                  src="/images/ikram-rana-hero.webp"
                  alt="Ikram Rana , AI Adoption and Workflow Implementation Specialist"
                  className="relative w-full max-w-[380px] h-auto object-cover rounded-xl"
                  style={{
                    filter: "contrast(1.05) brightness(0.95)",
                  }}
                />
                {/* Credential badge */}
                <div
                  className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 px-4 py-3 rounded-lg"
                  style={{ background: "rgba(7,15,30,0.85)", border: "1px solid rgba(96,165,250,0.25)" }}
                >
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-electric">
                    Ikram Rana
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-white/50">
                    Tech Founder · AI Adoption Specialist · International Experience
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
                Who I Am
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                A Practical AI Builder,
                <br />
                <span className="text-blue-300">Not an AI Cheerleader.</span>
              </h2>
              <p className="text-slate-text leading-relaxed mb-6">
                My name is Ikram Rana. I am a tech founder and AI adoption and workflow implementation specialist. I help businesses turn unclear processes and scattered AI tools into working systems with clear ownership and human judgment built in.
              </p>
              <p className="text-slate-text leading-relaxed mb-8">
                I am in favour of useful AI, not AI for its own sake. My work asks what should improve, what should remain human, what could fail, and whether the system will actually be used. My perspective is shaped by business and technology work across Pakistan, Singapore, Australia, and Canada.
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Tech Founder",
                  "AI Adoption Specialist",
                  "Workflow Implementation",
                  "Pakistan · Singapore · Australia · Canada",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border border-electric/25 text-electric bg-electric/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
                >
                  About Ikram <ArrowRight size={14} />
                </Link>
                <Link
                  href="/foundational-essay"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-semibold text-sm no-underline hover:bg-foreground/5 hover:border-foreground/20 transition-all"
                >
                  Read the Essay
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE FRAMEWORK ───────────────────────────────── */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-burgundy block mb-3">
                Framework
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                The Structure Behind Every AI System
              </h2>
              <p className="text-slate-text leading-relaxed mb-8">
                AI fails when execution outruns accountability. The framework used on this site separates execution, judgment, and compliance so ownership and safeguards can be designed explicitly. Without that structure, AI adoption can create confusion rather than clarity.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    layer: "Execution",
                    desc: "What AI automates , repetitive tasks, data processing, routing, scheduling.",
                    color: "bg-electric",
                    accent: "text-electric",
                    border: "border-electric/20",
                  },
                  {
                    layer: "Judgment",
                    desc: "What humans must decide , client advice, exceptions, escalations, strategy.",
                    color: "bg-burgundy",
                    accent: "text-burgundy",
                    border: "border-burgundy/20",
                  },
                  {
                    layer: "Compliance",
                    desc: "What the system enforces , audit trails, override logging, regulatory validation.",
                    color: "bg-slate-500",
                    accent: "text-slate-400",
                    border: "border-slate-500/20",
                  },
                ].map((l, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-xl border ${l.border} bg-card`}
                  >
                    <div className={`w-1 rounded-full ${l.color} shrink-0`} />
                    <div>
                      <span className={`font-mono text-[11px] tracking-[0.12em] uppercase ${l.accent} block mb-1`}>
                        {l.layer}
                      </span>
                      <p className="text-sm text-slate-text leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/the-model"
                className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy no-underline hover:gap-3 transition-all"
              >
                See how it's applied <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ThreeLayerDiagram compact={false} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT AI SYSTEMS CAN IMPROVE ────────────────── */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mb-14">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Solutions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              What AI Systems Can Improve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                number: "01",
                label: "Move Faster",
                title: "Automation and Workflow Efficiency",
                tagline: "You don't need more tools. You need fewer manual steps.",
                items: [
                  "Remove repetitive execution",
                  "Fix broken CRM handoffs",
                  "Reduce review fatigue",
                  "Automate follow-ups properly",
                  "Add escalation logic",
                ],
                result: "Less admin. Fewer errors. Clear ownership.",
                cta: "See AI automation examples",
                href: "/ai-automation-examples",
                accent: "text-electric",
                border: "border-electric/20",
                bg: "bg-electric/5",
                iconColor: "text-electric",
              },
              {
                icon: TrendingUp,
                number: "02",
                label: "Grow Revenue",
                title: "AI-Assisted Sales and Marketing Workflows",
                tagline: "AI should increase pipeline velocity , not create noise.",
                items: [
                  "Qualify leads automatically",
                  "Draft intelligent follow-ups",
                  "Surface buying signals",
                  "Integrate with your CRM",
                  "Track conversion patterns",
                ],
                result: "Faster response. Consistent qualification. Clear conversion measurement.",
                cta: "See AI workflow systems",
                href: "/ai-workflow-systems",
                accent: "text-emerald-600",
                border: "border-emerald-500/20",
                bg: "bg-emerald-500/5",
                iconColor: "text-emerald-600",
              },
              {
                icon: Shield,
                number: "03",
                label: "Build It Right",
                title: "Governance and Decision Architecture",
                tagline:
                  "If AI touches client advice, compliance workflows, or regulated processes , you cannot improvise.",
                items: [
                  "Decision ownership is explicit",
                  "Escalation is enforced",
                  "Overrides are logged",
                  "Audit trails are automatic",
                  "Human judgment is protected",
                ],
                result: "Speed without structural risk.",
                cta: "See AI governance resources",
                href: "/ai-resources-for-businesses",
                accent: "text-burgundy",
                border: "border-burgundy/20",
                bg: "bg-burgundy/5",
                iconColor: "text-burgundy",
              },
            ].map((seg, i) => {
              const Icon = seg.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`rounded-2xl border ${seg.border} ${seg.bg} p-8 flex flex-col`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`p-2.5 rounded-lg bg-white border ${seg.border}`}>
                      <Icon size={20} className={seg.iconColor} />
                    </div>
                    <div>
                      <span className={`font-mono text-[10px] tracking-[0.15em] uppercase ${seg.accent} block mb-0.5`}>
                        {seg.number} , {seg.label}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
                        {seg.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-text leading-relaxed mb-5 italic">{seg.tagline}</p>
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
                  <div className={`rounded-lg border ${seg.border} bg-white/60 px-4 py-3 mb-6`}>
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim block mb-1">
                      Result
                    </span>
                    <p className="text-sm font-semibold text-foreground">{seg.result}</p>
                  </div>
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

      {/* ── SECTION 5: DECISION ARCHITECTURE FLOW ─────────────────── */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-14">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
                Decision Architecture
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                How AI Decisions Should Flow
              </h2>
              <p className="text-slate-text leading-relaxed">
                This site uses a structured decision flow to show how AI recommendations can be evaluated, validated, and logged while preserving human judgment and accountability.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-10 bottom-10 w-px bg-electric/20 hidden sm:block" />

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "AI generates recommendation",
                    desc: "The AI layer processes inputs and produces a structured recommendation , a draft, a route, a classification, or an action proposal.",
                    color: "text-electric",
                    border: "border-electric/20",
                    dot: "bg-electric",
                  },
                  {
                    step: "02",
                    title: "Human evaluates decision",
                    desc: "A designated human reviews the recommendation. Judgment is preserved , the human approves, modifies, or escalates.",
                    color: "text-emerald-500",
                    border: "border-emerald-500/20",
                    dot: "bg-emerald-500",
                  },
                  {
                    step: "03",
                    title: "System records controls and exceptions",
                    desc: "The system checks the decision against defined rules, regulatory requirements, and governance thresholds before execution.",
                    color: "text-burgundy",
                    border: "border-burgundy/20",
                    dot: "bg-burgundy",
                  },
                  {
                    step: "04",
                    title: "Decision logged for audit",
                    desc: "Every decision , including overrides and escalations , is automatically logged with timestamp, actor, and rationale for full auditability.",
                    color: "text-slate-400",
                    border: "border-slate-500/20",
                    dot: "bg-slate-500",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`flex gap-6 p-6 rounded-xl border ${item.border} bg-card`}
                  >
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className={`w-4 h-4 rounded-full ${item.dot} flex items-center justify-center`} />
                      <span className={`font-mono text-[10px] ${item.color}`}>{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-foreground mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-text leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...fadeUp} className="mt-10 text-center">
              <Link
                href="/ai-knowledge-hub/ai-governance-for-businesses"
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric no-underline hover:gap-3 transition-all"
              >
                Learn about AI governance <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW I WORK , AI IMPLEMENTATION SPRINT ──────── */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
                How I Work
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                AI Implementation Sprint
              </h2>
              <p className="text-slate-text leading-relaxed mb-6">
                A focused engagement that starts with discovery and works toward one bounded AI workflow. The timeline and deliverable depend on process clarity, data, integrations, security, exceptions, and the agreed scope.
              </p>
              <p className="text-slate-text leading-relaxed mb-8">
                The work can include a workflow audit, opportunity mapping, implementation design, escalation logic, logging, documentation, and a pilot or deployment when the discovery findings support it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
              >
                Discuss the Implementation Scope <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-electric/25 bg-card p-8"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-5">
                Deliverables
              </span>
              <ul className="space-y-3 mb-8">
                {sprintDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full border border-electric/40 bg-electric/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-[9px] text-electric">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-border bg-background px-5 py-4">
                <p className="text-sm font-semibold text-foreground">
                  You leave with the agreed workflow, controls, documentation, and next steps defined for the actual scope.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ILLUSTRATIVE USE CASES */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
                Illustrative Use Cases
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                See How AI Could Work in Practice
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric no-underline hover:gap-3 transition-all shrink-0"
            >
              View all illustrative scenarios <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudyPreviews.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group flex flex-col h-full border border-border bg-card hover:bg-background hover:border-electric/30 transition-all duration-200 rounded-xl p-6 no-underline"
                >
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-electric block mb-3">
                    {cs.industry}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">{cs.result}</p>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-electric/60 group-hover:text-electric transition-colors">
                    <span>Explore scenario</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FOUNDATIONAL ESSAY ─────────────────────────── */}
      <section className="py-20 md:py-24 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp}>
              <div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                  Foundational Essay
                </span>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Where I Stand on AI Adoption
                </h3>
                <p className="text-slate-text leading-relaxed mb-2 flex-1">
                  Where I Stand on AI Adoption, Operational Excellence, and Regulatory Integrity. The canonical statement of my position on AI adoption for businesses.
                </p>
                <span className="font-mono text-xs text-slate-dim block mb-6">15 min read</span>
                <Link
                  href="/foundational-essay"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground no-underline hover:bg-foreground/5 hover:border-foreground/20 transition-all self-start"
                >
                  Read the Essay <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="p-8 rounded-2xl border border-border bg-card h-full">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-3">
                  Resources
                </span>
                <ul className="space-y-0">
                  {[
                    { title: "AI Adoption Framework for Businesses", href: "/ai-adoption-framework-for-small-businesses" },
                    { title: "AI Knowledge Hub", href: "/ai-knowledge-hub" },
                    { title: "AI Dictionary", href: "/ai-dictionary" },
                    { title: "AI Resources for Businesses", href: "/ai-resources-for-businesses" },
                    { title: "Industry Automation Guides", href: "/industries" },
                  ].map((link, i) => (
                    <li key={i} className="border-b border-border last:border-b-0">
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-3.5 text-slate-text hover:text-electric transition-colors no-underline text-[15px] group"
                      >
                        {link.title}
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

      {/* ── SECTION 9: EVIDENCE POLICY ─────────────────────────────── */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Evidence Policy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Claims Should Be Verifiable
            </h2>
            <p className="mt-6 text-slate-text leading-relaxed">
              Client outcomes are not published as proof without permission and a clear measurement basis. The use cases on this site are explicitly labelled as illustrative, and example figures are not presented as measured client results. Compliance and performance claims are scoped to the actual workflow, evidence, and obligations involved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/case-studies" className="rounded-lg border border-electric/30 px-5 py-3 text-sm font-semibold text-electric no-underline hover:bg-electric/10">
                Review illustrative use cases
              </Link>
              <Link href="/ai-adoption-framework-for-small-businesses" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground no-underline hover:bg-card">
                Review the methodology
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            {...fadeUp}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-4">
              Start Here
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Find the Work AI Should Improve First
            </h2>
            <p className="text-slate-text leading-relaxed mb-10">
              Do not start with another AI tool. Start with the work that is repeatedly delayed, copied, chased, or checked. We will identify whether AI belongs there, what still requires human judgment, and what a practical implementation would involve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_24px_oklch(0.45_0.2_250/0.35)] transition-all duration-200"
              >
                Find the Workflow AI Should Fix First <ArrowRight size={15} />
              </Link>
              <a
                href="https://www.linkedin.com/in/ikramrana/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm no-underline hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-200"
              >
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
