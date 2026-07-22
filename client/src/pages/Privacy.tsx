import { Link } from "wouter";
import { useHead } from "@/hooks/useHead";
import { openCookieSettings } from "@/lib/analytics";

export default function Privacy() {
  useHead(
    "Privacy and Cookie Choices",
    "How ikramrana.com uses consent storage, optional analytics, and external services.",
  );

  return (
    <div className="py-16 md:py-24">
      <article className="mx-auto max-w-[760px] px-4 sm:px-6">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-electric">Site information</span>
        <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Privacy and Cookie Choices</h1>
        <p className="mt-4 text-sm text-slate-dim">Last updated: July 22, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-slate-text">
          This page explains the limited browser storage and third-party services used on ikramrana.com. Optional analytics do not load until you choose to allow them.
        </p>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Necessary storage</h2>
          <p className="mt-4 leading-relaxed text-slate-text">
            The site stores your analytics preference in your browser so it can respect that choice on later visits. This is necessary for the consent control to work.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Optional analytics</h2>
          <p className="mt-4 leading-relaxed text-slate-text">
            If you allow analytics, the site loads Google Analytics and Microsoft Clarity. These services can receive technical and usage information such as the page visited, approximate location derived from an IP address, device or browser information, navigation activity, and interactions with the page. Advertising storage and ad personalization are disabled by this site.
          </p>
          <p className="mt-4 leading-relaxed text-slate-text">
            Analytics are used to understand which pages are useful, find navigation or usability problems, and measure clicks that express interest in booking. A Calendly click is treated as lead intent, not proof that a consultation was booked.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">External services</h2>
          <p className="mt-4 leading-relaxed text-slate-text">
            Links to Calendly, LinkedIn, Substack, and Barrana open services operated by those providers. Their privacy terms apply after you follow a link or use their service.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Change your choice</h2>
          <p className="mt-4 leading-relaxed text-slate-text">
            You can reopen the consent control at any time. If you withdraw analytics permission after analytics scripts have loaded, reload the page after saving the new choice to ensure the page starts without them.
          </p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="mt-5 rounded-lg border border-electric/40 px-5 py-3 text-sm font-semibold text-electric hover:bg-electric/10"
          >
            Open cookie settings
          </button>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Questions</h2>
          <p className="mt-4 leading-relaxed text-slate-text">
            For a question about this page or the site’s data practices, use the <Link href="/contact" className="text-electric hover:underline">contact page</Link>.
          </p>
        </section>
      </article>
    </div>
  );
}

