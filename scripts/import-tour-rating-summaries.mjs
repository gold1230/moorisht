import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Import verified per-tour summary totals only; do not create ratings from guesses.
// Usage: npm run import:tour-ratings -- my-real-tour-ratings.csv
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = process.argv[2];
if (!input) {
  console.error("Usage: npm run import:tour-ratings -- <actual-tour-ratings.csv>");
  process.exit(1);
}
// Include every real tour page, including pages that are not in the listing catalog.
const allowed = new Set(fs.readdirSync(path.join(root, "app/tour"), { withFileTypes: true })
  .filter(d => d.isDirectory() && fs.existsSync(path.join(root, "app/tour", d.name, "page.tsx")))
  .map(d => d.name));

function parseCSV(text) {
  const rows = []; let row = [], cell = "", quoted = false;
  text = text.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (quoted && text[i+1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (c === "," && !quoted) { row.push(cell); cell = ""; }
    else if (c === "\n" && !quoted) { row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (quoted) throw new Error("Unclosed CSV quote");
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(v => v.trim()));
}
const rows = parseCSV(fs.readFileSync(path.resolve(input), "utf8"));
const expected = ["slug", "ratingValue", "reviewCount", "source"];
if (JSON.stringify(rows[0]?.map(s => s.trim())) !== JSON.stringify(expected)) {
  throw new Error(`Expected CSV header: ${expected.join(",")}`);
}
const output = {};
for (const [i, row] of rows.slice(1).entries()) {
  if (row.length !== 4) throw new Error(`Row ${i+2}: expected 4 values`);
  const [slugRaw, rateRaw, countRaw, sourceRaw] = row.map(s => s.trim());
  if (![rateRaw, countRaw, sourceRaw].some(Boolean)) continue; // allow blank template rows
  const slug = slugRaw.replace(/^\/+|\/+$/g, "").replace(/^tour\//, "");
  if (!allowed.has(slug) || output[slug]) throw new Error(`Row ${i+2}: unknown or duplicate tour slug ${slug}`);
  const ratingValue = Number(rateRaw), reviewCount = Number(countRaw);
  if (!Number.isFinite(ratingValue) || ratingValue < 1 || ratingValue > 5) throw new Error(`Row ${i+2}: rating must be 1..5`);
  if (!Number.isInteger(reviewCount) || reviewCount < 1) throw new Error(`Row ${i+2}: review count must be a positive integer`);
  if (sourceRaw.length < 6) throw new Error(`Row ${i+2}: include the actual booking or review source`);
  output[slug] = { ratingValue, reviewCount, source: sourceRaw };
}
const target = path.join(root, "data/tour-review-summaries.json");
fs.writeFileSync(target, JSON.stringify(output, null, 2) + "\n");
console.log(`Imported ${Object.keys(output).length} actual tour-specific rating summaries to data/tour-review-summaries.json.`);
console.log("The site and Product schema use this exact per-tour data; never use guessed counts.");
