import Link from "next/link";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section30(){
return <SectionFrame id="young-adults-adventure" label="ACTIVE HOLIDAYS" title="Morocco Tours for Young Adults, Students and Friends" index={30}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you love active days, Morocco offers hiking, city food walks, mountain scenery and desert experiences. Young adults often enjoy the mix of cultural discovery and outdoor adventure, especially when traveling with friends who share the same expectations about early starts and accommodation.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Adventure activities need careful planning. For quad biking, hiking, climbing or other specialist outings, check that the operator uses suitable equipment, provides safety instruction and explains insurance and medical considerations. Availability can change with weather and local conditions.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Not every student or young traveler wants a nonstop adventure tour. Some prefer architecture, language, music or a relaxed coastal break. Our <Link href="/morocco-student-tour-educational-trips-cultural/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco student tours guide</Link> offers ideas for educational travel, while the <Link href="/tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco tour collection</Link> is a starting point for broader itineraries.</p>
<ArticlePhoto name="atlas"/>
</SectionFrame>;
}
