import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company, services, serviceById } from "@/content";
import { serviceStory } from "@/siteCopy";
import PageHero from "@/components/PageHero";
import PlanRuler from "@/components/PlanRuler";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceById(slug);
  if (!service) return { title: "Dienst" };
  return {
    title: service.title,
    description: service.text,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = services.findIndex((service) => service.id === slug);
  const service = services[index];
  const story = serviceStory[slug];
  if (!service || !story) notFound();

  const previous = services[(index + services.length - 1) % services.length];
  const next = services[(index + 1) % services.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <>
      <PageHero eyebrow={service.group === "nieuw" ? "Nieuwe tuin" : "Bestaande tuin"} title={service.title} lede={service.text} index={number} />
      <div className="container">
        <PlanRuler active={service.id} />
      </div>
      <section className="section">
        <div className="container service-layout">
          <div>
            <div className="illu sheet-photo">
              <Image src={service.image} alt={service.alt} width={1024} height={1024} priority sizes="(min-width: 900px) 640px, 100vw" />
              <span className="illu-label">Illustratie</span>
            </div>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>Bespreekpunten met Dave</h2>
            <p>Deze punten neemt u door met Dave, zodat de offerte past bij uw tuin.</p>
            <ul className="talk-list">
              {story.talk.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="cta-row">
              <Link className="btn btn-primary" href={service.id === "speeltuinen" ? "/offerte-aanvragen#speeltuin" : "/offerte-aanvragen"}>
                Offerte aanvragen
              </Link>
              <a className="btn btn-ghost" href={company.phoneHref}>
                Bel Dave: {company.phoneDisplay}
              </a>
            </div>
          </div>
          <aside className="paper-card">
            <p className="eyebrow">Vast contact</p>
            <h2>{company.person}</h2>
            <p>Dave maakt graag persoonlijk een afspraak. U ontvangt een gespecificeerde offerte. De aanvraag is vrijblijvend.</p>
            <p>
              <a className="text-link" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
              <br />
              <a className="text-link" href={company.emailHref}>
                {company.email}
              </a>
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href={service.id === "speeltuinen" ? "/offerte-aanvragen#speeltuin" : "/offerte-aanvragen"}>
                Offerte aanvragen
              </Link>
            </div>
          </aside>
        </div>
        <div className="container leaf-nav">
          <Link href={`/diensten/${previous.id}`}>
            <span>Vorige dienst</span>
            {previous.title}
          </Link>
          <Link href={`/diensten/${next.id}`}>
            <span>Volgende dienst</span>
            {next.title}
          </Link>
        </div>
      </section>
    </>
  );
}
