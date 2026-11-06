import {
  BuildingLibraryIcon,
  GlobeAsiaAustraliaIcon,
  MapIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    title: "Mountain Road Trips",
    description:
      "Cross high passes and watch the landscape change from green mountain slopes to dry southern valleys.",
    icon: MapIcon,
  },
  {
    title: "Traditional Villages",
    description:
      "Discover rural communities, local markets and mountain settlements along scenic routes.",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Valleys & Gorges",
    description:
      "Explore Dades Valley, Todra Gorge, Ourika Valley and other dramatic natural landscapes.",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Gateway to the Sahara",
    description:
      "Use the Atlas and valley route as part of a longer journey toward Merzouga and the Sahara Desert.",
    icon: SunIcon,
  },
];

export default function AtlasExperiences() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Mountains & Nature
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            What to Experience in the Atlas Mountains
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            The Atlas region combines scenic driving, rural Morocco, natural
            landscapes and routes that connect major cities with the Sahara.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                key={experience.title}
                className="rounded-xl border border-amber-100 bg-[#faf7f2] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {experience.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {experience.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
