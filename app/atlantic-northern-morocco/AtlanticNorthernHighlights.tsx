import {
  BuildingOffice2Icon,
  CameraIcon,
  MapIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Historic Coastal Medinas",
    description:
      "Walk through old towns and medinas in Tangier, Asilah, Rabat and Essaouira.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Atlantic Beaches",
    description:
      "Enjoy ocean views, beach towns and a cooler coastal atmosphere in several regions.",
    icon: SunIcon,
  },
  {
    title: "Northern Culture",
    description:
      "Discover the different architecture, food and atmosphere of Tangier, Tetouan and Chefchaouen.",
    icon: MapIcon,
  },
  {
    title: "Photography & Slow Travel",
    description:
      "Blue streets, white coastal towns, ports and medinas create some of Morocco's most photogenic stops.",
    icon: CameraIcon,
  },
];

export default function AtlanticNorthernHighlights() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Coast & Culture
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Explore Atlantic & Northern Morocco?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            This part of Morocco combines coastal scenery, historic medinas,
            northern culture and a slower travel style than many desert routes.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <article
                key={highlight.title}
                className="rounded-xl border border-amber-100 bg-[#faf7f2] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {highlight.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {highlight.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
