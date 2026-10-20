import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content";
import { stepStory } from "@/siteCopy";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van kennismaking met Dave Emke tot een gespecificeerde offerte en de aanleg van uw tuin.",
};

export default function WerkwijzePage() {
  return (
    <>
      <PageHero
        eyebrow="Werkwijze"
        title="Van kennismaking tot oplevering"
        lede="Vijf stappen, van de eerste afspraak met Dave tot de opgeleverde tuin."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container werk-layout">
          <ol className="process process-rich">
            {stepStory.map((step, index) => (
              <li key={step.title}>
                <p className="chapter-no small">{String(index + 1).padStart(2, "0")}</p>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
                <p>{step.more}</p>
              </li>
            ))}
          </ol>
          <aside className="paper-card">
            <p className="eyebrow">Vast contact</p>
            <h2>{company.person}</h2>
            <p>Hij maakt de afspraak voor een offerte persoonlijk. Er wisselt niemand tussendoor.</p>
            <p>
              <a className="text-link" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
              <br />
              <a className="text-link" href={company.emailHref}>
                {company.email}
              </a>
            </p>
            <Link className="btn btn-primary" href="/offerte-aanvragen">
              Naar het formulier
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
