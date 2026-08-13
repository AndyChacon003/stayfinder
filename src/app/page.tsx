export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black p-8">

      {/* Contenedor cuadrado con contornos negros */}
      <div className="flex flex-col items-center justify-center w-80 h-80 bg-white border-4 border-black text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">

        <h1 className="text-4xl font-black text-center uppercase tracking-tighter text-purple-700">
          Stayfinder
        </h1>

        <p className="mt-4 text-center font-bold">
          ¡Tu proyecto está en línea!
        </p>

      </div>

    </main>
  );
}