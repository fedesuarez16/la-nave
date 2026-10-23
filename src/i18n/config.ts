import type { es } from "./dictionaries/es";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const localeCookie = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = { es: "Español", en: "English" };

export type Dictionary = typeof es;

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
