import Link from "next/link";
import Image from "next/image"
import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import  image1 from "@/public/blog/morocco-trips-tours-camel.png"

const MoroccoTripCTA = () => {
  return (
    <aside className="w-full">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-amber-100/30">

        {/* Content */}
        <div className="relative z-10 px-4 pt-5">

          {/* Title */}
          <div className="flex items-center gap-3">
            <EnvelopeIcon
              className="h-6 w-6 shrink-0 text-amber-700"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <h2 className="text-[17px] font-bold text-amber-700">
              Planning a Morocco Trip?
            </h2>
          </div>

          {/* Description */}
          <p className="mt-3 max-w-[230px] font-medium leading-5 text-slate-700">
            Let our local experts help you plan
            <br />
            the perfect journey.
          </p>

          {/* Button */}
          <Link
            href="/tour"
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-amber-700 px-4 py-2.5  font-bold text-white shadow-sm transition hover:bg-amber-800"
          >
            Explore Our Tours

            <ArrowRightIcon
              className="h-3.5 w-3.5"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Desert illustration */}
        <div className="relative mt-[-30px] h-[105px] w-full">
        <Image
              src={image1}
              alt="Camel trek at sunset in the Merzouga Sahara Desert"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"

              className="object-cover h-full  transition duration-500 group-hover:scale-105"
            />
        </div>

      </div>
    </aside>
  );
};

export default MoroccoTripCTA;