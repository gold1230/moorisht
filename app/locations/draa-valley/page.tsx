import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { draaValleyLocation } from "@/data/locationPages/draa-valley";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(draaValleyLocation);

export default function DraaValleyPage() {
  return (
    <LocationPageTemplate
      location={draaValleyLocation}
    />
  );
}
