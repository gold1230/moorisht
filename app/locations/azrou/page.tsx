import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { azrouLocation } from "@/data/locationPages/azrou";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(azrouLocation);

export default function AzrouPage() {
  return (
    <LocationPageTemplate
      location={azrouLocation}
    />
  );
}
