// components/contact/ContactCards.tsx

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";

export default function ContactCards() {

const infoCall =  [
        {
          icon: PhoneIcon,
          title: "Call Us",
          value: "+212628812520",
        },
        {
          icon: EnvelopeIcon,
          title: "Email Us",
          value: "moorishtour@gmail.com",
        },
        {
          icon: MapPinIcon,
          title: "Office",
          value: "Marrakech, Morocco",
        },
        {
          icon: PhoneArrowUpRightIcon,
          title: "WhatsApp",
          value: "+212628812520",
        },
      ];


  return (
    <div className=" rounded-md overflow-hidden grid md:grid-cols-4 pt-5 pb-3 px-6 -mt-14 relative z-20  m-auto max-w-2xl lg:max-w-6xl bg-white shadow-lg">
      {infoCall.map((item) => (
        <div
          key={item.title}
          className=" grid  md:grid-cols-3 grid-cols-2  gap-4"
        >
          <item.icon className="size-10 text-amber-700 mb-4 rounded-full p-2 border-2  md:col-end-1" />
          <div className="text-gray-800  md:col-span-3 ">
            <h3 className="font-semibold ">{item.title}</h3>
            <p>{item.value}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}