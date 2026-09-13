import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-2xl italic">
              Otto <span className="not-italic text-ochre-light">&amp;</span> Mora
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/70">
              Gafas formuladas y de sol diseñadas y despachadas desde
              Colombia. Envíos y devoluciones sin costo a todo el país.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Tienda</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li><Link to="/tienda/formuladas" className="hover:text-cream">Formuladas</Link></li>
              <li><Link to="/tienda/sol" className="hover:text-cream">Sol</Link></li>
              <li><Link to="/tienda/pal-compu" className="hover:text-cream">Pal' compu</Link></li>
              <li><Link to="/tienda/clip-on" className="hover:text-cream">Clip on</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Ayuda</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li><Link to="/templos" className="hover:text-cream">Nuestros templos</Link></li>
              <li><Link to="/carrito" className="hover:text-cream">Tu carrito</Link></li>
              <li><a href="mailto:hola@ottoymora.co" className="hover:text-cream">hola@ottoymora.co</a></li>
            </ul>
          </div>

          <Newsletter />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Derechos reservados Otto &amp; Mora © {new Date().getFullYear()}</p>
          <p>Proyecto de demostración — no es una tienda real.</p>
        </div>
      </div>
    </footer>
  );
}
