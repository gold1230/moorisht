import Image from "next/image";
import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

/** Adventure Guided Tours in Morocco — server-rendered article content. */
export default function Section5() {
  return (
    <section className="space-y-10">
      <div className="space-y-5">
        <h2 id="adventure-guided-tours-in-morocco" className="scroll-mt-28 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Adventure Guided Tours in Morocco</h2>
        <figure className="my-8">
          <Image
            src={MarrakechToFes4DayHero}
            alt="Scenic Morocco landscape for exploring guided trips, cities and mountain adventures"
            width={1200}
            height={400}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            className="h-[280px] w-full rounded-2xl object-cover shadow-sm sm:h-[400px]"
          />
          <figcaption className="mt-3 text-center text-sm text-slate-500">Guided travel in Morocco brings together history, nature and local experiences.</figcaption>
        </figure>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p><strong className="font-bold text-slate-900">Adventure guided tours in Morocco are perfect for travelers who want more than just sightseeing.</strong> Morocco is not only about cities and monuments, it is also about wild landscapes, high mountains, golden deserts, deep valleys, and real local life. With professional tour guides in Morocco, your adventure becomes safe, organized, and full of authentic moments. Our guided experiences combine excitement, culture, and nature in one unforgettable journey.</p>
          <p>From the <PlaceHoverCard place="high-atlas-mountains">High Atlas Mountains</PlaceHoverCard> to the Sahara Desert, Morocco offers different types of adventure tours for all levels. Whether you are a beginner hiker, an experienced trekker, or someone who loves 4×4 desert exploration, there is always something special waiting for you. Experienced local guides can suggest trails and viewpoints appropriate to the group and the conditions.</p>
          <p>Adventure travel in Morocco also means meeting local Berber families, tasting traditional food in remote villages, and learning about real Moroccan culture. With Moroccan Guides Travel, you enjoy small group experiences or private guided tours designed for couples, families, or friends. Safety, comfort, and authentic experiences are always our priority.</p>
          <p>If you are searching for the best adventure guided tours in Morocco, our team is ready to create a customized itinerary that matches your travel style. From mountain trekking to desert 4×4 tours, Morocco is an adventure destination you will never forget.</p>
        </div>
        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-[15px] leading-7">
              <thead className="bg-slate-50"><tr><th scope="col" className="border-b border-slate-200 px-5 py-4 font-bold text-slate-900">Adventure</th><th scope="col" className="border-b border-slate-200 px-5 py-4 font-bold text-slate-900">Typical area</th><th scope="col" className="border-b border-slate-200 px-5 py-4 font-bold text-slate-900">Preparation to discuss with your guide</th></tr></thead>
              <tbody className="divide-y divide-slate-200"><tr><th scope="row" className="px-5 py-4 font-bold text-slate-900">Easy valley walk</th><td className="px-5 py-4 text-slate-700">Imlil or Ourika</td><td className="px-5 py-4 text-slate-700">Shoes, weather and walking time</td></tr>
              <tr><th scope="row" className="px-5 py-4 font-bold text-slate-900">Toubkal trek</th><td className="px-5 py-4 text-slate-700">High Atlas</td><td className="px-5 py-4 text-slate-700">Fitness, altitude and seasonal gear</td></tr>
              <tr><th scope="row" className="px-5 py-4 font-bold text-slate-900">Sahara 4×4</th><td className="px-5 py-4 text-slate-700">Merzouga and surrounding desert</td><td className="px-5 py-4 text-slate-700">Vehicle, route and dune conditions</td></tr>
              <tr><th scope="row" className="px-5 py-4 font-bold text-slate-900">Camel trek</th><td className="px-5 py-4 text-slate-700">Erg Chebbi</td><td className="px-5 py-4 text-slate-700">Riding comfort and alternative transfer</td></tr></tbody>
            </table>
          </div>
        </div>
        <p className="text-[16px] leading-8 text-slate-700">Continue exploring: <Link href="/erfoud-sahara-tours-4x4-desert-vehicles/" className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Discover Sahara 4×4 tours</Link>.</p>
      </div>
      <div className="space-y-5">
        <h3 id="hiking-guided-tours-in-atlas-mountains" className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Hiking Guided Tours in Atlas Mountains</h3>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>The Atlas Mountains are one of the best destinations for hiking guided tours in Morocco. Located just one hour from <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard>, this mountain range offers breathtaking landscapes, traditional Berber villages, green valleys, and fresh mountain air. Hiking in the Atlas Mountains with experienced tour guides in Morocco allows you to explore safely while learning about local culture and history.</p>
          <p>Our guided tours in Morocco include different hiking levels. Some trails are easy and perfect for families or beginners, while others are more challenging for experienced trekkers. Along the way, you will see terraced farms, walnut trees, waterfalls, and friendly local people welcoming you with mint tea.</p>
          <p>Hiking in the Atlas Mountains is not only about walking. It is about connection. You connect with nature, with local communities, and with yourself. Our local mountain guides are from the region, which means they know every path, every village, and every story of the mountains.</p>
          <p>For travelers looking for adventure guided tours in Morocco, the Atlas Mountains are a must. Clean air, peaceful landscapes, and real cultural experiences make this region one of the top highlights of any Morocco guided tour.</p>
        </div>
      </div>
      <div className="space-y-5">
        <h3 id="toubkal-trek-with-experienced-mountain-guides" className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Toubkal Trek with Experienced Mountain Guides</h3>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>Mount Toubkal is the highest peak in North Africa and one of the most popular trekking destinations in Morocco. The Toubkal trek with experienced mountain guides is perfect for adventure lovers who want to challenge themselves while enjoying amazing views. At 4,167 meters high, Mount Toubkal offers a rewarding experience for hikers from around the world.</p>
          <p>For Mount Toubkal, arrange a qualified mountain guide, check current access rules and conditions, and prepare appropriate equipment. The journey usually starts from <PlaceHoverCard place="imlil">Imlil</PlaceHoverCard> village and continues through beautiful valleys and rocky landscapes. Along the way, you stay in mountain refuges and enjoy traditional Moroccan meals prepared by local cooks.</p>
          <p>A Toubkal summit trek requires strong fitness and careful planning. Snow, ice, altitude and seasonal weather can make the route technical, and specialist equipment or skills may be necessary. A mountain guide can help set a realistic pace and advise when conditions or group fitness call for a change of plan. Reaching the summit at sunrise is an unforgettable moment, with panoramic views over the Atlas Mountains and beyond.</p>
          <p>For travelers searching for serious adventure guided tours in Morocco, the Toubkal trek is a top choice. It combines physical challenge, natural beauty, and authentic mountain culture.</p>
        </div>
        <div className="mt-7 rounded-2xl border border-amber-200 bg-[#fffaf3] p-5 sm:p-6">
          <p className="font-bold text-slate-900">Important for Mount Toubkal</p>
          <p className="mt-2 text-[16px] leading-7 text-slate-700">Conditions can change rapidly at high altitude. Summit trips need an appropriate mountain guide, suitable clothing and equipment, and a decision based on the current season and forecast. Snow or ice can make the route technical.</p>
        </div>
      </div>
      <div className="space-y-5">
        <h3 id="day-hikes-from-marrakech" className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Day Hikes from Marrakech</h3>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>If you are staying in <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> and want a short adventure, day hikes from <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> are the perfect option. Just a short drive from the city, you can reach the Atlas Mountains and enjoy fresh air, green valleys, and peaceful landscapes. These guided tours in Morocco are ideal for travelers with limited time.</p>
          <p>Day hikes can be selected for different abilities; the right route depends on fitness, age, weather and walking experience. You can explore the <PlaceHoverCard place="ourika-valley">Ourika Valley</PlaceHoverCard>, <PlaceHoverCard place="imlil">Imlil</PlaceHoverCard> area, or small Berber villages hidden in the mountains. During the hike, you will meet local families, visit traditional houses, and learn about mountain life.</p>
          <p>Day hiking tours include hotel pick-up, transport, local guide, and sometimes lunch in a Berber home. It is a simple but rich experience that shows you another side of Morocco, far from the busy city streets.</p>
          <p>For those looking for easy adventure guided tours in Morocco, day hikes from <PlaceHoverCard place="marrakech">Marrakech</PlaceHoverCard> offer nature, culture, and relaxation in one day.</p>
        </div>
      </div>
      <div className="space-y-5">
        <h3 id="4x4-desert-adventures-with-local-drivers-and-guides" className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">4×4 Desert Adventures with Local Drivers &amp; Guides</h3>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>A 4×4 desert adventure is one of the most exciting guided tours in Morocco. The Sahara Desert is a magical place with endless dunes, rocky landscapes, and beautiful sunsets. Exploring it with experienced local drivers and tour guides in Morocco ensures both safety and authentic experience.</p>
          <p>Our 4×4 desert tours allow you to reach remote areas that normal cars cannot access. You drive across sand dunes, dry lakes, fossil fields, and old caravan routes. Along the way, you discover small desert villages and meet local nomads.</p>
          <p>Adventure guided tours in Morocco are not only about speed and excitement. They are about discovering the history of the desert, learning about traditional desert life, and enjoying peaceful moments under the stars. At night, you can stay in a desert camp and enjoy local music around the fire.</p>
          <p>For travelers who want a mix of adventure and culture, 4×4 desert adventures in Morocco are unforgettable.</p>
        </div>
      </div>
      <div className="space-y-5">
        <h3 id="off-road-exploration-in-sahara" className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Off-Road Exploration in Sahara</h3>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>Off-road exploration in the Sahara is a real adventure experience. With powerful 4×4 vehicles and professional desert guides, you travel beyond the main tourist routes. This is one of the most popular adventure guided tours in Morocco for thrill seekers.</p>
          <p>You will explore the famous dunes of <PlaceHoverCard place="merzouga">Merzouga</PlaceHoverCard>, rocky desert areas, and hidden oases. Local drivers and guides choose routes based on terrain, weather, vehicle suitability and the group’s needs. You can stop for photos, sandboarding, or simply enjoy the silence of the desert.</p>
          <p>Driving off-road in the Sahara gives you freedom and excitement while discovering the natural beauty of Morocco. It is perfect for couples, families, or small groups looking for something different.</p>
          <p>If you are searching for unique guided tours in Morocco, Sahara off-road adventure should be on your list.</p>
        </div>
      </div>
      <div className="space-y-5">
        <h3 id="nomad-family-visits" className="scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Nomad Family Visits</h3>
        <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
          <p>One of the most special parts of desert adventure guided tours in Morocco is visiting a nomad family. This experience allows you to see real desert life and understand how people live in the Sahara.</p>
          <p>With our local tour guides in Morocco, you visit nomad tents made from traditional materials. You share mint tea, talk about daily life, and learn about their culture and traditions. It is a simple but very meaningful experience.</p>
          <p>Nomad family visits are included in many guided tours in Morocco because they offer authentic human connection. Travelers often say this is the highlight of their desert trip.</p>
          <p>If you want your adventure guided tour in Morocco to be more than just landscapes, meeting nomads will give you unforgettable memories and a deeper understanding of Moroccan culture.</p>
        </div>
      </div>
    </section>
  );
}
