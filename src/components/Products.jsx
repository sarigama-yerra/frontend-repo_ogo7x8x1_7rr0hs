export default function Products() {
  const products = [
    {
      name: "[Nom du produit 1. Ex: \"NOXX ORIGINAL BLUE\"]",
      desc: "[Copiez la description de ce produit. Ex: \"Le goût rafraîchissant de... faible en calories...\"]",
      color: "from-sky-500 to-blue-600",
    },
    {
      name: "[Nom du produit 2. Ex: \"NOXX RED FURY\"]",
      desc: "[Copiez la description de ce produit.]",
      color: "from-rose-500 to-red-600",
    },
  ];

  return (
    <section id="boissons" className="relative w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">[Copiez-collez le titre de la section. Ex: "NOS SAVEURS UNIQUES"]</h2>
        <p className="text-white/70 mb-10">Découvrez nos canettes conçues pour la performance et le goût, sans compromis.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <div key={i} className="relative rounded-2xl p-6 bg-gradient-to-br " style={{
              backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`
            }}>
              <div className={`absolute inset-0 rounded-2xl opacity-70 bg-gradient-to-br ${p.color}`} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-white/85">{p.desc}</p>
                <div className="mt-6">
                  <button className="inline-flex items-center rounded-full bg-white text-gray-900 font-semibold px-5 py-2 shadow hover:opacity-90">En savoir plus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
