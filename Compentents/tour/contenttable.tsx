"use client";

import { useEffect, useState } from "react";


const tabs = [
  {
    id: "overview",
    label: "Overview",
  
  },
   {
    id: "highlights",
    label: "Highlights",
  },
  {
    id: "itinerary",
    label: "Itinerary",
  },
  {
    id: "tourPrice",
    label: "Tour Price",
  },

  {
    id: "included",
    label: "Included",
  },
  {
    id: "info",
    label: "What to Bring",
  },
  {
    id: "map",
    label: "Map",
  },
   {
    id: "faqs",
    label: "FAQs",
  }
  
  
];

export default function TourNavigation() {
  const [active, setActive] = useState("overview");
  const [lastScrollY, setLastScrollY] = useState(0);
const [showNav, setShowNav] = useState(true);


 useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

    

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };


    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, [lastScrollY]);


useEffect(() => {
  const handleActiveSection = () => {
    const offset = 120;

    let currentSection = "overview";

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);

      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= offset) {
        currentSection = tab.id;
      }
    });

    // IMPORTANT:
    // If we reach the bottom of the page,
    // make FAQs active.
    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    if (reachedBottom) {
      currentSection = "faqs";
    }

    setActive(currentSection);

    
  };

  window.addEventListener(
    "scroll",
    handleActiveSection,
    { passive: true }
  );

  handleActiveSection();

  return () => {
    window.removeEventListener(
      "scroll",
      handleActiveSection
    );
  };
}, []);

 const scrollTo = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  setActive(id);

  const headerOffset = 100;

  const sectionTop =
    section.getBoundingClientRect().top +
    window.scrollY;

  window.scrollTo({
    top: sectionTop - headerOffset,
    behavior: "smooth",
  });
};
  

  return (
    <div className={`sticky top-0 bg-white z-100 border-b border-neutral-200 transition-transform duration-300 ${showNav? " top-10 translate-y-10 " : " translate-y-0 top-0 "}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap sm:justify-start justify-center items-center gap-2 p-4 overflow-x-auto">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`relative whitespace-nowrap md:px-8 px-5 md:py-3 py-2 text-[15px]  font-semibold rounded-3xl cursor-pointer transition

              ${
                active === tab.id
                  ? "text-white bg-amber-700"
                  : "bg-neutral-100 text-neutral-700 hover:text-[#92500d]"
              }`}
            >
              {tab.label}

              {/* {active === tab.id && (
                <span className="absolute bottom-0 left-0 h-0.75 w-full rounded-full bg-[#D89A2B]" />
              )} */}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}