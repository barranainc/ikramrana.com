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

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      }
    }

    return () => {
      document.title = DEFAULT_TITLE;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
