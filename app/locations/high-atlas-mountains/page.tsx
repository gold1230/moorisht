import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { highAtlasMountainsLocation } from "@/data/locationPages/high-atlas-mountains";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(highAtlasMountainsLocation);

export default function HighAtlasMountainsPage() {
  return (
    <LocationPageTemplate
      location={highAtlasMountainsLocation}
    />
  );
}
