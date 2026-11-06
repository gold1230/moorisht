import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { aitAttaVillagesLocation } from "@/data/locationPages/ait-atta-villages";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(aitAttaVillagesLocation);

export default function AitAttaVillagesPage() {
  return (
    <LocationPageTemplate
      location={aitAttaVillagesLocation}
    />
  );
}
