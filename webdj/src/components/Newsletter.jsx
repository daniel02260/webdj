import { useState } from "react";

const STORAGE_KEY = "ottoymora:suscriptores";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | done | error

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setStatus("error");
      return;
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      if (!list.includes(trimmed)) list.push(trimmed);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // si falla el guardado local, igual confirmamos la suscripción
    }
    setStatus("done");
    setEmail("");
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-cream">Los chismes de Otto &amp; Mora</h3>
      <p className="mt-3 text-sm text-cream/70">
        Lanzamientos, descuentos y uno que otro chisme. Sin spam.
      </p>
      <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="tucorreo@ejemplo.com"
          className="w-full rounded-full border border-cream/25 bg-cream/5 px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-ochre-light"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-ochre px-4 py-2 text-sm font-semibold text-ink hover:bg-ochre-light"
        >
          Unirme
        </button>
      </form>
      <p className="mt-2 text-xs" aria-live="polite">
        {status === "done" && (
          <span className="text-ochre-light">¡Gracias por suscribirte!</span>
        )}
        {status === "error" && (
          <span className="text-brick-light">Escribe un correo válido.</span>
        )}
      </p>
    </div>
  );
}
