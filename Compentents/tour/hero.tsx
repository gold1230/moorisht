import { getVerifiedTourReviewSummary } from "@/lib/verifiedTourReviewData";


import Image, { type StaticImageData } from "next/image";
import {
  CalendarDaysIcon,
  UsersIcon,
  MapPinIcon,
  SunIcon,
  BuildingOfficeIcon,
  StarIcon
  
} from "@heroicons/react/24/solid";

import Breadcrumb from "@/Compentents/tour/Breadcrumb";



interface TourHeroProps {
 
  image: StaticImageData | string;
  imagetitle: string;
  imagerRobbicon: string;
  type: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  route: string;
  reviews: string;
  reviewsRate: string;
  url?: string;
  maxPeople: string;
  accommodation: string;
  activities: string; 


}



export default function TourHero( 
{ image,
  imagetitle,
  imagerRobbicon,
  type,
  title,
  description,
  duration,
  route, 
  reviews,
  reviewsRate,
  url,
  maxPeople,
  accommodation,
  activities,  }: TourHeroProps) {



  const verifiedSummary = url ? getVerifiedTourReviewSummary(url) : undefined;

  return (
<>
    <Breadcrumb title={title} />

    <section className="w-[95%] mx-auto py-10">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* LEFT */}
        <div className="lg:col-span-3 ">
          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Gallery */}
            <div className="md:h-157.5">
              <div className=" relative overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={imagetitle}
                  title={imagetitle}
                  width={698}
                  height={632}
                  fetchPriority="high"
                  priority
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${Buffer.from(`
                                <svg xmlns="http://www.w3.org/2000/svg" width="698" height="630">
                                    <filter id="b">
                                      <feGaussianBlur stdDeviation="20"/>
                                    </filter>
                                        <image
                                          filter="url(#b)"
                                          href=${image}
                                          quality={50}
                                          width="100%"
                                          height="100%"
                                        />
                                </svg>
                              `).toString("base64")}`}
                  className="object-cover md:h-157.5 w-full"
                />

                {/* Badge */}
                <div className="absolute flex items-center left-5 top-5 rounded-lg bg-white px-4 py-2 text-md font-medium text-gray-800 shadow-lg">
                  <StarIcon className="size-4 mr-1 text-yellow-600" />
                  {imagerRobbicon}
                </div>

                
              </div>

              
            </div>

            {/* Tour Info */}
            <div className="">
              <div>
                <p className="font-bold uppercase tracking-widest text-amber-700">
                  {type}
                </p>

                <h1 className="mt-3 text-5xl font-bold leading-tight text-gray-900">
                  {title}
                </h1>

                {(url ? verifiedSummary !== undefined : Boolean(reviews && reviewsRate)) && (
                  <div className="mt-5 flex items-center gap-3" aria-label="Tour customer rating">
                    <span className="font-semibold text-amber-800">★ {verifiedSummary ? verifiedSummary.ratingValue.toFixed(1) : reviewsRate} / 5</span>
                    <span className="text-gray-700">
                      ({verifiedSummary ? verifiedSummary.reviewCount : reviews} {verifiedSummary?.reviewCount === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                )}

                <p className="mt-6 text-lg leading-8 text-gray-700">
                    {description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 mt-6 gap-5">
                <Feature
                  icon={<CalendarDaysIcon className="size-6"/>}
                  text={duration}
                />

                <Feature
                  icon={<MapPinIcon className="size-6"/>}
                  text={route}
                />

                <Feature
                  icon={<UsersIcon className="size-6" />}
                  text= {maxPeople}
                />

                <Feature
                  icon={<BuildingOfficeIcon className="size-6" />}
                  text={accommodation}
                />

                <Feature
                  icon={<MapPinIcon className="size-6"/>}
                  text={activities}
                />

                <Feature
                  icon={<SunIcon className="size-6" />}
                  text="All Year Round"
                />
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
    </>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-orange-700">{icon}</div>

      <span className="text-gray-700">{text}</span>
    </div>
  );
}