import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = path.join(projectRoot, "dist", "public");
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(publicDirectory, relativePath));
}

const requiredFiles = [
  "index.html",
  ".htaccess",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "googlee99f13ea5b9b8cd1.html",
  "images/ikram-rana-hero.webp",
  "pdf/AI-Business-Ops-Kit-Workbook.pdf",
  "pdf/Worksheets-and-Trackers.pdf",
  "pdf/Prompt-Pack.pdf",
  "pdf/7-Day-Sprint-Card.pdf",
  "pdf/The-30-Minute-Inbox.pdf",
  "pdf/Bonus-Templates.pdf",
  "__prerender/route-manifest.json",
];
for (const file of requiredFiles) assert(fs.existsSync(path.join(publicDirectory, file)), `Missing required file: ${file}`);

const sitemap = read("sitemap.xml").toString("utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sitemapPaths = new Set(locations.map((location) => new URL(location).pathname.replace(/\/$/, "") || "/"));
assert(locations.length >= 100, `Unexpected sitemap URL count: ${locations.length}`);
assert(new Set(locations).size === locations.length, "Sitemap has duplicate URLs");
assert(locations.every((location) => location.startsWith("https://ikramrana.com")), "Sitemap contains a non-canonical host");

const appSource = fs.readFileSync(path.join(projectRoot, "client", "src", "App.tsx"), "utf8");
const literalAppRoutes = [...appSource.matchAll(/<Route\s+path=["']([^"':]+)["']/g)]
  .map((match) => match[1])
  .filter((route) => route !== "/404");
for (const route of literalAppRoutes) {
  assert(sitemapPaths.has(route), `Literal application route is missing from the sitemap: ${route}`);
}

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(entryPath);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [entryPath] : [];
  });
}

for (const sourceFile of sourceFiles(path.join(projectRoot, "client", "src"))) {
  const source = fs.readFileSync(sourceFile, "utf8");
  const links = [...source.matchAll(/(?:href|to)=["'](\/[^"'#?{]*)["']/g)].map((match) => match[1].replace(/\/$/, "") || "/");
  for (const link of links) {
    const publicFile = path.join(publicDirectory, link.replace(/^\//, ""));
    assert(sitemapPaths.has(link) || fs.existsSync(publicFile), `Internal link is neither a sitemap route nor a release file: ${link} (${path.relative(projectRoot, sourceFile)})`);
  }
}

const manifest = JSON.parse(read("__prerender/route-manifest.json").toString("utf8"));
assert(manifest.length === locations.length - 1, "Prerender manifest does not match sitemap route count");
for (const route of manifest) {
  const file = route.file.replace(/^\//, "");
  assert(fs.existsSync(path.join(publicDirectory, file)), `Missing prerender for ${route.pathname}`);
  const html = read(file).toString("utf8");
  assert(html.includes(`<link rel="canonical" href="https://ikramrana.com${route.pathname}"`), `Wrong canonical for ${route.pathname}`);
  assert(html.includes("data-static-prerender=\"true\""), `Missing static content for ${route.pathname}`);
}

const home = read("index.html").toString("utf8");
assert(home.includes('href="https://ikramrana.com/"'), "Homepage canonical is missing");
assert(home.includes("data-static-prerender=\"true\""), "Homepage static content is missing");
assert(!home.includes("__manus__/debug-collector"), "Development collector leaked into production HTML");

assert(read("pdf/AI-Business-Ops-Kit-Workbook.pdf").subarray(0, 5).toString() === "%PDF-", "Workbook is not a valid PDF");
assert(read("images/ikram-rana-hero.webp").subarray(0, 4).toString() === "RIFF", "Hero is not a valid WebP file");

const htaccess = read(".htaccess").toString("utf8");
assert(htaccess.includes("ErrorDocument 404 /404.html"), "True 404 handler is missing");
assert(htaccess.includes("Only sitemap-approved application routes"), "Exact-route fallback is missing");
assert(!htaccess.includes("RewriteRule . /index.html"), "Unsafe catch-all fallback remains");

const notFound = read("404.html").toString("utf8");
assert(notFound.includes('content="noindex,nofollow"'), "404 page is indexable");
assert(!notFound.includes('rel="canonical"'), "404 page has a canonical tag");

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Static release verified: ${locations.length} sitemap URLs, ${manifest.length} prerendered deep routes, ${requiredFiles.length} required files.`);
