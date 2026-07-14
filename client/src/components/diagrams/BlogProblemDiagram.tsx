/*
 * BlogProblemDiagram — Blueprint-style visual for "The Problem In Practice" section
 *
 * Design: Architect's Blueprint, Light Theme
 * Shows the core tension: what businesses EXPECT vs what actually HAPPENS.
 * Sharp edges, mono labels, electric-blue annotation lines, burgundy warning markers.
 * Adapts to each post via props extracted from section content keywords.
 */
import { motion } from "framer-motion";

interface ProblemNode {
  label: string;
  sub: string;
  type: "expect" | "reality" | "gap";
}

interface BlogProblemDiagramProps {
  expectLabel?: string;
  expectSub?: string;
  realityLabel?: string;
  realitySub?: string;
  gapLabel?: string;
}

export default function BlogProblemDiagram({
  expectLabel = "Expected Outcome",
  expectSub = "AI saves time, reduces effort",
  realityLabel = "Actual Outcome",
  realitySub = "New decisions, hidden costs",
  gapLabel = "The Gap",
}: BlogProblemDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="w-full my-8 select-none"
      aria-label="Problem diagram: expectation vs reality"
    >
      {/* Header annotation */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-burgundy border border-burgundy/30 px-2 py-0.5">
          DIAGNOSIS
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-slate-dim tracking-wider">FIG. A</span>
      </div>

      {/* Main diagram */}
      <div className="border border-border bg-navy relative overflow-hidden">
        {/* Blueprint grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="blog-grid-prob" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-grid-prob)" />
        </svg>

        <div className="relative z-10 p-6 md:p-8">
          {/* Two-column layout: Expectation vs Reality */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch">

            {/* LEFT: Expectation */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="border border-electric/40 bg-background p-5"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-3">
                ASSUMPTION
              </p>
              <h4 className="font-serif text-lg font-bold text-foreground leading-snug mb-2">
                {expectLabel}
              </h4>
              <p className="font-sans text-[13px] text-slate-text leading-relaxed">
                {expectSub}
              </p>
              {/* Checkmark indicator */}
              <div className="mt-4 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="13" height="13" stroke="currentColor" strokeOpacity="0.3" />
                  <path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>
                <span className="font-mono text-[10px] text-slate-dim tracking-wider">EXPECTED</span>
              </div>
            </motion.div>

            {/* CENTER: Arrow / gap indicator */}
            <div className="flex flex-col items-center justify-center px-4 md:px-6 py-2 md:py-0">
              {/* Vertical on mobile, horizontal on desktop */}
              <div className="hidden md:flex flex-col items-center gap-2">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden="true">
                  <path d="M4 12 L52 12" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M46 7 L52 12 L46 17" stroke="#dc2626" strokeWidth="1.5" fill="none" />
                </svg>
                <span className="font-mono text-[9px] text-burgundy tracking-[0.15em] uppercase text-center leading-tight">
                  {gapLabel}
                </span>
              </div>
              {/* Mobile: down arrow */}
              <div className="md:hidden flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <svg width="20" height="32" viewBox="0 0 20 32" fill="none" aria-hidden="true">
                  <path d="M10 4 L10 26" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M5 20 L10 26 L15 20" stroke="#dc2626" strokeWidth="1.5" fill="none" />
                </svg>
                <div className="flex-1 h-px bg-border" />
              </div>
            </div>

            {/* RIGHT: Reality */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="border border-burgundy/40 bg-background p-5"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-burgundy mb-3">
                REALITY
              </p>
              <h4 className="font-serif text-lg font-bold text-foreground leading-snug mb-2">
                {realityLabel}
              </h4>
              <p className="font-sans text-[13px] text-slate-text leading-relaxed">
                {realitySub}
              </p>
              {/* Warning indicator */}
              <div className="mt-4 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1 L13 13 L1 13 Z" stroke="#dc2626" strokeWidth="1.2" strokeOpacity="0.6" fill="none" />
                  <line x1="7" y1="5.5" x2="7" y2="9" stroke="#dc2626" strokeWidth="1.2" strokeOpacity="0.6" />
                  <circle cx="7" cy="11" r="0.6" fill="#dc2626" fillOpacity="0.6" />
                </svg>
                <span className="font-mono text-[10px] text-burgundy tracking-wider">WHAT HAPPENS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <p className="font-mono text-[10px] text-slate-dim tracking-wider mt-2 text-right uppercase">
        The gap between assumption and outcome — Ikram Rana / Barrana.ai
      </p>
    </motion.div>
  );
}
