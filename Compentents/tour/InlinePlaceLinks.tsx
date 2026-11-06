import type { ReactNode } from "react";
import PlaceHoverCard from "@/Compentents/placeCard";
import places from "@/data/places.json";

/** Server-rendered inline destination previews. One link per place mention.
 * The preview is keyboard accessible and needs no JS event listeners. */
const aliases: Record<string, keyof typeof places> = {
  "Aït Ben Haddou": "ait-ben-haddou", "Ait Ben Haddou": "ait-ben-haddou",
  "Erg Chebbi": "erg-chebbi",
  "Agafay Desert": "agafay-desert", "Atlas Mountains": "high-atlas-mountains",
  "High Atlas": "high-atlas-mountains", "Middle Atlas": "azrou",
  "Blue City": "chefchaouen", "Fez": "fes",
};
const mentions: Array<[string, keyof typeof places]> = [
  ...Object.entries(places).map(([key, v]) => [v.title, key as keyof typeof places] as [string, keyof typeof places]),
  ...Object.entries(aliases).map(([label, key]) => [label, key] as [string, keyof typeof places]),
].sort((a, b) => b[0].length - a[0].length);
const escaped = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = new RegExp(`\\b(${mentions.map(([name]) => escaped(name)).join("|")})\\b`, "gi");
const lookup = new Map(mentions.map(([name, key]) => [name.toLowerCase(), key]));

export default function InlinePlaceLinks({ text }: { text: string }): ReactNode {
  if (!text) return null;
  const parts = text.split(pattern);
  const linked = new Set<string>();
  return parts.map((part, i) => {
    const key = lookup.get(part.toLowerCase());
    if (!key || linked.has(key)) return <span key={i}>{part}</span>;
    linked.add(key);
    return <PlaceHoverCard key={i} place={key}>{part}</PlaceHoverCard>;
  });
}
