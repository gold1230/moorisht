import Link from "next/link";

import { SectionFrame, InfoPanel, Timeline } from "./ArticleElements";



export default function Section12(){return <SectionFrame id="three-days-in-marrakech-city-itinerary" index={12} label="STAY IN THE CITY" title="An Easy 3-Day Marrakech City Itinerary">
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you have three days for Marrakech itself, there is plenty to enjoy without attempting a round trip to the distant Sahara. On your first day, settle into a riad and begin with a guided medina walk. See one important monument, find a relaxed place for lunch and return to the main square later when the atmosphere changes. Avoid filling your arrival day with activities if your flight lands late.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Use day two for the places that deserve more time: Bahia Palace, a garden, an artisan workshop or a food experience. Your interests should guide the order. If you love architecture, a knowledgeable city guide can help make decorative details and historic stories much more meaningful. If you love food, a cooking lesson or local market visit may be a better choice than another museum.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">On day three, take an excursion to the foothills of the Atlas Mountains, visit a nearby countryside destination or simply enjoy a slow morning in Marrakech before departure. Keep your airport transfer and luggage plans in mind. The most satisfying short city break often leaves space for an unplanned café and a final walk through the markets.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><strong className="font-bold text-[#102043]">Important:</strong> This is a Marrakech-based city itinerary, not a three-day Merzouga desert itinerary. The desert trip has substantial road travel and normally uses its three days for the journey itself. Compare both options in our <Link href="/3-days-in-morocco-tours-ideas-and-travel-tips/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">three days in Morocco guide</Link> before choosing.</p>
<Timeline items={[["Day 1", "Medina, Koutoubia exterior, one palace and evening square"], ["Day 2", "Garden, artisan workshop, local food and relaxed exploration"], ["Day 3", "Nearby nature excursion or easy departure morning"]]}/>
<InfoPanel title="Choose your focus"><p>Three days in Marrakech and three days from Marrakech to Merzouga are two very different holidays. Decide whether your priority is the city or the distant Sahara dunes.</p></InfoPanel>
</SectionFrame>;}
