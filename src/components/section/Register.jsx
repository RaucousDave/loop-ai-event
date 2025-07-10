export default function Register() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffdd59] drop-shadow-lg">
          Get Your Gbedu Pass 🎫
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Don’t just hear about it —{" "}
          <span className="text-[#ffdd59]">be there</span>. The beat is calling.
        </p>
      </div>

      <form className="max-w-lg mx-auto bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-xl space-y-6 border border-white/10">
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="text-sm font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffdd59]"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffdd59]"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="ticket" className="text-sm font-semibold mb-1">
            Ticket Type
          </label>
          <select
            id="ticket"
            required
            className="p-3 rounded-lg bg-[#111] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffdd59]"
          >
            <option>General Admission</option>
            <option>VIP Pass</option>
            <option>Backstage Access 🔥</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ffdd59] text-[#1f1f1f] text-lg font-bold py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg"
        >
          Lock In My Pass
        </button>
      </form>

      <p className="mt-8 text-center text-sm italic text-white/60">
        “You no gree dance? Gbedu go force am out of you.” 🔊
      </p>
    </section>
  );
}
