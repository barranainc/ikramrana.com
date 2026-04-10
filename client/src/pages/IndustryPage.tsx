/**
 * DESIGN: The Architect's Blueprint — Light Theme
 * Individual Industry Authority Page template
 *
 * Matches KnowledgeHubPage aesthetic exactly:
 * - Navy hero with blueprint grid
 * - Two-column layout: content + sticky sidebar
 * - Mono labels, electric accents, serif headings
 * - Section-specific formatting (Realistic Expectations = split panel)
 * - FAQ: left-border style matching blog/hub pages
 * - Article + FAQPage JSON-LD schema
 */

import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { industryPages, getIndustryPage } from '@/data/industryPages';
import NotFound from './NotFound';
import IndustryOpportunitiesDiagram from '@/components/industry/IndustryOpportunitiesDiagram';
import IndustryFrameworkDiagram from '@/components/industry/IndustryFrameworkDiagram';
import IndustryExpectationsDiagram from '@/components/industry/IndustryExpectationsDiagram';

const BASE_URL = 'https://ikramrana.com';
const TODAY = '2026-03-06';

// Section metadata
const SECTION_META: Record<string, { label: string; accent: string; border: string }> = {
  'Industry Workflow Overview': {
    label: 'WORKFLOW OVERVIEW',
    accent: 'text-electric',
    border: 'border-electric/40',
  },
  'Operational Problems': {
    label: 'OPERATIONAL PROBLEMS',
    accent: 'text-rose-400',
    border: 'border-rose-400/30',
  },
  'AI Automation Opportunities': {
    label: 'AUTOMATION OPPORTUNITIES',
    accent: 'text-teal-400',
    border: 'border-teal-400/30',
  },
  'AI Adoption Framework for This Industry': {
    label: 'ADOPTION FRAMEWORK',
    accent: 'text-electric',
    border: 'border-electric/40',
  },
  'Realistic Expectations': {
    label: 'REALISTIC EXPECTATIONS',
    accent: 'text-amber-400',
    border: 'border-amber-400/30',
  },
  'Expert Perspective: Ikram Rana': {
    label: 'EXPERT PERSPECTIVE',
    accent: 'text-violet-400',
    border: 'border-violet-400/30',
  },
};

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
      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text" className="text-slate-text leading-relaxed text-[15px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

function SectionBody({ content, heading }: { content: string; heading: string }) {
  const paragraphs = content.split('\\n').filter(Boolean);

  if (heading === 'Expert Perspective: Ikram Rana') {
    return (
      <div className="border border-border/60 bg-navy/50 p-6 space-y-4">
        {paragraphs.map((para, j) => {
          if (para.startsWith('"') || para.startsWith('\u201c')) {
            return (
              <blockquote key={j} className="border-l-2 border-electric pl-5">
                <p className="font-serif text-[17px] italic text-foreground leading-relaxed">{para}</p>
              </blockquote>
            );
          }
          return (
            <p key={j} className="font-sans text-[14px] text-slate-text leading-relaxed">{para}</p>
          );
        })}
      </div>
    );
  }

  if (heading === 'Operational Problems') {
    return (
      <div className="space-y-3">
        {paragraphs.map((para, j) => (
          <div key={j} className="flex items-start gap-3 border-l-2 border-rose-400/20 pl-4">
            <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-rose-400/60" aria-hidden="true" />
            <p className="font-sans text-[15px] text-slate-text leading-relaxed">{para}</p>
          </div>
        ))}
      </div>
    );
  }

  if (heading === 'AI Automation Opportunities') {
    return (
      <div className="space-y-3">
        {paragraphs.map((para, j) => (
          <div key={j} className="flex items-start gap-3 border-l-2 border-teal-400/20 pl-4">
            <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-teal-400/60" aria-hidden="true" />
            <p className="font-sans text-[15px] text-slate-text leading-relaxed">{para}</p>
          </div>
        ))}
      </div>
    );
  }

  if (heading === 'AI Adoption Framework for This Industry') {
    return (
      <div className="space-y-3">
        {paragraphs.map((para, j) => {
          const stageMatch = para.match(/^Stage (\d+):/i);
          if (stageMatch) {
            const stageNum = stageMatch[1];
            const rest = para.slice(stageMatch[0].length).trim();
            return (
              <div key={j} className="flex items-start gap-4 p-4 border border-border/60 bg-navy/20">
                <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-electric/40 font-mono text-sm font-bold text-electric bg-electric/5">
                  {stageNum}
                </span>
                <p className="font-sans text-[14px] text-slate-text leading-relaxed">{rest}</p>
              </div>
            );
          }
          return (
            <p key={j} className="font-sans text-[15px] text-slate-text leading-relaxed">{para}</p>
          );
        })}
      </div>
    );
  }

  if (heading === 'Realistic Expectations') {
    // Parse "AI can / AI cannot / Expected Results" from the content
    const canPara = paragraphs.find(p => p.toLowerCase().includes('ai automation can handle') || p.toLowerCase().includes('ai can'));
    const cannotPara = paragraphs.find(p => p.toLowerCase().includes('will not replace') || p.toLowerCase().includes('cannot replace') || p.toLowerCase().includes('cannot') || p.toLowerCase().includes('will not'));
    const resultPara = paragraphs.find(p => p.toLowerCase().includes('roi') || p.toLowerCase().includes('highest') || p.toLowerCase().includes('result') || p.toLowerCase().includes('report'));
    const otherParas = paragraphs.filter(p => p !== canPara && p !== cannotPara && p !== resultPara);

    return (
      <div className="space-y-4">
        {canPara && (
          <div className="border border-teal-400/20 bg-teal-400/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-teal-400 mb-3">WHAT AI CAN DO</p>
            <p className="font-sans text-[14px] text-slate-text leading-relaxed">{canPara}</p>
          </div>
        )}
        {cannotPara && (
          <div className="border border-amber-400/20 bg-amber-400/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-amber-400 mb-3">WHAT AI CANNOT REPLACE</p>
            <p className="font-sans text-[14px] text-slate-text leading-relaxed">{cannotPara}</p>
          </div>
        )}
        {resultPara && (
          <div className="border border-electric/20 bg-electric/5 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-electric mb-3">EXPECTED RESULTS</p>
            <p className="font-sans text-[14px] text-slate-text leading-relaxed">{resultPara}</p>
          </div>
        )}
        {otherParas.map((para, j) => (
          <p key={j} className="font-sans text-[15px] text-slate-text leading-relaxed">{para}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {paragraphs.map((para, j) => (
        <p key={j} className="font-sans text-[15px] text-slate-text leading-relaxed">{para}</p>
      ))}
    </div>
  );
}

export default function IndustryPage() {
  const params = useParams<{ slug: string }>();
  const page = getIndustryPage(params.slug || '');

  if (!page) return <NotFound />;

  const pageUrl = `${BASE_URL}/industries/${page.slug}`;

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
    publisher: { '@type': 'Organization', name: 'IkramRana.com', url: BASE_URL },
    about: { '@type': 'Thing', name: `${page.shortTitle} AI Automation` },
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

  const currentIndex = industryPages.findIndex(p => p.slug === page.slug);
  const prevPage = currentIndex > 0 ? industryPages[currentIndex - 1] : null;
  const nextPage = currentIndex < industryPages.length - 1 ? industryPages[currentIndex + 1] : null;

  const tocEntries = [
    ...page.sections.map(s => ({
      id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      label: s.heading,
    })),
    { id: 'faq', label: 'Frequently Asked Questions' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-navy border-b border-border pt-24 pb-14 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" aria-hidden="true">
          <defs>
            <pattern id="ind-page-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ind-page-grid)" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 40%, rgba(59,130,246,0.4) 60%, transparent 100%)' }} />

        <div className="container relative z-10">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-slate-dim mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-electric transition-colors no-underline">Home</Link>
            <ChevronRight size={11} />
            <Link href="/industries" className="hover:text-electric transition-colors no-underline">Industries</Link>
            <ChevronRight size={11} />
            <span className="text-slate-text line-clamp-1">{page.shortTitle}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 bg-electric/5 px-2.5 py-1">
                INDUSTRY GUIDE
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

            {/* ── Main column ─────────────────────────────────────── */}
            <div>
              {/* Content sections */}
              <div className="space-y-14">
                {page.sections.map((section, i) => {
                  const meta = SECTION_META[section.heading] || {
                    label: section.heading.toUpperCase(),
                    accent: 'text-electric',
                    border: 'border-electric/40',
                  };
                  const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                  return (
                    <motion.section
                      key={section.heading}
                      id={sectionId}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                      aria-labelledby={`${sectionId}-heading`}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className={`font-mono text-[10px] tracking-[0.18em] uppercase border px-2.5 py-1 ${meta.accent} ${meta.border}`}
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

                      <SectionBody content={section.content} heading={section.heading} />

                      {/* Inline diagrams */}
                      {section.heading === 'AI Automation Opportunities' && (
                        <IndustryOpportunitiesDiagram slug={page.slug} />
                      )}
                      {section.heading === 'AI Adoption Framework for This Industry' && (
                        <IndustryFrameworkDiagram content={section.content} />
                      )}
                      {section.heading === 'Realistic Expectations' && (
                        <IndustryExpectationsDiagram slug={page.slug} />
                      )}
                    </motion.section>
                  );
                })}
              </div>

              {/* ── FAQ Section ─────────────────────────────────────── */}
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
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-3">FAQ</p>
                  <h2 id="faq-heading" className="font-serif text-2xl font-bold text-foreground mb-10">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-8">
                    {page.faqs.map((faq, i) => (
                      <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
                    ))}
                  </div>
                </motion.section>
              )}

              {/* ── CTA Block ───────────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-14 border border-border/60 bg-navy p-8 relative overflow-hidden"
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" aria-hidden="true">
                  <defs>
                    <pattern id="cta-grid-ip" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cta-grid-ip)" />
                </svg>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric">STRATEGY CALL</span>
                    <div className="h-px flex-1 bg-border/40" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    Ready to implement AI in your {page.shortTitle.toLowerCase()} practice?
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

              {/* ── Prev / Next ─────────────────────────────────────── */}
              <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-8">
                {prevPage ? (
                  <Link
                    href={`/industries/${prevPage.slug}`}
                    className="group flex items-center gap-2 font-mono text-[11px] text-slate-dim hover:text-electric transition-colors no-underline"
                  >
                    <ChevronRight size={13} className="rotate-180" />
                    <span className="line-clamp-1 max-w-[200px]">{prevPage.shortTitle}</span>
                  </Link>
                ) : <div />}

                <Link
                  href="/industries"
                  className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim hover:text-electric transition-colors no-underline"
                >
                  All industries
                </Link>

                {nextPage ? (
                  <Link
                    href={`/industries/${nextPage.slug}`}
                    className="group flex items-center gap-2 font-mono text-[11px] text-slate-dim hover:text-electric transition-colors no-underline text-right"
                  >
                    <span className="line-clamp-1 max-w-[200px]">{nextPage.shortTitle}</span>
                    <ChevronRight size={13} />
                  </Link>
                ) : <div />}
              </div>
            </div>{/* end main column */}

            {/* ── Sidebar ─────────────────────────────────────────── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">

                {/* TOC */}
                <nav className="border border-border/60 bg-navy/30 p-5" aria-label="On this page">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">ON THIS PAGE</p>
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

                {/* All Industries */}
                <div className="border border-border/60 p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">ALL INDUSTRIES</p>
                  <div className="space-y-2">
                    {industryPages.map(p => (
                      <Link
                        key={p.slug}
                        href={`/industries/${p.slug}`}
                        className={`block font-sans text-[12px] leading-snug no-underline transition-colors py-1 ${
                          p.slug === page.slug
                            ? 'text-electric font-medium'
                            : 'text-slate-dim hover:text-electric'
                        }`}
                      >
                        {p.slug === page.slug && (
                          <span className="inline-block w-1.5 h-1.5 bg-electric rounded-full mr-2 mb-0.5" />
                        )}
                        {p.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Knowledge Hub links */}
                <div className="border border-border/60 p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-4">RELATED GUIDES</p>
                  <div className="space-y-2">
                    {[
                      { label: 'What Is AI Automation?', slug: 'what-is-ai-automation-for-small-businesses' },
                      { label: 'AI Workflow Automation', slug: 'what-is-ai-workflow-automation' },
                      { label: 'AI for Small Businesses', slug: 'ai-for-small-businesses-guide' },
                    ].map(link => (
                      <Link
                        key={link.slug}
                        href={`/ai-knowledge-hub/${link.slug}`}
                        className="block font-sans text-[12px] text-slate-dim hover:text-electric transition-colors no-underline py-1 leading-snug"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mini CTA */}
                <div className="border border-electric/20 bg-electric/5 p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">STRATEGY CALL</p>
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
