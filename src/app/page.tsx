export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* 1. Navbar con borde marcado */}
      <header className="flex justify-between items-center p-6 border-b-4 border-black bg-white">
        <div className="text-purple-800 font-black text-2xl tracking-tighter uppercase">StayFinder</div>
        <nav className="hidden md:flex gap-8 text-sm font-bold text-black">
          <a href="#" className="hover:text-purple-600 transition-colors">Alojamientos</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Favoritos</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Acerca de</a>
        </nav>
      </header>

      {/* 2. Hero Section (Degradado personalizado) */}
      <section className="bg-gradient-to-b from-purple-900 to-black text-white pt-20 pb-32 px-8 border-b-4 border-black">
        <div className="max-w-5xl mx-auto md:text-left text-center">
          <p className="text-purple-300 font-bold text-xs uppercase tracking-widest mb-3">
            Hospedajes fuera de lo común
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight max-w-2xl uppercase tracking-tight">
            Encuentra un espacio épico para tu viaje
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium">
            Explora casas, lofts y cabañas con diseños únicos en todo el país.
          </p>
        </div>
      </section>

      {/* 3. Buscador Flotante (Estilo minimalista con sombras duras) */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2 flex flex-col md:flex-row gap-2 items-center">

          <div className="flex-1 w-full flex flex-col px-4 py-2 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <label className="text-xs font-black text-black uppercase">Destino</label>
            <input type="text" placeholder="¿A dónde quieres ir?" className="mt-1 outline-none text-sm text-gray-800 font-medium placeholder-gray-400" />
          </div>

          <div className="flex-1 w-full flex flex-col px-4 py-2">
            <label className="text-xs font-black text-black uppercase">Huéspedes</label>
            <select className="mt-1 outline-none bg-white text-sm text-gray-800 font-medium cursor-pointer">
              <option>Cualquiera</option>
              <option>1 a 2 huéspedes</option>
              <option>3 a 4 huéspedes</option>
            </select>
          </div>

          <button className="w-full md:w-auto bg-purple-700 text-white font-black uppercase py-3 px-8 border-2 border-black hover:bg-purple-900 transition-colors">
            Buscar
          </button>
        </div>
      </div>

      {/* 4. Sección de Alojamientos (Tarjetas con contornos negros) */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Destacados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Tarjeta 1 */}
          <div className="bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="bg-gray-100 w-full h-48 border-2 border-black mb-4 flex items-center justify-center text-gray-500 text-sm font-bold uppercase">
              [ Cabaña ]
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-black text-black text-lg leading-tight">Refugio en el Lago</h3>
              <span className="text-sm font-black bg-purple-200 px-2 py-0.5 border border-black">★ 4.8</span>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-3">Pátzcuaro, Michoacán</p>
            <div className="mt-auto pt-4 border-t-2 border-black">
              <p className="font-black text-xl text-black">$1,250 <span className="font-bold text-xs text-gray-500 uppercase">MXN / noche</span></p>
              <button className="w-full bg-black text-white mt-4 py-2.5 font-black uppercase tracking-wider hover:bg-purple-800 transition-colors border-2 border-black">
                Ver más
              </button>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="bg-gray-100 w-full h-48 border-2 border-black mb-4 flex items-center justify-center text-gray-500 text-sm font-bold uppercase">
              [ Departamento ]
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-black text-black text-lg leading-tight">Loft Céntrico</h3>
              <span className="text-sm font-black bg-purple-200 px-2 py-0.5 border border-black">★ 4.5</span>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-3">Morelia, Michoacán</p>
            <div className="mt-auto pt-4 border-t-2 border-black">
              <p className="font-black text-xl text-black">$900 <span className="font-bold text-xs text-gray-500 uppercase">MXN / noche</span></p>
              <button className="w-full bg-black text-white mt-4 py-2.5 font-black uppercase tracking-wider hover:bg-purple-800 transition-colors border-2 border-black">
                Ver más
              </button>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="bg-gray-100 w-full h-48 border-2 border-black mb-4 flex items-center justify-center text-gray-500 text-sm font-bold uppercase">
              [ Casa ]
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-black text-black text-lg leading-tight">Villa Piscina</h3>
              <span className="text-sm font-black bg-purple-200 px-2 py-0.5 border border-black">★ 4.9</span>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-3">Cuernavaca, Morelos</p>
            <div className="mt-auto pt-4 border-t-2 border-black">
              <p className="font-black text-xl text-black">$2,400 <span className="font-bold text-xs text-gray-500 uppercase">MXN / noche</span></p>
              <button className="w-full bg-black text-white mt-4 py-2.5 font-black uppercase tracking-wider hover:bg-purple-800 transition-colors border-2 border-black">
                Ver más
              </button>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}