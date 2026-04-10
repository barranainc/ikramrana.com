/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * ESSAY: The Approval That Isn't
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

export default function EssayApproval() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Essay</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            The Approval That Isn't
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-2">
            Most AI approval workflows aren't approvals. They're acknowledgements. The human clicks a button that says "Approve" but has no mechanism to actually evaluate what they're approving. The system records a human decision. No human decision was made.
          </p>
          <span className="font-mono text-xs text-slate-dim">7 min read</span>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">The Checkbox Problem</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            There is a pattern that appears in almost every AI governance framework I review. It looks like oversight. It functions like theater. A human is placed at a decision point in the workflow. They receive an output from an AI system. They click "Approve." The system logs that a human reviewed and approved the decision. The audit trail is clean. The governance requirement is satisfied.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            But ask yourself: what did that human actually do? Did they have the information needed to evaluate the AI's output? Did they have the time? Did they have the expertise? Did they understand what they were approving, or did they understand only that they were expected to approve it?
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            In most cases, the answer to all of these questions is no. The approval is a checkbox. The checkbox is a record. The record says a human decided. No human decided.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">How This Happens</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Organizations implement AI systems and, appropriately, want human oversight. They add an approval step. The approval step is added to the workflow without asking what genuine oversight would require. What information would the approver need? How long would a real review take? What training would the approver need to evaluate this type of output?
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            These questions are skipped because they're hard. The checkbox is easy. The checkbox satisfies the governance requirement on paper. The checkbox gets implemented.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Over time, the approval step becomes a bottleneck. The approver is reviewing dozens of AI outputs daily, each requiring a click. The volume makes genuine review impossible. The approver learns to click quickly. The system continues to log human approvals. The approvals continue to mean nothing.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="border-l-4 border-l-electric pl-6 py-2 my-10">
          <p className="text-foreground font-serif text-lg italic leading-relaxed">
            The audit trail that says "human approved" is not evidence of human judgment. It is evidence that a human was present when a button was clicked. These are not the same thing.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Liability Illusion</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            There is a secondary problem. Organizations believe that the human approval step transfers liability. If a human approved the decision, the organization is protected. The AI didn't decide — a human did.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This belief is wrong in two ways. First, legally: regulators and courts are increasingly sophisticated about the difference between nominal human oversight and genuine human judgment. A checkbox that no one could meaningfully evaluate is not oversight. Second, operationally: when something goes wrong, the audit trail that says "human approved" doesn't protect the organization. It implicates the human. The person who clicked "Approve" on something they couldn't evaluate is now responsible for the outcome.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The approval that isn't doesn't distribute liability. It concentrates it on the person least equipped to bear it.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">What Genuine Oversight Requires</h2>
          <p className="text-foreground/85 leading-relaxed mb-4">
            Genuine oversight is not a checkbox. It is a structured process with specific requirements:
          </p>
          <ul className="space-y-3 mb-6 pl-0">
            {[
              "The approver must have access to the information the AI used to reach its output — not just the output itself.",
              "The approver must have the expertise to evaluate whether that information was used appropriately.",
              "The approver must have enough time to conduct a real review — not a volume-driven rubber stamp.",
              "The approver must have a clear escalation path for cases where they are uncertain or where the stakes are high.",
              "The system must distinguish between routine approvals (low stakes, high confidence) and consequential approvals (high stakes, requiring genuine review).",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-sm bg-electric mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/85 leading-relaxed mb-5">
            This is more expensive than a checkbox. It requires workflow design, training, and time. But it is the only version of human oversight that is actually oversight.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">The Design Principle</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            When designing AI workflows with human oversight, start with a question: what would a genuine review of this output require? If the answer is "more time, more information, or more expertise than we are providing," then the oversight step is not oversight. It is a checkbox.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            The solution is not always to make every approval a full review. For low-stakes, high-confidence outputs, a lighter touch may be appropriate. But the decision about what level of oversight is appropriate must be made deliberately — not by default. And the system must be designed to enforce that decision, not just record that someone clicked a button.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Governance architecture is the difference between oversight that works and oversight that looks like it works. The distinction matters most when something goes wrong.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/governance" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Governance by Design</h3>
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
