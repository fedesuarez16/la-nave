"use client";

import Link from "next/link";
import { localeCookie, localeNames, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
  className?: string;
};

// Guarda la elección para que el proxy la respete en próximas visitas a "/".
function saveLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({ lang, label, className = "" }: LanguageSwitcherProps) {
  return (
    <div role="group" aria-label={label} className={`flex items-center text-xs font-semibold tracking-[0.2em] ${className}`}>
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="px-2 text-white/30">/</span>}
          <Link
            href={`/${locale}`}
            scroll={false}
            hrefLang={locale}
            lang={locale}
            aria-label={localeNames[locale]}
            aria-current={locale === lang ? "true" : undefined}
            onClick={() => saveLocale(locale)}
            className={`uppercase transition-colors ${locale === lang ? "text-turq" : "text-white/60 hover:text-paper"}`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
