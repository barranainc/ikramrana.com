# SEO, AEO, and GEO Remediation Change Log

Date: 2026-07-22  
Branch: `codex/seo-aeo-remediation`  
Canonical origin: `https://ikramrana.com`

## Production incident addressed

The affected deployment returned the homepage HTML for application routes, `robots.txt`, `sitemap.xml`, `llms.txt`, the Google verification file, PDFs, images, and unknown URLs. That caused incorrect media types, a soft-404 response pattern, duplicate host/path variants, and identical initial HTML across routes.

## Release safeguards

- `pnpm build:static` now creates the only deployable directory: `dist/public`.
- The build copies the repository's validated verification file, six PDFs, downloadable operations-kit assets, local images, diagrams, `robots.txt`, `sitemap.xml`, and `llms.txt`.
- Development-only Manus instrumentation is excluded from production.
- Every sitemap URL receives route-specific initial HTML with a title, description, canonical URL, H1-supporting copy, and connected entity markup.
- The generated `.htaccess` maps only sitemap-approved routes to application HTML. Unknown URLs use a static `noindex` 404 document and retain a real HTTP 404 status.
- HTTPS, non-`www`, and no-trailing-slash policies are encoded in the release routing file.
- `pnpm verify:static` checks route coverage, internal literal links, public files, canonical URLs, PDF/WebP signatures, development-code leakage, and 404 safeguards.

## Trust and measurement changes

- Removed anonymous testimonials that did not have a public evidence record.
- Replaced outcome guarantees and unconditional production claims on the primary offer surfaces with scoped language tied to discovery, acceptance criteria, and the actual workflow.
- Kept illustrative scenarios explicitly separate from measured client evidence.
- Connected Person, Organization, WebSite, and WebPage identifiers in generated structured data.
- Added a privacy and cookie-choice page.
- Google Analytics and Microsoft Clarity no longer load before analytics consent.
- SPA page views are deduplicated, Calendly clicks are labelled as lead intent, and both events include the website hostname for scoped reporting.

## Performance and accessibility changes

- Added route-level JavaScript splitting and production vendor chunks.
- Removed production authoring/debug plugins.
- Self-hosted the portrait instead of depending on expiring or third-party image URLs.
- Added a skip link, accessible mobile-navigation state, cookie controls, noindex handling for client-rendered missing pages, and mobile overflow protection.

## Build verification

- TypeScript: passed with `tsc --noEmit`.
- Static release verification: passed for 132 sitemap URLs and 131 deep-route HTML files.
- Required public assets: present with expected signatures and media types.
- Browser runtime: homepage and About page rendered with route-specific title, canonical, H1, and no console errors.
- Consent rejection: no Google Analytics or Microsoft Clarity script loaded.
- Missing client route: `noindex,nofollow` with no canonical tag.
- Mobile width 390 px: no horizontal overflow; mobile navigation opened and exposed nine links.

## Production deployment and live revalidation

- Deployed the complete validated static release and purged the hosting cache on 2026-07-22.
- The homepage, About, Contact, and AI adoption framework routes return `200` with unique initial HTML, route-specific metadata, canonical URLs, meaningful copy, and structured data.
- A random unknown route returns a true `404` with `noindex,nofollow` and no canonical URL.
- `robots.txt`, `sitemap.xml`, `llms.txt`, the Google verification file, the sampled PDF, and the local portrait now return their intended content and media types. The live sitemap contains 132 unique canonical URLs.
- The homepage, About, Contact, and framework response-body hashes are distinct. The sampled live PDF, image, robots file, and sitemap byte-match the validated release.
- Non-`www` HTTP, trailing-slash, and `/index.html` variants redirect to the intended canonical form in one hop while preserving query strings where applicable. The hosting provider's HTTP `www` edge redirect still introduces a second hop before the application redirect reaches non-`www`; this edge-layer exception is documented for hosting support.
- Search Console accepted a fresh sitemap submission on 2026-07-22. Its table still reports the previous 131-page discovery count until Google processes the new 132-URL file.
- Consent was verified on production: analytics scripts do not load for “Necessary only,” and do load after explicit analytics acceptance.
- GA4 Realtime received the consented homepage and SPA About views in the Ikram Rana property. Two controlled browser sessions produced two session starts and four page views total—one homepage and one About view per session—with both page titles visible in Realtime.

## Backup and rollback

The pre-remediation working copy and live responses were captured under:

`/Users/muhammad/Documents/Ikramrana.com/deployment-backups/2026-07-22T0540Z-pre-remediation`

If production validation fails, redeploy the most recent validated full static release rather than a partial overlay. A partial archive must never be used with the Hostinger static deployment operation because that operation replaces the served static contents.

## Factual dependencies still requiring owner evidence

No new testimonial, client result, credential, licence, certification, address, phone number, or Google Business Profile was invented. Any future proof module should be published only after permission and substantiation are recorded. GA4 collection also requires a hostname-scoped report and booking reconciliation before it is used for business conclusions.
