/*
 * Operational Coherence vs Fragmentation Diagram
 * Side-by-side comparison of coherent vs fragmented systems
 */
import { motion } from "framer-motion";

export default function CoherenceDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fragmented */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border-2 border-red-200 bg-red-50/50 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <h3 className="font-serif text-lg font-bold text-red-700">Fragmented</h3>
          </div>

          {/* Scattered nodes */}
          <svg viewBox="0 0 240 160" className="w-full mb-4">
            {/* Scattered boxes */}
            {[
              { x: 20, y: 10, w: 55, label: "CRM" },
              { x: 140, y: 5, w: 70, label: "AI Tool A" },
              { x: 60, y: 60, w: 65, label: "Sheets" },
              { x: 160, y: 55, w: 60, label: "Email" },
              { x: 10, y: 110, w: 75, label: "AI Tool B" },
              { x: 110, y: 105, w: 80, label: "Dashboard" },
            ].map((box, i) => (
              <g key={i}>
                <rect x={box.x} y={box.y} width={box.w} height={32} rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
                <text x={box.x + box.w / 2} y={box.y + 20} textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#dc2626">{box.label}</text>
              </g>
            ))}
            {/* Chaotic lines */}
            {[
              "M75 26 L140 21", "M75 26 L92 76", "M175 21 L192 71",
              "M125 76 L175 71", "M92 76 L47 126", "M192 71 L150 121",
              "M47 126 L150 121",
            ].map((d, i) => (
              <path key={i} d={d} stroke="#fca5a5" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
            ))}
            {/* Question marks */}
            <text x="108" y="50" fontSize="14" fill="#dc2626" opacity="0.5">?</text>
            <text x="50" y="100" fontSize="14" fill="#dc2626" opacity="0.5">?</text>
            <text x="180" y="95" fontSize="14" fill="#dc2626" opacity="0.5">?</text>
          </svg>

          <div className="space-y-2">
            {["No clear ownership", "Manual reconciliation", "Decision fatigue", "Validation gaps"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-red-400 text-xs">✕</span>
                <span className="text-xs text-red-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coherent */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <h3 className="font-serif text-lg font-bold text-emerald-700">Coherent</h3>
          </div>

          {/* Unified architecture */}
          <svg viewBox="0 0 240 160" className="w-full mb-4">
            {/* Central hub */}
            <rect x="70" y="55" width="100" height="40" rx="6" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="2" />
            <text x="120" y="79" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold" fill="#059669">Decision Hub</text>

            {/* Connected nodes */}
            {[
              { x: 30, y: 10, w: 60, label: "Intake", line: "M60 42 L100 55" },
              { x: 150, y: 10, w: 60, label: "AI Layer", line: "M180 42 L150 55" },
              { x: 30, y: 110, w: 60, label: "Review", line: "M60 110 L100 95" },
              { x: 150, y: 110, w: 60, label: "Audit", line: "M180 110 L150 95" },
            ].map((node, i) => (
              <g key={i}>
                <rect x={node.x} y={node.y} width={node.w} height={30} rx="4" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1.5" />
                <text x={node.x + node.w / 2} y={node.y + 19} textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#059669">{node.label}</text>
                <path d={node.line} stroke="#6ee7b7" strokeWidth="1.5" fill="none" />
              </g>
            ))}

            {/* Flow arrows on lines */}
            <circle cx="80" cy="48" r="2" fill="#059669" opacity="0.6" />
            <circle cx="165" cy="48" r="2" fill="#059669" opacity="0.6" />
            <circle cx="80" cy="102" r="2" fill="#059669" opacity="0.6" />
            <circle cx="165" cy="102" r="2" fill="#059669" opacity="0.6" />
          </svg>

          <div className="space-y-2">
            {["Clear ownership", "Smooth handoffs", "Consistent data", "Structural governance"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-emerald-500 text-xs">✓</span>
                <span className="text-xs text-emerald-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-center font-mono text-[10px] text-slate-dim tracking-wider mt-5 uppercase">
        Operational Coherence — Unified system vs. scattered tools
      </p>
    </motion.div>
  );
}
