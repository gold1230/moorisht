import { ArticleSection, ArticlePicture, GuideTable } from "./ArticleElements";
import GroupImage from "@/public/blog/content/group-travelers-merzouga-sahara-desert-tour.jpg";

export default function Section9() {
  return (
    <ArticleSection id="3-days-in-morocco-for-couples-families-and-friends" label="Travel Your Way" title="3 Days in Morocco for Couples, Families, and Friends">
      <p className="mt-5 text-lg leading-8 text-gray-700">A short holiday in Morocco can feel very different depending on who is traveling with you. Couples may want a quiet riad, scenic sunsets, and private excursions. Families often need shorter transfer days, convenient accommodation, and activities that suit everyone’s age. Groups of friends might enjoy shared exploration, guided markets, photography stops, and outdoor experiences. Moorish Tour can help you choose an itinerary that suits the people in your group instead of offering the same plan to everyone.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">For couples: romantic moments without a busy schedule</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">A few days in Marrakech can combine garden visits, good food, and relaxed evenings in a traditional riad. If the Sahara is your priority, a private desert trip creates space for scenic stops and a camp experience. Keep in mind that romance and relaxation do not always mean choosing the longest route. For a short break, a beautiful hotel and one carefully selected day trip can be a lovely option.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">For families: comfort, flexibility, and realistic travel days</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">When traveling with children, consider age-appropriate activities, rest stops, access to bathrooms, and the length of each road journey. A gentle visit to a kasbah, a cooking experience, or a short guided nature walk may be better than many hours in the car. If a camel ride or sandboarding activity is planned, confirm safety guidance, suitability, and available alternatives with the provider. Families may prefer private transport so that the day can be adjusted when needed.</p>
      <h3 className="mt-10 text-2xl font-bold leading-tight text-[#102043] sm:text-3xl">For friends or small groups: shared memories</h3>
      <p className="mt-5 text-lg leading-8 text-gray-700">Friends can enjoy an organized small-group tour, a food walk, or a private 4×4 journey in the desert. Shared tours may cost less per traveler but typically follow fixed routes and meeting times. Private trips provide more freedom over stops and pace. Before choosing, compare what is included rather than looking only at the starting price.</p>
      <ArticlePicture src={GroupImage} alt="A small group of travelers enjoying a Morocco tour together" caption="A private or small-group journey can be adapted to different interests, travel styles, and ages." />
      <GuideTable headings={["Travelers", "Good short-trip choice", "Worth checking"]} rows={[["Couples", "Marrakech riad + guided visit or Sahara camp", "Privacy, room type, travel time"], ["Families", "City + nearby countryside or relaxed desert base", "Children’s needs, facilities, transfer length"], ["Friends", "Shared culture tour or private desert excursion", "Group size, transport, flexibility"], ["Solo travelers", "Guided city break or organized group tour", "Departure confirmation, meeting points"]]} />
    </ArticleSection>
  );
}
