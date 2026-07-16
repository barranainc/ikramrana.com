import { useEffect } from "react";

const BRAND_SUFFIX = " | Ikram Rana";
const DEFAULT_TITLE = "Ikram Rana | AI Adoption and Workflow Implementation";
const DEFAULT_DESCRIPTION =
  "Helping businesses move from scattered AI experiments to working systems their teams actually use. Critical, practical guidance from Ikram Rana.";

/**
 * Sets document.title and meta description on mount.
 * Restores defaults on unmount so navigating away never leaves stale metadata.
 */
export function useHead(title: string, description?: string) {
  useEffect(() => {
    // Set title with brand suffix if not already present
    document.title = title.includes("Ikram Rana")
      ? title
      : title + BRAND_SUFFIX;

    const pageTitle = document.title;
    const pageUrl = `https://ikramrana.com${window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/$/, "")}`;

    document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", pageUrl);

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      document.querySelector('meta[name="description"]')?.setAttribute("content", DEFAULT_DESCRIPTION);
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", DEFAULT_TITLE);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", DEFAULT_DESCRIPTION);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", DEFAULT_TITLE);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
