/*
 * BlogFrameworkDiagram — Blueprint-style visual for "The Framework" section
 *
 * Design: Architect's Blueprint, Light Theme
 * Shows a three-level principle stack: Principle → Application → Outcome.
 * Sharp edges, mono labels, electric-blue left-border accents, numbered tiers.
 * Props allow each blog post to supply its own framework labels.
 */
import { motion } from "framer-motion";

interface FrameworkTier {
  number: string;
  label: string;
  description: string;
  accent: "electric" | "burgundy" | "slate";
}

interface BlogFrameworkDiagramProps {
  title?: string;
  tiers?: FrameworkTier[];
}

const defaultTiers: FrameworkTier[] = [
  {
    number: "01",
    label: "Principle",
    description: "The core rule that governs how AI should behave in this context.",
    accent: "electric",
  },
  {
    number: "02",
    label: "Application",
    description: "How the principle translates into a specific workflow or configuration.",
    accent: "electric",
  },
  {
    number: "03",
    label: "Outcome",
    description: "The measurable result when the principle is applied correctly.",
    accent: "burgundy",
  },
];

const accentColors = {
  electric: {
    border: "border-electric/50",
    label: "text-electric",
    number: "text-electric/60",
    bar: "bg-electric",
  },
  burgundy: {
    border: "border-burgundy/50",
    label: "text-burgundy",
    number: "text-burgundy/60",
    bar: "bg-burgundy",
  },
  slate: {
    border: "border-slate-dim/40",
    label: "text-slate-text",
    number: "text-slate-dim/60",
    bar: "bg-slate-dim",
  },
};

export default function BlogFrameworkDiagram({
  title = "The Framework",
  tiers = defaultTiers,
}: BlogFrameworkDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="w-full my-8 select-none"
      aria-label="Framework diagram"
    >
      {/* Header annotation */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 px-2 py-0.5">
          FRAMEWORK
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-slate-dim tracking-wider">FIG. B</span>
      </div>

      {/* Main diagram */}
      <div className="border border-border bg-navy relative overflow-hidden">
        {/* Blueprint grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="blog-grid-fw" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-grid-fw)" />
        </svg>

        <div className="relative z-10 p-6 md:p-8">
          {/* Framework title */}
          <p className="font-serif text-sm font-semibold text-foreground/70 mb-6 italic">
            {title}
          </p>

          {/* Tier stack */}
          <div className="space-y-0">
            {tiers.map((tier, i) => {
              const colors = accentColors[tier.accent];
              return (
                <motion.div
                  key={tier.number}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className={`flex items-stretch border-b border-border last:border-b-0 bg-background ${colors.border} border-l-[3px]`}
                >
                  {/* Number column */}
                  <div className="flex-shrink-0 w-14 flex items-center justify-center border-r border-border py-5">
                    <span className={`font-mono text-[13px] font-bold ${colors.number}`}>
                      {tier.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-5 py-5">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className={`font-mono text-[10px] tracking-[0.15em] uppercase font-bold ${colors.label}`}>
                        {tier.label}
                      </span>
                      {/* Horizontal rule */}
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <p className="font-sans text-[14px] text-slate-text leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Right accent bar */}
                  <div className={`flex-shrink-0 w-1 ${colors.bar} opacity-20`} />
                </motion.div>
              );
            })}
          </div>

          {/* Connecting arrow showing flow */}
          <div className="mt-5 flex items-center gap-3">
            <svg width="100%" height="16" viewBox="0 0 300 16" preserveAspectRatio="none" fill="none" aria-hidden="true" className="opacity-30">
              <path d="M 0 8 L 285 8" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
              <path d="M 279 3 L 285 8 L 279 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <p className="font-mono text-[10px] text-slate-dim tracking-wider mt-1 uppercase">
            Applied in sequence — each tier depends on the one above
          </p>
        </div>
      </div>

      {/* Footer caption */}
      <p className="font-mono text-[10px] text-slate-dim tracking-wider mt-2 text-right uppercase">
        Decision Architecture Framework — Ikram Rana / Barrana.ai
      </p>
    </motion.div>
  );
}
