import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { tetouanLocation } from "@/data/locationPages/tetouan";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(tetouanLocation);

export default function TetouanPage() {
  return (
    <LocationPageTemplate
      location={tetouanLocation}
    />
  );
}
