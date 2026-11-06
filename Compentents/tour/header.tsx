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

export default function Headertour({
  pathname,
}: Props) {
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

      setScrolled(currentScrollY > 50);

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
     LOCK BODY ON MOBILE MENU
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

  return (
    <header
      className={` left-0 top-0 z-100  w-full transition-transform duration-300 ${
        showNav || mobileMenuOpen
          ? "translate-y-0"
          : "-translate-y-full"
      } ${scrolled? 'fixed' :'relative'}`}
    >
      {/* =====================================================
          DESKTOP / MAIN HEADER
      ===================================================== */}

      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#3c281f]/95 shadow-lg backdrop-blur-xl"
            : "border-b border-white/10 bg-[#4a3024]"
        }`}
      >
        <div className="mx-auto flex h-18.5 max-w-7xl items-center px-5 sm:px-7 lg:px-10">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link prefetch={false}
            href="/"
            className="shrink-0"
            aria-label="Moorish Tour home"
          >
            <Image
              src={MoorishLogo}
              alt="Moorish Tour Morocco"
              width={128}
              height={64}
              priority
              className="h-auto w-[118px] object-contain sm:w-[128px]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="ml-auto hidden items-center gap-1 lg:flex">

            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(
                    `${item.href}/`
                  ));

              return (
                <Link prefetch={false}
                  key={item.name}
                  href={item.href}
                  className={`relative mx-1 px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "text-amber-300"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  {item.name}

                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-amber-400 transition-all duration-300 ${
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Plan Your Tour */}
            <Link prefetch={false}
              href="/plan-your-morocco-tour"
              className="ml-4 inline-flex h-11 items-center justify-center rounded-lg bg-amber-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800"
            >
              Plan Your Tour
            </Link>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(true)
            }
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
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
          className="fixed inset-0 z-110 border-white/10 bg-[#3c281f]/95 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile top bar */}
          <div className="flex h-18.5 items-center justify-between border-b border-white/10 px-5">
            <Link prefetch={false}
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

          {/* Navigation links */}
          <div className="flex flex-col px-5 py-7  border-white/10 bg-[#3c281f]/95">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(
                    `${item.href}/`
                  ));

              return (
                <Link prefetch={false}
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

            {/* CTA */}
            <Link prefetch={false}
              href="/plan-your-morocco-tour"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="mt-7 inline-flex h-12 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Plan Your Morocco Tour
            </Link>

            {/* Phone */}
            <a
              href="tel:+212628812520"
              className="mt-5 text-center text-base font-medium text-white/80 transition hover:text-white"
            >
              +212628812520
            </a>
          </div>
        </div>
      )}
    </header>
  );
}