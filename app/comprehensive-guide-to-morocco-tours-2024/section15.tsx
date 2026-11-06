import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section15(){
return <SectionFrame id="essaouira-coastal-break" label="ATLANTIC COAST" title="Essaouira: A Relaxed Finish by the Ocean" index={15}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> has a laid-back feeling that many travelers welcome after the busier inland cities. You can walk along the harbor, visit the medina, see the ramparts and enjoy fresh seafood where it suits your diet and budget. The Atlantic breeze adds a very different mood to the journey.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For a Marrakech-based holiday, Essaouira can work as a full-day excursion, although an overnight stay allows more relaxed wandering. Its breezy weather is part of its personality, and the beach is not always a calm place for swimming.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">On a longer tour, the coast makes a nice closing chapter after the mountains and desert. It is also a good option for travelers who would rather spend their final day reading in a courtyard and walking beside the sea than fitting in one more ambitious sightseeing program.</p>
<ArticlePhoto name="coast"/>
</SectionFrame>;
}
