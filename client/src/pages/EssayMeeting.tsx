/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: The Meeting That Replaced the System
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

export default function EssayMeeting() {
  useHead("The Meeting That Should Have Been a System", "Most recurring meetings exist because a process is broken. If the same decisions come up every week, you need a system, not another calendar invite.");
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            The Meeting That Replaced the System
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            In many organizations, the coordination meeting exists because the system doesn't coordinate. People gather weekly to reconcile information that should flow automatically, to make decisions that should be structurally assigned, to resolve conflicts that should be architecturally prevented.
          </p>
          <span className="font-mono text-xs text-slate-dim">6 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Diagnostic Value of Meetings</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When I map an organization's workflows, I pay close attention to their recurring meetings. Not because meetings are inherently problematic — some are genuinely valuable — but because certain types of meetings are diagnostic. They reveal where the system has failed to do what systems are supposed to do.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The coordination meeting is the most common example. It appears in almost every organization I work with. It has different names — the weekly sync, the status update, the alignment call — but it serves the same function: it is where people manually do what the system should do automatically.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When I see a recurring coordination meeting, I see a system design failure. The meeting is the workaround.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">What the Meeting Is Actually Doing</h2>
          <p className="text-foreground/85 leading-relaxed mb-4">
            Coordination meetings typically perform one or more of the following functions:
          </p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Information reconciliation: sharing updates that should be visible in a shared system.",
              "Decision assignment: figuring out who is responsible for something that should already have a clear owner.",
              "Conflict resolution: resolving disagreements between teams or systems that should be architecturally prevented.",
              "Status reporting: communicating progress that should be tracked automatically.",
              "Priority alignment: deciding what to work on next when the system doesn't make priorities clear.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Each of these functions represents a gap in the system. Information that isn't visible. Ownership that isn't assigned. Conflicts that aren't prevented. Progress that isn't tracked. Priorities that aren't clear.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            The meeting isn't the problem. The meeting is the symptom. The problem is the system that makes the meeting necessary.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why AI Doesn't Automatically Fix This</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Many organizations believe that adding AI tools will eliminate coordination overhead. Sometimes it does. More often, it doesn't — because the coordination overhead exists due to structural gaps in the system, and AI tools don't automatically fill structural gaps.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            An AI tool that generates a status report doesn't eliminate the meeting if the meeting exists because people don't trust the status report. An AI tool that assigns tasks doesn't eliminate the meeting if the meeting exists because ownership is genuinely ambiguous. An AI tool that surfaces conflicts doesn't eliminate the meeting if the meeting exists because conflicts require human negotiation to resolve.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The meeting is sustained by the underlying structural problem. Fix the structural problem, and the meeting becomes unnecessary. Add AI on top of the structural problem, and you have a faster version of the same dysfunction.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Auditing Your Meetings</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Before implementing AI in any workflow, audit the meetings that surround it. For each recurring meeting, ask: what function is this meeting performing? Then ask: why isn't the system performing that function?
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The answers will reveal the structural gaps that need to be addressed before — or alongside — any AI implementation. If information isn't visible, the system needs better data flows. If ownership is ambiguous, the system needs clearer decision architecture. If conflicts are frequent, the system needs better constraint design.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When the structural gaps are addressed, the coordination meeting either disappears or transforms. Instead of a workaround, it becomes what meetings should be: a space for genuinely collaborative work that requires human presence — not a substitute for a system that doesn't work.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/solutions/automation-efficiency" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Solution</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Automation & Efficiency</h3>
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
