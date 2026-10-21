import Image from "next/image";
import Link from "next/link";
import { company, services, sfeer, steps, welcome } from "@/content";
import Contour from "@/components/Contour";
import GardenGallery, { GardenCta } from "@/components/GardenGallery";

const nieuw = services.filter((service) => service.group === "nieuw");
const onderhoud = services.filter((service) => service.group === "onderhoud");

export default function HomeMain() {
  return (
    <>
      <section data-section="hero" className="hero">
        <Contour className="hero-contour" />
        <div className="container hero-copy">
          <p className="eyebrow">
            Hoveniersbedrijf in <span className="nowrap">{company.city}</span>
          </p>
          <h1>Tuinontwerp, aanleg en onderhoud in het Westland</h1>
          <p className="lede">
            Sinds {company.since} gevestigd in {company.city}. Ontwerp en aanleg in één hand, met{" "}
            {company.person} als vast contact van de eerste afspraak tot de opgeleverde tuin.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={company.phoneHref}>
              Bel Dave: {company.phoneDisplay}
            </a>
            <Link className="btn btn-ghost" data-cta="offerte" href="/offerte-aanvragen">
              Offerte aanvragen
            </Link>
          </div>
        </div>
        <div className="container">
          <figure className="hero-figure">
            <Image
              src={sfeer[0].src}
              alt={sfeer[0].alt}
              width={960}
              height={340}
              priority
              sizes="(min-width: 1120px) 1120px, 100vw"
            />
            <figcaption className="sfeer-flag">Sfeerbeeld</figcaption>
          </figure>
        </div>
      </section>

      <section data-section="routes" className="section" aria-labelledby="routes-title">
        <div className="container">
          <div className="section-head">
            <Contour className="section-contour" />
            <p className="eyebrow">Twee routes</p>
            <h2 id="routes-title">Wat zoekt u?</h2>
            <p className="lede">
              Een nieuwe tuin en een bestaande tuin zijn twee verschillende vragen. Kies de route die
              bij u past.
            </p>
          </div>
          <div className="paths">
            <Link className="path-card path-new" href="/diensten#nieuwe-tuin">
              <p className="eyebrow">Route 1</p>
              <h2>Nieuwe tuin laten ontwerpen en aanleggen</h2>
              <p>
                Van het eerste ontwerp tot bestrating, vijver, gazon, speeltuin of vlonder. Ontwerp en
                uitvoering blijven bij dezelfde persoon: {company.person}.
              </p>
              <span className="path-go">Naar ontwerp en aanleg</span>
            </Link>
            <Link className="path-card path-care" href="/diensten#onderhoud">
              <p className="eyebrow">Route 2</p>
              <h2>Tuinonderhoud en renovatie</h2>
              <p>
                Een bestaande tuin laten bijhouden of vernieuwen, zonder dat er een volledig nieuwe
                tuin ontworpen hoeft te worden.
              </p>
              <span className="path-go">Naar onderhoud en renovatie</span>
            </Link>
          </div>
        </div>
      </section>

      <section data-section="diensten" className="section" id="diensten" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <Contour className="section-contour" />
            <p className="eyebrow">Diensten</p>
            <h2>Negen werkzaamheden</h2>
            <p className="lede">
              Onze werkzaamheden omvatten de meest uiteenlopende terreinen. Elk onderdeel heeft een eigen
              pagina.
            </p>
            <p>
              <Link className="text-link" href="/diensten">
                Bekijk alle werkzaamheden
              </Link>
            </p>
          </div>

          <div id="nieuwe-tuin">
            <h3 className="group-title">Nieuwe tuin: ontwerp en aanleg</h3>
            <ul className="card-grid three">
              {nieuw.map((service) => (
                <li key={service.id} className="card reveal">
                  <div className="illu">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={1024}
                      height={1024}
                      sizes="(min-width: 1024px) 340px, (min-width: 700px) 45vw, 100vw"
                    />
                    <span className="illu-label">Illustratie</span>
                  </div>
                  <div className="card-body">
                    <h4>
                      <Link href={`/diensten/${service.id}`}>{service.title}</Link>
                    </h4>
                    <p>{service.text}</p>
                    <Link className="text-link" href={`/diensten/${service.id}`}>
                      Meer over deze dienst
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="onderhoud">
            <h3 className="group-title">Onderhoud en renovatie</h3>
            <ul className="card-grid">
              {onderhoud.map((service) => (
                <li key={service.id} className="card reveal">
                  <div className="illu">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={1024}
                      height={1024}
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                    <span className="illu-label">Illustratie</span>
                  </div>
                  <div className="card-body">
                    <h4>
                      <Link href={`/diensten/${service.id}`}>{service.title}</Link>
                    </h4>
                    <p>{service.text}</p>
                    <Link className="text-link" href={`/diensten/${service.id}`}>
                      Meer over deze dienst
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section data-section="speeltuinen" className="section" id="speeltuinen" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="play reveal">
            <div className="illu">
              <Image
                src="/illustraties/ill-speeltuin.jpg"
                alt="Illustratie van een tuin met een houten klimrek en een zandbak."
                width={1024}
                height={1024}
                sizes="(min-width: 860px) 480px, 100vw"
              />
              <span className="illu-label">Illustratie</span>
            </div>
            <div className="play-copy">
              <p className="eyebrow">Specialisme</p>
              <h2>Kindvriendelijke (speel)tuinen</h2>
              <p>
                De aanleg van kindvriendelijke (speel)tuinen staat bij FloriZand als eigen werkzaamheid,
                naast het gewone tuinontwerp. Voor gezinnen in het Westland die een tuin willen waarin
                gespeeld kan worden, is dat een aparte route.
              </p>
              <p>
                Dat past ook bij een tuin rond een nieuwbouwwoning, waar de buitenruimte vaak nog moet
                worden ingericht. U bespreekt de wensen met Dave; ze komen terug in het ontwerp en in de
                gespecificeerde offerte.
              </p>
              <div className="cta-row">
                <Link className="btn btn-primary" data-cta="offerte" href="/offerte-aanvragen#speeltuin">
                  Bespreek een speeltuin
                </Link>
                <a className="btn btn-ghost" href={company.phoneHref}>
                  Bel Dave
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section data-section="werkwijze" className="section" id="werkwijze">
        <div className="container">
          <div className="section-head">
            <Contour className="section-contour" />
            <p className="eyebrow">Werkwijze</p>
            <h2>Van kennismaking tot oplevering</h2>
            <p className="lede">
              Zo loopt een traject, van de eerste afspraak met Dave tot de opgeleverde tuin.
            </p>
          </div>
          <ol className="process">
            {steps.map((step, index) => (
              <li key={step.title} className="reveal">
                <p className="eyebrow">Stap {index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: "1.25rem" }}>
            <Link className="text-link" href="/werkwijze">
              Lees de vijf stappen op een eigen pagina
            </Link>
          </p>
        </div>
      </section>

      <section data-section="projecten" className="section" id="projecten" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <Contour className="section-contour" />
            <p className="eyebrow">Projecten</p>
            <h2>Uw tuin, van plan tot oplevering</h2>
            <p className="lede">
              Ontwerp, bestrating, water, gazon, hout en onderhoud. Van het eerste plan tot de tuin die
              wordt opgeleverd, met {company.person} als vast contact.
            </p>
          </div>
          <GardenGallery variant="mosaic" />
          <GardenCta />
          <p>
            <Link className="text-link" href="/projecten">
              Tuinen in beeld
            </Link>
          </p>
        </div>
      </section>

      <section data-section="over" className="section" id="over">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Over FloriZand</p>
            <h2>{welcome.title}</h2>
            <p>{welcome.lead}</p>
            <p>{welcome.approach}</p>
            <blockquote className="pull">
              <p>Jong, dynamisch en betrouwbaar.</p>
              <footer>Uit de welkomsttekst van FloriZand</footer>
            </blockquote>
            <p>
              <Link className="text-link" href="/over">
                Lees het verhaal van FloriZand
              </Link>
            </p>
          </div>
          <aside className="dave-card">
            <p className="eyebrow">Vast contact</p>
            <h3>{company.person}</h3>
            <p>
              Dave plant de afspraak voor een offerte persoonlijk. Hij is het aanspreekpunt, van het
              eerste gesprek tot de tuin die wordt opgeleverd.
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
          </aside>
        </div>
      </section>

      <section data-section="werkgebied" className="section area" id="werkgebied">
        <div className="container">
          <p className="eyebrow">Werkgebied</p>
          <h2>Vanuit {company.city}</h2>
          <blockquote>{welcome.area}</blockquote>
          <p className="area-note">Sinds {company.since} gevestigd in het Westland.</p>
        </div>
      </section>

      <section data-section="offerte" className="section band" id="offerte">
        <Contour className="band-contour" />
        <div className="container on-pine" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ color: "var(--green)" }}>
            Offerte
          </p>
          <h2>Vraag vrijblijvend een offerte aan</h2>
          <p style={{ maxWidth: "38rem" }}>
            Dave neemt persoonlijk contact met u op om een afspraak te maken.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" data-cta="offerte" href="/offerte-aanvragen">
              Naar het formulier
            </Link>
            <a className="btn btn-ghost" href={company.phoneHref}>
              Bel Dave: {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section data-section="contact" className="section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact en route</p>
            <h2>Op afspraak</h2>
            <p>{welcome.appointment}</p>
            <p>{welcome.contactIntro}</p>
            <ul className="contact-list">
              <li>
                {company.name}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </li>
              <li>
                Telefoon:{" "}
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
              </li>
              <li>
                E-mail: <a href={company.emailHref}>{company.email}</a>
              </li>
              <li>Op afspraak – bel of mail Dave</li>
            </ul>
            <div className="cta-row">
              <a className="btn btn-primary" href={company.phoneHref}>
                Bel Dave
              </a>
              <a className="btn btn-ghost" href={company.emailHref}>
                Mail Dave
              </a>
              <a className="btn btn-ghost" href={company.mapsHref} target="_blank" rel="noopener noreferrer">
                Route plannen
              </a>
            </div>
          </div>
          <aside className="paper-card">
            <h3>Liever een formulier?</h3>
            <p>De aanvraag is vrijblijvend. Dave maakt daarna persoonlijk een afspraak.</p>
            <Link className="btn btn-pine" data-cta="offerte" href="/offerte-aanvragen">
              Offerte aanvragen
            </Link>
          </aside>
        </div>
      </section>

      <section data-section="faq" className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="container narrow">
          <p className="eyebrow">Goed om te weten</p>
          <h2>Veelgestelde vragen</h2>
          <div className="faq-list">
            <details className="faq">
              <summary>In welk gebied werkt u?</summary>
              <div className="faq-body">
                <p>{welcome.area}</p>
                <p>
                  Het bedrijf is gevestigd in {company.city}. De werkzaamheden beperken zich niet tot het
                  Westland.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>Hoe vraag ik een offerte aan?</summary>
              <div className="faq-body">
                <p>
                  Telefonisch via {company.person}, via {company.email}, of met het formulier op deze
                  site. Dave maakt graag persoonlijk een afspraak. De aanvraag is vrijblijvend.
                </p>
                <p>
                  <Link className="text-link" data-cta="offerte" href="/offerte-aanvragen">
                    Naar het offerteformulier
                  </Link>
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>Doet u ook onderhoud?</summary>
              <div className="faq-body">
                <p>
                  Ja. Tuinonderhoud staat op de lijst van werkzaamheden, ook los van een nieuwe aanleg.
                  Tuinrenovatie staat er apart bij, voor een bestaande tuin die vernieuwd wordt.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>Legt u gras of kunstgras aan?</summary>
              <div className="faq-body">
                <p>
                  Beide. Bij de werkzaamheden staat de aanleg van gazons genoemd, van gras of van
                  kunstgras.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
