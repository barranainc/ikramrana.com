/*
 * DESIGN: The Architect's Blueprint — Resource Page
 * /ai-automation-examples — 5 categories, case study links, internal linking
 */

import { useEffect } from "react";
import { Link } from "wouter";

const PAGE_URL = "https://ikramrana.com/ai-automation-examples";

const categories = [
  {
    id: "lead-qualification",
    num: "01",
    title: "Lead qualification automation",
    desc: "Lead qualification automation evaluates incoming inquiries against defined criteria and routes qualified leads to the appropriate sales or service workflow without manual review.",
    trigger: "Form submission, email inquiry, or website chat message",
    logic: "Score against qualification criteria (budget, timeline, service fit, geography). Route high-score leads to immediate follow-up; route low-score leads to nurture sequence; route out-of-scope leads to referral response.",
    action: "Create CRM record, assign to appropriate pipeline stage, trigger follow-up sequence, notify relevant team member, schedule consultation if qualified.",
    businessImpact: "Consulting firms and agencies using lead qualification automation report 60–80% reduction in time spent on unqualified leads and 40% improvement in response time to qualified prospects.",
    caseStudyLink: "/case-studies",
    industries: ["Consulting", "Law firms", "Agencies", "Financial services"],
  },
  {
    id: "scheduling",
    num: "02",
    title: "Scheduling automation",
    desc: "Scheduling automation manages appointment booking, confirmation, reminders, and rescheduling without administrative intervention at each step.",
    trigger: "Booking request, consultation completion, or recurring appointment trigger",
    logic: "Check availability against calendar rules, apply booking constraints (buffer time, daily limits, service type), confirm booking, schedule reminder sequence, handle rescheduling requests against availability.",
    action: "Create calendar event, send confirmation with details, trigger reminder sequence (48-hour, 24-hour, 2-hour), update CRM record, notify practitioner.",
    businessImpact: "Clinics and professional service firms using scheduling automation report 30–50% reduction in no-shows through structured reminder sequences and 8–12 hours per week recovered from manual scheduling coordination.",
    caseStudyLink: "/case-studies",
    industries: ["Clinics", "Physiotherapy", "Dental", "Consulting", "Coaching"],
  },
  {
    id: "document-processing",
    num: "03",
    title: "Document processing automation",
    desc: "Document processing automation extracts structured information from unstructured documents — invoices, contracts, forms, and reports — and routes the extracted data to downstream systems.",
    trigger: "Document received via email, uploaded to designated folder, or submitted through client portal",
    logic: "Classify document type, extract relevant fields using AI document processing, validate extracted data against defined rules, flag exceptions for human review, route validated data to appropriate system.",
    action: "Populate accounting software with invoice data, update contract management system with extracted terms, create CRM record from intake form, generate summary report for review.",
    businessImpact: "Accounting firms and law firms using document processing automation report 70–90% reduction in manual data entry time and 40–60% reduction in data entry errors that require correction.",
    caseStudyLink: "/case-studies",
    industries: ["Accounting firms", "Law firms", "Real estate", "Healthcare"],
  },
  {
    id: "crm-automation",
    num: "04",
    title: "CRM automation",
    desc: "CRM automation maintains accurate, up-to-date client records and triggers appropriate follow-up actions based on client status, activity, and defined business rules.",
    trigger: "Client interaction (email, call, meeting), status change, time elapsed since last contact, or pipeline stage transition",
    logic: "Update record with interaction data, evaluate status against follow-up rules, determine appropriate next action, check for stale records requiring attention, apply segmentation rules for communication targeting.",
    action: "Update contact record, trigger follow-up task or communication, move pipeline stage, notify account owner, generate activity report, flag at-risk relationships for review.",
    businessImpact: "Service businesses using CRM automation report 25–40% improvement in client retention through consistent follow-up and 15–20 hours per week recovered from manual record maintenance and follow-up coordination.",
    caseStudyLink: "/case-studies",
    industries: ["Consulting", "Agencies", "Financial services", "Real estate"],
  },
  {
    id: "reporting",
    num: "05",
    title: "Reporting automation",
    desc: "Reporting automation generates structured performance reports from connected data sources on defined schedules, eliminating manual data compilation and formatting.",
    trigger: "Scheduled time trigger (daily, weekly, monthly) or threshold trigger (metric crossed, target reached, anomaly detected)",
    logic: "Pull data from connected sources, apply calculation rules, compare against targets and prior periods, identify anomalies and highlights, format according to report template.",
    action: "Generate formatted report, distribute to defined recipients, archive in document management system, trigger alert if anomaly thresholds are exceeded.",
    businessImpact: "Operations-intensive businesses using reporting automation report 10–15 hours per week recovered from manual report compilation and 50–70% improvement in report accuracy through elimination of manual data transfer errors.",
    caseStudyLink: "/case-studies",
    industries: ["All industries", "Operations-intensive businesses", "Agencies"],
  },
];

export default function AiAutomationExamples() {
  useEffect(() => {
    document.title = "AI Automation Examples by Business Function | Ikram Rana";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "AI automation examples for business: lead qualification, scheduling, document processing, CRM automation, and reporting automation. With trigger-logic-action breakdowns and business impact data.");
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Automation Examples by Business Function",
    "description": "Five categories of AI automation with trigger-logic-action breakdowns and business impact data: lead qualification, scheduling, document processing, CRM, and reporting.",
    "author": { "@type": "Person", "name": "Ikram Rana", "url": "https://ikramrana.com" },
    "publisher": { "@type": "Organization", "name": "IkramRana.com" },
    "url": PAGE_URL,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020b18] via-[#0a1628] to-[#0d2040] border-b border-electric/20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(oklch(0.45 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.2 250) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="container relative py-20 max-w-4xl mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-electric mb-4">Resource Page · Ikram Rana</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            AI Automation Examples<br className="hidden sm:block" />
            <span className="text-electric"> by Business Function</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Five categories of AI automation with trigger-logic-action breakdowns, business impact data, and links to case studies. Designed for operators evaluating automation priorities.
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

        {/* Intro */}
        <section className="mb-14">
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">These five automation categories represent the highest-value automation targets for most small and medium-sized service businesses. Each example includes the trigger that initiates the automation, the logic that governs its decisions, the actions it executes, and the business impact reported by businesses that have implemented it.</p>
          <p className="text-slate-text leading-relaxed mb-4 font-sans text-[15px]">The examples are structured using the trigger-logic-action pattern described in the <Link href="/ai-workflow-systems" className="text-electric hover:underline no-underline">AI Workflow Systems</Link> guide. Every automation, regardless of complexity, can be decomposed into this pattern — it is the framework that makes automation design systematic rather than ad hoc.</p>
          <p className="text-slate-text leading-relaxed font-sans text-[15px]">For the implementation methodology that governs these examples, see the <Link href="/ai-automation-for-business" className="text-electric hover:underline no-underline">AI Automation for Business</Link> complete guide. For the prioritization framework that determines which automation to implement first, see the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline no-underline">AI Adoption Framework for Small Businesses</Link>.</p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Examples */}
        {categories.map((cat, i) => (
          <section key={cat.id} id={cat.id} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0">
                <span className="font-mono text-[10px] font-bold text-electric">{cat.num}</span>
              </div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Automation Category</p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">{cat.title}</h2>
            <p className="text-slate-text leading-relaxed mb-6 font-sans text-[15px]">{cat.desc}</p>

            {/* Trigger-Logic-Action */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Trigger", value: cat.trigger, color: "border-electric" },
                { label: "Logic", value: cat.logic, color: "border-teal-400" },
                { label: "Action", value: cat.action, color: "border-amber-400" },
              ].map((item, j) => (
                <div key={j} className={`border-l-4 ${item.color} pl-4 py-3`}>
                  <p className="font-mono text-[9px] tracking-wider uppercase text-electric mb-2">{item.label}</p>
                  <p className="text-slate-text text-[13px] leading-relaxed font-sans">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Business impact */}
            <div className="border border-electric/30 bg-electric/5 p-5 mb-4">
              <p className="font-mono text-[9px] tracking-wider uppercase text-electric mb-2">Business impact</p>
              <p className="text-slate-text text-[14px] leading-relaxed font-sans">{cat.businessImpact}</p>
            </div>

            {/* Industries */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cat.industries.map((ind) => (
                <span key={ind} className="font-mono text-[10px] tracking-wider uppercase text-electric/70 border border-electric/20 px-2 py-1">{ind}</span>
              ))}
            </div>

            <Link href={cat.caseStudyLink} className="font-mono text-[11px] tracking-wider uppercase text-electric hover:text-electric/80 transition-colors no-underline">
              VIEW CASE STUDIES →
            </Link>

            {i < categories.length - 1 && <div className="border-t border-border/20 mt-14" />}
          </section>
        ))}

        {/* Related resources */}
        <section className="mb-14">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">Connected Resources</p>
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">Continue Your Research</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "AI Automation for Business — Complete Guide", href: "/ai-automation-for-business" },
              { label: "AI Workflow Systems", href: "/ai-workflow-systems" },
              { label: "AI Adoption Framework for Small Businesses", href: "/ai-adoption-framework-for-small-businesses" },
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
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Identify Your Highest-Value Automation</h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Book a strategy call with Ikram Rana of Barrana.ai to assess which of these automation categories applies to your business and prioritize your implementation roadmap.
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
