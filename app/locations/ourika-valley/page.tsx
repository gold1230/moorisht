import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { ourikaValleyLocation } from "@/data/locationPages/ourika-valley";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(ourikaValleyLocation);

export default function OurikaValleyPage() {
  return (
    <LocationPageTemplate
      location={ourikaValleyLocation}
    />
  );
}
