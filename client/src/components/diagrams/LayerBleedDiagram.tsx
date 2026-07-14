/*
 * Layer Bleed Warning Diagram
 * Shows execution layer bleeding into judgment layer
 */
import { motion } from "framer-motion";

export default function LayerBleedDiagram() {
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
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-red-500">Warning Pattern</span>
          <h3 className="font-serif text-xl font-bold text-foreground mt-1">Layer Bleed</h3>
        </div>

        <svg viewBox="0 0 400 220" className="w-full">
          {/* Judgment Layer (top) */}
          <rect x="20" y="10" width="360" height="70" rx="8" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1.5" />
          <text x="40" y="35" fontSize="10" fontFamily="monospace" fill="#7c3aed" fontWeight="bold">JUDGMENT LAYER</text>
          <text x="40" y="55" fontSize="9" fontFamily="sans-serif" fill="#7c3aed" opacity="0.7">Professional evaluation, context assessment, decision authority</text>

          {/* Boundary line */}
          <line x1="20" y1="90" x2="380" y2="90" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="8 4" />
          <text x="200" y="105" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#059669">EXPLICIT BOUNDARY</text>

          {/* Execution Layer (bottom) */}
          <rect x="20" y="115" width="360" height="70" rx="8" fill="#ecfeff" stroke="#67e8f9" strokeWidth="1.5" />
          <text x="40" y="140" fontSize="10" fontFamily="monospace" fill="#0891b2" fontWeight="bold">EXECUTION LAYER</text>
          <text x="40" y="160" fontSize="9" fontFamily="sans-serif" fill="#0891b2" opacity="0.7">Data extraction, document generation, workflow routing</text>

          {/* Bleed arrow (red, crossing boundary) */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <defs>
              <marker id="bleed-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
              </marker>
            </defs>
            {/* Bleed zone */}
            <rect x="240" y="50" width="120" height="90" rx="6" fill="#dc262615" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="300" y="70" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#dc2626" fontWeight="bold">BLEED ZONE</text>

            {/* Arrow crossing boundary */}
            <path d="M300 155 L300 80" stroke="#dc2626" strokeWidth="2" fill="none" markerEnd="url(#bleed-arrow)" />

            {/* Warning labels */}
            <text x="300" y="100" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#dc2626">AI "extracts" → AI "assesses"</text>
            <text x="300" y="112" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#dc2626">Boundaries blur silently</text>
          </motion.g>

          {/* Warning icon */}
          <motion.g
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <circle cx="360" cy="50" r="12" fill="#dc2626" />
            <text x="360" y="55" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">!</text>
          </motion.g>
        </svg>

        <p className="text-center text-xs text-foreground/60 mt-4">
          When execution-layer activities silently expand into judgment territory, accountability doesn't follow.
        </p>
      </div>
    </motion.div>
  );
}
