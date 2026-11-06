import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section6(){
return <ArticleSection id="ait-ben-haddou-and-ouarzazate" label="KASBAH COUNTRY" title="Ait Ben Haddou and Ouarzazate: The Road Through History">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ait Ben Haddou is one of the most memorable stops on the route between Marrakech and southern Morocco. From a distance, its earthen towers rise above the landscape in layers of warm brown and red. Up close, narrow lanes and traditional construction show why this historic ksar has attracted so many visitors and filmmakers.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Walk at a comfortable pace and bring water if the weather is warm. Some paths are uneven and there are steps and slopes, so supportive shoes are useful. The view from the higher parts can be beautiful, but you do not need to climb to the very top to appreciate the site. Give yourself enough time to look, not just take one photograph and leave.</p>
<ArticlePhoto name="kasbah" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ouarzazate is often called a gateway to the Sahara. It is a practical stop between the mountains, valleys and desert, with kasbah architecture and a long connection to film production. Many visitors continue toward Skoura or Dades Valley for their overnight stay.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are choosing a <Link href="/marrakech-desert-tours/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech desert tour</Link>, check how much time the route actually allows at Ait Ben Haddou. A long checklist of attractions does not always mean there is enough time to enjoy each one.</p>
</ArticleSection>;
}
