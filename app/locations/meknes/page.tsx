import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { meknesLocation } from "@/data/locationPages/meknes";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(meknesLocation);

export default function MeknesPage() {
  return (
    <LocationPageTemplate
      location={meknesLocation}
    />
  );
}
