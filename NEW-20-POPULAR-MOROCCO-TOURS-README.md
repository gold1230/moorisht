# Moorish Tour: 20 new Morocco tour routes + contact fix

## Added routes

- `/tour/2-days-zagora-desert-tour-from-marrakech/` — 2 Days Zagora Desert Tour from Marrakech (indicative proposed from €149/person)
- `/tour/3-days-luxury-desert-tour-from-marrakech-to-merzouga/` — 3 Days Luxury Marrakech to Merzouga Desert Tour (indicative proposed from €390/person)
- `/tour/5-days-marrakech-to-fes-desert-tour/` — 5 Days Marrakech to Fes Desert Tour via Merzouga (indicative proposed from €480/person)
- `/tour/5-days-fes-to-marrakech-desert-tour/` — 5 Days Fes to Marrakech Desert Tour via Merzouga (indicative proposed from €470/person)
- `/tour/6-days-private-morocco-tour-from-marrakech-to-fes/` — 6 Days Private Morocco Tour Marrakech to Fes (indicative proposed from €590/person)
- `/tour/7-days-best-of-morocco-tour-from-casablanca/` — 7 Days Morocco Tour from Casablanca to Marrakech & Sahara (indicative proposed from €790/person)
- `/tour/9-days-morocco-tour-from-casablanca/` — 9 Days Morocco Tour from Casablanca with Chefchaouen & Desert (indicative proposed from €990/person)
- `/tour/10-days-grand-morocco-tour-from-casablanca/` — 10 Days Morocco Tour from Casablanca, Chefchaouen & Sahara (indicative proposed from €1150/person)
- `/tour/12-days-grand-morocco-tour-from-casablanca/` — 12 Days Grand Morocco Tour from Casablanca (indicative proposed from €1390/person)
- `/tour/14-days-best-of-morocco-itinerary-from-casablanca/` — 14 Days Best of Morocco Tour from Casablanca (indicative proposed from €1690/person)
- `/tour/5-days-north-morocco-tour-from-tangier-to-marrakech/` — 5 Days Tangier to Marrakech Tour via Chefchaouen & Fes (indicative proposed from €495/person)
- `/tour/7-days-tangier-to-marrakech-morocco-tour/` — 7 Days Tangier to Marrakech Tour with Sahara Desert (indicative proposed from €795/person)
- `/tour/9-days-tangier-to-marrakech-private-tour/` — 9 Days Tangier to Marrakech Private Morocco Tour (indicative proposed from €980/person)
- `/tour/4-days-fes-to-merzouga-desert-tour/` — 4 Days Fes to Merzouga Sahara Desert Tour (indicative proposed from €340/person)
- `/tour/5-days-errachidia-merzouga-dades-private-tour/` — 5 Days Errachidia to Merzouga & Dades Private Tour (indicative proposed from €410/person)
- `/tour/2-days-erfoud-to-merzouga-overnight-desert-tour/` — 2 Days Erfoud to Merzouga Overnight Desert Tour (indicative proposed from €165/person)
- `/tour/ourika-valley-day-trip-from-marrakech/` — Ourika Valley Day Trip from Marrakech (indicative proposed from €32/person)
- `/tour/essaouira-day-trip-from-marrakech/` — Essaouira Day Trip from Marrakech (indicative proposed from €29/person)
- `/tour/ouzoud-waterfalls-day-trip-from-marrakech/` — Ouzoud Waterfalls Day Trip from Marrakech (indicative proposed from €33/person)
- `/tour/agafay-desert-sunset-dinner-from-marrakech/` — Agafay Desert Sunset and Dinner from Marrakech (indicative proposed from €65/person)

## Notes
- Tour pages use the existing established Moorish Tour NewTourDetail template, with long daily plans, hover linked destination names, route maps, SEO titles/descriptions, breadcrumbs, FAQs, and TouristTrip + Product JSON-LD.
- Suggested prices are planning estimates, **not confirmed bookable offers**. They are intentionally not emitted as Product Offer structured data. The owner should review prices and inclusions before publishing.
- The customer review area now links to existing business feedback. No tour-specific customer counts were fabricated; individual verified feedback can be supplied later.
- The contact API now isolates confirmation delivery errors from successful main enquiry emails and adds timeouts; form shows a useful error if the main delivery fails.
- Confirm deployment secrets BREVO_API_KEY, BREVO_SENDER_EMAIL, TOUR_REQUEST_EMAIL on Hostinger. Check Brevo verified sender and account quotas, plus Cloudflare firewall for `/api/contact-us` if needed.
- Not tested live: do a production build and a genuine test message before treating the contact repair as verified.
