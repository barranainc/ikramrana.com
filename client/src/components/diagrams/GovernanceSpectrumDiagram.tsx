/*
 * Governance Spectrum Diagram
 * Visual spectrum from Policy Theater (left) to Governance-by-Design (right)
 */
import { motion } from "framer-motion";

const points = [
  {
    label: "Policy Theater",
    desc: "Policies exist on paper. No enforcement. No audit trail.",
    position: 0,
    color: "#dc2626",
    traits: ["Documentation only", "No system enforcement", "Compliance on paper"],
  },
  {
    label: "Partial Governance",
    desc: "Some controls exist but gaps remain. Manual oversight.",
    position: 33,
    color: "#d97706",
    traits: ["Some logging", "Manual review", "Inconsistent enforcement"],
  },
  {
    label: "Structured Oversight",
    desc: "Defined processes with systematic checks. Mostly enforced.",
    position: 66,
    color: "#2563eb",
    traits: ["Defined escalation", "Regular audits", "Role-based access"],
  },
  {
    label: "Governance-by-Design",
    desc: "Compliance engineered into architecture. System enforces rules.",
    position: 100,
    color: "#059669",
    traits: ["Architectural enforcement", "Automated audit trails", "Structural compliance"],
  },
];

export default function GovernanceSpectrumDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Spectrum bar */}
      <div className="relative mb-12">
        <div className="h-3 rounded-full overflow-hidden" style={{ background: "linear-gradient(90deg, #fecaca, #fde68a, #bfdbfe, #a7f3d0)" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full rounded-full origin-left"
            style={{ background: "linear-gradient(90deg, #dc2626, #d97706, #2563eb, #059669)" }}
          />
        </div>

        {/* Position markers */}
        <div className="relative h-4 mt-1">
          {points.map((point) => (
            <div
              key={point.label}
              className="absolute -translate-x-1/2"
              style={{ left: `${point.position}%` }}
            >
              <div className="w-3 h-3 rounded-full border-2 bg-white" style={{ borderColor: point.color }} />
            </div>
          ))}
        </div>
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {points.map((point, i) => (
          <motion.div
            key={point.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl p-4 border bg-card hover:shadow-md transition-all"
            style={{ borderColor: `${point.color}30` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: point.color }} />
              <h4 className="font-serif text-sm font-bold" style={{ color: point.color }}>
                {point.label}
              </h4>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed mb-3">{point.desc}</p>
            <div className="space-y-1">
              {point.traits.map((trait) => (
                <div key={trait} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: point.color, opacity: 0.5 }} />
                  <span className="font-mono text-[10px]" style={{ color: point.color }}>{trait}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center font-mono text-[10px] text-slate-dim tracking-wider mt-5 uppercase">
        Governance Maturity Spectrum
      </p>
    </motion.div>
  );
}
