import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { ouarzazateLocation } from "@/data/locationPages/ouarzazate";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(ouarzazateLocation);

export default function OuarzazatePage() {
  return (
    <LocationPageTemplate
      location={ouarzazateLocation}
    />
  );
}
