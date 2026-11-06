import { MegaphoneIcon, ShieldCheckIcon, Square3Stack3DIcon , MapIcon } from "@heroicons/react/24/solid";


const features = [
  {
    icon: ShieldCheckIcon,
    title: "Best Price Guarantee",
    description: "No hidden fees",
  },
  {
    icon: MegaphoneIcon,
    title: "Local Expert Guides",
    description: "100% local experiences",
  },
  {
    icon: Square3Stack3DIcon,
    title: "Unique Experiences",
    description: "Discover hidden gems",
  },
  {
    icon: MapIcon,
    title: "Secure Booking",
    description: "Book with confidence",
  },
];

export default function TourFeatures() {
  return (
    <section className=" w-[95%] mx-auto my-10 rounded-2xl border border-neutral-200 bg-white">
      <div className="grid grid-cols-1 divide-y divide-neutral-200 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50">
                <Icon
                  className="h-6 w-6 text-[#92500d]"
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3 className="text-[17px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}