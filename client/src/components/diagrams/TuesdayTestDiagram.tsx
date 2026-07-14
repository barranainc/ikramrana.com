/*
 * Tuesday Morning Test Diagnostic Diagram
 * Visual decision tree / checklist for governance testing
 */
import { motion } from "framer-motion";

const questions = [
  { q: "Who made this decision?", pass: "Named individual with authority", fail: "\"Someone\" or \"the system\"" },
  { q: "What information did they have?", pass: "Documented inputs and context", fail: "Unknown or reconstructed after the fact" },
  { q: "Why did they decide this way?", pass: "Recorded reasoning and criteria", fail: "\"It seemed right\" or no record" },
  { q: "Can you prove it?", pass: "Complete audit trail within 24hrs", fail: "Requires forensic investigation" },
];

export default function TuesdayTestDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-6 md:p-8">
        <div className="text-center mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-500">Diagnostic</span>
          <h3 className="font-serif text-xl font-bold text-foreground mt-1">The Tuesday Morning Test</h3>
          <p className="text-xs text-foreground/60 mt-1">On any random Tuesday morning, for any decision in your system...</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-white rounded-xl p-4 border border-blue-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-mono text-xs font-bold text-blue-600">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-base font-semibold text-foreground mb-2">{item.q}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-start gap-2 bg-emerald-50 rounded-lg p-2.5 border border-emerald-100">
                      <span className="text-emerald-500 text-xs mt-0.5">✓</span>
                      <span className="text-xs text-emerald-700 leading-relaxed">{item.pass}</span>
                    </div>
                    <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2.5 border border-red-100">
                      <span className="text-red-400 text-xs mt-0.5">✕</span>
                      <span className="text-xs text-red-700 leading-relaxed">{item.fail}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="inline-block bg-white rounded-xl px-6 py-3 border border-blue-200">
            <p className="font-mono text-xs text-foreground/70">
              If you can't answer all four → <span className="text-red-600 font-semibold">you don't have governance</span>
            </p>
            <p className="font-mono text-[10px] text-foreground/50 mt-1">You have hope.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
