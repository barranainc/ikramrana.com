# Website Authority Content System

## Purpose

The website should become a reliable source on practical AI adoption in businesses. Publishing more pages is not the objective by itself. Every page must help a business owner understand what AI can improve, what it cannot fix, what could go wrong, and what still requires human judgment.

Ikram Rana's editorial position is consistent:

> Useful AI should earn its place in a workflow. Adoption should begin with the work, not the tool.

## The four content lanes

1. Critical AI adoption analysis
   - Examine a current claim, trend, or product category.
   - Explain what is useful, what is overstated, and what businesses are missing.

2. Practical business use cases
   - Start with a real operational problem.
   - Distinguish verified engagements from illustrative scenarios.
   - Show the workflow, limits, safeguards, and measurements that matter.

3. Industry guides
   - Use the language of the business owner, not technical language.
   - Cover realistic opportunities, poor-fit uses, human decision points, privacy considerations, and a practical first step.

4. AI landscape commentary
   - Respond to material changes in tools, regulation, adoption behaviour, or business practice.
   - State what changed, why it matters, what remains uncertain, and what a business should do next.

## Simple publishing rhythm

- Weekly: one short critical or practical article.
- Every two weeks: one use case or meaningful update to an industry page.
- Monthly: one AI adoption landscape review.
- Quarterly: refresh the framework, cornerstone pages, author details, important statistics, and high-traffic articles.

Quality takes priority over filling a calendar. Update a strong existing page when there is no genuinely new question to answer.

## How to request content

1. Open a GitHub issue and choose **Website content request**.
2. Select the content type.
3. Write the business question, the observation behind it, and Ikram's view.
4. Add evidence links and choose the correct claim status.
5. The draft is prepared on a branch, reviewed, checked, and published through a pull request.

This keeps the process usable without editing TypeScript files or downloading a document.

## Required point of view

Every substantive page must answer these questions:

1. What business problem exists before AI is introduced?
2. Does AI belong in this workflow at all?
3. What could AI improve?
4. What could it make worse?
5. Which decisions must remain human?
6. What evidence supports the claims?
7. What should the reader do first?

Avoid automatic optimism. Avoid automatic pessimism. The position should be practical, critical, and specific.

## Claim labels

Use one of these statuses before drafting:

- **Verified public:** A reader can inspect the evidence through a public source.
- **Owner confirmed, evidence private:** Evidence is retained privately and the public wording remains proportionate.
- **Illustrative scenario:** The company, implementation, and figures are hypothetical. This label must be prominent.
- **Needs verification:** Do not publish the claim until the evidence is checked.

Never turn an illustrative scenario into a client story through tone, schema, metadata, or headings.

## Minimum page structure

Each new article or guide should include:

- A clear business question in the title or opening.
- A direct answer near the top.
- The operational problem before the technology.
- Ikram's practical position.
- Where AI helps.
- Where AI does not help or creates new risk.
- Human decision and escalation points.
- A practical first step.
- Sources, publication date, and reviewed or updated date.
- Relevant internal links.
- A CTA that fits the reader's stage.

## Publishing checklist

Before publication:

- The page answers a real business question.
- The opening is understandable without technical knowledge.
- The page contains original judgment, not a summary of other articles.
- Claims have a status and evidence.
- Illustrative content is labelled in visible copy and structured data.
- Titles and descriptions match the actual content.
- Author and organization details are consistent.
- Internal links connect the page to the framework, relevant industry pages, and related analysis.
- The sitemap and machine-readable site guide include the new URL when appropriate.
- No em dashes are used.
- The branch passes type checking and a production build.
- The page is reviewed on desktop and mobile before deployment.

## Current source locations

- Blog articles: `client/src/data/blogPosts.ts`
- Industry guides: `client/src/data/industryPages.ts`
- Illustrative use cases: `client/src/data/caseStudies.ts`
- Knowledge pages: `client/src/data/knowledgeHub.ts`
- Routes: `client/src/App.tsx`
- Sitemap: `client/public/sitemap.xml`
- Machine-readable guide: `client/public/llms.txt`

The current data files are large. A later technical improvement should migrate each article into its own content file. Until that migration is complete, the issue form is the safe intake layer and Codex or a developer can make the source update.
