/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: The 80% Trap
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

export default function EssayEightyPercent() {
  useHead("The Eighty Percent Problem", "Most AI tools handle the easy 80% of cases well. The remaining 20% is where business value, risk, and judgment concentrate. That is the real problem.");
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            The 80% Trap
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            AI handles 80% of cases well. The remaining 20% are the ones that matter most — edge cases, exceptions, high-stakes decisions. Organizations automate the 80% and assume the 20% will sort itself out. It doesn't.
          </p>
          <span className="font-mono text-xs text-slate-dim">7 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Seduction of the Majority</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When an AI system handles 80% of cases correctly and efficiently, it feels like a success. And in isolation, it is. Eighty percent of your volume is processed faster, cheaper, and more consistently than before. The metrics look good. The implementation is declared a win.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The trap is in what happens to the remaining 20%. These are the cases the AI flags as uncertain, routes to humans, or — more dangerously — handles incorrectly with high confidence. These are also, almost always, the cases that matter most: the high-value clients, the complex situations, the decisions with significant downstream consequences.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Organizations automate the 80% and assume the 20% will be handled by whoever is available. It won't. The 20% arrives without context, without the human judgment that used to catch it before it became a problem, and without a clear owner.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">What the 20% Actually Contains</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The 20% is not a random sample of your work. It is systematically the hardest, most consequential, and most relationship-sensitive portion of your operations.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-4">In most organizations, the 20% includes:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Clients or customers with unusual circumstances that don't fit standard patterns.",
              "Decisions with significant financial, legal, or reputational consequences.",
              "Situations where the right answer requires context that isn't in the data.",
              "Cases where two legitimate interpretations lead to different outcomes.",
              "Anything that requires genuine judgment rather than pattern matching.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This is not the work you want handled by whoever is available. This is the work that defines your organization's quality, reputation, and risk profile.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            Automating the easy cases doesn't reduce complexity. It concentrates complexity. The 20% that remains is harder than the 20% you used to handle — because you've removed the context that used to surround it.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Context Stripping Problem</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Before automation, the 20% arrived in context. A human who had been working through a queue of cases would encounter an edge case with the surrounding context still fresh — they knew what came before it, what patterns they'd been seeing, what the client relationship looked like. They could apply judgment informed by that context.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            After automation, the 20% arrives stripped of context. The AI handled everything else. The human receives only the exceptions — each one isolated, without the surrounding cases that would have provided orientation. The human is now making harder decisions with less context than before.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This is the hidden cost of the 80% win. You've made the easy work faster. You've made the hard work harder.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Designing for the 20%</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The solution is not to avoid automation. It is to design the automation with the 20% in mind from the start — not as an afterthought once the 80% is running.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-4">This requires answering several questions before implementation:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "What types of cases will the AI route to humans, and why?",
              "What context will the human need to handle each type of exception effectively?",
              "Who specifically owns each category of exception — not 'whoever is available'?",
              "What training does the exception handler need to make good decisions quickly?",
              "How do we ensure the exception handler has enough volume to maintain skill, but not so much volume that quality degrades?",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The 80% is the easy part of AI implementation. The 20% is where the real design work happens — and where most organizations stop designing.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/the-model" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Three-Layer Model</h3>
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
