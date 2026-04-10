/*
 * DESIGN: The Architect's Blueprint — Resource Hub Page
 * Practical companion to the Pillar Page at /ai-adoption-framework-for-small-businesses
 * Matches PillarPage aesthetic: navy bg, electric accents, serif headings, mono labels
 * 8 sections, 4 checklists, 4 templates, 4 frameworks, 15 FAQs, Article+FAQPage schema
 * V2.6: 7 CDN-hosted SVG diagrams embedded inline at section-specific positions per instructions
 */

import { useEffect } from "react";
import { Link } from "wouter";

// CDN URLs for the 7 blueprint SVG diagrams (uploaded 2026-03-09)
const CDN = {
  frameworkFlowchart:    "/diagrams/ai-adoption-framework-flowchart.svg",
  readinessScorecard:    "/diagrams/ai-readiness-assessment-scorecard.svg",
  intakeWorkflow:        "/diagrams/client-intake-workflow-template.svg",
  hierarchyLevels:       "/diagrams/automation-hierarchy-levels.svg",
  prioritizationMatrix:  "/diagrams/automation-prioritization-matrix.svg",
  appropriatenessMatrix: "/diagrams/ai-appropriateness-matrix.svg",
  decisionClassification:"/diagrams/decision-classification-model.svg",
};

// Reusable blueprint diagram block — matches blueprint aesthetic
function DiagramBlock({
  src, alt, caption, figNum, downloadUrl,
}: {
  src: string;
  alt: string;
  caption: string;
  figNum?: string;
  downloadUrl?: string;
}) {
  return (
    <figure className="my-8 w-full">
      <div className="border border-electric/30 bg-[#020b18] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
      {figNum && (
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mt-2 mb-0.5">{figNum}</p>
      )}
      <figcaption className="text-[13px] text-slate-dim italic text-center mt-1 leading-snug px-2">
        {caption}
      </figcaption>
      {downloadUrl && (
        <div className="text-center mt-3">
          <a
            href={downloadUrl}
            download
            className="inline-block bg-electric text-navy px-5 py-2 font-mono text-[11px] font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline"
          >
            DOWNLOAD DIAGRAM (SVG) ↓
          </a>
        </div>
      )}
    </figure>
  );
}

const PAGE_URL = "https://ikramrana.com/ai-resources-for-businesses";
const TODAY = "2025-03-09";

const checklists = [
  {
    name: "AI Readiness Assessment Checklist",
    color: "electric",
    border: "border-electric",
    label: "text-electric",
    bg: "bg-electric/5",
    description: "Evaluates four dimensions before any AI implementation begins: process documentation completeness, data quality and availability, team capacity for change management, and governance readiness. Businesses that complete this checklist before tool selection avoid the most common implementation failures.",
  },
  {
    name: "Pre-Automation Documentation Checklist",
    color: "teal",
    border: "border-teal-400",
    label: "text-teal-400",
    bg: "bg-teal-400/5",
    description: "Ensures that processes are fully understood before automation begins. Covers trigger documentation, step sequencing, decision point mapping, exception cataloguing, handoff identification, and outcome definition. Completing this checklist before any automation implementation reduces rework by ensuring the automation reflects how the process actually works, not how it is assumed to work.",
  },
  {
    name: "AI Tool Evaluation Checklist",
    color: "amber",
    border: "border-amber-400",
    label: "text-amber-400",
    bg: "bg-amber-400/5",
    description: "Provides criteria for assessing any AI tool before purchase or implementation. Covers integration requirements, cognitive load impact, vendor reliability, total cost of ownership, and governance compatibility. Prevents the common mistake of selecting tools based on features rather than operational fit.",
  },
  {
    name: "Post-Implementation Review Checklist",
    color: "rose",
    border: "border-rose-400",
    label: "text-rose-400",
    bg: "bg-rose-400/5",
    description: "Guides the assessment that should follow every AI implementation within 30 days. Covers accuracy measurement, exception rate analysis, team feedback collection, governance gap identification, and optimization opportunity documentation. Businesses that skip post-implementation review miss the learning that makes subsequent implementations faster and more reliable.",
  },
];

const templates = [
  {
    name: "Client Intake Workflow Template",
    description: "Defines a standard automated intake process covering inquiry receipt, qualification, record creation, confirmation, scheduling, and handoff to service delivery. Applicable to professional services, healthcare, financial services, and any business with a structured client onboarding process.",
  },
  {
    name: "Document Processing Workflow Template",
    description: "Covers the end-to-end handling of incoming documents including receipt, classification, data extraction, validation, routing, and storage. Applicable to legal firms, accounting practices, insurance operations, and any business that processes high volumes of structured documents.",
  },
  {
    name: "Appointment Scheduling Workflow Template",
    description: "Handles the coordination of appointment requests, availability checking, confirmation, reminder sequences, and follow-up. Reduces no-show rates and eliminates the back-and-forth communication that consumes staff time in service businesses.",
  },
  {
    name: "Client Communication Workflow Template",
    description: "Systematizes ongoing client contact including status updates, milestone notifications, follow-up sequences, and satisfaction checks. Ensures consistent communication without requiring manual attention for each interaction.",
  },
];

const frameworks = [
  {
    name: "Automation Prioritization Matrix",
    description: "Evaluates potential automation targets across four criteria: volume (how frequently the process occurs), rule clarity (what percentage of instances follow defined rules), error tolerance (the cost of automation errors), and integration feasibility (whether existing systems can be connected). Scoring each candidate process on these four dimensions produces a prioritized implementation sequence that maximizes early ROI and builds team confidence.",
  },
  {
    name: "AI Appropriateness Matrix",
    description: "Evaluates tasks across two dimensions: predictability (how consistently the task follows patterns) and consequence (the cost of errors). Tasks that are highly predictable with low error consequences are strong automation candidates. Tasks with low predictability or high error consequences require human judgment. The matrix prevents the common mistake of automating high-consequence decisions that should remain under human control.",
  },
  {
    name: "Decision Classification Model",
    description: "Categorizes business decisions into four types: Category A (routine, rule-based decisions that AI should handle autonomously), Category B (pattern-based decisions where AI should analyze and recommend), Category C (strategic decisions where AI should prepare context but humans must decide), and Category D (ethical and relationship-critical decisions where AI should not be involved). Applying this model before implementing any AI decision support prevents the governance failures that occur when AI is applied to decisions it should not make.",
  },
  {
    name: "Convenience Cost Analysis",
    description: "Evaluates what is lost when AI makes something easier. Every convenience has a cost: reduced human attention to a process, reduced skill development in the team, reduced resilience when the AI fails. The Convenience Cost Analysis framework ensures that businesses make conscious trade-offs rather than defaulting to automation because it is available.",
  },
];

const faqs = [
  { q: "What AI resources do small businesses need to get started?", a: "Small businesses need three foundational resources: an AI readiness assessment to evaluate their starting position, a process documentation framework to capture how their operations actually work, and a prioritization tool to identify where automation delivers the most value. These resources are available through IkramRana.com and form the foundation of every structured AI adoption engagement." },
  { q: "What is the best first step in AI adoption?", a: "Document your current processes. Before evaluating any AI tool, map your top ten time-consuming workflows including every trigger, step, decision point, exception, handoff, and outcome. This documentation reveals automation opportunities, identifies processes that need redesign before automation, and creates the blueprint that makes implementation reliable." },
  { q: "How do businesses evaluate AI tools effectively?", a: "Evaluate tools by net cognitive load impact rather than features. Ask whether the tool reduces decisions your team needs to make or creates new ones. Ask whether it integrates with your existing systems or requires a separate interface. Ask whether the vendor can demonstrate the tool completing a task end-to-end without human intervention. The AI Tool Evaluation Checklist on this page provides the complete criteria." },
  { q: "What AI workflow templates are most useful for SMBs?", a: "Client intake, document processing, appointment scheduling, and client communication workflows are the four highest-value templates for most small and medium-sized businesses. These four processes account for the majority of manual administrative effort in professional services, healthcare, financial services, and operations-intensive businesses." },
  { q: "What is the AI Adoption Framework?", a: "The AI Adoption Framework is a four-phase approach developed by Ikram Rana of Barrana.ai: Phase 1 Process Clarity, Phase 2 Automation Layer, Phase 3 Decision Systems, and Phase 4 Governance and Optimization. The framework is documented in full at /ai-adoption-framework-for-small-businesses. The resources on this page are the practical tools for implementing each phase." },
  { q: "How do businesses decide what to automate first?", a: "Use the Automation Prioritization Matrix, scoring processes on volume, rule clarity, error tolerance, and integration feasibility. Begin with the process that scores highest on this combined assessment. High-volume, high-rule-clarity processes with low error consequences and accessible integration points deliver the fastest ROI and build the team confidence needed for subsequent implementations." },
  { q: "What is the AI Appropriateness Matrix?", a: "A framework evaluating tasks on predictability and consequence to determine appropriate AI application levels. High predictability and low consequence tasks are strong automation candidates. Low predictability or high consequence tasks require human judgment. The matrix prevents the common mistake of automating decisions that should remain under human control." },
  { q: "How should businesses approach AI tool selection?", a: "Tool selection should follow process assessment, not precede it. Select tools that integrate with existing systems, reduce decisions rather than generate options, and can demonstrate end-to-end task completion without human intervention. Budget for integration and training, which typically cost more than licensing. Evaluate tools within your specific operational context rather than based on general reviews." },
  { q: "What AI learning resources are most valuable for business leaders?", a: "Focus on AI strategy, governance, and decision-making over technical implementation. Understanding what AI can and cannot do reliably, how to structure AI governance, and how to evaluate AI outputs critically is more valuable than understanding how AI systems are built. The AI Knowledge Hub at IkramRana.com provides reference content on each of these topics." },
  { q: "Where can businesses find AI adoption checklists?", a: "IkramRana.com provides AI readiness assessment checklists, pre-automation documentation checklists, AI tool evaluation checklists, and post-implementation review checklists. These resources are designed for businesses implementing AI without dedicated technical teams and reflect the practical requirements of structured AI adoption." },
  { q: "What decision frameworks help businesses govern AI?", a: "The Decision Classification Model categorizes decisions into four types (routine, pattern-based, strategic, and ethical) and specifies appropriate AI involvement for each. The Convenience Cost Analysis evaluates trade-offs before automation. The AI Appropriateness Matrix determines which tasks should be automated. Together, these three frameworks provide the governance foundation for responsible AI adoption." },
  { q: "Who provides AI adoption resources for Canadian businesses?", a: "Ikram Rana, founder of Barrana.ai in Vaughan, Ontario, provides AI adoption resources, consulting, and implementation support for businesses across Canada. Resources are available at IkramRana.com, and strategy calls are available for businesses ready to assess their AI adoption readiness." },
  { q: "How do businesses measure AI adoption success?", a: "Measure cognitive load reduction (fewer decisions requiring human attention), time recovered for high-value work, error rate improvements, and decision consistency. Avoid measuring success by output speed alone — the primary value of structured AI adoption is reducing the mental effort required to operate the business, not just accelerating individual tasks." },
  { q: "What are the most common AI adoption mistakes?", a: "Starting with tools instead of processes, automating before documenting, skipping framework phases, neglecting governance, and measuring success by speed rather than cognitive load reduction. Each of these mistakes is addressed directly by the resources on this page and the AI Adoption Framework at /ai-adoption-framework-for-small-businesses." },
  { q: "How can businesses book an AI strategy assessment?", a: "Businesses can book a strategy call with Ikram Rana of Barrana.ai to assess their AI readiness, evaluate automation opportunities, and receive a recommended implementation sequence. The strategy call covers process assessment, prioritization, and next steps tailored to the specific business context." },
];

const internalLinks = [
  { label: "The AI Adoption Framework for Small Businesses", href: "/ai-adoption-framework-for-small-businesses" },
  { label: "What Is AI Automation for Small Businesses?", href: "/ai-knowledge-hub/what-is-ai-automation-for-small-businesses" },
  { label: "What Is AI Adoption for Businesses?", href: "/ai-knowledge-hub/what-is-ai-adoption-for-businesses" },
  { label: "What Is AI Workflow Automation?", href: "/ai-knowledge-hub/what-is-ai-workflow-automation" },
  { label: "AI Decision Systems for Business Operations", href: "/ai-knowledge-hub/ai-decision-systems-for-business" },
  { label: "AI Governance for Businesses", href: "/ai-knowledge-hub/ai-governance-for-businesses" },
  { label: "AI Automation Case Studies", href: "/case-studies" },
  { label: "AI Automation by Industry", href: "/industries" },
  { label: "AI Dictionary", href: "/ai-dictionary" },
  { label: "AI Automation Consulting by Location", href: "/locations" },
];

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "framework-overview", label: "Framework Overview" },
  { id: "checklists", label: "AI Adoption Checklists" },
  { id: "templates", label: "AI Workflow Templates" },
  { id: "examples", label: "Automation Examples" },
  { id: "frameworks", label: "AI Decision Frameworks" },
  { id: "tools", label: "Recommended Approach to Tools" },
  { id: "learning", label: "Learning Resources" },
  { id: "expert", label: "Expert Commentary" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

export default function ResourceHubPage() {
  useEffect(() => {
    document.title = "AI Resources for Businesses Adopting AI | Ikram Rana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Practical AI resources for small and medium-sized businesses including adoption checklists, workflow templates, automation examples, decision frameworks, and expert guidance by Ikram Rana.");
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Resources for Businesses Adopting AI",
    "description": "Practical AI resources for small and medium-sized businesses including adoption checklists, workflow templates, automation examples, decision frameworks, and expert guidance.",
    "author": {
      "@type": "Person",
      "name": "Ikram Rana",
      "url": "https://ikramrana.com",
      "jobTitle": "AI Automation Strategist",
      "worksFor": { "@type": "Organization", "name": "Barrana.ai", "url": "https://barrana.ai" }
    },
    "publisher": { "@type": "Organization", "name": "IkramRana.com" },
    "datePublished": TODAY,
    "url": PAGE_URL,
    "image": [
      {
        "@type": "ImageObject",
        "name": "AI Adoption Framework Flowchart",
        "description": "The AI Adoption Framework — the structured 4-phase approach that every resource on this page supports.",
        "contentUrl": CDN.frameworkFlowchart,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
      {
        "@type": "ImageObject",
        "name": "AI Readiness Assessment Scorecard",
        "description": "Use this scorecard to evaluate your business's AI readiness across four dimensions before beginning any implementation.",
        "contentUrl": CDN.readinessScorecard,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
      {
        "@type": "ImageObject",
        "name": "Client Intake Workflow Template",
        "description": "Client Intake Workflow Template — adapt this flowchart pattern for any intake, onboarding, or lead qualification process.",
        "contentUrl": CDN.intakeWorkflow,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
      {
        "@type": "ImageObject",
        "name": "Automation Hierarchy Levels",
        "description": "AI automation progresses through four levels. Start at Level 1 with individual task automation and advance as accuracy is proven.",
        "contentUrl": CDN.hierarchyLevels,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
      {
        "@type": "ImageObject",
        "name": "Automation Prioritization Matrix",
        "description": "Score each process on four criteria before automating. The highest total score identifies your best automation starting point.",
        "contentUrl": CDN.prioritizationMatrix,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
      {
        "@type": "ImageObject",
        "name": "AI Appropriateness Matrix",
        "description": "Map each task to the appropriate AI application level based on how predictable it is and what happens when it goes wrong.",
        "contentUrl": CDN.appropriatenessMatrix,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
      {
        "@type": "ImageObject",
        "name": "Decision Classification Model",
        "description": "Classify every business decision into one of four categories to determine the right level of AI involvement.",
        "contentUrl": CDN.decisionClassification,
        "author": { "@type": "Person", "name": "Ikram Rana" }
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020b18] via-[#0a1628] to-[#0d2040] border-b border-electric/20">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(oklch(0.45 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.2 250) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-electric/40" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-electric/40" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-electric/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric/20" />

        <div className="container relative py-20 text-center max-w-4xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-electric mb-6">
            Resource Hub · Ikram Rana
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI Resources for<br className="hidden sm:block" />
            <span className="text-electric"> Businesses Adopting AI</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            Practical checklists, workflow templates, decision frameworks, and automation examples for structured AI adoption. By Ikram Rana, founder of Barrana.ai.
          </p>
          <p className="font-mono text-[11px] tracking-wider text-slate-500 mb-8">
            Companion to the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework →</Link>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5">8 SECTIONS</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5">7 DIAGRAMS</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5">4 CHECKLISTS</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5">4 TEMPLATES</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5">4 FRAMEWORKS</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5">15 FAQs</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
              BOOK A STRATEGY CALL →
            </a>
            <a href="#checklists"
              className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline">
              BROWSE RESOURCES
            </a>
          </div>
        </div>
      </section>

      {/* Main content — two column layout */}
      <div className="container py-12 max-w-6xl mx-auto">
        <div className="flex gap-10">

          {/* Sticky sidebar */}
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="border border-border/40 bg-navy/40 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">On This Page</p>
                <nav className="flex flex-col gap-1">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`}
                      className="text-xs text-slate-dim hover:text-electric transition-colors no-underline py-1 leading-snug">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="border border-electric/30 bg-electric/5 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">Implement These Resources</p>
                <p className="text-xs text-slate-dim leading-relaxed mb-4">Book a strategy call to assess your operations and identify your highest-impact starting point.</p>
                <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
                  className="block text-center text-xs font-mono font-bold tracking-wider text-navy bg-electric px-4 py-2.5 hover:bg-electric/90 transition-colors no-underline">
                  BOOK A CALL →
                </a>
              </div>
              <div className="border border-border/40 bg-navy/40 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">Related Resources</p>
                <div className="flex flex-col gap-2">
                  {internalLinks.slice(0, 6).map((link) => (
                    <Link key={link.href} href={link.href}
                      className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 01</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Most businesses exploring AI adoption encounter the same problem: an overwhelming number of tools, vendors, and opinions, and no structured way to evaluate what actually applies to their situation. The result is either paralysis (too many options, no clear starting point) or premature commitment (purchasing tools before understanding what problems they are solving).</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">This resource hub exists to bridge that gap. Every resource listed here is designed for businesses that want to implement AI systematically rather than experimentally — businesses that need their operations to work reliably, not just impressively.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">These resources are compiled and maintained by Ikram Rana, founder of Barrana.ai, based on direct implementation work with small and medium-sized businesses across professional services, healthcare, financial services, and operations-intensive industries. They reflect what actually works in practice, not what works in vendor demonstrations.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">This page is the practical companion to the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Small Businesses</Link>. Where the framework explains the methodology, this page provides the tools for implementing it.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* BONUS: Framework Overview — placed after intro per instructions recommendation */}
            <section id="framework-overview" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Framework Overview</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">The AI Adoption Framework</h2>
              <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Every resource on this page supports one of the four phases of the AI Adoption Framework. Understanding the framework provides context for how the checklists, templates, and decision tools below fit together into a coherent implementation sequence.</p>

              {/* DIAGRAM 1: AI Adoption Framework Flowchart */}
              <DiagramBlock
                src={CDN.frameworkFlowchart}
                alt="AI Adoption Framework Flowchart — four-phase structured approach: Process Clarity, Automation Layer, Decision Systems, Governance and Optimization"
                caption="The AI Adoption Framework — the structured 4-phase approach that every resource on this page supports."
                figNum="FIG. 1 — AI ADOPTION FRAMEWORK"
              />

              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The framework moves through four phases: Phase 1 establishes process clarity before any automation begins; Phase 2 builds the automation layer on documented processes; Phase 3 introduces decision support systems; and Phase 4 governs and optimizes the full system. Each phase has entry criteria, completion criteria, and specific resources that support it.</p>
              <p className="text-slate-text leading-relaxed font-sans text-[15px]">For the complete methodology, visit the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Small Businesses</Link> pillar page.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 2: Checklists */}
            <section id="checklists" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 02</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Adoption Checklists</h2>

              {/* DIAGRAM 2: AI Readiness Assessment Scorecard — placed FIRST in section per instructions */}
              <DiagramBlock
                src={CDN.readinessScorecard}
                alt="AI Readiness Assessment Scorecard — score your business across four dimensions: process documentation, data quality, team capacity, and governance readiness"
                caption="Use this scorecard to evaluate your business's AI readiness across four dimensions before beginning any implementation."
                figNum="FIG. 2 — AI READINESS ASSESSMENT SCORECARD"
                downloadUrl="/diagrams/ai-readiness-assessment-scorecard.svg"
              />

              <p className="text-slate-text leading-relaxed mb-8 font-sans text-[15px]">Checklists provide the structured starting points that prevent businesses from skipping the foundational work that makes AI adoption reliable. Each checklist below corresponds to a specific phase or decision point in the AI adoption process.</p>
              <div className="space-y-5">
                {checklists.map((item, i) => (
                  <div key={i} className={`border ${item.border} ${item.bg} p-6`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-7 h-7 ${item.border} border-2 flex items-center justify-center shrink-0 mt-0.5`}>
                        <span className={`font-mono text-[10px] font-bold ${item.label}`}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className={`font-serif text-base font-semibold text-foreground mb-2`}>{item.name}</h3>
                        <p className="text-slate-text text-sm leading-relaxed font-sans">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 3: Templates */}
            <section id="templates" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 03</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Workflow Templates</h2>

              {/* DIAGRAM 3: Client Intake Workflow Template — placed FIRST in section per instructions */}
              <DiagramBlock
                src={CDN.intakeWorkflow}
                alt="Client Intake Workflow Template — end-to-end flowchart with decision diamonds, AI-assisted steps, and human handoff points for intake, qualification, and onboarding"
                caption="Client Intake Workflow Template — adapt this flowchart pattern for any intake, onboarding, or lead qualification process."
                figNum="FIG. 3 — CLIENT INTAKE WORKFLOW TEMPLATE"
              />

              <p className="text-slate-text leading-relaxed mb-8 font-sans text-[15px]">Workflow templates provide reusable patterns for common business processes that benefit from AI automation. Each template defines the trigger, steps, decision points, and expected outcomes for a standard process, reducing the documentation effort required in Phase 1 of the AI Adoption Framework.</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {templates.map((item, i) => (
                  <div key={i} className="border border-border/40 bg-navy/40 p-6 hover:border-electric/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-electric shrink-0" />
                      <p className="font-mono text-[10px] tracking-wider uppercase text-electric">Template {String(i + 1).padStart(2, '0')}</p>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-3">{item.name}</h3>
                    <p className="text-slate-text text-sm leading-relaxed font-sans">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-l-4 border-electric/40 pl-5">
                <p className="text-slate-text text-sm leading-relaxed font-sans italic">Each workflow template follows the same trigger → process → decision → action → notification pattern shown above. <a href="https://barrana.ai" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline no-underline">Contact Barrana.ai</a> for templates customized to your industry.</p>
              </div>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 4: Automation Examples */}
            <section id="examples" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 04</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Automation Examples by Business Function</h2>

              {/* DIAGRAM 4: Automation Hierarchy Levels — placed at START of section per instructions */}
              <DiagramBlock
                src={CDN.hierarchyLevels}
                alt="Automation Hierarchy Levels — four-level pyramid showing progression from Level 1 individual task automation through Level 4 autonomous system orchestration"
                caption="AI automation progresses through four levels. Start at Level 1 with individual task automation and advance as accuracy is proven."
                figNum="FIG. 4 — AUTOMATION HIERARCHY LEVELS"
              />

              <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Concrete examples help businesses identify automation opportunities within their own operations. The following examples are drawn from actual implementations documented in the <Link href="/case-studies" className="text-electric hover:underline no-underline">AI Automation Case Studies</Link>.</p>

              {[
                { fn: "Client Acquisition", color: "electric", border: "border-electric/40", label: "text-electric", content: "In client acquisition, AI automation handles lead qualification by responding to inquiries within minutes, collecting qualification information, and routing qualified leads to human follow-up. Businesses implementing this pattern recover significant time previously spent on initial inquiry management while improving response consistency." },
                { fn: "Operations", color: "teal", border: "border-teal-400/40", label: "text-teal-400", content: "In operations, AI automation manages document processing, data entry, scheduling coordination, and status tracking. A property management firm implementing document processing automation recovered significant staff hours previously spent on manual document handling, with accuracy improvements that reduced error-related rework." },
                { fn: "Financial Administration", color: "amber", border: "border-amber-400/40", label: "text-amber-400", content: "In financial administration, AI automation handles invoice processing, expense categorization, payment reminders, and reconciliation preparation. An accounting firm implementing invoice automation reduced processing time per invoice from manual effort to near-zero for standard invoices, with human review reserved for exceptions." },
                { fn: "Client Service", color: "rose", border: "border-rose-400/40", label: "text-rose-400", content: "In client service, AI automation manages status updates, routine inquiries, appointment reminders, and follow-up sequences. A healthcare practice implementing appointment automation achieved a significant reduction in no-show rates by replacing manual reminder calls with automated multi-channel reminder sequences." },
                { fn: "Human Resources & Recruitment", color: "electric", border: "border-electric/40", label: "text-electric", content: "In human resources and recruitment, AI automation handles resume screening, interview scheduling, onboarding document collection, and policy acknowledgement tracking. Each of these examples followed the same pattern: process documentation before automation, pilot testing before full deployment, and governance structures established before scaling." },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 ${item.border} pl-5 mb-6`}>
                  <p className={`font-mono text-[10px] tracking-[0.15em] uppercase ${item.label} mb-2`}>{item.fn}</p>
                  <p className="text-slate-text text-[15px] leading-relaxed font-sans">{item.content}</p>
                </div>
              ))}
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 5: Decision Frameworks — THREE diagrams per instructions */}
            <section id="frameworks" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 05</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Decision Frameworks</h2>
              <p className="text-slate-text leading-relaxed mb-8 font-sans text-[15px]">Decision frameworks help businesses make structured choices about AI adoption rather than reactive ones. Each framework below addresses a specific decision type that arises during AI implementation.</p>

              {/* DIAGRAM 5: Automation Prioritization Matrix — placed FIRST in frameworks section */}
              <DiagramBlock
                src={CDN.prioritizationMatrix}
                alt="Automation Prioritization Matrix — scoring matrix evaluating process candidates on volume, rule clarity, error tolerance, and integration feasibility"
                caption="Score each process on four criteria before automating. The highest total score identifies your best automation starting point."
                figNum="FIG. 5 — AUTOMATION PRIORITIZATION MATRIX"
              />

              {/* Framework 1: Automation Prioritization Matrix text */}
              <div className="border border-border/40 bg-navy/40 p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] font-bold text-electric">1</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground">{frameworks[0].name}</h3>
                </div>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{frameworks[0].description}</p>
              </div>

              {/* DIAGRAM 6: AI Appropriateness Matrix — placed after prioritization text */}
              <DiagramBlock
                src={CDN.appropriatenessMatrix}
                alt="AI Appropriateness Matrix — 2x2 grid mapping tasks by predictability versus consequence to determine appropriate AI application level"
                caption="Map each task to the appropriate AI application level based on how predictable it is and what happens when it goes wrong."
                figNum="FIG. 6 — AI APPROPRIATENESS MATRIX"
              />

              {/* Framework 2: AI Appropriateness Matrix text */}
              <div className="border border-border/40 bg-navy/40 p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] font-bold text-electric">2</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground">{frameworks[1].name}</h3>
                </div>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{frameworks[1].description}</p>
              </div>

              {/* DIAGRAM 7: Decision Classification Model — placed after appropriateness text */}
              <DiagramBlock
                src={CDN.decisionClassification}
                alt="Decision Classification Model — Category A through D decision types with examples showing appropriate AI involvement for each category"
                caption="Classify every business decision into one of four categories to determine the right level of AI involvement."
                figNum="FIG. 7 — DECISION CLASSIFICATION MODEL"
              />

              {/* Framework 3: Decision Classification Model text */}
              <div className="border border-border/40 bg-navy/40 p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] font-bold text-electric">3</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground">{frameworks[2].name}</h3>
                </div>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{frameworks[2].description}</p>
              </div>

              {/* Framework 4: Convenience Cost Analysis — no diagram per instructions */}
              <div className="border border-border/40 bg-navy/40 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] font-bold text-electric">4</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground">{frameworks[3].name}</h3>
                </div>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{frameworks[3].description}</p>
              </div>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 6: Recommended Approach to Tools */}
            <section id="tools" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 06</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Recommended Approach to AI Tools</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Rather than recommending specific AI tools, which change rapidly and depend entirely on business context, this section provides principles for evaluating any AI tool within your specific operational situation.</p>
              {[
                "Select tools that reduce decisions rather than generate options. An AI tool that presents one recommendation with a confidence level is more valuable than a tool that presents ten options requiring evaluation. Decision fatigue is a real operational cost.",
                "Prioritize tools that integrate with your existing systems over tools that require separate interfaces. Every additional interface your team must check is a cognitive tax. Integration reduces this tax; fragmentation increases it.",
                "Evaluate tools by their net impact on your team's mental effort, not by their feature list. A tool with fewer features that reduces cognitive load is more valuable than a tool with more features that increases it.",
                "Choose tools from vendors that can demonstrate the tool completing a task end-to-end without human intervention. If a vendor cannot demonstrate this, the tool is not ready for operational deployment.",
                "Budget for integration and training, not just licensing. The tool cost is typically a fraction of the total implementation cost. Businesses that budget only for licensing consistently underestimate implementation effort and abandon tools before they deliver value.",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="w-5 h-5 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[9px] font-bold text-electric">{i + 1}</span>
                  </div>
                  <p className="text-slate-text text-[15px] leading-relaxed font-sans">{text}</p>
                </div>
              ))}
              <p className="text-slate-text leading-relaxed mt-4 font-sans text-[15px]">Ikram Rana of Barrana.ai helps businesses evaluate tools within their specific operational context rather than recommending tools in the abstract. A <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline no-underline">strategy call</a> provides a tool evaluation framework tailored to your specific processes and integration requirements.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 7: Learning Resources */}
            <section id="learning" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 07</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Learning Resources for AI Adoption</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Effective AI adoption requires ongoing learning at both the organizational and individual level.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">For business leaders, the most valuable learning focuses on AI strategy, governance, and decision-making rather than technical implementation. Understanding what AI can and cannot do reliably, how to structure AI governance, and how to evaluate AI outputs critically is more valuable than understanding how AI systems are built. The <Link href="/ai-knowledge-hub" className="text-electric hover:underline no-underline">AI Knowledge Hub</Link> provides reference content on each of these topics.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">For operational staff, learning should focus on working effectively with AI systems rather than building them. This includes understanding how to identify AI errors, how to provide feedback that improves AI performance, and how to handle exceptions that AI systems cannot resolve. The <Link href="/ai-dictionary" className="text-electric hover:underline no-underline">AI Dictionary</Link> provides accessible definitions for the terminology staff will encounter.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">For the organization as a whole, AI literacy means developing shared vocabulary and expectations about AI's role. The <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework</Link> provides a common language for discussing AI implementation decisions across the organization.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The most effective learning happens through implementation, not study. Businesses that spend months researching AI before implementing anything learn less than businesses that implement a single well-chosen automation and study what happens. Structured implementation, not extended research, is the most efficient path to AI competency.</p>
              <div className="border-l-4 border-electric/40 pl-5 mt-6">
                <p className="text-slate-text text-sm leading-relaxed font-sans">For the complete four-phase framework, see the <a href="#framework-overview" className="text-electric hover:underline no-underline">AI Adoption Framework diagram above</a> or visit the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">full pillar page</Link>.</p>
              </div>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 8: Expert Commentary */}
            <section id="expert" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 08</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Expert Commentary: Ikram Rana</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Ikram Rana, founder of Barrana.ai, provides strategic AI automation consulting for small and medium-sized businesses across professional services, healthcare, financial services, legal, real estate, and operations-intensive industries. The resources on this page reflect his direct implementation experience across these sectors.</p>
              <blockquote className="border-l-4 border-electric pl-6 my-8">
                <p className="font-serif text-lg text-foreground italic leading-relaxed">"The businesses that succeed with AI are not the ones with the biggest budgets or the most tools. They are the ones with the clearest processes, the most disciplined implementation, and the governance structures to maintain what they build."</p>
                <footer className="mt-3 font-mono text-[11px] tracking-wider text-electric">— IKRAM RANA, FOUNDER, BARRANA.AI</footer>
              </blockquote>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Rana's AI Adoption Framework, which forms the foundation of every resource on this page, has been applied across professional services, healthcare, financial services, real estate, legal, and operations-intensive businesses. The framework reflects patterns observed across hundreds of implementation decisions — what works, what fails, and why.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">With over 13 years of experience building software systems and a legal background that informs his risk-aware approach, Rana brings a perspective that combines technical feasibility with operational reality and governance discipline. His consulting focuses on building AI systems that work reliably in production, not just in demonstrations.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* FAQ Section */}
            <section id="faqs" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Frequently Asked Questions</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">15 Questions About AI Resources for Businesses</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-l-4 border-electric/40 pl-5">
                    <h3 className="font-serif text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-slate-text text-sm leading-relaxed font-sans">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Related Resources */}
            <section className="mb-14">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">Connected Resources</p>
              <h2 className="font-serif text-xl font-bold text-foreground mb-6">Continue Your Research</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-3 border border-border/40 bg-navy/40 p-4 hover:border-electric/40 hover:bg-navy/60 transition-colors no-underline group">
                    <div className="w-1.5 h-1.5 bg-electric shrink-0" />
                    <span className="text-sm text-slate-text group-hover:text-electric transition-colors leading-snug">{link.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#020b18] to-[#0a1628] border border-electric/30 p-10 text-center">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-electric mb-4">Ready to Implement?</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">Book a Strategy Call</h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
                Businesses looking to implement AI automation can book a strategy call with Ikram Rana to assess their current operations and identify the highest-impact starting point for structured AI adoption.
              </p>
              <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
                BOOK A STRATEGY CALL →
              </a>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}
