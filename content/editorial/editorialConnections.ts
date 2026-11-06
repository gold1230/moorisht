/** Curated internal links for the six Morocco editorial guides.
 * All targets are first-party routes; page content and prices are unchanged.
 */
export const editorialConnections: Record<string, {
  destinations: string[];
  tours: string[];
  guides: string[];
  phrases: Array<{ text: string; href: string }>;
}> = {
  "morocco-with-kids-family-travel-guide": {
    destinations: ["marrakech", "merzouga", "essaouira", "fes"],
    tours: ["tour/3-days-desert-tour-from-marrakech-to-merzouga", "tour/4-days-tour-from-marrakech-to-merzouga", "tour/morocco-itinerary-7-days-from-marrakech"],
    guides: ["getting-around-morocco-transport-guide", "morocco-in-winter-weather-packing-guide"],
    phrases: [
      { text: "family desert tour", href: "/tour/3-days-tour-from-marrakech-to-merzouga/" },
      { text: "private driver", href: "/plan-your-morocco-tour/" },
      { text: "desert camp", href: "/top-5-best-merzouga-luxury-desert-camps/" },
      { text: "transport", href: "/getting-around-morocco-transport-guide/" },
    ],
  },
  "moroccan-food-what-to-eat-travel-guide": {
    destinations: ["marrakech", "fes", "essaouira"],
    tours: ["tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip", "tour/morocco-itinerary-7-days-from-marrakech"],
    guides: ["marrakech-souks-shopping-guide", "morocco-with-kids-family-travel-guide"],
    phrases: [
      { text: "Marrakech", href: "/locations/marrakech/" },
      { text: "Fes", href: "/locations/fes/" },
      { text: "markets", href: "/marrakech-souks-shopping-guide/" },
    ],
  },
  "morocco-in-winter-weather-packing-guide": {
    destinations: ["marrakech", "high-atlas-mountains", "fes", "merzouga"],
    tours: ["tour/3-days-desert-tour-from-marrakech-to-merzouga", "tour/3-days-from-fes-to-merzouga-desert", "tour/4-days-tour-from-marrakech-to-merzouga"],
    guides: ["morocco-in-summer-where-to-go-guide", "getting-around-morocco-transport-guide"],
    phrases: [
      { text: "desert camps", href: "/top-5-best-merzouga-luxury-desert-camps/" },
      { text: "mountain roads", href: "/getting-around-morocco-transport-guide/" },
    ],
  },
  "marrakech-souks-shopping-guide": {
    destinations: ["marrakech", "ourika-valley", "high-atlas-mountains"],
    tours: ["tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip", "tour/morocco-itinerary-7-days-from-marrakech"],
    guides: ["moroccan-food-what-to-eat-travel-guide", "morocco-in-summer-where-to-go-guide"],
    phrases: [
      { text: "guided visit", href: "/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" },
      { text: "Marrakech day", href: "/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" },
      { text: "food", href: "/moroccan-food-what-to-eat-travel-guide/" },
      { text: "Marrakech", href: "/locations/marrakech/" },
    ],
  },
  "getting-around-morocco-transport-guide": {
    destinations: ["casablanca", "tangier", "fes", "marrakech", "merzouga"],
    tours: ["tour/10-days-in-morocco-tour-from-tangier", "tour/12-days-morocco-tour-from-casablanca-to-marrakech", "tour/3-days-from-fes-to-merzouga-desert"],
    guides: ["morocco-with-kids-family-travel-guide", "morocco-in-winter-weather-packing-guide"],
    phrases: [
      { text: "private driver", href: "/plan-your-morocco-tour/" },
      { text: "Sahara Desert", href: "/city-of-merzouga-easy-travel-guide/" },
      { text: "road trip", href: "/tour/10-days-in-morocco-tour-from-tangier/" },
    ],
  },
  "morocco-in-summer-where-to-go-guide": {
    destinations: ["essaouira", "agadir", "marrakech", "high-atlas-mountains"],
    tours: ["tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip", "tour/morocco-itinerary-7-days-from-marrakech"],
    guides: ["morocco-in-winter-weather-packing-guide", "marrakech-souks-shopping-guide"],
    phrases: [
      { text: "Sahara travel", href: "/city-of-merzouga-easy-travel-guide/" },
      { text: "Sahara Desert", href: "/city-of-merzouga-easy-travel-guide/" },
    ],
  },
  "is-there-a-war-in-morocco-safe-to-visit-2026": {
    destinations: ["marrakech", "fes", "merzouga", "essaouira"],
    tours: ["tour/3-days-desert-tour-from-marrakech-to-merzouga", "tour/3-days-from-fes-to-merzouga-desert", "tour/12-days-morocco-tour-from-casablanca-to-marrakech"],
    guides: ["getting-around-morocco-transport-guide", "morocco-with-kids-family-travel-guide"],
    phrases: [
      { text: "private driver", href: "/plan-your-morocco-tour/" },
      { text: "three-day Marrakech to Merzouga desert tour", href: "/tour/3-days-desert-tour-from-marrakech-to-merzouga/" },
    ],
  },
};
