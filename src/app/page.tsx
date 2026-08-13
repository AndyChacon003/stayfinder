export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* 1. Navbar */}
      <header className="flex justify-between items-center p-6 border-b border-gray-100">
        <div className="text-red-600 font-bold text-2xl tracking-tighter">StayFinder</div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
          <a href="#" className="hover:text-red-600">Alojamientos</a>
          <a href="#" className="hover:text-red-600">Favoritos</a>
          <a href="#" className="hover:text-red-600">Acerca de</a>
        </nav>
      </header>

      {/* 2. Hero Section (Banner oscuro) */}
      <section className="bg-[#0B101E] text-white pt-20 pb-32 px-8">
        <div className="max-w-5xl mx-auto md:text-left text-center">
          <p className="text-red-500 font-bold text-xs uppercase tracking-widest mb-3">
            Hospedajes aquí en México
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-2xl">
            Encuentra un lugar especial para tu próximo viaje
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Explora casas, departamentos, lofts y cabañas en diferentes destinos del país.
          </p>
        </div>
      </section>

      {/* 3. Buscador Flotante */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-2 flex flex-col md:flex-row gap-2 items-center">

          <div className="flex-1 w-full flex flex-col px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
            <label className="text-xs font-bold text-gray-800">Destino</label>
            <input type="text" placeholder="¿A dónde quieres ir?" className="mt-1 outline-none text-sm text-gray-600" />
          </div>

          <div className="flex-1 w-full flex flex-col px-4 py-2">
            <label className="text-xs font-bold text-gray-800">Huéspedes</label>
            <select className="mt-1 outline-none bg-white text-sm text-gray-600 cursor-pointer">
              <option>Cualquiera</option>
              <option>1 a 2 huéspedes</option>
              <option>3 a 4 huéspedes</option>
            </select>
          </div>

          <button className="w-full md:w-auto bg-red-600 text-white font-bold py-3 px-8 rounded-md m-2 hover:bg-red-700 transition-colors">
            Buscar
          </button>
        </div>
      </div>

      {/* 4. Sección de Alojamientos (Tarjetas tipo Wireframe) */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Alojamientos recomendados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Tarjeta 1 */}
          <div className="border border-gray-200 rounded-xl p-3 shadow-sm flex flex-col">
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm font-medium">
              [ Imagen de Cabaña ]
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-900">Cabaña frente al lago</h3>
              <span className="text-sm font-bold text-gray-800">★ 4.8</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">Pátzcuaro, Michoacán</p>
            <div className="mt-auto">
              <p className="font-bold text-gray-900">$1,250 <span className="font-normal text-sm text-gray-500">MXN por noche</span></p>
              <button className="w-full bg-[#0B101E] text-white mt-4 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
                Ver alojamiento
              </button>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="border border-gray-200 rounded-xl p-3 shadow-sm flex flex-col">
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm font-medium">
              [ Imagen de Departamento ]
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-900">Departamento en el centro</h3>
              <span className="text-sm font-bold text-gray-800">★ 4.5</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">Morelia, Michoacán</p>
            <div className="mt-auto">
              <p className="font-bold text-gray-900">$900 <span className="font-normal text-sm text-gray-500">MXN por noche</span></p>
              <button className="w-full bg-[#0B101E] text-white mt-4 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
                Ver alojamiento
              </button>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="border border-gray-200 rounded-xl p-3 shadow-sm flex flex-col">
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm font-medium">
              [ Imagen de Casa ]
            </div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-900">Casa con alberca</h3>
              <span className="text-sm font-bold text-gray-800">★ 4.9</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">Cuernavaca, Morelos</p>
            <div className="mt-auto">
              <p className="font-bold text-gray-900">$2,400 <span className="font-normal text-sm text-gray-500">MXN por noche</span></p>
              <button className="w-full bg-[#0B101E] text-white mt-4 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
                Ver alojamiento
              </button>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}