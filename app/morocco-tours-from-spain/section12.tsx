import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section12(){
  return <SectionFrame id={"marrakech-end-of-route"} label={"RED CITY"} title={"Marrakech: A Beautiful Ending to a Longer Tour"} index={12}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> feels very different from the quiet of the desert. The city fills your senses with market colours, courtyard gardens, scooters, fragrant food and the energy of Jemaa el-Fnaa as evening arrives. After several travel days, staying two nights can be a smart choice. You have time to see the sights and time to enjoy a slow breakfast in a riad.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A good Marrakech day might include a guided walk through the medina, Bahia Palace and the area around the Koutoubia Mosque, with optional visits chosen around opening hours. The souks are fun to explore, but you do not have to buy anything to enjoy the atmosphere. A cooking class or a hammam can also offer a quieter experience between sightseeing days.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For people coming from Spain, Marrakech can be either a flight arrival city or the final stop of a route starting in Tangier. See our <Link href="/best-marrakech-tour-company/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Marrakech tour company guide</Link> and <Link href="/explore-marrakech-tour-company/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Marrakech travel experiences</Link> for ideas on arranging your time well.</p>
<ArticlePhoto name="marrakech"/>
  </SectionFrame>;
}
