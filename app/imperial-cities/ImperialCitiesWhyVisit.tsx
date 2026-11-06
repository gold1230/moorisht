import {
  BuildingLibraryIcon,
  CameraIcon,
  MapIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    title: "Historic Medinas",
    description:
      "Walk through old neighborhoods, narrow streets, historic markets and traditional quarters.",
    icon: MapIcon,
  },
  {
    title: "Royal Architecture",
    description:
      "Discover monumental gates, palaces, walls and landmarks connected to Morocco's royal history.",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Traditional Crafts",
    description:
      "See workshops, souks and artisan traditions that remain an important part of city life.",
    icon: ShoppingBagIcon,
  },
  {
    title: "Photography & Culture",
    description:
      "Each Imperial City has a different atmosphere, architecture, street life and visual identity.",
    icon: CameraIcon,
  },
];

export default function ImperialCitiesWhyVisit() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Culture & Heritage
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Visit Morocco&apos;s Imperial Cities?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            The Imperial Cities are ideal for travelers who want to understand
            Morocco through architecture, old medinas, traditional crafts,
            royal history and local culture.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-xl border border-amber-100 bg-[#faf7f2] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
