import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { khamliaLocation } from "@/data/locationPages/khamlia";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(khamliaLocation);

export default function KhamliaPage() {
  return (
    <LocationPageTemplate
      location={khamliaLocation}
    />
  );
}
