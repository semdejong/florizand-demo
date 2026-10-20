"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { company, services } from "@/content";

type ReadyMail = {
  href: string;
  body: string;
};

function field(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}

export default function QuoteForm() {
  const [ready, setReady] = useState<ReadyMail | null>(null);
  const [error, setError] = useState("");
  const [problems, setProblems] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formId = useId();

  useEffect(() => {
    if (window.location.hash !== "#speeltuin") return;
    const box = document.getElementById("dienst-speeltuinen");
    if (box instanceof HTMLInputElement) box.checked = true;
  }, []);

  useEffect(() => {
    if (ready) headingRef.current?.focus();
  }, [ready]);

  function clearProblem(name: string) {
    setProblems((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const next: Record<string, string> = {};
    const requiredNames = ["naam", "telefoon", "email", "postcode", "plaats", "wensen", "privacy"] as const;
    for (const name of requiredNames) {
      const element = form.elements.namedItem(name);
      if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLTextAreaElement)) continue;
      if (element.checkValidity()) continue;
      if (element.validity.typeMismatch) next[name] = "Vul een geldig e-mailadres in.";
      else if (element.type === "checkbox") next[name] = "Vink dit aan om de aanvraag klaar te zetten.";
      else next[name] = "Vul dit veld in.";
    }
    setProblems(next);
    if (Object.keys(next).length > 0) {
      setError("Controleer de verplichte velden. Die zijn met een ster gemarkeerd.");
      const first = form.elements.namedItem(Object.keys(next)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }

    const data = new FormData(form);
    const chosen = data.getAll("diensten").map(String);
    const body = [
      "Offerteaanvraag via de website van FloriZand",
      "",
      `Naam: ${field(data, "naam")}`,
      `Telefoonnummer: ${field(data, "telefoon")}`,
      `E-mailadres: ${field(data, "email")}`,
      `Postcode: ${field(data, "postcode")}`,
      `Plaats: ${field(data, "plaats")}`,
      `Soort werk: ${chosen.length > 0 ? chosen.join(", ") : "niet aangevinkt"}`,
      `Tuin grootte: ${field(data, "grootte") || "niet ingevuld"}`,
      `Gewenste periode: ${field(data, "periode") || "niet ingevuld"}`,
      "",
      "Omschrijving van de wensen:",
      field(data, "wensen"),
      "",
      `Foto's: later mailen naar ${company.email}.`,
      "Toestemming om contact op te nemen over deze aanvraag: ja",
    ].join("\n");

    const href = `${company.emailHref}?subject=${encodeURIComponent("Offerteaanvraag FloriZand")}&body=${encodeURIComponent(body)}`;
    setError("");
    setCopied(false);
    setCopyFailed(false);
    setReady({ href, body });
    window.location.href = href;
  }

  async function copyBody() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(ready.body);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  if (ready) {
    return (
      <div className="success" role="status">
        <h2 ref={headingRef} tabIndex={-1}>
          Uw bericht staat klaar
        </h2>
        <p>
          Er is niets automatisch verzonden en er is niets opgeslagen. Uw e-mailprogramma zou nu een
          bericht aan {company.email} moeten openen. Verstuur dat bericht zelf, dan kan {company.person}{" "}
          contact met u opnemen voor een afspraak.
        </p>
        <p>
          Opent het e-mailprogramma niet? Kopieer de tekst hieronder en mail die zelf naar{" "}
          <a className="text-link" href={company.emailHref}>
            {company.email}
          </a>
          . Of bel Dave direct.
        </p>
        <pre className="mail-preview">{ready.body}</pre>
        <div className="cta-row">
          <a className="btn btn-primary" href={ready.href}>
            Bericht opnieuw openen
          </a>
          <button type="button" className="btn btn-ghost" onClick={copyBody}>
            {copied ? "Tekst gekopieerd" : "Tekst kopiëren"}
          </button>
          <a className="btn btn-pine" href={company.phoneHref}>
            Bel Dave: {company.phoneDisplay}
          </a>
        </div>
        {copyFailed ? (
          <p>Kopiëren lukt niet in deze browser. Selecteer de tekst hierboven en kopieer die zelf.</p>
        ) : null}
        <p>
          <button type="button" className="text-link" onClick={() => setReady(null)}>
            Formulier opnieuw invullen
          </button>
        </p>
      </div>
    );
  }

  function fieldError(name: string) {
    if (!problems[name]) return null;
    return (
      <p id={`${name}-fout`} className="form-error">
        {problems[name]}
      </p>
    );
  }

  function invalidProps(name: string) {
    return {
      "aria-invalid": problems[name] ? true : undefined,
      "aria-describedby": problems[name] ? `${name}-fout` : undefined,
      onChange: () => clearProblem(name),
    } as const;
  }

  return (
    <form id={formId} onSubmit={onSubmit} noValidate>
      <p className="hint">Velden met een ster (*) zijn verplicht.</p>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="naam">
          Naam <span className="req">*</span>
        </label>
        <input id="naam" name="naam" type="text" autoComplete="name" required maxLength={120} {...invalidProps("naam")} />
        {fieldError("naam")}
      </div>

      <div className="field">
        <label htmlFor="telefoon">
          Telefoonnummer <span className="req">*</span>
        </label>
        <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" required maxLength={30} {...invalidProps("telefoon")} />
        {fieldError("telefoon")}
      </div>

      <div className="field">
        <label htmlFor="email">
          E-mailadres <span className="req">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={120} {...invalidProps("email")} />
        {fieldError("email")}
      </div>

      <div className="split">
        <div className="field">
          <label htmlFor="postcode">
            Postcode <span className="req">*</span>
          </label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            autoComplete="postal-code"
            required
            maxLength={10}
            {...invalidProps("postcode")}
          />
          {fieldError("postcode")}
        </div>
        <div className="field">
          <label htmlFor="plaats">
            Plaats <span className="req">*</span>
          </label>
          <input
            id="plaats"
            name="plaats"
            type="text"
            autoComplete="address-level2"
            required
            maxLength={80}
            {...invalidProps("plaats")}
          />
          {fieldError("plaats")}
        </div>
      </div>

      <fieldset className="choices">
        <legend>Soort werk</legend>
        <p className="hint">Meerdere keuzes mogelijk. Dit veld is niet verplicht.</p>
        {services.map((service) => (
          <label key={service.id} className="check">
            <input id={`dienst-${service.id}`} type="checkbox" name="diensten" value={service.title} />
            <span>{service.title}</span>
          </label>
        ))}
      </fieldset>

      <div className="field">
        <label htmlFor="grootte">Tuin grootte (optioneel)</label>
        <input
          id="grootte"
          name="grootte"
          type="text"
          maxLength={160}
          placeholder="Bijvoorbeeld een afmeting of een korte omschrijving"
        />
      </div>

      <div className="field">
        <label htmlFor="periode">Gewenste periode (optioneel)</label>
        <input id="periode" name="periode" type="text" maxLength={160} />
      </div>

      <div className="field">
        <label htmlFor="wensen">
          Omschrijving van uw wensen <span className="req">*</span>
        </label>
        <textarea
          id="wensen"
          name="wensen"
          required
          maxLength={2000}
          aria-invalid={problems.wensen ? true : undefined}
          aria-describedby={problems.wensen ? "foto-hint wensen-fout" : "foto-hint"}
          onChange={() => clearProblem("wensen")}
        />
        <p id="foto-hint" className="hint">
          Foto&apos;s kunt u later mailen naar {company.email}. Op dit formulier kunt u geen bestanden
          toevoegen.
        </p>
        {fieldError("wensen")}
      </div>

      <label className="check">
        <input
          type="checkbox"
          name="privacy"
          required
          aria-invalid={problems.privacy ? true : undefined}
          aria-describedby={problems.privacy ? "privacy-fout" : undefined}
          onChange={() => clearProblem("privacy")}
        />
        <span>
          Ik geef FloriZand toestemming om deze gegevens te gebruiken om contact met mij op te nemen
          over deze aanvraag. <span className="req">*</span>
        </span>
      </label>
      {fieldError("privacy")}

      <div className="cta-row">
        <button type="submit" className="btn btn-primary">
          Aanvraag klaarzetten in e-mail
        </button>
      </div>
      <p className="hint">
        Verzenden opent een e-mail naar {company.email}. Deze pagina slaat niets op en stuurt niets naar
        een andere dienst.
      </p>
    </form>
  );
}
