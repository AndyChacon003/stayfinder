import Link from "next/link";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const alojamientos = await prisma.alojamiento.findMany({
    orderBy: { id: 'asc' }
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-24">
      <header className="p-6 bg-white shadow-sm flex items-center justify-between border-b border-slate-100 sticky top-0 z-50">
        <Link href="/" className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</Link>
        <nav className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-bold text-white bg-purple-700 hover:bg-purple-800 transition-colors px-5 py-2 rounded-full shadow-md hover:shadow-purple-700/40">
            Iniciar Sesión
          </Link>
        </nav>
      </header>

      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900 text-white py-24 px-6 mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">Encuentra un espacio <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">exclusivo</span></h1>
          <p className="text-xl md:text-2xl font-medium text-purple-100 max-w-2xl mx-auto mb-10 drop-shadow-md">Explora casas, lofts y cabañas con diseños únicos y amenidades de primer nivel para tu próximo viaje.</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-4 border-purple-600 inline-block pb-2">Alojamientos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {alojamientos.map((lugar) => (
            <div key={lugar.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img src={lugar.imagen} alt={lugar.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-900 shadow-sm">
                  {lugar.tipo}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 truncate pr-4">{lugar.titulo}</h3>
                  <span className="flex items-center gap-1 text-purple-700 font-bold bg-purple-50 px-2 py-1 rounded-lg text-sm">
                    ★ {lugar.calificacion}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-4 font-medium truncate">{lugar.ubicacion}</p>
                <div className="flex items-end justify-between mt-6">
                  <div>
                    <span className="text-2xl font-extrabold text-slate-900">${lugar.precio}</span>
                    <span className="text-xs text-slate-500 font-medium ml-1">MXN/noche</span>
                  </div>
                  <Link href={`/alojamiento/${lugar.id}`} className="bg-slate-900 hover:bg-purple-800 text-white font-bold py-2 px-5 rounded-xl transition-colors shadow-md">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}