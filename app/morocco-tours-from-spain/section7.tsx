import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section7(){
  return <SectionFrame id={"chefchaouen-from-spain"} label={"BLUE CITY"} title={"Chefchaouen: A Slow Day in Morocco’s Blue Streets"} index={7}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">From Tangier, one of the most loved journeys heads toward <PlaceHoverCard place="chefchaouen">Chefchaouen</PlaceHoverCard>, set among green hills in the Rif Mountains. Its blue-painted lanes make photographs look beautiful, but the best part is often the pace. You can climb steps to a quiet square, find a small café, and watch the afternoon move through the town without hurrying.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Chefchaouen works well on a two- or three-night northern Morocco break, especially when paired with Tangier and Tetouan. It is not a quick walk away from the ferry port, so travel time needs a realistic place in the itinerary. If your schedule is short, choose one or two main visits rather than trying to fit four towns into a single day.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A night in Chefchaouen is a lovely option for travelers who enjoy early morning light, peaceful lanes and small locally run guesthouses. Ask about the distance between your riad and the nearest car-accessible point: some accommodation sits on narrow lanes where vehicles cannot reach the door.</p>
<ArticlePhoto name="bluecity"/>
  </SectionFrame>;
}
