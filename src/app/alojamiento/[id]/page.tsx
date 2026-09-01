import Link from "next/link";
import { prisma } from "../../lib/prisma";

export default async function AlojamientoDetalle({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const idNumerico = parseInt(resolvedParams.id, 10);

    const lugar = await prisma.alojamiento.findUnique({
        where: { id: idNumerico }
    });

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
                        <a href={lugar.url_airbnb} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#e61e4d] hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors mb-4">
                            Ver en Airbnb
                        </a>
                        <p className="text-xs text-center text-slate-500">Serás redirigido a la plataforma externa</p>
                    </div>
                </div>
            </main>
        </div>
    );
}