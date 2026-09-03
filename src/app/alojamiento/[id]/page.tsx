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
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-24">
            <header className="p-6 bg-white shadow-sm flex items-center justify-between border-b border-slate-100 sticky top-0 z-50">
                <Link href="/" className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</Link>
                <Link href="/" className="text-sm font-bold text-slate-600 hover:text-purple-900 transition-colors bg-slate-100 px-4 py-2 rounded-full">
                    ← Volver
                </Link>
            </header>

            <main className="max-w-6xl mx-auto px-6 mt-10">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">{lugar.titulo}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600 font-medium">
                        <span className="flex items-center gap-1 text-purple-800 font-bold">
                            ★ {lugar.calificacion}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="underline decoration-purple-300 decoration-2 underline-offset-4">{lugar.ubicacion}</span>
                        <span className="text-slate-300">|</span>
                        <span className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">{lugar.tipo}</span>
                    </div>
                </div>

                <div className="w-full h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-2xl mb-12 relative group">
                    <img src={lugar.imagen} alt={lugar.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-10">
                        <section>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Acerca de este espacio</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                Descubre la magia de hospedarte en este increíble lugar. Este alojamiento tipo {lugar.tipo.toLowerCase()} es perfecto para tu próxima escapada.
                                Cuenta con diseños únicos, espacios acogedores y se encuentra en una de las mejores zonas de {lugar.ubicacion}.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Preparado para brindarte una experiencia inolvidable con todas las comodidades que necesitas para sentirte como en casa, disfrutando de la tranquilidad y el confort que ofrecemos.
                            </p>
                        </section>

                        <hr className="border-slate-200" />

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Lo que ofrece este lugar</h2>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <div className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-purple-600 text-xl">✓</span> Wifi de alta velocidad</div>
                                <div className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-purple-600 text-xl">✓</span> Estacionamiento gratuito</div>
                                <div className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-purple-600 text-xl">✓</span> Cocina equipada</div>
                                <div className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-purple-600 text-xl">✓</span> Área de trabajo</div>
                                <div className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-purple-600 text-xl">✓</span> Aire acondicionado</div>
                                <div className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-purple-600 text-xl">✓</span> Seguridad 24/7</div>
                            </div>
                        </section>
                    </div>

                    <div className="relative">
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 sticky top-28">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-3xl font-extrabold text-slate-900">${lugar.precio}</span>
                                    <span className="text-base font-medium text-slate-500 ml-1">MXN / noche</span>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-xl mb-6 overflow-hidden">
                                <div className="flex border-b border-slate-200">
                                    <div className="p-3 flex-1 border-r border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                                        <div className="text-xs font-bold text-slate-900 uppercase">Llegada</div>
                                        <div className="text-sm text-slate-500">Agregar fecha</div>
                                    </div>
                                    <div className="p-3 flex-1 hover:bg-slate-50 transition-colors cursor-pointer">
                                        <div className="text-xs font-bold text-slate-900 uppercase">Salida</div>
                                        <div className="text-sm text-slate-500">Agregar fecha</div>
                                    </div>
                                </div>
                                <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="text-xs font-bold text-slate-900 uppercase">Huéspedes</div>
                                    <div className="text-sm text-slate-500">1 huésped</div>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-purple-900/30 active:scale-95 mb-4">
                                Reservar
                            </button>
                            <p className="text-sm text-center text-slate-500 font-medium">No se hará ningún cargo aún</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}