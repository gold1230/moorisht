import {
  BanknotesIcon,
  MapIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Save on Your First Trip",
    description:
      "Start your Morocco journey with a 20% first-tour offer on eligible bookings.",
    icon: BanknotesIcon,
  },
  {
    title: "Choose Your Morocco Route",
    description:
      "Explore desert tours, city routes, family trips and private Morocco itineraries.",
    icon: MapIcon,
  },
  {
    title: "Travel With Local Support",
    description:
      "Plan your route with a local team and experienced drivers who know Morocco.",
    icon: UserGroupIcon,
  },
  {
    title: "Make the First Trip Special",
    description:
      "Use the saving to make your first Morocco experience more memorable.",
    icon: SparklesIcon,
  },
];

export default function FirstTourOfferBenefits() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            A Better First Morocco Trip
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Use the 20% First-Tour Offer?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Save on your first booking while choosing the Morocco route and
            travel style that fits you best.
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
