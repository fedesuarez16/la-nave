import { brand } from "@/content/site";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-line px-[clamp(16px,5vw,72px)] py-9 text-[13px] text-neutral-400">
      <Logo />
      <p>
        © {brand.name}. {brand.tagline}.
      </p>
    </footer>
  );
}
