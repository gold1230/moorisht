import type { ReactNode } from "react";

import HoverCard from "@/Compentents/hovercard";
import places from "@/data/places.json";

export type PlaceName = keyof typeof places;

type PlaceHoverCardProps = {
  place: PlaceName;
  children?: ReactNode;
};

export default function PlaceHoverCard({
  place,
  children,
}: PlaceHoverCardProps) {
  const data = places[place];

  return (
    <HoverCard
      href={data.href}
      title={data.title}
      description={data.description}
      image={data.image}
    >
      {children ?? data.title}
    </HoverCard>
  );
}