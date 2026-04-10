/**
 * DESIGN: The Architect's Blueprint — Light Theme
 * Individual Blog Post template at /blog/:slug
 *
 * Design philosophy: Matches the site's architectural blueprint aesthetic exactly.
 * - Font-mono uppercase labels with tracking (§ annotations, category labels)
 * - Playfair Display serif for headings, Source Sans 3 for body
 * - bg-navy / bg-background alternating sections
 * - text-electric for accents, text-foreground for headings, text-slate-text for body
 * - Left-border electric accent on example/callout blocks
 * - Sharp-edged mono tag labels (no rounded-full pills)
 * - Asymmetric layout: narrow reading column with left-anchored section numbers
 * - FAQ section uses the site's rule-divider style
 * - Three blueprint diagrams: Problem (FIG. A), Framework (FIG. B), Tactics (FIG. C)
 */

import { useEffect } from 'react';
import { useHead } from '@/hooks/useHead';
import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { getBlogPost, blogPosts } from '@/data/blogPosts';
import NotFound from './NotFound';
import BlogProblemDiagram from '@/components/diagrams/BlogProblemDiagram';
import BlogFrameworkDiagram from '@/components/diagrams/BlogFrameworkDiagram';
import BlogTacticsDiagram from '@/components/diagrams/BlogTacticsDiagram';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function renderParagraphs(content: string) {
  return content.split('\n').filter(p => p.trim()).map((para, i) => (
    <p key={i} className="text-foreground/85 leading-relaxed mb-5 text-[1.05rem]">
      {renderContent(para)}
    </p>
  ));
}

/**
 * Derive diagram props from section content.
 * Extracts the first sentence of the section as a concise label.
 */
function firstSentence(text: string, maxLen = 72): string {
  const s = text.split(/[.!?]/)[0].trim();
  return s.length > maxLen ? s.slice(0, maxLen - 1) + '…' : s;
}

/**
 * Extract the framework name from a heading like "The Framework: Name Here"
 */
function extractFrameworkName(heading: string): string {
  return heading
    .replace(/^The Framework[:\s—–-]+/i, '')
    .replace(/^Framework[:\s—–-]+/i, '')
    .trim();
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = getBlogPost(slug);

  useHead(post?.title || '', post?.metaDescription);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  const currentIdx = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIdx > 0 ? blogPosts[currentIdx - 1] : null;
  const nextPost = currentIdx < blogPosts.length - 1 ? blogPosts[currentIdx + 1] : null;

  // JSON-LD Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Person',
      name: 'Ikram Rana',
      url: 'https://ikramrana.com',
      jobTitle: 'AI Automation Strategist',
      worksFor: { '@type': 'Organization', name: 'Barrana.ai', url: 'https://barrana.ai' },
    },
    publisher: { '@type': 'Organization', name: 'IkramRana.com', url: 'https://ikramrana.com' },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  // Derive diagram props from post content
  const s0 = post.sections[0];
  const s1 = post.sections[1];
  const s2 = post.sections[2];

  // Problem diagram props — expectation vs reality
  const problemProps = s0 ? {
    expectLabel: 'Expected Outcome',
    expectSub: firstSentence(post.intro[0] ?? '', 80),
    realityLabel: 'What Actually Happens',
    realitySub: firstSentence(s0.content, 80),
    gapLabel: 'The Gap',
  } : undefined;

  // Framework diagram props — three-tier principle stack
  const fwName = s1 ? extractFrameworkName(s1.heading) : 'The Framework';
  const fwSentences = s1 ? s1.content.split(/[.!?]/).filter(s => s.trim()).slice(0, 3) : [];
  const frameworkProps = s1 ? {
    title: fwName,
    tiers: [
      {
        number: '01',
        label: 'Principle',
        description: fwSentences[0] ? fwSentences[0].trim() + '.' : 'The core rule governing AI behaviour in this context.',
        accent: 'electric' as const,
      },
      {
        number: '02',
        label: 'Application',
        description: fwSentences[1] ? fwSentences[1].trim() + '.' : 'How the principle translates into workflow configuration.',
        accent: 'electric' as const,
      },
      {
        number: '03',
        label: 'Outcome',
        description: fwSentences[2] ? fwSentences[2].trim() + '.' : 'The measurable result when the principle is applied.',
        accent: 'burgundy' as const,
      },
    ],
  } : undefined;

  // Tactics diagram props — three-step action sequence
  const tacSentences = s2 ? s2.content.split(/[.!?]/).filter(s => s.trim()) : [];
  const tacticSteps = [
    {
      step: '01',
      action: 'Audit',
      detail: tacSentences[0] ? tacSentences[0].trim().slice(0, 100) + '.' : 'Assess current AI tools against decisions created vs. eliminated.',
    },
    {
      step: '02',
      action: 'Configure',
      detail: tacSentences[1] ? tacSentences[1].trim().slice(0, 100) + '.' : 'Set defaults, thresholds, and automatic execution rules.',
    },
    {
      step: '03',
      action: 'Measure',
      detail: tacSentences[2] ? tacSentences[2].trim().slice(0, 100) + '.' : 'Track time-to-decision and exception rates over 30 days.',
    },
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Article Header ──────────────────────────────────────────── */}
      <section className="bg-navy border-b border-border pt-24 pb-14">
        <div className="container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-mono text-[11px] text-slate-dim mb-8">
              <Link href="/blog" className="hover:text-electric transition-colors">Blog</Link>
              <ChevronRight size={11} />
              <span className="text-slate-text truncate max-w-xs">{post.title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.12em] uppercase text-electric border border-electric/30 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-6">
                {post.title}
              </h1>

              {/* Meta row */}
              <div className="flex items-center gap-4 font-mono text-[12px] text-slate-dim">
                <span>{formatDate(post.publishDate)}</span>
                <span className="text-border">·</span>
                <span>Ikram Rana</span>
                <span className="text-border">·</span>
                <span>AI Strategy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Article Body ────────────────────────────────────────────── */}
      <article className="py-14 bg-background">
        <div className="container">
          <div className="max-w-3xl">

            {/* Lead / meta description */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-10 pb-10 border-b border-border"
            >
              <p className="text-xl text-slate-text leading-relaxed font-light italic">
                {post.metaDescription}
              </p>
            </motion.div>

            {/* Intro paragraphs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-10"
            >
              {post.intro.map((para, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed mb-5 text-[1.05rem]">
                  {renderContent(para)}
                </p>
              ))}
            </motion.div>

            {/* Sections — with diagrams injected after each */}
            {post.sections.map((section, i) => (
              <div key={i}>
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="mb-8"
                >
                  {/* Section header with blueprint annotation */}
                  <div className="flex items-start gap-4 mb-5">
                    <span className="font-mono text-[11px] text-slate-dim/50 pt-2 flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-foreground leading-snug">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="pl-10">
                    {renderParagraphs(section.content)}
                  </div>
                </motion.section>

                {/* ── Diagram after section 1: Problem In Practice ── */}
                {i === 0 && problemProps && (
                  <div className="pl-0 mb-12">
                    <BlogProblemDiagram {...problemProps} />
                  </div>
                )}

                {/* ── Diagram after section 2: The Framework ── */}
                {i === 1 && frameworkProps && (
                  <div className="pl-0 mb-12">
                    <BlogFrameworkDiagram {...frameworkProps} />
                  </div>
                )}

                {/* ── Diagram after section 3: Tactical Advice ── */}
                {i === 2 && (
                  <div className="pl-0 mb-12">
                    <BlogTacticsDiagram steps={tacticSteps} />
                  </div>
                )}
              </div>
            ))}

            {/* ── CTA Block ─────────────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="my-14 border-l-4 border-electric bg-navy px-8 py-8"
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-3">
                READY TO APPLY THIS?
              </p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Book a Strategy Call
              </h3>
              <p className="text-slate-text leading-relaxed text-[15px] mb-6">
                Businesses looking to implement AI automation or structured AI adoption can book a strategy call with Ikram Rana to evaluate their workflows and identify the right automation opportunities.
              </p>
              <a
                href="https://calendly.com/ikramrana15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-electric text-white px-7 py-3 font-sans font-medium text-sm hover:bg-electric-dim transition-colors"
              >
                Book a Strategy Call
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* ── FAQ Section ───────────────────────────────────────── */}
            {post.faqs.length > 0 && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-14 pt-12 border-t border-border"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-3">
                  FAQ
                </p>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-10">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="border-l-2 border-electric/25 pl-6">
                      <h3 className="font-serif text-[17px] font-semibold text-foreground mb-3 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-slate-text leading-relaxed text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          {/* ── Related Resources ──────────────────────────────── */}
          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-14 pt-12 border-t border-border"
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-3">
                RELATED RESOURCES
              </p>
              <h2 className="font-serif text-xl font-bold text-foreground mb-8">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.relatedLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="group flex items-center gap-3 border border-border bg-navy px-5 py-4 hover:border-electric/40 hover:bg-navy/80 transition-all no-underline"
                  >
                    <ArrowRight size={14} className="text-electric flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="font-sans text-[13px] text-slate-text group-hover:text-foreground transition-colors leading-snug">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.section>
          )}
          </div>
        </div>
      </article>
      {/* ── Prev / Next Navigationn ──────────────────────────────────── */}
      <nav className="border-t border-border bg-navy py-12">
        <div className="container">
          <div className="max-w-3xl flex items-start justify-between gap-8">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="group flex items-start gap-3 max-w-xs no-underline">
                <ArrowLeft size={16} className="mt-1 text-slate-dim group-hover:text-electric transition-colors flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim mb-1.5">Previous</p>
                  <p className="font-serif text-[15px] font-semibold text-foreground group-hover:text-electric transition-colors leading-snug">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="group flex items-start gap-3 max-w-xs text-right ml-auto no-underline">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-slate-dim mb-1.5">Next</p>
                  <p className="font-serif text-[15px] font-semibold text-foreground group-hover:text-electric transition-colors leading-snug">
                    {nextPost.title}
                  </p>
                </div>
                <ArrowRight size={16} className="mt-1 text-slate-dim group-hover:text-electric transition-colors flex-shrink-0" />
              </Link>
            ) : <div />}
          </div>

          <div className="max-w-3xl mt-10 pt-8 border-t border-border">
            <Link href="/blog" className="font-mono text-[12px] tracking-[0.1em] uppercase text-electric hover:text-electric-dim transition-colors">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
