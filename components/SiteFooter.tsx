import Link from "next/link";
import { company, nav } from "@/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="logo-word" aria-hidden="true">
            <span className="logo-flori">FLORI</span>
            <span className="logo-zand">ZAND</span>
          </p>
          <p className="logo-tag">{company.tagline}</p>
          <p>
            {company.name}
            <br />
            Sinds {company.since} gevestigd in {company.city}.
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Contact</h2>
          <address style={{ fontStyle: "normal" }}>
            {company.street}
            <br />
            {company.postalCode} {company.city}
          </address>
          <p>
            <a className="text-link" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
            <br />
            <a className="text-link" href={company.emailHref}>
              {company.email}
            </a>
          </p>
          <p>Op afspraak – bel of mail Dave</p>
        </div>
        <div>
          <h2 className="eyebrow">Pagina&apos;s</h2>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/offerte-aanvragen">Offerte aanvragen</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>KvK {company.kvk}</p>
        <p style={{ marginTop: "1rem" }}>
          <a className="text-link" href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
            Concept door Sleads
          </a>
        </p>
      </div>
    </footer>
  );
}
