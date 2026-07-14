/**
 * DESIGN: The Architect's Blueprint
 * CASE STUDIES INDEX — /case-studies
 * Blueprint aesthetic: dark navy bg, electric blue accents, mono labels, serif headings
 * Schema: CollectionPage
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI Automation Case Studies",
  "description": "Real results from AI automation implementations for small and medium-sized businesses. Each case study documents the operational problem, automation approach, measurable outcomes, and lessons learned.",
  "url": "https://ikramrana.com/case-studies",
  "author": { "@type": "Person", "name": "Ikram Rana", "url": "https://ikramrana.com" },
  "hasPart": caseStudies.map(cs => ({
    "@type": "Article",
    "name": cs.title,
    "url": `https://ikramrana.com/case-studies/${cs.slug}`,
    "description": cs.metaDescription,
  })),
};

// Industry accent colours
const industryColors: Record<string, string> = {
  'Insurance Brokerage': '#60a5fa',
  'Property Management': '#2dd4bf',
  'Recruitment Agency': '#f59e0b',
  'Veterinary Clinic': '#34d399',
  'Marketing Agency': '#a78bfa',
  'Logistics Company': '#fb923c',
  'Financial Advisory': '#f472b6',
  'Management Consulting': '#818cf8',
};

export default function CaseStudyIndex() {
  useHead("AI Automation Case Studies by Industry", "Case studies documenting AI automation for small and medium businesses. Operational problems, automation approach, and measurable outcomes.");

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
              <TrendingUp size={13} className="text-electric" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric">
                Implementation Evidence
              </span>
              <span className="w-8 h-px bg-electric/40" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              AI Automation Case Studies
            </h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl">
              Real results from AI automation implementations for small and medium-sized businesses. Each case study documents the operational problem, automation approach, measurable outcomes, and lessons learned.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span className="font-mono text-xs text-white/40">
                {caseStudies.length} industries documented
              </span>
              <span className="w-1 h-1 bg-white/20" />
              <span className="font-mono text-xs text-white/40">
                By Ikram Rana, Barrana.ai
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-14 md:py-18">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => {
              const color = industryColors[cs.industry] || '#60a5fa';
              return (
                <motion.div
                  key={cs.slug}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                >
                  <Link href={`/case-studies/${cs.slug}`}>
                    <div className="group border border-border/50 bg-card hover:border-electric/40 transition-all duration-300 h-full flex flex-col cursor-pointer overflow-hidden">
                      {/* Colour bar */}
                      <div className="h-1 w-full" style={{ background: color }} />

                      <div className="p-6 flex flex-col flex-1">
                        {/* Industry label */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1"
                            style={{ color, background: `${color}12`, border: `1px solid ${color}30` }}
                          >
                            {cs.industry}
                          </span>
                          <span className="font-mono text-[10px] text-white/25">
                            Case Study
                          </span>
                        </div>

                        {/* Headline metric — AEO priority */}
                        <div
                          className="p-4 mb-4"
                          style={{
                            background: `${color}08`,
                            borderLeft: `3px solid ${color}`,
                          }}
                        >
                          <p className="font-serif text-xl font-bold text-foreground leading-snug">
                            {cs.metric}
                          </p>
                          <p className="font-mono text-[10px] text-white/40 mt-1">
                            Headline result
                          </p>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-base font-bold text-foreground group-hover:text-electric transition-colors leading-snug mb-3">
                          {cs.title}
                        </h2>

                        {/* Meta description preview */}
                        <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
                          {cs.metaDescription}
                        </p>

                        {/* Read link */}
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-electric/60 group-hover:text-electric transition-colors">
                          Read case study <ArrowRight size={11} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-4">
              Your business could be next
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to build your own case study?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Book a strategy call with Ikram Rana to evaluate your specific workflows and identify the automation opportunities that will deliver measurable results for your business.
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
