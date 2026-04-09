/*
 * Compliance Debt Accumulation Diagram
 * Shows risk growing over time as AI capabilities outpace governance
 */
import { motion } from "framer-motion";

const timePoints = [
  { label: "Month 1", capability: 20, governance: 15, gap: 5 },
  { label: "Month 3", capability: 45, governance: 25, gap: 20 },
  { label: "Month 6", capability: 70, governance: 30, gap: 40 },
  { label: "Month 12", capability: 90, governance: 35, gap: 55 },
  { label: "Month 18", capability: 95, governance: 38, gap: 57 },
];

export default function ComplianceDebtDiagram() {
  const barH = 140;
  const barW = 48;
  const gap = 16;
  const totalW = timePoints.length * (barW + gap) - gap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="text-center mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber-600">Risk Pattern</span>
          <h3 className="font-serif text-xl font-bold text-foreground mt-1">Compliance Debt Accumulation</h3>
          <p className="text-xs text-foreground/60 mt-1">AI capability vs. governance controls over time</p>
        </div>

        {/* Chart */}
        <div className="flex justify-center overflow-x-auto pb-2">
          <svg width={totalW + 80} height={barH + 60} viewBox={`0 0 ${totalW + 80} ${barH + 60}`} className="w-full max-w-lg">
            {/* Y-axis */}
            <line x1="40" y1="10" x2="40" y2={barH + 10} stroke="#e5e7eb" strokeWidth="1" />
            <text x="8" y="20" fontSize="8" fontFamily="monospace" fill="#9ca3af">100%</text>
            <text x="16" y={barH / 2 + 10} fontSize="8" fontFamily="monospace" fill="#9ca3af">50%</text>
            <text x="24" y={barH + 10} fontSize="8" fontFamily="monospace" fill="#9ca3af">0%</text>

            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
              <line key={pct} x1="40" y1={10 + barH * (1 - pct)} x2={totalW + 50} y2={10 + barH * (1 - pct)} stroke="#f3f4f6" strokeWidth="1" />
            ))}

            {/* Bars */}
            {timePoints.map((point, i) => {
              const x = 50 + i * (barW + gap);
              const capH = (point.capability / 100) * barH;
              const govH = (point.governance / 100) * barH;
              const gapH = ((point.capability - point.governance) / 100) * barH;

              return (
                <motion.g
                  key={point.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Capability bar */}
                  <rect x={x} y={10 + barH - capH} width={barW / 2 - 2} height={capH} rx="3" fill="#0891b2" opacity="0.7" />

                  {/* Governance bar */}
                  <rect x={x + barW / 2 + 2} y={10 + barH - govH} width={barW / 2 - 2} height={govH} rx="3" fill="#059669" opacity="0.7" />

                  {/* Gap indicator */}
                  <rect x={x + barW + 4} y={10 + barH - capH} width={4} height={gapH} rx="2" fill="#dc2626" opacity="0.4" />

                  {/* Label */}
                  <text x={x + barW / 2} y={barH + 28} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#6b7280">{point.label}</text>

                  {/* Gap label */}
                  {i === timePoints.length - 1 && (
                    <>
                      <line x1={x + barW + 12} y1={10 + barH - capH} x2={x + barW + 24} y2={10 + barH - capH} stroke="#dc2626" strokeWidth="0.5" />
                      <line x1={x + barW + 12} y1={10 + barH - govH} x2={x + barW + 24} y2={10 + barH - govH} stroke="#dc2626" strokeWidth="0.5" />
                      <line x1={x + barW + 18} y1={10 + barH - capH} x2={x + barW + 18} y2={10 + barH - govH} stroke="#dc2626" strokeWidth="1" />
                      <text x={x + barW + 24} y={10 + barH - (capH + govH) / 2 + 3} fontSize="8" fontFamily="monospace" fill="#dc2626" fontWeight="bold">DEBT</text>
                    </>
                  )}
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-cyan-600 opacity-70" />
            <span className="font-mono text-[10px] text-foreground/60">AI Capability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-emerald-600 opacity-70" />
            <span className="font-mono text-[10px] text-foreground/60">Governance Controls</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-red-600 opacity-40" />
            <span className="font-mono text-[10px] text-foreground/60">Compliance Debt</span>
          </div>
        </div>

        <p className="text-center text-xs text-foreground/50 mt-4 font-mono">
          Like technical debt, compliance debt compounds silently until an audit forces visibility.
        </p>
      </div>
    </motion.div>
  );
}
