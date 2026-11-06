import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section6(){
return <SectionFrame id="chefchaouen-rif-mountains" label="NORTHERN MOROCCO" title="Chefchaouen: Take Your Time in the Blue Streets" index={6}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard> is a mountain town that encourages a slower pace. Blue-washed lanes, stairways, small plazas and views of the Rif hills make it a favorite for gentle walks and photography. The most pleasant moments often happen away from the busiest corners.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Stay overnight if your schedule allows. You can enjoy the blue streets before the largest day-trip crowds arrive and settle into a relaxed evening in town. Wear comfortable footwear: steep lanes and steps are part of the charm, but they may be tiring for anyone with mobility needs.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Chefchaouen works particularly well between Tangier and Fes on a northern itinerary. It does not fit naturally into every Marrakech-based short tour, and adding it without considering road time can make the holiday feel hurried. The best route depends on where your flight or ferry arrives.</p>
<ArticlePhoto name="bluecity"/>
</SectionFrame>;
}
