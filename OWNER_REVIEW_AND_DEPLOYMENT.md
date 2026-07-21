# Owner Review and Deployment Handoff

Last updated: 2026-07-21

## Current status

- Website foundation pull request: https://github.com/barranainc/ikramrana.com/pull/4
- Canadian AI privacy package pull request: https://github.com/barranainc/ikramrana.com/pull/14
- Branch merged into: `main`
- Canadian AI privacy package state: merged on 2026-07-16
- Canadian AI privacy package merge commit: `669a63546f02013cc4bc0e726f47f8057f658c75`
- Final GitHub Site check: passed
- Live deployment: completed and independently smoke-tested on 2026-07-21 at approximately 11:43 EDT
- Deployment owner: Ikram Rana's hosting team
- Hostinger deployment automation: not present in this repository
- Live platform confirmed from response headers: Hostinger hPanel with hCDN
- Live asset pattern confirmed: the live site serves the hashed JavaScript and CSS referenced by the repository-root static export
- Live JavaScript asset: `/assets/index-Bg5ZwFJ_.js`
- Live CSS asset: `/assets/index-CN8oirhh.css`
- Deployment note: the hosting team produced a fresh build, so the live asset hashes differ from the earlier local release archive

The approved website, including both new authority articles, is now live. GitHub merge and Hostinger publication remained separate steps, and both are complete.

## Live deployment verification

The following checks passed on 2026-07-21:

- Homepage title is `Ikram Rana | AI Adoption and Workflow Implementation`.
- Homepage contains the approved positioning, audience, portrait, and CTA.
- Google Analytics `G-1EVHTVWK2L` is present.
- Microsoft Clarity `w0upr4yih0` is present.
- Google site verification is present.
- Both new authority articles render with the correct headings, official sources, reviewed dates, internal CTA, and direct-route refresh behavior.
- The live JavaScript bundle contains both article slugs.
- `sitemap.xml` is valid XML and contains 131 URLs.
- `sitemap.xml` and `llms.txt` contain both new article URLs.
- `robots.txt` allows crawling and points to the sitemap.
- The mobile menu opens, closes with Escape, and returns focus to the menu control.
- No site-origin browser runtime errors were recorded.
- Ops Kit remains live. The authorized dashboard and PDF and ZIP download links are present.
- The Contact page contains the intended Calendly, LinkedIn, and Real Life AI destinations.

## Authority article release

This release includes both approved articles:

- `/blog/canada-ai-adoption-2026`
- `/blog/privacy-review-before-ai-pilot-canada`

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

## Deployment account details to retain

The deployment passed. The hosting team should still add these account-level details to the permanent deployment record:

- The production web-root path, commonly `public_html`, but it must not be assumed.
- Whether the release was uploaded manually, through Git, through a Hostinger deployment feature, or through another process.
- Whether a staging domain or staging folder is available.
- How the current production files will be backed up and downloaded.
- Who has permission to restore the backup if deployment fails.
- Whether DNS, email, analytics, or other services depend on files in the web root.

## Safe static deployment plan for future releases

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

## Merge and deployment authorization history

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

- Recommended production release: `ikramrana-63969ad-hostinger-production.zip`
- Recommended production release SHA-256: `f8cd765696f16c2979ee523bb9d3c67dfafdfe829f9915f1dd8a057c483eb420`
- Current release: `ikramrana-669a635-static-release.zip`
- Current release SHA-256: `a73dba138aa6a661c4e6a8cbf65baf5771488f8c91a86c31ed4728a1aceef2a8`
- Previous release: `ikramrana-cbeab8d-static-release.zip`
- Previous release SHA-256: `1fa422695a19c73ac928ea5829f5254a76460189a4e932b9e23135b73b965651`
- Rollback: `ikramrana-b883a42-rollback.zip`
- Rollback SHA-256: `af16913d3ab0f7e88d8eb501a1ed3acaa5b7a30f29434b89013c787a8f4307bc`

All local archives passed compressed-file integrity checks. The hosting team deployed a fresh build with different hashed asset names, so these archives are now reference and pre-deployment rollback artifacts rather than a byte-for-byte record of the live build. A new dated backup of the accepted live Hostinger web root should be retained as the authoritative current rollback source. The archives exclude `.htaccess`, `ops-kit/`, protected downloads, unrelated production files, `.gitkeep`, and the unused internal debug collector.

The full change register and step-by-step developer deployment procedure are maintained in `WEBSITE_CHANGES_AND_LIVE_DEPLOYMENT_GUIDE.md`.
