import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, welcome } from "@/content";
import PageHero from "@/components/PageHero";
import PlanRuler from "@/components/PlanRuler";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "De negen werkzaamheden van Hoveniersbedrijf FloriZand: van tuinontwerp en aanleg tot onderhoud en renovatie.",
};

const nieuw = services.filter((service) => service.group === "nieuw");
const onderhoud = services.filter((service) => service.group === "onderhoud");

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title="Negen bladen, twee routes"
        lede="Onze werkzaamheden omvatten de meest uiteenlopende terreinen. Hier staan ze uit elkaar, als een legenda bij een tuinplan, zodat u de route kiest die bij uw tuin past."
      />
      <div className="container">
        <PlanRuler />
      </div>
      <section className="section" id="nieuwe-tuin">
        <div className="container">
          <p className="eyebrow">Route 1</p>
          <h2>Nieuwe tuin: ontwerp en aanleg</h2>
          <p className="lede">
            Van het eerste ontwerp tot bestrating, vijver, gazon, speeltuin of vlonder. Ontwerp en
            uitvoering blijven bij dezelfde persoon.
          </p>
          <ul className="card-grid three sheet-list">
            {nieuw.map((service, index) => (
              <li key={service.id} className="card">
                <Link href={`/diensten/${service.id}`} className="card-link">
                  <div className="illu">
                    <Image src={service.image} alt={service.alt} width={1024} height={1024} sizes="(min-width: 1024px) 340px, 100vw" />
                    <span className="illu-label">Illustratie</span>
                  </div>
                  <div className="card-body">
                    <p className="chapter-no small">{String(index + 1).padStart(2, "0")}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="path-go">Open dit blad</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section" id="onderhoud" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Route 2</p>
          <h2>Onderhoud en renovatie</h2>
          <p className="lede">
            Een bestaande tuin laten bijhouden of vernieuwen, zonder dat er een volledig nieuwe tuin
            ontworpen hoeft te worden.
          </p>
          <ul className="card-grid sheet-list">
            {onderhoud.map((service, index) => (
              <li key={service.id} className="card">
                <Link href={`/diensten/${service.id}`} className="card-link">
                  <div className="illu">
                    <Image src={service.image} alt={service.alt} width={1024} height={1024} sizes="(min-width: 800px) 50vw, 100vw" />
                    <span className="illu-label">Illustratie</span>
                  </div>
                  <div className="card-body">
                    <p className="chapter-no small">{String(nieuw.length + index + 1).padStart(2, "0")}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="path-go">Open dit blad</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="lede" style={{ marginTop: "2rem" }}>
            {welcome.approach}
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/offerte-aanvragen">
              Offerte aanvragen
            </Link>
            <Link className="btn btn-ghost" href="/werkwijze">
              Bekijk de werkwijze
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
