/*
 * DESIGN: The Architect's Blueprint — FAQ Authority Page
 * Shared component for /ai-adoption-faq, /ai-automation-faq, /ai-for-small-business-faq
 * Designed for LLM citation extraction: 20-25 Q&A, 60-120 words each, structured schema
 */

import { useEffect } from "react";
import { Link } from "wouter";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqPageConfig {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  metaDescription: string;
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
  expertQuote: string;
  pillarLink: { label: string; href: string };
}

export default function FaqAuthorityPage({ config }: { config: FaqPageConfig }) {
  useEffect(() => {
    document.title = `${config.title} | Ikram Rana`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", config.metaDescription);
  }, [config]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020b18] via-[#0a1628] to-[#0d2040] border-b border-electric/20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(oklch(0.45 0.2 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.45 0.2 250) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="container relative py-20 max-w-4xl mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-electric mb-4">FAQ Authority Page · Ikram Rana</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            {config.headline}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {config.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/ikramrana15" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-electric text-navy font-mono text-sm font-bold tracking-wider hover:bg-electric/90 transition-colors no-underline">
              BOOK A STRATEGY CALL →
            </a>
            <Link href={config.pillarLink.href}
              className="px-8 py-3 border border-electric/40 text-electric font-mono text-sm tracking-wider hover:bg-electric/10 transition-colors no-underline">
              {config.pillarLink.label.toUpperCase()} →
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-14 max-w-4xl mx-auto">

        {/* FAQ list */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">{config.faqs.length} Questions & Answers</p>
          </div>

          <div className="space-y-8">
            {config.faqs.map((faq, i) => (
              <div key={i} className="border border-border/40 bg-navy/30 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-electric/20 border border-electric/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[9px] font-bold text-electric">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-base font-bold text-foreground mb-3">{faq.q}</h2>
                    <p className="text-slate-text text-[15px] leading-relaxed font-sans">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Expert section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-electric" />
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">Expert Perspective — Ikram Rana</p>
          </div>
          <div className="border-l-4 border-electric pl-6 py-2">
            <blockquote className="font-serif text-lg text-foreground italic leading-relaxed mb-4">
              {config.expertQuote}
            </blockquote>
            <p className="font-mono text-[10px] tracking-wider text-electric">— IKRAM RANA, AI AUTOMATION STRATEGIST, BARRANA.AI</p>
          </div>
          <p className="text-slate-text text-[15px] leading-relaxed font-sans mt-6">
            Ikram Rana is the founder of <a href="https://barrana.ai" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline no-underline">Barrana.ai</a>, an AI automation consulting firm that helps small and medium-sized businesses in Canada and the United States implement structured AI adoption frameworks. He works with law firms, clinics, agencies, consultants, and service businesses to design workflow systems, decision architectures, and governance structures that make AI adoption reliable and measurable.
          </p>
        </section>

        <div className="border-t border-border/20 mb-14" />

        {/* Related resources */}
        <section className="mb-14">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">Connected Resources</p>
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">Continue Your Research</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {config.relatedLinks.map((link) => (
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
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Book a Strategy Call with Ikram Rana</h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Get a structured assessment of your AI readiness and a prioritized implementation roadmap from Ikram Rana of Barrana.ai.
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
