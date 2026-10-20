import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sfeer } from "@/content";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Plek voor foto's van uitgevoerde tuinen van FloriZand. De beelden die er nu staan zijn sfeerbeelden, geen projecten.",
};

const frames = [
  "Voortuin",
  "Achtertuin",
  "Terras en pad",
  "Groen en water",
  "Houtwerk",
  "Na de oplevering",
];

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        eyebrow="Projecten"
        title="Het album wacht op echte tuinen"
        lede="Binnenkort foto's van onze eigen projecten. De oude pagina Foto's haalde beelden uit een album dat niet meer bereikbaar is. Hier komt het werk van Dave, niet een voorraad sfeerfoto's."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="album" aria-label="Gereserveerd voor projectfoto's van FloriZand">
            {frames.map((label, index) => (
              <div key={label} className="slot album-frame">
                <p className="chapter-no small">{String(index + 1).padStart(2, "0")}</p>
                <strong>{label}</strong>
                Nog geen projectfoto. Dit vlak blijft leeg tot FloriZand een eigen beeld aanlevert.
              </div>
            ))}
          </div>
          <div className="paper-card" style={{ marginTop: "1.5rem" }}>
            <h2>Eigen foto&apos;s horen hier</h2>
            <p>
              Eigen foto&apos;s — vaak gewoon vanaf de telefoon, van een tuin die u zelf hebt aangelegd —
              horen in deze lijst. Zolang ze er niet zijn, vullen we de plek niet met andermans tuinen.
            </p>
            <Link className="btn btn-ghost" href="/contact">
              Foto&apos;s later mailen
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Apart gehouden</p>
          <h2>Sfeerbeelden, geen portfolio</h2>
          <p className="lede">
            Deze vijf beelden stonden al op de huidige site. De herkomst is niet bevestigd. Ze blijven
            zichtbaar als sfeer, met een bijschrift dat zegt wat ze niet zijn.
          </p>
          <div className="sfeer-grid">
            {sfeer.map((image) => (
              <figure key={image.src} className="sfeer">
                <div className="illu">
                  <Image src={image.src} alt={image.alt} width={960} height={340} sizes="(min-width: 800px) 50vw, 100vw" />
                  <span className="sfeer-flag">Sfeerbeeld</span>
                </div>
                <figcaption>{image.caption}. Geen project van FloriZand.</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
