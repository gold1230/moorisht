import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { ouzoudWaterfallsLocation } from "@/data/locationPages/ouzoud-waterfalls";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(ouzoudWaterfallsLocation);

export default function OuzoudWaterfallsPage() {
  return (
    <LocationPageTemplate
      location={ouzoudWaterfallsLocation}
    />
  );
}
