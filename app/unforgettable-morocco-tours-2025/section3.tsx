import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section3(){
return <ArticleSection id="best-places-for-morocco-tours" label="CHOOSE YOUR HIGHLIGHTS" title="Best Places to Visit on an Unforgettable Morocco Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">You do not have to see every famous place to understand the beauty of this country. The best route often joins a few contrasting regions: a city full of history, a peaceful natural area and one memorable overnight experience. With extra time, the northern mountains or Atlantic coast can give your journey another feeling.</p>
<ArticleTable headings={tables.destinations.headings} rows={tables.destinations.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="fes">Fes</PlaceHoverCard> is ideal if you enjoy historic medinas, artisans and traditional architecture. <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard> attracts visitors with its blue-painted lanes and calm mountain setting. <PlaceHoverCard place="rabat">Rabat</PlaceHoverCard> offers royal monuments and a relaxed capital-city atmosphere. <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard> is useful for international arrivals and the impressive Hassan II Mosque. <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> gives you Atlantic air, fishing boats and a slower coastal day.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Southern destinations have their own character. The old earthen buildings of <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard> and the rock walls of <PlaceHoverCard place="todra-gorge">Todra Gorge</PlaceHoverCard> work beautifully on a road trip. Near the Sahara, <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> is known for its fossils and date-palm region, while the dunes beside Merzouga are a wonderful place to enjoy sunset.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Not all these places belong on the same short trip. If your travel time is limited, select three or four stops that make sense together instead of trying to collect every famous destination in one week. Our <Link href="/discover-morocco-tour-in-morocco/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Discover Morocco route guide</Link> offers more ideas for combining regions.</p>
</ArticleSection>;
}
