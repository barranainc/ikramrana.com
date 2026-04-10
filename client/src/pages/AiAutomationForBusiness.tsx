/*
 * DESIGN: The Architect's Blueprint — Pillar Page
 * /ai-automation-for-business — 2500–3500 words, 10 FAQs, schema, internal links
 * Navy bg, electric accents, serif headings, mono labels
 */

import { useEffect } from "react";
import { Link } from "wouter";

const PAGE_URL = "https://ikramrana.com/ai-automation-for-business";

const faqs = [
  { q: "What is AI automation for business?", a: "AI automation for business is the use of artificial intelligence to execute business processes without continuous human intervention. It covers a range from simple rule-based task automation to intelligent workflow systems that handle decision points, exceptions, and multi-step processes. The defining characteristic is that the system completes work reliably without requiring a human to initiate or monitor each step." },
  { q: "What can AI automate in a business?", a: "AI can automate tasks that are repetitive, rule-based, high-volume, and low-consequence when errors occur. This includes lead qualification, appointment scheduling, document processing, invoice handling, status updates, data entry, report generation, and client communication sequences. Tasks requiring judgment, relationship management, or ethical decisions should remain under human control." },
  { q: "What is the ROI of AI automation?", a: "ROI of AI automation is measured in three dimensions: time recovered (hours per week no longer spent on manual tasks), error reduction (fewer mistakes requiring correction), and cognitive load reduction (fewer decisions consuming mental energy). Businesses implementing structured automation typically recover 10–30 hours per week within the first three months, with accuracy improvements that reduce rework by 40–70%." },
  { q: "What is the difference between AI automation and delegation?", a: "Delegation assigns work to a human who applies judgment and takes responsibility. Automation assigns work to a system that follows rules and requires governance. Automation is more consistent and scalable than delegation but requires more upfront design. The choice depends on whether the task requires judgment (delegate) or follows predictable rules (automate). Most businesses need both." },
  { q: "What are the most common AI automation mistakes?", a: "The five most common mistakes are: automating before documenting the process, skipping pilot testing, neglecting exception handling, failing to establish governance, and measuring success by speed rather than cognitive load reduction. Each mistake is preventable with structured implementation methodology." },
  { q: "How long does AI automation implementation take?", a: "A single well-scoped automation typically takes 2–6 weeks from process documentation to production deployment. The timeline depends on integration complexity, exception volume, and governance requirements. Businesses that skip process documentation extend this timeline significantly because they discover process gaps during implementation rather than before it." },
  { q: "How much does AI automation cost for small businesses?", a: "AI automation costs vary significantly based on scope and complexity. Simple automations using existing tools cost $500–$2,000 to implement. Complex multi-system integrations cost $5,000–$20,000. The tool licensing cost is typically 10–20% of total implementation cost — the majority is integration, configuration, and governance setup." },
  { q: "What should small businesses automate first?", a: "Small businesses should automate the process that scores highest on four criteria: high volume (occurs frequently), high rule clarity (follows defined rules most of the time), low error consequence (mistakes are recoverable), and accessible integration (existing systems can be connected). Client intake, appointment scheduling, and invoice processing typically score highest for service businesses." },
  { q: "Is AI automation safe for small businesses?", a: "AI automation is safe when implemented with appropriate governance: human review for high-consequence decisions, exception handling for edge cases, accuracy monitoring, and clear escalation paths. Automation without governance creates risk. The question is not whether automation is safe, but whether the governance structure is adequate for the consequence level of the tasks being automated." },
  { q: "How do businesses get started with AI automation?", a: "The structured starting point is process documentation: map your top five time-consuming workflows before evaluating any tool. Document every trigger, step, decision point, exception, and outcome. This documentation reveals automation opportunities, identifies processes that need redesign before automation, and creates the blueprint for reliable implementation. Book a strategy call with Ikram Rana to begin this assessment." },
];

const roadmapSteps = [
  { num: "01", title: "Process documentation", desc: "Map every workflow you intend to automate. Document triggers, steps, decision points, exceptions, and outcomes. This is the foundation that makes automation reliable." },
  { num: "02", title: "Readiness assessment", desc: "Evaluate your data quality, system integration feasibility, team capacity for change, and governance readiness before selecting any tool." },
  { num: "03", title: "Prioritization", desc: "Score candidate processes on volume, rule clarity, error tolerance, and integration feasibility. Implement the highest-scoring process first." },
  { num: "04", title: "Tool selection", desc: "Select tools based on integration fit and cognitive load reduction, not feature count. Evaluate vendors by their ability to demonstrate end-to-end task completion." },
  { num: "05", title: "Pilot implementation", desc: "Deploy the first automation to a subset of volume with full monitoring. Measure accuracy, exception rate, and team response before scaling." },
  { num: "06", title: "Governance setup", desc: "Establish accuracy thresholds, exception escalation paths, human review checkpoints, and performance monitoring before full deployment." },
  { num: "07", title: "Full deployment", desc: "Scale the automation to full volume after pilot validation. Document what was learned and apply it to the next implementation." },
  { num: "08", title: "Optimization cycle", desc: "Review performance at 30, 60, and 90 days. Identify accuracy improvements, exception pattern changes, and new automation opportunities revealed by the first implementation." },
];

export default function AiAutomationForBusiness() {
  useEffect(() => {
    document.title = "AI Automation for Business: Full Guide | Ikram Rana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "What to automate, expected ROI, an 8-step implementation roadmap, and the mistakes that derail most projects. A practical guide by Ikram Rana.");
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Automation for Business: A Complete Implementation Guide",
    "description": "A complete guide to AI automation for business covering what AI can automate, ROI, automation vs delegation, common mistakes, and an 8-step implementation roadmap.",
    "author": { "@type": "Person", "name": "Ikram Rana", "url": "https://ikramrana.com" },
    "publisher": { "@type": "Organization", "name": "IkramRana.com" },
    "url": PAGE_URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020b18] via-[#0a1628] to-[#0d2040] border-b border-electric/20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(oklch(0.45 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.2 250) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="container relative py-20 max-w-4xl mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-electric mb-4">Pillar Page · Ikram Rana</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            AI Automation for Business:<br className="hidden sm:block" />
            <span className="text-electric"> A Complete Implementation Guide</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            What AI automation means for businesses, what it can reliably automate, how to measure ROI, and an 8-step implementation roadmap that prevents the most common failures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
              BOOK A STRATEGY CALL →
            </a>
            <a href="#roadmap" className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline">
              VIEW ROADMAP
            </a>
          </div>
        </div>
      </section>

      <div className="container py-14 max-w-4xl mx-auto">

        {/* What is AI automation */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 01</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">What AI automation means for businesses</h2>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">AI automation for business is the use of artificial intelligence to execute business processes without continuous human intervention. It covers a range from simple rule-based task automation — where a trigger initiates a fixed sequence of steps — to intelligent workflow systems that handle decision points, exceptions, and multi-step processes across integrated systems.</p>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The defining characteristic of effective AI automation is reliability. An automation that works 70% of the time creates more operational burden than it removes, because the 30% failure rate requires human monitoring and intervention. Businesses that implement automation without reliability standards consistently find themselves managing the automation rather than benefiting from it.</p>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Ikram Rana of Barrana.ai defines AI automation for business as "the systematic replacement of human execution in rule-based processes, governed by accuracy standards, exception handling, and human oversight at decision points that exceed the system's reliability threshold." This definition distinguishes automation from experimentation — automation is a production system, not a pilot project.</p>
          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For the foundational framework that governs all automation decisions, see the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Small Businesses</Link>.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* What AI can automate */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 02</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">What AI can automate</h2>
          <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">AI can automate tasks that are repetitive, rule-based, high-volume, and low-consequence when errors occur. The following categories represent the highest-value automation targets for most small and medium-sized businesses.</p>

          {[
            { cat: "Client acquisition", items: ["Lead qualification and routing", "Inquiry response and follow-up sequences", "Proposal generation from templates", "Meeting scheduling and confirmation"] },
            { cat: "Operations", items: ["Document processing and data extraction", "Status tracking and update notifications", "Scheduling coordination", "Inventory monitoring and alerts"] },
            { cat: "Financial administration", items: ["Invoice processing and categorization", "Payment reminder sequences", "Expense classification", "Reconciliation preparation"] },
            { cat: "Client service", items: ["Appointment reminders and confirmations", "Status update communications", "FAQ response handling", "Satisfaction survey distribution"] },
            { cat: "Human resources", items: ["Resume screening and initial qualification", "Interview scheduling", "Onboarding document collection", "Policy acknowledgement tracking"] },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-electric/40 pl-5 mb-6">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-2">{item.cat}</p>
              <ul className="space-y-1">
                {item.items.map((li, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-text text-[15px] font-sans">
                    <span className="text-electric mt-1 shrink-0">·</span>{li}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For concrete examples of each category with implementation details, see <Link href="/ai-automation-examples" className="text-electric hover:underline no-underline">AI Automation Examples by Business Function</Link>.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* ROI */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 03</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">ROI of AI automation</h2>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">ROI of AI automation is measured in three dimensions: time recovered, error reduction, and cognitive load reduction. Most ROI calculations focus only on time, which understates the value of automation and leads to poor prioritization decisions.</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Time recovered", desc: "Hours per week no longer spent on manual task execution. Typically 10–30 hours per week within 90 days of structured implementation.", color: "border-electric/40 bg-electric/5" },
              { label: "Error reduction", desc: "Fewer mistakes requiring correction, rework, or client remediation. Accuracy improvements of 40–70% are common in document-heavy processes.", color: "border-teal-400/40 bg-teal-400/5" },
              { label: "Cognitive load reduction", desc: "Fewer decisions consuming mental energy. This is the most undervalued ROI dimension — it compounds over time as teams operate with less friction.", color: "border-amber-400/40 bg-amber-400/5" },
            ].map((item, i) => (
              <div key={i} className={`border ${item.color} p-5`}>
                <p className="font-mono text-[10px] tracking-wider uppercase text-electric mb-2">{item.label}</p>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The businesses that report the highest ROI from AI automation are not those that implemented the most automations — they are the ones that implemented the right automations with the right governance. A single well-designed automation that recovers 15 hours per week and operates with 95% accuracy delivers more value than five automations that each require constant monitoring.</p>
          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For documented ROI examples across industries, see the <Link href="/case-studies" className="text-electric hover:underline no-underline">AI Automation Case Studies</Link>.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Automation vs Delegation */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 04</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Automation vs delegation</h2>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Delegation assigns work to a human who applies judgment and takes responsibility. Automation assigns work to a system that follows rules and requires governance. Understanding the distinction prevents the most common automation failure: automating tasks that require judgment.</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm font-sans">
              <thead>
                <tr className="border-b border-electric/30">
                  <th className="text-left py-3 px-4 font-mono text-[10px] tracking-wider uppercase text-electric">Dimension</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] tracking-wider uppercase text-electric">Delegation</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] tracking-wider uppercase text-electric">Automation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Judgment required", "Yes", "No — rule-based only"],
                  ["Consistency", "Variable", "High (within rules)"],
                  ["Scalability", "Limited by headcount", "High"],
                  ["Error handling", "Human adapts", "Requires explicit exception logic"],
                  ["Accountability", "Person responsible", "Governance structure responsible"],
                  ["Setup cost", "Low", "Moderate to high"],
                  ["Ongoing cost", "Salary/time", "Licensing + monitoring"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/20 hover:bg-navy/20">
                    <td className="py-3 px-4 text-slate-text font-medium">{row[0]}</td>
                    <td className="py-3 px-4 text-slate-text">{row[1]}</td>
                    <td className="py-3 px-4 text-slate-text">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-text leading-relaxed font-sans text-[15px]">The practical rule: if the task requires judgment more than 10% of the time, it is a delegation candidate, not an automation candidate. If it follows defined rules more than 90% of the time, it is an automation candidate. Most businesses have a mix of both — the skill is knowing which is which before committing resources.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Common mistakes */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 05</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">The five most common AI automation mistakes</h2>

          {[
            { num: "01", title: "Automating before documenting", desc: "Businesses that automate without first documenting the process discover process gaps during implementation rather than before it. The result is an automation that reflects how the process is assumed to work, not how it actually works. Documentation before automation is not optional — it is the foundation that makes automation reliable." },
            { num: "02", title: "Skipping pilot testing", desc: "Full deployment without pilot testing exposes the entire operation to automation failures simultaneously. Pilot testing on a subset of volume reveals exception patterns, accuracy issues, and integration problems before they affect the full operation." },
            { num: "03", title: "Neglecting exception handling", desc: "Every automation encounters inputs it was not designed to handle. Without explicit exception handling — routing, escalation, notification — these inputs either fail silently or create errors that require manual cleanup. Exception handling is not an afterthought; it is a core design requirement." },
            { num: "04", title: "Failing to establish governance", desc: "Automation without governance creates accountability gaps. When an automation makes an error, who is responsible? What is the escalation path? What accuracy threshold triggers human review? These questions must be answered before deployment, not after an incident." },
            { num: "05", title: "Measuring success by speed", desc: "Speed is the least important ROI dimension. An automation that processes invoices 10x faster but requires constant monitoring has not reduced cognitive load — it has changed its form. Measure success by cognitive load reduction, error rate improvement, and time recovered for high-value work." },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 mb-7">
              <div className="w-8 h-8 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0 mt-0.5">
                <span className="font-mono text-[10px] font-bold text-electric">{item.num}</span>
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-slate-text text-[15px] leading-relaxed font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Roadmap */}
        <section id="roadmap" className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 06</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">The 8-step AI automation implementation roadmap</h2>
          <p className="text-slate-text leading-relaxed mb-8 font-sans text-[15px]">This roadmap reflects the implementation sequence used by Ikram Rana of Barrana.ai across professional services, healthcare, financial services, and operations-intensive businesses. Each step has entry criteria that must be met before proceeding to the next.</p>

          <div className="space-y-4">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="flex gap-5 border border-border/40 bg-navy/40 p-5">
                <div className="w-8 h-8 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                  <span className="font-mono text-[10px] font-bold text-electric">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-text leading-relaxed mt-6 font-sans text-[15px]">For the complete framework that governs this roadmap, see the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Small Businesses</Link>. For workflow-specific implementation patterns, see <Link href="/ai-workflow-systems" className="text-electric hover:underline no-underline">AI Workflow Systems</Link>.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Frequently Asked Questions</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">10 Questions About AI Automation for Business</h2>
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

        {/* Related resources */}
        <section className="mb-14">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">Connected Resources</p>
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">Continue Your Research</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "AI Adoption Framework for Small Businesses", href: "/ai-adoption-framework-for-small-businesses" },
              { label: "AI Workflow Systems", href: "/ai-workflow-systems" },
              { label: "AI Automation Examples by Business Function", href: "/ai-automation-examples" },
              { label: "AI Adoption Checklist", href: "/ai-adoption-checklist" },
              { label: "AI Automation FAQ", href: "/ai-automation-faq" },
              { label: "AI Resources for Businesses", href: "/ai-resources-for-businesses" },
              { label: "AI Automation Case Studies", href: "/case-studies" },
              { label: "What Is AI Automation for Small Businesses?", href: "/ai-knowledge-hub/what-is-ai-automation-for-small-businesses" },
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
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-electric mb-4">Expert Perspective — Ikram Rana</p>
          <blockquote className="font-serif text-lg text-white italic leading-relaxed max-w-2xl mx-auto mb-6">
            "Automation is not a technology decision. It is an operational design decision. The technology is the last 20% — the first 80% is understanding your process well enough to trust a system to execute it."
          </blockquote>
          <p className="font-mono text-[11px] tracking-wider text-electric mb-8">— IKRAM RANA, FOUNDER, BARRANA.AI</p>
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Book a Strategy Call</h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Assess your automation readiness and identify the highest-impact starting point with Ikram Rana of Barrana.ai.
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
