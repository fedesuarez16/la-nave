import Image from "next/image";
import { about } from "@/content/site";
import type { Dictionary } from "@/i18n/config";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

const statKeys = ["projects", "clients", "years"] as const;

export function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="nosotros" className="px-[clamp(16px,5vw,72px)] py-[clamp(90px,14vw,180px)]">
      <div className="grid items-center gap-[clamp(40px,6vw,100px)] md:grid-cols-[1fr_1.1fr]">
        <Reveal className="relative aspect-[4/5] max-w-[480px] md:max-w-none">
          <span className="absolute inset-[24px_-24px_-24px_24px] border border-turq" />
          <Image
            src={about.image}
            alt={dict.imageAlt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="bg-coal object-cover grayscale"
          />
        </Reveal>

        <div>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Reveal as="h2" className="mb-7 font-display text-[clamp(40px,7vw,104px)] uppercase leading-[0.95]">
            {dict.title}
            <br />
            <span className="text-turq">{dict.accent}</span>
          </Reveal>
          {dict.paragraphs.map((text) => (
            <Reveal as="p" key={text} className="mb-4 max-w-[56ch] text-neutral-300">
              {text}
            </Reveal>
          ))}

          <Reveal className="my-11 grid grid-cols-3 gap-3 border-y border-line py-7 sm:gap-5">
            {statKeys.map((key) => (
              <div key={key}>
                <Counter
                  value={about.stats[key]}
                  className="block font-display text-[clamp(44px,5vw,72px)] leading-none text-turq"
                />
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
                  {dict.stats[key]}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal as="ul" className="grid gap-3">
            {dict.values.map((v) => (
              <li key={v.title} className="relative pl-6 text-neutral-300 before:absolute before:left-0 before:text-turq before:content-['→']">
                <b className="font-semibold text-paper">{v.title}</b> {v.text}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
