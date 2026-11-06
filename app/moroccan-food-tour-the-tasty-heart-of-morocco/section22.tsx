import { ArticleSection, ArticleQuote } from "./ArticleElements";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";

export default function Section22() {
 return (
<ArticleSection id="plan-your-moroccan-food-tour-with-moorish-tour" label="YOUR NEXT JOURNEY" title="Plan Your Moroccan Food Tour with Moorish Tour">
<p className="mt-5 text-lg leading-8 text-gray-700">The best Moroccan food experiences bring together flavour, history and people. You can discover a new dish in a busy Marrakech market, learn to prepare couscous in a family kitchen, taste coastal seafood or enjoy a simple dinner after watching the Sahara sunset. There is no single perfect culinary route for everyone: the most rewarding plan follows your interests and allows enough time to enjoy each stop.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Moorish Tour can help you build food and cultural experiences into a private itinerary, with transport and sightseeing planned around your travel dates. If you are starting in Fes, Marrakech or <PlaceHoverCard place="casablanca">Casablanca</PlaceHoverCard>, tell us where you will arrive and how many days you have. We can discuss the kinds of experiences you would enjoy, subject to availability and confirmation with local hosts.</p>
<p className="mt-5 text-lg leading-8 text-gray-700">Start with our <Link href="/all-morocco-tours-packages/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Morocco tour packages</Link> or <Link href="/plan-your-morocco-tour/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">travel planning guide</Link>, then <Link href="/contact/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">contact Moorish Tour</Link> with your dates and the dishes you would love to try. A well-planned Moroccan food tour is about more than checking famous dishes off a list: it is a way to connect with the country, one meal at a time.</p>
<ArticleQuote>Come for the flavours, and leave with stories you can tell every time you cook the dish again.</ArticleQuote>
</ArticleSection>
 );
}
