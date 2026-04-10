/**
 * DESIGN: The Architect's Blueprint — Light Theme
 * Blog Index page at /blog
 *
 * Design philosophy: Matches the site's architectural blueprint aesthetic exactly.
 * - Font-mono uppercase labels with tracking (§ annotations, category labels)
 * - Playfair Display serif for titles
 * - bg-navy / bg-navy-deep alternating sections
 * - text-electric for accents, text-foreground for headings, text-slate-text for body
 * - Left-border electric accent on hover cards
 * - No rounded-full pill tags — use sharp-edged mono labels
 * - Asymmetric layout: wide article list with left-anchored number annotations
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.035, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// All unique tags across all posts
const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(p => p.tags)))];

export default function BlogIndex() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>Blog — AI Strategy & Decision Architecture | Ikram Rana</title>

      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="bg-navy border-b border-border pt-24 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-5">
              §06 — BLOG
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              Practical thinking on AI<br className="hidden md:block" /> adoption and operations.
            </h1>
            <p className="text-slate-text text-lg leading-relaxed max-w-xl">
              Written for operators who need structure, not hype. {blogPosts.length} articles on decision architecture, automation, governance, and judgment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Tag Filter ──────────────────────────────────────────────── */}
      <section className="bg-background border-b border-border py-4 sticky top-16 z-30 backdrop-blur-md bg-background/95">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`flex-shrink-0 font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 border transition-colors duration-150 ${
                  activeTag === tag
                    ? 'border-electric text-electric bg-electric/8'
                    : 'border-border text-slate-dim hover:border-electric/50 hover:text-slate-text'
                }`}
              >
                {tag}
              </button>
            ))}
            <span className="ml-auto flex-shrink-0 font-mono text-[11px] text-slate-dim">
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article List ────────────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="container">
          <div className="grid gap-px bg-border" style={{ gridTemplateColumns: '1fr' }}>
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                className="group bg-background hover:bg-navy transition-colors duration-200"
              >
                <Link href={`/blog/${post.slug}`} className="block px-6 py-7 no-underline">
                  <div className="flex items-start gap-6">
                    {/* Article number */}
                    <span className="hidden sm:block font-mono text-[11px] text-slate-dim/60 pt-1 flex-shrink-0 w-8 text-right">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Tags + Date row */}
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        {post.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] tracking-[0.12em] uppercase text-electric border border-electric/30 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="font-mono text-[11px] text-slate-dim ml-auto">
                          {formatDate(post.publishDate)}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-snug mb-3 group-hover:text-electric transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-text text-[15px] leading-relaxed line-clamp-2">
                        {post.metaDescription}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={18}
                      className="flex-shrink-0 mt-1 text-slate-dim/40 group-hover:text-electric group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-navy border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-electric mb-4">
              READY TO APPLY THIS?
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              These ideas are operational, not theoretical.
            </h2>
            <p className="text-slate-text leading-relaxed mb-8">
              If any of these articles describe a problem you're facing, the next step is a conversation.
            </p>
            <a
              href="https://calendly.com/ikramrana15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric text-white px-8 py-3 font-sans font-medium text-sm hover:bg-electric-dim transition-colors"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
