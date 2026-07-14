/**
 * DESIGN: The Architect's Blueprint
 * CASE STUDY PAGE TEMPLATE — /case-studies/:slug
 * Blueprint aesthetic: dark navy bg, electric blue accents, mono labels, serif headings
 * Schema: Article
 * Key: Results highlight box is the highest-priority AEO element
 * Layout: Two-column (content + sticky sidebar)
 */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { useHead } from "@/hooks/useHead";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, TrendingUp, ExternalLink } from "lucide-react";
import { getCaseStudy, caseStudies } from "@/data/caseStudies";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

// Section accent colours
const sectionAccents = [
  { key: 'businessContext', label: 'Business Context', color: '#60a5fa' },
  { key: 'operationalProblem', label: 'Operational Problem', color: '#fb7185' },
  { key: 'automationSystem', label: 'Automation System Implemented', color: '#2dd4bf' },
  { key: 'results', label: 'Results', color: '#34d399' },
  { key: 'lessonsLearned', label: 'Lessons Learned', color: '#f59e0b' },
  { key: 'expertPerspective', label: 'Expert Perspective: Ikram Rana', color: '#a78bfa' },
];

// Hub cross-link mapping for internal links
const hubSlugMap: Record<string, string> = {
  'What Is AI Automation for Small Businesses?': 'what-is-ai-automation-for-small-businesses',
  'What Is AI Workflow Automation?': 'what-is-ai-workflow-automation',
  'What Are AI Agents for Businesses?': 'what-are-ai-agents-for-businesses',
  'What Is AI Adoption for Businesses?': 'what-is-ai-adoption-for-businesses',
  'AI Governance for Businesses': 'ai-governance-for-businesses',
  'AI Decision Systems for Business': 'ai-decision-systems-for-business',
  'AI for Small Businesses: A Practical Guide': 'ai-for-small-businesses-guide',
};

// Blog cross-link mapping
const blogSlugMap: Record<string, string> = {
  'Cognitive Load Is the Real Productivity Tax': 'cognitive-load-productivity-tax',
  'Why Most People Automate the Wrong Step': 'automate-wrong-step',
  'The Hidden Cost of Manual Processes': 'hidden-cost-manual-processes',
};

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || '';
  const cs = getCaseStudy(slug);

  useHead(cs?.title || '', cs?.metaDescription);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cs) {
    return (
      <div className="container py-32 text-center">
        <p className="font-mono text-sm text-muted-foreground mb-4">Case study not found.</p>
        <Link href="/case-studies" className="text-electric font-mono text-xs hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": cs.title,
    "description": cs.metaDescription,
    "articleSection": "Case Studies",
    "author": {
      "@type": "Person",
      "name": "Ikram Rana",
      "url": "https://ikramrana.com",
      "jobTitle": "AI Automation Strategist",
      "worksFor": { "@type": "Organization", "name": "Barrana.ai", "url": "https://barrana.ai" }
    },
    "publisher": { "@type": "Organization", "name": "IkramRana.com" },
    "about": { "@type": "Thing", "name": `AI Automation for ${cs.industry}` },
    "datePublished": "2026-03-01"
  };

  // TOC entries
  const tocEntries = sectionAccents.map(s => ({ id: s.key, label: s.label, color: s.color }));

  // Other case studies for sidebar
  const otherStudies = caseStudies.filter(c => c.slug !== slug).slice(0, 4);

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
              <Link href="/case-studies" className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-electric transition-colors">
                Case Studies
              </Link>
              <span className="text-white/20 font-mono text-[10px]">/</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric truncate max-w-[200px]">
                {cs.industry}
              </span>
            </div>

            {/* Industry badge */}
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={13} className="text-electric" />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-electric">
                {cs.industry} · AI Automation Case Study
              </span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-[38px] font-bold text-white leading-[1.15] tracking-tight mb-3 max-w-3xl">
              {cs.title}
            </h1>
            <p className="font-mono text-xs text-white/40">
              By Ikram Rana, Founder of Barrana.ai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column layout */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">

          {/* ── Main content column ── */}
          <div>

            {/* ── RESULTS HIGHLIGHT BOX — highest priority AEO element ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <div
                className="p-6 md:p-8"
                style={{
                  background: 'rgba(52,211,153,0.06)',
                  border: '1px solid rgba(52,211,153,0.25)',
                  borderLeftWidth: '4px',
                  borderLeftColor: '#34d399',
                }}
              >
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-green-400 mb-3">
                  Headline Result
                </div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-snug mb-2">
                  {cs.metric}
                </p>
                <p className="font-mono text-xs text-white/45">
                  {cs.industry} · AI Automation Implementation
                </p>
              </div>
            </motion.div>

            {/* ── Content sections ── */}
            {sectionAccents.map(({ key, label, color }, idx) => {
              const content = cs[key as keyof typeof cs] as string;
              if (!content) return null;

              // Bold key metrics in Results section
              const renderContent = (text: string) => {
                if (key !== 'results') return <p className="text-muted-foreground leading-relaxed text-[15px]">{text}</p>;
                // Split on sentences and bold any sentence containing a percentage or number metric
                return (
                  <div className="text-muted-foreground leading-relaxed text-[15px] space-y-3">
                    {text.split('. ').map((sentence, si) => {
                      const hasMetric = /\d+[\s%]|hours|percent|reduction|increase|doubled|tripled|recovered|eliminated/i.test(sentence);
                      return (
                        <p key={si}>
                          {hasMetric ? <strong className="text-foreground">{sentence}{si < text.split('. ').length - 1 ? '.' : ''}</strong> : `${sentence}${si < text.split('. ').length - 1 ? '.' : ''}`}
                        </p>
                      );
                    })}
                  </div>
                );
              };

              return (
                <motion.div
                  key={key}
                  id={key}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: idx * 0.05 }}
                  className="mb-10"
                >
                  {/* Section label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-1"
                      style={{ color, background: `${color}10`, border: `1px solid ${color}35` }}
                    >
                      {label}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${color}18` }} />
                  </div>

                  {/* Section heading */}
                  <h2
                    className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug"
                    style={{ borderLeft: `3px solid ${color}`, paddingLeft: '1rem' }}
                  >
                    {label}
                  </h2>

                  {renderContent(content)}
                </motion.div>
              );
            })}

            {/* ── Internal cross-links ── */}
            {cs.internalLinks.length > 0 && (
              <motion.div {...fadeUp} className="mb-10 p-5 border border-border/40 bg-card/50">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  Related reading
                </div>
                <div className="flex flex-col gap-2">
                  {cs.internalLinks.map((link, i) => {
                    const hubSlug = hubSlugMap[link];
                    const blogSlug = blogSlugMap[link];
                    if (hubSlug) {
                      return (
                        <Link key={i} href={`/ai-knowledge-hub/${hubSlug}`} className="inline-flex items-center gap-2 font-mono text-xs text-electric/70 hover:text-electric transition-colors no-underline">
                          <ExternalLink size={10} /> {link} <ArrowRight size={10} />
                        </Link>
                      );
                    }
                    if (blogSlug) {
                      return (
                        <Link key={i} href={`/blog/${blogSlug}`} className="inline-flex items-center gap-2 font-mono text-xs text-electric/70 hover:text-electric transition-colors no-underline">
                          <ExternalLink size={10} /> {link} <ArrowRight size={10} />
                        </Link>
                      );
                    }
                    return (
                      <span key={i} className="font-mono text-xs text-white/35">{link}</span>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── Related Resources (rich links) ── */}
            {cs.relatedLinks && cs.relatedLinks.length > 0 && (
              <motion.div {...fadeUp} className="mb-10 p-5 border border-electric/15 bg-card/30">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  RELATED RESOURCES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cs.relatedLinks.map((link, i) => (
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
                Book a strategy call
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Ready to achieve similar results?
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xl">
                Businesses looking to implement AI automation can book a strategy call with Ikram Rana to evaluate their workflows and identify automation opportunities.
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
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 font-mono text-xs tracking-wide hover:border-white/40 hover:text-white/80 transition-colors no-underline"
                >
                  <ArrowLeft size={12} /> All case studies
                </Link>
              </div>
            </motion.div>

          </div>

          {/* ── Sticky sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* On This Page */}
              <div className="border border-border/40 p-5">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  On This Page
                </div>
                <nav className="flex flex-col gap-1">
                  <a href="#results" className="font-mono text-[11px] text-green-400/80 hover:text-green-400 transition-colors py-1 border-l-2 border-green-400/40 pl-3">
                    Results
                  </a>
                  {tocEntries.filter(t => t.id !== 'results').map(entry => (
                    <a
                      key={entry.id}
                      href={`#${entry.id}`}
                      className="font-mono text-[11px] text-white/40 hover:text-electric transition-colors py-1 border-l-2 border-white/10 hover:border-electric/40 pl-3"
                    >
                      {entry.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Other case studies */}
              <div className="border border-border/40 p-5">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-4">
                  Other Case Studies
                </div>
                <div className="flex flex-col gap-3">
                  {otherStudies.map(other => (
                    <Link
                      key={other.slug}
                      href={`/case-studies/${other.slug}`}
                      className="group flex flex-col gap-1 no-underline"
                    >
                      <span className="font-mono text-[10px] text-white/35">{other.industry}</span>
                      <span className="font-serif text-xs text-muted-foreground group-hover:text-electric transition-colors leading-snug">
                        {other.metric}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mini CTA */}
              <div className="border border-electric/20 p-5 bg-electric/3">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-electric mb-3">
                  Get started
                </div>
                <p className="text-xs text-white/50 leading-relaxed mb-4">
                  Book a strategy call to evaluate your workflows.
                </p>
                <a
                  href="https://calendly.com/ikramrana15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-electric hover:opacity-80 transition-opacity"
                >
                  Book a call <ArrowRight size={11} />
                </a>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
