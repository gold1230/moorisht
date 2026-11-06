import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { tinghirLocation } from "@/data/locationPages/tinghir";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(tinghirLocation);

export default function TinghirPage() {
  return (
    <LocationPageTemplate
      location={tinghirLocation}
    />
  );
}
