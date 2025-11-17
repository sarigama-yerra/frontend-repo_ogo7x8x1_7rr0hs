export default function Why() {
  const items = [
    {
      title: "[Ex: \"ZÉRO SUCRE\"]",
      text: "[Copiez le texte explicatif de cet argument.]",
    },
    {
      title: "[Ex: \"INGRÉDIENTS PREMIUM\"]",
      text: "[Copiez le texte explicatif de cet argument.]",
    },
    {
      title: "[Ex: \"FABRIQUÉ EN FRANCE\"]",
      text: "[Copiez le texte explicatif de cet argument.]",
    },
  ];

  return (
    <section id="engagements" className="w-full py-20 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">[Copiez-collez le titre. Ex: "LA FORCE NOXX"]</h2>
        <p className="text-white/70 mb-10">Nos engagements pour une énergie propre, efficace et responsable.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
