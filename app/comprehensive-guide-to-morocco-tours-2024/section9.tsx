import Link from "next/link";
import { SectionFrame, InfoPanel } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section9(){
return <SectionFrame id="tangier-start-morocco" label="NORTHERN GATEWAY" title="Tangier: A Natural Starting Point from Europe" index={9}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tangier feels like a meeting point between coastlines and cultures. Explore its old kasbah, waterfront, medina lanes and cafés, or plan a nearby outing to Asilah or Tetouan. It is a good first stop if you reach the country by ferry from Spain or fly directly into the north.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Two port names matter: <strong className="font-extrabold text-[#102043]">Tangier Ville and Tangier Med are not the same place</strong>. Tangier Ville is close to the city center; Tangier Med is well outside town and usually requires a longer onward transfer. Always match your transport plan to the exact port on the ticket.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For a northern route, Tangier can connect naturally with Chefchaouen, Fes and Rabat. A Sahara extension is possible, but it needs additional days. Our <Link href="/morocco-tours-from-spain/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco tours from Spain guide</Link> explains ferry choices and practical routes in more detail.</p>
<ArticlePhoto name="port"/>
<InfoPanel title="Before you book a ferry">Check the arrival port, passport rules, car or pedestrian ticket conditions, and onward pickup point. Do not assume every Tangier ferry arrives in the city center.</InfoPanel>
</SectionFrame>;
}
