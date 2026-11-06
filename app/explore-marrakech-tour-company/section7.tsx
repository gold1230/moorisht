import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";

import ArticlePhoto from "./ArticlePhoto";
export default function Section7(){return <SectionFrame id="marrakech-day-trip-atlas-mountains" index={7} label="BEYOND THE MEDINA" title="Atlas Mountains Day Trips from Marrakech">
<p className="mt-5 text-[17px] leading-8 text-slate-700">After a busy day in Marrakech, a change of scenery can feel wonderful. The <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard> offer cooler valleys, traditional villages and a different pace of life. A popular route heads toward Imlil, where visitors can enjoy beautiful mountain views and short or longer walks depending on their interests and physical ability.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A relaxed day trip does not require a difficult hike. You can stop for tea, take photographs, explore a village path and enjoy a local lunch. If your group includes children or people who are not comfortable walking far, ask the tour company to suggest easier options. Mountain weather can change quickly, so good footwear and an extra layer are useful even when the city is warm.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The quality of a mountain excursion depends on time and pace. There is little pleasure in spending the whole day chasing a long list of villages. Choose one valley, enjoy a few meaningful stops and return without feeling rushed. For a longer journey, <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">Moorish Tour&apos;s custom itinerary planning</Link> can include an additional night in the region.</p>
<ArticlePhoto name="atlasroad"/>
</SectionFrame>;}
