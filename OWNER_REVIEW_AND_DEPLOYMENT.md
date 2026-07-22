# Owner Review and Deployment Handoff

## Consent, redirects, Analytics, and Search Console release, 2026-07-22

- The live website now uses Google Analytics measurement ID `G-J21TS9MFJ7` for the Personal Website stream.
- Route-aware `page_view` tracking and Calendly `generate_lead` tracking are included.
- A privacy choice panel implements Google Consent Mode with analytics and advertising-related storage denied by default.
- Google Analytics and Microsoft Clarity do not load until the visitor selects `Allow analytics`.
- Visitors can reopen the panel from the footer and return to essential-only use.
- Three retired routes now return server-side HTTP 301 responses to their intended replacements.
- TypeScript validation, the Vite production build, desktop checks, and mobile checks passed before deployment.
- The static overlay was deployed through the official Hostinger MCP and server-side and CDN caches were purged.
- The deployment overlay contained only `.htaccess`, `index.html`, and the new hashed JavaScript and CSS assets. It did not contain or replace Ops Kit files.
- All 45 obsolete sitemap submissions from 2020 were removed from Search Console.
- Search Console now contains exactly one submitted sitemap: `https://ikramrana.com/sitemap.xml`, status Success, with 131 discovered pages.
- Validation for the corrected seven-URL `Soft 404` group was started on 2026-07-22.
- Google now needs time to recrawl the corrected URLs and refresh the indexing report.

Last updated: 2026-07-22

## Current status

- Website foundation pull request: https://github.com/barranainc/ikramrana.com/pull/4
- Canadian AI privacy package pull request: https://github.com/barranainc/ikramrana.com/pull/14
- Branch merged into: `main`
- Canadian AI privacy package state: merged on 2026-07-16
- Canadian AI privacy package merge commit: `669a63546f02013cc4bc0e726f47f8057f658c75`
- Final GitHub Site check: passed
- Live deployment: completed on 2026-07-22
- Deployment owner: Ikram Rana, supported through the official Hostinger MCP
- Hostinger deployment automation: available through the connected Hostinger MCP, but not stored in this repository
- Live platform confirmed from response headers: Hostinger hPanel with hCDN
- Live asset pattern confirmed: the live site serves the hashed JavaScript and CSS referenced by the repository-root static export
- Repository-root static export: synchronized with the current live release

The approved website foundation and authority articles are live. The consent, redirect, Analytics, and Search Console release is now being synchronized back to GitHub so the repository and production website remain aligned.

## Authority article release

This release includes both approved articles:

- `/knowledge/canada-ai-adoption-2026`
- `/knowledge/privacy-review-before-ai-pilot-canada`

The generated site bundle, sitemap, and `llms.txt` include both articles. The production build and repository-root static export were checked before packaging.

## Final owner review

Review these pages in this order:

1. Homepage
   - Confirm the main promise, audience language, portrait, and primary CTA.
   - Confirm that the critical and pragmatic AI position feels accurate.

2. About
   - Confirm the international experience across Pakistan, Singapore, Australia, and Canada.
   - Confirm the legal-background wording does not imply an Ontario lawyer licence.

3. Solutions and Discovery Stage
   - Confirm the $1,500 CAD Discovery Stage description.
   - Confirm that the discovery fee is credited toward implementation when the client proceeds.
   - Confirm that implementation is quoted only after discovery.
   - Confirm that the two-week sprint is presented as conditional on discovery findings.

4. Illustrative AI use cases
   - Confirm that every scenario is visibly hypothetical and not presented as client work.
   - Confirm that example figures are clearly labelled as outcomes to measure, not promises.

5. Knowledge, industry, and location guides
   - Confirm the language is understandable to non-technical business owners.
   - Confirm that privacy, compliance, professional, and legal statements remain conditional on the actual workflow and requirements.

6. Contact and external destinations
   - Confirm that Calendly opens the intended booking page.
   - Manually confirm that LinkedIn opens the intended Ikram Rana profile. LinkedIn blocks the automated check.

7. Mobile navigation and footer
   - Open the menu, follow a link, and confirm the menu closes.
   - Open the menu and press Escape, then confirm focus returns to the menu button.
   - Check the footer at desktop and mobile widths.

Previously approved positioning, audience, Barrana identity, primary CTA, biographies, Discovery Stage, address decision, testimonial authorization, and privately retained proof remain recorded in the project history. This final review is for the assembled website experience.

## Deployment facts still required

The public platform and static-export pattern are now confirmed. Confirm these remaining items from the Hostinger account before deployment:

- The production web-root path, commonly `public_html`, but it must not be assumed.
- Whether the root static export is uploaded manually, through Git, through a Hostinger deployment feature, or through another process.
- Whether a staging domain or staging folder is available.
- How the current production files will be backed up and downloaded.
- Who has permission to restore the backup if deployment fails.
- Whether DNS, email, analytics, or other services depend on files in the web root.

## Safe static deployment plan

Use this only after the Hostinger path and access method are confirmed.

1. Record the current live version and take a complete dated backup of the production web root.
2. Build the approved commit locally or in a controlled build environment.
3. Test the generated `dist/public/` output on a staging URL or staging folder when available.
4. Publish the generated frontend files without deleting unrelated production files.
5. Preserve `.htaccess`, `ops-kit/`, protected downloads, verification files, and any server-only configuration.
6. Verify the homepage, one client-side route, mobile navigation, Calendly, `robots.txt`, `sitemap.xml`, `llms.txt`, and `ops-kit/`.
7. Confirm that analytics requests work in production and that no unresolved environment placeholders remain.
8. Monitor the live site immediately after deployment.

## Rollback plan

1. Keep the dated production backup unchanged until the deployment is accepted.
2. Preserve the previous hashed asset files during deployment.
3. If the new site fails, restore the previous `index.html` first. It will point back to the previous hashed assets when those assets were preserved.
4. Restore any other replaced public files from the dated backup.
5. Clear Hostinger or CDN caches only after the correct version is restored.
6. Recheck the homepage, a client-side route, `robots.txt`, `sitemap.xml`, and `ops-kit/`.

## Merge and deployment authorization

The final authorization should explicitly confirm both decisions:

- Approved to merge pull request 14 into `main`.
- Approved to deploy the identified commit through the confirmed Hostinger process.

Do not treat approval to merge as approval to deploy.

## Release preservation checks completed

- Google Analytics measurement ID `G-1EVHTVWK2L` is preserved in the production build.
- Microsoft Clarity project `w0upr4yih0` is preserved in the production build.
- Google site verification is preserved in the production build.
- Unresolved analytics environment placeholders were removed.
- The editable and root-export versions of `robots.txt` and `sitemap.xml` now match.
- The new portrait, `llms.txt`, diagrams, and hashed frontend assets are included in the root export.
- Previous hashed assets remain available for rollback.
- Both authority article routes are present in the generated JavaScript bundle.
- `sitemap.xml` is valid XML and contains 131 URLs.

## Local deployment packages

These packages are stored outside the Git repository in the sibling `deployment-packages/` folder.

- Current release: `ikramrana-669a635-static-release.zip`
- Current release SHA-256: `a73dba138aa6a661c4e6a8cbf65baf5771488f8c91a86c31ed4728a1aceef2a8`
- Previous release: `ikramrana-cbeab8d-static-release.zip`
- Previous release SHA-256: `1fa422695a19c73ac928ea5829f5254a76460189a4e932b9e23135b73b965651`
- Rollback: `ikramrana-b883a42-rollback.zip`
- Rollback SHA-256: `af16913d3ab0f7e88d8eb501a1ed3acaa5b7a30f29434b89013c787a8f4307bc`

All archives passed compressed-file integrity checks. The current release archive intentionally excludes `.htaccess`, `ops-kit/`, protected downloads, and unrelated production files so extracting it does not replace those items. The rollback archive contains the previous `index.html`, hashed frontend assets, robots file, and sitemap.
