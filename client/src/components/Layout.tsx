/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * Layout wrapper with persistent top navigation and footer.
 * Navigation: horizontal top bar, left-anchored brand, right-aligned links.
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/essay", label: "Foundational Essay" },
  { href: "/model", label: "The Model" },
  { href: "/governance", label: "Governance" },
  { href: "/dictionary", label: "Dictionary" },
  { href: "/essays", label: "Essays" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/90">
        <div className="container flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="w-2.5 h-2.5 rounded-sm bg-electric shadow-[0_0_12px_oklch(0.45_0.2_250/0.5)]" />
            <div className="flex flex-col">
              <span className="font-serif text-[15px] font-semibold tracking-tight text-foreground leading-tight">
                Ikram Rana
              </span>
              <span className="hidden sm:inline text-[11px] text-slate-dim tracking-wide leading-tight">
                Decision Architecture in AI Adoption
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-sans rounded-lg transition-colors duration-200 no-underline ${
                  location === link.href || (link.href === "/essays" && location.startsWith("/essays/"))
                    ? "text-electric bg-electric/10"
                    : "text-slate-text hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-4 py-1.5 text-[13px] font-sans rounded-lg border transition-colors duration-200 no-underline ${
                location === "/contact"
                  ? "text-electric border-electric/30 bg-electric/10"
                  : "text-slate-text border-border hover:text-foreground hover:border-foreground/20"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-text hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-border/40 bg-background/98 backdrop-blur-md"
            >
              <div className="container py-4 flex flex-col gap-1">
                <Link
                  href="/"
                  className={`px-3 py-2 text-sm font-sans no-underline transition-colors rounded-lg ${
                    location === "/"
                      ? "text-electric bg-electric/10"
                      : "text-slate-text hover:text-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-sans no-underline transition-colors rounded-lg ${
                      location === link.href
                        ? "text-electric bg-electric/10"
                        : "text-slate-text hover:text-foreground"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={`px-3 py-2 text-sm font-sans no-underline transition-colors rounded-lg ${
                    location === "/contact"
                      ? "text-electric bg-electric/10"
                      : "text-slate-text hover:text-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-navy">
        <div className="container py-12">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
            <div>
              <h4 className="font-serif text-base font-semibold text-foreground">Ikram Rana</h4>
              <p className="text-sm text-slate-dim mt-1 leading-relaxed max-w-sm">
                Decision architecture, governance-by-design, and operational coherence in AI adoption.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-dim px-3 py-1.5 border border-border rounded-md hover:border-electric hover:text-electric transition-colors no-underline">
                  LinkedIn
                </a>
                <a href="https://ikramrana.substack.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-dim px-3 py-1.5 border border-border rounded-md hover:border-electric hover:text-electric transition-colors no-underline">
                  Substack
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-[11px] tracking-wider text-slate-dim">
                &copy; {new Date().getFullYear()} Ikram Rana
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/dictionary" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Dictionary</Link>
                <Link href="/contact" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
