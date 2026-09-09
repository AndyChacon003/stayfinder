import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { borrarAlojamiento } from "../actions/admin";

export default async function AdminDashboard() {
    const cookieStore = await cookies();
    const rol = cookieStore.get("stayfinder_rol")?.value;

    if (rol !== "ADMIN") {
        redirect("/");
    }

    const alojamientos = await prisma.alojamiento.findMany({
        orderBy: { id: "desc" }
    });

    const usuarios = await prisma.usuario.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-8">
            <header className="mb-8 flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div>
                    <h1 className="text-3xl font-extrabold text-purple-900">Panel de Administración</h1>
                    <p className="text-slate-500 font-medium mt-1">Gestión de base de datos StayFinder</p>
                </div>
                <Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-800 transition-colors shadow-md">
                    Volver al inicio
                </Link>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-800">Alojamientos ({alojamientos.length})</h2>
                        <Link href="/admin/nuevo" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-colors">
                            + Nuevo
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-600">
                                <tr>
                                    <th className="p-3 rounded-tl-xl">ID</th>
                                    <th className="p-3">Título</th>
                                    <th className="p-3">Precio</th>
                                    <th className="p-3 rounded-tr-xl">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alojamientos.map(a => (
                                    <tr key={a.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                        <td className="p-3 font-bold text-slate-500">{a.id}</td>
                                        <td className="p-3 font-medium text-slate-800">{a.titulo}</td>
                                        <td className="p-3 text-purple-700 font-bold">${a.precio}</td>
                                        <td className="p-3 flex gap-3">
                                            <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors">Editar</button>
                                            <form action={borrarAlojamiento}>
                                                <input type="hidden" name="id" value={a.id} />
                                                <button type="submit" className="text-red-600 font-bold hover:text-red-800 transition-colors">Borrar</button>
                                            </form>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Usuarios Registrados ({usuarios.length})</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-600">
                                <tr>
                                    <th className="p-3 rounded-tl-xl">Nombre</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3 rounded-tr-xl">Rol</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(u => (
                                    <tr key={u.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                        <td className="p-3 font-medium text-slate-800">{u.nombre}</td>
                                        <td className="p-3 text-slate-500">{u.email}</td>
                                        <td className="p-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${u.rol === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-600'}`}>
                                                {u.rol}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}