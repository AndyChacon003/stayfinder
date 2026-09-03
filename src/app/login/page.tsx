import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <header className="p-6 bg-white shadow-sm flex items-center justify-between border-b border-slate-100">
                <Link href="/" className="text-purple-900 font-bold text-2xl tracking-tight">StayFinder</Link>
            </header>

            <main className="flex-1 flex items-center justify-center p-6">
                <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-8 text-center">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Bienvenido de nuevo</h1>
                        <p className="text-purple-200 font-medium text-sm">Inicia sesión para gestionar tus reservas</p>
                    </div>

                    <div className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-slate-900"
                                    placeholder="tu@correo.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-slate-900"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-600" />
                                    <span className="text-sm font-medium text-slate-600">Recordarme</span>
                                </label>
                                <a href="#" className="text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors">¿Olvidaste tu contraseña?</a>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-slate-900 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-purple-900/30 active:scale-95"
                            >
                                Iniciar sesión
                            </button>
                        </form>
                    </div>

                    <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 text-center">
                        <p className="text-sm font-medium text-slate-600">
                            ¿No tienes una cuenta? <a href="#" className="text-purple-700 font-bold hover:text-purple-900 transition-colors">Regístrate</a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}