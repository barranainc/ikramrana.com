/*
 * Automation Creep Progression Diagram
 * Shows the gradual shift from AI assistance to AI autonomy
 */
import { motion } from "framer-motion";

const stages = [
  { phase: "Phase 1", label: "AI Drafts", desc: "Human creates, AI assists", risk: "low", color: "#059669", bg: "#ecfdf5" },
  { phase: "Phase 2", label: "AI Recommends", desc: "AI proposes, human decides", risk: "moderate", color: "#d97706", bg: "#fffbeb" },
  { phase: "Phase 3", label: "AI Decides", desc: "AI acts, human rubber-stamps", risk: "high", color: "#dc2626", bg: "#fef2f2" },
  { phase: "Phase 4", label: "AI Operates", desc: "AI acts, no meaningful oversight", risk: "critical", color: "#991b1b", bg: "#fef2f2" },
];

export default function AutomationCreepDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Progress bar */}
      <div className="relative mb-8">
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #059669, #d97706, #dc2626, #991b1b)" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="font-mono text-[9px] text-emerald-600 tracking-wider">SAFE</span>
          <span className="font-mono text-[9px] text-red-700 tracking-wider">DANGER</span>
        </div>
      </div>

      {/* Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.phase}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="rounded-xl p-4 border-2 transition-all hover:shadow-md"
            style={{ backgroundColor: stage.bg, borderColor: `${stage.color}30` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: stage.color }}
              />
              <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: stage.color }}>
                {stage.phase}
              </span>
            </div>
            <h4 className="font-serif text-base font-bold mb-1" style={{ color: stage.color }}>
              {stage.label}
            </h4>
            <p className="text-xs text-foreground/60 leading-relaxed mb-2">{stage.desc}</p>
            <div
              className="inline-block font-mono text-[9px] px-2 py-0.5 rounded-full tracking-wider uppercase"
              style={{
                backgroundColor: `${stage.color}15`,
                color: stage.color,
                border: `1px solid ${stage.color}30`,
              }}
            >
              {stage.risk} risk
            </div>
          </motion.div>
        ))}
      </div>

      {/* Warning arrow */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <svg width="200" height="16" viewBox="0 0 200 16" className="opacity-40">
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          <line x1="0" y1="8" x2="192" y2="8" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
        </svg>
        <span className="font-mono text-[10px] text-red-600 tracking-wider whitespace-nowrap">AUTOMATION CREEP</span>
      </div>
    </motion.div>
  );
}
