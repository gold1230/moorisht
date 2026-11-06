import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { ergChebbiLocation } from "@/data/locationPages/erg-chebbi";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(ergChebbiLocation);

export default function ErgChebbiPage() {
  return (
    <LocationPageTemplate
      location={ergChebbiLocation}
    />
  );
}
