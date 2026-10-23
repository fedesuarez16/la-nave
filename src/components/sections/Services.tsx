import type { Dictionary } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="servicios" className="bg-paper px-[clamp(16px,5vw,72px)] py-[clamp(90px,14vw,180px)] text-ink">
      <SectionHeading eyebrow={dict.eyebrow} title={dict.title} accent={dict.accent} light />

      <div className="grid border-t border-black/15 md:grid-cols-2">
        {dict.items.map((service, i) => (
          <Reveal
            key={service.title}
            as="article"
            delay={i * 100}
            className={`py-10 md:py-12 md:pr-12 ${i > 0 ? "border-black/15 max-md:border-t md:border-l md:pl-12" : ""}`}
          >
            <span className="font-display text-base text-turq-deep">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2.5 mb-4.5 font-display text-[clamp(30px,4vw,56px)] uppercase leading-none">{service.title}</h3>
            <p className="max-w-[46ch] text-neutral-700">{service.description}</p>
            <ul className="mt-7">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-black/10 py-3.5 font-medium transition-all duration-300 ease-cine before:size-2 before:flex-none before:bg-turq-deep hover:pl-2.5 hover:text-turq-deep"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
