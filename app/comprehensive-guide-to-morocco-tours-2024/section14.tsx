import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section14(){
return <SectionFrame id="erfoud-rissani-oasis" label="DESERT COMMUNITIES" title="Erfoud and Rissani: Local Life Beyond the Dunes" index={14}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Erfoud is known for fossil workshops, desert-edge landscapes and its connection to nearby communities. If you enjoy natural history, visiting a workshop can be a fascinating addition to a southern route. Ask which parts of a fossil are genuine, repaired or reconstructed before buying, and confirm any export paperwork needed for your destination.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="rissani">Rissani</PlaceHoverCard> has a traditional market and a strong connection to regional trade history. Market activity depends on the day and local routines, so ask your guide what will actually be open rather than expecting a full market every afternoon.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">These stops give a Sahara tour a human side. A good visit is about meeting the place, not using it as an excuse for high-pressure shopping. Read our <Link href="/erfoud-fossils-for-sale-in-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Erfoud fossil buying guide</Link> if you would like to understand specimens and workshop visits before traveling.</p>
<ArticlePhoto name="fossils"/>
</SectionFrame>;
}
