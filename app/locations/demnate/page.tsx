import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { demnateLocation } from "@/data/locationPages/demnate";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(demnateLocation);

export default function DemnatePage() {
  return (
    <LocationPageTemplate
      location={demnateLocation}
    />
  );
}
