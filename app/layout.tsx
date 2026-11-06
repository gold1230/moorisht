
import "@/app/globals.css";
import Footer from "@/Compentents/footer";
import HeaderAll from "@/Compentents/headerAll";

import type { Metadata } from "next";
import { connection } from "next/server";
import { headers } from "next/headers";
import { strictCspEnabled } from "@/lib/securityPolicy";

import ScrollToTop from "@/Compentents/ScrollToTop";
import FloatingContactButtons from "@/Compentents/FloatingContactButtons";
import { SOCIAL_PROFILE_URLS } from "@/lib/socialProfiles";


export const metadata: Metadata = {
  metadataBase: new URL("https://moorishtour.com"),

  title: {
    default: "Moorish Tour | Morocco Tours & Desert Adventures",
    template: "%s | Moorish Tour",
  },

  description:
    "Discover Morocco with private tours, Sahara desert adventures, cultural journeys, imperial cities and customized travel experiences.",
};

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });






// Global business identity for every route. Individual tour schemas refer to this @id.
const agencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://moorishtour.com/#organization",
  name: "Moorish Tour",
  url: "https://moorishtour.com/",
  logo: "https://moorishtour.com/moorishtours3white.png",
  description: "Moorish Tour is a Morocco tour operator offering private tours, desert trips, and customized itineraries.",
  telephone: "+212628812520",
  email: "moorishtour@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  areaServed: { "@type": "Country", name: "Morocco" },
  sameAs: SOCIAL_PROFILE_URLS,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Nonce CSP only works with request-time HTML rendering. Do not enable
  // MOORISH_STRICT_CSP for a static deployment or without a performance test.
  if (strictCspEnabled) await connection();
  const nonce = strictCspEnabled ? (await headers()).get("x-nonce") ?? undefined : undefined;

  return (
    <html
      lang="en"
      
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Moorish Tour AI site guide" />
      </head>
      <body id="top">
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(agencySchema).replace(/</g, "\\u003c"),
          }}
        />
     
       <HeaderAll />
     
        {children}

         {/* <Suspense
          fallback={null}
        >
          <VisitorTracker />
        </Suspense>
         <Suspense fallback={null}>
          <WebMCPProvider />
        </Suspense> */}
        <Footer />
     
        <ScrollToTop />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
