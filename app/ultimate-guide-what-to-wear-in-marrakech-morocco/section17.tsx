import { ArticleSection } from "./ArticleElements";
import Link from "next/link";

export default function Section17() {
 return (
  <ArticleSection id="plan-your-marrakech-and-sahara-adventure-with-moorish-tour" label="Travel with Local Experts" title="Plan Your Marrakech and Sahara Adventure with Moorish Tour">
  <p className="mt-5 text-lg leading-8 text-gray-700">Now you know what to wear in Marrakech, you can focus on the part that matters most: enjoying the journey. From your first walk through the old medina to a peaceful sunset in the Sahara, the right clothes can make each experience more comfortable. You can visit Marrakech for a few days, explore the Atlas Mountains or travel farther south to Erfoud and Merzouga, where a night at a desert camp gives your Morocco holiday a completely different feeling.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">At Moorish Tour, we help travelers plan Morocco itineraries that fit their dates, interests and preferred travel pace. Tell us whether you want historical city visits, a private desert adventure, camel trekking, a relaxed family holiday or a journey with several stops. Our local team can explain how the route works and help you prepare for the activities and seasons you choose.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">Contact Moorish Tour before your trip with your travel dates and starting city. We will help you explore the tour options and plan a journey through Marrakech and Morocco that feels personal, enjoyable and well organized.</p>
  <div className="mt-7 flex flex-wrap gap-3">
    <Link href="/plan-your-morocco-tour" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Plan your Morocco tour →</Link>
    <Link href="/contact/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Contact Moorish Tour →</Link>
    <Link href="/tour/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Browse Morocco tours →</Link>
  </div>
</ArticleSection>
 );
}
