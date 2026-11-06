import { ArticleSection, GuideTable, TravelNote } from "./ArticleElements";

export default function Section12() {
  return (
    <ArticleSection id="best-time-to-spend-one-week-in-morocco" label="Weather and Seasons" title="Best Time to Spend One Week in Morocco">
      <p className="mt-5 text-lg leading-8 text-gray-700">Morocco can be visited throughout the year, but the right season depends on which landscapes you want to explore. The coast, mountains and Sahara have very different climates. When planning <strong className="font-bold text-slate-900">one week in Morocco</strong>, check the weather for each part of your route rather than assuming that the whole country will feel the same.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Spring, roughly March to May, is a beautiful time for city walks, mountain scenery and Sahara visits. Many valleys are green and the desert is usually more comfortable than in summer. Autumn, from around September to November, is another popular period, especially for outdoor activities and desert camping.</p>
      <p className="mt-5 text-lg leading-8 text-gray-700">Summer can be very hot around Marrakech and the southeast, while the Atlantic coast is often cooler and windier. In winter, medina sightseeing may feel pleasant during the day, but nights in the mountains and Sahara can be cold. Some high mountain routes can also be affected by snow. Your guide can help adapt the order of visits when conditions change.</p>
      <GuideTable headings={["Season", "What to expect", "Good travel ideas"]} rows={[["Spring (Mar–May)", "Often pleasant days; green lower mountain valleys", "Marrakech, Atlas, Sahara"], ["Summer (Jun–Aug)", "Very hot inland and desert; cooler coastal conditions", "Essaouira, relaxed cities, early activities"], ["Autumn (Sep–Nov)", "Generally comfortable weather for many routes", "Desert camps, valleys, cultural touring"], ["Winter (Dec–Feb)", "Cooler cities, cold nights, possible mountain snow", "City visits, quiet desert days with warm clothes"]]} />
      <p className="mt-5 text-lg leading-8 text-gray-700">For a classic week combining Marrakech, the Atlas and Merzouga, spring and autumn are often the most comfortable starting points. Weather still changes from year to year, so check forecasts close to departure and pack clothing that works for cool nights as well as sunny afternoons.</p>
      <TravelNote title="Seasonal advice from Morocco tourism"><p>Morocco’s national tourism office also recommends spring and autumn for Sahara travel because the desert is more comfortable than during the strongest summer heat.</p></TravelNote>
    </ArticleSection>
  );
}
