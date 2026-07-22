const CONSENT_STORAGE_KEY = "ikramrana-consent-v1";
const GA_MEASUREMENT_ID = "G-1EVHTVWK2L";
const CLARITY_PROJECT_ID = "w0upr4yih0";

export type ConsentPreferences = {
  analytics: boolean;
  updatedAt: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;
let lastTrackedLocation = "";

function readStoredPreferences(): ConsentPreferences | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;
    if (typeof parsed.analytics !== "boolean") return null;
    return {
      analytics: parsed.analytics,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
}

export function getConsentPreferences() {
  return readStoredPreferences();
}

export function analyticsAllowed() {
  return readStoredPreferences()?.analytics === true;
}

export function initializeAnalytics() {
  if (analyticsInitialized || !analyticsAllowed()) return false;

  ensureGtag();
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });
  loadScript(
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`,
    "ikramrana-google-analytics",
  );

  window.clarity = window.clarity || function clarity(...args: unknown[]) {
    (window.clarity as unknown as { q?: unknown[] }).q =
      (window.clarity as unknown as { q?: unknown[] }).q || [];
    (window.clarity as unknown as { q: unknown[] }).q.push(args);
  };
  loadScript(`https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`, "ikramrana-clarity");

  analyticsInitialized = true;
  return true;
}

export function saveConsentPreferences(analytics: boolean) {
  const preferences: ConsentPreferences = {
    analytics,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));

  ensureGtag();
  window.gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (analytics) initializeAnalytics();
  window.dispatchEvent(new CustomEvent("ikramrana-consent-changed", { detail: preferences }));
  return preferences;
}

export function trackPageView(pathname = window.location.pathname) {
  if (!analyticsAllowed()) return;
  initializeAnalytics();

  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const pageLocation = `${window.location.origin}${normalizedPath}${window.location.search}`;
  if (lastTrackedLocation === pageLocation) return;
  lastTrackedLocation = pageLocation;

  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: pageLocation,
    page_path: normalizedPath,
    site_hostname: window.location.hostname,
  });
}

export function trackCalendlyLead(linkUrl: string) {
  if (!analyticsAllowed()) return;
  initializeAnalytics();
  window.gtag?.("event", "generate_lead", {
    lead_source: "calendly",
    link_url: linkUrl,
    site_hostname: window.location.hostname,
  });
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("ikramrana-open-cookie-settings"));
}

