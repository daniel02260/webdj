import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-5 py-24 text-center">
      <h1 className="font-display text-4xl text-ink">Esto no se ve bien</h1>
      <p className="mt-3 text-ink/60">
        No encontramos la página que buscas. Puede que el enlace esté roto.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
