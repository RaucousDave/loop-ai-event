import Navbar from "../Navbar";

export default function Ankara() {
  return (
    <section className="relative min-h-screen bg-[#fce8c3] text-white overflow-hidden">
      {/* Ankara Blobs */}
      <div
        className="absolute top-[-80px] left-[-100px] w-[400px] h-[400px] bg-cover bg-no-repeat mix-blend-multiply opacity-80"
        style={{
          backgroundImage: `url('/images/ankara-1.jpg')`,
          clipPath: `polygon(20% 0%, 80% 10%, 100% 40%, 80% 80%, 40% 100%, 0% 70%, 0% 30%)`,
        }}
      />
      <div
        className="absolute bottom-[-100px] right-[-120px] w-[350px] h-[350px] bg-cover bg-no-repeat mix-blend-multiply opacity-80"
        style={{
          backgroundImage: `url('/images/ankara-2.jpg')`,
          clipPath: `circle(50% at 50% 50%)`,
        }}
      />
      <div
        className="absolute top-[-100px] right-[-120px] w-[350px] h-[350px] bg-cover bg-no-repeat mix-blend-multiply opacity-80"
        style={{
          backgroundImage: `url('/images/ankara-3.jpg')`,
          clipPath: `circle(50% at 50% 50%)`,
        }}
      />

      {/* Navbar */}
      <div className="relative z-10 px-6 pt-6">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900">
          Welcome to Gbedu City
        </h1>
        <p className="mt-4 text-lg text-slate-800 max-w-2xl">
          One city. One rhythm. Many voices.
        </p>
        <button className="mt-6 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-[#a21b1b] transition">
          Join The Waitlist
        </button>
      </div>
    </section>
  );
}
