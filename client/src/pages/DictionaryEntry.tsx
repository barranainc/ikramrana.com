/**
 * DESIGN: The Architect's Blueprint
 * DICTIONARY ENTRY TEMPLATE — /ai-dictionary/:slug
 * Blueprint aesthetic: dark navy bg, electric blue accents, mono labels, serif headings
 * Schema: DefinedTerm + Article
 * Key: Definition box is the highest-priority AEO element — visually prominent
 * Layout: Full-width content (no sidebar per instructions — "clean and focused")
 */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { getDictionaryTerm, dictionaryTerms, termSlugMap } from "@/data/dictionaryTerms";

// Hub page cross-links for relevant terms
const hubLinks: Record<string, { label: string; slug: string }> = {
  'ai-automation': { label: 'What Is AI Automation for Small Businesses?', slug: 'what-is-ai-automation-for-small-businesses' },
  'ai-adoption': { label: 'What Is AI Adoption for Businesses?', slug: 'what-is-ai-adoption-for-businesses' },
  'ai-agents': { label: 'What Are AI Agents for Businesses?', slug: 'what-are-ai-agents-for-businesses' },
  'ai-workflow': { label: 'What Is AI Workflow Automation?', slug: 'what-is-ai-workflow-automation' },
  'ai-governance': { label: 'AI Governance for Businesses', slug: 'ai-governance-for-businesses' },
  'ai-strategy': { label: 'AI Decision Systems for Business', slug: 'ai-decision-systems-for-business' },
  'large-language-models-llms': { label: 'AI for Small Businesses: A Practical Guide', slug: 'ai-for-small-businesses-guide' },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

// Section accent colours
const sectionAccents: Record<string, { border: string; label: string; bg: string }> = {
  simpleExplanation: { border: '#60a5fa', label: 'Simple Explanation', bg: 'rgba(96,165,250,0.06)' },
  businessExample: { border: '#2dd4bf', label: 'Business Example', bg: 'rgba(45,212,191,0.06)' },
  risksAndMisconceptions: { border: '#fb7185', label: 'Risks and Misconceptions', bg: 'rgba(251,113,133,0.06)' },
  implementationAdvice: { border: '#f59e0b', label: 'Implementation Advice', bg: 'rgba(245,158,11,0.06)' },
  expertPerspective: { border: '#a78bfa', label: 'Expert Perspective', bg: 'rgba(167,139,250,0.06)' },
};

export default function DictionaryEntry() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || '';
  const term = getDictionaryTerm(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!term) {
    return (
      <div className="container py-32 text-center">
        <p className="font-mono text-sm text-muted-foreground mb-4">Term not found.</p>
        <Link href="/ai-dictionary" className="text-electric font-mono text-xs hover:underline">
          ← Back to AI Dictionary
        </Link>
      </div>
    );
  }

  // Build related terms with slug lookup
  const relatedWithSlugs = term.relatedTerms.map(name => ({
    name,
    slug: termSlugMap[name] || null,
  }));

  const hubLink = hubLinks[slug];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "name": term.term,
        "description": term.definition,
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "AI Dictionary",
          "url": "https://ikramrana.com/ai-dictionary"
        }
      },
      {
        "@type": "Article",
        "headline": `${term.term}: What It Means for Business`,
        "description": term.definition,
        "author": {
          "@type": "Person",
          "name": "Ikram Rana",
          "url": "https://ikramrana.com",
          "jobTitle": "AI Automation Strategist",
          "worksFor": { "@type": "Organization", "name": "Barrana.ai", "url": "https://barrana.ai" }
        },
        "publisher": { "@type": "Organization", "name": "IkramRana.com" },
        "datePublished": "2026-03-01"
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="border-b border-border/40 bg-[#070f1e] py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/ai-dictionary" className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-electric transition-colors">
                AI Dictionary
              </Link>
              <span className="text-white/20 font-mono text-[10px]">/</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric">
                {term.term}
              </span>
            </div>

            {/* Term badge */}
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={13} className="text-electric" />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-electric">
                AI Dictionary Entry
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-3">
              {term.term}
            </h1>
            <p className="font-mono text-xs text-white/40">
              By Ikram Rana, Founder of Barrana.ai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content — full width, clean and focused */}
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl">

          {/* ── DEFINITION BOX — highest priority AEO element ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12"
          >
            <div
              className="p-6 md:p-8"
              style={{
                background: 'rgba(96,165,250,0.06)',
                borderLeft: '4px solid #60a5fa',
                border: '1px solid rgba(96,165,250,0.25)',
                borderLeftWidth: '4px',
              }}
            >
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-3">
                Definition
              </div>
              <p className="font-serif text-lg md:text-xl font-semibold text-foreground leading-relaxed">
                {term.definition}
              </p>
            </div>
          </motion.div>

          {/* ── Content sections ── */}
          {(Object.keys(sectionAccents) as Array<keyof typeof sectionAccents>).map((key, idx) => {
            const accent = sectionAccents[key];
            const content = term[key as keyof typeof term] as string;
            if (!content) return null;

            return (
              <motion.div
                key={key}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: idx * 0.06 }}
                className="mb-10"
              >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-1"
                    style={{ color: accent.border, background: accent.bg, border: `1px solid ${accent.border}40` }}
                  >
                    {accent.label}
                  </span>
                  <div className="flex-1 h-px" style={{ background: `${accent.border}20` }} />
                </div>

                {/* Section heading */}
                <h2
                  className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug"
                  style={{ borderLeft: `3px solid ${accent.border}`, paddingLeft: '1rem' }}
                >
                  {accent.label}
                </h2>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {content}
                </p>
              </motion.div>
            );
          })}

          {/* ── Related Terms ── */}
          {relatedWithSlugs.length > 0 && (
            <motion.div {...fadeUp} className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric px-2 py-1 border border-electric/30 bg-electric/5">
                  Related Terms
                </span>
                <div className="flex-1 h-px bg-electric/15" />
              </div>
              <div className="flex flex-wrap gap-3">
                {relatedWithSlugs.map(({ name, slug: relSlug }) =>
                  relSlug ? (
                    <Link
                      key={name}
                      href={`/ai-dictionary/${relSlug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-electric/80 hover:text-electric border border-electric/20 hover:border-electric/50 px-3 py-2 transition-all no-underline"
                    >
                      <BookOpen size={10} />
                      {name}
                    </Link>
                  ) : (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-white/35 border border-white/10 px-3 py-2"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          )}

          {/* ── Knowledge Hub cross-link ── */}
          {hubLink && (
            <motion.div {...fadeUp} className="mb-10 p-5 border border-teal/20 bg-teal/3">
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-teal mb-2">
                Deeper reading
              </div>
              <Link
                href={`/ai-knowledge-hub/${hubLink.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs text-teal/80 hover:text-teal transition-colors no-underline"
              >
                <ExternalLink size={11} />
                {hubLink.label}
                <ArrowRight size={11} />
              </Link>
            </motion.div>
          )}

          {/* ── All terms navigation ── */}
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 px-2 py-1 border border-white/10">
                All Terms
              </span>
              <div className="flex-1 h-px bg-border/30" />
            </div>
            <div className="flex flex-wrap gap-2">
              {dictionaryTerms.map(t => (
                <Link
                  key={t.slug}
                  href={`/ai-dictionary/${t.slug}`}
                  className={`font-mono text-[11px] px-3 py-1.5 border transition-all no-underline ${
                    t.slug === slug
                      ? 'border-electric text-electric bg-electric/5'
                      : 'border-border/40 text-muted-foreground hover:border-electric/40 hover:text-electric'
                  }`}
                >
                  {t.term}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── Related Resources ── */}
          {term.relatedLinks && term.relatedLinks.length > 0 && (
            <motion.div {...fadeUp} className="mb-10 p-5 border border-electric/15 bg-card/30">
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                RELATED RESOURCES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {term.relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="inline-flex items-center gap-2 font-sans text-[12px] text-slate-dim hover:text-electric transition-colors no-underline py-1 leading-snug border-l-2 border-electric/20 hover:border-electric pl-3"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── CTA Block ── */}
          <motion.div
            {...fadeUp}
            className="p-6 md:p-8 border border-electric/25 bg-[#070f1e]"
          >
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-3">
              Apply this to your business
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
              Ready to implement {term.term.toLowerCase()} in your workflows?
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xl">
              Book a strategy call with Ikram Rana to evaluate your specific workflows and build a structured AI implementation plan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendly.com/ikramrana15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric text-white font-mono text-xs tracking-wide hover:opacity-90 transition-opacity"
              >
                Book a strategy call <ArrowRight size={12} />
              </a>
              <Link
                href="/ai-dictionary"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 font-mono text-xs tracking-wide hover:border-white/40 hover:text-white/80 transition-colors no-underline"
              >
                <ArrowLeft size={12} /> Back to dictionary
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
