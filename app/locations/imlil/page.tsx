import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { imlilLocation } from "@/data/locationPages/imlil";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(imlilLocation);

export default function ImlilPage() {
  return (
    <LocationPageTemplate
      location={imlilLocation}
    />
  );
}
