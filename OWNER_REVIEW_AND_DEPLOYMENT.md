# Owner Review and Deployment Handoff

Last updated: 2026-07-16

## Current status

- Pull request: https://github.com/barranainc/ikramrana.com/pull/4
- Branch: `codex/phase-2-authority-content-system`
- Pull request state: open and draft
- GitHub merge status: mergeable
- Latest inspected GitHub Site check: passed
- Live deployment: not completed
- Hostinger deployment automation: not present in this repository
- Live platform confirmed from response headers: Hostinger hPanel with hCDN
- Live asset pattern confirmed: the live site serves the hashed JavaScript and CSS referenced by the repository-root static export
- Repository-root static export: reconciled with the validated production build, but not uploaded to Hostinger

The website source is ready for final owner review. Merging and deployment remain separate actions and should not occur until the hosting and rollback details below are confirmed.

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

- Approved to mark pull request 4 ready and merge into `main`.
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

## Local deployment packages

These packages are stored outside the Git repository in the sibling `deployment-packages/` folder.

- Release: `ikramrana-cbeab8d-static-release.zip`
- Release SHA-256: `1fa422695a19c73ac928ea5829f5254a76460189a4e932b9e23135b73b965651`
- Rollback: `ikramrana-b883a42-rollback.zip`
- Rollback SHA-256: `af16913d3ab0f7e88d8eb501a1ed3acaa5b7a30f29434b89013c787a8f4307bc`

Both archives passed compressed-file integrity checks. The release archive intentionally excludes `.htaccess`, `ops-kit/`, protected downloads, and unrelated production files so extracting it does not replace those items. The rollback archive contains the previous `index.html`, hashed frontend assets, robots file, and sitemap.
