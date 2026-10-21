"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, nav } from "@/content";
import Logo from "@/components/Logo";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="nav-desktop" aria-label="Hoofdmenu">
          {nav.map((item) => {
            const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a className="header-phone" href={company.phoneHref}>
          <span className="sr-only">Bel Dave, </span>
          {company.phoneDisplay}
        </a>
        <Link className="btn btn-primary header-offerte" data-cta="offerte" href="/offerte-aanvragen">
          Offerte aanvragen
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          {open ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      {open ? (
        <nav id="site-menu" className="mobile-panel" aria-label="Mobiel menu">
          {nav.map((item) => {
            const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          <Link data-cta="offerte" href="/offerte-aanvragen" onClick={() => setOpen(false)}>
            Offerte aanvragen
          </Link>
          <a href={company.phoneHref}>Bel Dave: {company.phoneDisplay}</a>
          <a href={company.emailHref}>Mail {company.email}</a>
        </nav>
      ) : null}
    </header>
  );
}
