import Link from "next/link";

const alojamientos = [
    { id: 1, tipo: "Cabaña", titulo: "Refugio en el Bosque", calificacion: "4.8", ubicacion: "Mazamitla, Jalisco", precio: "$1,200", imagen: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80" },
    { id: 2, tipo: "Departamento", titulo: "Penthouse Céntrico", calificacion: "4.9", ubicacion: "Guadalajara, Jalisco", precio: "$2,100", imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" },
    { id: 3, tipo: "Casa", titulo: "Villa del Sol", calificacion: "4.7", ubicacion: "Tepoztlán, Morelos", precio: "$1,800", imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
    { id: 4, tipo: "Loft", titulo: "Estudio Industrial", calificacion: "4.6", ubicacion: "Ciudad de México", precio: "$1,500", imagen: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80" },
    { id: 5, tipo: "Cabaña", titulo: "Glamping Estelar", calificacion: "5.0", ubicacion: "Valle de Bravo, Edomex", precio: "$3,200", imagen: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80" },
    { id: 6, tipo: "Casa", titulo: "Casa Colonial", calificacion: "4.8", ubicacion: "San Miguel de Allende", precio: "$2,500", imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" }
];

export default function AlojamientoDetalle({ params }: { params: { id: string } }) {
    const idNumerico = parseInt(params.id);
    const lugar = alojamientos.find((a) => a.id === idNumerico);

    if (!lugar) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800">
                <h1 className="text-4xl font-bold mb-4">Alojamiento no encontrado</h1>
                <Link href="/" className="text-purple-800 underline font-medium hover:text-purple-600">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
            <header className="p-6 bg-white shadow-sm flex items-center justify-between border-b border-slate-100">
                <Link href="/" className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</Link>
                <Link href="/" className="text-sm font-medium text-slate-600 hover:text-purple-900 transition-colors">
                    ← Volver atrás
                </Link>
            </header>

            <main className="max-w-5xl mx-auto px-6 mt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{lugar.titulo}</h1>
                <p className="text-slate-600 font-medium mb-8 flex items-center gap-2">
                    <span className="text-purple-800">★ {lugar.calificacion}</span> • <span>{lugar.ubicacion}</span>
                </p>

                <div className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden shadow-lg mb-10 relative">
                    <img src={lugar.imagen} alt={lugar.titulo} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-purple-900 shadow-sm">
                        {lugar.tipo}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">Acerca de este espacio</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Descubre la magia de hospedarte en este increíble lugar. Este alojamiento tipo {lugar.tipo.toLowerCase()} es perfecto para tu próxima escapada.
                            Cuenta con diseños únicos, espacios acogedores y se encuentra en una de las mejores zonas de {lugar.ubicacion}.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 h-fit sticky top-6">
                        <p className="text-2xl font-bold text-slate-900 mb-6">{lugar.precio} <span className="text-sm font-normal text-slate-500">MXN / noche</span></p>
                        <button className="w-full bg-[#e61e4d] hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors mb-4">
                            Reservar ahora
                        </button>
                        <p className="text-xs text-center text-slate-500">No se te cobrará ningún monto aún</p>
                    </div>
                </div>
            </main>
        </div>
    );
}