// Catálogo de Otto & Mora. Marca y productos ficticios creados para este proyecto.

export const CATEGORIES = [
  { slug: "formuladas", label: "Formuladas", blurb: "Con fórmula, listas para ver mejor." },
  { slug: "sol", label: "Sol", blurb: "Para los días de luz de frente." },
  { slug: "pal-compu", label: "Pal' compu", blurb: "Filtro de luz azul para pantallas." },
  { slug: "clip-on", label: "Clip on", blurb: "De formuladas a sol en un clic." },
];

const COLORWAYS = [
  { name: "Musgo", hex: "#2c5643" },
  { name: "Carbón", hex: "#232323" },
  { name: "Concha", hex: "#a9773f" },
  { name: "Vino", hex: "#7c2c33" },
  { name: "Arena", hex: "#c9a06a" },
  { name: "Ocre", hex: "#c68f2e" },
];

function colorset(...names) {
  return COLORWAYS.filter((c) => names.includes(c.name));
}

export const PRODUCTS = [
  {
    id: "mora-redonda",
    name: "Mora",
    category: "formuladas",
    shape: "redonda",
    price: 259000,
    compareAt: 319000,
    description:
      "La Mora es nuestra montura redonda insignia: acetato liviano, bisagras reforzadas y un puente bajo pensado para caras angostas. Viene con lentes antirreflejo de fábrica.",
    fit: "Angosta a media",
    material: "Acetato reciclado",
    colors: colorset("Musgo", "Carbón", "Concha"),
    tag: "Más vendida",
  },
  {
    id: "otto-cuadrada",
    name: "Otto",
    category: "formuladas",
    shape: "cuadrada",
    price: 269000,
    description:
      "Marco cuadrado de líneas rectas para caras redondas u ovaladas. La Otto se ancla con varillas de resorte para que no te apriete detrás de las orejas.",
    fit: "Media a ancha",
    material: "Acetato reciclado",
    colors: colorset("Carbón", "Vino", "Arena"),
  },
  {
    id: "nube-gatuna",
    name: "Nube",
    category: "formuladas",
    shape: "gatuna",
    price: 279000,
    description:
      "Cat-eye suave, sin picos exagerados. La Nube tiene un realce sutil en la esquina superior y viene en tonos que se notan sin gritar.",
    fit: "Angosta a media",
    material: "Acetato reciclado",
    colors: colorset("Vino", "Ocre", "Concha"),
    tag: "Nueva",
  },
  {
    id: "rio-hexagonal",
    name: "Río",
    category: "formuladas",
    shape: "hexagonal",
    price: 289000,
    description:
      "Seis lados, cero aburrimiento. La Río es para quien quiere que las gafas se noten desde el otro lado del salón, con un puente ajustable en metal.",
    fit: "Media",
    material: "Metal + acetato",
    colors: colorset("Ocre", "Carbón"),
  },
  {
    id: "sol-aviadora-vela",
    name: "Vela",
    category: "sol",
    shape: "aviador",
    price: 249000,
    description:
      "Aviador clásico con lentes polarizados categoría 3. La Vela filtra el 100% de rayos UV y no se resbala aunque sudes en la moto.",
    fit: "Media a ancha",
    material: "Metal",
    colors: colorset("Ocre", "Carbón", "Arena"),
    tag: "Más vendida",
  },
  {
    id: "sol-redonda-caribe",
    name: "Caribe",
    category: "sol",
    shape: "redonda",
    price: 229000,
    description:
      "Redondas, livianas y con lentes espejados. La Caribe viene con cordón desmontable para cuando la playa se pone brava.",
    fit: "Angosta a media",
    material: "Acetato reciclado",
    colors: colorset("Musgo", "Vino"),
  },
  {
    id: "sol-cuadrada-tarde",
    name: "Tarde",
    category: "sol",
    shape: "cuadrada",
    price: 239000,
    description:
      "Lente degradé de arriba a abajo para esos atardeceres que no dan tregua. Protección UV400 y marco de acetato mate.",
    fit: "Media",
    material: "Acetato reciclado",
    colors: colorset("Carbón", "Concha", "Ocre"),
  },
  {
    id: "sol-gatuna-flor",
    name: "Flor",
    category: "sol",
    shape: "gatuna",
    price: 259000,
    description:
      "Cat-eye de sol con un toque retro. La Flor tiene varillas con resorte y viene en un estuche rígido tejido a mano.",
    fit: "Angosta",
    material: "Acetato reciclado",
    colors: colorset("Vino", "Arena"),
    tag: "Nueva",
  },
  {
    id: "compu-cuadrada-foco",
    name: "Foco",
    category: "pal-compu",
    shape: "cuadrada",
    price: 189000,
    description:
      "Filtro de luz azul de verdad (no solo un recubrimiento): bloquea hasta 40% del espectro que más cansa la vista frente a la pantalla.",
    fit: "Media",
    material: "Acetato reciclado",
    colors: colorset("Carbón", "Musgo"),
    tag: "Más vendida",
  },
  {
    id: "compu-redonda-pixel",
    name: "Pixel",
    category: "pal-compu",
    shape: "redonda",
    price: 179000,
    description:
      "La versión redonda de nuestro filtro de luz azul. Sin aumento, para usar todo el día sin sentir la cara cargada.",
    fit: "Angosta a media",
    material: "Acetato reciclado",
    colors: colorset("Concha", "Arena", "Carbón"),
  },
  {
    id: "compu-hexagonal-noche",
    name: "Noche",
    category: "pal-compu",
    shape: "hexagonal",
    price: 199000,
    description:
      "Para maratones de código o de series. Lente ámbar clara que corta el azul sin distorsionar los colores en pantalla.",
    fit: "Media",
    material: "Metal + acetato",
    colors: colorset("Ocre", "Carbón"),
  },
  {
    id: "clip-otto",
    name: "Clip Otto",
    category: "clip-on",
    shape: "cuadrada",
    price: 89000,
    description:
      "Clip magnético de sol que se acopla a la montura Otto en dos segundos. Lentes polarizados, se guarda en el mismo estuche.",
    fit: "Compatible con Otto",
    material: "Metal + lente polarizado",
    colors: colorset("Carbón"),
  },
  {
    id: "clip-mora",
    name: "Clip Mora",
    category: "clip-on",
    shape: "redonda",
    price: 89000,
    description:
      "El mismo truco que el Clip Otto pero para la montura Mora. Convierte tus formuladas en gafas de sol sin quitártelas.",
    fit: "Compatible con Mora",
    material: "Metal + lente polarizado",
    colors: colorset("Musgo"),
    tag: "Nueva",
  },
  {
    id: "rio-metal-bruma",
    name: "Bruma",
    category: "formuladas",
    shape: "aviador",
    price: 299000,
    description:
      "Aviador formulado en metal cepillado, para quien quiere ese aire noventero pero con graduación. Incluye funda de cuero vegano.",
    fit: "Media a ancha",
    material: "Metal",
    colors: colorset("Ocre", "Carbón", "Concha"),
  },
  {
    id: "sol-hexagonal-farallon",
    name: "Farallón",
    category: "sol",
    shape: "hexagonal",
    price: 269000,
    description:
      "La más atrevida del catálogo. Lente plana categoría 2 y marco de acetato grueso para caras pequeñas que quieren protagonismo.",
    fit: "Angosta",
    material: "Acetato reciclado",
    colors: colorset("Vino", "Ocre"),
  },
  {
    id: "compu-gatuna-sombra",
    name: "Sombra",
    category: "pal-compu",
    shape: "gatuna",
    price: 199000,
    description:
      "Filtro de luz azul en formato cat-eye suave. Nuestra opción más pedida por quienes trabajan remoto todo el día.",
    fit: "Angosta a media",
    material: "Acetato reciclado",
    colors: colorset("Vino", "Concha"),
  },
];

export function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, count);
}
