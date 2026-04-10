/**
 * DESIGN: The Architect's Blueprint — LIGHT THEME
 * LOCATIONS INDEX PAGE — /locations
 * Blueprint aesthetic: dark navy bg, electric blue accents, mono labels, serif headings
 * Matches: KnowledgeHubIndex, IndustryIndex
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { locationPages } from "@/data/locationPages";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

// Geographic hierarchy for visual display
const geoHierarchy = [
  { slug: 'ai-automation-consulting-vaughan-ontario', label: 'Vaughan, Ontario', level: 1, desc: 'Local — Ikram\'s home base' },
  { slug: 'ai-automation-consulting-toronto', label: 'Toronto', level: 2, desc: 'City — Greater downtown core' },
  { slug: 'ai-automation-consulting-greater-toronto-area', label: 'Greater Toronto Area', level: 3, desc: 'Regional — GTA municipalities' },
  { slug: 'ai-automation-consulting-canada', label: 'Canada', level: 4, desc: 'National — All Canadian businesses' },
  { slug: 'ai-automation-consulting-united-states', label: 'United States', level: 5, desc: 'International — US businesses' },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI Automation Consulting by Location",
  "description": "AI automation consulting for small and medium-sized businesses across the Greater Toronto Area, Canada, and the United States. Ikram Rana, founder of Barrana.ai, serves businesses wherever they operate.",
  "author": { "@type": "Person", "name": "Ikram Rana", "url": "https://ikramrana.com" },
  "provider": {
    "@type": "Organization",
    "name": "Barrana.ai",
    "url": "https://barrana.ai",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vaughan",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    }
  }
};

export default function LocationIndex() {
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
                Geographic Authority
              </span>
              <span className="w-8 h-px bg-electric/40" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              AI Automation Consulting by Location
            </h1>
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl">
              AI automation consulting for small and medium-sized businesses across the Greater Toronto Area, Canada, and the United States. Ikram Rana, founder of Barrana.ai, serves businesses wherever they operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Geographic Hierarchy Visual */}
      <section className="py-12 bg-[#070f1e] border-b border-border/20">
        <div className="container">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">
            FIG. — Geographic Coverage
          </div>
          <div className="flex flex-col gap-0 max-w-2xl">
            {geoHierarchy.map((item, i) => (
              <Link key={item.slug} href={`/locations/${item.slug}`}>
                <div
                  className="flex items-center gap-4 py-3 px-4 border-l-2 hover:bg-white/3 transition-colors cursor-pointer group"
                  style={{
                    marginLeft: `${(item.level - 1) * 24}px`,
                    borderColor: i === 0 ? '#60a5fa' : i === 4 ? '#2dd4bf' : 'rgba(96,165,250,0.3)',
                  }}
                >
                  <MapPin size={13} className="text-electric/60 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                    <span className="font-mono text-[10px] text-white/30 ml-3">{item.desc}</span>
                  </div>
                  <ArrowRight size={12} className="text-electric/40 group-hover:text-electric transition-colors flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              All Locations
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Choose Your Location
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationPages.map((page, i) => (
              <motion.div
                key={page.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              >
                <Link href={`/locations/${page.slug}`}>
                  <div className="group border border-border/50 bg-card hover:border-electric/40 hover:bg-card/80 transition-all duration-300 h-full flex flex-col p-6 cursor-pointer">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-8 h-8 border border-electric/30 flex items-center justify-center flex-shrink-0">
                        <Globe size={14} className="text-electric" />
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/30 text-right">
                        {page.areaServed === 'Vaughan' ? 'Local' :
                         page.areaServed === 'Toronto' ? 'City' :
                         page.areaServed === 'Greater Toronto Area' ? 'Regional' :
                         page.areaServed === 'Canada' ? 'National' : 'International'}
                      </span>
                    </div>

                    {/* Location name */}
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-electric transition-colors leading-snug mb-3">
                      {page.location}
                    </h3>

                    {/* Meta description preview */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 line-clamp-3">
                      {page.metaDescription}
                    </p>

                    {/* Section list */}
                    <div className="space-y-1 mb-5">
                      {page.sections.slice(0, 3).map((sec) => (
                        <div key={sec.heading} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-electric/50 flex-shrink-0" />
                          <span className="font-mono text-[10px] text-white/40 truncate">{sec.heading}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-electric font-mono text-xs tracking-wide group-hover:gap-3 transition-all">
                      <span>View location guide</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-4">
              Book a consultation
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to discuss your business workflows?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Book a strategy call with Ikram Rana to evaluate your workflows, identify the right automation opportunities, and build a structured implementation plan — wherever your business operates.
            </p>
            <a
              href="https://calendly.com/ikramrana15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-white font-mono text-xs tracking-wide hover:opacity-90 transition-opacity"
            >
              Book a strategy call <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
