# Otto & Mora

Tienda de gafas 100% funcional en el frontend, construida con React, React
Router y Tailwind CSS. Es un proyecto de demostración inspirado en la
*estructura* de una tienda de gafas online (navegación por categorías, hero,
catálogo, ficha de producto, carrito, checkout), pero con marca, textos,
productos e ilustraciones propios — no reproduce contenido de ningún sitio
existente.

## Qué incluye

- **Catálogo** con 4 categorías (Formuladas, Sol, Pal' compu, Clip on),
  filtros y orden por precio/nombre.
- **Ficha de producto** con selector de color, cantidad y productos
  relacionados.
- **Carrito** persistente en `localStorage` (sobrevive a recargar la página).
- **Checkout** con formulario de envío validado y confirmación de pedido con
  número de orden (simulado: no hay pasarela de pago real conectada).
- **Newsletter** funcional que guarda el correo en `localStorage`.
- Ilustraciones de monturas hechas en SVG (no fotografías), para no depender
  de imágenes de terceros.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para generar el build de producción:

```bash
npm run build
npm run preview
```

## Qué NO incluye (a propósito)

- Pasarela de pago real (PSE/tarjeta): el checkout simula la confirmación.
- Backend/base de datos: el catálogo vive en `src/data/products.js` y el
  estado del carrito/pedidos en `localStorage` del navegador.
- Fotografías de producto: se usan ilustraciones SVG generadas en
  `src/components/GlassesIllustration.jsx`.

## Estructura

```
src/
  components/   Navbar, Footer, ProductCard, GlassesIllustration, etc.
  context/      CartContext (estado global del carrito)
  data/         Catálogo de productos y categorías
  pages/        Home, Shop, ProductDetail, Cart, Checkout, etc.
```
