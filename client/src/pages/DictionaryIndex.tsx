/**
 * DESIGN: The Architect's Blueprint
 * AI DICTIONARY INDEX — /ai-dictionary
 * Blueprint aesthetic: dark navy bg, electric blue accents, mono labels, serif headings
 * Schema: DefinedTermSet
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { dictionaryTerms } from "@/data/dictionaryTerms";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

// Group terms alphabetically
const grouped = dictionaryTerms.reduce<Record<string, typeof dictionaryTerms>>((acc, term) => {
  const letter = term.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(term);
  return acc;
}, {});

const sortedLetters = Object.keys(grouped).sort();

const schemaData = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "AI Dictionary: Essential AI Terms for Business",
  "description": "Plain-language definitions of AI concepts for business leaders and operators. Written by Ikram Rana, founder of Barrana.ai.",
  "url": "https://ikramrana.com/ai-dictionary",
  "author": { "@type": "Person", "name": "Ikram Rana", "url": "https://ikramrana.com" },
  "hasDefinedTerm": dictionaryTerms.map(t => ({
    "@type": "DefinedTerm",
    "name": t.term,
    "url": `https://ikramrana.com/ai-dictionary/${t.slug}`,
    "description": t.definition.split('.')[0] + '.',
  })),
};

export default function DictionaryIndex() {
  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="border-b border-border/40 bg-[#070f1e] py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric">
                Reference Glossary
              </span>
              <span className="w-8 h-px bg-electric/40" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              AI Dictionary: Essential AI Terms for Business
            </h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl">
              Plain-language definitions of AI concepts for business leaders and operators. Written by Ikram Rana, founder of Barrana.ai.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span className="font-mono text-xs text-white/40">
                {dictionaryTerms.length} terms defined
              </span>
              <span className="w-1 h-1 bg-white/20" />
              <span className="font-mono text-xs text-white/40">
                Optimized for AI citation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alphabetical index bar */}
      <section className="border-b border-border/20 bg-[#070f1e] py-4">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {sortedLetters.map(letter => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="font-mono text-[11px] text-white/40 hover:text-electric transition-colors px-2 py-1 border border-white/10 hover:border-electric/40"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Term grid — alphabetical groups */}
      <section className="py-14 md:py-18">
        <div className="container">
          <div className="space-y-12">
            {sortedLetters.map((letter, li) => (
              <motion.div
                key={letter}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: li * 0.04 }}
                id={`letter-${letter}`}
              >
                {/* Letter header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-3xl font-bold text-electric/30 w-10">{letter}</span>
                  <div className="flex-1 h-px bg-border/40" />
                </div>

                {/* Terms in this letter group */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-14">
                  {grouped[letter].map((term, i) => (
                    <Link key={term.slug} href={`/ai-dictionary/${term.slug}`}>
                      <div className="group border border-border/50 bg-card hover:border-electric/40 hover:bg-card/80 transition-all duration-300 p-5 cursor-pointer h-full flex flex-col">
                        {/* Term name */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h2 className="font-serif text-base font-bold text-foreground group-hover:text-electric transition-colors leading-snug">
                            {term.term}
                          </h2>
                          <BookOpen size={13} className="text-electric/40 flex-shrink-0 mt-0.5" />
                        </div>

                        {/* First sentence of definition */}
                        <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
                          {term.definition.split('.')[0]}.
                        </p>

                        {/* Related terms count */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-white/30">
                            {term.relatedTerms.length} related terms
                          </span>
                          <ArrowRight size={11} className="text-electric/40 group-hover:text-electric transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-4">
              Go deeper
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to apply these concepts to your business?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understanding AI terminology is the first step. Book a strategy call with Ikram Rana to evaluate your specific workflows and build a structured AI implementation plan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/ikramrana15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-white font-mono text-xs tracking-wide hover:opacity-90 transition-opacity"
              >
                Book a strategy call <ArrowRight size={13} />
              </a>
              <Link
                href="/ai-knowledge-hub"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border font-mono text-xs tracking-wide text-muted-foreground hover:border-electric hover:text-electric transition-colors no-underline"
              >
                AI Knowledge Hub <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
