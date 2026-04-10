/*
 * DICTIONARY OF AI ARCHITECTURE — 20 definitions
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const definitions: { term: string; text: string[] }[] = [
  { term: "Decision Architecture", text: ["The structure that determines how decisions are owned, validated, escalated, and audited inside an organization. Decision architecture exists whether or not it's explicit—the question is whether you've designed it intentionally or inherited it accidentally.", "In AI adoption, decision architecture becomes critical because AI can automate tasks without clarifying who owns the decisions those tasks embed."] },
  { term: "The Judgment Gap", text: ["The space between what AI recommends and what a human actually decides. In healthy systems, this gap is explicit and managed. In unhealthy systems, the gap closes invisibly as recommendations become decisions without conscious human evaluation.", "The judgment gap is where professional value lives. Organizations that eliminate it are eliminating the professional judgment they're supposed to provide."] },
  { term: "Compliance Debt", text: ["The accumulated risk from deploying AI capabilities faster than governance controls. Like technical debt, compliance debt compounds silently until an audit, incident, or regulatory action forces visibility."] },
  { term: "Governance-by-Design", text: ["The principle that governance constraints should be embedded in system architecture rather than documented in policies. Governance-by-design means the system enforces compliance, not just describes it."] },
  { term: "Policy Theater", text: ["The appearance of governance without operational enforcement. Policies exist, training was conducted, boxes were checked—but the system has no logging, no escalation triggers, no audit trail. Compliance exists on paper while risk exists in production."] },
  { term: "Operational Coherence", text: ["The degree to which an organization's tools, workflows, and decision rights operate as a unified system rather than a collection of fragments. High coherence means clear ownership, consistent data, smooth handoffs. Low coherence means tool proliferation, manual reconciliation, decision fatigue."] },
  { term: "Tool Proliferation Entropy", text: ["The organizational chaos that results from adopting AI tools faster than decision architecture can absorb them. Each new tool adds a dashboard, a handoff, and a validation gap. Speed increases while clarity decreases."] },
  { term: "Automation Creep", text: ["The gradual expansion of AI from execution tasks into judgment territory without explicit approval. It typically progresses: AI drafts → AI recommends → AI decides (with rubber-stamp approval) → AI decides (without meaningful oversight)."] },
  { term: "Human-in-the-Loop Fallacy", text: ["The assumption that having a human \"supervise\" AI outputs provides accountability. In practice, undefined supervision creates responsibility without structure—humans are nominally accountable for decisions they cannot meaningfully review.", "The fallacy is treating \"human in the loop\" as a solution when it's actually a question. What is the human supposed to evaluate? How long should they spend? Without answers, it's a label, not a safeguard."] },
  { term: "Layer Bleed", text: ["When execution-layer activities silently expand into judgment territory without anyone adjusting oversight or compliance controls. The AI that \"extracts data\" starts \"assessing complexity.\" The boundaries blur; accountability doesn't follow."] },
  { term: "Recommendation Anchoring", text: ["The cognitive bias where humans anchor on AI recommendations even when asked to exercise independent judgment. The recommendation becomes the starting point, narrowing rather than supporting judgment."] },
  { term: "Supervision Atrophy", text: ["The degradation of human oversight capability that occurs when professionals rely heavily on AI over time. As AI handles more tasks, humans lose the skills and context needed to evaluate AI outputs critically."] },
  { term: "The Tuesday Morning Test", text: ["A practical test for AI governance: Can you explain, on a random Tuesday morning, who made a specific decision, what information they had, and why they decided as they did? If you can't answer this for any decision in your system, you don't have governance—you have hope."] },
  { term: "Reconstruction Capability", text: ["The ability to fully recreate the decision process for any significant case within a defined timeframe (typically 24 hours). Without reconstruction capability, you cannot demonstrate what happened when asked."] },
  { term: "Escalation Trigger", text: ["A defined condition that causes the system to route a case to elevated review automatically. The key is that escalation is structural—it happens because the system routes it, not because someone notices a problem."] },
  { term: "Decision Rights", text: ["The authorization structure that defines who can approve, override, escalate, or finalize different types of decisions. Decision rights should be explicit, mapped to roles, and enforced by the system."] },
  { term: "Validation Gap", text: ["The space where AI outputs could be checked but aren't. Errors propagate silently because nobody defined what \"correct\" looks like or built systems to catch deviations."] },
  { term: "Professional Abdication", text: ["When regulated professionals delegate their judgment to AI systems without maintaining meaningful oversight. The professional remains nominally responsible, but actual judgment has shifted to the machine."] },
  { term: "Architectural Ambiguity", text: ["The state where an organization has AI capabilities deployed without clear decision architecture—unclear ownership, undefined supervision, implicit rather than explicit governance. It is the absence of intentional design."] },
  { term: "Structural Fragility", text: ["The hidden brittleness in systems that have accumulated automation without governance. Structural fragility doesn't manifest in normal operations—only when stress tests the system. An audit, a lawsuit, a major complaint reveals that the organization can't explain what their systems do."] },
];

export default function Dictionary() {
  useHead("The Dictionary of AI Architecture", "Key terms for thinking clearly about decision systems in AI adoption. Definitions you can use, cite, and build on.");

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Reference</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">The Dictionary of AI Architecture</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">Key terms for thinking clearly about decision systems in AI adoption. These definitions represent my usage—use them, cite them, build on them.</p>
          <span className="font-mono text-xs text-slate-dim">20 definitions</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <div className="space-y-0">
          {definitions.map((def, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, delay: 0.02 * (i % 5) }}
              className="py-8 border-b border-border first:pt-0"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{def.term}</h3>
              {def.text.map((p, j) => (
                <p key={j} className="text-foreground/85 leading-relaxed mb-3 last:mb-0">{p}</p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="p-7 rounded-2xl border border-border bg-card">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-dim block mb-3">Citation</span>
          <p className="text-foreground/85 leading-relaxed">These definitions represent my specific usage. For context and application, see the <Link href="/foundational-essay" className="text-electric hover:underline">Foundational Essay</Link> and <Link href="/the-model" className="text-electric hover:underline">Three-Layer Model</Link>.</p>
        </motion.div>
      </div>
    </div>
  );
}
