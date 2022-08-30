export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10 bg-[#070607] text-white">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fc5000] mb-8">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl tracking-wide text-white leading-[1.1]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            Let&apos;s build something hot.
          </h2>
          <p className="text-base text-white/50 max-w-[52ch] mt-8 leading-relaxed">
            Have a project in mind? We&apos;re always looking for the next big thing.
          </p>
        </div>

        <div>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent border border-white rounded-[100px] px-8 py-6 text-base text-white outline-none placeholder:text-white/50 font-medium"
            />
            <button type="submit" className="w-full bg-[#fc5000] text-[#070607] rounded-full px-6 py-3 text-base font-medium hover:opacity-85 transition-opacity">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
