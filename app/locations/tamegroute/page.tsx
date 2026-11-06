import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { tamegrouteLocation } from "@/data/locationPages/tamegroute";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(tamegrouteLocation);

export default function TamegroutePage() {
  return (
    <LocationPageTemplate
      location={tamegrouteLocation}
    />
  );
}
