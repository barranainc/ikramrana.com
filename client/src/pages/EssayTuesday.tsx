/*
 * ESSAY: The Tuesday Morning Test
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TuesdayTestDiagram from "@/components/diagrams/TuesdayTestDiagram";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function EssayTuesday() {
  useHead("The Tuesday Morning Test", "If your AI system cannot survive a normal Tuesday morning with real employees and real exceptions, it is not ready for production.");
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">The Tuesday Morning Test</h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">A simple diagnostic for AI governance: On any random Tuesday morning, can you explain who made a specific decision, what information they had, and why they decided as they did? If not, you have a structural problem.</p>
          <span className="font-mono text-xs text-slate-dim">6 min read · 1,200 words</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Test</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">Pick a random case from your system—something from last week that involved AI assistance. Answer these questions:</p>
          <ol className="space-y-3 mb-6 pl-0 list-none counter-reset-none">
            {[
              ["Who made the key decision(s)?","A specific person with a name."],
              ["What information did they have?","What AI outputs did they see? What additional context?"],
              ["What did they actually evaluate?","What factors did they consider?"],
              ["How long did they spend?","Was it appropriate for the complexity?"],
              ["Where is all this documented?","In the system, retrievable, auditable."],
            ].map(([q,d],i)=>(
              <li key={i} className="flex gap-4 text-foreground/85 leading-relaxed">
                <span className="font-mono text-sm font-bold text-electric mt-0.5 shrink-0">{i+1}.</span>
                <span><strong className="text-foreground">{q}</strong> {d}</span>
              </li>
            ))}
          </ol>
          <p className="text-foreground/85 leading-relaxed mb-5">If you can answer all five with specificity and documentation, your governance is functioning. If you can't, you have a gap.</p>
        </motion.div>

        {/* TUESDAY TEST DIAGNOSTIC DIAGRAM */}
        <motion.div {...fadeUp} className="my-12">
          <TuesdayTestDiagram />
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why Tuesday Morning</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">I call it the Tuesday Morning Test because that's when governance gets tested in real life—not during planned audits when everyone's prepared, but on random days when a client calls upset, or a regulator asks questions.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Tuesday morning is arbitrary. It's meant to be arbitrary. Real accountability requires being able to explain yourself on any day, about any case, without warning.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Common Failures</h2>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">The "Someone" Problem:</strong> Decisions were made by "someone on the team" but there's no record of who specifically. Accountability is collective, which means it's nobody's.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">The "Approved" Problem:</strong> The log shows "Approved by John" but John can't remember this specific case. He approved it—he approves dozens daily—but he didn't document judgment.</p>
          <p className="text-foreground/85 leading-relaxed mb-4"><strong className="text-foreground">The "AI Did It" Problem:</strong> The AI generated the output and a human clicked approve, but there's no record of what the human actually reviewed.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">The "We Could Probably Find It" Problem:</strong> The information exists somewhere—in emails, in notes, in someone's head—but reconstructing it would take days.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Test Reveals System Design</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">When an organization fails the test, the failure is rarely about the specific case. It's about the system that processed the case.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The system didn't require specific accountability. The system didn't log the right information. The system didn't enforce meaningful review.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Blaming the people misses the point. The system created the behavior.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Running the Test</h2>
          <ol className="space-y-3 mb-6 pl-0 list-none">
            {[
              "Select 3-5 random cases from the past month that involved AI",
              "For each, try to answer the five questions within 30 minutes using only system documentation",
              "Document where you succeeded and where you hit gaps",
              "Identify system changes that would close the gaps",
              "Implement changes and test again next quarter",
            ].map((step,i)=>(
              <li key={i} className="flex gap-4 text-foreground/85 leading-relaxed">
                <span className="font-mono text-sm font-bold text-electric mt-0.5 shrink-0">{i+1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">If you can't pass the Tuesday Morning Test today, you won't pass it when it matters. Governance that works only in retrospect doesn't work at all.</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/governance" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Governance-by-Design</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={14} /></span>
          </Link>
          <Link href="/dictionary" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Definition</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Reconstruction Capability</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">See Dictionary <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
