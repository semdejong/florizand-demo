import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { company } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hoveniersbedrijf FloriZand | Tuinontwerp, aanleg en onderhoud",
    template: "%s | FloriZand",
  },
  description:
    "Hoveniersbedrijf FloriZand, voor uw tuinontwerp, aanleg en onderhoud. Sinds 2010 gevestigd in 's-Gravenzande, werkzaam in het Westland en geheel Zuid-Holland.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = { themeColor: "#f3eee4" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: company.name,
  telephone: "+31641222325",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressCountry: "NL",
  },
  areaServed: ["Westland", "Zuid-Holland"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31641222325",
    email: company.email,
    contactType: "customer service",
    name: company.person,
    availableLanguage: "Dutch",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://sleads-demo-analytics.vercel.app/t.js"
          data-demo="florizand-demo"
          data-endpoint="https://basic-tiger-117.convex.site/track"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a className="skip" href="#inhoud">
          Naar de inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileBar />
        <SleadsBadge />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
