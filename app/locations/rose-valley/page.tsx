import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { roseValleyLocation } from "@/data/locationPages/rose-valley";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(roseValleyLocation);

export default function RoseValleyPage() {
  return (
    <LocationPageTemplate
      location={roseValleyLocation}
    />
  );
}
