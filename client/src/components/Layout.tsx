/*
 * DESIGN: The Architect's Blueprint — Light Theme
 * Layout wrapper with persistent top navigation and footer.
 * Nav: Home / Solutions / Case Studies / Framework / Insights / Blog / AI Knowledge Hub / About / Contact
 * All legacy content pages remain at their own URLs — nav points to hubs.
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/ai-adoption-framework-for-small-businesses", label: "AI Framework" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/ai-knowledge-hub", label: "AI Knowledge Hub" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

// Helper: check if a link is "active" given the current location
function isActive(href: string, location: string): boolean {
  if (href === "/") return location === "/";
  // Framework hub is active when on /framework or any framework sub-page
  if (href === "/framework") {
    return (
      location === "/framework" ||
      location === "/foundational-essay" ||
      location === "/the-model" ||
      location === "/governance" ||
      location === "/dictionary"
    );
  }
  // Insights hub is active when on /insights, /essays/*, or /insight
  if (href === "/insights") {
    return (
      location === "/insights" ||
      location === "/essays" ||
      location.startsWith("/essays/") ||
      location === "/insight"
    );
  }
  // Blog is active when on /blog or any blog post
  if (href === "/blog") {
    return location === "/blog" || location.startsWith("/blog/");
  }
  // AI Knowledge Hub is active when on /ai-knowledge-hub or any hub page
  if (href === "/ai-knowledge-hub") {
    return location === "/ai-knowledge-hub" || location.startsWith("/ai-knowledge-hub/");
  }
  // Industries is active when on /industries or any industry page
  if (href === "/industries") {
    return location === "/industries" || location.startsWith("/industries/");
  }
  // Solutions hub is active when on /solutions or any solution sub-page
  if (href === "/solutions") {
    return location === "/solutions" || location.startsWith("/solutions/");
  }
  // Case Studies is active when on /case-studies or any case study page
  if (href === "/case-studies") {
    return location === "/case-studies" || location.startsWith("/case-studies/");
  }
  // AI Adoption Framework pillar page
  if (href === "/ai-adoption-framework-for-small-businesses") {
    return location === "/ai-adoption-framework-for-small-businesses";
  }
  return location === href || location.startsWith(href + "/");
}

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
                  isActive(link.href, location)
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
                      isActive(link.href, location)
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand column */}
            <div className="sm:col-span-1">
              <h4 className="font-serif text-base font-semibold text-foreground">Ikram Rana</h4>
              <p className="text-sm text-slate-dim mt-1 leading-relaxed max-w-sm">
                Decision architecture, governance-by-design, and operational coherence in AI adoption.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.linkedin.com/in/ikramrana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-dim px-3 py-1.5 border border-border rounded-md hover:border-electric hover:text-electric transition-colors no-underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://ikramrana.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-dim px-3 py-1.5 border border-border rounded-md hover:border-electric hover:text-electric transition-colors no-underline"
                >
                  Substack
                </a>
              </div>
            </div>

            {/* Site links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-4">Site</p>
              <div className="flex flex-col gap-2">
                <Link href="/ai-adoption-framework-for-small-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">AI Adoption Framework</Link>
                <Link href="/framework" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Framework</Link>
                <Link href="/insights" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Insights</Link>
                <Link href="/blog" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Blog</Link>
                <Link href="/case-studies" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Case Studies</Link>
                <Link href="/contact" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline">Contact</Link>
              </div>
            </div>

            {/* AI Knowledge Hub links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-4">
                <Link href="/ai-knowledge-hub" className="hover:text-electric/80 transition-colors no-underline">AI Knowledge Hub</Link>
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/ai-knowledge-hub/what-is-ai-automation-for-small-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Automation</Link>
                <Link href="/ai-knowledge-hub/what-is-ai-adoption-for-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Adoption</Link>
                <Link href="/ai-knowledge-hub/what-is-ai-workflow-automation" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Workflow Automation</Link>
                <Link href="/ai-knowledge-hub/what-are-ai-agents-for-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Agents</Link>
                <Link href="/ai-knowledge-hub/ai-for-small-businesses-guide" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI for Small Businesses</Link>
                <Link href="/ai-knowledge-hub/ai-decision-systems-for-business" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Decision Systems</Link>
                <Link href="/ai-knowledge-hub/ai-governance-for-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Governance</Link>
              </div>
            </div>

            {/* Industries links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-4">
                <Link href="/industries" className="hover:text-electric/80 transition-colors no-underline">Industries</Link>
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/industries/ai-automation-for-law-firms" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Law Firms</Link>
                <Link href="/industries/ai-automation-for-immigration-consultants" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Immigration Consultants</Link>
                <Link href="/industries/ai-automation-for-physiotherapy-clinics" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Physiotherapy Clinics</Link>
                <Link href="/industries/ai-automation-for-accounting-firms" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Accounting Firms</Link>
                <Link href="/industries/ai-automation-for-real-estate-agents" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Real Estate Agents</Link>
                <Link href="/industries/ai-automation-for-dental-clinics" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Dental Clinics</Link>
                <Link href="/industries/ai-automation-for-construction-companies" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Construction Companies</Link>
                <Link href="/industries/ai-automation-for-ecommerce-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">E-Commerce Businesses</Link>
              </div>
            </div>

            {/* Case Studies links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-4">
                <Link href="/case-studies" className="hover:text-electric/80 transition-colors no-underline">Case Studies</Link>
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/case-studies/ai-automation-case-study-insurance-brokerage" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Insurance Brokerage</Link>
                <Link href="/case-studies/ai-automation-case-study-property-management" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Property Management</Link>
                <Link href="/case-studies/ai-automation-case-study-recruitment-agency" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Recruitment Agency</Link>
                <Link href="/case-studies/ai-automation-case-study-veterinary-clinic" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Veterinary Clinic</Link>
                <Link href="/case-studies/ai-automation-case-study-marketing-agency" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Marketing Agency</Link>
                <Link href="/case-studies/ai-automation-case-study-logistics-company" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Logistics Company</Link>
                <Link href="/case-studies/ai-automation-case-study-financial-advisory" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Financial Advisory</Link>
                <Link href="/case-studies/ai-automation-case-study-management-consulting" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Management Consulting</Link>
              </div>
            </div>

            {/* Locations links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-4">
                <Link href="/locations" className="hover:text-electric/80 transition-colors no-underline">Locations</Link>
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/locations/ai-automation-consulting-vaughan-ontario" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Vaughan, Ontario</Link>
                <Link href="/locations/ai-automation-consulting-toronto" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Toronto</Link>
                <Link href="/locations/ai-automation-consulting-greater-toronto-area" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Greater Toronto Area</Link>
                <Link href="/locations/ai-automation-consulting-canada" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Canada</Link>
                <Link href="/locations/ai-automation-consulting-united-states" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">United States</Link>
              </div>
            </div>

            {/* Resources links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-electric mb-4">Resources</p>
              <div className="flex flex-col gap-2">
                <Link href="/ai-resources-for-businesses" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Resources</Link>
                <Link href="/ai-dictionary" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Dictionary</Link>
                <Link href="/blog" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">Blog</Link>
                <Link href="/ai-dictionary/ai-automation" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Automation</Link>
                <Link href="/ai-dictionary/ai-adoption" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Adoption</Link>
                <Link href="/ai-dictionary/ai-agents" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Agents</Link>
                <Link href="/ai-dictionary/ai-governance" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Governance</Link>
                <Link href="/ai-dictionary/ai-strategy" className="text-xs text-slate-dim hover:text-electric transition-colors no-underline leading-snug">AI Strategy</Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/30 flex items-center justify-between">
            <p className="font-mono text-[11px] tracking-wider text-slate-dim">
              &copy; {new Date().getFullYear()} Ikram Rana
            </p>
            <p className="font-mono text-[10px] tracking-wide text-slate-dim/60 italic">
              Built for operators. Not for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
