/*
 * DESIGN: The Architect's Blueprint — Pillar Page
 * Premium cornerstone content page for "The AI Adoption Framework for Small Businesses"
 * This is the most important page on the site — elevated hero, framework summary box,
 * phase sections with completion criteria callouts, 15 FAQs, triple schema.
 * Color: navy bg, electric accents, serif headings, mono labels
 */

import { useEffect } from "react";
import { Link } from "wouter";

const PILLAR_URL = "https://ikramrana.com/ai-adoption-framework-for-small-businesses";
const TODAY = "2025-03-09";

const phases = [
  {
    num: 1,
    name: "Process Clarity",
    tagline: "Understand before you automate.",
    color: "electric",
    objective: "Document and understand your operations before automating. Most AI failures happen here — businesses automate processes they don't fully understand.",
    content: `The objective of Phase 1 is to understand your operations well enough to make informed automation decisions. You cannot automate what you have not documented, and you cannot document what you have not observed.

WHAT TO DOCUMENT

For each process in your business, document six elements. First, the trigger: what initiates this process? Second, the steps: what actions occur in sequence? Third, the decision points: where does the process branch based on conditions? Fourth, the exceptions: what happens when standard conditions are not met? Fifth, the handoffs: where does responsibility transfer between people or systems? Sixth, the outcome: what does a successful completion look like?

HOW TO DOCUMENT EFFECTIVELY

Have the person who actually does the work walk through it while someone else documents. Do not rely on how management believes the process works — document how it actually works. Record the time each step takes. Note which steps require judgment and which follow rules.

Document at least your top ten time-consuming processes. For each one, note the approximate time per occurrence and the frequency per week. This gives you a prioritized view of where automation delivers the most value.

WHAT PROCESS CLARITY REVEALS

Process documentation consistently reveals three things that change AI adoption decisions. First, it reveals that processes are more complex than assumed — there are exceptions and edge cases that were invisible until documented. Second, it reveals that some processes should be redesigned rather than automated — automating a broken process creates faster failures. Third, it reveals the actual automation opportunity — the gap between how long a process takes manually and how long it could take with automation.`,
    criteria: "Phase 1 is complete when you have documented at least your top ten processes with all six elements, identified which processes should be redesigned before automation, and have a prioritized list of automation candidates ranked by volume and rule clarity.",
  },
  {
    num: 2,
    name: "Automation Layer",
    tagline: "Eliminate manual effort from rule-based tasks.",
    color: "teal",
    objective: "Automate rule-based, repetitive tasks starting with the highest-volume, lowest-risk processes to build reliability and team confidence.",
    content: `The Automation Layer is where AI begins delivering measurable value. With process documentation from Phase 1, you now know which processes are candidates for automation and in what order to implement them.

SELECTING WHAT TO AUTOMATE

Not every documented process should be automated. The selection criteria for Phase 2 automation candidates are four factors evaluated together.

Volume: How frequently does this process occur? Daily processes deliver more automation value than monthly ones.

Rule clarity: Can the process be completed by following defined rules for at least 90 percent of instances? Processes with high exception rates are poor automation candidates.

Error tolerance: What is the cost of an automation error? Start with processes where errors are easily caught and corrected.

Integration feasibility: Can the systems involved in this process be connected technically? Some legacy systems resist integration.

Score each candidate process on these four factors and begin with the highest-scoring opportunity.

THE AUTOMATION HIERARCHY

Within Phase 2, automation progresses through four levels.

Level 1 is Task Automation, where individual repetitive tasks are automated. Sending confirmation emails, updating records, generating standard documents.

Level 2 is Sequence Automation, where connected tasks are automated as a chain. A complete intake process — receiving inquiry, creating record, sending confirmation, scheduling follow-up — automated end-to-end.

Level 3 is Conditional Automation, where the automation makes routing decisions based on defined rules. Inquiries above a certain value go to senior staff; standard inquiries are handled automatically.

Level 4 is Exception-Based Automation, where the system handles standard cases autonomously and only escalates genuine exceptions to humans. The human role shifts from doing to reviewing exceptions.

Begin at Level 1 and advance through levels as confidence and accuracy are established.

IMPLEMENTATION APPROACH

Implement automation using a pilot-then-deploy methodology. Select a subset of your operations for the initial automation — one location, one team, one process category. Run the automation in parallel with manual processes for two weeks. Compare outputs. Identify gaps. Refine. Then deploy broadly.`,
    criteria: "Phase 2 is complete when your highest-priority processes are automated at Level 3 or Level 4, your team has confidence in the automation outputs, and you have established monitoring that alerts you to automation failures before they affect clients.",
  },
  {
    num: 3,
    name: "Decision Systems",
    tagline: "Augment human judgment with AI analysis.",
    color: "amber",
    objective: "Use AI to reduce decision fatigue, improve decision consistency, and free human judgment for decisions that genuinely require it.",
    content: `Decision Systems extend AI from executing tasks to supporting and, in appropriate cases, making business decisions. This is the highest-value phase for most professional service businesses.

THE DECISION CLASSIFICATION MODEL

Before implementing any AI decision system, classify your business decisions into four categories.

Category A decisions are routine choices with clear rules. Which department should handle this inquiry? Does this application meet our standard criteria? These decisions should be handled by AI end-to-end.

Category B decisions are pattern-based choices that benefit from data analysis. Which leads are most likely to convert? Which clients are at risk of churn? AI should analyze and recommend; humans should decide.

Category C decisions are strategic choices requiring contextual judgment. Should we enter this market? Should we take on this client? AI should prepare the analysis; humans must make the call.

Category D decisions are ethical or relationship-critical choices where human judgment is essential. How do we handle this client complaint? AI should not be involved in these decisions.

Most businesses have far more Category A decisions consuming human attention than they realize. Identifying and automating Category A decisions is the primary objective of Phase 3.

IMPLEMENTING DECISION SYSTEMS

For Category A decisions, build rule-based AI systems that handle the decision end-to-end. Define the rules explicitly. Test against historical cases. Deploy with monitoring.

For Category B decisions, implement AI analysis tools that gather data, identify patterns, and present recommendations with confidence levels. Train your team to use these recommendations as inputs, not conclusions.

For Category C decisions, use AI for preparation only. Have AI gather data, summarize context, model scenarios. The decision remains entirely human.

Do not implement AI for Category D decisions. The reputational, legal, and ethical risks outweigh any efficiency gains.

DECISION FORCING MECHANISMS

A critical component of Phase 3 is ensuring that AI decision support drives action rather than enabling analysis paralysis. Every AI recommendation should include a default action that executes unless a human intervenes within a defined window.

Without these mechanisms, the ease of AI analysis can become a substitute for the discomfort of commitment.`,
    criteria: "Phase 3 is complete when Category A decisions are handled autonomously by AI, Category B decisions are supported by AI analysis that your team actively uses, and you have documented which decisions are Category C and D and why AI is not appropriate for them.",
  },
  {
    num: 4,
    name: "Governance & Optimization",
    tagline: "Ensure AI operates safely and improves over time.",
    color: "rose",
    objective: "Establish accountability, monitoring, and continuous improvement for all AI systems through five governance pillars.",
    content: `Governance and Optimization ensure that AI systems remain safe, accurate, and increasingly valuable over time. This phase is not a final destination — it is an ongoing operational discipline.

THE OBJECTIVE

The objective of Phase 4 is to establish the accountability structures, monitoring systems, and improvement processes that prevent AI systems from degrading, causing harm, or operating outside their intended boundaries.

THE FIVE GOVERNANCE PILLARS

Accountability: Every AI system must have a named human owner responsible for its performance. This person approves changes, reviews exception reports, and is accountable for outcomes. Without named accountability, AI systems drift.

Transparency: Every person affected by an AI decision must be able to understand, in plain language, how that decision was made. This applies to employees whose work is managed by AI systems and to clients whose outcomes are influenced by AI recommendations.

Boundaries: Every AI system must have explicit boundaries defining what it can and cannot do. These boundaries must be technically enforced, not just documented. An AI system that can act outside its boundaries will eventually do so.

Monitoring: Every AI system must be monitored for accuracy, reliability, and drift. Establish baseline performance metrics during Phase 2 and Phase 3. Review these metrics weekly. Investigate deviations immediately.

Remediation: Every AI system must have a documented procedure for what happens when it fails. Who is notified? What manual backup process activates? How is the failure investigated? How are affected parties informed?

CONTINUOUS OPTIMIZATION

Beyond governance, Phase 4 includes systematic improvement of AI systems based on operational data. Review automation accuracy quarterly. Identify processes that have changed since automation was implemented. Update automation rules to reflect current operations. Retire automations that no longer deliver value.`,
    criteria: "Phase 4 is never complete. It is an ongoing operational discipline. However, the foundation is established when every AI system has a named owner, documented boundaries, active monitoring, and a tested remediation procedure.",
  },
];

const faqs = [
  { q: "What is the AI Adoption Framework?", a: "The AI Adoption Framework is a four-phase structured approach to implementing AI in small and medium-sized businesses, developed by Ikram Rana of Barrana.ai. The four phases are Process Clarity, Automation Layer, Decision Systems, and Governance and Optimization. Each phase builds on the previous, ensuring that AI implementation is systematic, reliable, and sustainable." },
  { q: "Why do most AI adoption efforts fail?", a: "Most AI adoption fails because businesses start with tools instead of strategy, skip process documentation, attempt too many changes simultaneously, and have no governance structure to maintain AI systems over time. The framework addresses each of these failure modes directly." },
  { q: "What is the first step in AI adoption for small businesses?", a: "The first step is Phase 1: Process Clarity, which involves documenting your top ten time-consuming processes including every trigger, step, decision point, exception, handoff, and outcome. This documentation becomes the blueprint for all subsequent automation decisions." },
  { q: "How long does AI adoption take for small businesses?", a: "Phase 1 typically takes two to four weeks. Phase 2 takes two to four months. Phase 3 is ongoing as new decision types emerge. Phase 4 is permanent. Most businesses see meaningful operational improvement within three to six months of beginning structured implementation." },
  { q: "How much does AI adoption cost for small businesses?", a: "Costs vary by scope, but structured AI adoption following the framework typically costs less than hiring additional staff to handle the same volume. The primary investment is time in Phase 1 and implementation costs in Phase 2. Most businesses achieve positive ROI within six to twelve months." },
  { q: "What should businesses automate first?", a: "Automate the process that scores highest on four criteria: volume (how often it occurs), rule clarity (can it follow defined rules 90% of the time), error tolerance (how costly are mistakes), and integration feasibility (can the systems be connected). The intersection of high volume and high rule clarity is the ideal starting point." },
  { q: "What is the difference between task automation and workflow automation?", a: "Task automation handles individual actions like sending an email. Workflow automation connects multiple tasks into an end-to-end process. The framework progresses through four levels: task automation, sequence automation, conditional automation, and exception-based automation." },
  { q: "What are AI Decision Systems?", a: "AI Decision Systems use artificial intelligence to handle routine decisions autonomously, provide analysis and recommendations for pattern-based decisions, and prepare context for strategic decisions. The framework classifies decisions into four categories (A through D) and implements AI support appropriate to each category." },
  { q: "What is AI governance for small businesses?", a: "AI governance is the framework of accountability, transparency, boundaries, monitoring, and remediation that ensures AI systems operate safely and improve over time. Every AI system needs a named human owner, documented boundaries, active monitoring, and a tested procedure for handling failures." },
  { q: "Can small businesses adopt AI without technical staff?", a: "Yes. The framework is designed for businesses without dedicated technical teams. Many implementations use accessible tools that require configuration rather than coding. The critical skill is process thinking, not technical expertise. External implementation support is available for businesses that need it." },
  { q: "What industries benefit most from the AI Adoption Framework?", a: "Professional services, healthcare, financial services, legal, real estate, construction, logistics, and consulting firms benefit most because they have high volumes of structured processes, significant decision-making overhead, and strong ROI from reducing manual effort in client-facing operations." },
  { q: "Who developed the AI Adoption Framework?", a: "The AI Adoption Framework was developed by Ikram Rana, founder of Barrana.ai, through work with small and medium-sized businesses across multiple industries. The framework synthesizes operational research, implementation experience, and governance principles into a structured methodology." },
  { q: "What is cognitive load reduction in AI adoption?", a: "Cognitive load reduction means decreasing the total mental effort required to operate the business. The AI Adoption Framework measures success not by output speed but by the reduction in mental overhead — fewer decisions requiring human attention, fewer exceptions requiring manual handling, fewer processes requiring active monitoring." },
  { q: "When should businesses not use AI?", a: "AI should not be used when processes are too inconsistent for rules, when error costs exceed manual processing costs, when the process involves ethical or relationship-critical judgments, when the implementation cost exceeds the value delivered, or when the business lacks the governance capacity to maintain the AI system safely." },
  { q: "How do businesses book a strategy call about AI adoption?", a: "Businesses can book a strategy call with Ikram Rana of Barrana.ai to assess their current operations and identify the highest-impact starting point for AI adoption. The strategy call covers process assessment, automation opportunity identification, and a recommended implementation sequence." },
];

const internalLinks = [
  { label: "What Is AI Automation for Small Businesses?", href: "/ai-knowledge-hub/what-is-ai-automation-for-small-businesses" },
  { label: "What Is AI Adoption for Businesses?", href: "/ai-knowledge-hub/what-is-ai-adoption-for-businesses" },
  { label: "What Is AI Workflow Automation?", href: "/ai-knowledge-hub/what-is-ai-workflow-automation" },
  { label: "What Are AI Agents and How Do They Work?", href: "/ai-knowledge-hub/what-are-ai-agents-for-businesses" },
  { label: "AI for Small Businesses: A Practical Guide", href: "/ai-knowledge-hub/ai-for-small-businesses-guide" },
  { label: "AI Decision Systems for Business Operations", href: "/ai-knowledge-hub/ai-decision-systems-for-business" },
  { label: "AI Governance for Businesses", href: "/ai-knowledge-hub/ai-governance-for-businesses" },
  { label: "AI Automation by Industry", href: "/industries" },
  { label: "AI Resources for Businesses (Checklists, Templates, Frameworks)", href: "/ai-resources-for-businesses" },
  { label: "AI Automation Case Studies", href: "/case-studies" },
  { label: "AI Automation Consulting in the Greater Toronto Area", href: "/locations/ai-automation-consulting-greater-toronto-area" },
  { label: "AI Automation Consulting for Canadian Businesses", href: "/locations/ai-automation-consulting-canada" },
  { label: "AI Automation Consulting for United States Businesses", href: "/locations/ai-automation-consulting-united-states" },
];

const phaseColorMap: Record<string, { border: string; bg: string; label: string; num: string; criteria: string }> = {
  electric: {
    border: "border-electric",
    bg: "bg-electric/5",
    label: "text-electric",
    num: "bg-electric text-navy",
    criteria: "border-electric/40 bg-electric/5",
  },
  teal: {
    border: "border-teal-400",
    bg: "bg-teal-400/5",
    label: "text-teal-400",
    num: "bg-teal-400 text-navy",
    criteria: "border-teal-400/40 bg-teal-400/5",
  },
  amber: {
    border: "border-amber-400",
    bg: "bg-amber-400/5",
    label: "text-amber-400",
    num: "bg-amber-400 text-navy",
    criteria: "border-amber-400/40 bg-amber-400/5",
  },
  rose: {
    border: "border-rose-400",
    bg: "bg-rose-400/5",
    label: "text-rose-400",
    num: "bg-rose-400 text-navy",
    criteria: "border-rose-400/40 bg-rose-400/5",
  },
};

function renderContent(text: string) {
  const lines = text.split('\n').filter(Boolean);
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line === line.toUpperCase() && line.length > 4 && !line.includes('.')) {
      // ALL-CAPS subheading
      elements.push(
        <h3 key={i} className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mt-8 mb-3">
          {line}
        </h3>
      );
    } else {
      elements.push(
        <p key={i} className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">
          {line}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default function PillarPage() {
  useEffect(() => {
    document.title = "AI Adoption Framework: 4 Phases to Get AI Right | Ikram Rana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Most AI adoption fails because businesses start with tools. This 4-phase framework fixes that. Process clarity, pilot, scale, governance. Used by 50+ SMBs.");
  }, []);

  // Triple schema: Article + HowTo + FAQPage
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The AI Adoption Framework for Small Businesses",
    "description": "Most AI adoption fails because businesses start with tools instead of strategy. The AI Adoption Framework provides a structured 4-phase approach to implementing AI automation for small and medium-sized businesses.",
    "author": {
      "@type": "Person",
      "name": "Ikram Rana",
      "url": "https://ikramrana.com",
      "jobTitle": "AI Automation Strategist",
      "worksFor": { "@type": "Organization", "name": "Barrana.ai", "url": "https://barrana.ai" }
    },
    "publisher": { "@type": "Organization", "name": "IkramRana.com" },
    "datePublished": TODAY,
    "url": PILLAR_URL,
    "about": [
      { "@type": "Thing", "name": "AI Adoption" },
      { "@type": "Thing", "name": "AI Automation" },
      { "@type": "Thing", "name": "Small Business Technology" }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "The AI Adoption Framework for Small Businesses",
    "description": "A structured 4-phase approach to implementing AI automation.",
    "step": [
      { "@type": "HowToStep", "name": "Phase 1: Process Clarity", "text": "Document your operations — every process, decision point, exception, and handoff — to create the blueprint for automation decisions." },
      { "@type": "HowToStep", "name": "Phase 2: Automation Layer", "text": "Automate rule-based, repetitive tasks starting with the highest-volume, lowest-risk processes to build reliability and team confidence." },
      { "@type": "HowToStep", "name": "Phase 3: Decision Systems", "text": "Implement AI decision support that handles routine decisions autonomously and prepares complex decisions for faster human resolution." },
      { "@type": "HowToStep", "name": "Phase 4: Governance and Optimization", "text": "Establish accountability, monitoring, and continuous improvement for all AI systems through five governance pillars." }
    ]
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

  const tocItems = [
    { id: "why-fails", label: "Why Most AI Adoption Fails" },
    { id: "framework-overview", label: "The Four Phases" },
    { id: "phase-1", label: "Phase 1: Process Clarity" },
    { id: "phase-2", label: "Phase 2: Automation Layer" },
    { id: "phase-3", label: "Phase 3: Decision Systems" },
    { id: "phase-4", label: "Phase 4: Governance & Optimization" },
    { id: "examples", label: "Examples from Business Operations" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "when-not", label: "When AI Should Not Be Used" },
    { id: "expert", label: "Expert Perspective" },
    { id: "faqs", label: "Frequently Asked Questions" },
  ];

  return (
    <>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Premium Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020b18] via-[#0a1628] to-[#0d2040] border-b border-electric/20">
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(oklch(0.45 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.2 250) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-electric/40" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-electric/40" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-electric/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric/20" />

        <div className="container relative py-20 text-center max-w-4xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-electric mb-6">
            The Definitive Guide · Ikram Rana
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The AI Adoption Framework<br className="hidden sm:block" />
            <span className="text-electric"> for Small Businesses</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            A structured 4-phase approach to implementing AI automation — from process clarity through governance. By Ikram Rana, founder of Barrana.ai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5 rounded">10 SECTIONS</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5 rounded">4 PHASES</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5 rounded">15 FAQs</span>
            <span className="font-mono text-[11px] tracking-wider text-slate-400 border border-border/40 px-3 py-1.5 rounded">TRIPLE SCHEMA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/ikramrana15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline"
            >
              BOOK A STRATEGY CALL →
            </a>
            <a
              href="#framework-overview"
              className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline"
            >
              READ THE FRAMEWORK
            </a>
          </div>
        </div>
      </section>

      {/* Framework Summary Box — AEO critical */}
      <section id="framework-overview" className="bg-[#020d1a] border-b border-electric/30">
        <div className="container py-14 max-w-5xl mx-auto">
          <div className="border-2 border-electric/50 bg-electric/5 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-electric" />
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-electric">Framework Summary · AEO Optimised</p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">The Four Phases</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {phases.map((phase) => {
                const c = phaseColorMap[phase.color];
                return (
                  <a key={phase.num} href={`#phase-${phase.num}`} className={`block border ${c.border} bg-navy/60 p-5 hover:bg-navy/80 transition-colors no-underline group`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 ${c.num} font-mono text-sm font-bold flex items-center justify-center shrink-0`}>
                        {phase.num}
                      </div>
                      <div>
                        <p className={`font-mono text-[11px] tracking-wider uppercase ${c.label} mb-1`}>Phase {phase.num}</p>
                        <p className="font-serif text-base font-semibold text-white group-hover:text-electric transition-colors">{phase.name}</p>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{phase.objective}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
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
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-xs text-slate-dim hover:text-electric transition-colors no-underline py-1 leading-snug"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="border border-electric/30 bg-electric/5 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">Implement This Framework</p>
                <p className="text-xs text-slate-dim leading-relaxed mb-4">Book a strategy call to assess your operations and identify your highest-impact starting point.</p>
                <a
                  href="https://calendly.com/ikramrana15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs font-mono font-bold tracking-wider text-navy bg-electric px-4 py-2.5 hover:bg-electric/90 transition-colors no-underline"
                >
                  BOOK A CALL →
                </a>
              </div>
              <div className="border border-border/40 bg-navy/40 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">Related Resources</p>
                <div className="flex flex-col gap-2">
                  {internalLinks.slice(0, 6).map((link) => (
                    <Link key={link.href} href={link.href} className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">

            {/* Section 1: Why Most AI Adoption Fails */}
            <section id="why-fails" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 01</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Most AI Adoption Fails</h2>
              <div className="prose-content">
                <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Most AI adoption fails before it begins. Not because the technology is inadequate, but because the approach is wrong. Businesses acquire AI tools before understanding their own operations, automate processes that should be redesigned, and deploy AI without the governance structures needed to maintain it safely.</p>
                <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The pattern is consistent across industries. A business leader sees a competitor using AI, or reads about productivity gains, or receives a vendor pitch. They purchase a tool. They implement it on top of existing processes. The tool produces inconsistent results because the underlying process is inconsistent. The team loses confidence. The tool is abandoned. The conclusion drawn is that AI does not work for their business.</p>
                <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">This conclusion is wrong. The tool failed because the implementation was wrong. Specifically, it failed because the business skipped the foundational work that makes AI implementation reliable.</p>
                <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The AI Adoption Framework addresses the root causes of AI adoption failure by requiring foundational work before any tool selection or implementation. The framework is not a technology guide. It is an operational methodology that happens to use AI as a component.</p>
                <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The four phases — Process Clarity, Automation Layer, Decision Systems, and Governance and Optimization — must be implemented in sequence. Each phase creates the conditions that make the next phase possible. Skipping phases is the primary cause of AI adoption failure.</p>
              </div>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Phases 1-4 */}
            {phases.map((phase) => {
              const c = phaseColorMap[phase.color];
              return (
                <section key={phase.num} id={`phase-${phase.num}`} className="mb-14">
                  <div className={`border-l-4 ${c.border} pl-5 mb-6`}>
                    <p className={`font-mono text-[10px] tracking-[0.18em] uppercase ${c.label} mb-1`}>Phase {phase.num} of 4</p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{phase.name}</h2>
                    <p className="text-slate-dim text-sm mt-1 italic">{phase.tagline}</p>
                  </div>

                  {/* Objective box */}
                  <div className={`border ${c.border} ${c.bg} p-5 mb-6`}>
                    <p className={`font-mono text-[10px] tracking-[0.15em] uppercase ${c.label} mb-2`}>The Objective</p>
                    <p className="text-foreground text-sm leading-relaxed font-sans">{phase.objective}</p>
                  </div>

                  {/* Phase content */}
                  <div>{renderContent(phase.content)}</div>

                  {/* Completion criteria callout */}
                  <div className={`border-l-4 ${c.border} bg-navy/60 border border-l-4 p-5 mt-6`} style={{ borderLeftWidth: '4px' }}>
                    <p className={`font-mono text-[10px] tracking-[0.15em] uppercase ${c.label} mb-2`}>Phase {phase.num} Completion Criteria</p>
                    <p className="text-foreground text-sm leading-relaxed font-sans">{phase.criteria}</p>
                  </div>

                  <div className="border-t border-border/20 mt-14" />
                </section>
              );
            })}

            {/* Section 7: Examples */}
            <section id="examples" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 07</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Examples from Business Operations</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The framework applies across industries, but the implementation details vary by business type. The following examples illustrate how the four phases manifest in practice.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">A professional services firm — law, accounting, consulting — typically begins Phase 1 by documenting client intake, matter management, and billing processes. These firms discover that intake alone has fifteen to twenty steps, several of which are pure data entry that can be automated in Phase 2. Decision Systems in Phase 3 address which matters require senior attention versus which can be handled by junior staff with AI support. Governance in Phase 4 focuses on conflict checking and compliance monitoring.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">A healthcare practice begins Phase 1 with appointment scheduling, patient intake, and follow-up processes. Phase 2 automates appointment reminders, intake form collection, and insurance verification. Phase 3 implements AI triage that routes patient inquiries to the appropriate care pathway. Phase 4 establishes monitoring for appointment no-show rates and patient communication compliance.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">A real estate brokerage begins Phase 1 with lead management, showing coordination, and transaction management. Phase 2 automates lead nurturing sequences, showing confirmations, and document collection. Phase 3 implements AI lead scoring that prioritizes follow-up based on engagement signals. Phase 4 monitors lead response times and conversion rates to ensure automation is improving rather than degrading client experience.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">In each case, the framework produces the same result: a business that operates with less manual effort, more consistent outputs, and clearer accountability for AI-driven decisions. The tools differ. The methodology does not.</p>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 8: Common Mistakes */}
            <section id="mistakes" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 08</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Common Mistakes in AI Adoption</h2>
              {[
                { title: "SKIPPING PHASES", body: "The most common mistake is skipping Phase 1 and beginning with tool selection. Businesses that skip process documentation automate processes they do not understand, producing unreliable results that erode team confidence and client trust. Phase 1 is not optional." },
                { title: "AUTOMATING BROKEN PROCESSES", body: "Automation amplifies what exists. A broken process automated is a broken process that fails faster and at higher volume. Phase 1 documentation frequently reveals that processes need redesign before automation. Redesign first. Automate second." },
                { title: "ATTEMPTING TOO MUCH SIMULTANEOUSLY", body: "Businesses that attempt to automate multiple processes simultaneously create implementation chaos. Each automation requires configuration, testing, and team training. Parallel implementations compete for attention and produce partial results. Implement sequentially. Complete each automation before beginning the next." },
                { title: "NEGLECTING GOVERNANCE", body: "Businesses that implement Phase 2 and Phase 3 without Phase 4 governance create AI systems that degrade over time. Processes change. Data patterns shift. Team members leave and take institutional knowledge with them. Without governance, AI systems drift from their intended behavior without anyone noticing until a significant failure occurs." },
                { title: "MEASURING THE WRONG OUTCOMES", body: "Businesses that measure AI success by output speed miss the primary value of the framework. The correct measures are cognitive load reduction (fewer decisions requiring human attention), error rate reduction (fewer exceptions requiring manual intervention), and capacity expansion (the same team handling higher volume without proportional cost increase)." },
              ].map((item, i) => (
                <div key={i} className="mb-6">
                  <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-rose-400 mt-6 mb-3">{item.title}</h3>
                  <p className="text-slate-text leading-relaxed font-sans text-[15px]">{item.body}</p>
                </div>
              ))}
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 9: When AI Should Not Be Used */}
            <section id="when-not" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 09</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">When AI Should Not Be Used</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The AI Adoption Framework is explicit about the boundaries of AI application. Not every process should be automated. Not every decision should involve AI. Knowing when not to use AI is as important as knowing when to use it.</p>
              {[
                { title: "PROCESSES TOO INCONSISTENT FOR RULES", body: "If a process cannot be completed by following defined rules for at least 90 percent of instances, it is not a Phase 2 candidate. Processes with high exception rates require human judgment for most cases. Automating them produces more exceptions, not fewer." },
                { title: "WHEN ERROR COSTS EXCEED MANUAL PROCESSING COSTS", body: "Some processes have error costs so high that the risk of automation failure exceeds the cost of manual processing. Legal filings, medical records, financial transactions with regulatory implications — these require careful analysis before automation. The cost of a single automation error may exceed months of manual processing savings." },
                { title: "ETHICAL AND RELATIONSHIP-CRITICAL DECISIONS", body: "Category D decisions — ethical choices and relationship-critical judgments — should not involve AI. How a business handles a client complaint, whether to continue a relationship with a difficult client, how to respond to a sensitive employee situation — these require human judgment, human accountability, and human empathy. AI involvement in these decisions creates liability without adding value." },
                { title: "WHEN IMPLEMENTATION COST EXCEEDS VALUE", body: "Not every automation is worth building. If the implementation cost — time, money, and ongoing maintenance — exceeds the value delivered over a reasonable period, the automation should not be built. Phase 1 documentation provides the data needed to make this calculation before committing to implementation." },
                { title: "WHEN GOVERNANCE CAPACITY IS INSUFFICIENT", body: "If a business cannot commit to the governance requirements of Phase 4 — named accountability, monitoring, and remediation procedures — it should not implement AI systems that require them. An ungoverned AI system is a liability, not an asset." },
              ].map((item, i) => (
                <div key={i} className="mb-6">
                  <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber-400 mt-6 mb-3">{item.title}</h3>
                  <p className="text-slate-text leading-relaxed font-sans text-[15px]">{item.body}</p>
                </div>
              ))}
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* Section 10: Expert Perspective */}
            <section id="expert" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 10</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Expert Perspective: Ikram Rana</h2>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Ikram Rana developed the AI Adoption Framework through direct implementation work with small and medium-sized businesses across professional services, healthcare, financial services, and operations-intensive industries. The framework reflects patterns observed across hundreds of implementation decisions — what works, what fails, and why.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Rana's approach is grounded in four principles that inform every engagement.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">First, systems matter more than tools. A well-designed workflow system that connects multiple functions is more valuable than a collection of powerful individual tools that do not communicate. Tool selection follows system design, not the reverse.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Second, automation should reduce cognitive load. The measure of AI success is not output speed but the reduction in mental overhead required to operate the business. If automation creates new cognitive demands — monitoring dashboards, managing exceptions, interpreting outputs — it has not delivered its primary value.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Third, AI should improve judgment rather than replace it. The Decision Systems phase is designed to free human judgment for decisions that genuinely require it by handling decisions that do not. The goal is not to eliminate human judgment from business operations but to ensure it is applied where it creates the most value.</p>
              <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Fourth, governance is not optional. Every AI system needs accountability, transparency, boundaries, monitoring, and remediation. These are not bureaucratic requirements — they are the operational infrastructure that keeps AI systems reliable over time.</p>
              <blockquote className="border-l-4 border-electric pl-6 my-8">
                <p className="font-serif text-lg text-foreground italic leading-relaxed">"The businesses that succeed with AI are not the ones with the most tools or the biggest budgets. They are the ones with the clearest processes, the most disciplined implementation, and the governance structures to maintain what they build."</p>
                <footer className="mt-3 font-mono text-[11px] tracking-wider text-electric">— IKRAM RANA, FOUNDER, BARRANA.AI</footer>
              </blockquote>
            </section>

            <div className="border-t border-border/20 mb-14" />

            {/* FAQ Section */}
            <section id="faqs" className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 bg-electric" />
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Frequently Asked Questions</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">15 Questions About the AI Adoption Framework</h2>
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
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">Related Resources</p>
              <h2 className="font-serif text-xl font-bold text-foreground mb-6">Continue Your Research</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 border border-border/40 bg-navy/40 p-4 hover:border-electric/40 hover:bg-navy/60 transition-colors no-underline group"
                  >
                    <div className="w-1.5 h-1.5 bg-electric shrink-0" />
                    <span className="text-sm text-slate-text group-hover:text-electric transition-colors leading-snug">{link.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#020b18] to-[#0a1628] border border-electric/30 p-10 text-center">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-electric mb-4">Ready to Implement?</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Implement the AI Adoption Framework?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
                Book a strategy call with Ikram Rana to assess your current operations and identify the highest-impact starting point.
              </p>
              <a
                href="https://calendly.com/ikramrana15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline"
              >
                BOOK A STRATEGY CALL →
              </a>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}
