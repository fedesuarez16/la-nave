import { contact } from "@/content/site";
import type { Dictionary } from "@/i18n/config";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const rows = [
    { label: dict.rows.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: dict.rows.whatsapp, value: contact.whatsapp.label, href: contact.whatsapp.href },
    { label: dict.rows.location, value: dict.location },
  ];

  return (
    <section
      id="contacto"
      className="border-t border-line bg-linear-to-b from-ink to-[#061615] px-[clamp(16px,5vw,72px)] py-[clamp(90px,14vw,180px)]"
    >
      <div className="grid gap-[clamp(40px,6vw,100px)] md:grid-cols-2">
        <div>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Reveal as="h2" className="font-display text-[clamp(48px,8vw,120px)] uppercase leading-[0.95]">
            {dict.title}
            <br />
            <span className="text-turq">{dict.accent}</span>
          </Reveal>

          <Reveal as="ul" className="mt-10 mb-8">
            {rows.map((row) => (
              <li key={row.label} className="flex flex-wrap gap-x-5 gap-y-1 border-b border-line py-4 text-[17px]">
                <span className="w-full pt-1 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:w-28">
                  {row.label}
                </span>
                {row.href ? (
                  <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="hover:text-turq">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </li>
            ))}
          </Reveal>

          <Reveal className="flex flex-wrap gap-5">
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} className="border-b border-turq pb-1 text-xs uppercase tracking-[0.2em] hover:text-turq">
                {s.label}
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <ContactForm email={contact.email} dict={dict.form} />
        </Reveal>
      </div>
    </section>
  );
}
