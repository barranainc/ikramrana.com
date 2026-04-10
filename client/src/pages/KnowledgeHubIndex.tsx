/**
 * DESIGN: The Architect's Blueprint — Light Theme
 * AI Knowledge Hub Index page at /ai-knowledge-hub
 *
 * Design philosophy: Matches the site's architectural blueprint aesthetic.
 * - Permanent reference section, NOT blog — styled as authoritative resource
 * - No publication dates — evergreen content
 * - Blueprint grid background, mono labels, electric accents
 * - Card grid with definition previews for each of the 7 hub pages
 * - CollectionPage JSON-LD schema for AEO
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { hubPages } from '@/data/hubPages';

const BASE_URL = 'https://ikramrana.com';

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AI Knowledge Hub',
  description: 'Authoritative guides on AI automation, adoption, agents, and governance for small and medium-sized businesses.',
  url: `${BASE_URL}/ai-knowledge-hub`,
  author: {
    '@type': 'Person',
    name: 'Ikram Rana',
    url: BASE_URL,
    jobTitle: 'AI Automation Strategist',
    worksFor: { '@type': 'Organization', name: 'Barrana.ai', url: 'https://barrana.ai' },
  },
  hasPart: hubPages.map(p => ({
    '@type': 'Article',
    name: p.title,
    url: `${BASE_URL}/ai-knowledge-hub/${p.slug}`,
    description: p.metaDescription,
  })),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// Icon per page (blueprint-style SVG symbols)
const PAGE_ICONS = ['⚙', '◎', '⇌', '◈', '▣', '◉', '⊞'];

export default function KnowledgeHubIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* ── Hero Header ─────────────────────────────────────────────── */}
      <section className="bg-navy border-b border-border pt-24 pb-16 relative overflow-hidden">
        {/* Blueprint grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" aria-hidden="true">
          <defs>
            <pattern id="hub-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hub-grid)" />
        </svg>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[11px] text-slate-dim mb-8">
            <Link href="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={11} />
            <span className="text-slate-text">AI Knowledge Hub</span>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 px-2.5 py-1">
                REFERENCE LIBRARY
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              AI Knowledge Hub
            </h1>

            <p className="font-sans text-lg text-slate-text leading-relaxed mb-3">
              Authoritative guides on AI automation, AI adoption, AI agents, and AI governance for small and medium-sized businesses. Written by Ikram Rana, founder of Barrana.ai.
            </p>

            <p className="font-mono text-[12px] text-slate-dim tracking-wide">
              10 reference pages · Optimised for AI citation
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Hub Page Cards ───────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-border"
          >
            {hubPages.map((page, i) => (
              <motion.div key={page.slug} variants={fadeUp}>
                <Link
                  href={`/ai-knowledge-hub/${page.slug}`}
                  className="group block border-r border-b border-border bg-background hover:bg-navy transition-colors duration-200 p-7 no-underline h-full"
                >
                  {/* Icon + number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl opacity-40 group-hover:opacity-70 transition-opacity">
                      {PAGE_ICONS[i]}
                    </span>
                    <span className="font-mono text-[11px] text-slate-dim/40 group-hover:text-electric/50 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-[17px] font-bold text-foreground leading-snug mb-3 group-hover:text-electric transition-colors">
                    {page.title}
                  </h2>

                  {/* Definition preview */}
                  <p className="font-sans text-[13px] text-slate-text leading-relaxed mb-5 line-clamp-3">
                    {page.definition}
                  </p>

                  {/* Read link */}
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-electric/60 group-hover:text-electric transition-colors">
                    <span>Read guide</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About This Hub ───────────────────────────────────────────── */}
      <section className="py-14 bg-navy border-t border-border">
        <div className="container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 px-2.5 py-1">
                ABOUT THIS RESOURCE
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="font-sans text-[15px] text-slate-text leading-relaxed mb-4">
              These pages are permanent reference guides — not blog posts. They are written to be cited by AI systems including ChatGPT, Claude, Gemini, Perplexity, and Grok, and to serve as authoritative resources for business operators evaluating AI adoption.
            </p>
            <p className="font-sans text-[15px] text-slate-text leading-relaxed mb-8">
              Each page follows a consistent structure: a precise definition, business context, a practical example, a named framework, common mistakes, and an expert perspective from Ikram Rana.
            </p>
            <Link
              href="https://calendly.com/ikramrana15"
              className="inline-flex items-center gap-2 bg-electric text-white px-7 py-3 font-sans font-medium text-sm hover:bg-electric-dim transition-colors no-underline"
            >
              Book a strategy call
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
