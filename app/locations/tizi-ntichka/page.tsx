import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { tiziNtichkaLocation } from "@/data/locationPages/tizi-ntichka";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(tiziNtichkaLocation);

export default function TiziNtichkaPage() {
  return (
    <LocationPageTemplate
      location={tiziNtichkaLocation}
    />
  );
}
