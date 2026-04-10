/*
 * ESSAY: The Judgment Preservation Imperative
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

export default function EssayJudgment() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">The Judgment Preservation Imperative</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">Why "human in the loop" isn't a solution—it's a question. The real challenge isn't keeping humans involved. It's defining what their involvement actually means.</p>
          <span className="font-mono text-xs text-slate-dim">8 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Comfortable Lie</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">"Don't worry—there's always a human in the loop." This is the most common reassurance in AI adoption. It's also the most dangerous.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The phrase implies that human oversight is functioning. That someone is genuinely evaluating AI outputs. That professional judgment is being exercised. That accountability is maintained.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">In practice, "human in the loop" often means: a human exists somewhere in the workflow who could theoretically intervene but has no defined criteria for intervention, no structured evaluation process, no minimum engagement requirements, and no way to demonstrate what they actually reviewed.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">What Judgment Actually Requires</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Professional judgment isn't just "looking at something." It's a structured cognitive process that requires:</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Context:</strong> Understanding the specific circumstances of this case—not just the data, but the situation around the data.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Criteria:</strong> Knowing what to evaluate and what "good" looks like for this type of decision.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Time:</strong> Sufficient time to actually think, not just glance. Complex decisions require proportional attention.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Authority:</strong> The power to change the outcome. If the human can't meaningfully alter the AI's recommendation, they're not exercising judgment—they're performing a ritual.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Erosion Pattern</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Judgment doesn't disappear overnight. It erodes through a predictable pattern:</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Stage 1: Genuine Review.</strong> The AI is new. Humans carefully evaluate every output. Override rates are meaningful. Judgment is real.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Stage 2: Calibrated Trust.</strong> The AI proves reliable. Humans review less carefully. This is rational—but the system doesn't adjust its oversight requirements.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Stage 3: Rubber Stamping.</strong> Review becomes perfunctory. Humans approve in seconds what should take minutes. The "loop" exists but judgment doesn't.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Stage 4: Invisible Automation.</strong> The approval step remains but nobody pretends it's review. The human is in the loop the way a speed bump is in the road—present but not meaningfully affecting the journey.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Preserving Judgment Structurally</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The solution isn't exhortation ("review more carefully!"). It's architecture. Build systems that make judgment visible, measurable, and enforceable:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Define what the human is supposed to evaluate for each decision type",
              "Set minimum engagement thresholds appropriate to decision complexity",
              "Log what humans actually do—not just that they clicked 'approve'",
              "Monitor override rates and review times as governance metrics",
              "Require documented reasoning for high-stakes decisions",
              "Test judgment quality through periodic case reviews",
            ].map((item,i)=>(
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">"Human in the loop" is not a governance strategy. It's a question that demands an answer: What is the human supposed to do, and how do you know they're doing it?</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/the-model" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Three-Layer Model</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">See the Model <ArrowRight size={14} /></span>
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
