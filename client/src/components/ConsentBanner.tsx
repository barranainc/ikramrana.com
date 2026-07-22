import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  getConsentPreferences,
  saveConsentPreferences,
  trackPageView,
} from "@/lib/analytics";

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const stored = getConsentPreferences();
    if (stored) {
      setAnalytics(stored.analytics);
    } else {
      setOpen(true);
    }

    const openSettings = () => {
      const current = getConsentPreferences();
      setAnalytics(current?.analytics ?? false);
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener("ikramrana-open-cookie-settings", openSettings);
    return () => window.removeEventListener("ikramrana-open-cookie-settings", openSettings);
  }, []);

  useEffect(() => {
    if (open && showDetails) headingRef.current?.focus();
  }, [open, showDetails]);

  const save = (allowAnalytics: boolean) => {
    const wasAllowed = getConsentPreferences()?.analytics === true;
    saveConsentPreferences(allowAnalytics);
    setAnalytics(allowAnalytics);
    setOpen(false);
    setShowDetails(false);
    if (allowAnalytics) {
      window.setTimeout(() => trackPageView(), 0);
    } else if (wasAllowed) {
      window.location.reload();
    }
  };

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-[120] mx-auto max-w-3xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <h2
            ref={headingRef}
            id="cookie-consent-title"
            tabIndex={-1}
            className="font-serif text-xl font-semibold text-foreground outline-none"
          >
            Your privacy choices
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-text">
            This site uses necessary storage for your consent choice. With your permission, Google Analytics and Microsoft Clarity help measure how the site is used. Advertising cookies are not enabled.
          </p>
          <div className="mt-3 flex gap-4 text-xs">
            <Link href="/privacy" className="text-electric no-underline hover:underline">
              Privacy and cookies
            </Link>
            <button
              type="button"
              onClick={() => setShowDetails((value) => !value)}
              className="text-electric hover:underline"
              aria-expanded={showDetails}
            >
              {showDetails ? "Hide choices" : "Manage choices"}
            </button>
          </div>
          {showDetails && (
            <div className="mt-4 space-y-3 rounded-xl border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Necessary storage</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-text">Remembers this choice. Always active.</p>
                </div>
                <span className="text-xs font-semibold text-slate-dim">Always on</span>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-4 border-t border-border pt-3">
                <span>
                  <span className="block text-sm font-semibold text-foreground">Analytics</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-text">Helps identify useful pages, navigation problems, and lead-intent clicks.</span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
              </label>
            </div>
          )}
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 md:max-w-[220px] md:justify-end">
          {showDetails ? (
            <button
              type="button"
              onClick={() => save(analytics)}
              className="rounded-lg bg-electric px-4 py-2.5 text-sm font-semibold text-white"
            >
              Save choices
            </button>
          ) : (
            <button
              type="button"
              onClick={() => save(true)}
              className="rounded-lg bg-electric px-4 py-2.5 text-sm font-semibold text-white"
            >
              Accept analytics
            </button>
          )}
          <button
            type="button"
            onClick={() => save(false)}
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-card"
          >
            Necessary only
          </button>
        </div>
      </div>
    </aside>
  );
}
