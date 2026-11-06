import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { zagoraLocation } from "@/data/locationPages/zagora";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(zagoraLocation);

export default function ZagoraPage() {
  return (
    <LocationPageTemplate
      location={zagoraLocation}
    />
  );
}
