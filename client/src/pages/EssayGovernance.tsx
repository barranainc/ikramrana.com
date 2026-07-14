/*
 * ESSAY: Governance is Architecture, Not Paperwork
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

export default function EssayGovernance() {
  useHead("Governance Is Architecture, Not Paperwork", "Governance is not a compliance checklist added after deployment. It is a structural property of the system itself. Build it in or pay for it later.");
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Governance is Architecture, Not Paperwork</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">The difference between compliance that's structural and compliance that's documentary. If the system permits non-compliant behavior, non-compliant behavior will occur.</p>
          <span className="font-mono text-xs text-slate-dim">7 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Document Trap</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Organizations love governance documents. They're tangible. They're demonstrable. When a regulator asks "do you have governance?", you can hand them a binder. When the board asks about AI risk, you can present a policy.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The problem is that documents describe intentions. Architecture creates constraints. And in the gap between intention and constraint, risk accumulates.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">A policy that says "senior staff must review AI outputs" is an intention. A system that routes AI outputs to senior staff, logs their review, tracks review duration, and blocks progression without documented evaluation—that's architecture.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why Documents Fail</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Document-based governance fails for predictable reasons:</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Documents don't enforce.</strong> A policy can say anything. If the system doesn't enforce it, the policy is aspirational, not operational.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Documents drift from reality.</strong> Policies are written at a point in time. Systems evolve. Within months, the policy describes a system that no longer exists.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Documents create false confidence.</strong> Having a policy makes people feel governed. The existence of the document substitutes for the existence of the control.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Documents can't be audited operationally.</strong> You can audit whether a document exists. You can't audit whether it's followed without looking at the system.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">What Architectural Governance Looks Like</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Architectural governance has specific characteristics that distinguish it from documentary governance:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Constraints are enforced by the system, not by human compliance with written rules",
              "Logging happens automatically—it doesn't depend on humans remembering to document",
              "Approval workflows are structural—they can't be bypassed without leaving a trail",
              "Escalation is triggered by conditions, not by human attention",
              "Audit capability is built in—reconstruction is a feature, not a research project",
            ].map((item,i)=>(
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">The key difference is enforcement. Architectural governance constrains the system. Document governance describes aspirations.</p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">If the system permits non-compliant behavior, non-compliant behavior will occur. Governance that isn't enforced isn't governance—it's documentation of good intentions.</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/governance" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Deep Dive</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Governance-by-Design</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read Full Guide <ArrowRight size={14} /></span>
          </Link>
          <Link href="/dictionary" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Definition</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Policy Theater</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">See Dictionary <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
