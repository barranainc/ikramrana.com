/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: Automation Reveals Process Debt
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

export default function EssayProcessDebt() {
  useHead("Process Debt Is More Expensive Than Code", "Technical debt gets attention. Process debt does not. But broken workflows cost more than broken code because they compound across every team member.");
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Automation Reveals Process Debt
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            When you automate a broken process, you get a faster broken process. The most common outcome of AI implementation is that organizations discover how much process debt they've accumulated — and how much of their operation depended on informal human judgment to compensate for it.
          </p>
          <span className="font-mono text-xs text-slate-dim">7 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">What Process Debt Is</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Process debt is the accumulated gap between how an organization's processes are documented and how they actually work. It builds up over time as organizations grow, adapt, and improvise. Exceptions become standard practice. Workarounds become permanent. Informal knowledge fills gaps that formal documentation doesn't cover.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            In a human-operated workflow, process debt is often invisible. Experienced staff know the workarounds. They know which edge cases need special handling. They know who to call when the documented process doesn't cover the situation. The process works — not because it's well-designed, but because the humans running it are compensating for its gaps.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When you introduce AI, the compensation disappears. The AI follows the documented process. It doesn't know the workarounds. It doesn't know the edge cases. It doesn't know who to call. The process debt becomes visible — suddenly, urgently, and at scale.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Discovery Moment</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The discovery moment typically arrives a few weeks into an AI implementation. The system is processing volume. The metrics look reasonable. Then the exceptions start accumulating. Cases that experienced staff would have handled without a second thought are being routed for human review — because the AI correctly identifies that the documented process doesn't cover them.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The organization's response is usually to add more exceptions to the AI's handling rules. This is the wrong response. It treats the symptom — the AI's inability to handle the exception — rather than the cause — the undocumented process that the exception represents.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The right response is to use the exception as a signal. Every exception the AI can't handle is a piece of process debt that has been made visible. It is an opportunity to document, standardize, and improve the process — not just to patch the AI's rules.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            AI is a diagnostic tool as much as it is a productivity tool. The exceptions it surfaces are a map of your process debt. Most organizations patch the map instead of fixing the territory.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Using Automation as a Process Audit</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The most effective approach treats AI implementation as a process audit. Before the system goes live, map the process in detail — not as it's documented, but as it actually works. Interview the people who run it. Ask about the exceptions. Ask about the workarounds. Ask about the cases that don't fit the standard flow.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-4">This audit will reveal three categories of process debt:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Documentable debt: exceptions and workarounds that can be formalized and built into the automated process.",
              "Judgment debt: cases that require genuine human judgment and should be explicitly routed to human review — not as failures, but as designed escalations.",
              "Structural debt: process gaps that reveal underlying organizational problems — unclear ownership, conflicting policies, missing data — that need to be resolved before automation can work.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Addressing process debt before automation is more work upfront. It is significantly less work than addressing it after the system is live, at scale, with exceptions accumulating and staff frustrated.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The organizations that get the most value from AI are not the ones that implement fastest. They are the ones that use the implementation process to clean up the process debt that was slowing them down before the AI arrived.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/solutions/ai-sprint" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Solution</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">AI Implementation Sprint</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">See how <ArrowRight size={14} /></span>
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
