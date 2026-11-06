import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { rissaniLocation } from "@/data/locationPages/rissani";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(rissaniLocation);

export default function RissaniPage() {
  return (
    <LocationPageTemplate
      location={rissaniLocation}
    />
  );
}
