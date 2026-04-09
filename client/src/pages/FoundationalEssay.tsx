/*
 * FOUNDATIONAL ESSAY — Updated content
 * Full long-form essay with TOC, scenario boxes, example boxes, principle box
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AutomationCreepDiagram from "@/components/diagrams/AutomationCreepDiagram";
import DecisionFlowDiagram from "@/components/diagrams/DecisionFlowDiagram";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function FoundationalEssay() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-600 block mb-4">Foundational Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Where I Stand on AI Adoption, Operational Excellence, and Regulatory Integrity
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            AI adoption is not a software project. It is a structural reorganization of decision systems inside your organization. Most conversations focus on capability. I focus on architecture—because that's where organizations actually fail.
          </p>
          <span className="font-mono text-xs text-slate-dim">15 min read · 3,200 words</span>
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 p-7 rounded-2xl border border-border bg-card">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-slate-dim block mb-4">Contents</span>
          <ul className="space-y-0">
            {["The Problem Nobody Talks About","The Architectural Failure of AI Adoption","The Three-Layer Model","The Structural Risk of Blurred Layers","Failure Patterns I See Repeatedly","The Counter-Arguments","My Position"].map((item, i) => (
              <li key={i} className="border-b border-border last:border-b-0 py-2.5"><span className="text-[15px] text-slate-text">{item}</span></li>
            ))}
          </ul>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Problem Nobody Talks About</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Every week, I talk to founders and operations leaders at growing organizations—companies doing $5M to $50M in revenue, scaling fast, trying to stay competitive. They all have the same story.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">They bought the AI tools. They integrated the automation. Their teams are "more productive." And yet something is wrong. Decisions take longer. Nobody knows who's responsible for what. The CEO is CC'd on everything because the system can't figure out when to escalate. Client complaints are up. The compliance team is nervous.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">When I ask them to show me the decision trail for a specific client outcome, they can't. When I ask who owns the AI-generated recommendation that went to a client, they hesitate. When I ask what happens when the AI is wrong, they describe a process that exists on paper but not in the system.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">This is the problem nobody talks about.</strong> Not because it's hidden, but because it doesn't fit the narrative. The narrative says AI makes you faster, more efficient, more competitive. The narrative doesn't mention that speed without structure creates liability, that efficiency without accountability creates risk, that automation without architecture creates chaos.</p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-7 my-8">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-burgundy font-semibold block mb-4">What This Looks Like on Tuesday Morning</span>
          <p className="text-foreground/90 leading-relaxed mb-4">A client calls, upset about advice they received. Your team pulls up the file. The AI drafted the initial assessment. Someone "reviewed" it—but the system doesn't log who, or what they actually reviewed, or whether they changed anything. The final document went out. The client acted on it. Now there's a problem.</p>
          <p className="text-foreground/90 leading-relaxed mb-4">Legal asks: Who made this decision? The honest answer is: nobody knows. The system made a recommendation. A human clicked approve. But was that approval a meaningful professional judgment, or just a rubber stamp on an AI output that looked reasonable?</p>
          <p className="text-foreground/85 leading-relaxed mb-0">This isn't a technology failure. This is an architecture failure. And it's happening in organizations everywhere, right now, invisibly—until it becomes visible in the worst possible way.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Architectural Failure of AI Adoption</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The core problem is simple to state and hard to fix: <strong className="text-foreground">AI tools are being integrated into workflows that were never formally mapped.</strong></p>
          <p className="text-foreground/85 leading-relaxed mb-5">Most organizations don't have explicit decision architecture. They have habits, conventions, and tribal knowledge about how things get done. These patterns evolved organically over years. They work—sort of—because humans are adaptable and can fill gaps that the system doesn't address.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Then AI enters the picture. Suddenly, tasks that required human judgment are being performed by systems that have no judgment—only pattern matching. Tasks that required professional discretion are being automated without anyone defining what "discretion" meant in the first place.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The organization adopts automation without clarifying:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[["Who owns the decision","when the AI is wrong—not theoretically, but operationally, with name and role attached"],["Where human judgment is actually required","—not \"somewhere in the process\" but at specific, defined checkpoints"],["How exceptions escalate","when the system encounters something it wasn't designed for"],["What constitutes a compliance failure","versus a feature—because automation will optimize for what you measure"],["How decisions get reconstructed","after the fact—because regulators, courts, and unhappy clients will ask"]].map(([b,r],i)=>(
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0"/><span><strong className="text-foreground">{b}</strong>{r}</span></li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">When these questions remain undefined, automation does not create operational excellence. It creates chaos with a faster clock speed.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Three-Layer Model</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">After years of watching AI adoption succeed and fail across regulated industries, I've developed a framework for thinking about this clearly. I call it the Three-Layer Model, and it's the foundation of everything else I write about.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The premise is simple: every AI-enabled workflow operates across three distinct layers, and most failures happen because organizations blur these layers together without realizing it.</p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card p-8 md:p-12 my-8">
          <p className="text-center font-mono text-[11px] tracking-[0.2em] uppercase text-slate-dim mb-8">The Three-Layer Model of AI Systems</p>
          <div className="max-w-[520px] mx-auto space-y-0.5">
            <div className="flex"><div className="w-12 flex items-center justify-center font-mono text-xs font-bold rounded-l-lg bg-electric/20 text-electric">01</div><div className="flex-1 p-5 rounded-r-lg bg-electric/8 border border-electric/20 border-l-0"><p className="font-bold text-[15px] text-electric mb-1">Execution Layer</p><p className="font-mono text-[13px] text-slate-text/75">AI belongs here → Drafting, routing, extraction, data movement</p></div></div>
            <div className="flex"><div className="w-12 flex items-center justify-center font-mono text-xs font-bold rounded-l-lg bg-burgundy/20 text-burgundy">02</div><div className="flex-1 p-5 rounded-r-lg bg-burgundy/8 border border-burgundy/20 border-l-0"><p className="font-bold text-[15px] text-burgundy mb-1">Judgment Layer</p><p className="font-mono text-[13px] text-slate-text/75">Humans own this → Decisions, exceptions, professional discretion</p></div></div>
            <div className="flex"><div className="w-12 flex items-center justify-center font-mono text-xs font-bold rounded-l-lg bg-emerald-500/20 text-emerald-600">03</div><div className="flex-1 p-5 rounded-r-lg bg-emerald-500/8 border border-emerald-500/20 border-l-0"><p className="font-bold text-[15px] text-emerald-600 mb-1">Compliance Foundation</p><p className="font-mono text-[13px] text-slate-text/75">Embedded by design → Traceability, audit trails, escalation paths</p></div></div>
          </div>
          <div className="text-center mt-7 pt-6 border-t border-border"><p className="text-[13px] text-slate-dim">Compliance is the foundation that constrains the entire system—not a check you add at the end.</p></div>
        </motion.div>

        <motion.div {...fadeUp}>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-10">Layer 1: Execution</h3>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">What it is:</strong> Repeatable tasks that convert inputs to outputs without requiring professional discretion. These are tasks where the "right answer" can be defined in advance, where consistency is more valuable than creativity.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">AI excels here.</strong> Routing documents to the right queue. Extracting fields from forms. Drafting standard responses. Summarizing long documents. Moving data between systems.</p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl border border-electric/20 bg-electric/5 p-7 my-8">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-electric font-semibold block mb-4">Example: Immigration Consulting</span>
          <p className="text-foreground/90 leading-relaxed mb-4">An immigration consulting firm receives hundreds of intake forms per month. The AI reads each form, extracts key fields, validates formatting, flags obvious errors, and routes the file to the appropriate consultant based on case type.</p>
          <p className="text-foreground/85 leading-relaxed mb-0">This is pure execution. The rules are definable. The outputs are verifiable. No professional judgment is required.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-10">Layer 2: Judgment</h3>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">What it is:</strong> Decisions that require context, discretion, exception handling, and professional responsibility. These are tasks where the "right answer" depends on factors that can't be fully specified in advance.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Humans must remain the authority here.</strong> AI may support—by surfacing relevant information, flagging patterns, suggesting options—but it must not silently assume decision ownership.</p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl border border-electric/20 bg-electric/5 p-7 my-8">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-electric font-semibold block mb-4">Example: Immigration Consulting</span>
          <p className="text-foreground/90 leading-relaxed mb-4">The same firm has a complex case: a client with a criminal inadmissibility issue, a job offer that might qualify for LMIA exemption, and a family situation that creates urgency. The AI has surfaced all the relevant regulations. But the <em>decision</em>—which pathway to recommend—requires professional judgment.</p>
          <p className="text-foreground/85 leading-relaxed mb-0">If they simply click "approve" on an AI-generated pathway without this judgment, they are not practicing their profession. They are rubber-stamping an algorithm.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-10">Layer 3: Compliance Foundation</h3>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">What it is:</strong> The system properties that preserve regulatory integrity—traceability, auditability, decision rights, and escalation paths. This is not a "layer" in the workflow sense. It is the <em>foundation</em> that constrains how the other two layers operate.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Compliance is architecture, not audit.</strong> If you think of compliance as something you check at the end—a quarterly review, an annual audit—you have already failed. Compliance must be embedded in the system from the start.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Structural Risk of Blurred Layers</h2>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Almost every organization I work with has already blurred these layers</strong>—and they don't realize it until something goes wrong.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Stage 1: AI as Assistant.</strong> The organization introduces AI as a drafting tool. Everyone understands that humans make the real decisions.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Stage 2: AI as Recommender.</strong> The AI gets better. It starts making "recommendations" that are almost always right. Reviews get faster.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Stage 3: AI as Decision-Maker.</strong> Nobody formally decides this. It happens gradually. The AI recommendation goes out without meaningful review.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Stage 4: Accountability Collapse.</strong> Something goes wrong. The organization discovers that they can't explain who made the decision.</p>
        </motion.div>

        {/* AUTOMATION CREEP DIAGRAM */}
        <motion.div {...fadeUp} className="my-12">
          <AutomationCreepDiagram />
        </motion.div>

        <motion.div {...fadeUp} className="my-8 py-7 px-8 border-l-[3px] border-electric bg-electric/5 rounded-r-2xl">
          <p className="text-foreground/95 text-lg leading-relaxed italic mb-0">Professional integrity is not lost through malicious intent. It erodes through architectural ambiguity—the slow, invisible drift from "AI assists my judgment" to "I approve AI's judgment" to "AI decides, I process."</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Failure Patterns I See Repeatedly</h2>
          <p className="text-foreground/85 leading-relaxed mb-8">After working with dozens of organizations on AI adoption, I've identified specific patterns that predict failure.</p>
          {[
            {t:"Pattern 1: The Undefined Review",s:"Your process includes \"human review\" of AI outputs, but nobody has defined what the review is supposed to evaluate.",h:"Reviews are rubber stamps. People scroll through AI outputs looking for obvious errors.",f:"Define specific review criteria. Set minimum review times. Log what reviewers actually looked at."},
            {t:"Pattern 2: The Missing Escalation",s:"Your system has no defined triggers for when AI outputs should be escalated to senior staff.",h:"Everything gets the same level of review (minimal), regardless of complexity or risk.",f:"Build escalation triggers into the system. Define complexity indicators. Route high-risk cases differently."},
            {t:"Pattern 3: The Invisible Override",s:"Humans can override AI recommendations, but the system doesn't log overrides or require explanations.",h:"You have no idea when human judgment is being exercised versus when AI is running unquestioned.",f:"Log every override. Require brief explanations. Track override patterns."},
            {t:"Pattern 4: The Compliance Theater",s:"You have AI policies, you've done training, you have documents—but the system itself doesn't enforce any of it.",h:"Compliance exists on paper. In practice, people do whatever is fastest.",f:"Embed compliance in the system. If senior review is required, the system should enforce it."},
            {t:"Pattern 5: The Reconstruction Failure",s:"When asked to explain a specific past decision, your team has to manually piece together information from multiple systems.",h:"You don't have an audit trail. You have fragments.",f:"Build comprehensive logging from day one. Make reconstruction trivial, not investigative."},
          ].map((p,i)=>(
            <div key={i} className="mb-8"><h4 className="font-serif text-lg font-semibold text-foreground mb-3">{p.t}</h4><p className="text-foreground/85 leading-relaxed mb-2"><strong className="text-foreground">Symptom:</strong> {p.s}</p><p className="text-foreground/85 leading-relaxed mb-2"><strong className="text-foreground">What's actually happening:</strong> {p.h}</p><p className="text-foreground/85 leading-relaxed mb-0"><strong className="text-foreground">The fix:</strong> {p.f}</p></div>
          ))}
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Counter-Arguments (And Why They're Wrong)</h2>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-8">"AI judgment is inevitable—we should embrace it."</h4>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">My response:</strong> Maybe. Eventually. But "eventually" isn't now, and the transition period is where the liability lives. The question isn't whether AI will ever be trustworthy for judgment. The question is whether your organization can survive the accountability gap while we figure that out.</p>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-8">"We don't have time for all this structure—we need to move fast."</h4>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">My response:</strong> You're right that building architecture takes time. You're wrong that skipping it saves time. What you're actually doing is borrowing time from the future—accumulating "compliance debt" that will come due when something goes wrong.</p>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3 mt-8">"Our AI is really accurate—these risks don't apply to us."</h4>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">My response:</strong> Accuracy is not the issue. An AI that's 98% accurate is still wrong 2% of the time—and in high-stakes domains, that 2% is where the lawsuits come from.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          {/* DECISION FLOW DIAGRAM */}
          <div className="my-12">
            <DecisionFlowDiagram />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">My Position</h2>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-7 my-8">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-600 font-semibold block mb-4">Core Principle</span>
          <p className="text-foreground text-lg leading-relaxed mb-0"><strong>Automation belongs in execution. Judgment belongs with humans. Compliance must be the foundation—embedded in architecture, not bolted on afterward.</strong></p>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="text-foreground/85 leading-relaxed mb-5">This is not anti-AI. I build AI systems. I believe AI will transform professional services for the better. But I also believe that transformation must be <em>structured</em>—that organizations must understand what they're changing before they change it.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">My goal is to help organizations see this choice before they've already made it.</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/model" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Three-Layer Model</h3>
            <p className="text-sm text-slate-text mb-3">Deep dive into each layer with implementation guidance.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
          </Link>
          <Link href="/governance" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Application</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Governance-by-Design</h3>
            <p className="text-sm text-slate-text mb-3">How to embed compliance as architecture.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
