import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
export default function Section7(){
return <SectionFrame id="casablanca-first-stop" label="ARRIVAL CITIES" title="Casablanca: More Than Just an Airport Arrival" index={7}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Casablanca is a modern coastal city with lively neighborhoods, cafés and a busy commercial rhythm. Visitors often know it for the impressive Hassan II Mosque, whose position beside the Atlantic makes it one of the country&apos;s most recognizable sights. Visitor access and guided tour times should be checked before you plan your day.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Casablanca can be a sensible starting point when your international flight arrives there. Rather than immediately attempting a very long drive after flying, consider an overnight stay, a relaxed walk along the coast, and perhaps a city visit the following morning.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">From Casablanca, trips can head north to <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard>, Chefchaouen and Fes or travel south toward Marrakech. See our <Link href="/exploring-trusted-casablanca-travel-agency/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Casablanca travel agency planning guide</Link> and a <Link href="/tour/12-days-morocco-tour-from-casablanca-to-marrakech/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">12-day Casablanca-to-Marrakech journey</Link> to understand how a longer route can flow.</p>
</SectionFrame>;
}
