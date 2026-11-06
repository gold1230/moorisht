"use client";

import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const contactDetails = [
  {
    title: "Our Location",
    content: (
      <>
        <span className="block">Marrakech, Morocco</span>
        <span className="block">Serving travelers</span>
        <span className="block">throughout Morocco.</span>
      </>
    ),
    icon: MapPinIcon,
    href: "https://maps.google.com/?q=Marrakech,Morocco",
  },
  {
    title: "Call or WhatsApp",
    content: (
      <>
        <span className="block">+212628812520</span>
        <span className="block">We&apos;re available 24/7.</span>
      </>
    ),
    icon: PhoneIcon,
    href: "tel:+212628812520",
  },
  {
    title: "Email Us",
    content: (
      <>
        <span className="block">moorishtour@gmail.com</span>
        <span className="block">We aim to reply within</span>
        <span className="block">24 hours.</span>
      </>
    ),
    icon: EnvelopeIcon,
    href: "mailto:moorishtour@gmail.com",
  },
  {
    title: "Opening Hours",
    content: (
      <>
        <span className="block">Monday - Sunday</span>
        <span className="block">8:00 AM - 10:00 PM</span>
        <span className="block">(GMT+1)</span>
      </>
    ),
    icon: ClockIcon,
  },
];

const ContactMoorishTour = () => {
  return (
    <section
      id="contact-options"
      className="py-8"
      aria-labelledby="contact-moorish-tour-title"
    >
      <div className="mx-auto  px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">

          {/* Section title */}
          <div className="flex shrink-0 items-center lg:w-[190px]">
            <h2
              id="contact-moorish-tour-title"
              className=" text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-2xl"
            >
              Contact Moorish Tour
            </h2>
          </div>

          {/* Contact cards */}
          <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              const cardContent = (
                <div className="flex min-h-[120px] items-start gap-4 rounded-xl border border-gray-200 bg-[#fffaf4] px-5 py-4 transition duration-300 hover:border-amber-300 hover:shadow-sm">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <Icon
                      className="h-7 w-7 text-amber-700"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-6 text-slate-900">
                      {item.title}
                    </h3>

                    <div className="mt-2 text-base leading-6 text-gray-700">
                      {item.content}
                    </div>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={item.title}>
                  {cardContent}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMoorishTour;