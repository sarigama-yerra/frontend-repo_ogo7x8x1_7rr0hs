import Hero from './components/Hero';
import Products from './components/Products';
import Why from './components/Why';
import Ambassador from './components/Ambassador';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#accueil" className="font-extrabold tracking-wide">NOXX</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#boissons" className="hover:text-white">Boissons</a>
            <a href="#engagements" className="hover:text-white">Pourquoi NOXX</a>
            <a href="#ambassadeur" className="hover:text-white">Ambassadeur</a>
            <a href="#boutique" className="hover:text-white">Boutique</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Products />
        <Why />
        <Ambassador />
        <CTA />
      </main>

      <footer className="bg-black border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} NOXX. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
