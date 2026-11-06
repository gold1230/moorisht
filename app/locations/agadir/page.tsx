import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { agadirLocation } from "@/data/locationPages/agadir";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(agadirLocation);

export default function AgadirPage() {
  return (
    <LocationPageTemplate
      location={agadirLocation}
    />
  );
}
