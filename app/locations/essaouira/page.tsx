import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { essaouiraLocation } from "@/data/locationPages/essaouira";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(essaouiraLocation);

export default function EssaouiraPage() {
  return (
    <LocationPageTemplate
      location={essaouiraLocation}
    />
  );
}
