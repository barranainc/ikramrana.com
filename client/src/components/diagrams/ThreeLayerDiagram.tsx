/*
 * Three-Layer Model Diagram
 * Stacked horizontal layers: Compliance (top), Judgment (middle), Execution (bottom)
 * Clean, architectural style with blueprint aesthetic
 */
import { motion } from "framer-motion";

const layers = [
  {
    label: "LAYER 3",
    title: "Compliance",
    desc: "What the system must enforce",
    color: "#2563eb",
    bgColor: "#eff6ff",
    borderColor: "#93c5fd",
    items: ["Audit trails", "Escalation triggers", "Regulatory constraints"],
  },
  {
    label: "LAYER 2",
    title: "Judgment",
    desc: "What humans must own",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    borderColor: "#c4b5fd",
    items: ["Professional evaluation", "Context assessment", "Decision authority"],
  },
  {
    label: "LAYER 1",
    title: "Execution",
    desc: "What AI automates",
    color: "#0891b2",
    bgColor: "#ecfeff",
    borderColor: "#67e8f9",
    items: ["Data extraction", "Document generation", "Workflow routing"],
  },
];

export default function ThreeLayerDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className={`relative ${compact ? "max-w-lg mx-auto" : "max-w-2xl mx-auto"}`}>
        {/* Vertical connector line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-violet-400 to-cyan-400 opacity-40" />

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative"
            >
              {/* Layer number badge */}
              <div
                className="absolute left-0 top-4 w-16 h-16 rounded-full flex items-center justify-center z-10"
                style={{ backgroundColor: layer.bgColor, border: `2px solid ${layer.borderColor}` }}
              >
                <span className="font-mono text-[10px] font-bold tracking-wider" style={{ color: layer.color }}>
                  {compact ? layer.label.split(" ")[1] : layer.label}
                </span>
              </div>

              {/* Layer content card */}
              <div
                className="ml-20 rounded-xl p-5 border transition-all hover:shadow-md"
                style={{
                  backgroundColor: layer.bgColor,
                  borderColor: layer.borderColor,
                }}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-serif text-lg font-bold" style={{ color: layer.color }}>
                    {layer.title}
                  </h3>
                  <span className="text-xs font-mono opacity-60" style={{ color: layer.color }}>
                    {layer.desc}
                  </span>
                </div>
                {!compact && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${layer.color}10`,
                          color: layer.color,
                          border: `1px solid ${layer.color}20`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow between layers */}
              {i < layers.length - 1 && (
                <div className="ml-20 pl-6 py-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" className="opacity-30">
                    <path d="M10 4 L10 16 M6 12 L10 16 L14 12" stroke="#6b7280" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Boundary annotations */}
        {!compact && (
          <div className="mt-6 ml-20 flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-red-400" />
              <span className="font-mono text-[10px] text-red-500 tracking-wider">LAYER BLEED RISK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-emerald-400" />
              <span className="font-mono text-[10px] text-emerald-600 tracking-wider">EXPLICIT BOUNDARY</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
