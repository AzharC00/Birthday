export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden font-sans">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950 to-black opacity-95"></div>

      {/* Ambient glow effects */}
      <div className="absolute w-96 h-96 bg-red-700 blur-3xl opacity-20 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-red-900 blur-3xl opacity-20 rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Main card */}
      <div className="relative z-10 text-center p-10 border border-red-700 rounded-2xl bg-black/60 shadow-2xl max-w-md">

        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Happy Birthday, Shamir 🎂
        </h1>

        <p className="text-gray-300 mb-6">
          From the shadows of Akatsuki… this day belongs to you.
        </p>

        <div className="text-red-400 text-lg italic mb-6">
          “Even in darkness, legends are born.”
        </div>

        <div className="text-sm text-gray-400">
          — A message from your hidden allies ☁️
        </div>

      </div>
    </div>
  );
}