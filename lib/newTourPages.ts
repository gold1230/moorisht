import type { Metadata } from "next";
import { absoluteSiteUrl } from "@/lib/absoluteSiteUrl";
import type { PlaceName } from "@/Compentents/placeCard";

export type NewTourConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  duration: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  start: string;
  end: string;
  badge: string;
  kind: string;
  route: string;
  priceText: string;
  suggestedPriceEUR?: number;
  keywords: string[];
  intro: string[];
  dayTitles: string[];
  days: string[];
  dayDetails: string[][];
  highlights: string[];
  places: PlaceName[];
  stops: [string, number, number, number][];
  faqs: [string, string][];
};

export function newTourMetadata(tour: NewTourConfig): Metadata {
  const url = absoluteSiteUrl(`/tour/${tour.slug}/`);
  const image = absoluteSiteUrl(tour.image);
  return {
    title: { absolute: tour.metaTitle },
    description: tour.description,
    keywords: tour.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: tour.metaTitle, description: tour.description,
      type: "website", url, siteName: "Moorish Tour",
      images: [{ url: image, alt: tour.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: tour.metaTitle, description: tour.description, images: [image] },
    robots: { index: true, follow: true },
  };
}

export const newTours: Record<string, NewTourConfig> = {
  "3-days-desert-tour-from-marrakech-to-fes": {
  "slug": "3-days-desert-tour-from-marrakech-to-fes",
  "title": "3 Days Desert Tour from Marrakech to Fes via Merzouga",
  "metaTitle": "3 Days Marrakech to Fes Desert Tour via Merzouga | Moorish Tour",
  "description": "Cross Morocco on a 3-day Marrakech to Fes desert tour via Ait Ben Haddou, Dades, Todra Gorge and Merzouga, with an Erg Chebbi camp night.",
  "kicker": "Marrakech to Fes · Sahara crossing",
  "duration": "3 Days / 2 Nights",
  "image": "/tours/related/4-days-tour-from-marrakech-to-fes.jpg",
  "imageAlt": "Marrakech to Fes desert tour through the Moroccan Sahara and Atlas Mountains",
  "subtitle": "A one-way journey across the High Atlas, old kasbahs and the golden Erg Chebbi dunes before arriving in historic Fes.",
  "start": "Marrakech",
  "end": "Fes",
  "badge": "Classic Sahara crossing",
  "kind": "Classic guided desert crossing",
  "route": "Marrakech → Ait Ben Haddou → Dades Valley → Todra Gorge → Merzouga → Ziz Valley → Fes",
  "priceText": "Ask for the current rate for your dates, number of travelers and camp category. We can explain private and shared-trip options where available.",
  "keywords": [
    "3 days desert tour from Marrakech to Fes",
    "3 day Marrakech to Fes desert tour",
    "Marrakech to Fes via Merzouga",
    "Marrakech Merzouga Fes Sahara tour",
    "3 day Sahara trip Morocco",
    "camel ride Merzouga from Marrakech",
    "Ait Ben Haddou Todra Gorge desert tour"
  ],
  "intro": [
    "The 3 days desert tour from Marrakech to Fes is a practical way to connect two of Morocco’s most famous cities without missing the Sahara. Instead of taking the main road directly to Fes, you turn the journey into an adventure through the High Atlas Mountains, the historic earthen village of Ait Ben Haddou, the valleys of southern Morocco and the beautiful dunes of Erg Chebbi near Merzouga.",
    "The journey is planned as a one-way route, so you do not need to travel back to Marrakech after visiting the desert. On the first day, discover mountain passes, kasbah views and the Dades Valley. Day two follows the Todra Gorge and oasis towns toward Merzouga, where the Sahara becomes the highlight of the trip. On day three, leave the dunes for Ziz Valley, the Middle Atlas and Fes.",
    "This Morocco desert itinerary includes long road journeys, especially the final day to Fes. We recommend it for travelers who have three days available, are comfortable spending time in a vehicle and want a real overnight desert experience rather than a short stop at a rocky desert near Marrakech. For a slower trip, you may prefer our four-day Marrakech to Fes option."
  ],
  "dayTitles": [
    "Marrakech – High Atlas – Ait Ben Haddou – Ouarzazate – Dades Valley",
    "Dades Valley – Todra Gorge – Erfoud – Merzouga Desert Camp",
    "Merzouga Sunrise – Ziz Valley – Midelt – Ifrane – Fes"
  ],
  "days": [
    "Your journey begins with morning collection from your hotel, riad or agreed meeting point in Marrakech. Head toward the High Atlas Mountains and follow the twisting road over the Tizi n’Tichka route, where small Amazigh villages and wide mountain valleys offer beautiful stops for photographs. The scenery changes as you cross the pass and reach the southern side of the mountains. Continue to Ait Ben Haddou, a UNESCO-listed fortified settlement built from earth and clay. You can walk through the village streets, learn about the region’s traditional architecture and enjoy the view over the surrounding valley. After a break for lunch, pass Ouarzazate, often called the gateway to the desert, and travel through the Skoura area and the Valley of Roses. By late afternoon you arrive in the Dades Valley. The striking rock formations, small farms and villages are a peaceful introduction to southern Morocco. Check in to your guesthouse or hotel for the first overnight stay. Exact stops depend on your travel pace and road conditions.",
    "After breakfast, enjoy the scenery along Dades Valley before heading east toward Tinghir and Todra Gorge. The high rock walls at Todra make this a memorable place to stop, walk and take photographs. Continue through the southern oasis landscape, crossing villages known for palm groves, local markets and traditional mud-brick houses. Near Erfoud you pass an area famous for fossils and date palms, then drive onward toward the dunes around Merzouga. When the Erg Chebbi sand dunes appear on the horizon, the landscape changes completely. The afternoon is usually the best time for your camel ride into the Sahara, with a chance to watch the warm sunset colors over the dunes. Guests who do not want to ride a camel can request a 4x4 transfer when arranging the tour. Settle into your desert camp, enjoy dinner and spend the evening in the quiet atmosphere of the Sahara. The type of tent and other camp facilities depend on the package you confirm.",
    "Wake up early if you would like to see sunrise over the Erg Chebbi dunes. After breakfast, leave the desert camp and begin the longest road section of this three-day Marrakech to Fes tour. The route follows the impressive Ziz Valley, where green palm groves stand out against rocky mountains and dry plateaus. Travel past Erfoud and toward Midelt, a town between the High and Middle Atlas regions that is a convenient place to stop for lunch. Continue north through cooler landscapes, cedar forests around Azrou and the Ifrane area, where the architecture and climate feel very different from the desert. Depending on weather and timing, you can make short photo stops or stretch your legs along the way. Arrive in Fes in the evening and end the tour at your agreed hotel or riad drop-off location. We do not recommend arranging an early evening train or flight on this final day, as drive times vary with traffic, breaks and mountain weather."
  ],
  "dayDetails": [
    [
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Dades Valley overnight"
    ],
    [
      "Todra Gorge",
      "Erfoud",
      "Erg Chebbi camel trek",
      "Sahara camp overnight"
    ],
    [
      "Ziz Valley",
      "Midelt",
      "Middle Atlas",
      "Evening arrival in Fes"
    ]
  ],
  "highlights": [
    "Travel from Marrakech to Fes via the Sahara without backtracking to Marrakech",
    "See traditional villages while crossing the High Atlas Mountains",
    "Explore the UNESCO-listed ksar of Ait Ben Haddou",
    "Discover Dades Valley landscapes and the high cliffs of Todra Gorge",
    "Spend an evening near the golden dunes of Erg Chebbi",
    "Choose a camel trek or request a 4x4 transfer to the camp",
    "Discover Ziz Valley palm groves on the road to Fes",
    "Experience three different sides of Morocco in one short itinerary"
  ],
  "places": [
    "marrakech",
    "high-atlas-mountains",
    "ait-ben-haddou",
    "ouarzazate",
    "dades-valley",
    "todra-gorge",
    "erfoud",
    "merzouga",
    "erg-chebbi",
    "ziz-valley",
    "midelt",
    "ifrane",
    "fes"
  ],
  "stops": [
    [
      "Marrakech",
      31.6295,
      -7.9811,
      1
    ],
    [
      "Ait Ben Haddou",
      31.047,
      -7.129,
      1
    ],
    [
      "Dades Valley",
      31.45,
      -5.95,
      1
    ],
    [
      "Todra Gorge",
      31.589,
      -5.593,
      2
    ],
    [
      "Merzouga",
      31.099,
      -4.012,
      2
    ],
    [
      "Ziz Valley",
      31.85,
      -4.38,
      3
    ],
    [
      "Midelt",
      32.686,
      -4.745,
      3
    ],
    [
      "Fes",
      34.064,
      -4.974,
      3
    ]
  ],
  "faqs": [
    [
      "Does the 3-day Marrakech to Fes desert tour return to Marrakech?",
      "No. This is a one-way trip beginning in Marrakech and ending in Fes, with a night near Dades and a Sahara camp night near Merzouga."
    ],
    [
      "Is the Merzouga camp included in the trip?",
      "The proposed itinerary includes one night near the Erg Chebbi dunes. The exact camp standard, meals and activities are confirmed in your booking quote."
    ],
    [
      "Is the third day a long drive?",
      "Yes. Merzouga to Fes is a long road journey with stops through Ziz Valley and the Middle Atlas. Avoid early evening onward connections."
    ],
    [
      "Can we travel without taking a camel ride?",
      "Yes. Ask in advance for a 4x4 transfer to your desert camp instead of a camel ride."
    ],
    [
      "Where do we sleep on the first night?",
      "The usual first overnight is in the Dades Valley area, in a guesthouse or hotel chosen according to your confirmed travel package."
    ],
    [
      "Can we arrange this as a private Marrakech to Fes tour?",
      "Yes. Ask for a customized quote that matches your dates, group size, accommodation preferences and pickup and drop-off locations."
    ]
  ]
},
  "3-days-tour-from-marrakech-to-fes": {
  "slug": "3-days-tour-from-marrakech-to-fes",
  "title": "3 Days Tour from Marrakech to Fes – Private Desert Journey",
  "metaTitle": "3 Days Tour from Marrakech to Fes | Private Sahara Trip",
  "description": "Plan a private 3 days tour from Marrakech to Fes via Merzouga, with flexible stops in the High Atlas, Ait Ben Haddou, Todra Gorge and Sahara.",
  "kicker": "Private Morocco road trip · Marrakech to Fes",
  "duration": "3 Days / 2 Nights",
  "image": "/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg",
  "imageAlt": "Golden Merzouga sand dunes on a private Marrakech to Fes journey",
  "subtitle": "A flexible one-way private road trip from the Red City to Fes, including Berber villages, southern valleys and a Sahara camp.",
  "start": "Marrakech",
  "end": "Fes",
  "badge": "Private itinerary",
  "kind": "Private customized tour",
  "route": "Marrakech → High Atlas → Ouarzazate → Dades → Todra → Merzouga → Middle Atlas → Fes",
  "priceText": "Request a private quote based on your group size, travel dates, hotel preferences and whether you would like standard or higher-comfort desert accommodation.",
  "keywords": [
    "3 days tour from Marrakech to Fes",
    "3 days Marrakech to Fes private tour",
    "Marrakech to Fes itinerary 3 days",
    "private Marrakech to Fes via Merzouga",
    "3 day private Morocco desert road trip",
    "3 days Marrakech to Fes Sahara tour",
    "Marrakech to Fes sightseeing transfer via desert"
  ],
  "intro": [
    "Our 3 days tour from Marrakech to Fes is planned for travelers who want the freedom of a private driver and an itinerary that connects Morocco’s two famous imperial cities through the Sahara Desert. With a private tour, you can spend more time taking photos, enjoying tea in a village or discovering a favorite viewpoint instead of following a fixed group schedule. The route is still a real three-day road trip, so choosing stops carefully makes every day more enjoyable.",
    "The journey crosses the High Atlas Mountains before heading into the south. Explore the area around Ait Ben Haddou and Ouarzazate, then pass the kasbah valleys toward Dades. The next day takes you along Todra Gorge, traditional oasis towns and Erfoud before arriving at the Erg Chebbi dunes near Merzouga. A sunset desert experience and a night in a camp are the unforgettable highlights of the journey.",
    "On the last day, travel north from Merzouga through Ziz Valley and Midelt to the greener Middle Atlas and Fes. You can discuss accommodation standards, family travel needs, photography stops and whether you prefer a camel or 4x4 camp transfer before confirming your private itinerary. This page presents a suggested route; Moorish Tour can adjust details to fit your group, while keeping realistic driving times."
  ],
  "dayTitles": [
    "Private Pickup in Marrakech – Atlas Mountains – Ait Ben Haddou – Dades",
    "Dades – Todra Gorge – Merzouga: Desert Sunset and Camp",
    "Merzouga – Ziz Oasis – Cedar Forests – Ifrane – Fes"
  ],
  "days": [
    "Meet your driver at your hotel, riad or a convenient meeting point in Marrakech. Travel into the High Atlas Mountains and enjoy the gradual change from busy city streets to mountain villages, winding roads and far-reaching viewpoints. The Tizi n’Tichka route makes it easy to stop for pictures whenever the road and weather allow. Continue toward Ait Ben Haddou, a historic earthen settlement surrounded by dramatic southern scenery. This is a good place for a relaxed walk and photographs of the old ksar. Afterward, travel through the Ouarzazate area. Your private itinerary can allow a stop at a viewpoint or extra time for lunch rather than rushing to the next destination. The road continues through palm groves and kasbah landscapes around Skoura and the Valley of Roses. By late afternoon reach the Dades Valley, known for its colorful rock formations and traditional villages. Stay overnight in a hotel or guesthouse arranged for your chosen travel package. A private journey allows flexibility, but please remember that the day includes several hours of mountain driving.",
    "Breakfast in the Dades Valley is followed by a beautiful drive toward Todra Gorge. Stop to see the huge rocky cliffs and enjoy a gentle walk along the gorge if you wish. As you continue east, small villages, date palms and the dry southern plateau offer an interesting contrast with the Atlas Mountains. Passing through the Erfoud region, you can learn about the area’s fossils and oasis culture if there is enough time. The final approach to Merzouga is a highlight for many visitors: suddenly the golden dunes of Erg Chebbi rise beside the desert villages. Your private driver will coordinate the agreed camp experience. A camel trek at sunset is a classic choice, while a 4x4 transfer may suit guests who prefer not to ride. Enjoy the colors of the Sahara, settle into your desert camp and have an evening away from the city. Ask about your preferred camp comfort level before confirming the booking, especially if you travel with children or have mobility needs.",
    "For a memorable start to the final day, wake up before breakfast and watch sunrise over the dunes if the weather allows. After checking out of camp, start the drive north through the Ziz Valley with its date palms, villages and attractive viewpoints. The road rises toward the Midelt area, where you can break for lunch. Continuing into the Middle Atlas, you may notice cooler air, greener countryside and cedar forests around Azrou. Your private driver can help choose sensible breaks depending on your departure time and the day’s conditions. Drive through Ifrane and continue to Fes, one of Morocco’s best-known historic cities. The trip finishes with a drop-off at your agreed accommodation in Fes, generally in the evening. This is the longest driving day; travelers with young children or those wanting more sightseeing time should consider a four-day journey instead."
  ],
  "dayDetails": [
    [
      "Private Marrakech pickup",
      "High Atlas viewpoint stops",
      "Ait Ben Haddou",
      "Dades guesthouse"
    ],
    [
      "Todra Gorge walk",
      "Oasis landscapes",
      "Merzouga sunset",
      "Desert camp"
    ],
    [
      "Ziz Valley",
      "Midelt break",
      "Cedar forest landscapes",
      "Fes drop-off"
    ]
  ],
  "highlights": [
    "Choose a private itinerary with a dedicated driver and flexible sightseeing stops",
    "Cross the High Atlas Mountains between Marrakech and southern Morocco",
    "Visit Ait Ben Haddou and the Ouarzazate kasbah region",
    "Discover the Dades Valley and dramatic walls of Todra Gorge",
    "Experience the dunes around Merzouga and Erg Chebbi",
    "Discuss a camel trek or 4x4 camp transfer to suit your group",
    "Enjoy the scenery around Ziz Valley and the Middle Atlas",
    "Finish directly in Fes without returning to Marrakech"
  ],
  "places": [
    "marrakech",
    "high-atlas-mountains",
    "ait-ben-haddou",
    "ouarzazate",
    "dades-valley",
    "todra-gorge",
    "merzouga",
    "erg-chebbi",
    "ziz-valley",
    "midelt",
    "ifrane",
    "fes"
  ],
  "stops": [
    [
      "Marrakech",
      31.6295,
      -7.9811,
      1
    ],
    [
      "Ait Ben Haddou",
      31.047,
      -7.129,
      1
    ],
    [
      "Dades Valley",
      31.45,
      -5.95,
      1
    ],
    [
      "Todra Gorge",
      31.589,
      -5.593,
      2
    ],
    [
      "Merzouga",
      31.099,
      -4.012,
      2
    ],
    [
      "Ziz Valley",
      31.85,
      -4.38,
      3
    ],
    [
      "Ifrane",
      33.53,
      -5.11,
      3
    ],
    [
      "Fes",
      34.064,
      -4.974,
      3
    ]
  ],
  "faqs": [
    [
      "Is this a private Marrakech to Fes tour?",
      "This page describes a proposed private tour. Contact us with your travel dates and group size for a tailored quote and a written list of included services."
    ],
    [
      "Can we customize the three-day itinerary?",
      "Yes, reasonable sightseeing and accommodation changes can be discussed before booking. Please allow for the long daily drives."
    ],
    [
      "Will we visit the Sahara Desert?",
      "Yes. The proposed itinerary includes the Erg Chebbi dunes around Merzouga and a night in a desert camp."
    ],
    [
      "Can we change the desert camp standard?",
      "You can ask for different camp categories and facilities when requesting your quote. Availability and price depend on your dates."
    ],
    [
      "Can you arrange this tour for a family with children?",
      "Yes, ask for suitable transportation and accommodation, and tell us about children’s ages and your preferred pace. A longer itinerary may be more comfortable."
    ],
    [
      "Can we finish at the Fes airport?",
      "An airport drop-off can be discussed when booking, but leave enough time for the long journey from Merzouga to Fes."
    ]
  ]
},
  "8-days-desert-tour-in-morocco-from-casablanca": {
  "slug": "8-days-desert-tour-in-morocco-from-casablanca",
  "title": "8 Days Desert Tour in Morocco from Casablanca",
  "metaTitle": "8 Days Morocco Desert Tour from Casablanca | Sahara Trip",
  "description": "Discover Morocco in 8 days from Casablanca via Rabat, Fes, Merzouga Sahara, Todra Gorge, Dades Valley, Ait Ben Haddou and Marrakech.",
  "kicker": "8-day Morocco itinerary · Casablanca to Marrakech",
  "duration": "8 Days / 7 Nights",
  "image": "/tours/related/morocco-itinerary-10-days-from-marrakech.jpg",
  "imageAlt": "Morocco desert and historic cities during an eight-day tour from Casablanca",
  "subtitle": "Discover Morocco’s historic cities, mountain landscapes, southern kasbahs and a night near the golden Sahara dunes.",
  "start": "Casablanca",
  "end": "Marrakech",
  "badge": "Grand Morocco route",
  "kind": "Private Morocco highlights and desert tour",
  "route": "Casablanca → Rabat → Meknes → Fes → Ifrane → Merzouga → Todra Gorge → Dades → Ait Ben Haddou → Marrakech",
  "priceText": "Ask for a personalized price based on your departure date, number of travelers, hotel category, Sahara camp choice and the transfers included in your confirmation.",
  "keywords": [
    "8 days desert tour in Morocco from Casablanca",
    "8 days Morocco tour from Casablanca",
    "Casablanca to Marrakech 8 day itinerary",
    "8 day Morocco Sahara desert tour",
    "Casablanca Fes Merzouga Marrakech tour",
    "Morocco itinerary 8 days with desert camp",
    "private Morocco tour Casablanca to Marrakech"
  ],
  "intro": [
    "This 8 days desert tour in Morocco from Casablanca is designed for visitors who want more than a quick city break. Over eight days, discover Atlantic-coast history, old medinas, mountain landscapes and the sand dunes of the Sahara. You begin in Casablanca, explore Morocco’s capital Rabat, spend time in the traditional city of Fes and then travel south to Merzouga before crossing the beautiful valleys of the south and finishing in Marrakech.",
    "The itinerary combines city sightseeing with time on the road. In Fes, narrow streets, old craft workshops and traditional markets give you a feeling for Moroccan history. Heading south, Ifrane, the Middle Atlas and Ziz Valley show how much the landscape changes in a single day. The dunes of Erg Chebbi near Merzouga are the main desert highlight, with the option to enjoy a camel experience, quiet dunes and a camp night.",
    "The final part of the journey leads through Todra Gorge, Dades Valley, Ouarzazate and Ait Ben Haddou before reaching Marrakech. This suggested 8-day Morocco itinerary starts in Casablanca and ends in Marrakech; it is a sensible choice if you arrive at Casablanca airport and prefer to depart from Marrakech. If your flight arrangements differ, ask us whether pickup, extra nights or transfers can be adjusted. Driving times, guide services and accommodation details are confirmed before booking."
  ],
  "dayTitles": [
    "Casablanca Arrival – City Introduction – Rabat",
    "Rabat – Meknes Area – Volubilis (Optional) – Fes",
    "Discover the Medina, Crafts and History of Fes",
    "Fes – Ifrane – Midelt – Ziz Valley – Merzouga",
    "Merzouga: Sahara Dunes, Oasis Villages and Desert Camp",
    "Merzouga – Erfoud – Todra Gorge – Dades Valley",
    "Dades Valley – Ouarzazate – Ait Ben Haddou – Marrakech",
    "Marrakech Guided Discovery and Departure"
  ],
  "days": [
    "Begin your eight-day Morocco tour in Casablanca, the country’s largest city and a busy Atlantic port. Depending on your flight arrival or pickup time, see some of the city’s main sights, such as the area around the Hassan II Mosque from outside, the oceanfront and central neighborhoods. Casablanca offers an interesting first view of modern Morocco with broad avenues, cafes and local markets. Continue north toward Rabat, the country’s capital, where elegant streets meet historic fortifications and the Atlantic Ocean. If there is enough daylight, stop by the Hassan Tower area and the Mausoleum of Mohammed V, or take a walk near the Kasbah of the Udayas. Overnight in Rabat or a nearby area, based on your booking confirmation. This first day is kept reasonably flexible to account for flight schedules and the time you need to settle into Morocco.",
    "After breakfast, continue your discovery of Morocco’s imperial history. The road from Rabat toward Fes passes fertile plains and the Meknes region, where large city gates, traditional neighborhoods and agricultural landscapes tell different stories about the country. If time permits and the optional stop is included in your plan, you can visit the archaeological area of Volubilis, known for its Roman-era remains and mosaic floors. Continue to Fes, one of Morocco’s most atmospheric historic cities. Here the old medina is famous for its narrow car-free lanes, traditional crafts and long cultural history. Settle into your riad or hotel and enjoy an evening at your own pace. For the next day, comfortable shoes are important because Fes is best experienced on foot. Optional entrance fees and guide services should be agreed before the tour.",
    "Today is reserved for discovering Fes without spending the whole day driving. After breakfast, explore the medina, known as Fes el Bali, with its busy souks, old schools, mosques viewed respectfully from appropriate public areas and small workshops where craftspeople still work with traditional materials. A local guide can help you find important places and understand the city’s history; make sure guided services are included in your agreed package if you want them. You may pass the famous tanneries, beautiful tiled fountains and historic city gates. There is time to stop for tea, taste traditional Moroccan food and explore interesting streets without rushing. Fes also has quieter neighborhoods outside the oldest medina where visitors can see another side of the city. Spend a second night in Fes, ready for the mountains and the desert the following morning.",
    "Leave Fes and travel south into the Middle Atlas Mountains. Pass through Ifrane, where the cooler climate and distinctive buildings are very different from the medina, and continue toward the forests and mountain scenery around Azrou. The landscape gradually becomes drier on the way to Midelt, an area often used as a lunch stop between the mountain ranges. As you continue south, the road reveals the wide Ziz Valley and impressive date-palm oases, with viewpoints overlooking villages and green plantations. After crossing the rocky desert edge, continue through the Erfoud region toward Merzouga. The Erg Chebbi dunes are a striking first sight: large waves of golden sand rising from the flat landscape. Spend the night near Merzouga in the accommodation confirmed for your trip. This is a long travel day, so we recommend having snacks and water available for the road.",
    "This day gives you time to discover more of the Sahara instead of rushing away immediately. After breakfast, explore the Merzouga region at a comfortable pace. Depending on your interests and the agreed itinerary, you might see traditional oasis villages, visit local craft or music communities around Khamlia, stop at beautiful viewpoints or learn about the landscapes surrounding Erg Chebbi. These are suggested possibilities rather than guaranteed activities; your driver will help you decide what works best for the season and route. In the late afternoon, head toward the dunes for a desert experience as the sand changes color with the light. A camel ride is popular, but guests who prefer not to ride can ask about transfer options when booking. Finish the day at a Sahara camp or chosen desert accommodation. Enjoy dinner, the calm of the evening and the chance to see stars when the sky is clear. This slower desert day is one of the reasons to choose an eight-day journey.",
    "If you wish, start the morning by watching sunrise over the dunes before breakfast. Leave the Merzouga region and head toward Erfoud, known for its date palms and fossil heritage. The road west crosses desert plains and oasis towns toward Tinghir and Todra Gorge. Walk between the high limestone cliffs and enjoy the cool air near the gorge, especially welcome on a warm day. After time for lunch, continue toward the Dades Valley, where traditional villages, green farmland and striking rock formations create beautiful scenery. This part of southern Morocco is sometimes called the route of a thousand kasbahs, and the countryside offers many opportunities for photographs. In the evening, settle into your hotel or guesthouse in the Dades region. The exact accommodation and included meals depend on the level of comfort selected when you confirm your tour.",
    "Today you follow the road from the Dades Valley through southern Morocco toward Marrakech. Pass through the Valley of Roses area and traditional villages before reaching the Skoura oasis and Ouarzazate, a town known for kasbahs and film locations. Continue to Ait Ben Haddou, the famous fortified earthen ksar recognized by UNESCO. If time allows, walk through the historic settlement and climb to a viewpoint for panoramic pictures. From here the road begins rising toward the High Atlas Mountains. The drive through the Tizi n’Tichka pass is one of the most scenic mountain crossings in Morocco, with villages, twisting roads and wide valley views. Arrive in Marrakech in the late afternoon or evening, depending on traffic and the time spent sightseeing. After check-in, you may enjoy your first evening exploring Marrakech’s lively atmosphere at your own pace.",
    "Spend your final day discovering Marrakech, the famous Red City. Depending on your departure plans, you may choose a city visit covering the outside of the Koutoubia Mosque, historic neighborhoods, the souks and the lively Jemaa el-Fna square. Other well-known attractions, such as Bahia Palace or the Majorelle Garden, can be included if they suit your interests and opening hours; tickets and guided services should be confirmed in advance. Make time for a final Moroccan lunch or mint tea before your transfer or the end of your tour. If you have an early flight, the day can be shortened and the order of visits adjusted. The eight-day itinerary is designed to finish in Marrakech, but if your travel plans require Casablanca or another airport, ask for a revised route before booking so your final driving day remains realistic."
  ],
  "dayDetails": [
    [
      "Casablanca arrival",
      "Atlantic coast",
      "Rabat sights",
      "Rabat overnight"
    ],
    [
      "Meknes region",
      "Optional Volubilis",
      "Fes arrival",
      "Fes overnight"
    ],
    [
      "Medina streets",
      "Traditional crafts",
      "Local culture",
      "Fes overnight"
    ],
    [
      "Ifrane",
      "Midelt",
      "Ziz Valley",
      "Merzouga arrival"
    ],
    [
      "Sahara villages",
      "Erg Chebbi dunes",
      "Optional camel ride",
      "Desert camp"
    ],
    [
      "Erfoud",
      "Todra Gorge",
      "Dades Valley",
      "Dades overnight"
    ],
    [
      "Ouarzazate",
      "Ait Ben Haddou",
      "High Atlas",
      "Marrakech arrival"
    ],
    [
      "Marrakech medina",
      "Souks",
      "Optional palace visits",
      "Departure"
    ]
  ],
  "highlights": [
    "Start your Morocco tour in Casablanca and discover the capital Rabat",
    "Travel through the imperial-city heritage of Meknes and Fes",
    "Enjoy a full day exploring the history and crafts of Fes",
    "Cross the Middle Atlas Mountains and the scenic Ziz Valley",
    "Experience the beautiful Erg Chebbi dunes near Merzouga",
    "Enjoy a slower day in the desert with optional local cultural stops",
    "Explore Todra Gorge and the Dades Valley in southern Morocco",
    "Visit Ait Ben Haddou and cross the High Atlas before Marrakech"
  ],
  "places": [
    "casablanca",
    "rabat",
    "meknes",
    "fes",
    "ifrane",
    "midelt",
    "ziz-valley",
    "merzouga",
    "erg-chebbi",
    "erfoud",
    "todra-gorge",
    "dades-valley",
    "ouarzazate",
    "ait-ben-haddou",
    "marrakech"
  ],
  "stops": [
    [
      "Casablanca",
      33.5731,
      -7.5898,
      1
    ],
    [
      "Rabat",
      34.0209,
      -6.8416,
      1
    ],
    [
      "Meknes",
      33.89,
      -5.55,
      2
    ],
    [
      "Fes",
      34.064,
      -4.974,
      2
    ],
    [
      "Ifrane",
      33.53,
      -5.11,
      4
    ],
    [
      "Merzouga",
      31.099,
      -4.012,
      4
    ],
    [
      "Todra Gorge",
      31.589,
      -5.593,
      6
    ],
    [
      "Dades Valley",
      31.45,
      -5.95,
      6
    ],
    [
      "Ait Ben Haddou",
      31.047,
      -7.129,
      7
    ],
    [
      "Marrakech",
      31.6295,
      -7.9811,
      7
    ]
  ],
  "faqs": [
    [
      "Where does this 8 days Morocco tour start and end?",
      "The suggested itinerary begins in Casablanca and ends in Marrakech. You can ask for a different airport transfer or route before confirming your trip."
    ],
    [
      "How many nights do we spend in the Sahara?",
      "This suggested program includes time in Merzouga on days four and five, with a Sahara camp night on day five. Your accommodation plan will be confirmed with your quote."
    ],
    [
      "Can we visit Fes during the tour?",
      "Yes. The itinerary includes two nights in Fes and a day to explore its historic medina and traditional crafts."
    ],
    [
      "Does the eight-day tour include accommodation and meals?",
      "Accommodation and meal plans depend on the package you confirm. Ask for a written list of inclusions, hotel categories and camp facilities before making payment."
    ],
    [
      "Can this Morocco tour be private for my family?",
      "A private itinerary can be requested, with suitable transport and a pace that works for families, couples or small groups."
    ],
    [
      "What should we pack for this itinerary?",
      "Bring comfortable walking shoes, sun protection, clothes for warm days and cool evenings, and an overnight bag for the desert. Mountain weather can be very different from the Sahara."
    ]
  ]
},
};
