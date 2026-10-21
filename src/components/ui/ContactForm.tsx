"use client";

import { useState } from "react";

const fieldClass =
  "rounded-none border-0 border-b border-white/25 bg-transparent py-2.5 text-base normal-case tracking-normal text-paper transition-colors focus:border-turq focus:outline-none";
const labelClass = "grid gap-2 text-[11px] uppercase tracking-[0.22em] text-neutral-400";

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Completá nombre, un email válido y tu mensaje.");
      return;
    }
    const data = new FormData(form);
    const subject = `Nuevo proyecto: ${data.get("servicio")} — ${data.get("nombre")}`;
    const body = `${data.get("mensaje")}\n\n${data.get("nombre")} · ${data.get("email")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("¡Gracias! Te abrimos tu correo para enviar el mensaje.");
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid content-start gap-5.5">
      <label className={labelClass}>
        Nombre
        <input name="nombre" type="text" required autoComplete="name" className={fieldClass} />
      </label>
      <label className={labelClass}>
        Email
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className={labelClass}>
        ¿Qué necesitás?
        <select name="servicio" className={`${fieldClass} [&>option]:bg-ink`}>
          <option>Producción audiovisual</option>
          <option>Marketing creativo</option>
          <option>Fotografía</option>
          <option>Otro</option>
        </select>
      </label>
      <label className={labelClass}>
        Contanos tu proyecto
        <textarea name="mensaje" rows={4} required className={`${fieldClass} resize-y`} />
      </label>
      <button
        type="submit"
        className="mt-2 justify-self-start bg-turq px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition duration-300 ease-cine hover:-translate-y-0.5 hover:bg-paper"
      >
        Enviar mensaje
      </button>
      <p role="status" className="min-h-[1.4em] text-sm text-turq">
        {status}
      </p>
    </form>
  );
}
