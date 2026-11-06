import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function MoroccoStudentToursArticle() {
 return (<div className="space-y-14">
<div className="rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
      <div className="space-y-4 text-[17px] leading-8 text-slate-800">
        <p>Morocco student tours are the perfect mix of education, culture, and adventure. Many schools, colleges, and universities choose Morocco because it offers history, geography, language learning, and cultural exchange in one destination. From the busy souks of <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> to the peaceful Sahara Desert in <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, students can experience real life outside the classroom. Our Morocco educational tours are designed especially for student groups who want safe travel, guided visits, and meaningful learning experiences.</p>
        <p>These student trips in Morocco include visits to imperial cities, UNESCO World Heritage Sites, local communities, museums, and natural landscapes like the <PlaceHoverCard place="high-atlas-mountains">Atlas Mountains</PlaceHoverCard>. Students can learn about Islamic architecture, African history, desert ecology, and Moroccan traditions. We provide professional English-speaking guides who explain everything in simple and interesting ways. Whether it is a high school cultural tour or a university study abroad program, Morocco student group travel offers unforgettable moments and strong educational value.</p>
      </div>
    </div>
<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />
<Section8 />
</div>);
}
