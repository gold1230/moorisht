import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    title: "Choose Your Tour",
    description:
      "Select the shared Morocco tour that matches your route, dates and trip length.",
    icon: MapPinIcon,
  },
  {
    number: "02",
    title: "Check Your Date",
    description:
      "Send your travel date so we can confirm the shared departure and available places.",
    icon: CalendarDaysIcon,
  },
  {
    number: "03",
    title: "Join the Group",
    description:
      "Meet the other travelers and begin your Morocco journey from the agreed pickup point.",
    icon: UserGroupIcon,
  },
  {
    number: "04",
    title: "Enjoy Morocco",
    description:
      "Relax and enjoy the route, planned stops, local experiences and Sahara adventure.",
    icon: CheckBadgeIcon,
  },
];

export default function SharedToursHowItWorks() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Easy Booking
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            How Shared Morocco Tours Work
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
            <span className="h-0.5 w-8 bg-amber-700" />
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="absolute right-4 top-3 text-4xl font-bold text-amber-100">
                  {step.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
