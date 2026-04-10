/*
 * CONTACT — Updated content
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
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
    a: "A practical diagnostic: On any random Tuesday morning, can you explain who made a specific decision, what information they had, and why they decided as they did? If you can't answer this for any decision in your system, you don't have governance—you have hope.",
  },
  {
    q: "Who is Ikram Rana?",
    a: "I write about decision architecture in AI adoption—how organizations structure authority, preserve judgment, and embed compliance when automation enters operational workflows. 15+ years across AI implementation, software development, and cybersecurity.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  useHead("Contact Ikram Rana", "Get in touch for speaking inquiries, AI automation consulting, or questions about decision architecture in AI adoption.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent. Thank you for reaching out.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">Connect</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">Contact</h1>
          <p className="text-lg text-slate-text leading-relaxed">For speaking inquiries, collaboration, or questions about decision architecture in AI adoption.</p>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-slate-dim block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card border border-border text-foreground px-4 py-3 rounded-lg font-sans text-sm focus:border-electric focus:outline-none transition-colors placeholder:text-slate-dim"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider uppercase text-slate-dim block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card border border-border text-foreground px-4 py-3 rounded-lg font-sans text-sm focus:border-electric focus:outline-none transition-colors placeholder:text-slate-dim"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs tracking-wider uppercase text-slate-dim block mb-2">Subject</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-card border border-border text-foreground px-4 py-3 rounded-lg font-sans text-sm focus:border-electric focus:outline-none transition-colors placeholder:text-slate-dim"
                placeholder="Speaking inquiry, collaboration, or general question"
              />
            </div>
            <div>
              <label className="font-mono text-xs tracking-wider uppercase text-slate-dim block mb-2">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border text-foreground px-4 py-3 rounded-lg font-sans text-sm focus:border-electric focus:outline-none transition-colors resize-none placeholder:text-slate-dim"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-electric text-white font-sans font-semibold text-sm tracking-wide rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
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
