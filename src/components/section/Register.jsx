const Register = () => {
  return (
    <section className="relative py-20 px-6 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl mx-4 shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl text-black font-bold mb-4">
          Join the Waitlist
        </h2>
        <p className="text-gray-600 mb-10">
          Be the first to access the event and exclusive beta invites from
          Loop.AI. No spam, just good stuff.
        </p>

        <form
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for joining the waitlist!");
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
