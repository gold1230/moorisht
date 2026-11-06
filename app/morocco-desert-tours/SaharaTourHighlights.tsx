import {
  BuildingLibraryIcon,
  CameraIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Erg Chebbi Dunes",
    description:
      "See the golden sand dunes beside Merzouga, one of Morocco's best-known Sahara landscapes.",
    icon: SunIcon,
  },
  {
    title: "Camel Trekking",
    description:
      "Ride across the dunes around sunset or sunrise as part of many Merzouga desert experiences.",
    icon: CameraIcon,
  },
  {
    title: "Desert Camp",
    description:
      "Spend a night near the dunes and experience the quiet desert atmosphere after sunset.",
    icon: MoonIcon,
  },
  {
    title: "Kasbah & Valley Routes",
    description:
      "Many Sahara tours connect the desert with historic kasbahs, mountain roads, palm valleys and gorges.",
    icon: BuildingLibraryIcon,
  },
];

export default function SaharaTourHighlights() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Sahara Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            What to Expect on a Morocco Desert Tour
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            A Sahara tour is more than the dunes. The journey can include
            mountains, old kasbahs, river valleys, gorges and desert villages.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article key={highlight.title} className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{highlight.title}</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
