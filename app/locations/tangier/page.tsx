import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { tangierLocation } from "@/data/locationPages/tangier";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(tangierLocation);

export default function TangierPage() {
  return (
    <LocationPageTemplate
      location={tangierLocation}
    />
  );
}
