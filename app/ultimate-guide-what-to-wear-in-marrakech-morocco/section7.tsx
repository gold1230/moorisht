import { ArticleSection, ArticlePicture, TravelNote } from "./ArticleElements";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import DesertImage from "@/public/blog/content/travelers-camel-trekking-across-erg-chebbi-dunes-at-sunset.jpg";

export default function Section7() {
 return (
  <ArticleSection id="what-to-wear-in-merzouga-and-the-sahara-desert" label="Desert Clothing Essentials" title="What to Wear in Merzouga and the Sahara Desert">
  <p className="mt-5 text-lg leading-8 text-gray-700">The Sahara Desert around Merzouga offers a completely different environment from the streets of Marrakech. During the day, bright sunlight reflects from the sand, and wind can lift fine dust into the air. After sunset, the temperature can drop, sometimes sharply in winter. That is why a good desert outfit needs to protect your skin, allow you to move comfortably and work with changing conditions. You do not need specialist desert clothes for a normal overnight camp, but the right basics make a real difference.</p>
  <ArticlePicture src={DesertImage} alt="Camel trekking and desert camping near Erg Chebbi are more comfortable with long trousers, sun protection and a warm evening layer." caption="Camel trekking and desert camping near Erg Chebbi are more comfortable with long trousers, sun protection and a warm evening layer." />
  <p className="mt-5 text-lg leading-8 text-gray-700">During the day, wear light long trousers, a breathable long-sleeved shirt or T-shirt, sunglasses and a hat that stays secure in the wind. A lightweight scarf can protect your neck and face if the sand is blowing, and shoes with closed toes protect you when walking around rocky areas. For a short dune walk, people often remove their shoes on clean soft sand, but you will still need footwear for camp areas and rough ground. Always follow your guide’s local advice.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">For evenings, pack a fleece or jacket, particularly from late autumn through early spring. In winter a warm hat and extra socks may be welcome around camp after dinner. If you are booked into a luxury desert camp, confirm whether the tent is heated or cooled; the words luxury and desert camp do not mean all properties have the same facilities. Avoid packing only summer clothes because your Marrakech hotel felt warm at midday.</p>
  <h3 id="what-to-wear-in-merzouga-and-the-sahara-desert-daytime-clothing-for-camel-trekking" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Daytime Clothing for Camel Trekking</h3>
  <p className="mt-5 text-lg leading-8 text-gray-700">Long trousers protect your legs from friction when seated on a camel. A soft, breathable top, sunglasses and a secure hat are helpful. Keep your phone or camera in a zipped bag, and avoid dangling items that can fall during the ride. If camel riding is not comfortable or suitable for you, ask about a vehicle transfer as an alternative.</p>
  <h3 id="what-to-wear-in-merzouga-and-the-sahara-desert-what-to-wear-in-a-sahara-desert-camp-at-night" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">What to Wear in a Sahara Desert Camp at Night</h3>
  <p className="mt-5 text-lg leading-8 text-gray-700">Bring a warm layer even if the day was hot. Pack sleepwear that you feel comfortable in, warm socks during winter and suitable shoes for walking between your tent and the dining area. Check the camp’s facilities before departure, including blankets, bathroom access, heating and the exact transfer arrangements.</p>
  <h3 id="what-to-wear-in-merzouga-and-the-sahara-desert-clothing-for-a-4x4-desert-excursion" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Clothing for a 4×4 Desert Excursion</h3>
  <p className="mt-5 text-lg leading-8 text-gray-700">Comfortable trousers, a breathable top, a hat and closed shoes are practical for exploring off-road tracks near Erfoud and Merzouga. A scarf is useful for wind and dust when you step out of the vehicle. Keep water handy, and protect electronics from blowing sand.</p>
  <TravelNote title="Safety during extreme heat"><p>In very hot weather, choose early morning or late afternoon for outdoor desert activities, drink water regularly and follow your guide’s advice. Clothing alone cannot prevent heat illness.</p></TravelNote>
  <p className="mt-6 text-base leading-8 text-slate-700">Learn about <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> and the dunes of <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard> before your desert adventure.</p>
  <div className="mt-7 flex flex-wrap gap-3">
    <Link href="/tour/3-days-desert-tour-from-marrakech-to-merzouga/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Explore the 3-day Marrakech to Merzouga tour →</Link>
    <Link href="/top-5-best-merzouga-luxury-desert-camps/" className="inline-flex rounded-lg border border-amber-300 bg-[#fffaf4] px-4 py-3 text-sm font-bold text-amber-800 transition hover:bg-amber-100">Read about luxury desert camps →</Link>
  </div>
</ArticleSection>
 );
}
