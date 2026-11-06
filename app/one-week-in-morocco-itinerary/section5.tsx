import { ArticlePicture, ArticleSection, TravelNote } from "./ArticleElements";
import PlaceHoverCard from "@/Compentents/placeCard";
import AtlasImage from "@/public/blog/content/mountain-road-through-tizi-n-tichka-pass-in-the-high-atlas-mountains.jpg";

export default function Section5() {
  return (
    <ArticleSection id="atlas-mountains-retreat-nature-and-amazigh-villages" label="Mountain Experiences" title="Atlas Mountains Retreat: Nature and Amazigh Villages">
      <p className="mt-5 text-lg leading-8 text-gray-700">The Atlas Mountains provide a beautiful contrast to the busy streets of Marrakech. A guided mountain visit can take you into valleys with terraced farms, walnut trees, rivers and traditional Amazigh villages. Even a single day in the mountains adds a different side of Moroccan life to your trip and shows why the countryside is just as interesting as the famous cities.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">For a short mountain experience, the area around <PlaceHoverCard place="imlil">Imlil</PlaceHoverCard> is popular for gentle walks and village visits. The Ourika Valley is another possibility for travelers who prefer a scenic drive with optional short walks and time for a local meal. More difficult mountain trekking should be planned with an experienced mountain guide and suitable equipment.</p>
      <h3 id="atlas-mountains-retreat-nature-and-amazigh-villages-a-day-in-the-mountains-what-you-might-experience" className="mt-10 scroll-mt-28 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">A Day in the Mountains: What You Might Experience</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">A typical day can begin with pickup from Marrakech, followed by a drive into the countryside and a stop for mountain views. You may walk with a local guide, visit an Amazigh village when a suitable experience has been arranged and enjoy lunch in a local restaurant or home. Your actual route should match your group’s fitness, weather conditions and the time of year.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Respecting village life is important. Ask before entering private homes or photographing residents, and remember that these are working communities rather than open-air museums. A local guide can introduce you to traditions and explain agriculture, local languages and the changes that mountain families experience across different seasons.</p>
      <ArticlePicture src={AtlasImage} alt="Scenic mountain road crossing the High Atlas during a Morocco tour" caption="Mountain roads and traditional villages create a scenic change from Morocco\u2019s larger cities." />
      <TravelNote title="Mountain travel advice"><p>Higher elevations can be cold even when Marrakech is warm. Bring an extra layer, comfortable walking shoes and water. In winter, snow or road conditions may require changes to the route.</p></TravelNote>
    </ArticleSection>
  );
}
