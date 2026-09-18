/*
 * MEDIA KIT: Brand partnerships for @ikramrana.ai
 */
import { motion } from "framer-motion";
import { Mail, Instagram, Play, Target, FileCheck, MessageSquare } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const stats = [
  { label: "Instagram", value: "@ikramrana.ai (verified)" },
  { label: "Followers", value: "~29K" },
  { label: "Views, last 30 days", value: "~2.1M (Instagram Insights)" },
  { label: "Format", value: "Educational walkthrough Reels + Stories CTAs" },
  { label: "Audience", value: "Founders, operators, builders, tech-curious professionals" },
  { label: "Geography", value: "South Asia + North America dominant · based Vaughan, Ontario" },
  { label: "Audience mix", value: "Mostly men · peak ages 18-44" },
];

const bestFit = [
  "AI, LLMs, and agents",
  "Automation and workflow tools",
  "Developer tools",
  "Productivity products",
  "B2B SaaS for founders and operators",
];

const campaignSteps = [
  { number: "01", title: "Brief", desc: "Product access and campaign context." },
  { number: "02", title: "Native Reel", desc: "Hook, demonstration, and CTA." },
  { number: "03", title: "Factual review", desc: "A draft for product accuracy." },
  { number: "04", title: "Publish", desc: "Reel plus Stories CTA." },
  { number: "05", title: "Report", desc: "Instagram Insights after publication." },
];

const faqs = [
  {
    q: "Is this the same as booking a consult?",
    a: "No. Partnerships are handled through ir@ikramrana.com. AI consults are separate.",
  },
  {
    q: "Where are the rates?",
    a: "In the partnership options and pricing overview, sent after you email with product and timing.",
  },
  {
    q: "What should I include?",
    a: "Product URL, job-to-be-done, launch window, and whether the campaign is one-off or monthly.",
  },
];

export default function MediaKit() {
  useHead(
    "Brand partnerships for @ikramrana.ai | Ikram Rana",
    "@ikramrana.ai is an Instagram channel for practical AI tools and automation. For partnership options and pricing, email ir@ikramrana.com."
  );

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">
            Brand partnerships
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Media kit for @ikramrana.ai
          </h1>
          <p className="text-lg text-slate-text leading-relaxed mb-6">
            @ikramrana.ai is an Instagram channel for practical AI tools and automation. Brands and AI tool teams use it when they want educational, demo-led Reels that reach founders, operators, and builders - people who try software, not AI entertainment.
          </p>
          <p className="text-foreground/85 leading-relaxed">
            This page is the public overview. For packages and commercial terms, email{" "}
            <a href="mailto:ir@ikramrana.com" className="text-electric hover:underline font-medium">
              ir@ikramrana.com
            </a>{" "}
            and you will receive the partnership options and pricing.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:ir@ikramrana.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-background font-sans font-semibold text-sm tracking-wide rounded-lg no-underline hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email ir@ikramrana.com
          </a>
          <a
            href="#how-campaigns-run"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground font-sans font-semibold text-sm rounded-lg no-underline hover:border-electric/30 transition-colors"
          >
            How campaigns run
          </a>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* Reach section */}
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Reach people who evaluate and use software.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="border border-border bg-card p-5 rounded-xl">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-slate-dim block mb-2">
                  {stat.label}
                </span>
                <p className="text-sm text-foreground/85 leading-relaxed">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* Product shown working */}
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
            The product is shown working.
          </h2>
          <p className="text-foreground/85 leading-relaxed mb-6">
            Hook-first Reels that show AI tools working. High comment velocity on tool posts; large share of views from non-followers. Fits AI, automation, developer, B2B SaaS products that need a clear demo.
          </p>

          <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">Best fit</h3>
          <ul className="space-y-2">
            {bestFit.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-foreground/85"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* How campaigns run */}
        <motion.div {...fadeUp} id="how-campaigns-run">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            How campaigns run
          </h2>
          <div className="space-y-4">
            {campaignSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-border bg-card p-6 rounded-xl hover:border-electric/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xl font-bold text-electric shrink-0">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-foreground/75 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-foreground/75 mt-6 italic">
            Organic unless paid usage rights are included in the partnership options and pricing.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* Send the product */}
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
            Send the product and timing.
          </h2>
          <p className="text-foreground/85 leading-relaxed mb-6">
            Email{" "}
            <a href="mailto:ir@ikramrana.com" className="text-electric hover:underline font-medium">
              ir@ikramrana.com
            </a>{" "}
            with:
          </p>
          <ul className="space-y-2 mb-8">
            {["Product URL", "One-line use case or job-to-be-done", "Launch timing", "One-off campaign or monthly collaboration"].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-foreground/85"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="border border-border bg-card p-6 rounded-xl">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">What you will not find</h3>
            <p className="text-foreground/75 leading-relaxed">
              Pricing is not listed publicly. Serious partners receive partnership options and pricing by email after a short reply.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:ir@ikramrana.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-background font-sans font-semibold text-sm tracking-wide rounded-lg no-underline hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              ir@ikramrana.com
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground font-sans text-sm rounded-lg no-underline hover:border-electric/30 transition-colors"
            >
              AI consult, separate from brand partnerships
            </a>
          </div>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* FAQ */}
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Before you email</h2>
          <div className="space-y-4">
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
