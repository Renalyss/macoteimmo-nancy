import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Head>
        <title>MaCoteImmoNancy</title>
      </Head>
      <header className="w-full px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-amber-500">🏛 MaCoteImmoNancy</h1>
        <nav className="space-x-4 text-sm">
          <a href="#formulaire" className="hover:text-amber-500">Estimer votre bien</a>
          <a href="/contact" className="hover:text-amber-500">Contact</a>
        </nav>
      </header>

      <main className="text-center p-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Estimez la valeur de<br />votre bien immobilier</h2>
        <p className="text-lg text-gray-400 mb-8">Accompagne les Nancéiens à vendre leur bien</p>

        <form id="formulaire" className="bg-zinc-900 p-6 rounded-lg w-full max-w-xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <select className="p-3 rounded bg-zinc-800 text-white" required>
              <option value="">Type de bien</option>
              <option value="appartement">Appartement</option>
              <option value="maison">Maison</option>
            </select>
            <input type="number" placeholder="m²" className="p-3 rounded bg-zinc-800 text-white" required />
          </div>
          <input type="text" placeholder="Adresse ou quartier" className="w-full p-3 rounded bg-zinc-800 text-white" required />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="État du bien" className="p-3 rounded bg-zinc-800 text-white" required />
            <select className="p-3 rounded bg-zinc-800 text-white" required>
              <option value="">État</option>
              <option value="neuf">Neuf</option>
              <option value="ancien">Ancien</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded">
            Estimer mon bien
          </button>
        </form>
      </main>

      <footer className="mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MaCoteImmoNancy. Tous droits réservés.
      </footer>
    </div>
  )
}