import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

const SORTS = {
  relevancia: (a, b) => 0,
  "precio-asc": (a, b) => a.price - b.price,
  "precio-desc": (a, b) => b.price - a.price,
  nombre: (a, b) => a.name.localeCompare(b.name, "es"),
};

export default function Shop() {
  const { category } = useParams();
  const [sort, setSort] = useState("relevancia");

  const activeCategory = CATEGORIES.find((c) => c.slug === category);
  const isValidCategory = Boolean(activeCategory) || !category;

  const products = useMemo(() => {
    const base = category
      ? PRODUCTS.filter((p) => p.category === category)
      : PRODUCTS;
    return [...base].sort(SORTS[sort]);
  }, [category, sort]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="mb-6 flex flex-wrap gap-2">
        <FilterPill to="/tienda" active={!category} label="Todas" />
        {CATEGORIES.map((cat) => (
          <FilterPill
            key={cat.slug}
            to={`/tienda/${cat.slug}`}
            active={category === cat.slug}
            label={cat.label}
          />
        ))}
      </div>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-ink">
            {activeCategory ? activeCategory.label : "Todas las gafas"}
          </h1>
          {activeCategory && (
            <p className="mt-1 text-ink/60">{activeCategory.blurb}</p>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-ink/70">
          Ordenar por
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-ink/15 bg-cream px-3 py-1.5 text-sm"
          >
            <option value="relevancia">Relevancia</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="nombre">Nombre A-Z</option>
          </select>
        </label>
      </div>

      {!isValidCategory && (
        <p className="mb-6 text-sm text-brick">
          No encontramos esa categoría — mostrando todo el catálogo.
        </p>
      )}

      {products.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-ink/20 p-10 text-center text-ink/60">
          Por ahora no hay productos en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({ to, active, label }) {
  return (
    <Link
      to={to}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-forest bg-forest text-cream"
          : "border-ink/15 text-ink/70 hover:border-forest hover:text-forest"
      }`}
    >
      {label}
    </Link>
  );
}
