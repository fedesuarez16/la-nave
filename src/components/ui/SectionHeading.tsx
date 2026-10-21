import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent: string;
  light?: boolean;
};

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 text-xs font-medium uppercase tracking-[0.3em] ${light ? "text-turq-deep" : "text-turq"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, accent, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-20">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <Reveal as="h2" className="font-display text-[clamp(40px,7vw,104px)] uppercase leading-[0.95]">
        {title}
        <br />
        <span className={light ? "text-turq-deep" : "text-turq"}>{accent}</span>
      </Reveal>
    </div>
  );
}
