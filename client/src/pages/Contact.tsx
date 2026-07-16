/*
 * CONTACT , Updated content
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const faqs = [
  {
    q: "What is decision architecture in AI adoption?",
    a: "Decision architecture refers to the structure that determines how decisions are owned, validated, escalated, and audited inside an organization. When AI enters operational workflows, this architecture determines whether accountability is maintained or eroded.",
  },
  {
    q: "What is the Three-Layer Model?",
    a: "The Three-Layer Model separates AI systems into execution (what AI automates), judgment (what humans must own), and compliance (what the system must enforce). It provides a framework for understanding where AI helps, where it creates risk, and where boundaries must be explicit.",
  },
  {
    q: "What is governance-by-design?",
    a: "Governance-by-design is the principle that governance constraints should be embedded in system architecture rather than documented in policies. The system enforces compliance, not just describes it.",
  },
  {
    q: "What is the Tuesday Morning Test?",
    a: "A practical diagnostic: On any random Tuesday morning, can you explain who made a specific decision, what information they had, and why they decided as they did? If you can't answer this for any decision in your system, you do not have governance. You have hope.",
  },
  {
    q: "Who is Ikram Rana?",
    a: "Ikram Rana is an AI adoption and workflow implementation specialist and the founder of Barrana. He brings more than a decade of founder experience shaped by work across Pakistan, Singapore, Australia, and Canada.",
  },
];

export default function Contact() {
  useHead("Contact Ikram Rana", "Get in touch about AI adoption, workflow implementation, speaking, or collaboration.");

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Connect</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Contact</h1>
          <p className="text-lg text-slate-text leading-relaxed">For AI adoption and workflow implementation, speaking, collaboration, or a practical question about where AI belongs in your business.</p>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://calendly.com/ikramrana15"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-2xl border border-electric/25 bg-electric/5 hover:border-electric/50 hover:translate-y-[-2px] transition-all no-underline group"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">
              AI adoption and workflows
            </span>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Find the Workflow AI Should Fix First
            </h2>
            <p className="text-sm text-slate-text leading-relaxed">
              Use this option when you want to examine a workflow, understand whether AI belongs there, or discuss the discovery stage.
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/ikramrana/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group"
          >
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">
              Speaking and collaboration
            </span>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Message Ikram on LinkedIn
            </h2>
            <p className="text-sm text-slate-text leading-relaxed">
              Use LinkedIn for speaking invitations, publication questions, collaboration, or general enquiries.
            </p>
          </a>
        </motion.div>

        {/* Before you reach out */}
        <div className="rule-divider my-14" />
        <motion.div {...fadeUp}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Before You Reach Out</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Helpful starting points</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            If you want to understand how I work, start with the <Link href="/about" className="text-electric hover:underline">about page</Link> or
            browse the <Link href="/solutions" className="text-electric hover:underline">solutions I offer</Link> for
            businesses implementing AI. For a structured overview of the approach, see
            the <Link href="/ai-adoption-framework-for-small-businesses" className="text-electric hover:underline">AI Adoption Framework for Businesses</Link>.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="rule-divider my-14" />
        <motion.div {...fadeUp}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">FAQ</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border bg-card p-6 rounded-xl">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-foreground/75 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
