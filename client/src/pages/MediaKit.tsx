/*
 * MEDIA KIT: Brand partnership discoverability
 */
import { motion } from "framer-motion";
import { Mail, FileText, User } from "lucide-react";
import { useHead } from "@/hooks/useHead";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const stats = [
  { label: "Focus", value: "AI Adoption & Decision Architecture" },
  { label: "Audience", value: "Business operators, founders, consultants" },
  { label: "Format", value: "Essays, frameworks, technical guidance" },
];

const topics = [
  "AI adoption and implementation strategies",
  "Decision architecture in operational systems",
  "Governance-by-design and structural compliance",
  "Workflow systems and automation design",
  "Professional judgment preservation in AI systems",
  "Risk identification in AI adoption",
];

export default function MediaKit() {
  useHead(
    "Media Kit & Brand Partnerships",
    "Collaboration opportunities with Ikram Rana on AI adoption, decision architecture, and practical AI implementation for businesses."
  );

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-electric block mb-4">
            Collaboration
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15] tracking-tight mb-6">
            Media Kit & Brand Partnerships
          </h1>
          <p className="text-lg text-slate-text leading-relaxed">
            Information for journalists, podcast hosts, event organizers, and potential collaborators interested in AI adoption and decision architecture.
          </p>
        </motion.div>

        <div className="rule-divider my-14" />

        {/* Overview */}
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Overview</h2>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Ikram Rana writes about practical AI adoption, decision architecture, and how organizations structure authority, accountability, and validation when AI enters operational workflows.
          </p>
          <p className="text-foreground/85 leading-relaxed mb-5">
            His work focuses on the structural questions that determine whether AI adoption helps or harms: where judgment should remain human, how compliance gets embedded in system design, and why most AI implementations fail to address accountability.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp} className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="border border-border bg-card p-6 rounded-xl">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric block mb-2">
                  {stat.label}
                </span>
                <p className="text-sm text-foreground/85 leading-relaxed">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Topics */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Topics</h2>
          <p className="text-foreground/85 leading-relaxed mb-6">
            Relevant areas for podcasts, articles, speaking engagements, and collaborations:
          </p>
          <ul className="space-y-3">
            {topics.map((topic, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-foreground/85"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 shrink-0" />
                <span>{topic}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Bios */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Bios</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-slate-dim mb-3">Short Bio (50 words)</h3>
              <p className="text-foreground/85 leading-relaxed border-l-4 border-electric pl-6">
                Ikram Rana writes about decision architecture in AI adoption, how organizations structure authority, preserve judgment, and embed compliance when automation enters operational workflows. His Three-Layer Model separates execution, judgment, and compliance as distinct structural concerns. He argues that AI adoption is fundamentally a reorganization of accountability.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-slate-dim mb-3">Long Bio (150 words)</h3>
              <div className="text-foreground/85 leading-relaxed border-l-4 border-burgundy pl-6 space-y-4">
                <p>
                  Ikram Rana is a writer and thinker focused on decision architecture in AI adoption. His work examines how authority, accountability, and validation get structured when AI enters an organization's operating system, and what breaks when that structure is missing.
                </p>
                <p>
                  His Three-Layer Model separates execution, judgment, and compliance as distinct structural layers, providing organizations with a framework for understanding where AI helps, where it creates risk, and where the boundaries must be explicit. He advocates for governance-by-design, the principle that compliance-supporting controls must be built into system architecture rather than documented after deployment.
                </p>
                <p>
                  With more than a decade of founder experience across AI implementation, software development, and cybersecurity, Rana brings both technical depth and strategic perspective to the question of how organizations can adopt AI without losing accountability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Assets */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Assets & Resources</h2>
          <div className="space-y-4">
            <div className="border border-border bg-card p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-electric mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Written Work</h3>
                  <p className="text-sm text-foreground/75 mb-3">
                    Essays, frameworks, and technical guidance on AI adoption and decision architecture
                  </p>
                  <a
                    href="/foundational-essay"
                    className="text-sm text-electric hover:underline"
                  >
                    Foundational Essay →
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-border bg-card p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-electric mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">About</h3>
                  <p className="text-sm text-foreground/75 mb-3">
                    Background, philosophy, and approach to AI adoption
                  </p>
                  <a
                    href="/about"
                    className="text-sm text-electric hover:underline"
                  >
                    About Ikram Rana →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div {...fadeUp} className="mt-14">
          <div className="p-8 rounded-2xl border border-electric/25 bg-electric/5">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-electric/30 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-electric" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="text-foreground/75 leading-relaxed mb-5">
                  For media inquiries, speaking engagements, podcast invitations, or collaboration opportunities, reach out directly:
                </p>
                <a
                  href="mailto:ir@ikramrana.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-electric text-background font-sans font-semibold text-sm tracking-wide rounded-lg no-underline hover:opacity-90 transition-opacity"
                >
                  ir@ikramrana.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
