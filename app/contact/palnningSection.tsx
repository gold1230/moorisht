"use client";

import Link from "next/link";
import {
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
  CalendarDaysIcon,
  UsersIcon,
  MapPinIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const helpOptions = [
  {
    title: "Morocco Desert Tours",
    description:
      "Ask us about Sahara Desert tours to Merzouga, camel trekking, desert camps and multi-day itineraries.",
    icon: HomeModernIcon,
    href: "/morocco-desert-tours",
  },
  {
    title: "Marrakech Tours",
    description:
      "Discover Marrakech with private tours, day trips, cultural experiences and exciting activities.",
    icon: BuildingStorefrontIcon,
    href: "/marrakech-desert-tours",
  },
  {
    title: "Atlas Mountains & Kasbahs",
    description:
      "Explore the High Atlas, Ait Ben Haddou, Ouarzazate, Dades Valley and Todra Gorge.",
    icon: BuildingOffice2Icon,
    href: "/tour",
  },
  {
    title: "Private Morocco Tours",
    description:
      "We create private itineraries based on your travel dates, interests, preferences and budget.",
    icon: ShieldCheckIcon,
    href: "/private-morocco-tours",
  },
  {
    title: "Family & Group Trips",
    description:
      "Comfortable Morocco trips for families, couples, friends and larger groups.",
    icon: UserGroupIcon,
    href: "/morocco-family-tours",
  },
  {
    title: "Custom Itineraries",
    description:
      "Already have an idea? Send us your plans and we will help organize your perfect trip.",
    icon: MapIcon,
    href: "/private-morocco-tours",
  },
];

export type contactData = {

  name: string,
  email: string,
  phone: string ,
  country: string,
  travelDate: string,
  travelers: string,
  message:string,

}

const initialForm: contactData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  travelDate: "",
  travelers:"",
  message:"",
}

export default function ContactPlanningSection() {
    const [form, setForm] = useState<contactData>(initialForm);
    const [errorMessage, setErrorMessage] = useState("");
    const [status, setStatus] = useState<
  "idle" | "submitting" | "success" | "error"
  >("idle");

     const updateForm = <K extends keyof contactData>(
        field: K,
        value: contactData[K]
      ) => {
        setForm((current) => ({
          ...current,
          [field]: value,
        }));
      };

  async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  setErrorMessage("");
  setStatus("submitting");

  try {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("country", form.country);
    formData.append("travelDate", form.travelDate);
    formData.append("travelers", form.travelers);
    formData.append("message", form.message);

    const response = await fetch("/api/contact-us", {
      method: "POST",
      body: formData,
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      console.error("Contact API error:", result);

      throw new Error(
        result?.message || "Failed to send message."
      );
    }

    setStatus("success");

    // Optional: clear form after successful submission
    setForm(initialForm);
  } catch (error) {
    console.error("Contact form error:", error);
    setErrorMessage(error instanceof Error ? error.message : "The request could not be sent. Please try again.");
    setStatus("error");
  }
}

  return (
    <section
      id="contact-form"
      className="bg-white py-10 sm:py-14"
      aria-labelledby="contact-planning-title"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* =====================================================
              LEFT: CONTACT FORM
          ===================================================== */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <h2
              id="contact-planning-title"
              className=" text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
            >
              Send Us a Message About Your Morocco Trip
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              Tell us what kind of Morocco trip you are planning. Our local
              team will review your request and help you organize your
              perfect journey.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">

                {/* Full Name */}
                <div className="relative">
                  <label
                    htmlFor="full-name"
                    className="sr-only"
                  >
                    Full Name
                  </label>

                  <UserIcon
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                    aria-hidden="true"
                  />

                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}

                    required
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="sr-only"
                  >
                    Email Address
                  </label>

                  <EnvelopeIcon
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                    aria-hidden="true"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    required
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="sr-only"
                  >
                    Phone or WhatsApp
                  </label>

                  <PhoneIcon
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                    aria-hidden="true"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="Phone / WhatsApp"
                    autoComplete="tel"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>

                {/* Travel Date */}
                <div className="relative">
                  <label
                    htmlFor="travel-date"
                    className="sr-only"
                  >
                    Travel Date
                  </label>

                  <CalendarDaysIcon
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                    aria-hidden="true"
                  />

                  <input
                    id="travel-date"
                    name="travelDate"
                    value={form.travelDate}
                    onChange={(e) => updateForm("travelDate", e.target.value)}
                    type="date"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>

                {/* Travelers */}
                <div className="relative">
                  <label
                    htmlFor="travelers"
                    className="sr-only"
                  >
                    Number of Travelers
                  </label>

                  <UsersIcon
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                    aria-hidden="true"
                  />

                  <input
                    id="travelers"
                    name="travelers"
                    type="number"
                    value={form.travelers}
                    onChange={(e) => updateForm("travelers", e.target.value)}
                    min="1"
                    placeholder="Number of Travelers"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>

                {/* Tour / Destination */}
                <div className="relative">
                  <label
                    htmlFor="country"
                    className="sr-only"
                  >
                   Your Country
                  </label>

                  <MapPinIcon
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600"
                    aria-hidden="true"
                  />

                  <input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={(e) => updateForm("country", e.target.value)}
                    type="text"
                    placeholder="Your Country"
                    className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="relative mt-4">
                <label
                  htmlFor="message"
                  className="sr-only"
                >
                  Your Message
                </label>

                <PencilSquareIcon
                  className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white py-3 pl-12 pr-4 text-base leading-7 text-slate-900 outline-none transition placeholder:text-gray-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"
                />
              </div>

              {/* Submit */}
              <div className="mt-5 flex">
                <button
                  disabled={status === "submitting"}
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <PaperAirplaneIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  {status === "submitting"
                    ? "Sending..."
                    : "Send My Inquiry"}
                  
                </button>

                {status === "success" && (
                  <div
                    role="status"
                    className="mx-5 rounded-xl flex items-center border border-green-500 bg-green-100 px-5 py-2 text-green-800"
                  >
                    We received your message. We will reply soon.
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="mx-5 rounded-xl flex items-center border border-red-500 bg-red-100 px-5 py-2 text-red-800"
                  >
                    <span>{errorMessage || "The message could not be delivered."} You can also email us at <a className="ml-1 font-semibold underline" href="mailto:moorishtour@gmail.com">moorishtour@gmail.com</a>.</span>
                  </div>
                )}
              </div>

              {/* Privacy */}
              <p className="mt-4 text-base leading-6 text-gray-600">
                🔒 We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>

          {/* =====================================================
              RIGHT: HOW CAN WE HELP?
          ===================================================== */}
          <div>
            <h2 className="text-center text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              How Can We Help You Plan Your Morocco Trip?
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {helpOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group block h-full"
                  >
                    <article className="flex h-full min-h-[210px] flex-col items-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-center transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md">

                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center text-amber-700">
                        <Icon
                          className="h-10 w-10"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-base font-bold leading-6 text-slate-900 transition group-hover:text-amber-700">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-base leading-6 text-gray-700">
                        {item.description}
                      </p>

                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}