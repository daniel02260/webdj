import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "ottoymora:cart";

function loadInitialCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

// Cada línea del carrito: { productId, color, qty }
export function CartProvider({ children }) {
  const [lines, setLines] = useState(loadInitialCart);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // localStorage puede fallar en modo privado; el carrito sigue
      // funcionando en memoria durante la sesión.
    }
  }, [lines]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  function addToCart(productId, color, qty = 1) {
    setLines((prev) => {
      const idx = prev.findIndex(
        (l) => l.productId === productId && l.color === color
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { productId, color, qty }];
    });
    const product = getProductById(productId);
    setToast(`${product?.name ?? "Producto"} agregado al carrito`);
  }

  function updateQty(productId, color, qty) {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => !(l.productId === productId && l.color === color))
        : prev.map((l) =>
            l.productId === productId && l.color === color ? { ...l, qty } : l
          )
    );
  }

  function removeFromCart(productId, color) {
    setLines((prev) =>
      prev.filter((l) => !(l.productId === productId && l.color === color))
    );
  }

  function clearCart() {
    setLines([]);
  }

  const items = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProductById(line.productId);
          if (!product) return null;
          return { ...line, product };
        })
        .filter(Boolean),
    [lines]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, l) => sum + l.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, l) => sum + l.qty * l.product.price, 0),
    [items]
  );

  const value = {
    items,
    itemCount,
    subtotal,
    toast,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
