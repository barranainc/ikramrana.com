/*
 * ABOUT — Updated content
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

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">About</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">About Ikram Rana</h1>
          <p className="text-lg text-slate-text leading-relaxed">I write about what actually breaks when organizations adopt AI without thinking about decision architecture—and how to see those breaks before they become crises.</p>
        </motion.div>

        <div className="rule-divider my-14" />

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">What I Work On</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">My focus is narrow and specific: <strong className="text-foreground">decision architecture in AI adoption</strong>.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">This means I think about how authority, accountability, and validation get structured when AI enters an organization's operating system. Who owns decisions when AI generates recommendations? How do you preserve professional judgment while leveraging automation? How do you build governance that's structural, not theatrical?</p>
          <p className="text-foreground/85 leading-relaxed mb-5">These questions matter because they're where AI adoption actually fails. Not in the technology—the technology usually works. In the architecture—the invisible structure that determines who's responsible for what.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Why I Care About This</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">I didn't start here. I started as a technologist, building systems, implementing AI, helping organizations automate. I was good at the capability side—making things work, making them faster.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">Then I started seeing the patterns.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The immigration consultant who couldn't explain how a client recommendation was made because the AI drafted it and "someone" approved it. The legal team whose "oversight" meant a senior partner being CC'd on emails they never read. The operations manager drowning in dashboards because every new AI tool added another system to check.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">I saw organizations moving faster while understanding less. Adopting tools while losing clarity. Automating tasks while accumulating liability they couldn't see.</p>
          <p className="text-foreground/85 leading-relaxed mb-5"><strong className="text-foreground">That gap between capability and accountability is what I write about now.</strong></p>
          <p className="text-foreground/85 leading-relaxed mb-5">It bothers me—genuinely—when organizations adopt AI badly. Not because the technology is wrong, but because the architecture is missing. Because professionals are set up to fail by systems that don't support their judgment. Because compliance exists on paper while risk accumulates in production.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">Background</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">15+ years across AI implementation, software development, and cybersecurity—with deep experience in professional services and regulated industries.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">I've built automation systems for immigration consulting firms, designed enterprise workflows, implemented AI solutions across different industries. I've watched organizations adopt AI well and adopt it badly, and I've spent years trying to understand what distinguishes the two.</p>
          <p className="text-foreground/85 leading-relaxed mb-5">The pattern is consistent. The problems are predictable. The solutions require thinking about architecture, not just technology.</p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 mt-14">This Site</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">This site is the canonical source for my work on decision architecture in AI adoption. It's designed to be citeable and searchable—a resource that organizations can reference.</p>
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
            <p className="text-sm text-slate-text mb-3">Execution, judgment, compliance—the architecture that matters.</p>
            <span className="text-sm text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={14} /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
