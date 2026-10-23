import { brand } from "@/content/site";
import type { Dictionary } from "@/i18n/config";
import { Logo } from "./Header";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-line px-[clamp(16px,5vw,72px)] py-9 text-[13px] text-neutral-400">
      <Logo label={dict.nav.home} />
      <p>
        © {brand.name}. {dict.footer.tagline}
      </p>
    </footer>
  );
}
