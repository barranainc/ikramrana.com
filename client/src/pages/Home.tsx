/*
 * DESIGN: The Architect's Blueprint — LIGHT THEME
 * HOME PAGE — V2.8
 * Narrative order: Hero → Problem → Framework → Improvements → Decision Flow
 *                  → How I Work → Case Studies → Essay → Testimonials → Final CTA
 * GEO/AEO: Person + Org schema, entity relationships, internal linking
 * No self-wrapping Layout — wrapped by App.tsx
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, CheckCircle2, Quote } from "lucide-react";
import ThreeLayerDiagram from "@/components/diagrams/ThreeLayerDiagram";
import { FragmentedSystemDiagram, CoherentSystemDiagram } from "@/components/diagrams/OperationalSystemDiagrams";

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/UThcyylsqhlZAXIM9HOrSw/sandbox/cn98qOf0FLpUJbBpsfsKnM-img-1_1770868360000_na1fn_aGVyby1ibHVlcHJpbnQtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVRoY3l5bHNxaGxaQVhJTTlIT3JTdy9zYW5kYm94L2NuOThxT2YwRkxwVUpiQnBzZnNLbk0taW1nLTFfMTc3MDg2ODM2MDAwMF9uYTFmbl9hR1Z5YnkxaWJIVmxjSEpwYm5RdFltYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JAVK1~GkUUJYd8kaXeSmu665I1XOvmvjjgH0vNmb6PwhEC9~xlK2yxoW7H3B410cNrGCGz15b~FqSGDd6l48cGDhPmc6FEVNMViRZTFLX1VMrWoEzbTYyK~NmJFFkGq9fd0XjYdkaRW8H8V3KUJrcLbZe6m2LmjFdGweRTUQdKBvq~qQEhzbT1pT5jwxXRWIUurJcsVCsq6JCAsZlYx1tVwQjGrko559KcH-iMCxyc12js~ImpOWmuhSVbho9E-5dshg4m4TvPBchkmarrD74I2qKJGAMVkdfWgPj80JcO6lxEaRc7Hm6JraupqX8V4NUe2s74-P5RIQmqtkAdwlwg__";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const sprintDeliverables = [
  "Workflow audit",
  "Automation opportunity mapping",
  "One production-grade AI workflow",
  "Escalation + logging embedded",
  "Documentation delivered",
];

const caseStudyPreviews = [
  {
    industry: "Veterinary Clinic",
    result: "Reduced no-shows by 62% and recovered front desk capacity",
    slug: "ai-automation-case-study-veterinary-clinic",
  },
  {
    industry: "Marketing Agency",
    result: "Scaled from 12 to 20 clients without hiring additional staff",
    slug: "ai-automation-case-study-marketing-agency",
  },
  {
    industry: "Logistics Company",
    result: "Cut dispatch coordination time by 55%",
    slug: "ai-automation-case-study-logistics-company",
  },
  {
    industry: "Financial Advisory",
    result: "Recovered 35% of advisor time for client relationships",
    slug: "ai-automation-case-study-financial-advisory",
  },
];

const testimonials = [
  {
    quote:
      "Ikram didn't just automate a few tasks — he rebuilt how our team makes decisions. We went from constant firefighting to a system that actually runs itself.",
    name: "Operations Director",
    company: "Professional Services Firm",
  },
  {
    quote:
      "The sprint was the most structured engagement we've had. We had a working system in two weeks, not a slide deck.",
    name: "Founder",
    company: "Immigration Consultancy",
  },
  {
    quote:
      "What I appreciated most was that Ikram protected our judgment. AI handles the routine — our team still owns the decisions that matter.",
    name: "Managing Partner",
    company: "Accounting Firm",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ikram Rana",
  url: "https://ikramrana.com",
  jobTitle: "AI Automation Strategist",
  description:
    "Ikram Rana helps businesses implement AI automation, workflow systems, and AI adoption frameworks. Founder of Barrana.ai.",
  sameAs: ["https://barrana.ai", "https://www.linkedin.com/in/ikramrana"],
  worksFor: {
    "@type": "Organization",
    name: "Barrana.ai",
    url: "https://barrana.ai",
    description: "AI automation consulting firm for small and medium-sized businesses.",
  },
  knowsAbout: [
    "AI adoption",
    "AI automation",
    "workflow systems",
    "decision systems",
    "AI governance",
    "SMB operations",
  ],
  areaServed: ["Canada", "United States", "Greater Toronto Area"],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Barrana.ai",
  url: "https://barrana.ai",
  founder: { "@type": "Person", name: "Ikram Rana" },
  description:
    "AI automation consulting firm helping businesses implement structured AI adoption frameworks.",
  areaServed: ["Canada", "United States"],
  serviceType: [
    "AI Automation Consulting",
    "AI Adoption Strategy",
    "Workflow Systems Design",
  ],
};

export default function Home() {
  useEffect(() => {
    document.title = "Ikram Rana — AI Automation Strategist for Businesses";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Helping businesses implement AI automation, workflow systems, and AI adoption frameworks. Practical guidance and implementation support from Ikram Rana of Barrana.ai."
      );
  }, []);

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

      {/* ── SECTION 1: HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
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
                AI Systems for Operators
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                Fix Your AI Before It Breaks
                <br />
                <span className="text-blue-300">Your Operations.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-xl mb-4">
                I design AI systems that increase speed, protect judgment, and eliminate workflow chaos.
              </p>
              <p className="text-base text-white/55 leading-relaxed max-w-lg mb-3">
                Most teams add AI on top of broken processes. I rebuild the process first — then layer automation properly. If AI touches decisions in your company, structure matters.
              </p>
              <p className="text-sm text-white/40 leading-relaxed max-w-lg mb-8 italic">
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032635202/6MeXVwmXXP9dCLsRyeqL5e/ikram_hero_fa300380.webp"
                  alt="Ikram Rana — AI Systems Consultant"
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
                    Ikram Rana · AI Systems Consultant
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
              Businesses add AI tools one by one — CRM integrations, chatbots, automation scripts — without a coherent system. The result is fragmentation, not efficiency. Ikram Rana of Barrana.ai designs AI adoption frameworks that replace fragmentation with operational clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Fragmented side — diagram */}
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

            {/* Coherent side — diagram */}
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
                  Clear ownership, clean workflows, traceable decisions, and operational clarity — built into the system from day one.
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032635202/6MeXVwmXXP9dCLsRyeqL5e/ikram_hero_fa300380.webp"
                  alt="Ikram Rana — AI Systems Consultant and Licensed Lawyer"
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
                    Licensed Lawyer · Tech Founder · AI Strategist
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
                A Business Architect,
                <br />
                <span className="text-blue-300">Not Just a Consultant.</span>
              </h2>
              <p className="text-slate-text leading-relaxed mb-6">
                My name is Ikram Rana. I am a licensed lawyer and a tech founder. I don't just advise on technology; I design and direct the implementation of strategic systems that solve critical operational challenges.
              </p>
              <p className="text-slate-text leading-relaxed mb-8">
                My work eliminates bottlenecks, unlocks data intelligence, and directly connects technology investment to measurable business outcomes. I operate in both Canada and Pakistan, bringing a global perspective to local business challenges.
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Licensed Lawyer",
                  "Tech Founder",
                  "AI Automation Strategist",
                  "Canada · Pakistan",
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
                AI fails when execution outruns accountability. Every AI automation system and workflow system Ikram Rana builds for businesses follows three non-negotiable layers. Without this structure, AI adoption creates chaos rather than clarity.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    layer: "Execution",
                    desc: "What AI automates — repetitive tasks, data processing, routing, scheduling.",
                    color: "bg-electric",
                    accent: "text-electric",
                    border: "border-electric/20",
                  },
                  {
                    layer: "Judgment",
                    desc: "What humans must decide — client advice, exceptions, escalations, strategy.",
                    color: "bg-burgundy",
                    accent: "text-burgundy",
                    border: "border-burgundy/20",
                  },
                  {
                    layer: "Compliance",
                    desc: "What the system enforces — audit trails, override logging, regulatory validation.",
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
                tagline: "AI should increase pipeline velocity — not create noise.",
                items: [
                  "Qualify leads automatically",
                  "Draft intelligent follow-ups",
                  "Surface buying signals",
                  "Integrate with your CRM",
                  "Track conversion patterns",
                ],
                result: "Faster response. More booked calls. Better close rates.",
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
                  "If AI touches client advice, compliance workflows, or regulated processes — you cannot improvise.",
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
                        {seg.number} — {seg.label}
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
                Every AI automation system Ikram Rana builds for businesses follows a structured decision flow. This ensures AI recommendations are evaluated, validated, and logged — protecting human judgment and maintaining operational integrity.
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
                    desc: "The AI layer processes inputs and produces a structured recommendation — a draft, a route, a classification, or an action proposal.",
                    color: "text-electric",
                    border: "border-electric/20",
                    dot: "bg-electric",
                  },
                  {
                    step: "02",
                    title: "Human evaluates decision",
                    desc: "A designated human reviews the recommendation. Judgment is preserved — the human approves, modifies, or escalates.",
                    color: "text-emerald-500",
                    border: "border-emerald-500/20",
                    dot: "bg-emerald-500",
                  },
                  {
                    step: "03",
                    title: "System validates compliance",
                    desc: "The system checks the decision against defined rules, regulatory requirements, and governance thresholds before execution.",
                    color: "text-burgundy",
                    border: "border-burgundy/20",
                    dot: "bg-burgundy",
                  },
                  {
                    step: "04",
                    title: "Decision logged for audit",
                    desc: "Every decision — including overrides and escalations — is automatically logged with timestamp, actor, and rationale for full auditability.",
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
                href="/ai-knowledge-hub/what-is-ai-governance-for-businesses"
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric no-underline hover:gap-3 transition-all"
              >
                Learn about AI governance <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW I WORK — AI IMPLEMENTATION SPRINT ──────── */}
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
                A focused two-week engagement designed to move from workflow chaos to a working AI system. Not a strategy deck — a production-grade implementation with governance built in from day one.
              </p>
              <p className="text-slate-text leading-relaxed mb-8">
                Ikram Rana of Barrana.ai audits your existing workflows, identifies the highest-impact automation opportunities, and delivers one complete AI workflow system — with escalation logic, logging, and documentation — ready to run.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-lg transition-all"
              >
                Start an AI Sprint <ArrowRight size={15} />
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
                  You leave with a working system — built correctly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CASE STUDIES ────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
                Case Studies
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                AI Automation in Practice
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric no-underline hover:gap-3 transition-all shrink-0"
            >
              View all case studies <ArrowRight size={14} />
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
                    <span>Read case study</span>
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
                    { title: "AI Adoption Framework for Small Businesses", href: "/ai-adoption-framework-for-small-businesses" },
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

      {/* ── SECTION 9: TESTIMONIALS ────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-navy border-b border-border">
        <div className="container">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Client Perspectives
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              What Operators Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-2xl border border-border bg-card p-8 flex flex-col"
              >
                <Quote size={20} className="text-electric/40 mb-4 shrink-0" />
                <p className="text-slate-text leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-slate-dim uppercase mt-0.5">
                    {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Build Your AI Advantage
            </h2>
            <p className="text-slate-text leading-relaxed mb-10">
              If you want AI systems that improve operations instead of creating chaos, start with a strategy conversation. Ikram Rana of Barrana.ai works with business operators to design AI adoption frameworks, workflow systems, and automation architectures that are built to last.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-[0_8px_24px_oklch(0.45_0.2_250/0.35)] transition-all duration-200"
              >
                Start a Consultation <ArrowRight size={15} />
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
