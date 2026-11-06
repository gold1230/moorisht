import {
  AdjustmentsHorizontalIcon,
  FaceSmileIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Flexible Daily Pace",
    description:
      "Take extra breaks, start later when needed and adjust the day around your family's energy.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Experiences Kids Enjoy",
    description:
      "Mix cultural visits with outdoor stops, desert scenery, easy walks and memorable family activities.",
    icon: FaceSmileIcon,
  },
  {
    title: "Family-Friendly Routes",
    description:
      "Choose an itinerary that balances sightseeing with realistic driving times and comfortable overnight stops.",
    icon: MapIcon,
  },
  {
    title: "Private Local Support",
    description:
      "Travel with a local driver and support team that can help with practical questions throughout the trip.",
    icon: ShieldCheckIcon,
  },
];

export default function FamilyTourBenefits() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Why Families Choose Morocco
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            More Comfort, More Flexibility, More Time Together
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Family travel works best when the route feels comfortable. Our
            Morocco family tours focus on flexible pacing, practical stops and
            experiences that everyone can enjoy together.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
