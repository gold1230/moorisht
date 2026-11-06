import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { aitBenHaddouLocation } from "@/data/locationPages/ait-ben-haddou";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(aitBenHaddouLocation);

export default function AitBenHaddouPage() {
  return (
    <LocationPageTemplate
      location={aitBenHaddouLocation}
    />
  );
}
