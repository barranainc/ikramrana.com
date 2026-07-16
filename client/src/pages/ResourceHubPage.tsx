/*
 * DESIGN: The Architect's Blueprint: Resource Hub Page
 * Practical companion to the Pillar Page at /ai-adoption-framework-for-small-businesses
 * Matches PillarPage aesthetic: navy bg, electric accents, serif headings, mono labels
 * 8 sections, 4 checklists, 4 templates, 4 frameworks, 15 FAQs, Article+FAQPage schema
 * V2.6: 7 CDN-hosted SVG diagrams embedded inline at section-specific positions per instructions
 */

import { useHead } from "@/hooks/useHead";
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

// Reusable blueprint diagram block: matches blueprint aesthetic
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
const LAST_REVIEWED = "2026-07-16";

const researchSources = [
  {
    label: "Statistics Canada: AI use by businesses in Canada, second quarter 2026",
    href: "https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026010-eng.htm",
  },
  {
    label: "NIST: Artificial Intelligence Risk Management Framework 1.0",
    href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
  },
  {
    label: "Government of Canada: Guide on the Use of Agentic Artificial Intelligence",
    href: "https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-agentic-artificial-antelligence.html",
  },
  {
    label: "Office of the Privacy Commissioner of Canada: Principles for responsible generative AI",
    href: "https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/gd_principles_ai/",
  },
];

const checklists = [
  {
    name: "AI Readiness Assessment Checklist",
    color: "electric",
    border: "border-electric",
    label: "text-electric",
    bg: "bg-electric/5",
    description: "Evaluates four dimensions before an AI implementation begins: process documentation completeness, data quality and availability, team capacity for change management, and governance readiness. The checklist is designed to expose gaps before tool selection. It does not guarantee implementation success.",
  },
  {
    name: "Pre-Automation Documentation Checklist",
    color: "teal",
    border: "border-teal-400",
    label: "text-teal-400",
    bg: "bg-teal-400/5",
    description: "Tests whether a process is sufficiently understood before automation begins. Covers trigger documentation, step sequencing, decision point mapping, exception cataloguing, handoff identification, and outcome definition. The aim is to reduce avoidable rework by comparing the documented process with how work actually happens.",
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
    description: "Guides an early post-implementation assessment, with the timing set according to the workflow's volume and risk. Covers accuracy measurement, exception analysis, team feedback, governance gaps, and optimization opportunities. The review creates evidence for deciding what to change, continue, or stop.",
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
    description: "Models the coordination of appointment requests, availability checking, confirmation, reminder sequences, and follow-up. A business should measure whether the workflow changes no-show rates, communication effort, opt-outs, or service quality in its own setting.",
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
    description: "Evaluates tasks across two dimensions: predictability, meaning how consistently the task follows patterns, and consequence, meaning what happens when the system is wrong. Predictable, recoverable tasks may be stronger automation candidates. Less predictable or high-consequence tasks require stronger human control and may be unsuitable for automation.",
  },
  {
    name: "Decision Classification Model",
    description: "Categorizes business decisions into four types: Category A for routine, rule-based decisions; Category B for pattern-based recommendations; Category C for strategic decisions where AI may prepare context; and Category D for ethical and relationship-critical decisions. The model is a design aid. Actual controls must reflect the workflow, evidence, applicable requirements, and consequences of error.",
  },
  {
    name: "Convenience Cost Analysis",
    description: "Evaluates what is lost when AI makes something easier. Every convenience has a cost: reduced human attention to a process, reduced skill development in the team, reduced resilience when the AI fails. The Convenience Cost Analysis framework ensures that businesses make conscious trade-offs rather than defaulting to automation because it is available.",
  },
];

const faqs = [
  { q: "What AI resources do businesses need to get started?", a: "A practical starting set is an AI readiness assessment, a process documentation framework, and a prioritization tool. These resources help a business describe its current position, understand how work actually happens, and compare possible automation targets. The appropriate starting point still depends on the business problem, risk, data, and team capacity." },
  { q: "What is a practical first step in AI adoption?", a: "Document one important workflow before evaluating tools. Map its trigger, steps, decisions, exceptions, handoffs, data, owner, and outcome. This may reveal automation opportunities or show that the process needs redesign first. Documentation does not make implementation reliable by itself, but it gives the team something concrete to test." },
  { q: "How do businesses evaluate AI tools effectively?", a: "Evaluate tools by net cognitive load impact rather than features. Ask whether the tool reduces decisions your team needs to make or creates new ones. Ask whether it integrates with your existing systems or requires a separate interface. Ask whether the vendor can demonstrate the tool completing a task end-to-end without human intervention. The AI Tool Evaluation Checklist on this page provides the complete criteria." },
  { q: "What AI workflow templates can businesses examine?", a: "Client intake, document processing, appointment scheduling, and client communication are useful templates to examine because they occur across many service settings. They are examples, not a universal ranking. A business should compare them with its own volume, rules, error consequences, data, and integration constraints." },
  { q: "What is the AI Adoption Framework?", a: "The AI Adoption Framework is a four-phase approach developed by Ikram Rana of Barrana.ai: Phase 1 Process Clarity, Phase 2 Automation Layer, Phase 3 Decision Systems, and Phase 4 Governance and Optimization. The framework is documented in full at /ai-adoption-framework-for-small-businesses. The resources on this page are the practical tools for implementing each phase." },
  { q: "How do businesses decide what to automate first?", a: "Use the Automation Prioritization Matrix to compare processes on volume, rule clarity, error consequence, and integration feasibility. A high score identifies a candidate for deeper assessment, not an automatic implementation decision. Validate the assumptions, baseline the current workflow, and define the evidence required before proceeding." },
  { q: "What is the AI Appropriateness Matrix?", a: "A framework evaluating tasks on predictability and consequence to determine appropriate AI application levels. High predictability and low consequence tasks are strong automation candidates. Low predictability or high consequence tasks require human judgment. The matrix prevents the common mistake of automating decisions that should remain under human control." },
  { q: "How should businesses approach AI tool selection?", a: "Assess the process before selecting a tool. Compare integration, data handling, exception paths, monitoring, human review, vendor terms, training, maintenance, and total cost. The relationship between licensing, integration, and training costs varies by implementation, so it should be estimated rather than assumed." },
  { q: "What AI learning resources are most valuable for business leaders?", a: "Focus on AI strategy, governance, and decision-making over technical implementation. Understanding what AI can and cannot do reliably, how to structure AI governance, and how to evaluate AI outputs critically is more valuable than understanding how AI systems are built. The AI Knowledge Hub at IkramRana.com provides reference content on each of these topics." },
  { q: "Where can businesses find AI adoption checklists?", a: "IkramRana.com provides AI readiness assessment checklists, pre-automation documentation checklists, AI tool evaluation checklists, and post-implementation review checklists. These resources are designed for businesses implementing AI without dedicated technical teams and reflect the practical requirements of structured AI adoption." },
  { q: "What decision frameworks help businesses govern AI?", a: "The Decision Classification Model categorizes decisions into four types (routine, pattern-based, strategic, and ethical) and specifies appropriate AI involvement for each. The Convenience Cost Analysis evaluates trade-offs before automation. The AI Appropriateness Matrix determines which tasks should be automated. Together, these three frameworks provide the governance foundation for responsible AI adoption." },
  { q: "Who provides AI adoption resources for Canadian businesses?", a: "Ikram Rana, founder of Barrana.ai in Vaughan, Ontario, publishes practical AI adoption resources and provides workflow implementation support for businesses. The resources are available at IkramRana.com, and the Discovery Stage is available when a business is ready to examine a specific workflow." },
  { q: "How do businesses measure AI adoption success?", a: "Measure cognitive load reduction (fewer decisions requiring human attention), time recovered for high-value work, error rate improvements, and decision consistency. Avoid measuring success by output speed alone: the primary value of structured AI adoption is reducing the mental effort required to operate the business, not just accelerating individual tasks." },
  { q: "What AI adoption mistakes does this framework examine?", a: "This framework examines starting with tools before defining the problem, automating an undocumented process, ignoring governance, and measuring output speed without checking quality, exceptions, or human workload. These are Ikram Rana's recurring diagnostic categories, not a statistical ranking of all implementation failures." },
  { q: "How can businesses book an AI strategy assessment?", a: "Businesses can start with a workflow discovery with Ikram Rana of Barrana.ai to assess their AI readiness, evaluate automation opportunities, and receive a recommended implementation sequence. The strategy call covers process assessment, prioritization, and next steps tailored to the specific business context." },
];

const internalLinks = [
  { label: "The AI Adoption Framework for Businesses", href: "/ai-adoption-framework-for-small-businesses" },
  { label: "What Is AI Automation for Businesses?", href: "/ai-knowledge-hub/what-is-ai-automation-for-small-businesses" },
  { label: "What Is AI Adoption for Businesses?", href: "/ai-knowledge-hub/what-is-ai-adoption-for-businesses" },
  { label: "What Is AI Workflow Automation?", href: "/ai-knowledge-hub/what-is-ai-workflow-automation" },
  { label: "AI Decision Systems for Business Operations", href: "/ai-knowledge-hub/ai-decision-systems-for-business" },
  { label: "AI Governance for Businesses", href: "/ai-knowledge-hub/ai-governance-for-businesses" },
  { label: "Illustrative AI Use Cases", href: "/case-studies" },
  { label: "AI Automation by Industry", href: "/industries" },
  { label: "AI Dictionary", href: "/ai-dictionary" },
  { label: "AI Adoption and Workflow Implementation by Location", href: "/locations" },
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
  { id: "research", label: "Research Context" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

export default function ResourceHubPage() {
  useHead("AI Resources for Businesses Adopting AI", "Practical AI resources for businesses including adoption checklists, workflow templates, automation examples, decision frameworks, and critical guidance by Ikram Rana.");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Resources for Businesses Adopting AI",
    "description": "Practical AI resources for businesses including adoption checklists, workflow templates, automation examples, decision frameworks, and expert guidance.",
    "author": {
      "@type": "Person",
      "name": "Ikram Rana",
      "url": "https://ikramrana.com",
      "jobTitle": "AI Adoption and Workflow Implementation Specialist",
      "worksFor": { "@type": "Organization", "name": "Barrana.ai", "url": "https://barrana.ai" }
    },
    "publisher": { "@type": "Organization", "name": "IkramRana.com" },
    "dateModified": LAST_REVIEWED,
    "url": PAGE_URL,
    "citation": researchSources.map((source) => source.href),
    "image": [
      {
        "@type": "ImageObject",
        "name": "AI Adoption Framework Flowchart",
        "description": "The AI Adoption Framework: the structured 4-phase approach that every resource on this page supports.",
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
        "description": "Client Intake Workflow Template: adapt this flowchart pattern for any intake, onboarding, or lead qualification process.",
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
              FIND THE WORKFLOW AI SHOULD FIX FIRST →
            </a>
            <a href="#checklists"
              className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline">
              BROWSE RESOURCES
            </a>
          </div>
        </div>
      </section>

      {/* Main content: two column layout */}
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
                <p className="text-xs text-slate-dim leading-relaxed mb-4">Find the Workflow AI Should Fix First to assess your operations and identify your highest-impact starting point.</p>
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
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Businesses exploring AI adoption can encounter an overwhelming number of tools, vendors, and opinions without a structured way to decide what applies to their situation. This can produce paralysis or premature tool purchases before the underlying business problem is understood.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">This resource hub exists to bridge that gap. Every resource listed here is designed for businesses that want to implement AI systematically rather than experimentally: businesses that need their operations to work reliably, not just impressively.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">These resources are compiled and maintained by Ikram Rana, founder of Barrana.ai. They combine workflow analysis, implementation practice, risk-aware design, and critical examination of vendor claims. Examples are illustrative unless a page identifies verified evidence.</p>
              <div className="border border-electric/25 bg-electric/5 p-5 my-6">
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-electric mb-2">Evidence standard</p>
                <p className="text-sm text-slate-text leading-relaxed">Frameworks and recommendations on this page are Ikram Rana's practical analysis. External facts are tied to identified sources. Outcomes, rankings, and business impacts should be treated as hypotheses until measured in the actual workflow.</p>
              </div>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">This page is the practical companion to the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Businesses</Link>. Where the framework explains the methodology, this page provides the tools for implementing it.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* BONUS: Framework Overview: placed after intro per instructions recommendation */}
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
                alt="AI Adoption Framework Flowchart: four-phase structured approach: Process Clarity, Automation Layer, Decision Systems, Governance and Optimization"
                caption="The AI Adoption Framework: the structured 4-phase approach that every resource on this page supports."
                figNum="FIG. 1: AI ADOPTION FRAMEWORK"
              />

              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The framework moves through four phases: Phase 1 establishes process clarity before any automation begins; Phase 2 builds the automation layer on documented processes; Phase 3 introduces decision support systems; and Phase 4 governs and optimizes the full system. Each phase has entry criteria, completion criteria, and specific resources that support it.</p>
              <p className="text-slate-text leading-relaxed font-sans text-[15px]">For the complete methodology, visit the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Businesses</Link> pillar page.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 2: Checklists */}
            <section id="checklists" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 02</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Adoption Checklists</h2>

              {/* DIAGRAM 2: AI Readiness Assessment Scorecard: placed FIRST in section per instructions */}
              <DiagramBlock
                src={CDN.readinessScorecard}
                alt="AI Readiness Assessment Scorecard: score your business across four dimensions: process documentation, data quality, team capacity, and governance readiness"
                caption="Use this scorecard to evaluate your business's AI readiness across four dimensions before beginning any implementation."
                figNum="FIG. 2: AI READINESS ASSESSMENT SCORECARD"
                downloadUrl="/diagrams/ai-readiness-assessment-scorecard.svg"
              />

              <p className="text-slate-text leading-relaxed mb-8 font-sans text-[15px]">Checklists provide structured prompts for examining foundational work before and during AI adoption. They support judgment and documentation, but they do not replace system-specific testing, legal review, security review, or accountable decision-making.</p>
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

              {/* DIAGRAM 3: Client Intake Workflow Template: placed FIRST in section per instructions */}
              <DiagramBlock
                src={CDN.intakeWorkflow}
                alt="Client Intake Workflow Template: end-to-end flowchart with decision diamonds, AI-assisted steps, and human handoff points for intake, qualification, and onboarding"
                caption="Client Intake Workflow Template: adapt this flowchart pattern for any intake, onboarding, or lead qualification process."
                figNum="FIG. 3: CLIENT INTAKE WORKFLOW TEMPLATE"
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

              {/* DIAGRAM 4: Automation Hierarchy Levels: placed at START of section per instructions */}
              <DiagramBlock
                src={CDN.hierarchyLevels}
                alt="Automation Hierarchy Levels: four-level pyramid showing progression from Level 1 individual task automation through Level 4 autonomous system orchestration"
                caption="AI automation progresses through four levels. Start at Level 1 with individual task automation and advance as accuracy is proven."
                figNum="FIG. 4: AUTOMATION HIERARCHY LEVELS"
              />

              <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Concrete examples can help businesses identify questions to examine in their own operations. The following examples are illustrative patterns connected to the <Link href="/case-studies" className="text-electric hover:underline no-underline">Illustrative AI Use Cases</Link>. They are not descriptions of measured client implementations.</p>

              {[
                { fn: "Client Acquisition", color: "electric", border: "border-electric/40", label: "text-electric", content: "A client-acquisition workflow might collect inquiry information, apply approved qualification rules, create a record, and route the inquiry to a named person. Measure response time, qualification errors, follow-up completion, consent, and whether staff actually recover usable capacity." },
                { fn: "Operations", color: "teal", border: "border-teal-400/40", label: "text-teal-400", content: "An operations workflow might classify documents, extract defined fields, coordinate schedules, and track status. Measure accuracy by document type, exception volume, correction effort, access controls, and whether source information remains traceable." },
                { fn: "Financial Administration", color: "amber", border: "border-amber-400/40", label: "text-amber-400", content: "A financial-administration workflow might prepare invoice data, categorize expenses, schedule approved reminders, and assemble reconciliation records. Keep approval and exceptions with accountable people, and measure accuracy, correction time, and control failures." },
                { fn: "Client Service", color: "rose", border: "border-rose-400/40", label: "text-rose-400", content: "A client-service workflow might prepare status updates, route routine inquiries, send approved reminders, and organize follow-up. Measure client response, opt-outs, escalations, missed issues, staff effort, and service quality rather than assuming a positive result." },
                { fn: "Human Resources & Recruitment", color: "electric", border: "border-electric/40", label: "text-electric", content: "A recruitment workflow might support scheduling, onboarding document collection, or policy acknowledgement tracking. Screening and employment decisions require stronger fairness, privacy, explainability, and human-accountability controls than administrative coordination." },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 ${item.border} pl-5 mb-6`}>
                  <p className={`font-mono text-[10px] tracking-[0.15em] uppercase ${item.label} mb-2`}>{item.fn}</p>
                  <p className="text-slate-text text-[15px] leading-relaxed font-sans">{item.content}</p>
                </div>
              ))}
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 5: Decision Frameworks: THREE diagrams per instructions */}
            <section id="frameworks" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 05</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Decision Frameworks</h2>
              <p className="text-slate-text leading-relaxed mb-8 font-sans text-[15px]">Decision frameworks help businesses make structured choices about AI adoption rather than reactive ones. Each framework below addresses a specific decision type that arises during AI implementation.</p>

              {/* DIAGRAM 5: Automation Prioritization Matrix: placed FIRST in frameworks section */}
              <DiagramBlock
                src={CDN.prioritizationMatrix}
                alt="Automation Prioritization Matrix: scoring matrix evaluating process candidates on volume, rule clarity, error tolerance, and integration feasibility"
                caption="Score each process on four criteria before automating. The highest total score identifies your best automation starting point."
                figNum="FIG. 5: AUTOMATION PRIORITIZATION MATRIX"
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

              {/* DIAGRAM 6: AI Appropriateness Matrix: placed after prioritization text */}
              <DiagramBlock
                src={CDN.appropriatenessMatrix}
                alt="AI Appropriateness Matrix: 2x2 grid mapping tasks by predictability versus consequence to determine appropriate AI application level"
                caption="Map each task to the appropriate AI application level based on how predictable it is and what happens when it goes wrong."
                figNum="FIG. 6: AI APPROPRIATENESS MATRIX"
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

              {/* DIAGRAM 7: Decision Classification Model: placed after appropriateness text */}
              <DiagramBlock
                src={CDN.decisionClassification}
                alt="Decision Classification Model: Category A through D decision types with examples showing appropriate AI involvement for each category"
                caption="Classify every business decision into one of four categories to determine the right level of AI involvement."
                figNum="FIG. 7: DECISION CLASSIFICATION MODEL"
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

              {/* Framework 4: Convenience Cost Analysis: no diagram per instructions */}
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
                "Examine whether a tool removes avoidable decisions or creates new evaluation work. One recommendation is not automatically better than several options. The appropriate design depends on consequence, uncertainty, and who remains accountable.",
                "Compare integration with separate-interface options. Integration can reduce switching and duplicate entry, but it can also expand access and dependency risk. Evaluate both operational effort and control requirements.",
                "Evaluate net impact on the team's work, including attention, review time, errors, exceptions, training, maintenance, and trust. Feature count alone does not establish operational value.",
                "Require vendors to demonstrate the exact workflow, including failure modes, logs, permissions, exception handling, and human control. Some tasks may support end-to-end automation; others should not operate without review.",
                "Estimate licensing, integration, data preparation, security, training, monitoring, maintenance, and change costs. Their proportions vary by implementation and should be verified rather than assumed.",
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
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Ikram's practical position is that bounded experimentation can turn abstract learning into operational evidence. That does not mean a business should implement before completing the research, risk assessment, approvals, and safeguards appropriate to the workflow. A small pilot should be designed to answer defined questions, not to bypass due diligence.</p>
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
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Ikram Rana, founder of Barrana.ai, provides AI adoption and workflow implementation support for businesses. The resources apply workflow-first and risk-aware principles to professional services, healthcare, financial services, legal, real estate, and operations-intensive contexts without assuming that the same solution fits every industry.</p>
              <div className="border-l-4 border-electric pl-6 my-8">
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-electric mb-2">Ikram Rana's position</p>
                <p className="font-serif text-lg text-foreground italic leading-relaxed">Clear processes, disciplined implementation, and maintainable governance matter more than collecting the largest number of AI tools.</p>
              </div>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Rana's AI Adoption Framework organizes his analysis of process clarity, automation, decision support, governance, and optimization. The resources adapt those questions to professional services, healthcare, financial services, real estate, legal, and operations-intensive contexts. The framework itself is a practical methodology, not independent proof that a particular implementation will work.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">With more than a decade of founder experience across technology and business systems and a legal background that informs his risk-aware approach, Rana brings a perspective that combines technical feasibility with operational reality and governance discipline. His work focuses on building AI systems that can be understood, tested, monitored, and improved in real operations, not just demonstrated.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            <section id="research" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Research context</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Primary Sources Used for Context</h2>
              <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">These sources support the broader adoption, risk, accountability, human-oversight, and privacy context. They do not validate the results of any illustrative scenario on this site.</p>
              <div className="space-y-3">
                {researchSources.map((source) => (
                  <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 border border-border/40 bg-navy/40 p-4 hover:border-electric/40 transition-colors no-underline group">
                    <span className="text-electric mt-0.5">↗</span>
                    <span className="text-sm text-slate-text group-hover:text-electric transition-colors leading-snug">{source.label}</span>
                  </a>
                ))}
              </div>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim mt-5">Last reviewed {LAST_REVIEWED}</p>
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
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">Find the Workflow AI Should Fix First</h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
                Businesses looking to implement AI automation can start with a workflow discovery with Ikram Rana to assess their current operations and identify the highest-impact starting point for structured AI adoption.
              </p>
              <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
                FIND THE WORKFLOW AI SHOULD FIX FIRST →
              </a>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}
