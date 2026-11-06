

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MoorishLogo from "@/public/moorishtours3white.png";

type Props = {
  pathname: string;
};

export default function Navbar({ pathname }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tour/4-days-tour-from-marrakech-to-merzouga" },
    { name: "About us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];


// useEffect(() => {
//     const handleMouseOver = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       target.style.outline = "2px solid oklch(66.6% 0.179 58.318)";
//     };

//     const handleMouseOut = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       target.style.outline = "";
//     };

//     document.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       document.removeEventListener(
//         "mouseover",
//         handleMouseOver
//       );
//       document.removeEventListener(
//         "mouseout",
//         handleMouseOut
//       );
//     };
//   }, []);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

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


  return (

    <header
      className={`${pathname === "/" ? "fixed": "relative"}
       top-0 left-0 z-50 w-full transition-transform duration-300
      ${showNav ? " fixed translate-y-0 " : "-translate-y-full "}
      `}
    >
        

      <nav
        className={`
        flex items-center grid-cols-3 p-3 lg:px-8
        transition-all duration-300

        ${
          pathname !== "/" || scrolled
          ?
          " bg-black/30 backdrop-blur-md border-b border-white/10"
          :
          "  bg-transparent"
        }

        `}
      >


        {/* Logo */}

        <Link href="/" className="flex items-center flex-1 ">

          <span className="sr-only">
            Moorish Tour
          </span>


          <Image
            src={MoorishLogo}
            alt="Moorish Tour Morocco"
            width={128}
            height={64}
            quality={70}
            priority
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
             sizes="
            (max-width: 640px) 96px,
            (max-width: 1024px) 112px,
            128px
              "
            
          />

        </Link>



        {/* Desktop menu */}

        <div
          className="
          hidden lg:flex
          gap-x-10
          items-center flex-2
          
          "
        >

          {navigation.map((item)=>(

            <Link
              key={item.name}
              href={item.href}
              className={`
              text-sm font-semibold
              transition

              ${
                pathname === item.href
                ?
                "text-amber-400"
                :
                "text-white hover:text-amber-300"
              }

              `}
            >

              {item.name}

            </Link>

          ))}


        </div>




        {/* Mobile button */}

        <button

          onClick={()=>setMobileMenuOpen(true)}

          className="
          lg:hidden
          text-white
          text-3xl
          "

          aria-label="Open menu"

        >

          <Bars3Icon className="size-8"/>

        </button>



      </nav>



      {/* Mobile menu */}

      {mobileMenuOpen && (

        <div
          className="
          fixed inset-0
          z-50
          bg-black/90
          backdrop-blur-md
          lg:hidden
          "
        >


          <div
            className="
            flex
            justify-between
            items-center
            p-3
            "
          >


            <Image
              src={MoorishLogo}
              alt="Moorish Tour"
              width={128}
              height={64}
              
            
            />


            <button

              onClick={()=>setMobileMenuOpen(false)}

              className="
              text-white
              text-3xl
              "

              aria-label="Close menu"

            >

              <XMarkIcon className="size-8"/>

            </button>


          </div>



          <div
            className="
            flex flex-col
            gap-6
            px-6
            py-8
             bg-black/90
            "
          >

            {navigation.map((item)=>(

              <Link

                key={item.name}

                href={item.href}

                onClick={()=>setMobileMenuOpen(false)}

                className="
                text-white
                text-lg
                font-semibold
                hover:text-amber-400
                "

              >

                {item.name}

              </Link>

            ))}


          </div>


        </div>

      )}



    </header>

  );
}