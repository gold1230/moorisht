import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { kasbahTadlaLocation } from "@/data/locationPages/kasbah-tadla";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(kasbahTadlaLocation);

export default function KasbahTadlaPage() {
  return (
    <LocationPageTemplate
      location={kasbahTadlaLocation}
    />
  );
}
