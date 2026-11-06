import { ArticleSection, ArticleNote, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";

export default function Section3(){
return <ArticleSection id="how-to-check-trusted-casablanca-tour-company" label="BOOKING CONFIDENCE" title="How to Recognize a Trustworthy Casablanca Tour Company">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Before you book, look beyond beautiful photos and confident advertising. A reliable travel company should be easy to contact and should answer practical questions without avoiding details. If you request a six-day route from Casablanca, the reply should describe where you travel, where you stay and approximately how demanding each driving day will be.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Start with the written itinerary. Check the date, pickup location, destination for each night and the activities mentioned. If the description says &apos;luxury camp&apos;, ask what that means: private bathroom, meals, heating, air-conditioning when available, and transfer arrangements. A clear list helps you compare packages fairly.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Next, ask whether the driver speaks your preferred language, whether a licensed city guide is included in places such as Fes, and how communication works if a schedule changes. A driver and an official walking guide may be two different people. This distinction matters when your goal is to understand history rather than only reach landmarks.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Finally, review payment instructions, cancellation terms and how changes are handled. Do not rely only on verbal promises. Keep your booking confirmation accessible offline when you travel. An agency does not need to promise perfection; it needs to explain its service clearly and respond if there is a problem.</p>
<ArticleTable headings={tables.agencyChecks.headings} rows={tables.agencyChecks.rows} />
<ArticleNote title="Smart booking habit"><p>Compare written services, not just headlines such as &apos;VIP&apos;, &apos;all-inclusive&apos; or &apos;best price&apos;. Ask for accommodation names or standards, meal plans, entry fees, additional guide charges, deposit conditions and an emergency contact before paying.</p></ArticleNote>
</ArticleSection>;
}
