import type { Metadata } from "next";

import LocationPageTemplate from "@/Compentents/locationPage/LocationPageTemplate";
import { chefchaouenLocation } from "@/data/locationPages/chefchaouen";
import { createLocationMetadata } from "@/lib/createLocationMetadata";

export const metadata: Metadata =
  createLocationMetadata(chefchaouenLocation);

export default function ChefchaouenPage() {
  return (
    <LocationPageTemplate
      location={chefchaouenLocation}
    />
  );
}
