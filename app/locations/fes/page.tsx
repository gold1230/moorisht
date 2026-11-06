import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { fesLocation } from "@/data/locationPages/fes";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(fesLocation);

export default function FesPage() {
  return (
    <LocationPageTemplate
      location={fesLocation}
    />
  );
}
