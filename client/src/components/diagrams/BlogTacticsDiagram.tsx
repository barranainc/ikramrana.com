/*
 * BlogTacticsDiagram — Blueprint-style visual for "Tactical Advice For Businesses" section
 *
 * Design: Architect's Blueprint, Light Theme
 * Shows an ordered action sequence: Audit → Configure → Measure.
 * Three-step horizontal flow on desktop, vertical on mobile.
 * Sharp edges, mono labels, electric-blue step numbers, progress connector lines.
 */
import { motion } from "framer-motion";

interface TacticStep {
  step: string;
  action: string;
  detail: string;
}

interface BlogTacticsDiagramProps {
  steps?: TacticStep[];
}

const defaultSteps: TacticStep[] = [
  {
    step: "01",
    action: "Audit",
    detail: "Map every AI tool against decisions created vs. decisions eliminated.",
  },
  {
    step: "02",
    action: "Configure",
    detail: "Set defaults, confidence thresholds, and automatic execution rules.",
  },
  {
    step: "03",
    action: "Measure",
    detail: "Track time-to-decision, not just time-to-output, over 30 days.",
  },
];

export default function BlogTacticsDiagram({ steps = defaultSteps }: BlogTacticsDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="w-full my-8 select-none"
      aria-label="Tactical steps diagram"
    >
      {/* Header annotation */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric border border-electric/30 px-2 py-0.5">
          ACTION SEQUENCE
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-[10px] text-slate-dim tracking-wider">FIG. C</span>
      </div>

      {/* Main diagram */}
      <div className="border border-border bg-navy relative overflow-hidden">
        {/* Blueprint grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="blog-grid-tac" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-grid-tac)" />
        </svg>

        <div className="relative z-10 p-6 md:p-8">
          {/* Desktop: horizontal step flow */}
          <div className="hidden md:flex items-stretch gap-0">
            {steps.map((step, i) => (
              <div key={step.step} className="flex items-stretch flex-1">
                {/* Step card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.13 }}
                  className="flex-1 bg-background border border-border border-t-[3px] border-t-electric p-5"
                >
                  {/* Step number */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[22px] font-bold text-electric/30 leading-none">
                      {step.step}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  {/* Action label */}
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-electric font-bold mb-2">
                    {step.action}
                  </p>
                  {/* Detail */}
                  <p className="font-sans text-[13px] text-slate-text leading-relaxed">
                    {step.detail}
                  </p>
                </motion.div>

                {/* Connector arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="flex-shrink-0 flex items-center justify-center w-8 bg-navy">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                      <path d="M2 8 L18 8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
                      <path d="M14 4 L18 8 L14 12" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical step list */}
          <div className="md:hidden space-y-0">
            {steps.map((step, i) => (
              <div key={step.step}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-background border border-border border-l-[3px] border-l-electric p-4"
                >
                  {/* Step number */}
                  <span className="font-mono text-[18px] font-bold text-electric/30 leading-none flex-shrink-0 pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-electric font-bold mb-1.5">
                      {step.action}
                    </p>
                    <p className="font-sans text-[13px] text-slate-text leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div className="flex justify-start pl-[1.85rem] py-1 bg-navy">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2 L8 12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
                      <path d="M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom implementation note */}
          <div className="mt-5 border-t border-border pt-4 flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 opacity-50">
              <rect x="0.5" y="0.5" width="15" height="15" stroke="currentColor" strokeWidth="0.8" />
              <path d="M4 8 L7 11 L12 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            <p className="font-mono text-[10px] text-slate-dim tracking-wider uppercase">
              Execute in sequence — each step builds on the previous
            </p>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <p className="font-mono text-[10px] text-slate-dim tracking-wider mt-2 text-right uppercase">
        Implementation sequence — Ikram Rana / Barrana.ai
      </p>
    </motion.div>
  );
}
