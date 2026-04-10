/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * INSIGHT PAGE — /insight/
 * Short-form observations, patterns, and practical notes from the work.
 * Different format from essays: more immediate, less structured, more frequent.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const insights = [
  {
    id: "001",
    date: "Feb 2026",
    tag: "Governance",
    title: "The approval that isn't",
    body: "Most AI approval workflows aren't approvals. They're acknowledgements. The human clicks a button that says 'Approve' but has no mechanism to actually evaluate what they're approving. The system records a human decision. No human decision was made. This distinction matters enormously when something goes wrong — and it will go wrong.",
  },
  {
    id: "002",
    date: "Feb 2026",
    tag: "Decision Architecture",
    title: "Speed is not the problem. Clarity is.",
    body: "Every operator I talk to says the same thing: 'We need to move faster.' But when I map their workflows, speed isn't the bottleneck. Clarity is. Decisions stall because nobody knows who owns them. Tasks repeat because nobody knows what 'done' means. AI makes this worse, not better — it executes faster on top of the same underlying ambiguity.",
  },
  {
    id: "003",
    date: "Feb 2026",
    tag: "Automation",
    title: "The 80% trap",
    body: "AI handles 80% of cases well. The remaining 20% are the ones that matter most — edge cases, exceptions, high-stakes decisions. Organizations automate the 80% and assume the 20% will sort itself out. It doesn't. The 20% now arrives without context, without the human judgment that used to catch it before it became a problem.",
  },
  {
    id: "004",
    date: "Jan 2026",
    tag: "Compliance",
    title: "Compliance debt compounds",
    body: "Every shortcut in governance architecture is a loan. You borrow time now and pay it back later — with interest. The interest is paid in audit failures, regulatory scrutiny, client disputes, and staff time spent reconstructing decisions that should have been logged automatically. Organizations that skip governance architecture don't avoid the cost. They defer it.",
  },
  {
    id: "005",
    date: "Jan 2026",
    tag: "Operations",
    title: "The integration that creates more work",
    body: "A client added an AI tool to their CRM to automate follow-up emails. The tool worked. But the output needed to be reviewed before sending, logged in a separate system, and reconciled with the main client record manually. Net result: the task that took 2 minutes now takes 6. The tool is 'saving time' according to the vendor's metrics. It is not saving time.",
  },
  {
    id: "006",
    date: "Jan 2026",
    tag: "Decision Architecture",
    title: "Who owns the exception?",
    body: "Every workflow has exceptions. The question isn't whether exceptions will occur — it's whether your system has a defined path for them. Most AI workflows handle the standard case well and route exceptions to 'someone will deal with it.' That someone is usually the most senior person available, which means your most expensive resource is spending their time on unstructured edge cases that a well-designed escalation path would have handled.",
  },
  {
    id: "007",
    date: "Dec 2025",
    tag: "Governance",
    title: "Policy is not architecture",
    body: "A policy document that says 'humans must review all AI outputs' is not a governance system. It's a statement of intent. Governance is what happens in the system — the checkpoints that cannot be bypassed, the logs that are automatically created, the escalation paths that are structurally enforced. If non-compliant behavior is possible in your system, it will occur. Policy doesn't prevent it. Architecture does.",
  },
  {
    id: "008",
    date: "Dec 2025",
    tag: "Automation",
    title: "Automation reveals process debt",
    body: "When you automate a broken process, you get a faster broken process. The most common outcome of AI implementation is that organizations discover how much process debt they've accumulated. The AI can't handle the exceptions because the exceptions were never formally defined. The AI can't route decisions because decision ownership was never formally assigned. Automation is a diagnostic tool as much as it is a productivity tool.",
  },
  {
    id: "009",
    date: "Nov 2025",
    tag: "Operations",
    title: "The meeting that replaced the system",
    body: "In many organizations, the coordination meeting exists because the system doesn't coordinate. People gather weekly to reconcile information that should flow automatically, to make decisions that should be structurally assigned, to resolve conflicts that should be architecturally prevented. When I see a recurring coordination meeting, I see a system design failure. The meeting is the workaround.",
  },
  {
    id: "010",
    date: "Nov 2025",
    tag: "Decision Architecture",
    title: "Judgment is not a backup system",
    body: "Organizations often treat human judgment as the fallback when AI fails. This is backwards. Human judgment should be the primary system for decisions that require it — not a safety net for when automation breaks down. When judgment is positioned as a backup, it atrophies. People stop exercising it because the system rarely asks for it. Then, when it's genuinely needed, the capacity isn't there.",
  },
];

const tagColors: Record<string, string> = {
  "Governance": "text-burgundy bg-burgundy/8 border-burgundy/20",
  "Decision Architecture": "text-electric bg-electric/8 border-electric/20",
  "Automation": "text-amber-700 bg-amber-50 border-amber-200",
  "Compliance": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Operations": "text-slate-600 bg-slate-50 border-slate-200",
};

export default function Insight() {
  useHead("Observations from the Work", "Shorter observations, patterns, and practical notes on AI adoption. Less structured than essays, more immediate. Things worth saying early.");

  return (
    <div>
      {/* Header */}
      <section className="py-20 md:py-28 bg-background border-b border-border/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-4">
              Insight
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Observations from the Work
            </h1>
            <p className="text-lg text-slate-text leading-relaxed">
              Shorter observations, patterns, and practical notes. Less structured than essays — more immediate. These are the things worth saying before they become a full argument.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insight Feed */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <div className="space-y-0">
            {insights.map((item, i) => (
              <motion.article
                key={item.id}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="py-10 border-b border-border/60 last:border-b-0"
              >
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-slate-dim">
                    #{item.id}
                  </span>
                  <span className="text-slate-dim/40 text-xs">·</span>
                  <span className={`font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 rounded border ${tagColors[item.tag] ?? "text-slate-600 bg-slate-50 border-slate-200"}`}>
                    {item.tag}
                  </span>
                  <span className="text-slate-dim/40 text-xs">·</span>
                  <span className="font-mono text-[10px] text-slate-dim">{item.date}</span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-snug mb-4">
                  {item.title}
                </h2>

                {/* Body */}
                <p className="text-foreground/80 leading-relaxed text-[15px]">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy border-t border-border/40">
        <div className="container">
          <motion.div {...fadeUp} className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-electric block mb-3">
              Go Deeper
            </span>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Want the full argument?
            </h3>
            <p className="text-slate-text text-sm leading-relaxed mb-6">
              Each of these observations is developed into a full essay. Ten essays, each taking a single idea from premise to implication — with the evidence, the failure modes, and the design principles.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/essays"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric text-white font-semibold text-sm no-underline hover:translate-y-[-2px] hover:shadow-md transition-all"
              >
                Read the Essays <ArrowRight size={14} />
              </Link>
              <Link
                href="/foundational-essay"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-electric/30 text-electric font-semibold text-sm no-underline hover:bg-electric/10 transition-all"
              >
                Start with the Foundational Essay <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
