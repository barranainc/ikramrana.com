/*
 * THREE-LAYER MODEL — Updated content
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ThreeLayerDiagram from "@/components/diagrams/ThreeLayerDiagram";
import LayerBleedDiagram from "@/components/diagrams/LayerBleedDiagram";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function ThreeLayerModel() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Framework</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">The Three-Layer Model</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">A decision-systems framework for AI adoption: automate execution, protect judgment, embed compliance as the architectural foundation. This page explains each layer in depth, with implementation guidance and failure patterns to watch.</p>
          <span className="font-mono text-xs text-slate-dim">18 min read · 3,800 words</span>
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 p-7 rounded-2xl border border-border bg-card">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-slate-dim block mb-4">Contents</span>
          <ul className="space-y-0">{["Why This Model Exists","Layer 1: Execution","Layer 2: Judgment","Layer 3: Compliance Foundation","How the Layers Interact","Implementation Principles"].map((item,i)=>(<li key={i} className="border-b border-border last:border-b-0 py-2.5"><span className="text-[15px] text-slate-text">{item}</span></li>))}</ul>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* INTERACTIVE THREE-LAYER DIAGRAM */}
        <motion.div {...fadeUp} className="mb-12">
          <ThreeLayerDiagram />
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
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Why This Model Exists</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Most AI adoption conversations collapse three distinct concerns into one bucket: doing work, making decisions, and being accountable. Vendors talk about "AI-powered workflows" as if the technology handles all three seamlessly.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The reality is messier. AI is genuinely excellent at some things and genuinely dangerous at others. The things it's excellent at (execution) and the things it's dangerous at (judgment) are easy to confuse because they often look similar from the outside.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The Three-Layer Model exists to make these distinctions explicit. It gives organizations a vocabulary for talking about what AI should and shouldn't do.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Layer 1: Execution</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The execution layer is where AI genuinely shines. These are tasks that are <em>repeatable</em>, <em>definable</em>, and <em>verifiable</em>—where the goal is throughput and consistency rather than judgment and creativity.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Characteristics</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Definable:</strong> You can specify what "correct" looks like before the task runs.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Repeatable:</strong> The task is performed frequently, with similar inputs producing similar outputs.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Verifiable:</strong> You can check whether the output is correct without exercising professional judgment.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Examples Across Industries</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Immigration Consulting:</strong> Extracting data from intake forms, validating document formatting, routing cases by visa category, generating checklists, scheduling appointments.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Legal Services:</strong> Extracting key dates and parties from contracts, organizing discovery documents, generating first drafts of standard agreements.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Healthcare Administration:</strong> Processing insurance claims, extracting patient data from forms, scheduling based on availability, routing referrals.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Financial Services:</strong> Processing transaction data, generating account statements, routing customer inquiries, initial KYC data collection.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Implementation Guidelines</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Define success criteria explicitly.</strong> Before automating any task, write down what "correct" looks like.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Build validation into the workflow.</strong> AI outputs should be validated automatically wherever possible.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Monitor for drift.</strong> AI performance can degrade over time as inputs change.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Preserve human override.</strong> Even in pure execution tasks, humans should be able to override AI outputs.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Layer 2: Judgment</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The judgment layer is where human authority must be preserved. These are tasks that require <em>context</em>, <em>discretion</em>, and <em>accountability</em>.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Characteristics</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Contextual:</strong> The right answer depends on circumstances that vary case by case.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Discretionary:</strong> Reasonable professionals might reach different conclusions.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Accountable:</strong> Someone must stand behind the decision.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">How AI Should Support (Not Replace) Judgment</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Information Surfacing:</strong> AI can pull relevant information from large datasets. The human still evaluates.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Option Generation:</strong> AI can suggest possible approaches or flag considerations that might be overlooked.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Risk Flagging:</strong> AI can identify patterns that suggest elevated risk.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Consistency Checking:</strong> AI can compare current decisions against past decisions for similar cases.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Implementation Guidelines</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Make AI support explicit.</strong> Label AI-generated information clearly.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Require active decision.</strong> Design workflows that require explicit human judgment.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Log what humans actually do.</strong> Track whether humans modified AI suggestions.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Set minimum engagement thresholds.</strong> For high-stakes decisions, require minimum review times.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Layer 3: Compliance Foundation</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">The compliance layer is fundamentally different. It's not a set of tasks—it's a set of <em>properties</em> that the system must have.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Core Properties</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Traceability:</strong> Every significant action can be traced to its source.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Auditability:</strong> The trace record is structured for review. Logs are immutable.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Decision Rights:</strong> The system knows who is authorized to do what.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Escalation Paths:</strong> When the system encounters uncertainty, it routes to human judgment.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Minimum Viable Compliance Controls</h3>
          <ul className="space-y-3 mb-6 pl-0">
            {[["Decision Logging:","Every decision logged with timestamp, actor, inputs, and outcome"],["AI Output Tracking:","Every AI-generated output tagged with model/version and confidence score"],["Human Override Recording:","When humans modify AI outputs, changes logged with reasons"],["Approval Gates:","Judgment-layer decisions pass through explicit approval with verified identity"],["Escalation Triggers:","System automatically escalates when defined conditions are met"],["Reconstruction Capability:","Any significant decision can be fully reconstructed within 24 hours"],["Immutable Logs:","Audit logs are tamper-evident—cannot be modified after the fact"]].map(([b,r],i)=>(<li key={i} className="flex gap-3 text-foreground/85 leading-relaxed"><span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-2.5 shrink-0"/><span><strong className="text-foreground">{b}</strong> {r}</span></li>))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">How the Layers Interact</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">A typical workflow touches all three layers, and the interactions between layers are where many problems emerge.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Example: Client Intake Workflow</h3>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Execution:</strong> Client submits intake form. AI extracts data, validates formatting, routes to appropriate queue.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">Judgment:</strong> Professional reviews the case for complexity indicators. Decides whether to accept engagement.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">Compliance (throughout):</strong> System logs intake receipt, routing decision, professional review with timestamp and identity, accept/reject decision with reasoning.</p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Layer Bleed: The Primary Risk</h3>
          <p className="text-foreground/85 leading-relaxed mb-5">The biggest risk is "layer bleed"—when execution activities silently expand into judgment territory without anyone adjusting the compliance constraints. For example: An AI that "extracts data from forms" starts to "assess case complexity" because complexity indicators are extractable. A judgment function has been embedded in an execution wrapper.</p>

          {/* LAYER BLEED DIAGRAM */}
          <div className="my-8">
            <LayerBleedDiagram />
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Implementation Principles</h2>
          {[["Principle 1: Map Before You Automate","Before introducing AI to any workflow, map it explicitly. Identify which tasks are execution and which are judgment."],["Principle 2: Automate Execution First","Start with pure execution tasks. Get the automation working well. Build confidence."],["Principle 3: Protect Judgment Explicitly","When AI enters judgment-adjacent territory, add explicit protections: clear labeling, required human decisions, logging."],["Principle 4: Embed Compliance from Day One","Build logging, audit trails, and escalation triggers from the start. Retrofitting compliance is expensive and incomplete."],["Principle 5: Monitor and Audit Continuously","Track human override rates. Monitor review times. Test reconstruction capability. The system will drift if you don't watch it."]].map(([t,d],i)=>(<div key={i} className="mb-6"><h4 className="font-serif text-lg font-semibold text-foreground mb-2">{t}</h4><p className="text-foreground/85 leading-relaxed">{d}</p></div>))}
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/governance" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Application</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Governance-by-Design</h3>
            <p className="text-sm text-slate-text mb-3">Deep dive into embedding compliance as architecture.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={14} /></span>
          </Link>
          <Link href="/dictionary" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Definitions</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Dictionary</h3>
            <p className="text-sm text-slate-text mb-3">Key terms: Judgment Gap, Compliance Debt, and more.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
