/*
 * GOVERNANCE-BY-DESIGN — Updated content
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GovernanceSpectrumDiagram from "@/components/diagrams/GovernanceSpectrumDiagram";
import ComplianceDebtDiagram from "@/components/diagrams/ComplianceDebtDiagram";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function GovernanceByDesign() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Application</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Governance-by-Design</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">Governance is not paperwork after deployment. It is a design property of the system itself. This page explains how to embed compliance as architecture—so your system is compliant by construction, not just by intention.</p>
          <span className="font-mono text-xs text-slate-dim">12 min read · 2,400 words</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Governance Misconception</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Most organizations think they have governance because they have governance <em>documents</em>. They have policies. They've done training. They can point to documentation that describes how AI should be used.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Then you look at the system. The AI drafting tool has no logging. The approval workflow allows anyone to approve anything. The escalation criteria exist on paper but the system doesn't enforce them.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">This is policy theater.</strong> The documents exist. The governance doesn't.</p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl border-l-4 border-l-burgundy border border-border bg-burgundy/5 p-7 my-8">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-burgundy block mb-3">What Policy Theater Looks Like</span>
          <p className="text-foreground/85 leading-relaxed mb-4">A regulated professional services firm has a 35-page AI usage policy. It specifies that "senior practitioners must review all AI-generated client communications." It defines complexity tiers. It describes approval workflows.</p>
          <p className="text-foreground/85 leading-relaxed mb-4">In practice: The AI generates drafts. Junior staff send them to clients. The system logs "draft created" and "email sent." There is no record of who reviewed the draft, whether they were "senior," what complexity tier the matter fell into, or what they actually evaluated.</p>
          <p className="text-foreground/85 leading-relaxed">The policy says governance exists. The system has no governance.</p>
        </motion.div>

        {/* GOVERNANCE SPECTRUM DIAGRAM */}
        <motion.div {...fadeUp} className="my-12">
          <GovernanceSpectrumDiagram />
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Governance as Architecture</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Governance-by-design means building constraints and accountability into the system itself. The system doesn't just document what should happen—it enforces what must happen.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">The Four Pillars</h3>
          {[["1. Decision Rights","The system knows who is authorized to do what—and enforces it. This isn't just access control. It's decision authorization: who can approve, who can override, who can escalate, who can finalize."],["2. Traceability","Every significant action creates a record: what happened, when, by whom, based on what information. The record is created automatically—logging doesn't depend on humans remembering."],["3. Auditability","The trace record is structured for review. You can query it. You can reconstruct sequences of events. Logs are immutable—once recorded, they cannot be altered."],["4. Escalation","The system routes uncertainty to appropriate decision-makers automatically. Escalation triggers are defined and enforced."]].map(([t,d],i)=>(<div key={i} className="mb-6"><h4 className="font-serif text-lg font-semibold text-foreground mb-2">{t}</h4><p className="text-foreground/85 leading-relaxed">{d}</p></div>))}
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Minimum Viable Controls</h2>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-6">1. Comprehensive Logging</h4>
          <ul className="space-y-2 mb-6 pl-0">{["Every AI output logged with model/version, timestamp, input summary, confidence score","Every human action logged with verified identity, timestamp, action type, context","Every approval logged with approver, what was approved, any modifications","Every client communication logged with content, sender, recipient, linkage to decisions"].map((item,i)=>(<li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>))}</ul>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-6">2. Approval Gates</h4>
          <ul className="space-y-2 mb-6 pl-0">{["Judgment-layer decisions require explicit human approval through defined workflow","Approver identity is verified (not just \"someone clicked approve\")","Approval criteria are defined (what is the approver certifying?)","Approval gates cannot be bypassed without leaving audit trail"].map((item,i)=>(<li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>))}</ul>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-6">3. Escalation Triggers</h4>
          <ul className="space-y-2 mb-6 pl-0">{["Complexity indicators automatically flag cases for elevated review","Risk patterns trigger routing to senior staff or compliance review","Uncertainty markers trigger human evaluation","Escalation routing is enforced by system, not dependent on human judgment"].map((item,i)=>(<li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>))}</ul>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-6">4. Reconstruction Capability</h4>
          <ul className="space-y-2 mb-6 pl-0">{["Any significant decision can be fully reconstructed within 24 hours","Reconstruction includes all inputs, AI outputs, human evaluations, approvals","Reconstruction is tested regularly (not just assumed to work)"].map((item,i)=>(<li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span>{item}</span></li>))}</ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Implementation Approach</h2>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Start with Requirements, Not Features.</strong> Before building or buying any AI capability, define the governance requirements.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Make Governance Invisible to Users.</strong> The best governance systems are ones people don't notice. If governance feels like extra work, people will find workarounds.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Build for Adversarial Review.</strong> When designing logs and audit trails, imagine a hostile reviewer examining them.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Test Regularly.</strong> Pick random cases and reconstruct them. Verify escalation triggers are functioning.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Recognizing Policy Theater</h2>
          {[["Warning Sign 1: Governance Exists Only in Documents","You have policies and procedures—but when you look at the actual system, none of it is enforced."],["Warning Sign 2: Logging is Incomplete","You can't reconstruct decisions because the logs don't exist or don't capture enough information."],["Warning Sign 3: Escalation Depends on Human Attention","Complex cases should be routed differently, but the system doesn't do this automatically."],["Warning Sign 4: Approval is a Checkbox","The system requires \"approval,\" but approval is clicking a button with no criteria, no verification, no meaningful engagement."]].map(([t,d],i)=>(<div key={i} className="mb-6"><h4 className="font-serif text-lg font-semibold text-foreground mb-2">{t}</h4><p className="text-foreground/85 leading-relaxed">{d}</p></div>))}
        </motion.div>

        {/* COMPLIANCE DEBT DIAGRAM */}
        <motion.div {...fadeUp} className="my-12">
          <ComplianceDebtDiagram />
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Executive Case</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">For executives, the governance question is fundamentally a risk question: How much liability are you accumulating while moving fast?</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Every day you operate AI systems without proper governance, you're making decisions that can't be explained, automating judgments that can't be defended, creating records that won't withstand scrutiny.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The organizations that succeed with AI in the long term are the ones that invest in governance architecture early.</p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">The question isn't whether you'll pay for governance architecture. It's whether you'll pay now, when it's a project, or later, when it's a crisis.</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/the-model" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Three-Layer Model</h3>
            <p className="text-sm text-slate-text mb-3">Governance maps to the compliance foundation layer.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">See the Model <ArrowRight size={14} /></span>
          </Link>
          <Link href="/essays/governance" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Essay</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Governance is Architecture, Not Paperwork</h3>
            <p className="text-sm text-slate-text mb-3">The condensed argument.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
