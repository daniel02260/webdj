import { Link, Navigate, useLocation } from "react-router-dom";
import { formatCOP } from "../data/products";

export default function OrderConfirmation() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) return <Navigate to="/" replace />;

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 className="font-display text-3xl text-ink">¡Pedido confirmado!</h1>
      <p className="mt-2 text-ink/60">
        Número de pedido <span className="font-semibold text-forest">{order.id}</span>
      </p>
      <p className="mt-1 text-sm text-ink/50">
        Te escribimos a {order.shipping.correo} con los detalles del envío.
      </p>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-paper p-6 text-left">
        <h2 className="font-display text-lg text-ink">Resumen</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {order.items.map((item, i) => (
            <li key={i} className="flex justify-between text-ink/70">
              <span>
                {item.name} ({item.color}) × {item.qty}
              </span>
              <span>{formatCOP(item.price * item.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex justify-between border-t border-ink/10 pt-3 font-semibold text-ink">
          <span>Total</span>
          <span>{formatCOP(order.subtotal)}</span>
        </div>
        <p className="mt-4 text-sm text-ink/60">
          Envío a {order.shipping.direccion}, {order.shipping.ciudad}
        </p>
      </div>

      <Link
        to="/tienda"
        className="mt-8 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
