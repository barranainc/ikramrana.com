/*
 * Decision Architecture Flow Diagram
 * Shows how decisions flow through an AI-augmented organization
 */
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "AI Generates", sub: "Recommendation", icon: "⚙", color: "#0891b2", bg: "#ecfeff", border: "#67e8f9" },
  { id: 2, label: "Human Evaluates", sub: "Professional Judgment", icon: "◉", color: "#7c3aed", bg: "#f5f3ff", border: "#c4b5fd" },
  { id: 3, label: "System Validates", sub: "Compliance Check", icon: "✓", color: "#2563eb", bg: "#eff6ff", border: "#93c5fd" },
  { id: 4, label: "Decision Logged", sub: "Audit Trail", icon: "▣", color: "#059669", bg: "#ecfdf5", border: "#6ee7b7" },
];

export default function DecisionFlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-center justify-between gap-2">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex-1 rounded-xl p-4 text-center border transition-all hover:shadow-md"
              style={{ backgroundColor: step.bg, borderColor: step.border }}
            >
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="font-serif text-sm font-bold" style={{ color: step.color }}>{step.label}</div>
              <div className="font-mono text-[10px] mt-1 opacity-70" style={{ color: step.color }}>{step.sub}</div>
            </motion.div>
            {i < steps.length - 1 && (
              <svg width="32" height="20" viewBox="0 0 32 20" className="shrink-0 mx-1">
                <path d="M4 10 L24 10 M20 6 L24 10 L20 14" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden space-y-3">
        {steps.map((step, i) => (
          <div key={step.id}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-xl p-4 border"
              style={{ backgroundColor: step.bg, borderColor: step.border }}
            >
              <div className="text-2xl">{step.icon}</div>
              <div>
                <div className="font-serif text-sm font-bold" style={{ color: step.color }}>{step.label}</div>
                <div className="font-mono text-[10px] opacity-70" style={{ color: step.color }}>{step.sub}</div>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <svg width="20" height="20" viewBox="0 0 20 20" className="opacity-40">
                  <path d="M10 4 L10 16 M6 12 L10 16 L14 12" stroke="#6b7280" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-center font-mono text-[10px] text-slate-dim tracking-wider mt-4 uppercase">
        Decision Architecture Flow — Every step is traceable
      </p>
    </motion.div>
  );
}
