import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section10(){
return <SectionFrame id="atlas-mountains-road" label="LANDSCAPES" title="The Atlas Mountains: Enjoy the Journey Between Places" index={10}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The <PlaceHoverCard place="high-atlas-mountains">High Atlas</PlaceHoverCard> region introduces some of the most striking scenery on a southbound tour. Roads climb through changing mountain landscapes, passing villages, terraced fields and broad views. Crossing a pass can be memorable in itself; it should not be treated only as time between two hotel names.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Weather changes quickly with altitude. A warm afternoon in Marrakech does not mean mountain mornings will be mild, especially in winter. Snow, road work or heavy rain can occasionally affect mountain routes, so the day should leave room for safe changes.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A comfortable tour includes planned breaks, patient driving and time to photograph the scenery from appropriate stops. You may also choose a dedicated day in the mountains with a short village walk or a meal in a local guesthouse. Never assume a hiking route is easy without checking the distance, terrain and local conditions.</p>
<ArticlePhoto name="atlas"/>
</SectionFrame>;
}
