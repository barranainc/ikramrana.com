import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const publicDirectory = path.join(projectRoot, "dist", "public");
const sitemapPath = path.join(projectRoot, "client", "public", "sitemap.xml");
const canonicalOrigin = "https://ikramrana.com";

const priorityPages = {
  "/": {
    title: "Ikram Rana | AI Adoption and Workflow Implementation",
    description: "Helping businesses turn scattered AI experiments into working systems with clear ownership, human oversight, and practical limits.",
    heading: "Turn Scattered AI Experiments Into Systems Your Team Actually Uses",
    paragraphs: [
      "Ikram Rana helps businesses decide where AI can genuinely improve work, where it should not be used, and how to implement it without adding confusion or risk.",
      "Start with the workflow, establish ownership and exception handling, then use AI only where the evidence and operating conditions support it.",
    ],
  },
  "/about": {
    title: "About Ikram Rana | AI Adoption Specialist",
    description: "About Ikram Rana and his practical, workflow-first approach to AI adoption, implementation, human oversight, and governance.",
    heading: "About Ikram Rana",
    paragraphs: [
      "Ikram Rana is an AI adoption and workflow implementation specialist based in Vaughan, Ontario, and the founder of Barrana.",
      "His work focuses on understanding the workflow first, deciding where AI is useful, and building clear ownership, human review, and safeguards into implementation.",
    ],
    type: "ProfilePage",
  },
  "/contact": {
    title: "Contact Ikram Rana | AI Adoption and Workflows",
    description: "Contact Ikram Rana about AI adoption, workflow implementation, speaking, or collaboration.",
    heading: "Contact Ikram Rana",
    paragraphs: [
      "Start with a practical question about the workflow that is repeatedly delayed, copied, chased, or checked.",
      "Use the contact page to examine whether AI belongs in that workflow, discuss speaking, or propose a collaboration.",
    ],
  },
  "/privacy": {
    title: "Privacy and Cookie Choices | Ikram Rana",
    description: "How ikramrana.com uses consent storage, optional analytics, and external services.",
    heading: "Privacy and Cookie Choices",
    paragraphs: [
      "Optional Google Analytics and Microsoft Clarity scripts do not load until a visitor allows analytics.",
      "The site stores the visitor's consent choice and does not enable advertising storage or ad personalization.",
    ],
  },
  "/framework": {
    title: "AI Adoption Framework | Ikram Rana",
    description: "A practical framework for AI adoption across execution, human judgment, and governance.",
    heading: "A Practical Framework for AI Adoption",
    paragraphs: [
      "Reliable AI adoption begins with process clarity, not tool selection.",
      "The framework separates routine execution, consequential judgment, and governance so teams can define ownership, limits, evidence, and escalation paths.",
    ],
  },
  "/solutions": {
    title: "AI Adoption and Workflow Solutions | Ikram Rana",
    description: "Workflow-first AI adoption, automation, governance, and implementation support for businesses.",
    heading: "AI Adoption and Workflow Solutions",
    paragraphs: [
      "The work begins with a bounded operational problem and a documented baseline.",
      "Solutions are designed around the actual workflow, integrations, exceptions, security requirements, human oversight, and measures of success.",
    ],
  },
  "/ai-adoption-framework-for-small-businesses": {
    title: "AI Adoption Framework for Businesses | Ikram Rana",
    description: "A practical AI adoption framework for businesses: assess workflows, protect judgment, build governance, pilot carefully, and measure outcomes.",
    heading: "AI Adoption Framework for Businesses",
    paragraphs: [
      "Use this framework to identify an appropriate workflow, assess readiness, design oversight, and test a bounded implementation before expanding.",
      "The sequence protects against automating an unclear process or treating speed as proof of business value.",
    ],
    type: "TechArticle",
  },
  "/ai-automation-for-business": {
    title: "AI Automation for Business: Practical Guide | Ikram Rana",
    description: "What businesses should automate, how to measure value, and how to implement AI with exception handling and human oversight.",
    heading: "AI Automation for Business",
    paragraphs: [
      "Automation is appropriate when the workflow has sufficient volume, rule clarity, recoverable errors, accessible integrations, and accountable human oversight.",
      "Implementation should be measured against the business's own baseline rather than generic promises.",
    ],
    type: "TechArticle",
  },
  "/locations/ai-automation-consulting-greater-toronto-area": {
    title: "AI Automation Consulting in the Greater Toronto Area | Ikram Rana",
    description: "Workflow analysis, AI adoption, implementation design, and practical governance support for businesses in the Greater Toronto Area.",
    heading: "AI Adoption and Workflow Implementation in the Greater Toronto Area",
    paragraphs: [
      "Ikram Rana is based in Vaughan and supports businesses across the Greater Toronto Area with workflow analysis, AI adoption, implementation design, and practical governance.",
      "Scope, delivery, safeguards, and measures are defined for the actual engagement; no blanket performance or compliance promise is implied.",
    ],
  },
};

const categoryDefaults = [
  ["/blog/", "Practical analysis of AI adoption, workflow design, human judgment, and governance for business operators."],
  ["/ai-knowledge-hub/", "A plain-language reference on practical AI adoption, automation, workflow systems, and governance for businesses."],
  ["/industries/", "A practical industry guide to evaluating AI workflows, implementation requirements, safeguards, and measures of success."],
  ["/locations/", "AI adoption and workflow implementation guidance scoped to the operating context of this location."],
  ["/ai-dictionary/", "A plain-language definition for business leaders evaluating AI adoption, automation, and workflow systems."],
  ["/case-studies/", "An illustrative AI workflow scenario, not a measured client case study or a promise of results."],
  ["/essays/", "An essay by Ikram Rana on AI adoption, operational clarity, human judgment, and governance."],
  ["/solutions/", "Practical workflow-first AI adoption and implementation support for businesses."],
];

const indexNames = {
  "/blog": "AI Adoption Analysis and Articles",
  "/ai-knowledge-hub": "AI Knowledge Hub for Businesses",
  "/industries": "AI Automation Industry Guides",
  "/locations": "AI Adoption and Workflow Implementation by Location",
  "/ai-dictionary": "AI Dictionary for Business Leaders",
  "/case-studies": "Illustrative AI Automation Use Cases",
  "/essays": "Essays on AI, Workflows, and Judgment",
  "/insights": "AI Adoption Insights",
  "/ai-resources-for-businesses": "AI Resources for Businesses",
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function titleCaseSlug(slug) {
  const special = new Map([
    ["ai", "AI"], ["faq", "FAQ"], ["faqs", "FAQs"], ["gta", "GTA"],
    ["crm", "CRM"], ["usa", "USA"], ["us", "US"], ["pipeda", "PIPEDA"],
  ]);
  return decodeURIComponent(slug)
    .split("-")
    .filter(Boolean)
    .map((word) => special.get(word.toLowerCase()) || `${word[0]?.toUpperCase() || ""}${word.slice(1)}`)
    .join(" ");
}

function pageDetails(pathname) {
  if (priorityPages[pathname]) return priorityPages[pathname];
  const heading = indexNames[pathname] || titleCaseSlug(pathname.split("/").filter(Boolean).at(-1) || "Ikram Rana");
  const description = categoryDefaults.find(([prefix]) => pathname.startsWith(prefix))?.[1]
    || "Practical guidance from Ikram Rana on AI adoption, workflow implementation, human oversight, and governance.";
  const cleanHeading = pathname.startsWith("/case-studies/")
    ? `${heading.replace(/^AI Automation Case Study /i, "")} — Illustrative AI Use Case`
    : heading;
  const shortHeading = cleanHeading.length > 68 ? `${cleanHeading.slice(0, 65).trim()}…` : cleanHeading;
  return {
    title: `${shortHeading} | Ikram Rana`,
    description,
    heading: cleanHeading,
    paragraphs: [description, "Read the full page for definitions, implementation considerations, limitations, and related resources."],
    type: pathname.startsWith("/blog/") || pathname.startsWith("/essays/") ? "Article" : "WebPage",
  };
}

function schemaFor(canonicalUrl, details) {
  const pageId = `${canonicalUrl}#webpage`;
  const pageType = details.type || "WebPage";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonicalOrigin}/#website`,
        url: `${canonicalOrigin}/`,
        name: "Ikram Rana",
        inLanguage: "en-CA",
        publisher: { "@id": `${canonicalOrigin}/#person` },
      },
      {
        "@type": pageType,
        "@id": pageId,
        url: canonicalUrl,
        name: details.heading,
        description: details.description,
        inLanguage: "en-CA",
        isPartOf: { "@id": `${canonicalOrigin}/#website` },
        about: { "@id": `${canonicalOrigin}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${canonicalOrigin}/#person`,
        name: "Ikram Rana",
        url: `${canonicalOrigin}/about`,
        jobTitle: "AI Adoption and Workflow Implementation Specialist",
        sameAs: ["https://www.linkedin.com/in/ikramrana/", "https://ikramrana.substack.com/"],
        worksFor: { "@id": "https://barrana.ai/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://barrana.ai/#organization",
        name: "Barrana",
        url: "https://barrana.ai/",
        founder: { "@id": `${canonicalOrigin}/#person` },
      },
    ],
  };
}

function staticShell(details, canonicalUrl) {
  const paragraphs = details.paragraphs.map((paragraph) => `<p style="font-size:1.08rem;line-height:1.75;color:#475569">${escapeHtml(paragraph)}</p>`).join("");
  return `<div data-static-prerender="true" style="min-height:100vh;background:#f8fafc;color:#0f172a;font-family:Arial,sans-serif">
    <header style="border-bottom:1px solid #dbe3ec;background:#fff"><nav aria-label="Primary navigation" style="max-width:1120px;margin:auto;padding:20px;display:flex;gap:20px;flex-wrap:wrap;align-items:center"><a href="/" style="font-weight:700;color:#0f172a;text-decoration:none">Ikram Rana</a><a href="/ai-adoption-framework-for-small-businesses">AI Framework</a><a href="/solutions">Solutions</a><a href="/blog">Blog</a><a href="/about">About</a><a href="/contact">Contact</a></nav></header>
    <main id="main-content" style="max-width:820px;margin:auto;padding:72px 20px"><p style="text-transform:uppercase;letter-spacing:.15em;color:#2563eb;font-size:.75rem">AI adoption and workflow implementation</p><h1 style="font-family:Georgia,serif;font-size:clamp(2.25rem,6vw,4.25rem);line-height:1.08;margin:18px 0 28px">${escapeHtml(details.heading)}</h1>${paragraphs}<p style="margin-top:32px"><a href="${escapeHtml(canonicalUrl === `${canonicalOrigin}/contact` ? "https://calendly.com/ikramrana15" : "/contact")}" style="display:inline-block;background:#2563eb;color:white;padding:13px 18px;border-radius:8px;text-decoration:none;font-weight:700">${canonicalUrl === `${canonicalOrigin}/contact` ? "Open booking page" : "Discuss a workflow"}</a></p></main>
    <footer style="max-width:1120px;margin:auto;padding:28px 20px;border-top:1px solid #dbe3ec"><a href="/privacy">Privacy and cookie choices</a></footer>
  </div>`;
}

function renderRoute(template, pathname) {
  const canonicalUrl = pathname === "/" ? `${canonicalOrigin}/` : `${canonicalOrigin}${pathname}`;
  const details = pageDetails(pathname);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(details.title)}</title>`);
  html = html.replace(/(<meta\s+name=["']description["']\s+content=["'])[^"']*(["']\s*\/?>)/i, `$1${escapeHtml(details.description)}$2`);
  html = html.replace(/(<link\s+rel=["']canonical["']\s+href=["'])[^"']*(["']\s*\/?>)/i, `$1${canonicalUrl}$2`);
  html = html.replace(/(<meta\s+property=["']og:title["']\s+content=["'])[^"']*(["']\s*\/?>)/i, `$1${escapeHtml(details.title)}$2`);
  html = html.replace(/(<meta\s+property=["']og:description["']\s+content=["'])[^"']*(["']\s*\/?>)/i, `$1${escapeHtml(details.description)}$2`);
  html = html.replace(/(<meta\s+property=["']og:url["']\s+content=["'])[^"']*(["']\s*\/?>)/i, `$1${canonicalUrl}$2`);
  html = html.replace(/(<meta\s+name=["']twitter:title["']\s+content=["'])[^"']*(["']\s*\/?>)/i, `$1${escapeHtml(details.title)}$2`);
  html = html.replace(/(<meta\s+name=["']twitter:description["']\s+content=["'])[^"']*(["']\s*\/?>)/i, `$1${escapeHtml(details.description)}$2`);
  const schema = JSON.stringify(schemaFor(canonicalUrl, details)).replaceAll("<", "\\u003c");
  html = html.replace("</head>", `    <script type="application/ld+json">${schema}</script>\n  </head>`);
  html = html.replace(/<div id=["']root["']><\/div>/i, `<div id="root">${staticShell(details, canonicalUrl)}</div>`);
  return html;
}

function copyPath(relativeSource, relativeDestination = relativeSource) {
  const source = path.join(projectRoot, relativeSource);
  const destination = path.join(publicDirectory, relativeDestination);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

if (!fs.existsSync(publicDirectory)) throw new Error("dist/public does not exist; run Vite first.");

copyPath("googlee99f13ea5b9b8cd1.html");
copyPath("pdf");
copyPath("assets/opskit-a8f3k1");
copyPath("images");

fs.rmSync(path.join(publicDirectory, "__manus__"), { recursive: true, force: true });
fs.rmSync(path.join(publicDirectory, ".gitkeep"), { force: true });

const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
if (sitemapLocations.length < 100) throw new Error(`Unexpectedly small sitemap: ${sitemapLocations.length} URLs.`);

const routes = sitemapLocations.map((location) => {
  const url = new URL(location);
  if (url.origin !== canonicalOrigin) throw new Error(`Non-canonical sitemap origin: ${location}`);
  return url.pathname === "/" ? "/" : url.pathname.replace(/\/$/, "");
});
if (new Set(routes).size !== routes.length) throw new Error("The sitemap contains duplicate canonical paths.");

const indexPath = path.join(publicDirectory, "index.html");
const template = fs.readFileSync(indexPath, "utf8");
fs.writeFileSync(indexPath, renderRoute(template, "/"));

const prerenderDirectory = path.join(publicDirectory, "__prerender");
fs.mkdirSync(prerenderDirectory, { recursive: true });
const manifest = [];
for (const [index, pathname] of routes.filter((route) => route !== "/").entries()) {
  const filename = `route-${String(index + 1).padStart(3, "0")}.html`;
  fs.writeFileSync(path.join(prerenderDirectory, filename), renderRoute(template, pathname));
  manifest.push({ pathname, file: `/__prerender/${filename}` });
}
fs.writeFileSync(path.join(prerenderDirectory, "route-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const rewriteRules = manifest.map(({ pathname, file }) => {
  const escapedRoute = pathname.slice(1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return `  RewriteRule ^${escapedRoute}$ ${file} [END]`;
}).join("\n");

const htaccess = `# Generated by scripts/finalize-static-build.mjs. Do not edit the deployed copy.\nOptions -Indexes\nDirectoryIndex index.html\nErrorDocument 404 /404.html\n\n<IfModule mod_rewrite.c>\n  RewriteEngine On\n\n  # One canonical HTTPS host. Path and query string are preserved.\n  RewriteCond %{HTTP_HOST} !^ikramrana\\.com$ [NC,OR]\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^ https://ikramrana.com%{REQUEST_URI} [R=301,L,NE]\n\n  # Canonical paths have no trailing slash, except the root URL.\n  RewriteCond %{REQUEST_URI} !^/$\n  RewriteRule ^(.+?)/+$ /$1 [R=301,L,NE]\n\n  RewriteRule ^index\\.html$ / [R=301,L]\n\n  # Real files and directories always bypass application routing.\n  RewriteCond %{REQUEST_FILENAME} -f [OR]\n  RewriteCond %{REQUEST_FILENAME} -d\n  RewriteRule ^ - [L]\n\n  # Only sitemap-approved application routes receive a 200 response.\n${rewriteRules}\n</IfModule>\n\n<IfModule mod_mime.c>\n  AddType text/plain .txt\n  AddType application/xml .xml\n  AddType application/pdf .pdf\n  AddType image/webp .webp\n</IfModule>\n\n<IfModule mod_headers.c>\n  Header always set X-Content-Type-Options \"nosniff\"\n  Header always set Referrer-Policy \"strict-origin-when-cross-origin\"\n  Header always set X-Frame-Options \"SAMEORIGIN\"\n  Header always set Permissions-Policy \"camera=(), microphone=(), geolocation=()\"\n</IfModule>\n`;
const retiredRedirectRules = `  # Retired URLs retained from the preceding production rules.\n  RewriteRule ^how-to-protect-client-data-while-using-ai-automation-in-law-firms-and-small-businesses/?$ /blog/privacy-review-before-ai-pilot-canada [R=301,L]\n  RewriteRule ^why-i-believe-easy-ai-breaks-and-what-openais-agent-builder-gets-right/?$ /ai-knowledge-hub/what-are-ai-agents-for-businesses [R=301,L]\n  RewriteRule ^insight/page/2/?$ /blog [R=301,L]\n\n`;
const deployedHtaccess = htaccess.replace(
  "  # Canonical paths have no trailing slash, except the root URL.\n",
  `${retiredRedirectRules}  # Canonical paths have no trailing slash, except the root URL.\n`,
);
fs.writeFileSync(path.join(publicDirectory, ".htaccess"), deployedHtaccess);

const notFound = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Page Not Found | Ikram Rana</title><style>body{margin:0;background:#f8fafc;color:#0f172a;font:16px/1.6 Arial,sans-serif}main{max-width:680px;margin:12vh auto;padding:32px}h1{font:700 clamp(2.5rem,8vw,5rem)/1 Georgia,serif}a{color:#1d4ed8}</style></head><body><main><p>404</p><h1>Page not found</h1><p>The requested page does not exist or has moved.</p><p><a href="/">Return to the homepage</a> or <a href="/contact">contact Ikram Rana</a>.</p></main></body></html>`;
fs.writeFileSync(path.join(publicDirectory, "404.html"), notFound);

console.log(`Finalized static release with ${routes.length} canonical routes and ${manifest.length} prerendered route files.`);
