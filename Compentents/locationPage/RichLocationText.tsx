import PlaceHoverCard from "@/Compentents/placeCard";

import type {
  ComponentProps,
  ReactNode,
} from "react";

type Props = {
  text: string;
};

/*
 * Automatically gets the exact allowed place type
 * from PlaceHoverCard.
 *
 * Example:
 * "marrakech"
 * | "high-atlas-mountains"
 * | "ait-ben-haddou"
 * | ...
 */
type PlaceName =
  ComponentProps<typeof PlaceHoverCard>["place"];

/**
 * Converts:
 *
 * [[Marrakech|marrakech]]
 *
 * into:
 *
 * <PlaceHoverCard place="marrakech">
 *   Marrakech
 * </PlaceHoverCard>
 *
 * This lets us keep SEO / GEO paragraphs inside
 * location data while automatically adding
 * interactive place hover cards.
 */
export default function RichLocationText({
  text,
}: Props) {
  const pattern =
    /\[\[([^|\]]+)\|([^\]]+)\]\]/g;

  const nodes: ReactNode[] = [];

  let lastIndex = 0;

  let match: RegExpExecArray | null;

  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    /*
     * Add normal text before the place marker.
     */
    if (match.index > lastIndex) {
      nodes.push(
        text.slice(lastIndex, match.index)
      );
    }

    /*
     * Visible text
     *
     * Example:
     * Marrakech
     */
    const label = match[1].trim();

    /*
     * PlaceHoverCard slug
     *
     * Example:
     * marrakech
     */
    const place =
      match[2].trim() as PlaceName;

    /*
     * Add interactive hover place.
     */
    nodes.push(
      <PlaceHoverCard
        key={`${place}-${key++}`}
        place={place}
      >
        {label}
      </PlaceHoverCard>
    );

    lastIndex = pattern.lastIndex;
  }

  /*
   * Add remaining normal text.
   */
  if (lastIndex < text.length) {
    nodes.push(
      text.slice(lastIndex)
    );
  }

  return <>{nodes}</>;
}