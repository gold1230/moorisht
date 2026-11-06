import PlaceHoverCard from "@/Compentents/placeCard";
import { ArticleSection, ArticlePicture, TravelNote } from "./ArticleElements";
import CampImage from "@/public/blog/content/sahara-desert-camp-experience-near-erg-chebbi-dunes-merzouga.jpg";

export default function Section8() {
  return (
    <ArticleSection id="3-days-morocco-desert-tour-to-merzouga-sahara" label="Sahara Desert Highlights" title="3 Days Morocco Desert Tour to Merzouga Sahara">
      <p className="mt-5 text-lg leading-8 text-gray-700">The <strong className="font-bold text-slate-900">3 days Morocco desert tour to Merzouga</strong> is one of the most memorable ways to experience southern Morocco. The trip takes you away from the busy city atmosphere and brings you toward landscapes of high mountains, palm groves, rocky plateaus, and finally the golden dunes of Erg Chebbi. Travelers especially enjoy the contrast between the road journey and the peaceful feeling that comes when the desert first appears on the horizon.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Camel trekking, dunes, and sunset</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">At the edge of <PlaceHoverCard place="erg-chebbi">Erg Chebbi</PlaceHoverCard>, you can enjoy a guided camel ride if that activity is suitable for you and included in your booking. Some travelers prefer to reach the camp by 4×4 instead, which may be more comfortable for children or anyone who does not want to ride a camel. At sunset, the sand often changes color as the light moves over the dune slopes. This is a wonderful time for photographs, but the simple experience of sitting quietly and enjoying the view can be just as special.</p>
      <ArticlePicture src={CampImage} alt="Comfortable Sahara camp tents near Erg Chebbi Merzouga" caption="An overnight Sahara stay can include dinner, camp accommodation, and an early morning dune walk, depending on the package." />
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">Sleeping in a desert camp</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">Many tours include a night in a desert camp with a Moroccan dinner and breakfast. Accommodation choices vary. Some camps provide simple traditional tents, while others offer larger tents with private bathrooms and additional comforts. Before booking, ask about the exact camp location, toilet facilities, bedding, heating or cooling arrangements, and transport between the dunes and the meeting point. These details can make a big difference in winter or during very hot weather.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">More to discover around Merzouga</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">If your itinerary has enough time, add a local 4×4 excursion around the dunes, a visit to <PlaceHoverCard place="khamlia">Khamlia</PlaceHoverCard> to learn about Gnawa music, or a cultural stop around <PlaceHoverCard place="erfoud">Erfoud</PlaceHoverCard> where fossil workshops are an important part of the region. Visits with local communities should be respectful and arranged with their agreement. Travelers interested in a quieter desert experience can consider spending an additional night instead of rushing back immediately.</p>
      <TravelNote title="Know the driving commitment"><p>For a round-trip Marrakech-to-Merzouga itinerary, day three is largely a return travel day. A three-day tour is possible, but if you prefer shorter daily drives, ask Moorish Tour about four-day or longer desert routes.</p></TravelNote>
    </ArticleSection>
  );
}
