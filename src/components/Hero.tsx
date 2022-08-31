export default function Hero() {
  return (
    <section className="py-12 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fc5000] mb-6 md:mb-8">
            Design Studio
          </p>

          <h1 className="text-[clamp(44px,10vw,120px)] leading-[0.94] tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            We forge
            <br />
            fire on
            <br />
            <span className="text-[#fc5000]">warm</span>
            <br />
            stone.
          </h1>

          <p className="text-sm md:text-base text-[#070607]/60 max-w-[52ch] mt-6 md:mt-8 leading-relaxed">
            An independent studio crafting digital products with volcanic intensity. Every pixel intentional, every interaction earned.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12">
            <a href="#contact" className="bg-[#fc5000] text-[#070607] rounded-full px-6 py-3 text-sm md:text-base font-medium hover:opacity-85 transition-opacity text-center">
              Start a project
            </a>
            <a href="#work" className="border-2 border-[#070607] text-[#070607] rounded-[40px] px-6 py-3 md:py-4 text-sm md:text-base font-medium hover:bg-[#070607]/5 transition-colors text-center">
              View work
            </a>
          </div>
        </div>

        <div
          className="rounded-[40px] aspect-[4/3] md:aspect-square mt-8 md:mt-0"
          style={{
            background: "radial-gradient(circle, #fc5000 1.5px, transparent 1.5px) 0 0 / 12px 12px, linear-gradient(135deg, #524ae9 0%, #fc5000 100%)",
          }}
        />
      </div>
    </section>
  );
}
