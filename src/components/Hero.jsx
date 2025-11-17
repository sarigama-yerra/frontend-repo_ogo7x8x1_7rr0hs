import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col items-start">
        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20 mb-4">
          NOXX • Performance • Énergie
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
          [Copiez-collez votre slogan principal ici. Ex: "L'ÉNERGIE NOUVELLE DE TEDDY RINER"]
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          [Copiez-collez le texte descriptif sous le titre. Ex: "Découvrez la boisson premium, sans sucre, conçue pour la performance."]
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#boissons" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-semibold px-6 py-3 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition">
            Découvrir
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </section>
  );
}
