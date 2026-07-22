/*
 * ABOUT , Updated content
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://ikramrana.com/about#webpage",
  url: "https://ikramrana.com/about",
  dateModified: "2026-07-16",
  mainEntity: {
    "@id": "https://ikramrana.com/#person",
    "@type": "Person",
    name: "Ikram Rana",
    url: "https://ikramrana.com/about",
    jobTitle: "AI Adoption and Workflow Implementation Specialist",
    description:
      "Ikram Rana helps businesses move from scattered AI experiments to working systems their teams actually use. Founder of Barrana, based in Vaughan, Ontario.",
    homeLocation: {
      "@type": "Place",
      name: "Vaughan, Ontario, Canada",
    },
    sameAs: [
      "https://www.linkedin.com/in/ikramrana",
      "https://ikramrana.substack.com",
    ],
    worksFor: {
      "@id": "https://barrana.ai/#organization",
      "@type": "Organization",
      name: "Barrana",
      url: "https://barrana.ai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vaughan",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
    },
    knowsAbout: [
      "AI adoption",
      "AI automation",
      "workflow systems",
      "decision architecture",
      "AI governance",
    ],
    areaServed: ["Vaughan", "Greater Toronto Area", "Canada", "United States"],
  },
};

export default function About() {
  useHead("About Ikram Rana", "AI adoption and workflow implementation specialist helping businesses decide where AI belongs, where it does not, and how to build systems teams actually use.");

  return (
    <div className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">About</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">About Ikram Rana</h1>
          <p className="text-lg text-slate-text leading-relaxed">I help businesses decide where AI belongs, where it does not, and how to turn scattered experiments into working systems without losing human judgment.</p>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">What I Work On</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">My focus is practical AI adoption: understanding the work first, deciding where AI is useful, and building clear ownership, human review, and safeguards into the workflow.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">This means I think about how authority, accountability, and validation get structured when AI enters an organization's operating system. Who owns decisions when AI generates recommendations? How do you preserve professional judgment while leveraging automation? How do you build governance that's structural, not theatrical?</p>
          <p className="text-foreground/85 leading-relaxed mb-5">These questions matter because the tool is rarely the whole problem. AI adoption breaks down when the work is unclear, ownership is missing, exceptions have nowhere to go, or people do not trust the system enough to use it.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why I Care About This</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">My path into this work began with building technology and business systems. Over time, I learned that making a tool work is only the beginning. The harder question is whether the surrounding workflow, people, and decisions can support it.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Then I started seeing the patterns.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The same patterns appear repeatedly: a recommendation nobody can clearly own, an approval step that exists only on paper, or a team drowning in dashboards because every new AI tool adds another system to check.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">I saw organizations moving faster while understanding less. Adopting tools while losing clarity. Automating tasks while accumulating liability they couldn't see.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">That gap between capability and accountability is what I write about now.</strong></p>
          <p className="text-foreground/85 leading-relaxed mb-5">I am in favour of useful AI, not AI for its own sake. Poor adoption sets people up to fail, hides risk behind impressive demonstrations, and treats human judgment as an obstacle instead of a design requirement.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Background</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">More than a decade of founder experience across technology, business systems, automation, and digital operations.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">My international experience has been shaped by work across Pakistan, Singapore, Australia, and Canada. In Singapore, I contributed to a government project through a subcontracting engagement. These markets exposed me to different operating environments, expectations, and approaches to technology adoption.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The pattern is consistent. The problems are predictable. The solutions require thinking about architecture, not just technology.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">This Site</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">This site is the canonical source for my work on practical AI adoption, workflow implementation, decision architecture, and governance. It is designed to be clear, searchable, and useful enough for businesses and other writers to reference.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The <Link href="/foundational-essay" className="text-electric hover:underline">Foundational Essay</Link> presents my complete position. The <Link href="/the-model" className="text-electric hover:underline">Three-Layer Model</Link> provides the framework. The <Link href="/dictionary" className="text-electric hover:underline">Dictionary</Link> defines key terms. The <Link href="/essays" className="text-electric hover:underline">Essays</Link> develop specific aspects in depth.</p>
        </motion.div>

        <div className="rule-divider my-14" />
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/foundational-essay" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Start Here</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Foundational Essay</h3>
            <p className="text-sm text-slate-text mb-3">My complete position on AI adoption, operational excellence, and regulatory integrity.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={14} /></span>
          </Link>
          <Link href="/the-model" className="block p-7 rounded-2xl border border-border bg-card hover:border-electric/30 hover:translate-y-[-2px] transition-all no-underline group">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">Framework</span>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">The Three-Layer Model</h3>
            <p className="text-sm text-slate-text mb-3">Execution, judgment, and compliance: the architecture that matters.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
