import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { rabatLocation } from "@/data/locationPages/rabat";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(rabatLocation);

export default function RabatPage() {
  return (
    <LocationPageTemplate
      location={rabatLocation}
    />
  );
}
