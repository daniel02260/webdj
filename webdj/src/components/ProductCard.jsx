import { Link } from "react-router-dom";
import GlassesIllustration from "./GlassesIllustration";
import { formatCOP } from "../data/products";

export default function ProductCard({ product }) {
  const mainColor = product.colors[0]?.hex ?? "#1f3d2f";

  return (
    <Link
      to={`/producto/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-shadow hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <GlassesIllustration
          shape={product.shape}
          color={mainColor}
          background="#efe9db"
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-cream">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-lg text-ink">{product.name}</h3>
        <p className="text-xs uppercase tracking-wide text-ink/50">
          {product.colors.length} {product.colors.length === 1 ? "color" : "colores"}
        </p>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="font-semibold text-forest">
            {formatCOP(product.price)}
          </span>
          {product.compareAt && (
            <span className="text-sm text-ink/40 line-through">
              {formatCOP(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
