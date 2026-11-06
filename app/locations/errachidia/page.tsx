import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { errachidiaLocation } from "@/data/locationPages/errachidia";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(errachidiaLocation);

export default function ErrachidiaPage() {
  return (
    <LocationPageTemplate
      location={errachidiaLocation}
    />
  );
}
