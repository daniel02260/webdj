import { Link } from "react-router-dom";
import { formatCOP } from "../data/products";
import GlassesIllustration from "../components/GlassesIllustration";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, subtotal, updateQty, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="font-display text-3xl text-ink">Tu carrito está vacío</h1>
        <p className="mt-3 text-ink/60">
          Cuando agregues unas gafas, las vas a ver por aquí.
        </p>
        <Link
          to="/tienda"
          className="mt-6 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <h1 className="font-display text-3xl text-ink">Tu carrito</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-ink/10">
          {items.map((line) => {
            const colorObj = line.product.colors.find((c) => c.name === line.color);
            return (
              <li key={`${line.productId}-${line.color}`} className="flex gap-4 py-5">
                <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl border border-ink/10">
                  <GlassesIllustration
                    shape={line.product.shape}
                    color={colorObj?.hex ?? "#1f3d2f"}
                    className="h-full w-full"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        to={`/producto/${line.productId}`}
                        className="font-display text-lg text-ink hover:text-forest"
                      >
                        {line.product.name}
                      </Link>
                      <p className="text-sm text-ink/50">Color: {line.color}</p>
                    </div>
                    <span className="font-medium text-ink">
                      {formatCOP(line.product.price * line.qty)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center rounded-full border border-ink/15">
                      <span className="sr-only">Cantidad de {line.product.name}</span>
                      <button
                        type="button"
                        className="px-3 py-1.5 text-ink/70 hover:text-forest"
                        onClick={() => updateQty(line.productId, line.color, line.qty - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{line.qty}</span>
                      <button
                        type="button"
                        className="px-3 py-1.5 text-ink/70 hover:text-forest"
                        onClick={() => updateQty(line.productId, line.color, line.qty + 1)}
                      >
                        +
                      </button>
                    </label>

                    <button
                      type="button"
                      onClick={() => removeFromCart(line.productId, line.color)}
                      className="text-sm text-ink/50 hover:text-brick"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-2xl border border-ink/10 bg-paper p-6">
          <h2 className="font-display text-xl text-ink">Resumen</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-ink/70">
              <span>Subtotal</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            <div className="flex justify-between text-ink/70">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-ink/10 pt-4 font-semibold text-ink">
            <span>Total</span>
            <span>{formatCOP(subtotal)}</span>
          </div>
          <Link
            to="/pagar"
            className="mt-6 block rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-cream hover:bg-forest-light"
          >
            Ir a pagar
          </Link>
        </aside>
      </div>
    </div>
  );
}
