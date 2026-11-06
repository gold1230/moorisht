import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { agdezLocation } from "@/data/locationPages/agdez";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(agdezLocation);

export default function AgdezPage() {
  return (
    <LocationPageTemplate
      location={agdezLocation}
    />
  );
}
