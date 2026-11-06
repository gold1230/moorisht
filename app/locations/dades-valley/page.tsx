import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { dadesValleyLocation } from "@/data/locationPages/dades-valley";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(dadesValleyLocation);

export default function DadesValleyPage() {
  return (
    <LocationPageTemplate
      location={dadesValleyLocation}
    />
  );
}
