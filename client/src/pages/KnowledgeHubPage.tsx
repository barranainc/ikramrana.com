/**
 * DESIGN: The Architect's Blueprint — Light Theme
 * Individual AI Knowledge Hub reference page template
 *
 * Design philosophy: Authoritative reference page, NOT a blog post.
 * - No publication dates — evergreen content
 * - Definition box is visually prominent for AEO extraction
 * - JSON-LD Article + FAQPage schema in <head>
 * - Blueprint aesthetic: mono labels, electric accents, navy sections
 * - Structured sections with consistent visual hierarchy
 * - Inline diagrams after each major section (Framework, Mistakes, Example)
 * - FAQ accordion with schema microdata
 * - CTA block + internal links to other hub pages
 */

import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { hubPages, getHubPage } from '@/data/hubPages';
import NotFound from './NotFound';
import HubFrameworkDiagram from '@/components/hub/HubFrameworkDiagram';
import HubMistakesDiagram from '@/components/hub/HubMistakesDiagram';
import HubExampleDiagram from '@/components/hub/HubExampleDiagram';
import HubBusinessImpactDiagram from '@/components/hub/HubBusinessImpactDiagram';

const BASE_URL = 'https://ikramrana.com';
const TODAY = '2026-03-06';

// Section metadata — icon, accent colour, label
const SECTION_META: Record<string, { icon: string; accent: string; label: string; border: string }> = {
  'Definition': {
    icon: '◎',
    accent: 'text-electric',
    label: 'DEFINITION',
    border: 'border-electric/40',
  },
  'Why This Matters for Businesses': {
    icon: '▲',
    accent: 'text-amber-400',
    label: 'BUSINESS IMPACT',
    border: 'border-amber-400/30',
  },
  'Practical Business Example': {
    icon: '◈',
    accent: 'text-teal-400',
    label: 'REAL-WORLD EXAMPLE',
    border: 'border-teal-400/30',
  },
  'Framework': {
    icon: '⊞',
    accent: 'text-electric',
    label: 'FRAMEWORK',
    border: 'border-electric/40',
  },
  'Common Mistakes Businesses Make': {
    icon: '⚠',
    accent: 'text-rose-400',
    label: 'FAILURE PATTERNS',
    border: 'border-rose-400/30',
  },
  'When AI Should Not Be Used': {
    icon: '⊘',
    accent: 'text-orange-400',
    label: 'BOUNDARIES',
    border: 'border-orange-400/30',
  },
  'Expert Perspective: Ikram Rana': {
    icon: '◉',
    accent: 'text-violet-400',
    label: 'EXPERT PERSPECTIVE',
    border: 'border-violet-400/30',
  },
};

// Map internal link labels to slugs
function labelToSlug(label: string): string | null {
  const map: Record<string, string> = {
    'What Is AI Automation for Small Businesses?': 'what-is-ai-automation-for-small-businesses',
    'What Is AI Adoption for Businesses?': 'what-is-ai-adoption-for-businesses',
    'What Is AI Adoption for Businesses and How Does It Work?': 'what-is-ai-adoption-for-businesses',
    'What Is AI Workflow Automation?': 'what-is-ai-workflow-automation',
    'What Is AI Workflow Automation and How Does It Improve Business Operations?': 'what-is-ai-workflow-automation',
    'What Are AI Agents and How Do They Work?': 'what-are-ai-agents-for-businesses',
    'What Are AI Agents and How Do They Work for Businesses?': 'what-are-ai-agents-for-businesses',
    'AI for Small Businesses: A Complete Guide': 'ai-for-small-businesses-guide',
    'AI for Small Businesses: A Practical Guide to Getting Started': 'ai-for-small-businesses-guide',
    'What Are AI Decision Systems and How Do They Help Businesses?': 'ai-decision-systems-for-business',
    'AI Decision Systems for Business Operations': 'ai-decision-systems-for-business',
    'AI Governance for Businesses: What You Need to Know': 'ai-governance-for-businesses',
    'AI Governance for Businesses': 'ai-governance-for-businesses',
  };
  return map[label] || null;
}

function FaqItem({ question, answer }: { question: string; answer: string; index: number }) {
  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      className="border-l-2 border-electric/25 pl-6"
    >
      <h3
        itemProp="name"
        className="font-serif text-[17px] font-semibold text-foreground mb-3 leading-snug"
      >
        {question}
      </h3>
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p
          itemProp="text"
          className="text-slate-text leading-relaxed text-[15px]"
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

// Renders a section's text content, splitting on \n into paragraphs
function SectionBody({ content, heading }: { content: string; heading: string }) {
  const paragraphs = content.split('\\n').filter(Boolean);

  if (heading === 'Expert Perspective: Ikram Rana') {
    return (
      <div className="border border-border/60 bg-navy p-6 space-y-4">
        {paragraphs.map((para, j) => {
          if (para.startsWith('"') || para.startsWith('\u201c')) {
            return (
              <blockquote key={j} className="border-l-2 border-electric pl-5">
                <p className="font-serif text-[17px] italic text-foreground leading-relaxed">
                  {para}
                </p>
              </blockquote>
            );
          }
          return (
            <p key={j} className="font-sans text-[14px] text-slate-text leading-relaxed">
              {para}
            </p>
          );
        })}
      </div>
    );
  }

  if (heading === 'When AI Should Not Be Used') {
    return (
      <div className="space-y-3">
        {paragraphs.map((para, j) => (
          <div key={j} className="flex items-start gap-3">
            <span
              className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400/60"
              aria-hidden="true"
            />
            <p className="font-sans text-[15px] text-slate-text leading-relaxed">{para}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {paragraphs.map((para, j) => (
        <p key={j} className="font-sans text-[15px] text-slate-text leading-relaxed">
          {para}
        </p>
      ))}
    </div>
  );
}

export default function KnowledgeHubPage() {
  const params = useParams<{ slug: string }>();
  const page = getHubPage(params.slug || '');

  if (!page) return <NotFound />;

  const pageUrl = `${BASE_URL}/ai-knowledge-hub/${page.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.metaDescription,
    url: pageUrl,
    author: {
      '@type': 'Person',
      name: 'Ikram Rana',
      url: BASE_URL,
      jobTitle: 'AI Automation Strategist',
      worksFor: { '@type': 'Organization', name: 'Barrana.ai', url: 'https://barrana.ai' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'IkramRana.com',
      url: BASE_URL,
    },
    datePublished: TODAY,
    dateModified: TODAY,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  // Find current page index for prev/next
  const currentIndex = hubPages.findIndex(p => p.slug === page.slug);
  const prevPage = currentIndex > 0 ? hubPages[currentIndex - 1] : null;
  const nextPage = currentIndex < hubPages.length - 1 ? hubPages[currentIndex + 1] : null;

  // Definition section vs body sections
  const definitionSection = page.sections.find(s => s.heading === 'Definition');
  const otherSections = page.sections.filter(s => s.heading !== 'Definition');

  // Table of contents entries
  const tocEntries = [
    ...(definitionSection ? [{ id: 'definition', label: 'Definition' }] : []),
    ...otherSections.map(s => ({ id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'), label: s.heading })),
    { id: 'faq', label: 'Frequently Asked Questions' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero Header ─────────────────────────────────────────────── */}
      <section className="bg-navy border-b border-border pt-24 pb-14 relative overflow-hidden">
        {/* Blueprint grid background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" aria-hidden="true">
          <defs>
            <pattern id="hub-page-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hub-page-grid)" />
        </svg>

        {/* Electric accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 40%, rgba(59,130,246,0.4) 60%, transparent 100%)' }}
        />

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 font-mono text-[11px] text-slate-dim mb-8 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-electric transition-colors no-underline">Home</Link>
            <ChevronRight size={11} />
            <Link href="/ai-knowledge-hub" className="hover:text-electric transition-colors no-underline">AI Knowledge Hub</Link>
            <ChevronRight size={11} />
            <span className="text-slate-text line-clamp-1">{page.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 bg-electric/5 px-2.5 py-1">
                REFERENCE GUIDE
              </span>
              <div className="h-px flex-1 bg-border/40" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] mb-5">
              {page.title}
            </h1>

            <p className="font-sans text-[15px] text-slate-text leading-relaxed mb-6 max-w-2xl">
              {page.metaDescription}
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

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <div className="bg-background">
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
          <div>



            {/* ── Definition Box (AEO-critical) ─────────────────────── */}
            {definitionSection && (
              <motion.section
                id="definition"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-14"
                aria-labelledby="definition-heading"
              >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 bg-electric/5 px-2.5 py-1">
                    DEFINITION
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>

                {/* Definition card */}
                <div className="border-l-4 border-electric bg-electric/5 px-7 py-6 relative">
                  {/* Corner mark */}
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-20" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-electric border-l-[32px] border-l-transparent" />
                  </div>

                  <h2
                    id="definition-heading"
                    className="sr-only"
                  >
                    Definition
                  </h2>

                  {definitionSection.content.split('\\n').map((para, i) => (
                    <p
                      key={i}
                      className={`font-sans leading-relaxed mb-3 last:mb-0 ${
                        i === 0
                          ? 'text-[17px] font-semibold text-foreground'
                          : 'text-[15px] text-slate-text'
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── Content Sections ──────────────────────────────────── */}
            <div className="space-y-14">
              {otherSections.map((section, i) => {
                const meta = SECTION_META[section.heading] || {
                  icon: '◎',
                  accent: 'text-electric',
                  label: section.heading.toUpperCase(),
                  border: 'border-electric/40',
                };
                const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                return (
                  <motion.section
                    key={section.heading}
                    id={sectionId}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    aria-labelledby={`${sectionId}-heading`}
                  >
                    {/* Section heading row */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`font-mono text-[10px] tracking-[0.18em] uppercase border px-2.5 py-1 ${meta.accent} ${meta.border}`}
                        style={{ background: 'rgba(255,255,255,0.02)' }}
                      >
                        {meta.label}
                      </span>
                      <div className="h-px flex-1 bg-border/40" />
                    </div>

                    <h2
                      id={`${sectionId}-heading`}
                      className="font-serif text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight"
                    >
                      {section.heading}
                    </h2>

                    {/* Section body text */}
                    <SectionBody content={section.content} heading={section.heading} />

                    {/* ── Inline diagrams after specific sections ── */}
                    {section.heading === 'Framework' && (
                      <HubFrameworkDiagram content={section.content} title={page.title} />
                    )}
                    {section.heading === 'Common Mistakes Businesses Make' && (
                      <HubMistakesDiagram content={section.content} />
                    )}
                    {section.heading === 'Practical Business Example' && (
                      <HubExampleDiagram slug={page.slug} />
                    )}
                    {section.heading === 'Why This Matters for Businesses' && (
                      <HubBusinessImpactDiagram slug={page.slug} />
                    )}
                  </motion.section>
                );
              })}
            </div>

            {/* ── FAQ Section ───────────────────────────────────────── */}
            {page.faqs.length > 0 && (
              <motion.section
                id="faq"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-14 pt-12 border-t border-border"
                itemScope
                itemType="https://schema.org/FAQPage"
                aria-labelledby="faq-heading"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-3">
                  FAQ
                </p>
                <h2
                  id="faq-heading"
                  className="font-serif text-2xl font-bold text-foreground mb-10"
                >
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  {page.faqs.map((faq, i) => (
                    <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── Related Hub Pages ─────────────────────────────────── */}
            {page.internalLinks.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="mt-14"
                aria-label="Related guides"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 bg-electric/5 px-2.5 py-1">
                    RELATED GUIDES
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {page.internalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 border border-border bg-background hover:bg-navy hover:border-electric/30 transition-all duration-200 p-4 no-underline"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="shrink-0 font-mono text-[10px] text-electric/40 mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-sans text-[13px] text-slate-text group-hover:text-foreground transition-colors leading-snug">
                          {link.label}
                        </span>
                      </div>
                      <ArrowRight
                        size={13}
                        className="shrink-0 text-electric/30 group-hover:text-electric group-hover:translate-x-1 transition-all"
                      />
                    </a>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── CTA Block ─────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-14 border border-border/60 bg-navy p-8 relative overflow-hidden"
            >
              {/* Blueprint grid overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" aria-hidden="true">
                <defs>
                  <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">
                    STRATEGY CALL
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  Ready to implement AI in your business?
                </h3>
                <p className="font-sans text-[14px] text-slate-text leading-relaxed mb-6 max-w-lg">
                  Book a strategy call with Ikram Rana to evaluate your workflows, identify the right automation opportunities, and build a structured implementation plan.
                </p>
                <Link
                  href="https://calendly.com/ikramrana15"
                  className="inline-flex items-center gap-2 bg-electric text-white px-6 py-3 font-sans font-medium text-sm hover:bg-electric/90 transition-colors no-underline"
                >
                  Book a strategy call
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* ── Prev / Next Navigation ────────────────────────────── */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-8">
              {prevPage ? (
                <Link
                  href={`/ai-knowledge-hub/${prevPage.slug}`}
                  className="group flex items-center gap-2 font-mono text-[11px] text-slate-dim hover:text-electric transition-colors no-underline"
                >
                  <ChevronRight size={13} className="rotate-180" />
                  <span className="line-clamp-1 max-w-[200px]">{prevPage.title}</span>
                </Link>
              ) : <div />}

              <Link
                href="/ai-knowledge-hub"
                className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim hover:text-electric transition-colors no-underline"
              >
                All guides
              </Link>

              {nextPage ? (
                <Link
                  href={`/ai-knowledge-hub/${nextPage.slug}`}
                  className="group flex items-center gap-2 font-mono text-[11px] text-slate-dim hover:text-electric transition-colors no-underline text-right"
                >
                  <span className="line-clamp-1 max-w-[200px]">{nextPage.title}</span>
                  <ChevronRight size={13} />
                </Link>
              ) : <div />}
            </div>

          </div>{/* end main column */}

          {/* ── Sidebar ──────────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* Table of Contents */}
              <nav
                className="border border-border/60 bg-navy/30 p-5"
                aria-label="On this page"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">
                  ON THIS PAGE
                </p>
                <ol className="space-y-2.5">
                  {tocEntries.map((entry, i) => (
                    <li key={entry.id} className="flex items-start gap-2.5">
                      <span className="font-mono text-[10px] text-electric/40 tabular-nums mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <a
                        href={`#${entry.id}`}
                        className="font-sans text-[12px] text-slate-text hover:text-electric transition-colors no-underline leading-snug"
                      >
                        {entry.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* All Guides */}
              <div className="border border-border/60 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">
                  ALL GUIDES
                </p>
                <div className="space-y-2">
                  {hubPages.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/ai-knowledge-hub/${p.slug}`}
                      className={`block font-sans text-[12px] leading-snug no-underline transition-colors py-1 ${
                        p.slug === page.slug
                          ? 'text-electric font-medium'
                          : 'text-slate-dim hover:text-electric'
                      }`}
                    >
                      {p.slug === page.slug && (
                        <span className="inline-block w-1.5 h-1.5 bg-electric rounded-full mr-2 mb-0.5" />
                      )}
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA mini */}
              <div className="border border-electric/20 bg-electric/5 p-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">
                  STRATEGY CALL
                </p>
                <p className="font-sans text-[12px] text-slate-text leading-relaxed mb-4">
                  Ready to implement AI in your business?
                </p>
                <Link
                  href="https://calendly.com/ikramrana15"
                  className="inline-flex items-center gap-2 bg-electric text-white px-4 py-2 font-sans font-medium text-[12px] hover:bg-electric/90 transition-colors no-underline w-full justify-center"
                >
                  Book a call
                  <ArrowRight size={12} />
                </Link>
              </div>

            </div>
          </aside>

          </div>{/* end grid */}
        </div>
      </div>
    </>
  );
}
