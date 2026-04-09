/*
 * ESSAY: Why Buying More Software Makes Your Team Slower (Tool Proliferation Entropy)
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function EssayEntropy() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Why Buying More Software Makes Your Team Slower</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">Every new AI tool adds a dashboard, a handoff, and a validation gap. Organizations adopt faster than their decision architecture can absorb. Speed increases while clarity decreases.</p>
          <span className="font-mono text-xs text-slate-dim">8 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Paradox</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Your organization bought an AI tool to save time. Then another. Then a third. Each one promised efficiency. Each one delivered it—in isolation. But collectively, your team is drowning.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Every tool adds a dashboard to check, a handoff to manage, a data format to reconcile. The operations manager who used to spend her morning on client work now spends it reconciling outputs across four systems that don't talk to each other.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">This is tool proliferation entropy: the organizational chaos that results from adopting AI tools faster than decision architecture can absorb them.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">How It Happens</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The pattern is predictable. A department identifies a pain point. They find a tool that addresses it. The tool works well for that specific problem. Success is declared.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">But nobody asked: How does this tool's output connect to the next step in the workflow? Who validates the handoff? What happens when the tool's output conflicts with another system's data? Who owns the decision when two tools give different recommendations?</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Each tool optimizes a fragment. Nobody optimizes the whole. The fragments multiply until the organization is spending more time managing tools than doing work.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Symptoms</h2>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Dashboard fatigue:</strong> Staff check multiple systems daily, manually comparing outputs that should be integrated.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Manual reconciliation:</strong> Data from one tool must be manually entered or verified in another. Errors compound at each handoff.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Decision confusion:</strong> When tools give conflicting information, nobody knows which to trust. Decisions stall or default to the loudest voice.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Accountability gaps:</strong> When something goes wrong, the error trail crosses multiple systems. Nobody can reconstruct what happened.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Solution Isn't Fewer Tools</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The answer isn't to stop adopting AI. It's to adopt AI within a decision architecture that can absorb it. Before adding a tool, ask:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Where does this tool's output go next in the workflow?",
              "Who validates the handoff between this tool and the next step?",
              "How does this tool's data integrate with existing systems?",
              "Who owns the decision when this tool's output conflicts with another source?",
              "How do we log and audit what this tool does?",
            ].map((item,i)=>(
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">If you can't answer these questions, you're not ready for the tool. You're ready for architecture.</p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">The problem isn't that your tools don't work. It's that they don't work together. And "together" requires architecture, not just integration.</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/dictionary" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Definition</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Tool Proliferation Entropy</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">See Dictionary <ArrowRight size={14} /></span>
          </Link>
          <Link href="/essays" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">All Essays</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Back to Essays</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">View all <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
