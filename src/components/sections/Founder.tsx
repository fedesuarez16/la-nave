import Image from "next/image";
import { founder } from "@/content/site";
import type { Dictionary } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Founder({ dict }: { dict: Dictionary["founder"] }) {
  return (
    <section id="fundador" className="relative overflow-hidden border-t border-line px-[clamp(16px,5vw,72px)] py-[clamp(90px,14vw,180px)]">
      {/* Nombre gigante de fondo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-10 select-none whitespace-nowrap font-display text-[clamp(90px,18vw,280px)] uppercase leading-none text-outline text-white/[0.06]"
      >
        {founder.name}
      </span>

      <div className="relative grid items-start gap-[clamp(40px,6vw,100px)] md:grid-cols-[1.1fr_1fr]">
        <div className="md:order-2">
          <Reveal className="relative aspect-[3/4] max-w-[460px] md:ml-auto">
            <span className="absolute inset-[-24px_24px_24px_-24px] border border-turq" />
            {founder.image ? (
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="bg-coal object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            ) : (
              <div className="relative grid h-full place-items-center bg-coal">
                <div className="text-center">
                  <span className="block font-display text-8xl text-turq/40">
                    {founder.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span className="mt-3 block text-[11px] uppercase tracking-[0.3em] text-neutral-500">{dict.photoPlaceholder}</span>
                </div>
              </div>
            )}
          </Reveal>
        </div>

        <div className="md:order-1">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Reveal as="h2" className="font-display text-[clamp(48px,8vw,120px)] uppercase leading-[0.92]">
            {founder.name}
          </Reveal>
          <Reveal as="p" className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-turq">
            {dict.role}
          </Reveal>

          <Reveal as="blockquote" className="my-10 border-l-2 border-turq pl-6 font-display text-[clamp(24px,2.6vw,38px)] uppercase leading-tight">
            “{dict.quote}”
          </Reveal>

          {dict.bio.map((text) => (
            <Reveal as="p" key={text} className="mb-4 max-w-[60ch] text-neutral-300">
              {text}
            </Reveal>
          ))}

          <Reveal className="mt-10">
            <h3 className="mb-4 text-[11px] uppercase tracking-[0.3em] text-neutral-400">{dict.milestonesTitle}</h3>
            <ol className="border-t border-line">
              {dict.milestones.map((m) => (
                <li key={m.text} className="flex gap-6 border-b border-line py-4">
                  <span className="w-14 shrink-0 font-display text-xl text-turq">{m.year}</span>
                  <span className="text-neutral-300">{m.text}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-5">
            {founder.socials.map((s) => (
              <a key={s.label} href={s.href} className="border-b border-turq pb-1 text-xs uppercase tracking-[0.2em] hover:text-turq">
                {s.label}
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
