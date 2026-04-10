/**
 * DESIGN: The Architect's Blueprint — LIGHT THEME
 * LOCATION PAGE TEMPLATE — /locations/:slug
 * Blueprint aesthetic: dark navy bg, electric blue accents, mono labels, serif headings
 * Matches: KnowledgeHubPage, IndustryPage
 * Schema: Article + ProfessionalService + FAQPage
 */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { getLocationPage, locationPages } from "@/data/locationPages";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

// Geographic cross-links per page
const geoLinks: Record<string, { label: string; slug: string }[]> = {
  'ai-automation-consulting-vaughan-ontario': [
    { label: 'Greater Toronto Area', slug: 'ai-automation-consulting-greater-toronto-area' },
    { label: 'Toronto', slug: 'ai-automation-consulting-toronto' },
  ],
  'ai-automation-consulting-toronto': [
    { label: 'Greater Toronto Area', slug: 'ai-automation-consulting-greater-toronto-area' },
    { label: 'Vaughan, Ontario', slug: 'ai-automation-consulting-vaughan-ontario' },
  ],
  'ai-automation-consulting-greater-toronto-area': [
    { label: 'Toronto', slug: 'ai-automation-consulting-toronto' },
    { label: 'Vaughan, Ontario', slug: 'ai-automation-consulting-vaughan-ontario' },
    { label: 'Canada', slug: 'ai-automation-consulting-canada' },
  ],
  'ai-automation-consulting-canada': [
    { label: 'Greater Toronto Area', slug: 'ai-automation-consulting-greater-toronto-area' },
    { label: 'United States', slug: 'ai-automation-consulting-united-states' },
  ],
  'ai-automation-consulting-united-states': [
    { label: 'Canada', slug: 'ai-automation-consulting-canada' },
  ],
};

// Hub pages cross-links per location
const hubLinks: Record<string, { label: string; slug: string }[]> = {
  'ai-automation-consulting-vaughan-ontario': [
    { label: 'What Is AI Automation for Small Businesses?', slug: 'what-is-ai-automation-for-small-businesses' },
    { label: 'AI for Small Businesses: A Practical Guide', slug: 'ai-for-small-businesses-guide' },
  ],
  'ai-automation-consulting-toronto': [
    { label: 'What Is AI Workflow Automation?', slug: 'what-is-ai-workflow-automation' },
    { label: 'What Are AI Agents for Businesses?', slug: 'what-are-ai-agents-for-businesses' },
  ],
  'ai-automation-consulting-greater-toronto-area': [
    { label: 'What Is AI Adoption for Businesses?', slug: 'what-is-ai-adoption-for-businesses' },
    { label: 'AI Decision Systems for Business', slug: 'ai-decision-systems-for-business' },
  ],
  'ai-automation-consulting-canada': [
    { label: 'AI Governance for Businesses', slug: 'ai-governance-for-businesses' },
    { label: 'What Is AI Adoption for Businesses?', slug: 'what-is-ai-adoption-for-businesses' },
  ],
  'ai-automation-consulting-united-states': [
    { label: 'What Is AI Workflow Automation?', slug: 'what-is-ai-workflow-automation' },
    { label: 'AI Decision Systems for Business', slug: 'ai-decision-systems-for-business' },
  ],
};

// Section accent colours
const sectionAccents = [
  { border: '#60a5fa', label: 'REGIONAL CONTEXT', bg: 'rgba(96,165,250,0.06)' },
  { border: '#fb7185', label: 'WORKFLOW CHALLENGES', bg: 'rgba(251,113,133,0.06)' },
  { border: '#2dd4bf', label: 'AI SOLUTIONS', bg: 'rgba(45,212,191,0.06)' },
  { border: '#f59e0b', label: 'INDUSTRY ADOPTION', bg: 'rgba(245,158,11,0.06)' },
  { border: '#a78bfa', label: 'EXPERT PERSPECTIVE', bg: 'rgba(167,139,250,0.06)' },
];

export default function LocationPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || '';
  const page = getLocationPage(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return (
      <div className="container py-32 text-center">
        <p className="font-mono text-sm text-muted-foreground mb-4">Location not found.</p>
        <Link href="/locations" className="text-electric font-mono text-xs hover:underline">
          ← Back to all locations
        </Link>
      </div>
    );
  }

  const crossLinks = geoLinks[slug] || [];
  const relatedHub = hubLinks[slug] || [];
  const otherLocations = locationPages.filter(p => p.slug !== slug);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "ProfessionalService"],
        "headline": page.title,
        "description": page.metaDescription,
        "author": {
          "@type": "Person",
          "name": "Ikram Rana",
          "url": "https://ikramrana.com",
          "jobTitle": "AI Automation Strategist"
        },
        "provider": {
          "@type": "Organization",
          "name": "Barrana.ai",
          "url": "https://barrana.ai",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vaughan",
            "addressRegion": "Ontario",
            "addressCountry": "CA"
          },
          "areaServed": page.areaServed
        },
        "datePublished": "2026-03-01"
      },
      {
        "@type": "FAQPage",
        "mainEntity": page.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
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
      <section className="border-b border-border/40 bg-[#070f1e] py-14 md:py-18">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/locations" className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-electric transition-colors">
                Locations
              </Link>
              <span className="text-white/20 font-mono text-[10px]">/</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric">
                {page.location}
              </span>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={13} className="text-electric" />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-electric">
                {page.areaServed}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
              {page.title}
            </h1>
            <p className="text-sm md:text-base text-white/55 leading-relaxed max-w-2xl font-mono">
              {page.metaDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content + Sidebar */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">

          {/* ── Main content ── */}
          <div className="min-w-0">

            {/* Sections */}
            {page.sections.map((section, idx) => {
              const accent = sectionAccents[idx] || sectionAccents[0];
              return (
                <motion.div
                  key={section.heading}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.06 }}
                  id={`section-${idx}`}
                  className="mb-12"
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
                    className="font-serif text-xl md:text-2xl font-bold text-foreground mb-5 leading-snug"
                    style={{ borderLeft: `3px solid ${accent.border}`, paddingLeft: '1rem' }}
                  >
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  <div className="space-y-4">
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-muted-foreground leading-relaxed text-[15px]">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Geographic cross-links */}
            {crossLinks.length > 0 && (
              <motion.div {...fadeUp} className="mb-12 p-5 border border-electric/20 bg-electric/3">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-3">
                  Related Locations
                </div>
                <div className="flex flex-wrap gap-3">
                  {crossLinks.map(link => (
                    <Link
                      key={link.slug}
                      href={`/locations/${link.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-electric/80 hover:text-electric border border-electric/20 hover:border-electric/50 px-3 py-1.5 transition-all"
                    >
                      <MapPin size={10} />
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20 px-3 py-1.5 transition-all"
                  >
                    <ArrowRight size={10} />
                    View all industries
                  </Link>
                </div>
              </motion.div>
            )}

            {/* FAQ Section */}
            <motion.div {...fadeUp} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric px-2 py-1 border border-electric/30 bg-electric/5">
                  FAQ
                </span>
                <div className="flex-1 h-px bg-electric/15" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 leading-snug border-l-[3px] border-electric pl-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {page.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-electric/40 pl-5 py-1"
                  >
                    <h3 className="font-serif text-base font-bold text-foreground mb-2 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Related Resources */}
            {page.relatedLinks && page.relatedLinks.length > 0 && (
              <motion.div {...fadeUp} className="mb-10 p-5 border border-electric/15 bg-card/30">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  RELATED RESOURCES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {page.relatedLinks.map((link, i) => (
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

            {/* CTA Block */}
            <motion.div
              {...fadeUp}
              className="p-6 md:p-8 border border-electric/25 bg-[#070f1e]"
            >
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-3">
                Work with Ikram Rana
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Ready to automate your workflows in {page.location}?
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xl">
                Book a strategy call with Ikram Rana to evaluate your workflows, identify the right automation opportunities, and build a structured implementation plan for your business.
              </p>
              <a
                href="https://calendly.com/ikramrana15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric text-white font-mono text-xs tracking-wide hover:opacity-90 transition-opacity"
              >
                Book a strategy call <ArrowRight size={12} />
              </a>
            </motion.div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* On This Page */}
              <div className="border border-border/50 p-5 bg-card">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  On This Page
                </div>
                <nav className="space-y-2">
                  {page.sections.map((sec, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="block font-mono text-[11px] text-muted-foreground hover:text-electric transition-colors leading-snug py-0.5"
                    >
                      {sec.heading}
                    </a>
                  ))}
                  <a
                    href="#faq"
                    className="block font-mono text-[11px] text-muted-foreground hover:text-electric transition-colors leading-snug py-0.5"
                  >
                    Frequently Asked Questions
                  </a>
                </nav>
              </div>

              {/* Other Locations */}
              <div className="border border-border/50 p-5 bg-card">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  Other Locations
                </div>
                <div className="space-y-2">
                  {otherLocations.map(loc => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-electric transition-colors py-0.5"
                    >
                      <MapPin size={10} className="flex-shrink-0 text-electric/50" />
                      {loc.location}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Knowledge Hub */}
              {relatedHub.length > 0 && (
                <div className="border border-border/50 p-5 bg-card">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                    Related Guides
                  </div>
                  <div className="space-y-2">
                    {relatedHub.map(hub => (
                      <Link
                        key={hub.slug}
                        href={`/ai-knowledge-hub/${hub.slug}`}
                        className="flex items-start gap-2 font-mono text-[11px] text-muted-foreground hover:text-electric transition-colors py-0.5 leading-snug"
                      >
                        <ExternalLink size={10} className="flex-shrink-0 mt-0.5 text-electric/50" />
                        {hub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Mini CTA */}
              <div className="border border-electric/25 p-5 bg-[#070f1e]">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-3">
                  Book a call
                </div>
                <p className="text-xs text-white/55 leading-relaxed mb-4">
                  Strategy call with Ikram Rana — evaluate your workflows and build a structured AI implementation plan.
                </p>
                <a
                  href="https://calendly.com/ikramrana15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-electric hover:underline"
                >
                  Book now <ArrowRight size={11} />
                </a>
              </div>

              {/* Back link */}
              <Link
                href="/locations"
                className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-electric transition-colors"
              >
                <ArrowLeft size={11} />
                All locations
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
