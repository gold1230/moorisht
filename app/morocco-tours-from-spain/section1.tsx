import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame, InfoPanel } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section1(){
  return <SectionFrame id={"morocco-from-spain-overview"} label={"THE BIG PICTURE"} title={"Morocco Tours from Spain: A Journey That Feels Close Yet Completely New"} index={1}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You can leave Spain in the morning and, later the same day, drink mint tea beside the narrow streets of a Moroccan medina. That is the lovely surprise of traveling across the Strait of Gibraltar. The distance looks small on a map, but the experiences feel wonderfully different: white houses, blue streets, lively markets, mountains, warm welcomes and the quiet of the Sahara.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A tour from Spain to <Link href="/morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco</Link> can be a quick visit to <PlaceHoverCard place="tangier">Tangier</PlaceHoverCard>, a relaxed holiday in northern towns, or a longer journey that finishes among the dunes near Merzouga. The best choice depends on your starting city, your time, and how much moving around you enjoy. There is no need to fit every famous destination into one trip.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">This guide helps you choose between ferry and flight, understand where each route really arrives, and plan days that feel like a holiday rather than a race. You will also find realistic sample routes, packing advice, questions to ask your guide, and links to <Link href="/morocco-desert-tours-from-tangier/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Moorish Tour journeys from Tangier</Link> if you want help putting the trip together.</p>
<ArticlePhoto name="crossing"/>
<InfoPanel title={"Start here"}><p>A short tour from Spain works best in northern Morocco. To visit Fes, the Atlas Mountains, Merzouga and Marrakech, allow considerably more time and check your arrival and return points first.</p></InfoPanel>
  </SectionFrame>;
}
