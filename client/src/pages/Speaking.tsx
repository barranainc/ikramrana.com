/*
 * SPEAKING — Updated content
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const topics = [
  {
    title: "Decision Architecture in AI Adoption",
    desc: "How AI reorganizes authority, judgment, and accountability inside organizations—and why most adoption strategies miss this entirely.",
  },
  {
    title: "Governance-by-Design",
    desc: "Why compliance must be engineered into system structure, not documented after deployment. What structural governance actually looks like.",
  },
  {
    title: "The Judgment Preservation Imperative",
    desc: "Why \"human in the loop\" isn't a solution and what to build instead. The structural framework for protecting professional judgment.",
  },
  {
    title: "Operational Coherence",
    desc: "How growing organizations can avoid tool proliferation entropy and build coherent AI-augmented workflows.",
  },
];

export default function Speaking() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Engagements</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Speaking</h1>
          <p className="text-lg text-slate-text leading-relaxed">I speak about what actually breaks when organizations adopt AI without thinking about decision architecture—and how to see those breaks before they become crises.</p>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Topics</h2>
          <div className="space-y-4">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-border bg-card p-6 rounded-xl hover:border-electric/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Mic className="w-4 h-4 text-electric mt-1.5 shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{topic.title}</h3>
                    <p className="text-foreground/75 text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bios */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Bios</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-slate-dim mb-3">Short Bio (50 words)</h3>
              <p className="text-foreground/85 leading-relaxed border-l-4 border-electric pl-6">
                Ikram Rana writes about decision architecture in AI adoption—how organizations structure authority, preserve judgment, and embed compliance when automation enters operational workflows. His Three-Layer Model separates execution, judgment, and compliance as distinct structural concerns. He argues that AI adoption is fundamentally a reorganization of accountability.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-slate-dim mb-3">Long Bio (150 words)</h3>
              <div className="text-foreground/85 leading-relaxed border-l-4 border-burgundy pl-6 space-y-4">
                <p>
                  Ikram Rana is a writer and thinker focused on decision architecture in AI adoption. His work examines how authority, accountability, and validation get structured when AI enters an organization's operating system—and what breaks when that structure is missing.
                </p>
                <p>
                  His Three-Layer Model separates execution, judgment, and compliance as distinct structural layers, providing organizations with a framework for understanding where AI helps, where it creates risk, and where the boundaries must be explicit. He advocates for governance-by-design—the principle that compliance must be engineered into system architecture rather than documented after deployment.
                </p>
                <p>
                  With 15+ years across AI implementation, software development, and cybersecurity, Rana brings both technical depth and strategic perspective to the question of how organizations can adopt AI without losing accountability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Booking CTA */}
        <motion.div {...fadeUp} className="mt-14 p-8 rounded-2xl border border-border bg-card flex flex-col sm:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-full border-2 border-electric/30 flex items-center justify-center shrink-0">
            <span className="font-serif text-2xl font-bold text-electric">IR</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Book Ikram Rana</h3>
            <p className="text-foreground/75 text-sm mb-4">
              Available for keynotes, panels, and executive briefings on AI decision architecture and governance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-white font-sans font-semibold text-sm tracking-wide rounded-lg no-underline hover:opacity-90 transition-opacity"
            >
              Inquire About Speaking <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
