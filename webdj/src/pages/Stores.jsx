const STORES = [
  { city: "Bogotá", name: "Templo Chapinero", address: "Cra 13 #54-11" },
  { city: "Bogotá", name: "Templo Usaquén", address: "Cl 119 #6-05" },
  { city: "Medellín", name: "Templo El Poblado", address: "Cra 37 #8-40" },
  { city: "Cali", name: "Templo Granada", address: "Av 9N #10-25" },
  { city: "Barranquilla", name: "Templo Buenavista", address: "Cra 53 #98-99" },
];

export default function Stores() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <h1 className="font-display text-3xl text-ink">Nuestros templos</h1>
      <p className="mt-2 max-w-xl text-ink/60">
        Ven a probarte las monturas y hacerte un examen de vista gratis con
        nuestros optómetras aliados.
      </p>

      <ul className="mt-8 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-paper">
        {STORES.map((store) => (
          <li key={store.name} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="font-medium text-ink">{store.name}</p>
              <p className="text-sm text-ink/60">{store.address}</p>
            </div>
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink/70">
              {store.city}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
