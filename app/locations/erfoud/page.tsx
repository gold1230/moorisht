import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { erfoudLocation } from "@/data/locationPages/erfoud";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(erfoudLocation);

export default function ErfoudPage() {
  return (
    <LocationPageTemplate
      location={erfoudLocation}
    />
  );
}
