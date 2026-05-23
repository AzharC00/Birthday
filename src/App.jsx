export default function ItachiBirthdaySite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950 to-black opacity-95"></div>

      {/* Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-700 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <div className="backdrop-blur-md bg-black/40 border border-red-700 rounded-3xl shadow-2xl p-10 max-w-3xl w-full">

          <p className="text-red-500 tracking-[0.4em] uppercase text-sm mb-4">
            Akatsuki Birthday Transmission
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-red-600 mb-4">
            Happy Birthday
          </h1>

          <h2 className="text-4xl font-bold mb-8 text-white">
            Your Friend Name
          </h2>

          <div className="border-l-4 border-red-700 pl-4 italic text-gray-300 text-lg mb-8 text-left">
            “People live their lives bound by what they accept as correct and true.”
            <br />
            <span className="text-red-500">— Itachi Uchiha</span>
          </div>

          <p className="text-gray-300 mb-8">
            May your journey be filled with strength and success.
          </p>

          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full border-4 border-red-700 flex items-center justify-center animate-spin"
              style={{ animationDuration: "15s" }}>
              <div className="text-red-600 text-5xl font-bold">暁</div>
            </div>
          </div>

          <button className="bg-red-700 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold">
            Enter The Akatsuki
          </button>

        </div>

        <p className="mt-10 text-gray-500 text-sm uppercase">
          Created with the will of fire 🔥
        </p>

      </div>
    </div>
  );
}