import { ArticleSection, TravelQuote } from "./ArticleElements";
import Link from "next/link";

export default function Section16() {
  return (
    <ArticleSection id="plan-your-one-week-morocco-adventure-with-moorish-tour" label="Start Your Journey" title="Plan Your One-Week Morocco Adventure with Moorish Tour">
      <p className="mt-5 text-lg leading-8 text-gray-700">A <strong className="font-bold text-slate-900">one-week Morocco tour</strong> is a wonderful way to enjoy the colors, history, landscapes and hospitality of the country. You can spend a morning exploring the medina of Marrakech, cross the Atlas Mountains, visit historic kasbahs, watch a Sahara sunset and finish the week learning about traditional crafts in Fes. Or you can choose a more relaxed journey around the coast and northern cities. The best option is the one that fits your interests and travel time.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">At Moorish Tour, we focus on creating itineraries that give travelers enough time to enjoy the road and the destinations. Tell us whether you prefer a private or small-group tour, a standard or luxury desert camp, mountain walking, food experiences or guided city visits. We will help you understand the route, how long the drives take and which arrangements need to be confirmed before departure.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Start by exploring our <Link href="/all-morocco-tours-packages/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco tour packages</Link>, ask about a <Link href="/tour/morocco-itinerary-7-days-from-marrakech/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">7-day tour from Marrakech</Link>, or <Link href="/contact/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact our local team</Link> for a customized itinerary. Share your travel dates, arrival airport and the places you most want to see, and we can help you build a week in Morocco that feels personal and memorable.</p>
      <TravelQuote>Seven days can show you many sides of Morocco. A thoughtful route makes the journey more enjoyable than a packed schedule ever could.</TravelQuote>
    </ArticleSection>
  );
}
