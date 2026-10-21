import { brand } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ShowreelButton } from "@/components/ui/ShowreelButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-end overflow-hidden bg-[radial-gradient(ellipse_at_70%_30%,#12302e,#0a0a0a_60%)] px-[clamp(16px,5vw,72px)] pb-[clamp(80px,12vh,140px)]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={brand.heroPoster}
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
      >
        <source src={brand.heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_top,#0a0a0a_0%,rgb(10_10_10/0.35)_45%,rgb(10_10_10/0.55)_100%),linear-gradient(120deg,rgb(46_230_214/0.18),transparent_50%)]">
        <div className="film-grain pointer-events-none absolute -inset-1/2 animate-grain opacity-[0.08]" />
      </div>

      <div className="relative z-10 max-w-[1200px]">
        <Reveal>
          <Eyebrow>Productora audiovisual · Marketing creativo</Eyebrow>
        </Reveal>
        <Reveal as="h1" delay={100} className="font-display text-[clamp(48px,10vw,150px)] uppercase leading-[0.92]">
          <span className="block">{brand.name}</span>
          <span className="block text-outline text-turq">Tu historia merece</span>
          <span className="block">ser contada</span>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3.5">
          <ShowreelButton variant="button" />
          <a
            href="#contacto"
            className="inline-flex items-center border border-white/50 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-turq hover:text-turq"
          >
            Contanos tu proyecto
          </a>
        </Reveal>
      </div>

      <a
        href="#proyectos"
        aria-label="Bajar"
        className="absolute right-[clamp(16px,5vw,72px)] bottom-10 z-10 hidden flex-col items-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:flex"
      >
        Scroll
        <i className="h-15 w-px origin-top animate-cue bg-linear-to-b from-turq to-transparent" />
      </a>
    </section>
  );
}
