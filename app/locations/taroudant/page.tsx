import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { taroudantLocation } from "@/data/locationPages/taroudant";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(taroudantLocation);

export default function TaroudantPage() {
  return (
    <LocationPageTemplate
      location={taroudantLocation}
    />
  );
}
