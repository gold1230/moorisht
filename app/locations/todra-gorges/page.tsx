import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { todraGorgeLocation } from "@/data/locationPages/todra-gorge";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(todraGorgeLocation);

export default function TodraGorgePage() {
  return (
    <LocationPageTemplate
      location={todraGorgeLocation}
    />
  );
}
