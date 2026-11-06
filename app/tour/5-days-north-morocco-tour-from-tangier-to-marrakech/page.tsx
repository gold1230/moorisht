import type { Metadata } from "next";
import NewTourDetail from "@/Compentents/tour/NewTourDetail";
import { newTourMetadata } from "@/lib/newTourPages";
import { popularTours, popularTourJsonLd } from "@/lib/popularTourPages";
const tour = popularTours["5-days-north-morocco-tour-from-tangier-to-marrakech"];
export const metadata: Metadata = newTourMetadata(tour);
export default function Page() { return <NewTourDetail tour={tour} jsonLd={popularTourJsonLd(tour)} />; }
