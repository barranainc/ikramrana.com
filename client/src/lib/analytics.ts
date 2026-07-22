export const GA_MEASUREMENT_ID = "G-J21TS9MFJ7";
export const CONSENT_STORAGE_KEY = "ikramrana_consent_v1";
export const CLARITY_PROJECT_ID = "w0upr4yih0";

export type ConsentPreference = "analytics" | "essential";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    __ikramAnalyticsLoaded?: boolean;
    __ikramClarityLoaded?: boolean;
  }
}

export function getConsentPreference(): ConsentPreference | null {
  if (typeof window === "undefined") return null;

  try {
    const preference = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return preference === "analytics" || preference === "essential" ? preference : null;
  } catch {
    return null;
  }
}

function updateGoogleConsent(preference: ConsentPreference) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: preference === "analytics" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function initializeGoogleAnalytics() {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    window.__ikramAnalyticsLoaded
  ) {
    return;
  }

  window.__ikramAnalyticsLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

function initializeClarity() {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    window.__ikramClarityLoaded
  ) {
    return;
  }

  window.__ikramClarityLoaded = true;
  window.clarity =
    window.clarity ||
    function (...args: unknown[]) {
      const clarityWithQueue = window.clarity as ((...queuedArgs: unknown[]) => void) & {
        q?: unknown[][];
      };
      clarityWithQueue.q = clarityWithQueue.q || [];
      clarityWithQueue.q.push(args);
    };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);
}

function expireAnalyticsCookies() {
  if (typeof document === "undefined") return;

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_clck" || name === "_clsk");

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.ikramrana.com; SameSite=Lax`;
  }
}

export function setConsentPreference(preference: ConsentPreference) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, preference);
  } catch {
    // The consent update still applies for the current page if storage is unavailable.
  }

  updateGoogleConsent(preference);

  if (preference === "analytics") {
    initializeGoogleAnalytics();
    initializeClarity();
  } else {
    expireAnalyticsCookies();
  }
}

export function initializeStoredAnalytics() {
  if (getConsentPreference() !== "analytics") return;

  updateGoogleConsent("analytics");
  initializeGoogleAnalytics();
  initializeClarity();
}

function sendEvent(eventName: string, parameters: Record<string, unknown>) {
  if (
    typeof window === "undefined" ||
    typeof window.gtag !== "function" ||
    getConsentPreference() !== "analytics"
  ) {
    return;
  }

  window.gtag("event", eventName, {
    ...parameters,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");

  sendEvent("page_view", {
    page_title: document.title,
    page_location: `${window.location.origin}${normalizedPath}`,
    page_path: normalizedPath,
  });
}

export function trackCalendlyLead(linkUrl: string) {
  if (typeof window === "undefined") return;

  sendEvent("generate_lead", {
    method: "calendly",
    link_url: linkUrl,
    page_location: window.location.href,
  });
}
