import { useEffect } from "react";

const BRAND_SUFFIX = " | Ikram Rana";
const DEFAULT_TITLE = "Ikram Rana | AI Adoption and Workflow Implementation";
const DEFAULT_DESCRIPTION =
  "Helping businesses move from scattered AI experiments to working systems their teams actually use. Critical, practical guidance from Ikram Rana.";

/**
 * Sets document.title and meta description on mount.
 * Restores defaults on unmount so navigating away never leaves stale metadata.
 */
type HeadOptions = {
  noindex?: boolean;
};

export function useHead(title: string, description?: string, options: HeadOptions = {}) {
  useEffect(() => {
    // Set title with brand suffix if not already present
    document.title = title.includes("Ikram Rana")
      ? title
      : title + BRAND_SUFFIX;

    const pageTitle = document.title;
    const pageUrl = `https://ikramrana.com${window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/$/, "")}`;

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = options.noindex
      ? "noindex,nofollow"
      : "index,follow,max-image-preview:large";

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (options.noindex) {
      canonical?.remove();
    } else if (canonical) {
      canonical.href = pageUrl;
    }

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
      document.querySelector('meta[name="robots"]')?.setAttribute("content", "index,follow,max-image-preview:large");
    };
  }, [title, description, options.noindex]);
}
