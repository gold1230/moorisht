import { ArticleSection, ArticlePicture } from "./ArticleElements";




import DunesImage from "@/public/blog/content/camel-riders-crossing-erg-chebbi-dunes-merzouga-morocco.jpg";

export default function Section5() {
 return (
  <ArticleSection id="3-luxury-oasis-camp-traditional-hospitality-and-several-tent-categories" label="Luxury camp number three" title="3. Luxury Oasis Camp: Traditional Hospitality and Several Tent Categories">
  <p className="mt-5 text-lg leading-8 text-gray-700">Luxury Oasis Camp is a beautiful choice to compare if you want traditional Moroccan details and more than one level of accommodation. Its official website describes a horseshoe arrangement of tents with space between units, a central gathering area and a restaurant serving Moroccan food. The property lists deluxe, superior and suite tent categories, which makes it especially important to check what is included in the exact category you choose.</p>
  <ArticlePicture src={DunesImage} alt="Sahara dunes and luxury camping around Merzouga, Morocco" caption="The changing light of Erg Chebbi is one of the main reasons travelers choose an overnight luxury desert camp." />
  <p className="mt-5 text-lg leading-8 text-gray-700">The decoration draws on Amazigh and Moroccan crafts, with warm textiles, wood details and a welcoming atmosphere. A night here can combine quiet time near your tent with shared moments around the evening fire. If you enjoy cultural experiences, the wider Merzouga area also offers visits to the village of Khamlia, traditional music, small communities and guided trips over desert tracks. These experiences are generally optional activities rather than something to assume is included with every accommodation reservation.</p>
  <p className="mt-5 text-lg leading-8 text-gray-700">One practical point matters at Luxury Oasis Camp: the official property information says that climate control is included in superior and suite categories, while deluxe tents are offered without heating or air-conditioning. This is a good example of why asking for the specific tent type is more useful than simply asking whether the camp is luxurious. If you travel in July or August, or during cold winter nights, confirm the temperature-control features before paying.</p>
  <h3 id="3-luxury-oasis-camp-traditional-hospitality-and-several-tent-categories-best-for-families-and-mixed-groups" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Best for families and mixed groups</h3>
  <p className="mt-5 text-lg leading-8 text-gray-700">The different tent categories may help families or friends choose an accommodation level that fits their needs. Always confirm how many beds are available, whether rooms can be placed near each other and whether the route to the camp is suitable for young children or travelers with limited mobility.</p>
  <div className="mt-7 flex flex-wrap gap-3">
    <a href="https://www.luxuryoasiscampmerzouga.com/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#102043] transition hover:bg-slate-50">Luxury Oasis Camp official website ↗</a>
  </div>
</ArticleSection>
 );
}
