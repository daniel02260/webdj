import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CATEGORIES } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          to="/"
          className="font-display text-2xl italic tracking-tight text-forest"
          onClick={() => setOpen(false)}
        >
          Otto <span className="not-italic text-ochre">&amp;</span> Mora
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {CATEGORIES.map((cat) => (
            <NavLink
              key={cat.slug}
              to={`/tienda/${cat.slug}`}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-forest ${
                  isActive ? "text-forest" : "text-ink/70"
                }`
              }
            >
              {cat.label}
            </NavLink>
          ))}
          <NavLink
            to="/templos"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-forest ${
                isActive ? "text-forest" : "text-ink/70"
              }`
            }
          >
            Templos
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/carrito"
            className="relative flex items-center gap-2 rounded-full border border-ink/15 px-3 py-2 text-sm font-medium hover:border-forest hover:text-forest"
            aria-label={`Carrito, ${itemCount} productos`}
          >
            <CartIcon />
            <span className="hidden sm:inline">Carrito</span>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-brick px-1 text-xs font-semibold text-cream">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="rounded-full border border-ink/15 p-2 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-5 py-3 md:hidden">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/tienda/${cat.slug}`}
              className="rounded-md px-2 py-2 text-sm font-medium text-ink/80 hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
          <Link
            to="/templos"
            className="rounded-md px-2 py-2 text-sm font-medium text-ink/80 hover:bg-paper"
            onClick={() => setOpen(false)}
          >
            Templos
          </Link>
        </nav>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 5h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.8 8H6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20.5" r="1.4" fill="currentColor" />
      <circle cx="17" cy="20.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
