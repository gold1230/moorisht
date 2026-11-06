import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { asilahLocation } from "@/data/locationPages/asilah";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(asilahLocation);

export default function AsilahPage() {
  return (
    <LocationPageTemplate
      location={asilahLocation}
    />
  );
}
