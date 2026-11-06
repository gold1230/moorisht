import type { ReactNode } from "react";
import Link from "next/link";
import PlaceHoverCard, { type PlaceName } from "@/Compentents/placeCard";
import places from "@/data/places.json";
import { editorialConnections } from "./editorialConnections";

type InternalLink = { phrase: string; key: string; target: { place: PlaceName } | { href: string } };
const placeKeys = Object.keys(places) as PlaceName[];

// Keep the anchor text readable and link to a page that explains the place.
const aliases: Partial<Record<PlaceName, string[]>> = {
  "high-atlas-mountains": ["High Atlas Mountains", "Atlas Mountains"],
  "erg-chebbi": ["Erg Chebbi"],
  "ait-ben-haddou": ["Ait Ben Haddou", "Ait-Ben-Haddou"],
  "todra-gorge": ["Todra Gorge", "Todra Gorges"],
  "ourika-valley": ["Ourika Valley"],
  "chefchaouen": ["Chefchaouen"],
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function makeEditorialTextLinker(slug: string) {
  const config = editorialConnections[slug];
  const used = new Set<string>();
  const links: InternalLink[] = [];
  if (config) {
    // Prioritize destination previews, but never repeat the same destination
    // dozens of times. The popup reuses the website's existing HoverCard.
    const preferred = new Set(config.destinations);
    for (const place of placeKeys.filter((item) => preferred.has(item))) {
      const names = aliases[place] ?? [places[place].title];
      for (const phrase of names) {
        links.push({ phrase, key: `place:${place}`, target: { place } });
      }
    }
    for (const { text, href } of config.phrases) {
      links.push({ phrase: text, key: `page:${href}`, target: { href } });
    }
  }
  const rules = links.map((entry) => ({
    ...entry,
    pattern: new RegExp(`\\b${escapeRegExp(entry.phrase)}\\b`, "i"),
  }));
  let inserted = 0;

  return function renderLinkedText(text: string): ReactNode {
    const nodes: ReactNode[] = [];
    let remaining = text;
    let local = 0;
    while (remaining.length && local < 3 && inserted < 15) {
      const options = rules
        .filter((rule) => !used.has(rule.key))
        .map((rule) => ({ rule, match: rule.pattern.exec(remaining) }))
        .filter((entry): entry is { rule: typeof rules[number]; match: RegExpExecArray } => Boolean(entry.match))
        .sort((a, b) => a.match.index - b.match.index || b.match[0].length - a.match[0].length);
      if (!options.length) break;
      const { rule, match } = options[0];
      const before = remaining.slice(0, match.index);
      if (before) nodes.push(before);
      const anchorText = match[0];
      const key = `${rule.key}:${inserted}`;
      if ("place" in rule.target) {
        nodes.push(<PlaceHoverCard key={key} place={rule.target.place}>{anchorText}</PlaceHoverCard>);
      } else {
        nodes.push(
          <Link key={key} href={rule.target.href} className="font-semibold text-amber-800 underline decoration-amber-500/70 underline-offset-4 transition hover:text-amber-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">
            {anchorText}
          </Link>,
        );
      }
      used.add(rule.key);
      inserted += 1;
      local += 1;
      remaining = remaining.slice(match.index + anchorText.length);
    }
    if (remaining) nodes.push(remaining);
    return nodes.length ? nodes : text;
  };
}
