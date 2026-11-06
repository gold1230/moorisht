import { ArticleSection } from "./ArticleElements";
import Link from "next/link";

export default function Section11(){
return <ArticleSection id="dayet-srij-lake-birdwatching" label="WILDLIFE" title="Dayet Srij Lake: Flamingos and Birds When Water Is Present">
<p className="mt-5 text-[17px] leading-8 text-slate-700">One of the most surprising sights near Merzouga is Dayet Srij, a shallow seasonal lake area. When conditions are wet enough, water can gather against the desert backdrop and attract birds. Greater flamingos and other migratory waterbirds have been observed here in suitable seasons, creating a beautiful contrast between the dunes and the lake.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><strong className="font-semibold text-slate-900">The lake is seasonal, and it may be dry when you visit.</strong> That is important to know before planning a special birdwatching trip. Bird presence changes with rainfall, water levels and migration. Ask locally about recent conditions and never assume that flamingos will be waiting when you arrive.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You can still enjoy the area for its scenery and quiet atmosphere when access is suitable. Bring binoculars if you have them, keep your distance from birds and avoid walking through sensitive wet ground. For more locations and seasonal ideas, visit our <Link href="/bird-watching-tours-morocco/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">bird watching tours guide</Link>.</p>
</ArticleSection>;
}
