import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "../actions/auth";

export default async function MisReservas() {
    const cookieStore = await cookies();
    const nombre = cookieStore.get("stayfinder_nombre")?.value;
    const rol = cookieStore.get("stayfinder_rol")?.value;

    if (!nombre) {
        redirect("/login");
    }

    const usuario = await prisma.usuario.findFirst({
        where: { nombre },
        include: {
            reservas: {
                include: { alojamiento: true },
                orderBy: { createdAt: "desc" }
            }
        }
    });

    if (!usuario) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <header className="p-6 bg-white shadow-sm flex items-center justify-between border-b border-slate-100 sticky top-0 z-50">
                <Link href="/" className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</Link>
                <nav className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-sm font-bold text-slate-700 hover:text-purple-700 transition-colors px-2 py-2">
                            Inicio
                        </Link>
                        <span className="text-sm font-bold text-purple-900 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full hidden sm:inline-flex items-center gap-2 shadow-sm">
                            👤 {usuario.nombre}
                            {rol === "ADMIN" && (
                                <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-md uppercase font-extrabold tracking-wider">Admin</span>
                            )}
                        </span>
                        {rol === "ADMIN" && (
                            <Link href="/admin" className="text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors px-5 py-2 rounded-full shadow-sm">
                                Panel Admin
                            </Link>
                        )}
                        <form action={logout}>
                            <button type="submit" className="text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors px-5 py-2 rounded-full shadow-sm">
                                Cerrar Sesión
                            </button>
                        </form>
                    </div>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-4 border-purple-600 inline-block pb-2">Mis Reservas</h1>

                {usuario.reservas.length === 0 ? (
                    <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4">Aún no tienes reservaciones</h2>
                        <p className="text-slate-500 mb-8 font-medium">Explora nuestros alojamientos y planea tu próximo viaje.</p>
                        <Link href="/" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md">
                            Explorar alojamientos
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {usuario.reservas.map(reserva => (
                            <div key={reserva.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col sm:flex-row hover:shadow-xl transition-shadow">
                                <div className="sm:w-2/5 h-48 sm:h-auto relative">
                                    <img src={reserva.alojamiento.imagen} alt={reserva.alojamiento.titulo} className="w-full h-full object-cover" />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-purple-900 shadow-sm">
                                        {reserva.alojamiento.tipo}
                                    </div>
                                </div>
                                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1 truncate">{reserva.alojamiento.titulo}</h3>
                                        <p className="text-sm text-slate-500 font-medium mb-4 truncate">📍 {reserva.alojamiento.ubicacion}</p>
                                        <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Llegada</p>
                                            <p className="text-sm font-bold text-slate-800">{reserva.fechaInicio.toLocaleDateString()}</p>
                                            <div className="h-px bg-slate-200 w-full my-1"></div>
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Salida</p>
                                            <p className="text-sm font-bold text-slate-800">{reserva.fechaFin.toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-end">
                                        <span className="text-sm font-bold text-slate-500">Total</span>
                                        <span className="text-2xl font-extrabold text-purple-700">${reserva.total}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}