/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: Judgment Is Not a Backup System
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

export default function EssayJudgmentBackup() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Judgment Is Not a Backup System
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            Organizations often treat human judgment as the fallback when AI fails. This is backwards. Human judgment should be the primary system for decisions that require it — not a safety net for when automation breaks down.
          </p>
          <span className="font-mono text-xs text-slate-dim">8 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Inversion Problem</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The standard model of AI implementation places automation at the center and human judgment at the periphery. The AI handles the volume. Humans handle the exceptions. The AI is the primary system. Humans are the backup.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This model is intuitive. It reflects the efficiency logic that drives most AI adoption: automate what can be automated, reserve human time for what can't. But it contains a structural error that becomes visible over time.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When judgment is positioned as a backup, it atrophies. People stop exercising it because the system rarely asks for it. The skills that make human judgment valuable — the ability to recognize novel situations, to weigh competing considerations, to make decisions under genuine uncertainty — are skills that require regular practice to maintain. When the system handles 95% of cases automatically, the humans in the system get very little practice.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Atrophy Curve</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The atrophy curve is predictable. In the first months after AI implementation, human reviewers are still sharp. They've been doing the work manually until recently. Their judgment is calibrated. They catch errors. They make good decisions on the exceptions.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Over the following year, the volume of manual work decreases. The reviewers handle fewer cases. Their calibration drifts. They become less confident in their own judgment because they exercise it less frequently. They begin to defer to the AI's outputs even when they have doubts, because the AI has been right so often that questioning it feels presumptuous.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            By year two, the humans in the system are no longer functioning as genuine reviewers. They are functioning as approvers — clicking through the AI's outputs with a speed and confidence that has no basis in actual evaluation. The backup system has degraded to the point where it can no longer perform its backup function.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            A backup system that is never exercised is not a backup system. It is a false sense of security. When the primary system fails and the backup is needed, the backup fails too.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Designing for Judgment Preservation</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The alternative is to design AI systems that preserve and develop human judgment rather than replacing it. This requires a different model: one where AI augments human decision-making rather than substituting for it.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-4">Judgment preservation requires several design choices:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Deliberate exposure: humans should regularly encounter the full range of case types, including the easy ones, to maintain calibration — not just the exceptions.",
              "Explanation requirements: for consequential decisions, humans should be required to articulate their reasoning, not just click approve. This forces genuine engagement.",
              "Disagreement mechanisms: the system should make it easy — and safe — for humans to disagree with AI outputs. Disagreement data is valuable for system improvement.",
              "Skill development: organizations should invest in developing the specific judgment skills that AI cannot replicate, not just the operational skills that AI is replacing.",
              "Volume calibration: the volume of cases routed to human review should be calibrated to maintain skill, not minimized to reduce cost.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Long-Term Argument</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Organizations that preserve human judgment alongside AI automation build a compounding advantage. Their humans get better at the decisions that matter most — the novel situations, the high-stakes calls, the cases where pattern matching is insufficient. Their AI systems get better because they receive high-quality feedback from humans who are genuinely engaged.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Organizations that treat judgment as a backup system accumulate a compounding liability. Their humans get worse at the decisions that matter most. Their AI systems receive low-quality feedback from humans who are rubber-stamping. When the system encounters a genuinely novel situation — a regulatory change, a market disruption, a crisis — the organization discovers that neither the AI nor the humans are equipped to handle it well.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Judgment is not a backup system. It is the primary system for the decisions that define organizational quality. AI should be designed to support it, not to replace it.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/essays/judgment" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Related Essay</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Judgment Preservation Imperative</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read more <ArrowRight size={14} /></span>
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
