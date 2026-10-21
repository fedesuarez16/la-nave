import { clients } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="group overflow-hidden border-b border-line py-6 first-of-type:border-t">
      <div
        className={`flex w-max group-hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || reverse} className="flex">
            {items.map((name) => (
              <li
                key={name}
                className={`flex items-center whitespace-nowrap px-[0.5em] font-display text-[clamp(34px,5.5vw,80px)] uppercase transition-colors after:ml-[1em] after:text-[0.35em] after:text-turq after:content-['✦'] hover:text-turq ${
                  reverse ? "text-outline text-white/35" : ""
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="overflow-hidden py-[clamp(90px,14vw,180px)]">
      <div className="px-[clamp(16px,5vw,72px)]">
        <SectionHeading eyebrow="03 — Nuestros clientes" title="Confiaron en" accent="La Nave" />
      </div>
      <div aria-label="Clientes">
        <MarqueeRow items={clients} />
        <MarqueeRow items={[...clients].reverse()} reverse />
      </div>
    </section>
  );
}
