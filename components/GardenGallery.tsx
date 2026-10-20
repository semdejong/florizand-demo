import Image from "next/image";
import Link from "next/link";
import { company, gardenChapters, type GardenShot } from "@/content";

function Shot({ shot, sizes }: { shot: GardenShot; sizes: string }) {
  return (
    <figure className={`garden-frame${shot.kind === "sfeer" ? " is-sfeer" : ""}`}>
      <Image src={shot.src} alt={shot.alt} width={960} height={720} sizes={sizes} />
      <span className={shot.kind === "sfeer" ? "sfeer-flag" : "illu-label"}>
        {shot.kind === "sfeer" ? "Sfeerbeeld" : "Illustratie"}
      </span>
    </figure>
  );
}

export function GardenCta() {
  return (
    <aside className="garden-cta">
      <p>Benieuwd naar voorbeelden van eerder werk? Vraag ernaar bij de kennismaking met Dave.</p>
      <div className="cta-row">
        <a className="btn btn-primary" href={company.phoneHref}>
          Bel Dave: {company.phoneDisplay}
        </a>
        <Link className="btn btn-ghost" href="/contact">
          Kennismaken
        </Link>
      </div>
    </aside>
  );
}

export default function GardenGallery({ variant }: { variant: "mosaic" | "editorial" }) {
  if (variant === "mosaic") {
    return (
      <ul className="work-mosaic">
        {gardenChapters.map((chapter) => {
          const shot = chapter.shots[0];
          return (
            <li key={chapter.id}>
              <Link className="mosaic-tile" href={chapter.href}>
                <span className="mosaic-media">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={960}
                    height={720}
                    sizes="(min-width: 900px) 360px, 50vw"
                  />
                  <span className={shot.kind === "sfeer" ? "sfeer-flag" : "illu-label"}>
                    {shot.kind === "sfeer" ? "Sfeerbeeld" : "Illustratie"}
                  </span>
                </span>
                <span className="mosaic-caption">
                  <strong>{chapter.title}</strong>
                  <span>{chapter.summary}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="garden-chapters">
      {gardenChapters.map((chapter, index) => (
        <article key={chapter.id} className="garden-chapter">
          <div className="garden-copy">
            <p className="chapter-no small">{String(index + 1).padStart(2, "0")}</p>
            <h2>{chapter.title}</h2>
            <p>{chapter.text}</p>
            <ul className="garden-links">
              {chapter.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`garden-media count-${Math.min(chapter.shots.length, 4)}`}>
            {chapter.shots.map((shot) => (
              <Shot key={shot.src} shot={shot} sizes="(min-width: 860px) 34vw, 100vw" />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
