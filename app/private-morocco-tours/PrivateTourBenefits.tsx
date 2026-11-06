import {
  AdjustmentsHorizontalIcon,
  TruckIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Flexible Itinerary",
    description:
      "Adjust stops, travel pace and daily plans around your interests and available time.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Private Vehicle",
    description:
      "Travel in a comfortable private vehicle reserved for you and your travel companions.",
    icon: TruckIcon,
  },
  {
    title: "Custom Route",
    description:
      "Start from Marrakech, Casablanca, Fes or Tangier and build the Morocco route that works for you.",
    icon: MapIcon,
  },
  {
    title: "Local Support",
    description:
      "Travel with experienced local drivers and support throughout your Morocco journey.",
    icon: ShieldCheckIcon,
  },
];

export default function PrivateTourBenefits() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Why Travel Private
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            A Morocco Tour Built Around You
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Private tours give you more control over the route, timing,
            accommodation and experiences included in your Morocco trip.
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
