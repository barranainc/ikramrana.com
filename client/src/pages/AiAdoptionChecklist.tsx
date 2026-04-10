/*
 * DESIGN: The Architect's Blueprint — Resource Page
 * /ai-adoption-checklist — 20-step checklist, 4 phases, HowTo schema
 */

import { useEffect } from "react";
import { Link } from "wouter";

const PAGE_URL = "https://ikramrana.com/ai-adoption-checklist";

const phases = [
  {
    num: "01",
    title: "Process clarity",
    color: "border-electric",
    desc: "Before any AI tool is evaluated or selected, the business must have documented clarity on its processes. This phase establishes the foundation that makes all subsequent automation reliable.",
    steps: [
      { num: "1", title: "Map your top 5 time-consuming workflows", detail: "Document every trigger, step, decision point, exception, and outcome for each workflow. This is the most important step in the entire checklist — businesses that skip it consistently encounter implementation failures." },
      { num: "2", title: "Identify decision points in each workflow", detail: "Mark every point in the workflow where a human makes a judgment call. These are the points that require either explicit rules (for automation) or human oversight checkpoints (for governance)." },
      { num: "3", title: "Document exception patterns", detail: "For each workflow, document the cases that do not follow the standard path. What percentage of volume do exceptions represent? What triggers them? Where do they currently go?" },
      { num: "4", title: "Assess data quality for each workflow", detail: "Identify what data each workflow requires and evaluate its current quality. AI automation is only as reliable as the data it processes — poor data quality is the most common cause of automation accuracy problems." },
      { num: "5", title: "Score each workflow on automation readiness", detail: "Rate each workflow on four criteria: volume (1–5), rule clarity (1–5), error consequence (1–5, where 5 = low consequence), and integration feasibility (1–5). The highest-scoring workflow is your first automation candidate." },
    ],
  },
  {
    num: "02",
    title: "Automation layer",
    color: "border-teal-400",
    desc: "With process clarity established, this phase designs and implements the first automation. The goal is a single, well-scoped automation that operates reliably in production.",
    steps: [
      { num: "6", title: "Select your first automation candidate", detail: "Choose the workflow with the highest readiness score from Phase 1. Resist the temptation to automate multiple workflows simultaneously — the first automation establishes the patterns that make subsequent automations faster and more reliable." },
      { num: "7", title: "Design the trigger-logic-action sequence", detail: "For your selected workflow, document the trigger (what initiates the automation), the logic (what rules govern each decision point), and the actions (what the system does at each step). This design document is the specification for implementation." },
      { num: "8", title: "Design exception handling", detail: "For each decision point in the workflow, document what happens when the input falls outside the defined rules. Exception handling must route to a human, notify the responsible party, and preserve the input for review." },
      { num: "9", title: "Select and configure tools", detail: "Select tools based on integration fit with your existing systems, not feature count. Configure the automation against your trigger-logic-action design document. Do not modify the design to fit the tool — select a tool that fits the design." },
      { num: "10", title: "Pilot test on a subset of volume", detail: "Deploy the automation to 10–20% of volume with full monitoring. Measure accuracy, exception rate, and team response. Document every exception and the pattern it reveals. Do not scale to full volume until pilot accuracy exceeds 95%." },
    ],
  },
  {
    num: "03",
    title: "Decision systems",
    color: "border-amber-400",
    desc: "This phase extends automation to include AI-powered decision support — systems that improve the quality and consistency of human decisions, not just the execution of rule-based tasks.",
    steps: [
      { num: "11", title: "Identify high-volume decision points", detail: "Map the decisions your team makes most frequently. Which decisions follow patterns that could be supported by AI analysis? Which decisions require judgment that cannot be systematized? This distinction determines where decision support adds value." },
      { num: "12", title: "Design decision support for qualifying decisions", detail: "For decisions that follow patterns, design AI-powered decision support: what data should be surfaced, what analysis should be performed, what recommendations should be generated. The human retains the decision; the AI improves the information available." },
      { num: "13", title: "Implement escalation protocols", detail: "Define the conditions under which the AI system should escalate to a human rather than proceeding. Escalation protocols must specify who receives the escalation, what information they receive, what response is required, and what happens if no response is received." },
      { num: "14", title: "Connect decision systems to workflow automations", detail: "Integrate decision support into the workflow automations built in Phase 2. When a workflow reaches a decision point, the decision system surfaces relevant information and, where appropriate, generates a recommendation for human review." },
      { num: "15", title: "Test decision quality against baseline", detail: "Compare decision outcomes with and without AI decision support. Measure accuracy, consistency, and time-to-decision. Decision support that does not improve at least one of these metrics is not adding value and should be redesigned." },
    ],
  },
  {
    num: "04",
    title: "Governance",
    color: "border-rose-400",
    desc: "Governance is the structure that makes AI adoption sustainable. This phase establishes the monitoring, accountability, and review systems that ensure AI systems continue to perform as designed.",
    steps: [
      { num: "16", title: "Define accuracy standards for each automation", detail: "Establish the minimum acceptable accuracy rate for each automation in production. For most business workflows, 95% is the minimum threshold. Below this level, the error rate generates more remediation work than the automation saves." },
      { num: "17", title: "Assign governance ownership", detail: "Designate a specific person responsible for monitoring each automation's performance, reviewing exceptions, and escalating issues. Governance without clear ownership defaults to no governance — problems accumulate until they produce visible failures." },
      { num: "18", title: "Establish monitoring cadence", detail: "Define how frequently performance metrics are reviewed: daily for high-volume automations, weekly for moderate-volume, monthly for low-volume. Monitoring cadence should match the speed at which accuracy problems can accumulate to visible impact." },
      { num: "19", title: "Create an exception review process", detail: "Establish a structured process for reviewing exceptions: who reviews them, how frequently, what documentation is required, and how patterns are identified and addressed. Exception patterns reveal process gaps that should be addressed in the automation design." },
      { num: "20", title: "Schedule 30/60/90-day performance reviews", detail: "Conduct structured performance reviews at 30, 60, and 90 days post-deployment. Review accuracy rates, exception patterns, team feedback, and business impact. Document findings and apply them to the next automation implementation." },
    ],
  },
];

export default function AiAdoptionChecklist() {
  useEffect(() => {
    document.title = "AI Adoption Checklist: 20 Steps Across 4 Phases | Ikram Rana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A 20-step AI adoption checklist across 4 phases: process clarity, automation layer, decision systems, and governance. By Ikram Rana of Barrana.ai.");
  }, []);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "AI Adoption Checklist: 20 Steps Across 4 Phases",
    "description": "A structured 20-step checklist for AI adoption covering process clarity, automation layer, decision systems, and governance.",
    "author": { "@type": "Person", "name": "Ikram Rana", "url": "https://ikramrana.com" },
    "url": PAGE_URL,
    "step": phases.flatMap(phase =>
      phase.steps.map(step => ({
        "@type": "HowToStep",
        "name": step.title,
        "text": step.detail,
        "position": parseInt(step.num),
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020b18] via-[#0a1628] to-[#0d2040] border-b border-electric/20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(oklch(0.45 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.2 250) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="container relative py-20 max-w-4xl mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-electric mb-4">Resource Page · Ikram Rana</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            AI Adoption Checklist:<br className="hidden sm:block" />
            <span className="text-electric"> 20 Steps Across 4 Phases</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            A structured implementation checklist covering process clarity, automation layer, decision systems, and governance. Designed for operators who want reliable AI adoption, not experiments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
              BOOK A STRATEGY CALL →
            </a>
            <Link href="/ai-automation-for-business"
              className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline">
              FULL AUTOMATION GUIDE →
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-14 max-w-4xl mx-auto">

        {/* Phase navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {phases.map((phase) => (
            <a key={phase.num} href={`#phase-${phase.num}`}
              className={`border-l-4 ${phase.color} pl-3 py-3 bg-navy/40 hover:bg-navy/60 transition-colors no-underline`}>
              <p className="font-mono text-[9px] tracking-wider uppercase text-electric mb-1">Phase {phase.num}</p>
              <p className="text-foreground text-sm font-serif font-semibold leading-tight">{phase.title}</p>
            </a>
          ))}
        </div>

        {/* Intro */}
        <section className="mb-14">
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">This checklist reflects the implementation methodology developed by Ikram Rana of Barrana.ai across professional services, healthcare, financial services, and operations-intensive businesses. Each step has a specific purpose in the adoption sequence — skipping steps does not accelerate implementation, it creates the conditions for failure.</p>
          <p className="text-slate-text leading-relaxed font-sans text-[15px]">The four phases are sequential: process clarity must precede automation layer, automation layer must precede decision systems, and governance must be established before full deployment. Businesses that attempt to implement later phases without completing earlier ones consistently encounter reliability problems that require remediation work exceeding the effort they saved by skipping steps.</p>
        </section>

        {/* Phases */}
        {phases.map((phase) => (
          <section key={phase.num} id={`phase-${phase.num}`} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-8 border-2 ${phase.color} flex items-center justify-center shrink-0`}>
                <span className="font-mono text-[10px] font-bold text-electric">{phase.num}</span>
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-wider uppercase text-electric">Phase {phase.num}</p>
                <h2 className="font-serif text-xl font-bold text-foreground">{phase.title}</h2>
              </div>
            </div>
            <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">{phase.desc}</p>

            <div className="space-y-4">
              {phase.steps.map((step, j) => (
                <div key={j} className="flex gap-4 border border-border/40 bg-navy/30 p-5">
                  <div className="w-7 h-7 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[10px] font-bold text-electric">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-slate-text text-sm leading-relaxed font-sans">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {phase.num !== "04" && <div className="border-t border-border/20 mt-14" />}
          </section>
        ))}

        {/* Related resources */}
        <section className="mb-14">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">Connected Resources</p>
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">Continue Your Research</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "AI Adoption Framework for Small Businesses", href: "/ai-adoption-framework-for-small-businesses" },
              { label: "AI Automation for Business — Complete Guide", href: "/ai-automation-for-business" },
              { label: "AI Workflow Systems", href: "/ai-workflow-systems" },
              { label: "AI Automation Examples", href: "/ai-automation-examples" },
              { label: "AI Adoption FAQ", href: "/ai-adoption-faq" },
              { label: "AI Resources for Businesses", href: "/ai-resources-for-businesses" },
              { label: "Governance by Design", href: "/governance" },
              { label: "AI Automation Case Studies", href: "/case-studies" },
            ].map((link) => (
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
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Work Through This Checklist with Ikram Rana</h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Book a strategy call to complete Phase 1 (process clarity) with a structured methodology and leave with a prioritized automation roadmap.
          </p>
          <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
            BOOK A STRATEGY CALL →
          </a>
        </section>

      </div>
    </>
  );
}
