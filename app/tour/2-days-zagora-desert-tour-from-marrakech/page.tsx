import type { Metadata } from "next";
import NewTourDetail from "@/Compentents/tour/NewTourDetail";
import { newTourMetadata } from "@/lib/newTourPages";
import { popularTours, popularTourJsonLd } from "@/lib/popularTourPages";
const tour = popularTours["2-days-zagora-desert-tour-from-marrakech"];
export const metadata: Metadata = newTourMetadata(tour);
export default function Page() { return <NewTourDetail tour={tour} jsonLd={popularTourJsonLd(tour)} />; }
