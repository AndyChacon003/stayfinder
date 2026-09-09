import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { crearAlojamiento } from "../../actions/admin";

export default async function NuevoAlojamiento() {
    const cookieStore = await cookies();
    const rol = cookieStore.get("stayfinder_rol")?.value;

    if (rol !== "ADMIN") {
        redirect("/");
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-8 flex justify-center items-center">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="bg-purple-900 p-6 flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold text-white">Agregar Alojamiento</h1>
                    <Link href="/admin" className="text-purple-200 hover:text-white font-bold text-sm transition-colors">
                        Cancelar
                    </Link>
                </div>

                <form action={crearAlojamiento} className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Título</label>
                            <input type="text" name="titulo" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900" placeholder="Ej. Cabaña Suiza" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Tipo</label>
                            <select name="tipo" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900">
                                <option value="Cabaña">Cabaña</option>
                                <option value="Loft">Loft</option>
                                <option value="Departamento">Departamento</option>
                                <option value="Villa">Villa</option>
                                <option value="Glamping">Glamping</option>
                                <option value="Estudio">Estudio</option>
                                <option value="Hacienda">Hacienda</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Ubicación</label>
                            <input type="text" name="ubicacion" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900" placeholder="Ej. Morelia, Michoacán" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Precio (MXN)</label>
                            <input type="text" name="precio" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900" placeholder="Ej. 1,500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Calificación</label>
                            <input type="text" name="calificacion" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900" placeholder="Ej. 4.9" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">URL de Imagen</label>
                            <input type="url" name="imagen" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900" placeholder="https://..." />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-md mt-4">
                        Guardar Alojamiento
                    </button>
                </form>
            </div>
        </div>
    );
}