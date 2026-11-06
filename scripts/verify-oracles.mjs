import fs from 'node:fs';
import assert from 'node:assert/strict';
const data = JSON.parse(fs.readFileSync('client/src/data/oracles.json', 'utf8'));
const manifest = JSON.parse(fs.readFileSync('dist/public/__prerender/route-manifest.json', 'utf8'));
const base = '/oracles-of-modern-times';
for (const route of [base, ...data.articles.map(a => `${base}/${a.slug}`)]) {
  const entry = manifest.find(e => e.pathname === route);
  assert(entry, `Missing route ${route}`);
  const html = fs.readFileSync(`dist/public${entry.file}`, 'utf8');
  assert(html.includes(`href="https://ikramrana.com${route}"`), 'Wrong canonical');
  assert(html.includes('Creator and host of Oracles of Modern Times'), 'Missing author credit');
  assert(html.includes('oracles-static-schema'), 'Missing static schema');
  const article = data.articles.find(a => route.endsWith(`/${a.slug}`));
  if (article) {
    assert(html.includes('Imagine opening a chatbot after a bad day at work.'), 'Missing full article');
    for (const source of article.sources) assert(html.includes(`id="source-${source.id}"`), 'Broken citation anchor');
    assert(html.includes('July 2025'), 'Missing prior-use acknowledgement');
  }
}
const sitemap = fs.readFileSync('dist/public/sitemap.xml', 'utf8');
const drafts = JSON.parse(fs.readFileSync('content-packages/oracles-of-modern-times/follow-up-essays.json', 'utf8'));
for (const draft of drafts) assert(!sitemap.includes(draft.slug), 'Draft exposed in sitemap');
console.log('Oracles release checks passed: routes, canonicals, attribution, complete article, source anchors and unpublished follow-ups.');
