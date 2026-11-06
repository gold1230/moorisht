import { ArticleSection, ArticleQuote } from "./ArticleElements";
import Link from "next/link";

export default function Section2(){
return <ArticleSection id="why-choose-local-casablanca-agency" label="LOCAL VALUE" title="Why Choose a Local Travel Agency in Casablanca?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A local guide understands details that do not always appear on travel websites. Which streets are easier to explore on foot? How much time should you allow for the mosque? Where can you stop for a comfortable lunch without losing the afternoon? These small choices shape how a holiday feels from morning to evening.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Working with a Casablanca-based arrival plan is especially useful when your flight lands late, your hotel is outside the center, or you want to visit more than one city. Rather than arranging several independent transfers, you can ask one company to build a connected route and make the handover points clear. This does not mean every traveler needs an agency; a simple city visit can also work independently.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The real value is <strong className="font-semibold text-slate-900">local planning that matches your needs</strong>. A family with children may want shorter sightseeing blocks and reliable rest stops. A couple may prefer a private guide and evenings in a charming riad. Travelers interested in photography may want time beside the ocean when the light is softer.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ask the agency what it directly provides and what it books with local partners. Transport, city guiding, hotel reservations and desert camps are different services. A good organizer should tell you which parts are included, which can be changed and whether extra fees apply. You can compare options in our <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">private travel planning guide</Link>.</p>
<ArticleQuote>A well-planned journey leaves room for real discovery instead of filling every hour with another transfer.</ArticleQuote>
</ArticleSection>;
}
