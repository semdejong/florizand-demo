import Link from "next/link";
import { company } from "@/content";

export default function MobileBar() {
  return (
    <div className="mobile-bar" aria-label="Snel contact">
      <a className="btn btn-primary" href={company.phoneHref}>
        Bel Dave
      </a>
      <Link className="btn btn-ghost" href="/offerte-aanvragen">
        Offerte
      </Link>
    </div>
  );
}
