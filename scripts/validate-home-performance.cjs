#!/usr/bin/env node
/* Keep the low-cost homepage delivery changes from regressing. */
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
function content(file) { return fs.readFileSync(path.join(root, file), "utf8"); }
function assert(ok, message) { if (!ok) throw new Error(`Homepage performance: ${message}`); }

const shell = content("Compentents/searchBox.tsx");
assert(shell.includes('import("./searchBoxInteractive")'), "search must load its index on user interaction");
assert(!shell.includes('from "@/data/'), "lightweight search shell must not import JSON indexes");
assert(fs.existsSync(path.join(root,"Compentents/searchBoxInteractive.tsx")), "interactive search missing");
// A persistent header avoids a visible remount when visitors navigate from the
// homepage to tour pages. Other large widgets remain lazy-loaded.
const headerAll = content("Compentents/headerAll.tsx");
assert(headerAll.includes('import HeaderMain from "./header"'), "persistent shared header missing");
assert(!headerAll.includes('dynamic(() => import("./tour/header"))'), "header swapping reintroduced");
assert(!content("Compentents/ScrollToTop.tsx").includes('"use client"'), "scroll control should not require hydration");
assert(content("app/layout.tsx").includes('id="top"'), "scroll link target missing");
const backdrop = path.join(root,"public/abdou-faiz-morocco-destinations.webp");
assert(fs.existsSync(backdrop), "compressed destinations background missing");
assert(fs.statSync(backdrop).size < 110000, "destinations background unexpectedly large");
assert(!content("content/destinations.tsx").includes("<Image\n        src={Abdou}"), "heavy destination background reintroduced");
const config = content("next.config.ts");
assert(config.includes('formats: ["image/webp"]'), "WebP image delivery not configured");
const packageJson = JSON.parse(content("package.json"));
assert(packageJson.overrides?.["source-map-js"] === "1.2.2", "source-map-js security override missing");
const lock = JSON.parse(content("package-lock.json"));
assert(lock.packages?.["node_modules/source-map-js"]?.version === "1.2.2", "source-map-js lockfile version wrong");
console.log("Homepage performance & security checks PASSED (lazy search, persistent header, image, scroll, lockfile).");
