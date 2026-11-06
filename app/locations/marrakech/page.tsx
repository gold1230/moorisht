import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { marrakechLocation } from "@/data/locationPages/marrakech";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(marrakechLocation);

export default function MarrakechPage() {
  return (
    <LocationPageTemplate
      location={marrakechLocation}
    />
  );
}
