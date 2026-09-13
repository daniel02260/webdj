import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { formatCOP } from "../data/products";
import { useCart } from "../context/CartContext";

const EMPTY_FORM = {
  nombre: "",
  correo: "",
  telefono: "",
  direccion: "",
  ciudad: "",
  pago: "contraentrega",
};

function generateOrderId() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `OM-${n}`;
}

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return <Navigate to="/carrito" replace />;
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.nombre.trim()) next.nombre = "Escribe tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) next.correo = "Correo inválido.";
    if (!/^\d{7,10}$/.test(form.telefono.replace(/\s/g, ""))) next.telefono = "Teléfono inválido.";
    if (!form.direccion.trim()) next.direccion = "Escribe tu dirección.";
    if (!form.ciudad.trim()) next.ciudad = "Escribe tu ciudad.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const order = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      items: items.map((l) => ({
        name: l.product.name,
        color: l.color,
        qty: l.qty,
        price: l.product.price,
      })),
      subtotal,
      shipping: form,
    };

    try {
      const raw = window.localStorage.getItem("ottoymora:pedidos");
      const list = raw ? JSON.parse(raw) : [];
      list.push(order);
      window.localStorage.setItem("ottoymora:pedidos", JSON.stringify(list));
    } catch {
      // si falla el guardado local, igual completamos el pedido
    }

    // Simulación de confirmación: no hay pasarela de pago real conectada.
    setTimeout(() => {
      clearCart();
      navigate("/pedido-confirmado", { state: { order } });
    }, 700);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <h1 className="font-display text-3xl text-ink">Pagar</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <fieldset className="space-y-4">
            <legend className="font-display text-xl text-ink">Datos de envío</legend>

            <Field label="Nombre completo" error={errors.nombre}>
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                className={inputClass(errors.nombre)}
                autoComplete="name"
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Correo electrónico" error={errors.correo}>
                <input
                  type="email"
                  value={form.correo}
                  onChange={(e) => update("correo", e.target.value)}
                  className={inputClass(errors.correo)}
                  autoComplete="email"
                />
              </Field>
              <Field label="Teléfono" error={errors.telefono}>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  className={inputClass(errors.telefono)}
                  autoComplete="tel"
                />
              </Field>
            </div>

            <Field label="Dirección" error={errors.direccion}>
              <input
                type="text"
                value={form.direccion}
                onChange={(e) => update("direccion", e.target.value)}
                className={inputClass(errors.direccion)}
                autoComplete="street-address"
              />
            </Field>

            <Field label="Ciudad" error={errors.ciudad}>
              <input
                type="text"
                value={form.ciudad}
                onChange={(e) => update("ciudad", e.target.value)}
                className={inputClass(errors.ciudad)}
                autoComplete="address-level2"
              />
            </Field>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-display text-xl text-ink">Método de pago</legend>
            <p className="text-xs text-ink/50">
              Esta es una demostración: ningún pago real se procesa.
            </p>
            {[
              { id: "contraentrega", label: "Pago contraentrega" },
              { id: "pse", label: "PSE" },
              { id: "tarjeta", label: "Tarjeta de crédito o débito" },
            ].map((opt) => (
              <label
                key={opt.id}
                className="flex items-center gap-3 rounded-xl border border-ink/10 px-4 py-3 has-[:checked]:border-forest"
              >
                <input
                  type="radio"
                  name="pago"
                  value={opt.id}
                  checked={form.pago === opt.id}
                  onChange={() => update("pago", opt.id)}
                  className="accent-forest"
                />
                <span className="text-sm text-ink">{opt.label}</span>
              </label>
            ))}
          </fieldset>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light disabled:opacity-60"
          >
            {submitting ? "Confirmando pedido…" : `Confirmar pedido · ${formatCOP(subtotal)}`}
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-ink/10 bg-paper p-6">
          <h2 className="font-display text-xl text-ink">Tu pedido</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((l) => (
              <li key={`${l.productId}-${l.color}`} className="flex justify-between text-ink/70">
                <span>
                  {l.product.name} ({l.color}) × {l.qty}
                </span>
                <span>{formatCOP(l.product.price * l.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-ink/10 pt-4 font-semibold text-ink">
            <span>Total</span>
            <span>{formatCOP(subtotal)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-brick">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-lg border px-3 py-2 text-sm focus:border-forest ${
    error ? "border-brick" : "border-ink/15"
  }`;
}
