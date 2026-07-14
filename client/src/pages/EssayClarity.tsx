/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: Speed Is Not the Problem. Clarity Is.
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function EssayClarity() {
  useHead("Clarity as a Design Requirement", "Clarity is not a nice-to-have in AI systems. It is a structural requirement. Without it, your team cannot trust, verify, or improve what you build.");
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Speed Is Not the Problem. Clarity Is.
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            Every operator says the same thing: "We need to move faster." But when you map their workflows, speed isn't the bottleneck. Clarity is. Decisions stall because nobody knows who owns them. Tasks repeat because nobody knows what "done" means. AI makes this worse, not better.
          </p>
          <span className="font-mono text-xs text-slate-dim">7 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Speed Diagnosis</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            "We need to move faster" is the most common request I receive from operators. It is also, almost always, a misdiagnosis. When I map the workflows of organizations that feel slow, I rarely find that the bottleneck is execution speed. I find that the bottleneck is clarity.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Decisions stall not because people are slow to decide, but because nobody knows who is supposed to decide. Tasks repeat not because people are inefficient, but because nobody knows what the completed version looks like. Work gets stuck not because the work is hard, but because the handoff between one person and the next is undefined.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Speed is a symptom. Clarity is the cause. Fix the clarity problem and the speed problem often resolves itself.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">What Clarity Actually Means</h2>
          <p className="text-foreground/85 leading-relaxed mb-4">
            Organizational clarity has three components, each of which can be independently absent:
          </p>
          <ul className="space-y-4 mb-6 pl-0">
            {[
              { title: "Decision clarity", body: "For every decision that needs to be made, there is a defined owner — a specific person or role, not a team or committee — who has the authority and the information to make it." },
              { title: "Completion clarity", body: "For every task, there is a defined standard for what 'done' means. Not 'done enough' or 'done for now' — a specific, verifiable state that both the task owner and the task recipient can agree on." },
              { title: "Handoff clarity", body: "For every transition between people, teams, or systems, there is a defined protocol: what information transfers, in what format, to whom, by when, and what happens if the handoff fails." },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed list-none">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span><strong className="text-foreground">{item.title}:</strong> {item.body}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Most organizations have partial clarity in some areas and significant gaps in others. The gaps are where work slows down, duplicates, or disappears.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            AI executes faster on top of the same underlying ambiguity. If nobody knows who owns the decision before the AI, nobody will know who owns it after. The AI will just surface the ambiguity faster and at higher volume.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why AI Amplifies Clarity Problems</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When a human-operated workflow lacks clarity, humans compensate. They ask questions. They make judgment calls. They find the person who actually knows the answer. The workflow is slow and inefficient, but it eventually produces an output.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When an AI-operated workflow lacks clarity, the AI cannot compensate in the same way. It follows the defined process. When the process is ambiguous, the AI either makes an arbitrary choice (which may be wrong) or routes the case for human review (which recreates the bottleneck at higher volume). Either way, the clarity problem becomes more visible and more costly.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Organizations that implement AI on top of unclear processes discover this quickly. The AI surfaces every ambiguity that humans used to quietly resolve. The exception queue fills up. The human reviewers are overwhelmed. The implementation that was supposed to make things faster has made things slower.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Clarity Before Speed</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The sequence matters. Clarity must come before speed. Before implementing AI in any workflow, establish decision clarity (who owns each decision), completion clarity (what done looks like for each task), and handoff clarity (how work moves between people and systems).
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This work is not glamorous. It involves difficult conversations about ownership, accountability, and standards. It surfaces disagreements that have been avoided. It requires decisions that people have been deferring.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            But organizations that do this work before implementing AI find that the AI implementation is faster, smoother, and more effective than those that skip it. And they often find that the clarity work alone — before any AI is involved — has already made them significantly faster. The speed problem, it turns out, was a clarity problem all along.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/foundational-essay" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Foundational Essay</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Decision Architecture in AI Systems</h3>
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
