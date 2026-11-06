import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { kelaatMgounaLocation } from "@/data/locationPages/kelaat-mgouna";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(kelaatMgounaLocation);

export default function KelaatMgounaPage() {
  return (
    <LocationPageTemplate
      location={kelaatMgounaLocation}
    />
  );
}
