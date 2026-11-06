import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve, relative, sep } from "node:path";

const root = process.cwd();
const app = join(root, "app");
const routes = new Set();
function walk(dir, output = []) {
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(d.name)) continue;
    const path = join(dir, d.name);
    if (d.isDirectory()) walk(path, output);
    else if (/\.(tsx|ts)$/.test(d.name)) output.push(path);
  }
  return output;
}
const src = walk(app);
for (const f of src.filter(f => f.endsWith(`${sep}page.tsx`))) {
  const folder = relative(app, f.slice(0, -"page.tsx".length)).replace(/\\/g, "/");
  routes.add("/" + folder.replace(/^\/|\/$/g, ""));
}
routes.add("/");
const errors = [];
const report = { pageRoutes: routes.size, blogs: 0, tours: 0, destinations: 0, places: 0, staticLinksChecked: 0, imagesChecked: 0 };
const json = name => JSON.parse(readFileSync(join(root, "data", name), "utf8"));
const canon = p => "/" + p.replace(/^\/+|\/+$/g, "");
const validRoute = (url, label) => {
  const path = canon(String(url).split(/[?#]/)[0]);
  if (!routes.has(path)) errors.push(`${label} links to missing route ${url}`);
};
const validImage = (src, label) => {
  if (!src) return;
  if (!src.startsWith("/") || src.startsWith("//")) {
    errors.push(`${label} uses non-local image ${src}`); return;
  }
  if (!existsSync(join(root, "public", src.replace(/^\//, "")))) errors.push(`${label} image missing: ${src}`);
  report.imagesChecked++;
};
for (const [label,file] of [["blogs","blogs.json"],["tours","tours.json"]]) {
  const items = json(file);
  report[label] = items.length;
  const seen = new Set();
  for (const x of items) {
    if (seen.has(x.slug)) errors.push(`Duplicate ${label} slug: ${x.slug}`);
    seen.add(x.slug);
    validRoute(x.slug, `${label}: ${x.slug}`);
    validImage(x.image, `${label}: ${x.slug}`);
    if (!x.metaTitle?.trim() || !x.metaDescription?.trim()) errors.push(`${label}: ${x.slug} missing SEO metadata`);
    const target = `https://moorishtour.com/${x.slug.replace(/^\/+|\/+$/g, "")}/`;
    if (x.canonical !== target) errors.push(`${label}: ${x.slug} canonical mismatch`);
    const pageFile = join(app, x.slug, "page.tsx");
    if (!existsSync(pageFile)) errors.push(`Missing ${label} page file ${pageFile}`);
    else if (!/export const metadata|generateMetadata/.test(readFileSync(pageFile,"utf8"))) errors.push(`${label}: ${x.slug} page missing metadata export`);
  }
}
for (const d of json("destinations.json")) {
  validRoute(d.href, `Destination ${d.name}`);
  validImage(d.image, `Destination ${d.name}`);
  report.destinations++;
}
for (const [name,item] of Object.entries(json("places.json"))) {
  validRoute(item.href, `Place ${name}`);
  validImage(item.image, `Place ${name}`);
  report.places++;
}
const others = [...src, ...walk(join(root,"Compentents")), ...walk(join(root,"content")), ...walk(join(root,"data"))];
const link = /(?:href\s*=\s*|href\s*:\s*|ctaHref\s*=\s*|ctaHref\s*:\s*)(?:\{\s*)?['"`](\/[^'"`{}\s<>]*)['"`]/g;
for (const file of others) {
  const content = readFileSync(file, "utf8");
  if (content.includes("/blog/blog/") || content.includes("/tour/tour/")) errors.push(`Duplicate /blog/blog or /tour/tour in ${relative(root,file)}`);
  for (const match of content.matchAll(link)) {
    const dest = match[1];
    // Public files such as /llms.txt are assets, not App Router pages.
    if (dest.startsWith("/api/") || existsSync(join(root, "public", dest.replace(/^\//, ""))) || /\.(jpg|jpeg|svg|png|webp|pdf|gif)$/i.test(dest)) continue;
    validRoute(dest, `Internal link ${relative(root, file)}`);
    report.staticLinksChecked++;
  }
}
if (errors.length) {
  console.error(`Deployment route audit FAILED (${errors.length} problems):`);
  for (const e of errors.slice(0,100)) console.error(" - " + e);
  process.exitCode = 1;
} else {
  console.log("Deployment route audit PASSED:");
  console.log(JSON.stringify(report, null, 2));
}
