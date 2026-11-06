import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section5(){
return <SectionFrame id="fes-cultural-heritage" label="OLD CITIES" title="Fes: Follow the History, Crafts and Small Details" index={5}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="fes">Fes</PlaceHoverCard> feels different from Marrakech. Its old city is a maze of lanes where daily life and traditional trades continue side by side. You might pass a small bakery, hear metalworkers in a workshop or discover a carefully carved doorway almost hidden behind a turning street.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A local guide is especially valuable here. With help, places such as the Bou Inania Madrasa and artisan quarters become stories rather than just names. Some religious buildings are not open to non-Muslim visitors, so check access and respect local rules. Ask before taking close-up photographs of craftspeople or residents.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Plan at least one full day for the old medina if you can. Walking is part of the experience, and it is better to enjoy a few places carefully than rush through them. If you are also continuing to the Sahara, leave enough time for the long journey toward Midelt and <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> instead of treating it as a short afternoon transfer.</p>
<ArticlePhoto name="fes"/>
</SectionFrame>;
}
