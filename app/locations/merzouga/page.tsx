import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { merzougaLocation } from "@/data/locationPages/merzouga";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(merzougaLocation);

export default function MerzougaPage() {
  return (
    <LocationPageTemplate
      location={merzougaLocation}
    />
  );
}
