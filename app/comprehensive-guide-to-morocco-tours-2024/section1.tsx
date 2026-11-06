import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame, FeatureCards } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section1(){
return <SectionFrame id="morocco-tours-complete-guide" label="START HERE" title="A Comprehensive Guide to Morocco Tours: Plan a Trip That Fits You" index={1}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A great Morocco tour is not about collecting as many places as possible. It is about waking up in a quiet riad, hearing the first sounds of a medina, sharing a fresh meal after a mountain drive, and reaching the dunes with time to enjoy the sunset. This guide makes those moments easier to plan.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are visiting <Link href="/morocco/">Morocco</Link> for the first time, start with three questions: <strong className="font-extrabold text-[#102043]">How many nights do I have? Where will I arrive? What do I most want to experience?</strong> Your answers shape the route far more than a list of famous attractions.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You will find practical routes from the USA, Spain and Portugal, along with plans starting in <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>, <PlaceHoverCard place="tangier">Tangier</PlaceHoverCard> and <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>. We also explain desert camps, food, tour costs, cultural manners and what to ask before booking. The goal is to help you travel with curiosity and without unnecessary stress.</p>
<FeatureCards items={[["Who this guide is for", "First-time guests who want a clear starting point"], ["Families and couples", "Travelers who need a comfortable pace and flexible days"], ["Desert explorers", "Visitors dreaming of Erg Chebbi without surprise driving times"], ["Culture lovers", "People who prefer meaningful stops over rushed photos"]]}/>
<ArticlePhoto name="courtyard"/>
</SectionFrame>;
}
