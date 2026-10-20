import Link from "next/link";
import { services } from "@/content";

export default function PlanRuler({ active }: { active?: string }) {
  return (
    <nav className="ruler" aria-label="Legenda van de werkzaamheden">
      <ol>
        {services.map((service, index) => {
          const number = String(index + 1).padStart(2, "0");
          const current = service.id === active;
          return (
            <li key={service.id}>
              <Link href={`/diensten/${service.id}`} aria-current={current ? "page" : undefined}>
                <span>{number}</span>
                {service.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
