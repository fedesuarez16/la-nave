"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";

export function Logo() {
  return (
    <a href="#inicio" aria-label="La Nave Studios — inicio" className="inline-flex items-baseline gap-1.5 font-display text-[22px] tracking-wide">
      LA NAVE
      <span className="font-sans text-[11px] font-semibold tracking-[0.35em] text-turq">STUDIOS</span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkClass =
    "relative py-1 text-[13px] font-medium uppercase tracking-[0.18em] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-turq after:transition-transform after:duration-500 after:ease-cine hover:after:origin-left hover:after:scale-x-100 max-md:text-lg";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(16px,5vw,72px)] transition-all duration-500 ${
        scrolled ? "border-b border-line bg-ink/85 py-3.5 backdrop-blur-md" : "py-5"
      }`}
    >
      <Logo />

      <nav
        id="nav"
        className={`flex items-center gap-8 max-md:fixed max-md:inset-0 max-md:flex-col max-md:justify-center max-md:bg-ink max-md:transition-transform max-md:duration-700 max-md:ease-cine ${
          open ? "max-md:translate-y-0" : "max-md:-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={linkClass}>
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="border border-turq px-4.5 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-turq transition-colors hover:bg-turq hover:text-ink"
        >
          Contacto
        </a>
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="nav"
        className="relative z-[60] h-5 w-8 md:hidden"
      >
        <span className={`absolute left-0 h-0.5 w-full bg-paper transition-all ${open ? "top-[9px] rotate-45" : "top-1"}`} />
        <span className={`absolute left-0 h-0.5 w-full bg-paper transition-all ${open ? "top-[9px] -rotate-45" : "top-3.5"}`} />
      </button>
    </header>
  );
}
