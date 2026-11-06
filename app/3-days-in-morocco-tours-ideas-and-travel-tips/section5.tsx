import PlaceHoverCard from "@/Compentents/placeCard";
import { ArticleSection, ArticlePicture, TravelNote } from "./ArticleElements";
import AtlasImage from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";

export default function Section5() {
  return (
    <ArticleSection id="three-days-in-morocco-what-to-see-and-where-to-go" label="Destinations &amp; Highlights" title="Three Days in Morocco: What to See and Where to Go">
      <p className="mt-5 text-lg leading-8 text-gray-700">Morocco is a large and varied country, so the best answer to <strong className="font-bold text-slate-900">what to see in Morocco in 3 days</strong> begins with your arrival location. A few nearby attractions that you can enjoy properly often leave better memories than a long list of places visited too quickly. Consider the places below and choose the ones that are practical for your route.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Marrakech: souks, gardens, history, and local food</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">The Red City is an exciting place for a first visit. A guided walk in the old medina can introduce you to Moroccan craftsmanship, architecture, and daily life. You can visit Jemaa el-Fnaa, Bahia Palace, local markets, and quiet courtyard cafés. Travelers who enjoy food can add a cooking class or a tasting experience. Staying two or three nights in the same riad also makes the trip simpler and gives you time to discover the city after sunset.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Fes: medina streets and historic crafts</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700"><PlaceHoverCard place="fes">Fes</PlaceHoverCard> is known for its historic medina and traditional crafts. A knowledgeable local guide can help you make sense of its winding lanes, leather tanneries, mosques viewed from permitted areas, and schools famous for their detailed decoration. Fes is a good destination when learning about Moroccan history and local culture matters more to you than visiting many different cities.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">The Sahara: golden dunes and a quiet night under the stars</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">For desert lovers, <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard> is the gateway to the high dunes of <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>. Here you can enjoy a dune walk, camel trekking if suitable, a 4×4 excursion, and a camp experience. If you are already near <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> or <PlaceHoverCard place="errachidia">Errachidia</PlaceHoverCard>, you can spend much more of your three days exploring the desert rather than traveling there from Marrakech.</p>
      <ArticlePicture src={AtlasImage} alt="Road through the High Atlas Mountains of Morocco" caption="The Atlas Mountains are a scenic choice for travelers who want views, village walks, and fresh mountain air." />
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Mountains and Atlantic coast: a calmer kind of short holiday</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">The <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard> are wonderful for easy hikes, mountain scenery, and village life when you arrange a suitable route and local guide. The coast gives a different feeling. <PlaceHoverCard place="essaouira">Essaouira</PlaceHoverCard> offers sea views, a fishing harbor, shops, and a relaxed medina. These destinations can work well as part of a three-day holiday based in Marrakech, especially if you prefer a quieter pace.</p>
      <TravelNote title="Think in regions, not just landmarks"><p>Choose two or three experiences in one geographic area. The distance between attractions matters much more on a three-day holiday than on a two-week itinerary.</p></TravelNote>
    </ArticleSection>
  );
}
