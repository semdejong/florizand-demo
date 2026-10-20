import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo-link">
      <span className="logo">
        <span className="logo-word">
          <span className="logo-flori">FLORI</span>
          <span className="logo-zand">ZAND</span>
        </span>
        <span className="logo-tag">
          Tuinontwerp <span aria-hidden="true">|</span> Aanleg <span aria-hidden="true">|</span> Onderhoud
        </span>
      </span>
    </Link>
  );
}
