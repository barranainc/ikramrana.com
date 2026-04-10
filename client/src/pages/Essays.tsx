/*
 * ESSAYS HUB — Links to all 10 individual essays
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const essays = [
  {
    slug: "/essays/entropy",
    tag: "Automation",
    title: "Why Buying More Software Makes Your Team Slower",
    desc: "Every new AI tool adds a dashboard, a handoff, and a validation gap. Organizations adopt faster than their decision architecture can absorb.",
    time: "8 min read",
  },
  {
    slug: "/essays/judgment",
    tag: "Decision Architecture",
    title: "The Judgment Preservation Imperative",
    desc: "Why \"human in the loop\" isn't a solution — it's a question. The real challenge isn't keeping humans involved. It's defining what their involvement actually means.",
    time: "8 min read",
  },
  {
    slug: "/essays/governance",
    tag: "Governance",
    title: "Governance is Architecture, Not Paperwork",
    desc: "The difference between compliance that's structural and compliance that's documentary. If the system permits non-compliant behavior, non-compliant behavior will occur.",
    time: "7 min read",
  },
  {
    slug: "/essays/tuesday",
    tag: "Governance",
    title: "The Tuesday Morning Test",
    desc: "A simple diagnostic for AI governance: On any random Tuesday morning, can you explain who made a specific decision, what information they had, and why they decided as they did?",
    time: "6 min read",
  },
  {
    slug: "/essays/approval",
    tag: "Governance",
    title: "The Approval That Isn't",
    desc: "Most AI approval workflows aren't approvals. They're acknowledgements. The system records a human decision. No human decision was made.",
    time: "7 min read",
  },
  {
    slug: "/essays/eighty-percent",
    tag: "Automation",
    title: "The 80% Trap",
    desc: "AI handles 80% of cases well. The remaining 20% are the ones that matter most. Organizations automate the 80% and assume the 20% will sort itself out. It doesn't.",
    time: "7 min read",
  },
  {
    slug: "/essays/exception",
    tag: "Decision Architecture",
    title: "Who Owns the Exception?",
    desc: "Every workflow has exceptions. Most AI workflows handle the standard case well and route exceptions to 'someone will deal with it.' That someone is usually the most senior person available.",
    time: "7 min read",
  },
  {
    slug: "/essays/meeting",
    tag: "Operations",
    title: "The Meeting That Replaced the System",
    desc: "The coordination meeting exists because the system doesn't coordinate. When I see a recurring coordination meeting, I see a system design failure. The meeting is the workaround.",
    time: "6 min read",
  },
  {
    slug: "/essays/process-debt",
    tag: "Automation",
    title: "Automation Reveals Process Debt",
    desc: "When you automate a broken process, you get a faster broken process. AI is a diagnostic tool as much as it is a productivity tool.",
    time: "7 min read",
  },
  {
    slug: "/essays/clarity",
    tag: "Decision Architecture",
    title: "Speed Is Not the Problem. Clarity Is.",
    desc: "Every operator says they need to move faster. But when you map their workflows, speed isn't the bottleneck. Clarity is. AI makes this worse, not better.",
    time: "7 min read",
  },
];

const tagColors: Record<string, string> = {
  "Governance": "text-burgundy bg-burgundy/8 border-burgundy/20",
  "Decision Architecture": "text-electric bg-electric/8 border-electric/20",
  "Automation": "text-amber-700 bg-amber-50 border-amber-200",
  "Operations": "text-slate-600 bg-slate-50 border-slate-200",
};

export default function Essays() {
  useHead("Essays on AI Decision Architecture", "Focused arguments on AI decision architecture. Each essay develops a single idea about automation, judgment, and governance in depth.");

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essays</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Essays</h1>
          <p className="text-lg text-slate-text leading-relaxed">Focused arguments on specific aspects of AI decision architecture. Each essay develops a single idea in depth.</p>
        </motion.div>

        <div className="rule-divider my-14" />

        <div className="space-y-0">
          {essays.map((essay, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={essay.slug} className="block py-8 border-b border-border group no-underline hover:bg-card/50 -mx-4 px-4 rounded-xl transition-colors">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 rounded border ${tagColors[essay.tag] ?? "text-slate-600 bg-slate-50 border-slate-200"}`}>
                        {essay.tag}
                      </span>
                      <span className="font-mono text-[10px] text-slate-dim">{essay.time}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-electric transition-colors">{essay.title}</h2>
                    <p className="text-foreground/75 leading-relaxed">{essay.desc}</p>
                  </div>
                  <ArrowRight size={20} className="text-slate-dim group-hover:text-electric mt-2 shrink-0 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
