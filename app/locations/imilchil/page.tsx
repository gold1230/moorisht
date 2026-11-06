import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { imilchilLocation } from "@/data/locationPages/imilchil";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(imilchilLocation);

export default function ImilchilPage() {
  return (
    <LocationPageTemplate
      location={imilchilLocation}
    />
  );
}
