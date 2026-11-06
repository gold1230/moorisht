import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { zizValleyLocation } from "@/data/locationPages/ziz-valley";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(zizValleyLocation);

export default function ZizValleyPage() {
  return (
    <LocationPageTemplate
      location={zizValleyLocation}
    />
  );
}
