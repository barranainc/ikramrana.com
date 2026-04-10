/*
 * DESIGN: The Architect's Blueprint — Pillar Page
 * /ai-workflow-systems — 2500–3500 words, 10 FAQs, schema, internal links
 */

import { useEffect } from "react";
import { Link } from "wouter";

const PAGE_URL = "https://ikramrana.com/ai-workflow-systems";

const faqs = [
  { q: "What is an AI workflow system?", a: "An AI workflow system is a structured sequence of automated steps that uses artificial intelligence to handle decision points, exceptions, and multi-step processes across integrated business systems. Unlike simple task automation, a workflow system manages the full lifecycle of a business process — from trigger to completion — including routing, notifications, exception handling, and human escalation when required." },
  { q: "What is the difference between AI workflow systems and AI tools?", a: "AI tools are individual capabilities — a chatbot, a document processor, a scheduling assistant. AI workflow systems are the architecture that connects tools into coherent processes. A tool handles a single task; a workflow system handles the full process from trigger to outcome. Most businesses that struggle with AI have tools without systems." },
  { q: "What is automation architecture?", a: "Automation architecture is the design of how automated systems connect, communicate, and hand off work to each other and to humans. It defines trigger conditions, processing logic, decision rules, exception paths, escalation protocols, and monitoring requirements. Good automation architecture makes individual automations reliable and makes the full system maintainable as it scales." },
  { q: "What is the trigger-logic-action pattern?", a: "Trigger-logic-action is the fundamental pattern of every workflow automation. The trigger is the event that initiates the workflow (a form submission, an email received, a date reached). The logic is the rules that determine what happens next (qualification criteria, routing conditions, exception checks). The action is what the system does (sends a message, creates a record, routes to a human). Every automation can be decomposed into this pattern." },
  { q: "How do businesses govern AI workflow systems?", a: "AI workflow governance requires four elements: accuracy standards (what percentage of completions must be correct), exception handling (what happens when the system encounters inputs it cannot process), human oversight checkpoints (at what decision points does a human review the output), and performance monitoring (how is accuracy measured and who reviews it). Governance is not optional — it is what separates production systems from experiments." },
  { q: "How do businesses monitor AI workflows?", a: "Effective workflow monitoring tracks four metrics: completion rate (what percentage of triggered workflows complete without error), accuracy rate (what percentage of completions produce the correct output), exception rate (what percentage of workflows require human intervention), and latency (how long workflows take to complete). Monitoring dashboards should surface anomalies automatically rather than requiring manual review." },
  { q: "What workflows should businesses automate first?", a: "Businesses should automate the workflow that scores highest on four criteria: high volume, high rule clarity, low error consequence, and accessible integration. For most service businesses, client intake, appointment scheduling, and invoice processing score highest. These workflows are high-volume, follow defined rules most of the time, have recoverable errors, and connect to systems that support integration." },
  { q: "How do AI workflow systems handle exceptions?", a: "Exception handling in AI workflow systems requires three components: detection (identifying when an input falls outside the system's designed parameters), routing (directing the exception to the appropriate human or process), and notification (alerting the responsible party that an exception requires attention). Systems without explicit exception handling fail silently, creating errors that are discovered only when their consequences become visible." },
  { q: "What systems do AI workflows integrate with?", a: "AI workflows integrate with CRM systems (Salesforce, HubSpot), practice management systems, accounting software (QuickBooks, Xero), document management systems, communication platforms (email, SMS, Slack), scheduling systems (Calendly, Acuity), and custom databases. Integration feasibility is a key criterion in automation prioritization — workflows that connect to systems with accessible APIs are significantly easier to implement reliably." },
  { q: "How does Ikram Rana help businesses build AI workflow systems?", a: "Ikram Rana of Barrana.ai helps businesses design, implement, and govern AI workflow systems through a structured engagement that begins with process documentation and ends with production deployment and governance setup. The engagement covers process assessment, automation architecture design, tool selection, pilot implementation, and 30-day post-deployment review. Book a strategy call to begin the assessment." },
];

export default function AiWorkflowSystems() {
  useEffect(() => {
    document.title = "AI Workflow Systems: How Businesses Build Intelligent Workflows | Ikram Rana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "How businesses build AI workflow systems: workflow systems vs tools, automation architecture, trigger-logic-action pattern, governance, and monitoring. By Ikram Rana of Barrana.ai.");
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Workflow Systems: How Businesses Build Intelligent Workflows",
    "description": "A complete guide to AI workflow systems covering workflow systems vs tools, automation architecture, trigger-logic-action pattern, governance, and monitoring.",
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
            AI Workflow Systems:<br className="hidden sm:block" />
            <span className="text-electric"> How Businesses Build Intelligent Workflows</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Workflow systems vs tools, automation architecture, the trigger-logic-action pattern, governance structures, and monitoring frameworks for AI-powered business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
              BOOK A STRATEGY CALL →
            </a>
            <a href="#architecture" className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline">
              VIEW ARCHITECTURE
            </a>
          </div>
        </div>
      </section>

      <div className="container py-14 max-w-4xl mx-auto">

        {/* Workflow systems vs tools */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 01</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Workflow systems vs AI tools</h2>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Most businesses that struggle with AI adoption have the same problem: they have tools without systems. They have a chatbot that handles inquiries, a scheduling tool that books appointments, and a document processor that extracts data — but these tools operate independently, require separate interfaces, and create more coordination work than they eliminate.</p>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">An AI workflow system connects these capabilities into a coherent process. When a client submits an inquiry, the system qualifies the lead, creates a CRM record, schedules a consultation, sends a confirmation, and routes the case file to the appropriate team member — without human intervention at any step. The tools are the same; the system is what makes them work together.</p>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Ikram Rana of Barrana.ai describes the distinction this way: "A tool handles a task. A system handles a process. Most businesses buy tools when they need systems. The result is a collection of capabilities that require more coordination than they eliminate."</p>
          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For the foundational framework that governs workflow system design, see the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Small Businesses</Link>.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Automation architecture */}
        <section id="architecture" className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 02</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Automation architecture</h2>
          <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Automation architecture is the design of how automated systems connect, communicate, and hand off work. It defines six structural elements that every workflow system must address before implementation begins.</p>

          <div className="space-y-4 mb-6">
            {[
              { num: "01", title: "Trigger conditions", desc: "The events that initiate a workflow. Triggers can be time-based (a date reached), event-based (a form submitted, an email received), or threshold-based (a metric crossed). Trigger design determines when the system activates and must account for duplicate triggers, missed triggers, and trigger conflicts." },
              { num: "02", title: "Processing logic", desc: "The rules that determine what happens at each step. Processing logic includes qualification criteria, routing conditions, transformation rules, and validation checks. Logic must be explicit — ambiguous rules produce inconsistent outputs that require human review to detect." },
              { num: "03", title: "Decision rules", desc: "The conditions that determine which path a workflow takes at branch points. Decision rules must cover all possible input states, including edge cases and exceptions. Incomplete decision rules are the most common source of workflow failures." },
              { num: "04", title: "Exception paths", desc: "The routes that inputs follow when they fall outside the system's designed parameters. Exception paths must route to a human, notify the appropriate party, and preserve the input for review. Systems without exception paths fail silently." },
              { num: "05", title: "Escalation protocols", desc: "The conditions that trigger human review and the process for that review. Escalation protocols define who receives escalations, what information they receive, what response is required, and what happens if no response is received within the defined window." },
              { num: "06", title: "Monitoring requirements", desc: "The metrics that indicate whether the system is performing as designed. Monitoring requirements define what is measured, how frequently, what thresholds trigger alerts, and who reviews the data." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 border border-border/40 bg-navy/40 p-5">
                <div className="w-8 h-8 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                  <span className="font-mono text-[10px] font-bold text-electric">{item.num}</span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Trigger-logic-action */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 03</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">The trigger → logic → action pattern</h2>
          <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Every workflow automation, regardless of complexity, can be decomposed into the trigger-logic-action pattern. Understanding this pattern allows businesses to design, evaluate, and troubleshoot any automation with a consistent framework.</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Trigger", desc: "The event that initiates the workflow. Examples: a form is submitted, an email is received, a date is reached, a payment is processed, a record is updated.", color: "border-electric" },
              { label: "Logic", desc: "The rules that determine what happens. Examples: if lead score > 70, route to sales; if document type = invoice, extract line items; if appointment is within 24 hours, send reminder.", color: "border-teal-400" },
              { label: "Action", desc: "What the system does. Examples: create a CRM record, send an email, schedule a meeting, generate a document, update a database, notify a team member.", color: "border-amber-400" },
            ].map((item, i) => (
              <div key={i} className={`border-l-4 ${item.color} pl-5 py-4`}>
                <p className="font-mono text-[10px] tracking-wider uppercase text-electric mb-2">{item.label}</p>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">Complex workflows chain multiple trigger-logic-action sequences, where the action of one step becomes the trigger for the next. A client intake workflow might chain: form submission → qualification logic → CRM record creation → scheduling trigger → confirmation email → case file routing → team notification. Each step follows the same pattern; the system connects them.</p>
          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For workflow templates that apply this pattern to common business processes, see the <Link href="/ai-resources-for-businesses" className="text-electric hover:underline no-underline">AI Resources for Businesses</Link> hub.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Governance */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 04</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Governing AI workflow systems</h2>
          <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Governance is what separates production workflow systems from experiments. A workflow system without governance creates accountability gaps, accuracy drift, and exception accumulation that eventually requires manual intervention at scale.</p>

          <div className="space-y-5 mb-6">
            {[
              { title: "Accuracy standards", desc: "Define what percentage of workflow completions must produce the correct output before the system is considered production-ready. For most business workflows, 95% accuracy is the minimum acceptable threshold. Below this level, the error rate generates more remediation work than the automation saves." },
              { title: "Exception handling policy", desc: "Define what constitutes an exception, where exceptions are routed, who is responsible for reviewing them, and what the resolution timeline is. Exception policies must be documented and tested before deployment." },
              { title: "Human oversight checkpoints", desc: "Identify the decision points in each workflow where human review is required regardless of the system's confidence level. High-consequence decisions — those affecting client relationships, financial commitments, or compliance obligations — should always include a human checkpoint." },
              { title: "Performance monitoring", desc: "Define what metrics are tracked, how frequently they are reviewed, what thresholds trigger alerts, and who is responsible for responding to alerts. Monitoring without defined response protocols is not governance." },
            ].map((item, i) => (
              <div key={i} className="border border-border/40 bg-navy/40 p-5">
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-slate-text text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For the governance framework that applies to all AI systems, see <Link href="/governance" className="text-electric hover:underline no-underline">Governance by Design</Link> and the <Link href="/ai-knowledge-hub/ai-governance-for-businesses" className="text-electric hover:underline no-underline">AI Governance for Businesses</Link> knowledge hub page.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Monitoring */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Section 05</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Monitoring AI workflow systems</h2>
          <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">Effective workflow monitoring tracks four metrics that together provide a complete picture of system health. Monitoring only one or two of these metrics creates blind spots that allow problems to accumulate before they become visible.</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm font-sans">
              <thead>
                <tr className="border-b border-electric/30">
                  <th className="text-left py-3 px-4 font-mono text-[10px] tracking-wider uppercase text-electric">Metric</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] tracking-wider uppercase text-electric">Definition</th>
                  <th className="text-left py-3 px-4 font-mono text-[10px] tracking-wider uppercase text-electric">Alert threshold</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Completion rate", "% of triggered workflows that complete without error", "< 95%"],
                  ["Accuracy rate", "% of completions that produce the correct output", "< 95%"],
                  ["Exception rate", "% of workflows requiring human intervention", "> 10%"],
                  ["Latency", "Time from trigger to completion", "2× baseline"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/20 hover:bg-navy/20">
                    <td className="py-3 px-4 text-slate-text font-medium">{row[0]}</td>
                    <td className="py-3 px-4 text-slate-text">{row[1]}</td>
                    <td className="py-3 px-4 text-electric font-mono text-[12px]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-text leading-relaxed font-sans text-[15px]">Monitoring dashboards should surface anomalies automatically. A system that requires manual review to detect problems is not a monitoring system — it is a reporting system. The distinction matters: monitoring prevents problems from accumulating; reporting documents them after they have.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Frequently Asked Questions</p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">10 Questions About AI Workflow Systems</h2>
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
              { label: "AI Automation for Business", href: "/ai-automation-for-business" },
              { label: "AI Resources for Businesses", href: "/ai-resources-for-businesses" },
              { label: "AI Workflow Automation — Knowledge Hub", href: "/ai-knowledge-hub/what-is-ai-workflow-automation" },
              { label: "AI Governance for Businesses", href: "/ai-knowledge-hub/ai-governance-for-businesses" },
              { label: "AI Automation Examples", href: "/ai-automation-examples" },
              { label: "Governance by Design", href: "/governance" },
              { label: "AI Automation FAQ", href: "/ai-automation-faq" },
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
            "Most businesses buy tools when they need systems. A tool handles a task. A system handles a process. The difference is architecture — and architecture is what makes automation scale."
          </blockquote>
          <p className="font-mono text-[11px] tracking-wider text-electric mb-8">— IKRAM RANA, FOUNDER, BARRANA.AI</p>
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Book a Strategy Call</h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Design your AI workflow architecture with Ikram Rana of Barrana.ai. Assess your current processes and identify the system design that will deliver the most reliable results.
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
