# Oracles of Modern Times release

Prepared for Ikram Rana from publishing kit version 1. User approved the series positioning and requested website publication on 1 October 2026 (Toronto).

## Release scope
- `/oracles-of-modern-times`: series index, author, links to personal Instagram and existing Substack.
- `/oracles-of-modern-times/we-keep-calling-ai-a-tool`: complete opening essay with linked sources.
- Blog, Essays and footer entry points; canonical metadata, sitemap, machine-readable guide and full static article text.
- Three follow-up essays retained in `follow-up-essays.json`, outside the client bundle. They are drafts for later releases, not scheduled posts.

## Deployment
The repository's existing Hostinger process must be used. No Hostinger tool is available in the authoring session. A GitHub merge alone is not proof of deployment.

Before the live release, set `publishedDate` in `client/src/data/oracles.json` to the actual Toronto publication date and rebuild. The preview intentionally displays only a review date and does not fabricate a publication timestamp.

Run `corepack pnpm check`, `corepack pnpm build`, and `corepack pnpm verify:static`. Deploy the validated static overlay through the confirmed Hostinger web root, preserving unrelated production files and Ops Kit. Back up replaced files, retain old hashed assets, and verify both new routes, sources, metadata, mobile navigation and existing routes after deployment. Synchronize the production root export only after the deployment is confirmed.

No videos or video transcripts are labelled published. Add actual episode links after videos are posted. No external newsletter or social post is sent by this change.
