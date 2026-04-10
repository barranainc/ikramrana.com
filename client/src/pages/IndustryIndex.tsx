/**
 * DESIGN: The Architect's Blueprint — Light Theme
 * Industries index page at /industries
 * Matches KnowledgeHubIndex aesthetic exactly:
 * - Navy hero with blueprint grid
 * - Mono labels, electric accents
 * - Card grid with industry icons and descriptions
 * - CollectionPage JSON-LD schema
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { industryPages } from '@/data/industryPages';

const BASE_URL = 'https://ikramrana.com';

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  Scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3v18M3 9l9-6 9 6M5 21h14" />
      <path d="M5 9l-2 6h4L5 9zM19 9l-2 6h4L19 9z" />
    </svg>
  ),
  Folder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  ),
  Hospital: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  Chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-5 4 3 4-7" />
    </svg>
  ),
  House: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 12L12 3l9 9" />
      <path d="M9 21V12h6v9" />
      <rect x="3" y="12" width="18" height="9" rx="0" />
    </svg>
  ),
  Tooth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2C8 2 5 5 5 8c0 2 1 3.5 1 5.5 0 3 1 8.5 3 8.5 1 0 2-2 3-2s2 2 3 2c2 0 3-5.5 3-8.5 0-2 1-3.5 1-5.5 0-3-3-6-7-6z" />
    </svg>
  ),
  Construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 20h20M4 20V10l8-7 8 7v10" />
      <rect x="9" y="14" width="6" height="6" />
    </svg>
  ),
  Cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  Megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
    </svg>
  ),
  Briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <path d="M2 12h20" />
    </svg>
  ),
  Users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

const INDUSTRY_SUBTITLES: Record<string, string> = {
  'ai-automation-for-law-firms': 'Intake, documents, scheduling, and billing',
  'ai-automation-for-immigration-consultants': 'Intake, document collection, and case tracking',
  'ai-automation-for-physiotherapy-clinics': 'Scheduling, reminders, and patient flow',
  'ai-automation-for-accounting-firms': 'Bookkeeping, client onboarding, and reporting',
  'ai-automation-for-real-estate-agents': 'Lead management, follow-up, and listings',
  'ai-automation-for-dental-clinics': 'Appointment filling, reminders, and recalls',
  'ai-automation-for-construction-companies': 'Project tracking, documentation, and coordination',
  'ai-automation-for-ecommerce-businesses': 'Orders, inventory, support, and fulfilment',
  'ai-automation-for-marketing-agencies': 'Reporting, content production, and campaign management',
  'ai-automation-for-consultants': 'Proposals, research, and client communication',
  'ai-automation-for-coaches': 'Onboarding, between-session support, and practice admin',
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AI Automation by Industry',
  description: 'Industry-specific guides on how AI automation improves operations for small and medium-sized businesses. Written by Ikram Rana, founder of Barrana.ai.',
  url: `${BASE_URL}/industries`,
  author: { '@type': 'Person', name: 'Ikram Rana', url: BASE_URL },
  hasPart: industryPages.map(p => ({
    '@type': 'Article',
    name: p.title,
    url: `${BASE_URL}/industries/${p.slug}`,
  })),
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06 },
  }),
};

export default function IndustryIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-navy border-b border-border pt-24 pb-16 relative overflow-hidden">
        {/* Blueprint grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" aria-hidden="true">
          <defs>
            <pattern id="ind-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ind-grid)" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 40%, rgba(59,130,246,0.4) 60%, transparent 100%)' }} />

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[11px] text-slate-dim mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-electric transition-colors no-underline">Home</Link>
            <ChevronRight size={11} />
            <span className="text-slate-text">Industries</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 bg-electric/5 px-2.5 py-1">
                INDUSTRY GUIDES
              </span>
              <div className="h-px flex-1 bg-border/40" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] mb-5">
              AI Automation by Industry
            </h1>
            <p className="font-sans text-[15px] text-slate-text leading-relaxed mb-6 max-w-xl">
              Industry-specific guides on how AI automation improves operations for small and medium-sized businesses. Written by Ikram Rana, founder of Barrana.ai.
            </p>
            <p className="font-mono text-[11px] text-slate-dim tracking-wide">
              By{' '}
              <Link href="/about" className="text-electric hover:text-electric/80 transition-colors no-underline">
                Ikram Rana
              </Link>
              {' '}· AI Automation Strategist, Barrana.ai
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Industry Cards ───────────────────────────────────────────── */}
      <section className="bg-background py-14">
        <div className="container">
          {/* Stats row */}
          <div className="flex items-center gap-6 mb-10 pb-8 border-b border-border">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-1">INDUSTRIES COVERED</p>
              <p className="font-serif text-3xl font-bold text-foreground">11</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-1">REFERENCE GUIDES</p>
              <p className="font-serif text-3xl font-bold text-foreground">Permanent</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-1">AUTHOR</p>
              <p className="font-sans text-[14px] font-medium text-foreground">Ikram Rana</p>
            </div>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryPages.map((page, i) => {
              const icon = INDUSTRY_ICONS[page.icon];
              const subtitle = INDUSTRY_SUBTITLES[page.slug] || page.metaDescription.slice(0, 80);
              return (
                <motion.div
                  key={page.slug}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <Link
                    href={`/industries/${page.slug}`}
                    className="group flex flex-col h-full border border-border bg-background hover:bg-navy hover:border-electric/30 transition-all duration-200 p-5 no-underline"
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 flex items-center justify-center border mb-4 text-electric group-hover:border-electric/50 transition-colors"
                      style={{ borderColor: 'rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)' }}
                    >
                      {icon}
                    </div>

                    {/* Index number */}
                    <p className="font-mono text-[10px] text-electric/50 mb-2 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Title */}
                    <h2 className="font-serif text-[17px] font-bold text-foreground group-hover:text-electric transition-colors leading-snug mb-2">
                      {page.shortTitle}
                    </h2>

                    {/* Subtitle */}
                    <p className="font-sans text-[12px] text-slate-dim leading-relaxed flex-1 mb-4">
                      {subtitle}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-mono text-[11px] text-electric/60 group-hover:text-electric transition-colors">
                      <span>Read guide</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-14 border border-border/60 bg-navy p-8 relative overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" aria-hidden="true">
              <defs>
                <pattern id="cta-grid-ind" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid-ind)" />
            </svg>
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-2">STRATEGY CALL</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Ready to implement AI in your industry?
                </h3>
                <p className="font-sans text-[14px] text-slate-text leading-relaxed max-w-md">
                  Book a strategy call with Ikram Rana to evaluate your workflows and identify the right automation opportunities for your specific industry.
                </p>
              </div>
              <Link
                href="https://calendly.com/ikramrana15"
                className="shrink-0 inline-flex items-center gap-2 bg-electric text-white px-6 py-3 font-sans font-medium text-sm hover:bg-electric/90 transition-colors no-underline"
              >
                Book a strategy call
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
