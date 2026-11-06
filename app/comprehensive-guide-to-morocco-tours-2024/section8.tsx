import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame, FeatureCards } from "./ArticleElements";
export default function Section8(){
return <SectionFrame id="rabat-meknes-heritage" label="IMPERIAL CITIES" title="Rabat and Meknes: A Calmer Look at Moroccan History" index={8}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Rabat is the capital, with a different rhythm from Marrakech. The Kasbah of the Udayas, Hassan Tower and waterfront make it rewarding for a half-day or full day on a northern journey. Parks and open spaces offer useful breaks if you are traveling with children.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="meknes">Meknes</PlaceHoverCard> is another historic imperial city. It can be paired with nearby Volubilis on a route between Rabat and Fes. The Roman archaeological site offers a window into an earlier part of this region&apos;s story, especially if you enjoy mosaics, ruins and landscapes.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Not every trip needs both cities. On a short journey, choose the place that fits your route best. On a ten- or twelve-day tour, these stops can connect the larger destinations into a more interesting story, with fewer unexplained hours on the road.</p>
<FeatureCards items={[["Rabat", "Coastal capital, historic kasbah and more open walking areas"], ["Meknes", "Imperial history and easy pairing with surrounding heritage"], ["Volubilis", "Roman ruins and mosaics in an open landscape"], ["Best pacing", "A northern touring day rather than a rushed detour from the south"]]}/>
</SectionFrame>;
}
