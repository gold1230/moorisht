import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { mideltLocation } from "@/data/locationPages/midelt";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(mideltLocation);

export default function MideltPage() {
  return (
    <LocationPageTemplate
      location={mideltLocation}
    />
  );
}
