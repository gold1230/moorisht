import { ArticleSection, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";
import Link from "next/link";

export default function Section26(){
return <ArticleSection id="how-to-book-best-morocco-tour" label="PLAN WITH CONFIDENCE" title="How to Choose and Book an Unforgettable Morocco Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Start by deciding how many days you have and where your flights arrive and depart. Next, pick two or three experiences you care about most. For example, one couple may put the Sahara camp first, while another family prefers history, food and gentle outdoor activities. Once you know your priorities, the route becomes much easier to organize.</p>
<ArticleTable headings={tables.booking.headings} rows={tables.booking.rows} />
<p className="mt-5 text-[17px] leading-8 text-slate-700">Before paying a deposit, ask for a written outline of each day, accommodation types, travel times, included meals, guiding arrangements and cancellation terms. Confirm the route, especially if your flight comes into one city and leaves from another. When you have special requests, such as a vegetarian meal or a vehicle transfer to camp, make sure they appear in the booking details.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Avoid making important travel choices from a photograph alone. Ask practical questions about the rooms, tents, bathroom facilities, transfer arrangements and group size. A professional answer should make the plan clearer, not pressure you to book immediately.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ready to start? You can <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">plan a private Morocco itinerary</Link> or <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact Moorish Tour</Link> with your travel dates, number of guests and preferred cities. We can help you compare a short Sahara trip with a longer, more relaxed journey.</p>
</ArticleSection>;
}
