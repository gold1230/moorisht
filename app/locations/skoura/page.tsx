import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { skouraLocation } from "@/data/locationPages/skoura";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(skouraLocation);

export default function SkouraPage() {
  return (
    <LocationPageTemplate
      location={skouraLocation}
    />
  );
}
