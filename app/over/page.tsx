import type { Metadata } from "next";
import Link from "next/link";
import { company, welcome } from "@/content";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Over FloriZand",
  description:
    "Hoveniersbedrijf FloriZand is sinds 2010 gevestigd in 's-Gravenzande. Dave Emke is het vaste contact.",
};

export default function OverPage() {
  return (
    <>
      <PageHero
        eyebrow="Over FloriZand"
        title={welcome.title}
        lede={welcome.lead}
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-grid">
          <article className="letter">
            <p>{welcome.approach}</p>
            <blockquote className="pull">
              <p>Jong, dynamisch en betrouwbaar.</p>
              <footer>Uit de welkomsttekst van FloriZand, niet een keurmerk dat elders is verdiend.</footer>
            </blockquote>
            <p>{welcome.area}</p>
            <p>
              Gevestigd in {company.city}, sinds {company.since}. Dichtbij voor het Westland, en werkzaam
              in de rest van Zuid-Holland — waaronder de regio Den Haag en Rotterdam. Er is geen kaart met
              spelden en geen lijst van wijken. Alleen die zin.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Contact en route
              </Link>
              <Link className="btn btn-ghost" href="/diensten">
                Naar de werkzaamheden
              </Link>
            </div>
          </article>
          <aside className="dave-card">
            <p className="eyebrow">Eén naam</p>
            <h2>{company.person}</h2>
            <p>
              Dave plant de afspraak voor een offerte persoonlijk. Van het eerste gesprek tot de tuin die
              wordt opgeleverd is hij het aanspreekpunt. Geen wisselend team op deze site, omdat daar geen
              namen voor bekend zijn.
            </p>
            <p>
              <a className="text-link" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
              <br />
              <a className="text-link" href={company.emailHref}>
                {company.email}
              </a>
            </p>
            <p className="logo-tag">{company.tagline}</p>
          </aside>
        </div>
        <div className="container marks">
          <article>
            <p className="chapter-no small">01</p>
            <h2>Ontwerp</h2>
            <p>Eerst de tuin in beeld, in overleg.</p>
          </article>
          <article>
            <p className="chapter-no small">02</p>
            <h2>Aanleg</h2>
            <p>Daarna het maken, in dezelfde hand.</p>
          </article>
          <article>
            <p className="chapter-no small">03</p>
            <h2>Onderhoud</h2>
            <p>Of een bestaande tuin bijhouden of vernieuwen.</p>
          </article>
        </div>
      </section>
    </>
  );
}
