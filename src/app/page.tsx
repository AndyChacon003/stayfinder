const categorias = [
  { id: 1, nombre: "Cabañas", icono: "🌲" },
  { id: 2, nombre: "Lofts", icono: "🏢" },
  { id: 3, nombre: "Casas", icono: "🏠" },
  { id: 4, nombre: "Mansiones", icono: "🏰" },
  { id: 5, nombre: "Glamping", icono: "⛺" },
  { id: 6, nombre: "Frente al lago", icono: "🌊" }
];

const alojamientos = [
  {
    id: 1,
    tipo: "Cabaña",
    titulo: "Refugio en el Bosque",
    calificacion: "4.8",
    ubicacion: "Mazamitla, Jalisco",
    precio: "$1,200",
    imagen: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80"
  },
  {
    id: 2,
    tipo: "Departamento",
    titulo: "Penthouse Céntrico",
    calificacion: "4.9",
    ubicacion: "Guadalajara, Jalisco",
    precio: "$2,100",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
  },
  {
    id: 3,
    tipo: "Casa",
    titulo: "Villa del Sol",
    calificacion: "4.7",
    ubicacion: "Tepoztlán, Morelos",
    precio: "$1,800",
    imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    id: 4,
    tipo: "Loft",
    titulo: "Estudio Industrial",
    calificacion: "4.6",
    ubicacion: "Ciudad de México",
    precio: "$1,500",
    imagen: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
  },
  {
    id: 5,
    tipo: "Cabaña",
    titulo: "Glamping Estelar",
    calificacion: "5.0",
    ubicacion: "Valle de Bravo, Edomex",
    precio: "$3,200",
    imagen: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80"
  },
  {
    id: 6,
    tipo: "Casa",
    titulo: "Casa Colonial",
    calificacion: "4.8",
    ubicacion: "San Miguel de Allende",
    precio: "$2,500",
    imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-purple-700 transition-colors">Alojamientos</a>
          <a href="#" className="hover:text-purple-700 transition-colors">Favoritos</a>
          <a href="#" className="hover:text-purple-700 transition-colors">Acerca de</a>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-36 px-8">
        <div className="max-w-5xl mx-auto md:text-left text-center">
          <p className="text-purple-200 font-semibold text-sm tracking-wide mb-4">
            Hospedajes excepcionales
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-2xl text-white">
            Encuentra un espacio exclusivo para tu viaje
          </h1>
          <p className="text-slate-300 text-base md:text-lg font-normal max-w-xl">
            Explora casas, lofts y cabañas con diseños únicos y amenidades de primer nivel.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-3 flex flex-col md:flex-row gap-2 items-center border border-slate-100">
          <div className="flex-1 w-full flex flex-col px-5 py-3 md:border-r border-slate-200">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Destino</label>
            <input type="text" placeholder="¿A dónde quieres ir?" className="outline-none text-base text-slate-800 font-medium placeholder-slate-400 bg-transparent" />
          </div>
          <div className="flex-1 w-full flex flex-col px-5 py-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Huéspedes</label>
            <select className="outline-none text-base text-slate-800 font-medium cursor-pointer bg-transparent">
              <option>Cualquiera</option>
              <option>1 a 2 huéspedes</option>
              <option>3 a 4 huéspedes</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-purple-800 text-white font-semibold py-4 px-10 rounded-xl hover:bg-purple-900 transition-colors shadow-md">
            Buscar
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12 mb-4">
        <div className="flex justify-between items-center overflow-x-auto py-4 scrollbar-hide gap-8">
          {categorias.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center gap-2 min-w-max cursor-pointer text-slate-500 hover:text-purple-900 transition-colors group">
              <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">{cat.icono}</span>
              <span className="text-sm font-medium border-b-2 border-transparent group-hover:border-purple-900 pb-1">{cat.nombre}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-10 text-slate-900 tracking-tight">Alojamientos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alojamientos.map((lugar) => (
            <div key={lugar.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
              <div className="w-full h-56 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-900 shadow-sm">
                  {lugar.tipo}
                </div>
                <img src={lugar.imagen} alt={lugar.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-900 text-lg leading-tight">{lugar.titulo}</h3>
                  <span className="text-sm font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded-md flex items-center gap-1">
                    ★ {lugar.calificacion}
                  </span>
                </div>
                <p className="text-sm font-normal text-slate-500 mb-6">{lugar.ubicacion}</p>
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <p className="font-bold text-lg text-slate-900">{lugar.precio} <span className="font-normal text-sm text-slate-500">MXN / noche</span></p>
                  <button className="w-full bg-slate-900 text-white mt-5 py-3 rounded-xl font-medium hover:bg-purple-800 transition-colors">
                    Ver disponibilidad
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="bg-purple-900 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">¿Tienes una propiedad?</h2>
        <p className="text-purple-200 mb-6 text-sm md:text-base">Próximamente podrás registrar tus alojamientos en StayFinder.</p>
        <button className="bg-[#e61e4d] hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-md transition-colors">
          Más información
        </button>
      </section>

      <footer className="bg-[#0B0F19] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-1">StayFinder</h4>
            <p className="text-slate-400 text-sm">Proyecto educativo desarrollado con Next.js.</p>
          </div>
          <div className="text-slate-400 text-sm text-center md:text-right">
            © 2026 StayFinder. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}