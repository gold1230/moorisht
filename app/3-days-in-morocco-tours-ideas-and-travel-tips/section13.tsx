import Link from "next/link";
import { ArticleSection, TravelNote, TravelQuote } from "./ArticleElements";

export default function Section13() {
  return (
    <ArticleSection id="plan-your-3-days-in-morocco-with-moorish-tour" label="Start Your Trip" title="Plan Your 3 Days in Morocco with Moorish Tour">
      <p className="mt-5 text-lg leading-8 text-gray-700">Whether you dream about three days in the Sahara, a cultural stay in Marrakech, a historic walking trip in Fes, or a quiet mountain break, Moorish Tour can help you choose a route that feels right for you. We believe a short holiday should be easy to understand and comfortable to follow, with enough time to enjoy the people, landscapes, and traditions that make Morocco so special.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Tell us your dates, arrival and departure cities, number of travelers, and the kind of experience you prefer. You can also mention your budget range, whether you want a private or shared tour, and any special interests such as food, photography, history, fossils, or camel trekking. Our local team can then recommend practical options and explain what can realistically fit into three days.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">What to tell us when requesting a three-day itinerary</h3>
      <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700"><li>Your arrival city, departure city, and approximate travel times.</li><li>Whether you have three full sightseeing days or three days including flights.</li><li>The number of adults and children in your group.</li><li>Your preferred experience: Sahara, cities, mountains, coast, or culture.</li><li>Your accommodation preferences and approximate budget.</li><li>Any mobility needs, dietary requests, or must-see stops.</li></ul>
      <TravelNote title="Ready to choose your route?"><p>Explore <Link href="/tour/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Moorish Tour itineraries</Link>, request a personal plan through our <Link href="/plan-your-morocco-tour" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">tour planning page</Link>, or <Link href="/contact" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact our local team</Link> for help choosing the best three-day experience.</p></TravelNote>
      <TravelQuote>Three days might be a short holiday, but the moments you remember can stay with you for years.</TravelQuote>
    </ArticleSection>
  );
}
