import { useEffect, useRef, useState } from "react";
import {
  getConsentPreference,
  initializeStoredAnalytics,
  setConsentPreference,
  trackPageView,
  type ConsentPreference,
} from "@/lib/analytics";

export const OPEN_PRIVACY_CHOICES_EVENT = "ikramrana:open-privacy-choices";

export function ConsentBanner() {
  const [preference, setPreference] = useState<ConsentPreference | null>(() =>
    getConsentPreference(),
  );
  const [isOpen, setIsOpen] = useState(() => getConsentPreference() === null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    initializeStoredAnalytics();

    const openChoices = () => setIsOpen(true);
    window.addEventListener(OPEN_PRIVACY_CHOICES_EVENT, openChoices);
    return () => window.removeEventListener(OPEN_PRIVACY_CHOICES_EVENT, openChoices);
  }, []);

  useEffect(() => {
    if (isOpen && preference !== null) headingRef.current?.focus();
  }, [isOpen, preference]);

  const choose = (nextPreference: ConsentPreference) => {
    const previousPreference = preference;
    setConsentPreference(nextPreference);
    setPreference(nextPreference);
    setIsOpen(false);

    if (nextPreference === "analytics") {
      trackPageView(window.location.pathname);
      return;
    }

    if (previousPreference === "analytics") {
      window.location.reload();
    }
  };

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl border border-border bg-card/98 p-5 shadow-[0_18px_60px_oklch(0.15_0.025_260/0.22)] backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6"
      role="region"
      aria-labelledby="privacy-choices-title"
      aria-describedby="privacy-choices-description"
    >
      <div className="flex items-start gap-4">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-electric" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-electric">
            Your privacy, your choice
          </p>
          <h2
            ref={headingRef}
            id="privacy-choices-title"
            tabIndex={-1}
            className="mt-1 font-serif text-xl font-semibold text-foreground outline-none"
          >
            Privacy choices
          </h2>
          <p id="privacy-choices-description" className="mt-2 text-sm leading-relaxed text-slate-text">
            Optional Google Analytics and Microsoft Clarity help us understand which pages are useful and where the site is difficult to use. They will not load unless you allow analytics. Essential site functions work without them.
          </p>
          {preference !== null && (
            <p className="mt-2 font-mono text-[11px] text-slate-dim" aria-live="polite">
              Current choice: {preference === "analytics" ? "analytics allowed" : "essential only"}
            </p>
          )}
          <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="min-h-11 rounded-sm border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Use essential only
            </button>
            <button
              type="button"
              onClick={() => choose("analytics")}
              className="min-h-11 rounded-sm border border-electric bg-electric px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-electric-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Allow analytics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
