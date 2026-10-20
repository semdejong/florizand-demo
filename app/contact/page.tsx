import type { Metadata } from "next";
import Link from "next/link";
import { company, welcome } from "@/content";
import ClientNote from "@/components/ClientNote";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bel of mail Dave Emke van Hoveniersbedrijf FloriZand, Vestdijklaan 28 in 's-Gravenzande. Op afspraak.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Op afspraak, via Dave"
        lede={welcome.appointment}
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <div className="phone-hero">
            <p className="eyebrow">Bel Dave</p>
            <a className="phone-hero-number" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
            <p>{welcome.contactIntro}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={company.phoneHref}>
                Bel nu
              </a>
              <a className="btn btn-ghost" href={company.emailHref}>
                {company.email}
              </a>
            </div>
          </div>
          <address className="paper-card address-card">
            <p className="eyebrow">Adres</p>
            <h2>
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </h2>
            <p>Op afspraak – bel of mail Dave</p>
            <a className="btn btn-pine" href={company.mapsHref} target="_blank" rel="noopener noreferrer">
              Route plannen
            </a>
            <ClientNote>
              Openingstijden zijn nergens gepubliceerd. Tot FloriZand ze aanlevert, blijft het bij een
              afspraak.
            </ClientNote>
          </address>
        </div>
        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="paths">
            <Link className="path-card path-new" href="/offerte-aanvragen">
              <p className="eyebrow">Schriftelijk</p>
              <h2>Vraag vrijblijvend een offerte aan</h2>
              <p>Het formulier opent een e-mail naar {company.email}. Er wordt niets opgeslagen.</p>
              <span className="path-go">Naar het formulier</span>
            </Link>
            <Link className="path-card path-care" href="/werkwijze">
              <p className="eyebrow">Eerst lezen</p>
              <h2>Hoe een afspraak verloopt</h2>
              <p>Kennismaking, ontwerp, gespecificeerde offerte, aanleg, en eventueel onderhoud.</p>
              <span className="path-go">Naar de werkwijze</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
