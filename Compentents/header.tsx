"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import MoorishLogo from "@/public/moorishtours3white.png";

type Props = {
  pathname: string;
};

export default function HeaderMain({ pathname }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const lastScrollY = useRef(0);

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tours",
      href: "/tour",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header appearance
      setScrolled(currentScrollY > 50);

      // Show / hide while scrolling
      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 120
      ) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     HEADER STYLES
  ========================================================= */

  const isHomepage = pathname === "/";

  const transparentHeader = isHomepage && !scrolled;
  // Keep the previous brown design on internal pages, but use the same
  // mounted header instance for every page instead of swapping components.
  const innerPage = !isHomepage;

  return (
    <header
      className={`left-0 top-0 z-100 w-full transition-transform duration-300 ${
        isHomepage || scrolled ? "fixed" : "relative"
      } ${
        showNav || mobileMenuOpen
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          innerPage
            ? scrolled
              ? "border-b border-white/10 bg-[#3c281f]/95 shadow-lg backdrop-blur-xl"
              : "border-b border-white/10 bg-[#4a3024]"
            : transparentHeader
              ? "border-b border-white/10 bg-transparent"
              : "border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-18.5 max-w-7xl items-center px-5 sm:px-7 lg:px-10">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link 
            href="/"
            className="shrink-0"
            aria-label="Moorish Tour home"
          >
            {transparentHeader || innerPage ? (
              <Image
                src={MoorishLogo}
                alt="Moorish Tour Morocco"
                width={128}
                height={64}
                priority
                className="h-auto w-29.5 object-contain sm:w-32"
              />
            ) : (
              <div className="px-3 py-1.5">
                <Image
                  src={MoorishLogo.src}
                  alt="Moorish Tour Morocco"
                  width={128}
                  height={64}
                  fetchPriority="high"
                  priority
                  className="h-auto w-27 object-contain sm:w-29.5"
                />
              </div>
            )}
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="ml-auto hidden items-center gap-1 lg:flex  ">

            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(
                    `${item.href}/`
                  ));

              return (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`relative mx-1 px-4 py-2.5 text-sm font-semibold transition ${
                    transparentHeader || innerPage
                      ? active
                        ? "text-amber-300"
                        : "text-white hover:text-amber-300"
                      : active
                        ? "text-amber-600"
                        : "text-slate-800 hover:text-amber-600"
                  }`}
                >
                  {item.name}

                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-amber-700 transition-all duration-300 ${
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* =================================================
                CTA
            ================================================= */}

            <Link 
              href="/plan-your-morocco-tour"
              className={`ml-4 inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition ${
                transparentHeader
                  ? "border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-slate-900"
                  : "bg-amber-700 text-white shadow-sm hover:bg-amber-800"
              }`}
            >
              Plan Your Tour
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(true)
            }
            className={`ml-auto flex h-11 w-11 items-center justify-center rounded-lg transition lg:hidden ${
              transparentHeader || innerPage
                ? "text-white hover:bg-white/10"
                : "text-slate-900 hover:bg-gray-100"
            }`}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-110 backdrop-blur-xl lg:hidden ${innerPage ? "bg-[#3c281f]/95" : "bg-slate-950/95"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile header */}
          <div className="flex h-18.5 items-center justify-between border-b border-white/10 px-5">

            <Link 
              href="/"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              aria-label="Moorish Tour home"
            >
              <Image
                src={MoorishLogo}
                alt="Moorish Tour Morocco"
                width={128}
                height={64}
                className="h-auto w-29.5"
              />
            </Link>

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
          </div>

          {/* Mobile links */}
          <div className={`flex flex-col px-5 py-8 ${innerPage ? "bg-[#3c281f]/95" : "bg-slate-950/95"}`}>

            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(
                    `${item.href}/`
                  ));

              return (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className={`border-b border-white/10 py-5 text-lg font-semibold transition ${
                    active
                      ? "text-amber-400"
                      : "text-white hover:text-amber-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link 
              href="/plan-your-morocco-tour"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="mt-7 inline-flex h-12 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Plan Your Morocco Tour
            </Link>

            {/* Contact */}
            <a
              href="tel:+212628812520"
              className="mt-5 text-center text-base font-medium text-white/80 hover:text-white"
            >
              +212628812520
            </a>
          </div>
        </div>
      )}
    </header>
  );
}