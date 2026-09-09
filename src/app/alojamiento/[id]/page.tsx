import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";
import { crearReserva } from "../../actions/reservas";

export default async function AlojamientoDetalle({ params }: { params: { id: string } }) {
    const resolvedParams = await params;
    const cookieStore = await cookies();
    const isLoggedIn = !!cookieStore.get("stayfinder_session");

    const alojamiento = await prisma.alojamiento.findUnique({
        where: { id: parseInt(resolvedParams.id) }
    });

    if (!alojamiento) {
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <header className="p-6 bg-white shadow-sm flex items-center justify-between border-b border-slate-100 sticky top-0 z-50">
                <Link href="/" className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</Link>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="h-96 w-full relative">
                        <img src={alojamiento.imagen} alt={alojamiento.titulo} className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-purple-900 shadow-sm">
                            {alojamiento.tipo}
                        </div>
                    </div>

                    <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{alojamiento.titulo}</h1>
                            <p className="text-lg text-slate-500 font-medium mb-8 flex items-center gap-2">
                                📍 {alojamiento.ubicacion}
                            </p>

                            <div className="border-t border-slate-100 pt-8 mt-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Acerca de este espacio</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Disfruta de una estancia inolvidable en este increíble espacio clasificado como {alojamiento.tipo.toLowerCase()}.
                                    Perfecto para relajarse, con un diseño impecable y todas las comodidades que necesitas para sentirte de primer nivel.
                                </p>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 shadow-sm h-fit">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-3xl font-extrabold text-slate-900">${alojamiento.precio}</span>
                                    <span className="text-sm text-slate-500 font-medium ml-1">MXN / noche</span>
                                </div>
                                <span className="flex items-center gap-1 text-purple-700 font-bold bg-white px-3 py-1 rounded-lg text-sm shadow-sm">
                                    ★ {alojamiento.calificacion}
                                </span>
                            </div>

                            {isLoggedIn ? (
                                <form action={crearReserva} className="space-y-4">
                                    <input type="hidden" name="alojamientoId" value={alojamiento.id} />
                                    <input type="hidden" name="precioTotal" value={alojamiento.precio} />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Llegada</label>
                                            <input type="date" name="fechaInicio" required className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-600 outline-none text-slate-800" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Salida</label>
                                            <input type="date" name="fechaFin" required className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-purple-600 outline-none text-slate-800" />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 rounded-xl transition-all shadow-md mt-4">
                                        Reservar ahora
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center mt-6 border-t border-purple-200 pt-6">
                                    <p className="text-sm text-slate-700 mb-4 font-bold">Inicia sesión para poder reservar</p>
                                    <Link href="/login" className="block w-full bg-slate-900 hover:bg-purple-900 text-white font-bold py-4 rounded-xl transition-all shadow-md">
                                        Iniciar sesión
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}