import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { formatCOP, getProductById, getRelatedProducts } from "../data/products";
import GlassesIllustration from "../components/GlassesIllustration";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [colorIdx, setColorIdx] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) return <Navigate to="/tienda" replace />;

  const color = product.colors[colorIdx];
  const related = getRelatedProducts(product);

  function handleAdd() {
    addToCart(product.id, color.name, qty);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <nav className="mb-6 text-sm text-ink/50">
        <Link to="/tienda" className="hover:text-forest">Tienda</Link>
        <span className="mx-2">/</span>
        <Link to={`/tienda/${product.category}`} className="capitalize hover:text-forest">
          {product.category.replace("-", " ")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-ink/10">
          <GlassesIllustration
            shape={product.shape}
            color={color.hex}
            className="aspect-[4/3] w-full"
          />
        </div>

        <div>
          {product.tag && (
            <span className="mb-2 inline-block rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-cream">
              {product.tag}
            </span>
          )}
          <h1 className="font-display text-4xl text-ink">{product.name}</h1>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-xl font-semibold text-forest">
              {formatCOP(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-ink/40 line-through">
                {formatCOP(product.compareAt)}
              </span>
            )}
          </div>

          <p className="mt-4 text-ink/70">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-ink/50">Calce</dt>
              <dd className="font-medium text-ink">{product.fit}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Material</dt>
              <dd className="font-medium text-ink">{product.material}</dd>
            </div>
          </dl>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">
              Color: <span className="text-ink/60">{color.name}</span>
            </legend>
            <div className="mt-2 flex gap-2">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColorIdx(i)}
                  aria-pressed={i === colorIdx}
                  aria-label={c.name}
                  title={c.name}
                  className={`h-9 w-9 rounded-full border-2 ${
                    i === colorIdx ? "border-forest" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </fieldset>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <label className="flex items-center rounded-full border border-ink/15">
              <span className="sr-only">Cantidad</span>
              <button
                type="button"
                className="px-3 py-2 text-ink/70 hover:text-forest"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-medium">{qty}</span>
              <button
                type="button"
                className="px-3 py-2 text-ink/70 hover:text-forest"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
              >
                +
              </button>
            </label>

            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light sm:flex-none"
            >
              Agregar al carrito
            </button>
          </div>

          <p className="mt-4 text-xs text-ink/50">
            Envío gratis a toda Colombia · Devoluciones sin costo en 30 días
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 font-display text-2xl text-ink">También te puede gustar</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
