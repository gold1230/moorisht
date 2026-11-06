"use client"
import DestinationsInterests from "./destinationInterest"
import PlanTourHero from "./heroPlan"
import NeedHelp from "./needHelp"
import TourPreferences from "./tourStyle"
import TripBasics from "./tripbasic"
import UploadReference from "./uploadPrefer"
import WhyPlanWithUs from "./whyPlanWithus"
import TripSummary from "./yourtripsummary"

import { useMemo, useState } from "react";
import {
  CheckCircleIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";


type TourPlannerData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  travelDate: string;
  travelers: string;
  dreamTrip: string;

  destinations: string[];
  mustSee: string;
  interests: string[];

  travelStyle: string;
  accommodation: string;
  tourPace: string;
  specialRequests: string;

  files: File[];
};

const initialForm: TourPlannerData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  travelDate: "",
  travelers: "",
  dreamTrip: "",

  destinations: [],
  mustSee: "",
  interests: [],

  travelStyle: "Private Tour",
  accommodation: "Mixed",
  tourPace: "Balanced",
  specialRequests: "",

  files: [],
};


export default function PlanYourMoroccoTourPage() {

      const [form, setForm] = useState<TourPlannerData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateForm = <K extends keyof TourPlannerData>(
    field: K,
    value: TourPlannerData[K]
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

   const step1Complete = useMemo(() => {
    return Boolean(
      form.name.trim() &&
        form.email.trim() &&
        form.phone.trim() &&
        form.country.trim() &&
        form.travelDate.trim() &&
        form.travelers.trim() &&
        form.dreamTrip.trim()
    );
  }, [form]);

  const step2Complete = useMemo(() => {
    return (
      form.destinations.length > 0 ||
      form.mustSee.trim().length > 0 ||
      form.interests.length > 0
    );
  }, [form]);


  const step3Complete = useMemo(() => {
    return Boolean(
      form.travelStyle &&
        form.accommodation &&
        form.tourPace
    );
  }, [form]);

  const step4Complete = form.files.length > 0;

  /*
   * PROGRESS
   */

  const completedSteps = [
    step1Complete,
    step2Complete,
    step3Complete,
    step4Complete,
  ].filter(Boolean).length;

  const progress = Math.round((completedSteps / 4) * 100);

  /*
   * SUBMIT
   */

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("country", form.country);
      formData.append("travelDate", form.travelDate);
      formData.append("travelers", form.travelers);
      formData.append("dreamTrip", form.dreamTrip);

      formData.append(
        "destinations",
        JSON.stringify(form.destinations)
      );

      formData.append("mustSee", form.mustSee);

      formData.append(
        "interests",
        JSON.stringify(form.interests)
      );

      formData.append("travelStyle", form.travelStyle);
      formData.append("accommodation", form.accommodation);
      formData.append("tourPace", form.tourPace);
      formData.append(
        "specialRequests",
        form.specialRequests
      );

      form.files.forEach((file) => {
        formData.append("referenceFiles", file);
      });

      /*
       * Change this to your real API endpoint.
       */
     const response = await fetch("/api/tour-planner", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("Tour planner API error:", data);

          throw new Error(
            data?.details ||
            data?.message ||
            "Failed to send tour request."
          );
        }

        setSubmitted(true);
    }  catch (error) {
  console.error("Submit error:", error);

  alert(
    error instanceof Error
      ? error.message
      : "We could not send your request. Please try again."
  );
}finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) { return (
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <CheckCircleIcon
          className="mx-auto h-16 w-16 text-amber-700"
          aria-hidden="true"
        />

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Your Morocco Tour Request Has Been Sent
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-700">
          Thank you for sharing your travel plans with us.
          Our Morocco travel team will review your request and
          contact you with your personalized itinerary.
        </p>
      </section>
    );
  }


    return(
        <>
        <PlanTourHero />

        <section
      id="tour-planner"
      className="bg-white py-10 sm:py-12"
    >
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">

        {/* ================================
            PROGRESS
        ================================= */}
        <div className="lg:sticky lg:top-3 lg:self-start mb-8 z-100 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-base font-bold text-slate-900">
                Plan Your Morocco Tour
              </p>

              <p className="mt-1 text-base text-gray-600">
                Step {Math.min(completedSteps + 1, 4)} of 4
              </p>
            </div>

            <div className="text-base font-semibold text-amber-700">
              {progress}% complete
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-amber-700 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                number: 1,
                label: "Trip Basics",
                complete: step1Complete,
              },
              {
                number: 2,
                label: "Destinations & Interests",
                complete: step2Complete,
              },
              {
                number: 3,
                label: "Tour Preferences",
                complete: step3Complete,
              },
              {
                number: 4,
                label: "Upload Reference",
                complete: step4Complete,
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-2"
              >
                {step.complete ? (<>
                  <CheckCircleIcon
                    className="h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium text-amber-700">
                  {step.label}
                </span>
                </>
                ) : (<>
                  <CircleStackIcon
                    className="h-5 w-5 shrink-0 text-gray-600"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium text-slate-800">
                  {step.label}
                </span>
                </>
                )}

                
              </div>
            ))}
          </div>
        </div>

        {/* ================================
            MAIN LAYOUT
        ================================= */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* ==================================
              LEFT FORM
          ================================= */}
          <form
            onSubmit={handleSubmit}
            className="min-w-0 space-y-5"
          >

            <div
                className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            <TripBasics
              value={form}
              onChange={updateForm}
            />

            <DestinationsInterests
              value={form}
              onChange={updateForm}
            />

            <TourPreferences
              value={form}
              onChange={updateForm}
            />

            <UploadReference
              value={form}
              onChange={updateForm}
            />

            {/* Final submit */}
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">

              <div>
                <p className="text-base font-semibold text-slate-900">
                  Ready to send your Morocco tour plan?
                </p>

                <p className="mt-1 text-base text-gray-600">
                  Our local team will review your request and
                  create a personalized itinerary.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <PaperAirplaneIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />

                {isSubmitting
                  ? "Sending..."
                  : "Send My Tour Plan"}
              </button>

            </div>
          </form>

          {/* ==================================
              SIDEBAR
          ================================= */}
          <aside className="space-y-5 lg:sticky lg:top-40 lg:self-start">

            <TripSummary
              destinations={form.destinations}
              travelDates={form.travelDate}
              travelers={form.travelers}
              interests={form.interests}
              travelStyle={form.travelStyle}
            />

            <WhyPlanWithUs />

            <NeedHelp />

          </aside>

        </div>
      </div>
    </section>

        </>   
         
        )
}