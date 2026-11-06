import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { ifraneLocation } from "@/data/locationPages/ifrane";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(ifraneLocation);

export default function IfranePage() {
  return (
    <LocationPageTemplate
      location={ifraneLocation}
    />
  );
}
