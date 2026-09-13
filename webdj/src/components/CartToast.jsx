import { useCart } from "../context/CartContext";

export default function CartToast() {
  const { toast } = useCart();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
      aria-live="polite"
    >
      {toast && (
        <div className="pointer-events-auto rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
