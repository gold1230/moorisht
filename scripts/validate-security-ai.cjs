const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const root = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const guide = read("public/llms.txt");
assert.match(guide, /^# Moorish Tour\s*$/m, "llms.txt needs an H1");
assert.match(guide, /^> /m, "llms.txt needs a summary");
assert.match(guide, /^## /m, "llms.txt needs H2 sections");
const routes = new Set(JSON.parse(read("data/routes.json")).map((r) => r.path));
for (const link of guide.matchAll(/https:\/\/moorishtour\.com(\/[^)\s]*)/g)) {
  const url = link[1].replace(/\/$/, "");
  if (["", "/sitemap.xml", "/robots.txt"].includes(url)) continue;
  assert(routes.has(url), `llms.txt link does not match a page route: ${url}`);
}
const config = read("next.config.ts");
const csp = read("lib/securityPolicy.ts");
const proxy = read("proxy.ts");
const layout = read("app/layout.tsx");
assert.match(config, /securityPolicy/);
assert.match(csp, /strict-dynamic/);
assert.match(proxy, /randomBytes\(16\)/);
assert.match(layout, /await connection\(\)/);
assert.match(layout, /nonce=\{nonce\}/);
assert(!fs.existsSync(path.join(root, "proxyza.ts")), "outdated unused proxyza.ts remains");
console.log("OK: llms.txt H1, actual links, CSP modes, nonce wiring, Trusted Types report-only");
