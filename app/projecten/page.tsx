import type { Metadata } from "next";
import GardenGallery, { GardenCta } from "@/components/GardenGallery";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Tuinen in beeld bij Hoveniersbedrijf FloriZand: ontwerp, bestrating, water, gazon, hout en onderhoud, vanuit 's-Gravenzande.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        eyebrow="Projecten"
        title="Tuinen in beeld"
        lede="Van het eerste ontwerp tot de opgeleverde tuin. Bestrating, water, gazon, hout en onderhoud, met Dave als vast contact."
      />
      <section data-section="projecten-intro" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <GardenGallery variant="editorial" />
          <GardenCta />
        </div>
      </section>
    </>
  );
}
