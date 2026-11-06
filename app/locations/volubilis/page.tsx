import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { volubilisLocation } from "@/data/locationPages/volubilis";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(volubilisLocation);

export default function VolubilisPage() {
  return (
    <LocationPageTemplate
      location={volubilisLocation}
    />
  );
}
