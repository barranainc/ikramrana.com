/*
 * DESIGN: The Architect's Blueprint
 * Reusable section header with monospace annotation label and serif title.
 */

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-10 ${align === "center" ? "text-center" : ""}`}
    >
      <span className="section-label block mb-3">{label}</span>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-text max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
