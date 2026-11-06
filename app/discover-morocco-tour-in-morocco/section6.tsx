import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section6(){
return <ArticleSection id="atlas-mountains-and-tizi-n-tichka" label="SCENIC ROADS" title="High Atlas Mountains, Tizi n’Tichka and Traditional Villages">
<p className="mt-5 text-[17px] leading-8 text-slate-700">The High Atlas Mountains are more than scenery seen through the car window. The mountain roads connect different climates, local communities and landscapes. As you leave Marrakech, the road gradually climbs past farms, terraced hillsides and villages built from earth and stone. Views change at every bend. The Tizi n’Tichka pass is one of the well-known road crossings used by travelers heading toward <PlaceHoverCard place="ouarzazate">Ouarzazate</PlaceHoverCard> and the southern valleys.</p>
<ArticlePhoto name="atlas" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Road travel in the Atlas requires flexibility. Snow, rain, roadworks or local traffic can affect journey times, especially in winter and after severe weather. An experienced driver may choose a different stop or reduce the number of visits to keep the day safe and comfortable. If you experience motion sickness, ask for a front seat when possible, take regular breaks and keep water available. Mountain weather can also be cooler than in Marrakech, so a warm layer is useful outside the summer months.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">You do not need to be an experienced hiker to enjoy this region. Scenic viewpoints, short walks and visits to small communities can be just as rewarding as a long trek. Travelers who prefer active holidays can discuss guided hiking in suitable areas, but not every mountain village walk is appropriate for young children or people with mobility difficulties. Tell the team your activity level before booking so the stops fit your needs.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A good Morocco itinerary treats the Atlas crossing as a day of discoveries rather than just a transfer. Give yourself time to photograph viewpoints, enjoy lunch and learn about local life, while keeping realistic arrival times for your accommodation in the south. A slower day often produces better memories and better photographs than a rushed drive.</p>
</ArticleSection>;
}
