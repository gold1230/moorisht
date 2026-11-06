import PlaceHoverCard from "@/Compentents/placeCard";

export default function LocationsArchiveGuide() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
              Build a Better Route
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              How to Choose the Right Morocco Locations
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Morocco is easier to enjoy when your locations make sense
              together geographically. Use one main region as the base of your
              itinerary, then add nearby places.
            </p>
          </div>

          <div className="space-y-4 text-base leading-7 text-slate-700">
            <p>
              Travelers starting in{" "}
              <PlaceHoverCard place="marrakech">
                Marrakech
              </PlaceHoverCard>{" "}
              can easily combine the city with the{" "}
              <PlaceHoverCard place="high-atlas-mountains">
                Atlas Mountains
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="ait-ben-haddou">
                Ait Ben Haddou
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="ouarzazate">
                Ouarzazate
              </PlaceHoverCard>
              . A longer southern route can continue through{" "}
              <PlaceHoverCard place="dades-valley">
                Dades Valley
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="todra-gorge">
                Todra Gorge
              </PlaceHoverCard>{" "}
              before reaching{" "}
              <PlaceHoverCard place="merzouga">
                Merzouga
              </PlaceHoverCard>
              .
            </p>

            <p>
              In northern Morocco,{" "}
              <PlaceHoverCard place="tangier">
                Tangier
              </PlaceHoverCard>
              ,{" "}
              <PlaceHoverCard place="tetouan">
                Tetouan
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="chefchaouen">
                Chefchaouen
              </PlaceHoverCard>{" "}
              work naturally together. Travelers interested in history can
              continue toward{" "}
              <PlaceHoverCard place="fes">
                Fes
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="meknes">
                Meknes
              </PlaceHoverCard>
              .
            </p>

            <p>
              For a slower Atlantic experience,{" "}
              <PlaceHoverCard place="essaouira">
                Essaouira
              </PlaceHoverCard>{" "}
              is easy to combine with Marrakech, while{" "}
              <PlaceHoverCard place="rabat">
                Rabat
              </PlaceHoverCard>{" "}
              and{" "}
              <PlaceHoverCard place="casablanca">
                Casablanca
              </PlaceHoverCard>{" "}
              fit well into routes between northern Morocco and the central
              Atlantic coast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
