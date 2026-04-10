/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: Who Owns the Exception?
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function EssayException() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Who Owns the Exception?
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            Every workflow has exceptions. The question isn't whether they will occur — it's whether your system has a defined path for them. Most AI workflows handle the standard case well and route exceptions to "someone will deal with it." That someone is usually the most senior person available.
          </p>
          <span className="font-mono text-xs text-slate-dim">7 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Default Escalation</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When an AI system encounters a case it can't handle with confidence, it escalates. This is correct behavior. The problem is where it escalates to. In most organizations, the answer is: whoever is most senior and available.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This means your most expensive resource — the person with the most experience, the highest salary, and the most competing demands on their time — is spending their day handling unstructured exceptions that arrive without context, without classification, and without a clear decision framework.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The senior person becomes a catch-all. They are not doing their highest-value work. They are doing the work that nobody designed a path for.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why This Happens</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Exception handling is unglamorous design work. When organizations implement AI systems, they focus on the standard case — the 80% of volume that flows cleanly through the automated process. The standard case is where the efficiency gains are. The standard case is what gets demonstrated in vendor presentations.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Exceptions are treated as edge cases that will be rare and manageable. They are neither. In a high-volume AI workflow, even a 5% exception rate generates significant volume. And because exceptions are by definition the cases that don't fit the standard pattern, they tend to be more complex, more time-sensitive, and more consequential than the standard case.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The exception path is not an edge case in your workflow design. It is a core component that requires as much design attention as the standard path.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            "Someone will deal with it" is not an escalation path. It is the absence of one. The difference matters when volume is high, time is short, and the exception is consequential.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Classifying Exceptions Before They Occur</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Effective exception handling begins before the system goes live. The design question is: what types of exceptions will this system generate, and who is the right owner for each type?
          </p>
          <p className="text-foreground/85 leading-relaxed mb-4">Exception types typically fall into several categories:</p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "Confidence exceptions: the AI's confidence score falls below a threshold. These are often routine and can be handled by a trained junior reviewer.",
              "Data exceptions: required information is missing or inconsistent. These often require a specific person or team to resolve the data issue.",
              "Policy exceptions: the case falls outside defined parameters and requires a policy decision. These require someone with authority to set or interpret policy.",
              "High-stakes exceptions: the decision has significant financial, legal, or reputational consequences. These require senior judgment and documented rationale.",
              "Novel exceptions: the case type hasn't been seen before and may require updating the system's rules. These require someone who can both handle the immediate case and feed the learning back into the system.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Designing the Escalation Architecture</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Once exception types are classified, the escalation architecture can be designed. Each exception type needs a defined owner, a defined response time, a defined decision framework, and a defined logging requirement.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The escalation architecture should be tiered. Not every exception needs to go to the most senior person. Most exceptions should be handled at the lowest appropriate level — the person with the right expertise and authority for that specific type of exception, without the overhead of senior involvement.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Senior escalation should be reserved for cases that genuinely require it: novel situations, high-stakes decisions, or cases where the defined path has failed. When senior escalation is rare and structured, it is effective. When it is the default, it is neither.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The question "who owns the exception?" should have a specific, documented answer for each exception type before the system goes live. If it doesn't, the system is not ready.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/the-model" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Three-Layer Model</h3>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read more <ArrowRight size={14} /></span>
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
