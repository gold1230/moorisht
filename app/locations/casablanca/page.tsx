import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { casablancaLocation } from "@/data/locationPages/casablanca";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(casablancaLocation);

export default function CasablancaPage() {
  return (
    <LocationPageTemplate
      location={casablancaLocation}
    />
  );
}
