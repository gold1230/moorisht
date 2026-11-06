import { ArticleSection } from "./ArticleElements";
import Link from "next/link";

export default function Section4() {
  return (
    <ArticleSection id="marrakech-explorer-package-souks-palaces-and-local-life" label="City Discovery" title="Marrakech Explorer Package: Souks, Palaces and Local Life">
      <p className="mt-5 text-lg leading-8 text-gray-700">A week in Morocco can begin with two memorable days in Marrakech, a city full of history and color. The old medina is a maze of traditional shops, neighborhood bakeries, tiled buildings and peaceful courtyards behind simple doorways. A <strong className="font-bold text-slate-900">Marrakech explorer package</strong> gives you time to discover the city with a local guide while still enjoying quiet moments in your riad.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Jemaa el-Fnaa square changes throughout the day. In the morning, it is a lively meeting place; by evening, restaurants and musicians create a different atmosphere. Around the square you can explore the souks, see artisans making leather goods, and browse pottery, lamps, textiles and spices. A guide can explain shopping customs and help you understand which products are genuinely handmade.</p>
      <h3 id="marrakech-explorer-package-souks-palaces-and-local-life-historic-places-to-visit-in-marrakech" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Historic Places to Visit in Marrakech</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">Popular attractions include Bahia Palace, Ben Youssef Madrasa, the gardens of Marrakech and the area around Koutoubia Mosque. Some places have separate entrance fees or advance booking arrangements. Instead of trying to visit everything at once, select a few attractions that interest you most and spend enough time in each one to appreciate the history.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Food is an important part of the Marrakech experience. You can try traditional tagine, couscous, fresh bread and sweet mint tea, or add a cooking workshop if your itinerary allows. For couples, a quiet courtyard restaurant can be a lovely evening choice. Families may prefer a guided visit in the morning followed by free time in a peaceful garden or riad.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Travelers who want to stay in one city for a complete week can add trips to the Ourika Valley, Imlil or Essaouira. This makes a nice alternative to the longer <Link href="/marrakech-desert-tours/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Marrakech desert tours</Link> and provides a good balance between sightseeing and rest.</p>
    </ArticleSection>
  );
}
