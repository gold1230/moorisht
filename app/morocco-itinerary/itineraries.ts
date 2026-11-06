export type ItineraryDay={title:string;description:string};
export type Itinerary={days:number;slug:string;title:string;short:string;start:string;end:string;pace:string;theme:string;picture:string;stops:string[];ideal:string;intro:string;daysList:ItineraryDay[]};
export const itineraries:Itinerary[] = [
  {
    "days": 3,
    "slug": "3-days",
    "title": "Marrakech & the Atlas foothills",
    "short": "A gentle first taste of Morocco, without spending half the holiday in a car.",
    "start": "Marrakech",
    "end": "Marrakech",
    "pace": "Easy",
    "theme": "City & culture",
    "picture": "marrakech",
    "stops": [
      "Marrakech",
      "Medina",
      "High Atlas",
      "Marrakech"
    ],
    "ideal": "First-time visitors, families, and short breaks",
    "intro": "Three days are enough to enjoy the atmosphere of Marrakech, learn your way around a medina, and get a glimpse of nearby mountain life. They are not enough for a relaxed return trip to the Merzouga dunes. Keep the focus small and your memories will feel bigger.",
    "daysList": [
      {
        "title": "Arrival and an easy evening in Marrakech",
        "description": "Arrive in Marrakech and settle into a riad or hotel. Take a short walk rather than trying to see every landmark immediately. A gentle evening around the medina or Jemaa el-Fnaa lets you feel the city after the sun goes down. Have a relaxed dinner and rest before a full day of exploring."
      },
      {
        "title": "Palaces, gardens, artisans and the old city",
        "description": "Spend the morning discovering Marrakech with a local guide if you enjoy historical stories and quiet backstreets. Choose one or two places such as Bahia Palace, the souks, or a garden instead of racing between attractions. Leave the afternoon open for a cooking class, a hammam, or time on a rooftop with mint tea."
      },
      {
        "title": "Atlas foothills or a final city morning",
        "description": "For a change of scenery, take a carefully paced trip toward the Atlas foothills and a mountain village. Ask about the walking level and road conditions before setting out. If your flight is early, stay in Marrakech instead and enjoy breakfast and a small market visit. End at the airport with enough time for traffic and check-in."
      }
    ]
  },
  {
    "days": 5,
    "slug": "5-days",
    "title": "Marrakech, Essaouira & the mountains",
    "short": "Old-city energy, Atlantic air and mountain scenery at a calmer pace.",
    "start": "Marrakech",
    "end": "Marrakech",
    "pace": "Comfortable",
    "theme": "Coast & culture",
    "picture": "coast",
    "stops": [
      "Marrakech",
      "Atlas foothills",
      "Essaouira",
      "Marrakech"
    ],
    "ideal": "Couples, families, and people who dislike long drives",
    "intro": "Five days can be a lovely holiday when you choose places near one another. Instead of forcing the Sahara, combine Marrakech with the Atlantic coast and one easy mountain day. You will see different sides of the country while keeping plenty of time for cafés, markets and spontaneous discoveries.",
    "daysList": [
      {
        "title": "Welcome to Marrakech",
        "description": "Arrive and check into your accommodation. After a break, walk toward Jemaa el-Fnaa or a nearby square to watch the evening change the city. There is no need for a fixed program on your first day. A simple dinner, a rooftop view and an early night set a pleasant rhythm for the trip."
      },
      {
        "title": "Discover Marrakech beyond the postcard",
        "description": "Explore the medina with time for artisan workshops, the Bahia Palace area and small markets. Stop for fresh juice and a slow lunch instead of moving from one landmark to the next. In the afternoon, choose a garden or hammam. Ask before taking close-up photographs of people, especially in busy shopping lanes."
      },
      {
        "title": "A day in the Atlas foothills",
        "description": "Travel into the foothills near Marrakech for fresh mountain air, local villages and views over terraced valleys. Pick a short walk if you are travelling with children, or a longer walk if the whole group is comfortable. Mountain weather can change quickly, so carry a light extra layer even when the city feels warm."
      },
      {
        "title": "The Atlantic mood of Essaouira",
        "description": "Drive toward Essaouira and enjoy a very different atmosphere: sea breeze, whitewashed lanes and a working harbour. Walk along the ramparts, explore the compact medina and try a relaxed fish lunch if that suits your tastes. Spending the night near the coast lets you experience the town after most day-trippers have left."
      },
      {
        "title": "Return to Marrakech and depart",
        "description": "Enjoy breakfast by the sea before returning to Marrakech. Allow generous time for the road, fuel or coffee stops, and airport formalities. If you have a late departure, you may fit in one final market stop. If the flight is early, move the Essaouira overnight earlier or finish the trip in Marrakech."
      }
    ]
  },
  {
    "days": 7,
    "slug": "7-days",
    "title": "Atlas Mountains, Sahara dunes & Fes",
    "short": "A scenic one-way journey with real desert time and less backtracking.",
    "start": "Marrakech",
    "end": "Fes",
    "pace": "Active",
    "theme": "Sahara & scenery",
    "picture": "sahara",
    "stops": [
      "Marrakech",
      "Ait Ben Haddou",
      "Dades Valley",
      "Merzouga",
      "Midelt",
      "Fes"
    ],
    "ideal": "Travelers who want the desert and can use different arrival/departure cities",
    "intro": "A week is a good starting point for a Sahara journey if you travel one way from Marrakech to Fes. The route still contains long stretches of driving, but it avoids making the same return journey over the Atlas. It also makes room for a proper desert sunrise and a full visit to Fes.",
    "daysList": [
      {
        "title": "Arrive and enjoy Marrakech",
        "description": "Settle into Marrakech and keep the first day simple. A walk through the medina and dinner near the square are enough to begin. Try not to schedule a long transfer directly after a late international flight; even a beautiful city can feel tiring when you have not rested."
      },
      {
        "title": "Get to know Marrakech",
        "description": "Explore a palace, nearby souks and traditional neighbourhoods at an easy pace. A knowledgeable local guide can explain details you might otherwise miss. Leave time to sit in a café and watch the streets. Prepare a small overnight bag for the mountain and desert stages that follow."
      },
      {
        "title": "High Atlas crossing to the Dades Valley",
        "description": "Leave Marrakech early for the winding High Atlas road. Stop at Ait Ben Haddou when conditions and time allow, then continue past Ouarzazate and Skoura toward the Dades Valley. The changing landscape is part of the experience. Eat lunch on the road and spend the evening at a guesthouse in the valley."
      },
      {
        "title": "Todra Gorge and the dunes of Merzouga",
        "description": "Continue through the southern valleys, stopping for a walk in Todra Gorge. Around Erfoud, the scenery becomes drier before the dunes rise beside Merzouga. Arrive with daylight to spare if possible. Depending on the camp arrangement, reach your tent by 4x4 or camel, and enjoy the desert at sunset."
      },
      {
        "title": "A slower Sahara morning and the Ziz Valley",
        "description": "Wake early if you want to see the dunes turn soft gold. Spend the morning around Merzouga, perhaps visiting a nearby village or learning about local music, before beginning the northbound journey. Travel through the Ziz Valley and aim to sleep around Midelt or a nearby town, breaking up the long journey to Fes."
      },
      {
        "title": "Midelt to Fes, then the medina",
        "description": "Continue through the Middle Atlas toward Fes, with rest stops and time for the changing mountain scenery. Once in the city, check in and explore a small area of the old medina rather than tackling it all at once. In the evening, enjoy a traditional dinner and prepare for a more focused visit the next morning."
      },
      {
        "title": "Explore Fes and depart",
        "description": "Spend your final hours discovering part of Fes el-Bali, its artisan quarters or a historic madrasa. An official local guide can be especially helpful in the narrow streets. Plan your departure around the real flight or train time; if the connection is early, move the guided visit to the previous afternoon."
      }
    ]
  },
  {
    "days": 10,
    "slug": "10-days",
    "title": "Imperial cities, blue streets & Sahara",
    "short": "A balanced first big journey, with cities, mountains, kasbahs and dunes.",
    "start": "Casablanca",
    "end": "Marrakech",
    "pace": "Balanced",
    "theme": "Highlights",
    "picture": "bluecity",
    "stops": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Fes",
      "Midelt",
      "Merzouga",
      "Dades Valley",
      "Marrakech"
    ],
    "ideal": "First-time visitors who want famous sights and a memorable desert night",
    "intro": "Ten days give you a rewarding introduction to the country’s contrasting landscapes. This plan starts in Casablanca, passes Rabat and Chefchaouen, gives Fes time to breathe, and heads south through the Middle Atlas to Merzouga. It finishes in Marrakech after the dramatic route through Todra, Dades and Ait Ben Haddou.",
    "daysList": [
      {
        "title": "Casablanca arrival",
        "description": "Arrive in Casablanca and settle in after your flight. Depending on the hour, take a walk by the Atlantic or explore a small part of the city. Do not rush from the airport straight into a full sightseeing program. A comfortable first night helps you enjoy the days that follow."
      },
      {
        "title": "Rabat and north to Chefchaouen",
        "description": "Visit Rabat in the morning, choosing highlights such as Hassan Tower and the Kasbah of the Oudayas. Continue toward Chefchaouen through the green northern countryside. This can be a substantial travel day, so treat the evening as free time for a gentle walk and dinner among the blue lanes."
      },
      {
        "title": "Blue streets, then Fes",
        "description": "Enjoy Chefchaouen in the calmer early hours. Explore its painted lanes respectfully; they are real homes, not only photo backdrops. After lunch, head toward Fes. Check in near the medina or in a quieter new-town hotel and leave the evening free."
      },
      {
        "title": "A full day in Fes",
        "description": "Give Fes a proper day. Visit the old medina with a local guide if possible, watch artisans at work and stop for lunch in a traditional courtyard. The streets are easy to get lost in, so use a clear meeting place if your group separates. Keep the afternoon flexible rather than counting every monument."
      },
      {
        "title": "Across the Middle Atlas toward Midelt",
        "description": "Leave Fes for a scenic route through the Middle Atlas. Stop around Ifrane or the cedar-forest area if conditions allow and continue toward Midelt. This is a useful pause between the big cities and the desert. Enjoy an unhurried dinner and a quiet evening before heading farther south."
      },
      {
        "title": "Ziz Valley to the Sahara dunes",
        "description": "Follow the road south through valleys and palm oases. Near Erfoud you may stop at a fossil workshop if that interests you. Continue to Merzouga for an afternoon arrival, then enter the dunes for sunset and a night at camp. Confirm ahead of time whether your tent has a private bathroom and how luggage is transferred."
      },
      {
        "title": "Todra Gorge and Dades Valley",
        "description": "Wake for the desert sunrise, eat breakfast and begin the journey west. Walk briefly between the walls of Todra Gorge, weather and access permitting. Continue toward the Dades Valley, where dramatic cliffs and village scenes make the journey memorable. Stay overnight here rather than pushing all the way to Marrakech."
      },
      {
        "title": "Ait Ben Haddou and the High Atlas to Marrakech",
        "description": "Pass the Valley of Roses and Ouarzazate, then visit the earthen ksar of Ait Ben Haddou. The walk can include steps and uneven ground, so comfortable footwear helps. Cross the High Atlas toward Marrakech, arriving later in the day. Mountain roads may be affected by weather and construction."
      },
      {
        "title": "A full Marrakech day",
        "description": "Spend the day exploring Marrakech’s gardens, palaces and colourful souks. Choose a route that fits your interests rather than trying to see everything. A cooking workshop, a local food walk or quiet rooftop time can be just as memorable as a famous monument. Enjoy the city after dark when the square comes alive."
      },
      {
        "title": "Departure from Marrakech",
        "description": "Make the final morning yours. Have breakfast, visit a nearby shop or relax before your transfer. Check your departure airport carefully, as this route is designed to finish in Marrakech rather than Casablanca. If your flight leaves from Casablanca, build the extra transfer into the plan before booking."
      }
    ]
  },
  {
    "days": 14,
    "slug": "14-days",
    "title": "The complete first-time Morocco journey",
    "short": "Two weeks of northern culture, Sahara landscapes, cities and Atlantic calm.",
    "start": "Casablanca",
    "end": "Marrakech",
    "pace": "Relaxed",
    "theme": "Culture & nature",
    "picture": "kasbah",
    "stops": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Fes",
      "Merzouga",
      "Dades Valley",
      "Marrakech",
      "Essaouira"
    ],
    "ideal": "Travelers who want deeper experiences and more time at each stop",
    "intro": "Two weeks give you freedom to stop measuring the holiday only by the number of cities. This itinerary adds a second night in several important places, a more comfortable approach to the Sahara, and quiet time on the Atlantic coast. You still see a lot, but the route makes space for meals, conversations and surprises.",
    "daysList": [
      {
        "title": "Welcome to Casablanca",
        "description": "Arrive and take the evening slowly. If there is time, enjoy a short coastal walk and a first Moroccan meal. Stay in Casablanca so you do not have to make a long transfer after a flight. Confirm the following day’s pickup or onward travel arrangement before going to bed."
      },
      {
        "title": "Casablanca and the capital Rabat",
        "description": "Explore a little of Casablanca, perhaps viewing the Hassan II Mosque area according to visiting hours, then continue to Rabat. In the capital, enjoy the gardens and the Kasbah of the Oudayas. Stay overnight so you can appreciate Rabat beyond a quick roadside visit."
      },
      {
        "title": "From Rabat to Chefchaouen",
        "description": "Travel north toward the Rif Mountains. The approach to Chefchaouen becomes increasingly scenic. Arrive in time to enjoy the medina and sit for mint tea. Keep the afternoon simple because travel days can be tiring even when distances look modest on a map."
      },
      {
        "title": "A peaceful morning in Chefchaouen",
        "description": "Enjoy a slower second day in the blue town. Explore side lanes, browse small shops and take photographs without blocking homes or doorways. You may choose a gentle walk to a viewpoint if the weather is pleasant. Leave enough time to enjoy dinner without rushing to the next destination."
      },
      {
        "title": "Travel to Fes via the northern hills",
        "description": "Set off toward Fes. Depending on your route and interests, plan an appropriate visit around Meknes or Volubilis rather than trying to include both automatically. Arrive in Fes and settle into a riad, keeping the evening open for a short walk or a relaxed meal."
      },
      {
        "title": "The old medina of Fes",
        "description": "Spend a full day in Fes, with a local guide if you want a deeper understanding of its many layers. Explore historic lanes, artisan workshops and traditional architecture. Stop regularly; the medina is a place to notice small details, not only collect landmark photographs."
      },
      {
        "title": "Fes to Midelt through the Middle Atlas",
        "description": "Leave the city behind for forests, hills and towns of the Middle Atlas. Take an easy lunch break and stop whenever the road offers a good safe viewpoint. Spend the night near Midelt, giving yourself a shorter and more enjoyable journey toward Merzouga on the next day."
      },
      {
        "title": "Ziz Valley and an evening in Merzouga",
        "description": "Drive through the Ziz Valley and the palm-rich oases toward Erfoud and Merzouga. Pause for lunch or a workshop visit along the way. At the dunes, check into your desert camp or nearby lodge and watch the colours change at sunset. If a camel ride is unsuitable, ask whether 4x4 access is offered."
      },
      {
        "title": "A full day around the Sahara",
        "description": "Keep this day for the Sahara instead of departing at dawn. Explore the area at a relaxed pace, meet local hosts through respectful visits or simply enjoy the quiet of the dunes. The desert is more than a sunset photograph. Return to your accommodation and enjoy a second night without hurrying."
      },
      {
        "title": "Todra Gorge and Dades Valley",
        "description": "Head west through the desert-edge towns toward Todra Gorge. Enjoy a short walk and continue to the Dades Valley, where red rocks and small settlements sit along the road. Stay in a guesthouse and make room for a slow evening, perhaps enjoying a traditional home-cooked meal."
      },
      {
        "title": "Ait Ben Haddou and on to Marrakech",
        "description": "Cross the southern valleys past Ouarzazate and visit Ait Ben Haddou. Then take the winding High Atlas route toward Marrakech. The crossing itself is a highlight, but do not count on exact arrival times when weather or roadworks change. Rest after checking in."
      },
      {
        "title": "Discover Marrakech at your own pace",
        "description": "Enjoy a full day in Marrakech. Visit historic sites and local markets, stop for mint tea and take time to talk with artisans where appropriate. You might choose a cooking class or a hammam in the afternoon. Leave some free time to return to the corners you liked most."
      },
      {
        "title": "Essaouira and the Atlantic coast",
        "description": "Travel to Essaouira for sea air and a quieter rhythm. Explore the ramparts, harbour and compact medina, then enjoy a relaxed lunch. Stay near the coast if possible; the evening atmosphere is lovely after day visitors leave. Expect wind, even in warmer months."
      },
      {
        "title": "Return to Marrakech for departure",
        "description": "Return to Marrakech with generous time for your onward flight. If you depart early, spend the final night in Marrakech instead of Essaouira by swapping the order of the last two days. End the trip without the stress of a last-minute rush to the airport."
      }
    ]
  },
  {
    "days": 21,
    "slug": "21-days",
    "title": "Grand tour: mountains, Sahara & Atlantic",
    "short": "Three weeks to explore widely while protecting downtime and local experiences.",
    "start": "Tangier",
    "end": "Marrakech",
    "pace": "Unhurried",
    "theme": "Grand tour",
    "picture": "atlas",
    "stops": [
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga",
      "Dades Valley",
      "Marrakech",
      "Essaouira",
      "Agadir",
      "Taroudant"
    ],
    "ideal": "Slow travellers, photographers, repeat visitors and longer family holidays",
    "intro": "With three weeks, you can see more of the country without turning each day into a road marathon. This open-jaw route begins in Tangier, travels through the northern medinas and Middle Atlas to the Sahara, then winds across the south and Atlantic coast before finishing in Marrakech. It is flexible: if you love one town, spend an extra night there.",
    "daysList": [
      {
        "title": "Arrive in Tangier",
        "description": "Land in Tangier, settle into your accommodation and enjoy the first view of the sea. Keep your schedule gentle. A small walk in the medina or a café stop is enough to get a feel for the city. Take a restful night before exploring more widely."
      },
      {
        "title": "Tangier: history and coast",
        "description": "Spend the day seeing Tangier beyond its transport connections. Explore the kasbah and old streets, then head toward the coast if the weather is suitable. Choose a long lunch and an easy evening. Tangier has enough character to reward a second day rather than a hurried pass-through."
      },
      {
        "title": "Travel to Chefchaouen",
        "description": "Drive into the Rif Mountains toward Chefchaouen. Enjoy the changing hillside views and stop for a break when needed. Once there, wander the blue lanes and look for a quiet terrace. Do not overfill the day: the town is at its best when there is time to get a little lost."
      },
      {
        "title": "A full Chefchaouen day",
        "description": "Spend another day enjoying the blue city. A gentle viewpoint walk may be possible, depending on heat and mobility. Browse family-run shops, sample local food and take respectful pictures. Staying a second night means you can enjoy early morning light without the pressure of departure."
      },
      {
        "title": "North to Fes, with a possible history stop",
        "description": "Continue toward Fes. The route can include an optional historical stop near Volubilis or Meknes, but ask about driving time before trying to fit everything in. Arrive in Fes for a relaxed evening, a short medina walk and dinner."
      },
      {
        "title": "Fes: crafts and old streets",
        "description": "Explore the Fes medina with a local guide if that fits your style. Spend time learning about artisan workshops, traditional architecture and the city’s history. Break for lunch inside a courtyard. Let the day unfold in a single area rather than running across the old town repeatedly."
      },
      {
        "title": "A second day in Fes",
        "description": "Keep this day for a deeper experience: cooking, calligraphy, a museum visit or simply browsing the shops at your own pace. The extra time is especially valuable for families and travelers who prefer a relaxed approach. Rest before the southbound journey begins."
      },
      {
        "title": "Middle Atlas to Midelt",
        "description": "Leave Fes and drive through the Middle Atlas, stopping for scenery around Ifrane or the forest where suitable. Spend a quiet night in the Midelt area. This overnight pause makes the journey to the Sahara more manageable and gives you time to enjoy the changing landscape."
      },
      {
        "title": "Ziz Valley and Erfoud",
        "description": "Continue toward the green oasis landscapes of the Ziz Valley. Around Erfoud, consider visiting a fossil workshop and learning how specimens are prepared. Do not confuse every polished fossil item with an untouched specimen; ask sellers questions. Stay nearby and enjoy the desert-edge atmosphere."
      },
      {
        "title": "Merzouga and the first desert sunset",
        "description": "Make your way to Merzouga and the Erg Chebbi dunes. Choose a camp or lodge that matches your comfort needs, then enjoy an afternoon walk or camel experience if desired. Watch the changing sand colours at sunset and spend the night beneath the desert sky."
      },
      {
        "title": "Slow Sahara experiences",
        "description": "Stay another day around Merzouga. You might visit Khamlia, spend time with local hosts through a respectful arranged visit, or simply rest with a book and a dune view. A second night makes the desert feel like a place you have visited rather than a quick photo stop."
      },
      {
        "title": "Todra Gorge and Tinghir",
        "description": "Leave the dunes and travel west toward Tinghir and Todra Gorge. Enjoy a short walk below the high rock walls and stop for lunch. Stay near Tinghir or farther along the valley depending on road conditions. The aim is to keep the day comfortable, not to cover the longest possible distance."
      },
      {
        "title": "Dades Valley and the Valley of Roses",
        "description": "Spend time in the Dades region. Explore viewpoints, village landscapes and the Valley of Roses when appropriate. This is a good day for photography and for enjoying a family-run guesthouse. Roads may have sharp bends; choose stops carefully rather than pulling over suddenly for photos."
      },
      {
        "title": "Ouarzazate and Ait Ben Haddou",
        "description": "Travel toward Ouarzazate and the historic ksar of Ait Ben Haddou. Walk the earthen lanes, allow time for the heat and steps, and learn about the site’s history. Stay near Ait Ben Haddou or Ouarzazate so you do not have to race across the High Atlas late in the day."
      },
      {
        "title": "High Atlas crossing to Marrakech",
        "description": "Cross the High Atlas toward Marrakech, allowing flexibility for mountain weather and road conditions. Arrive and rest. An evening walk in the old city gives you a new change of energy after quiet valleys and desert villages."
      },
      {
        "title": "Marrakech, the first full day",
        "description": "Visit Marrakech’s palaces, gardens and souks with enough time for each place. A guide can help you navigate the medina and understand the stories behind its streets. Stop for tea and an unhurried lunch. Leave the night free to experience the famous square in your own way."
      },
      {
        "title": "Marrakech, a second day",
        "description": "Use a second Marrakech day for experiences rather than more transport: a cooking workshop, a hammam, shopping for crafts or visiting a district you missed. Slow down and enjoy the city without a checklist. If your group needs rest, this is a good opportunity to build in free time."
      },
      {
        "title": "Atlantic coast at Essaouira",
        "description": "Head west to Essaouira. Walk along the sea walls, explore the medina and try a local seafood lunch if you like. Spend the night near the water and enjoy the town’s calmer evening pace. Carry a light layer for the Atlantic wind."
      },
      {
        "title": "South along the coast toward Agadir",
        "description": "Continue south along the Atlantic route toward the Agadir region, making breaks along the way. Enjoy a beach walk or relaxed afternoon in a comfortable hotel. This is a gentle day that balances the longer overland parts of the journey."
      },
      {
        "title": "Taroudant or a rural south-country outing",
        "description": "Travel inland toward Taroudant or choose an easy nearby day based on your interests. Explore traditional walls and markets, or stay close to the coast if you prefer more beach time. Discuss the choice with your driver or planner rather than adding every optional stop to one day."
      },
      {
        "title": "Return to Marrakech for departure",
        "description": "Return to Marrakech with plenty of travel buffer. Spend the last hours resting, enjoying a favourite meal or selecting a final souvenir. Check airport and flight details in advance. If your flight departs early, arrange to stay in Marrakech the night before rather than making a long transfer on departure morning."
      }
    ]
  }
];
