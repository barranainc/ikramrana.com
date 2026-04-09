/*
 * ESSAYS HUB — Links to all 4 individual essays
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const essays = [
  {
    slug: "/essays/entropy",
    title: "Why Buying More Software Makes Your Team Slower",
    desc: "Every new AI tool adds a dashboard, a handoff, and a validation gap. Organizations adopt faster than their decision architecture can absorb.",
    time: "8 min read",
  },
  {
    slug: "/essays/judgment",
    title: "The Judgment Preservation Imperative",
    desc: "Why \"human in the loop\" isn't a solution—it's a question. The real challenge isn't keeping humans involved. It's defining what their involvement actually means.",
    time: "8 min read",
  },
  {
    slug: "/essays/governance",
    title: "Governance is Architecture, Not Paperwork",
    desc: "The difference between compliance that's structural and compliance that's documentary. If the system permits non-compliant behavior, non-compliant behavior will occur.",
    time: "7 min read",
  },
  {
    slug: "/essays/tuesday",
    title: "The Tuesday Morning Test",
    desc: "A simple diagnostic for AI governance: On any random Tuesday morning, can you explain who made a specific decision, what information they had, and why they decided as they did?",
    time: "6 min read",
  },
];

export default function Essays() {
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
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link href={essay.slug} className="block py-8 border-b border-border group no-underline hover:bg-card/50 -mx-4 px-4 rounded-xl transition-colors">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-electric transition-colors">{essay.title}</h2>
                    <p className="text-foreground/75 leading-relaxed mb-2">{essay.desc}</p>
                    <span className="font-mono text-xs text-slate-dim">{essay.time}</span>
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
