import { Link } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/products";
import GlassesIllustration from "../components/GlassesIllustration";
import ProductCard from "../components/ProductCard";

const featured = PRODUCTS.filter((p) => p.tag === "Más vendida").slice(0, 4);

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl text-ink">Elige por categoría</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/tienda/${cat.slug}`}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper"
            >
              <div className="aspect-square">
                <GlassesIllustration
                  shape={["redonda", "aviador", "cuadrada", "gatuna"][i % 4]}
                  color={["#1f3d2f", "#c68f2e", "#7c2c33", "#232323"][i % 4]}
                  className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-ink">{cat.label}</h3>
                <p className="text-sm text-ink/60">{cat.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <StoryBanner />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl text-ink">Lo más pedido</h2>
          <Link to="/tienda/formuladas" className="text-sm font-medium text-forest hover:underline">
            Ver todo
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="font-display text-sm italic text-forest">#cuatroojos</p>
          <h1 className="mt-2 max-w-md font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            Gafas hechas para ver(te) mejor.
          </h1>
          <p className="mt-4 max-w-sm text-ink/70">
            Monturas formuladas y de sol con envío gratis a toda Colombia,
            devoluciones sin preguntas y una garantía que sí se cumple.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/tienda/formuladas"
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-light"
            >
              Ver formuladas
            </Link>
            <Link
              to="/tienda/sol"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-forest hover:text-forest"
            >
              Ver de sol
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-2xl">
            <GlassesIllustration shape="gatuna" color="#7c2c33" className="h-40 w-full sm:h-48" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <GlassesIllustration shape="redonda" color="#1f3d2f" className="h-32 w-full sm:h-40" />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <GlassesIllustration shape="aviador" color="#c68f2e" className="h-32 w-full sm:h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryBanner() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div className="overflow-hidden rounded-2xl bg-cream/10 p-6">
          <GlassesIllustration
            shape="hexagonal"
            color="#e0ab4c"
            background="transparent"
            className="h-40 w-full"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl">Diseñadas primero, formuladas después.</h2>
          <p className="mt-3 max-w-xl text-cream/75">
            Empezamos por cómo se ven las monturas puestas, no por lo que es
            fácil de fabricar. Después las probamos con optómetras aliados en
            toda Colombia para que la fórmula quede exacta la primera vez.
          </p>
        </div>
      </div>
    </section>
  );
}
