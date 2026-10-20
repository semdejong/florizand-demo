import type { Metadata } from "next";
import Link from "next/link";
import { company, welcome } from "@/content";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag vrijblijvend een offerte aan bij Hoveniersbedrijf FloriZand. Dave Emke neemt persoonlijk contact op om een afspraak te maken.",
};

const quoteSteps = [
  {
    title: "Formulier",
    text: "U beschrijft kort wat u wilt: het soort werk, de plaats en uw wensen.",
  },
  {
    title: "Afspraak met Dave",
    text: "Dave Emke neemt persoonlijk contact met u op om een afspraak te maken.",
  },
  {
    title: "Gespecificeerde offerte",
    text: "U ontvangt een gespecificeerde offerte. De aanvraag is vrijblijvend.",
  },
];

export default function OffertePage() {
  return (
    <>
      <section className="hero">
        <div className="container narrow">
          <p className="eyebrow">Offerte</p>
          <h1>Vraag vrijblijvend een offerte aan</h1>
          <p className="lede">
            Dave neemt persoonlijk contact met u op om een afspraak te maken.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={company.phoneHref}>
              Bel Dave: {company.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={company.emailHref}>
              Mail {company.email}
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ol className="steps-3">
            {quoteSteps.map((step, index) => (
              <li key={step.title}>
                <span className="step-index">0{index + 1}</span>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>

          <div className="quote-layout">
            <div className="form-card" id="speeltuin">
              <h2>Het formulier</h2>
              <p>
                Voor een gespecificeerde offerte kunt u dit formulier gebruiken, of telefonisch contact
                opnemen met Dave Emke. Hij maakt graag persoonlijk een afspraak.
              </p>
              <QuoteForm />
            </div>
            <aside className="side-card on-pine">
              <h2>Liever direct?</h2>
              <p>Bel of mail Dave. De afspraak plant hij zelf.</p>
              <p>
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
                <br />
                <a href={company.emailHref}>{company.email}</a>
              </p>
              <p>Op afspraak – bel of mail Dave</p>
              <p>
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </p>
              <Link className="text-link" href="/#contact" style={{ color: "var(--green)" }}>
                Alle contactgegevens
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="container narrow">
          <p className="eyebrow">Veelgestelde vragen</p>
          <h2>Over een offerte</h2>
          <div className="faq-list">
            <details className="faq">
              <summary>Wat kost een offerte?</summary>
              <div className="faq-body">
                <p>
                  De aanvraag is vrijblijvend. Dave maakt persoonlijk een afspraak en u ontvangt een
                  gespecificeerde offerte.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>In welke regio werkt u?</summary>
              <div className="faq-body">
                <p>{welcome.area}</p>
              </div>
            </details>
            <details className="faq">
              <summary>Kan ik alleen onderhoud afnemen?</summary>
              <div className="faq-body">
                <p>
                  Ja. Tuinonderhoud is een van de genoemde werkzaamheden en kan los van een nieuwe
                  aanleg.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>Legt u ook kunstgras aan?</summary>
              <div className="faq-body">
                <p>Ja. De aanleg van gazons staat genoemd als gras of kunstgras.</p>
              </div>
            </details>
            <details className="faq">
              <summary>Hoe snel kunt u beginnen?</summary>
              <div className="faq-body">
                <p>Dave bespreekt de planning met u bij de afspraak, afgestemd op de werkzaamheden.</p>
              </div>
            </details>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="text-link" href="/diensten">
              Eerst de werkzaamheden bekijken
            </Link>
            {" · "}
            <Link className="text-link" href="/werkwijze">
              Of de werkwijze
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
