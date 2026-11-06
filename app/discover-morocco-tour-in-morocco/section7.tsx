import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section7(){
return <ArticleSection id="ait-ben-haddou-ouarzazate-and-dades" label="KASBAHS & VALLEYS" title="Ait Ben Haddou, Ouarzazate and the Dades Valley">
<p className="mt-5 text-[17px] leading-8 text-slate-700">After crossing the mountains, many southbound tours visit <PlaceHoverCard place="ait-ben-haddou">Ait Ben Haddou</PlaceHoverCard>, a historic ksar built with traditional earthen architecture. Its towers and narrow pathways stand above a valley and are especially striking in warm light. Visitors can walk through parts of the settlement and learn how fortified communities once formed part of trade routes across southern Morocco. The site is UNESCO-listed, but opening hours and access to particular buildings can vary; a local guide can help explain what you are seeing.</p>
<ArticlePhoto name="ait" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">The journey often continues through Ouarzazate, a city linked with historic kasbahs and film production. Depending on your plan, you might stop at Kasbah Taourirt, visit a film-related attraction or simply take a lunch break before traveling east. Travelers interested in architecture may want more time here, while families on a short journey may prefer to keep stops brief and arrive at their hotel earlier.</p>
<ArticlePhoto name="kasbah" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Beyond Ouarzazate, the landscape becomes a mixture of palm groves, rocky hills and river valleys. Dades Valley is known for dramatic red formations, small settlements and the winding mountain road that appears in so many travel photographs. The valley is also a practical overnight stop for a Marrakech-to-Merzouga route. Staying here breaks the drive and gives you a calmer evening before the next day of desert travel.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Many travelers especially enjoy the contrast between the green areas beside rivers and the dry rock formations higher on the slopes. A short walk or a tea stop is often enough to appreciate this part of Morocco. If you have time for a full extra day, you can explore deeper into the valley; on a shorter itinerary, choose one or two meaningful stops instead of trying to see everything.</p>
</ArticleSection>;
}
