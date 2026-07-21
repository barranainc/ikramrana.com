# Website Change Register and Live Deployment Guide

Last updated: 2026-07-21

Repository: `barranainc/ikramrana.com`

Production host: Hostinger hPanel with hCDN

Intended audience: Ikram Rana's website developers and Hostinger deployment team

## 1. Purpose

This document is the complete handoff for the ikramrana.com website work completed during the July 2026 project session. It has two purposes:

1. Record the functional, editorial, credibility, search, accessibility, and technical changes made to the website.
2. Give the deployment team a safe procedure for publishing the approved static release without deleting or overwriting `ops-kit/`, `.htaccess`, protected downloads, or unrelated production files.

This is a static single-page React application. The editable source is under `client/src/`. The production website files are generated under `dist/public/` and copied into the Hostinger web root.

## 2. Current status

### Repository status

- The approved website work is merged into GitHub `main`.
- Latest release merge: pull request 15.
- Latest release merge commit: `63969ad81da89395211341cf68719c833f8f6fa6`.
- Static release commit: `b9391af3ee2cb48a58994779e31a16b4bff83204`.
- Both new authority articles are included in the release.
- Type checking, production building, sitemap validation, visual checks, interaction checks, and archive integrity checks passed before handoff.

### Live website status

The approved website was deployed by the hosting team and independently smoke-tested on 2026-07-21 at approximately 11:43 EDT.

The live homepage returns:

- Title: `Ikram Rana | AI Adoption and Workflow Implementation`
- JavaScript: `/assets/index-Bg5ZwFJ_.js`
- CSS: `/assets/index-CN8oirhh.css`

The live asset hashes differ from the earlier local archive because the hosting team produced a fresh build. The live behavior and content passed the release acceptance checks. Hostinger hPanel and hCDN continue to serve the site.

### Live verification result

- Both new authority articles render correctly and survive direct browser refreshes.
- Both articles show official sources, reviewed dates, and the approved CTA.
- `sitemap.xml` is valid XML and contains 131 URLs.
- `sitemap.xml` and `llms.txt` contain both article URLs.
- `robots.txt` allows crawling and points to the sitemap.
- Google Analytics, Microsoft Clarity, and Google site verification remain present.
- Mobile navigation opens, closes with Escape, and returns focus correctly.
- No horizontal overflow appeared at the tested 390-pixel viewport.
- No site-origin runtime errors were recorded.
- Ops Kit remains live, and the authorized dashboard and download links are present.
- Contact contains the intended Calendly, LinkedIn, and Real Life AI destinations.

## 3. Approved production and rollback archives

### Reference production archive

File:

`/Users/muhammad/Documents/Ikramrana.com/deployment-packages/ikramrana-63969ad-hostinger-production.zip`

SHA-256:

`f8cd765696f16c2979ee523bb9d3c67dfafdfe829f9915f1dd8a057c483eb420`

This clean archive remains available for reference or controlled redeployment. It is not a byte-for-byte record of the fresh build currently live. It contains only:

- `index.html`
- `assets/index-BxiqjKrz.js`
- `assets/index-DpvotiLk.css`
- `images/ikram-rana-hero.webp`
- seven approved SVG diagrams
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

It intentionally excludes:

- `.htaccess`
- `ops-kit/`
- protected downloads
- server-side configuration
- environment files
- previous hashed assets
- `.gitkeep`
- the unused `__manus__/debug-collector.js` file

Excluding `ops-kit/` does not remove it. It means the archive does not touch the existing live `ops-kit/` directory.

### Pre-deployment rollback archive

File:

`/Users/muhammad/Documents/Ikramrana.com/deployment-packages/ikramrana-b883a42-rollback.zip`

SHA-256:

`af16913d3ab0f7e88d8eb501a1ed3acaa5b7a30f29434b89013c787a8f4307bc`

The rollback archive matches the homepage asset names observed before the 2026-07-21 deployment:

- `/assets/index-B96Roa0C.js`
- `/assets/index-BpOayiFN.css`

A new complete backup of the accepted live Hostinger web root should now be retained as the authoritative current rollback source.

## 4. Pull request and release history

| Pull request | Merge commit | Change group |
|---|---|---|
| 3 | `3cb7d59` | Restored the editable React and TypeScript source while preserving the root static export and Ops Kit. |
| 4 | `8fb7fdb` | Completed the Phase 2 positioning, claims, content, SEO, accessibility, and visual overhaul. |
| 5 | `12a020e` | Added automated type and production-build checks. |
| 6 | `e9c1e68` | Added a generated static preview artifact for visual review. |
| 7 | `4982f83` | Recorded the Phase 2 merge and Hostinger ownership boundary. |
| 8 | `25b6927` | Added the Phase 3 authority-content program and 90-day publishing plan. |
| 13 | `56b002e` | Added the 2026 Canada business AI adoption article and coordinated social package. |
| 14 | `669a635` | Added the Canadian AI pre-pilot privacy review article and coordinated social package. |
| 15 | `63969ad` | Reconciled and merged the static Hostinger release containing both articles. |

From the static-export pivot at `d6e8cd0` to the final release merge at `63969ad`, the repository records 200 changed paths. Most added paths are the restored editable source and its supporting components. Functional changes are listed below.

## 5. Complete functional change register

### 5.1 Editable source and developer workflow

- Restored the editable React and TypeScript application after the repository had been replaced by a compiled static export.
- Preserved the existing repository-root static export during recovery.
- Preserved `ops-kit/index.php` during recovery and subsequent release work.
- Added permanent repository setup, development, validation, Git, security, and deployment guidance in `README.md`.
- Established `client/src/` as the source of truth for application changes.
- Documented that minified files under the root `assets/` directory must not be edited directly.
- Added locked dependency installation through Corepack and pnpm.
- Added automated GitHub checks for TypeScript and production builds.
- Added a static preview artifact for desktop and mobile review before merge.

### 5.2 Primary brand positioning

- Repositioned Ikram Rana around practical AI adoption and workflow implementation.
- Replaced the old primary title `AI Automation Strategist for Businesses` with `AI Adoption and Workflow Implementation Specialist` in the principal metadata and entity description.
- Changed the homepage promise to helping businesses turn scattered AI experiments into systems their teams actually use.
- Made the editorial position explicit: AI should be used where it genuinely improves work, and rejected where it adds confusion, risk, unnecessary checking, or weakens human judgment.
- Removed generic consultant language from the principal identity and Barrana positioning.
- Replaced narrow small and medium-sized business language with the broader word `businesses` in the approved positioning.
- Defined the primary audience as business owners, founders, and decision-makers dealing with disconnected workflows, repeated manual work, or AI tools that are not producing consistent results.
- Replaced the generic discovery CTA with `Find the Workflow AI Should Fix First.`
- Applied the approved CTA across the homepage, solutions, contact, blog, knowledge, industry, location, dictionary, resource, and illustrative-use-case pages.
- Removed em dashes from public editorial content and maintained content guidance.

### 5.3 Barrana identity

- Described Barrana as a Canadian AI automation and implementation company.
- Explained Barrana in plain business language as connecting the tools businesses already use so routine work gets done reliably.
- Identified Ikram Rana as Barrana's founder.
- Removed unsupported or overly broad compliance, performance, and universal-results implications from Barrana-related website copy.

### 5.4 About page and biographies

- Rewrote the About page around practical AI adoption, workflow clarity, ownership, human review, safeguards, accountability, and measurable implementation.
- Added Ikram's international experience across Pakistan, Singapore, Australia, and Canada.
- Added the approved Singapore government project wording, stating that the contribution occurred through a subcontracting engagement.
- Prevented the Singapore wording from implying a direct government engagement or endorsement.
- Retained broad legal-background wording without claiming that Ikram is licensed to practise law in Ontario.
- Removed public `Licensed Lawyer` wording from principal identity surfaces.
- Kept Pakistan legal credentials, LL.M. completion, LSO candidacy, client count, and experience claims subject to proportionate wording and retained evidence.
- Reworked the biography library and authority descriptions to align with the same identity across the website.

### 5.5 Service offer and Discovery Stage

- Clarified that Barrana's Discovery Stage begins at `$1,500 CAD`.
- Clarified that the Discovery Stage fee is credited toward implementation when the client proceeds.
- Clarified that implementation scope and pricing are prepared after discovery.
- Prevented the starting price from being interpreted as a fixed price for every implementation.
- Made the two-week implementation sprint conditional on discovery findings and workflow suitability.
- Removed unsupported universal ROI, cost-saving, timing, accuracy, capacity, and Week 1 results claims from principal authority and service pages.
- Replaced tool-first recommendations with workflow documentation, baseline measurement, exception handling, ownership, and risk review.

### 5.6 Claims, proof, and testimonials

- Created and applied a conservative claim standard across the website.
- Distinguished verified public evidence, owner-confirmed private evidence, illustrative scenarios, and claims needing verification.
- Removed invented or unsupported direct-quotation framing from knowledge and dictionary content.
- Removed fictional result quotations from all eight illustrative use cases.
- Reframed demo case studies as hypothetical and illustrative AI use cases.
- Added visible hypothetical labels to scenario context, design, outcomes, metadata, and schema.
- Replaced apparent client results with measurements a real implementation would need to test.
- Removed a stale unrouted case-study component that presented invented work as real client outcomes.
- Kept the existing anonymous homepage testimonials based on the owner's confirmation that they are genuine and authorized.
- Did not add the five later named testimonial images. They remain outside this release pending a separate attribution, identity, image, quotation, and publication-permission check.

### 5.7 Blog library

- Reviewed all 30 existing blog articles.
- Replaced malformed, generic, and overlong metadata descriptions with page-specific summaries.
- Removed 26 repetitive promotional `Who helps` FAQ blocks.
- Preserved useful search questions without repeatedly inserting Ikram, Barrana, Vaughan, Canada, and the United States into answers.
- Labelled 26 business and family scenarios as illustrative where required.
- Removed internal drafting artifacts from FAQ answers.
- Removed or qualified unsupported universal claims, fixed thresholds, performance promises, and implementation-time claims.
- Removed a commonly misrepresented 23-minute context-switch statistic.
- Added editorial-standard notices explaining that arguments and generalizations should be tested rather than treated as universal statistics.
- Connected articles to Ikram's author profile and relevant location, framework, service, and authority pages.

### 5.8 Knowledge hub, resource hub, and dictionary

- Reviewed all 10 AI knowledge-hub pages.
- Removed seven repetitive promotional FAQ blocks.
- Labelled six business examples as illustrative.
- Qualified cost, affordability, performance, timing, legal-readiness, and hallucination-control claims.
- Distinguished common technical definitions from Ikram Rana's recommendations, rankings, and analysis.
- Added visible primary sources to the resource hub from Statistics Canada, NIST, the Government of Canada, and the Office of the Privacy Commissioner of Canada.
- Added those sources to relevant Article structured data.
- Reviewed all 22 dictionary entries for required fields and unique slugs.
- Removed fabricated quotation framing, exact illustrative performance claims, universal review schedules, and first-week payback language.

### 5.9 Method and concept governance

- Added `METHOD_AND_CONCEPT_REGISTER.md` as the source of truth for named methods and concepts.
- Applied 13 approved Ikram Rana methods and principles consistently.
- Replaced `Invisibility Threshold` with `Operational Reliability Threshold`.
- Replaced `Decision Forcing Systems` with `Decision Commitment System`.
- Merged overlapping concepts instead of presenting each one as a separate proprietary framework.
- Identified established concepts that require appropriate origin credit.
- Organized family and home-AI material under `Family AI Boundaries` as a Real Life AI article concept.
- Kept family content separate from the primary commercial business AI-adoption category.

### 5.10 Industry, location, and local-authority pages

- Rebuilt 11 industry guides after damaged, duplicated, or unsafe prose was found.
- Added realistic opportunities, poor-fit uses, human decision points, privacy considerations, measurements, and practical starting steps.
- Removed unsupported industry performance ranges and universal benefit claims.
- Rebuilt five location guides with distinct local context and conservative service language.
- Added official source links to location pages.
- Removed unsupported local business counts, employee ranges, and automation-result promises.
- Connected Canadian privacy language to Office of the Privacy Commissioner guidance.
- Connected United States risk language to FTC and NIST guidance.
- Added a reusable author authority card connecting Ikram Rana, Vaughan, the Greater Toronto Area, Barrana, and canonical location pages.
- Kept useful Vaughan and GTA entity signals while avoiding repetitive promotional FAQ stuffing.

### 5.11 SEO, AI-search, metadata, and structured data

- Added route-aware canonical URLs.
- Added consistent Open Graph and X/Twitter metadata.
- Aligned default metadata with the approved positioning.
- Corrected inaccurate or undocumented publication-date handling.
- Added a dedicated About profile to Person and ProfilePage structured data.
- Connected article author schema to the canonical About profile.
- Added consistent organization, person, service, location, article, and author entity signals.
- Repaired nine broken internal links.
- Added 25 previously missing routed pages to the sitemap during the Phase 2 audit.
- Reconciled editable and root-export versions of `robots.txt` and `sitemap.xml`.
- Added `llms.txt` with canonical pages, identity, editorial principles, Barrana, Real Life AI, and illustrative-content guidance.
- Preserved Google site verification.
- Preserved Google Analytics ID `G-1EVHTVWK2L`.
- Preserved Microsoft Clarity project `w0upr4yih0`.

### 5.12 Accessibility, interaction, responsive design, and visual fixes

- Added route and focus improvements to the main navigation.
- Added current-page, controlled, expanded, and landmark semantics.
- Added a working skip link that transfers focus to the main content.
- Corrected the mobile menu so Escape closes it and focus returns to the menu control.
- Corrected route-change behavior so the mobile menu closes after navigation.
- Removed browser zoom restrictions.
- Added reduced-motion support.
- Corrected the responsive seven-column footer layout.
- Corrected low-contrast text and disclosure labels on illustrative-use-case pages.
- Corrected knowledge and industry CTA links that had incorrectly used the internal router for external Calendly URLs.
- Corrected stored newline handling on knowledge pages.
- Corrected the location FAQ table-of-contents target and fixed-header anchor offsets.
- Corrected mobile stacking and measurement language in the industry opportunity diagram.
- Replaced the unreliable remote homepage portrait with the local file `images/ikram-rana-hero.webp`.
- Completed representative desktop and mobile visual checks.
- Completed interactive checks at 390-pixel mobile and 1440-pixel desktop widths.
- Recorded no runtime exceptions during the final interaction pass.

### 5.13 Ongoing authority-content system

- Added `CONTENT_AUTHORITY_SYSTEM.md`.
- Added `90_DAY_AUTHORITY_CONTENT_PLAN.md` with a 12-week editorial queue.
- Added one canonical GitHub Website content request form.
- Added templates for critical analysis, industry guides, and illustrative use cases.
- Defined one-topic coordination across a website article or update, LinkedIn post, Substack Note, and LinkedIn article with FAQs.
- Added evidence status, human review gates, publication safeguards, and performance measurement requirements.
- Defined the website as the long-term canonical authority source.
- Required search and LLM performance baselines after the new site is live.

### 5.14 New authority articles included in this release

#### Canada's AI Adoption Is Accelerating. Operational Readiness Is Not Automatic

Live route after deployment:

`https://ikramrana.com/blog/canada-ai-adoption-2026`

Changes include:

- Current Statistics Canada evidence.
- Survey context and publication dates.
- A critical distinction between tool use and operational adoption.
- Training, controls, ownership, workflow fit, and measurement requirements.
- Official source panel and reviewed date.
- Coordinated LinkedIn post, Substack Note, and LinkedIn article with FAQs in the content package.

#### The Privacy Review Belongs Before the AI Pilot

Live route after deployment:

`https://ikramrana.com/blog/privacy-review-before-ai-pilot-canada`

Changes include:

- A ten-question pre-pilot privacy review for Canadian businesses.
- Official privacy-regulator and government sources.
- Clear separation between Canadian hosting and actual legal compliance.
- Educational information and not-legal-advice safeguards.
- No blanket PIPEDA-compliance promise.
- No implication that Ikram is licensed to practise law in Ontario.
- Coordinated LinkedIn post, Substack Note, and LinkedIn article with FAQs in the content package.

Both routes are included in `sitemap.xml` and `llms.txt`.

### 5.15 Static release and rollback preparation

- Rebuilt the production application from the approved source.
- Reconciled the repository-root static export with the validated build.
- Preserved previous hashed assets for rollback.
- Preserved analytics, site verification, robots, sitemap, AI-search guidance, images, and diagrams.
- Created and validated a production ZIP archive.
- Created and validated a rollback ZIP archive matching the currently observed live asset names.
- Kept deployment ownership with the Hostinger team.

## 6. Files and directories that must be preserved on Hostinger

The deployment team must preserve these items exactly unless a separate approved task explicitly changes them:

- `.htaccess`
- `ops-kit/`
- all protected PDFs, ZIP files, videos, workbooks, or downloads used by Ops Kit
- production environment files
- server-side secrets and configuration
- email, verification, or platform files not included in the release archive
- previous hashed files under `assets/` until the deployment is accepted

The release archive neither contains nor deletes these items.

## 7. Pre-deployment procedure

### Step 1: Schedule and identify ownership

1. Assign one person to deploy and one person to verify.
2. Choose a low-traffic change window.
3. Record the start time in Toronto time.
4. Confirm who has permission to restore the Hostinger backup.
5. Keep this guide and both ZIP files outside the public web root.

### Step 2: Confirm the actual production web root

Do not assume the path solely from convention.

In Hostinger hPanel File Manager:

1. Locate the directory serving `https://ikramrana.com/`.
2. The current `index.html` should reference `/assets/index-B96Roa0C.js` and `/assets/index-BpOayiFN.css` before deployment.
3. Confirm that the same directory contains `.htaccess` and `ops-kit/`.
4. This directory is often `public_html`, but the account configuration is authoritative.
5. Record the confirmed path in the deployment log.

If the title or asset names do not match, stop and investigate whether the domain points to a different document root or whether another deployment occurred.

### Step 3: Verify the production archive

On macOS or Linux:

```bash
shasum -a 256 ikramrana-63969ad-hostinger-production.zip
```

Expected result:

```text
f8cd765696f16c2979ee523bb9d3c67dfafdfe829f9915f1dd8a057c483eb420
```

Test the archive:

```bash
unzip -t ikramrana-63969ad-hostinger-production.zip
```

The result must say that no errors were detected.

On Windows PowerShell:

```powershell
Get-FileHash .\ikramrana-63969ad-hostinger-production.zip -Algorithm SHA256
```

### Step 4: Take a complete production backup

1. Include hidden files such as `.htaccess`.
2. Include `ops-kit/` and every protected download.
3. Include the current `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, and every unrelated production file.
4. Name the backup with the date and time, for example `ikramrana-pre-63969ad-2026-07-20-2100.zip`.
5. Download the backup to a location outside Hostinger.
6. Test that the backup archive opens.
7. Record its file name, size, checksum, storage location, and person responsible for restoration.

Do not proceed without this backup.

### Step 5: Record the current live state

Capture or record:

- Homepage screenshot at desktop width.
- Homepage screenshot at mobile width.
- Current homepage title.
- Current JavaScript and CSS asset names.
- Current `robots.txt` and `sitemap.xml`.
- Successful access to the Ops Kit password page.
- Current Google Analytics and Microsoft Clarity activity if access is available.

## 8. Deployment procedure

### Preferred method: Hostinger File Manager

1. Open the confirmed production web root.
2. Do not delete the directory contents.
3. Upload `ikramrana-63969ad-hostinger-production.zip`.
4. Extract it directly into the confirmed web root.
5. Allow the following approved public files to be added or replaced:
   - `index.html`
   - `robots.txt`
   - `sitemap.xml`
   - `llms.txt`
   - files under `assets/`, `images/`, and `diagrams/`
6. Do not overwrite or delete `.htaccess`.
7. Do not overwrite, move, rename, or delete `ops-kit/`.
8. Do not delete old hashed files in `assets/` during this deployment.
9. Do not delete unrelated root files.
10. Remove the uploaded release ZIP from the public web root after successful extraction so it cannot be downloaded publicly.

The new `index.html` will point to the new hashed asset files. Keeping the old hashed files does not cause the old application to load, and it preserves a fast rollback path.

### File permissions

Use the hosting account's existing safe permissions. Typical static permissions are:

- directories: `755`
- public files: `644`

Do not grant world-writable permissions.

### Cache handling

1. After file extraction, purge the Hostinger hCDN cache for ikramrana.com.
2. Open a private browser window.
3. Hard-refresh the homepage.
4. Confirm the new asset names before testing the remaining pages.

## 9. Required post-deployment verification

Do not mark the deployment complete until all critical checks pass.

### 9.1 Release identity

- Homepage title is `Ikram Rana | AI Adoption and Workflow Implementation`.
- Homepage source references `/assets/index-BxiqjKrz.js`.
- Homepage source references `/assets/index-DpvotiLk.css`.
- The homepage uses the local Ikram Rana portrait.
- No unresolved `%VITE_...%` placeholders appear in the HTML.

### 9.2 Critical routes

Open each URL directly in a new browser tab. Also refresh the page to confirm that `.htaccess` still provides the single-page application fallback.

- `https://ikramrana.com/`
- `https://ikramrana.com/about`
- `https://ikramrana.com/solutions`
- `https://ikramrana.com/ai-adoption-framework-for-small-businesses`
- `https://ikramrana.com/blog`
- `https://ikramrana.com/blog/canada-ai-adoption-2026`
- `https://ikramrana.com/blog/privacy-review-before-ai-pilot-canada`
- `https://ikramrana.com/ai-knowledge-hub`
- `https://ikramrana.com/industries`
- `https://ikramrana.com/locations/ai-automation-consulting-vaughan-ontario`
- `https://ikramrana.com/contact`

For both new articles, confirm the correct title, full article body, official sources, reviewed date, internal links, FAQs, and CTA. A `200` response alone is not enough because the single-page application fallback can return `index.html` for an invalid path.

### 9.3 Crawl and AI-search files

Verify:

- `https://ikramrana.com/robots.txt`
- `https://ikramrana.com/sitemap.xml`
- `https://ikramrana.com/llms.txt`

Confirm that the sitemap and `llms.txt` contain:

- `https://ikramrana.com/blog/canada-ai-adoption-2026`
- `https://ikramrana.com/blog/privacy-review-before-ai-pilot-canada`

Confirm that `sitemap.xml` opens as valid XML rather than the application homepage.

### 9.4 Ops Kit preservation

Verify:

- `https://ikramrana.com/ops-kit/`
- The password page appears.
- An authorized login still reaches the dashboard.
- At least one protected download opens for an authorized user.
- The directory is not exposed as an open file listing.

Do not paste Ops Kit passwords, cookie secrets, private download URLs, or confidential asset names into the deployment log.

### 9.5 Analytics and verification

Confirm in browser developer tools or the corresponding dashboards:

- Google Analytics ID `G-1EVHTVWK2L` loads.
- Microsoft Clarity project `w0upr4yih0` loads.
- Google site verification remains in the homepage HTML.
- No JavaScript runtime exceptions appear.

Use a test visit that complies with the site's consent and privacy configuration.

### 9.6 Interaction and accessibility

At a mobile viewport near 390 pixels:

- Open and close the menu.
- Press Escape and confirm the menu closes.
- Confirm focus returns to the menu button.
- Follow a menu link and confirm the menu closes.
- Confirm there is no horizontal overflow.

At desktop width:

- Confirm the navigation and seven-column footer render correctly.
- Confirm the skip link transfers focus to the main content.
- Confirm CTA links and in-page FAQ links reach their targets.
- Confirm reduced-motion behavior when the operating-system preference is enabled.

### 9.7 External destinations

Manually verify:

- Calendly opens the intended booking page.
- LinkedIn opens the intended Ikram Rana profile.
- Barrana opens the intended company website.
- Real Life AI opens the official Substack publication.

LinkedIn may block automated requests, so this check must be performed in a normal browser.

## 10. Acceptance criteria

The release can be accepted only when:

- The new title and hashed assets are live.
- Both new articles render correctly.
- Direct-route refreshes work.
- `robots.txt`, `sitemap.xml`, and `llms.txt` return the correct file types and content.
- Ops Kit remains functional and protected.
- Analytics and site verification remain present.
- Mobile navigation and desktop layout pass.
- No blocking console or network errors appear.
- The owner or assigned reviewer approves the live result.

## 11. Rollback procedure

Rollback immediately if any of these occur:

- Homepage or critical routes are blank or broken.
- New assets return `404` or incorrect content types.
- Direct route refreshes fail.
- Ops Kit stops working or protected assets become public.
- Analytics or required verification is removed.
- A severe content, privacy, security, or accessibility defect appears.

### Preferred rollback

1. Restore the complete dated Hostinger backup taken immediately before deployment.
2. Restore hidden files, Ops Kit, protected downloads, and unrelated files exactly as they were.
3. Purge Hostinger hCDN cache.
4. Verify the homepage, a client-side route, `robots.txt`, `sitemap.xml`, and Ops Kit.

### Fast frontend rollback

If the full backup restore is slow and the problem is limited to the public React frontend:

1. Extract `ikramrana-b883a42-rollback.zip` into the confirmed web root.
2. Allow it to replace `index.html`, `robots.txt`, and `sitemap.xml`.
3. Keep all existing assets, including both old and new hashed asset files.
4. Do not touch `.htaccess` or `ops-kit/`.
5. Purge Hostinger hCDN cache.
6. Confirm that the homepage again references `/assets/index-B96Roa0C.js` and `/assets/index-BpOayiFN.css`.
7. Complete the full backup restore if any server-side or protected file was affected.

The fast frontend rollback is not a substitute for a full production backup.

## 12. Deployment record template

Complete this section in the team ticket or deployment log.

```text
Repository: barranainc/ikramrana.com
Release merge commit: 63969ad81da89395211341cf68719c833f8f6fa6
Production archive: ikramrana-63969ad-hostinger-production.zip
Archive SHA-256: f8cd765696f16c2979ee523bb9d3c67dfafdfe829f9915f1dd8a057c483eb420
Confirmed Hostinger web root:
Pre-deployment backup name:
Pre-deployment backup checksum:
Backup storage location:
Deployment started, America/Toronto:
Deployment completed, America/Toronto:
Deployed by:
Verified by:
Hostinger hCDN purged:
Homepage verified:
Direct route refresh verified:
Canada AI adoption article verified:
Canadian privacy article verified:
robots.txt verified:
sitemap.xml verified:
llms.txt verified:
Ops Kit verified:
Google Analytics verified:
Microsoft Clarity verified:
Mobile navigation verified:
External destinations verified:
Console and network errors:
Rollback required:
Final status:
Notes:
```

## 13. After acceptance

1. Deployment verification was recorded on 2026-07-21.
2. `FULL_SITE_REVIEW.md` and `90_DAY_AUTHORITY_CONTENT_PLAN.md` were updated to show the website articles as published.
3. The hosting team should record its confirmed web root, deployment method, exact time, deployed-by name, and accepted-live backup location.
4. Submit the sitemap through Google Search Console.
5. Request indexing for the two new articles after confirming their canonical URLs.
6. Record the search, traffic, CTA, and qualified-enquiry baseline.
7. Publish the coordinated social content for both articles.
8. Begin the next authority-content item: the AI agent access and approval map in GitHub issue 10.
9. Review results after 30 days before increasing publishing volume.

## 14. Known follow-up items outside this release

- The five named testimonial images are not included and require a separate publication-permission review.
- Ops Kit still requires a separate security remediation to rotate and externalize its embedded password and cookie-signing secret.
- The exact permanent Hostinger deployment automation remains undocumented. This release uses a controlled manual static upload.
- LinkedIn must be checked manually because automated requests may be blocked.
- Private evidence for owner-confirmed credentials, experience, client counts, and testimonials remains outside the public repository.

## 15. Developer maintenance rules

- Make content and interface changes in `client/src/`.
- Put public source assets under `client/public/`.
- Do not edit root minified JavaScript or CSS directly.
- Use Node.js 22 and the committed pnpm lock file.
- Run `corepack pnpm check` and `corepack pnpm build` before every release.
- Review desktop and mobile output before merge.
- Use the GitHub Website content request form for new authority content.
- Maintain the approved positioning, CTA, method register, claim labels, and no-em-dash rule.
- Do not describe a merged page as published until its live URL is verified.
- Never delete the production web root as a normal static deployment step.
- Preserve `.htaccess`, `ops-kit/`, protected assets, analytics, verification files, and previous hashed assets through every release.
