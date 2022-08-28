export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="text-sm text-[#FF4D00] mb-6 font-[JetBrains_Mono] tracking-wide">
              Design Studio — Est. 2015
            </p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tight font-[Space_Grotesk]">
              We make
              <br />
              things that
              <br />
              <span className="text-[#FF4D00]">matter.</span>
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-4">
            <p className="text-sm text-[#0D0D0D]/60 leading-relaxed mb-8">
              An independent studio partnering with founders and teams to design and build products people actually want to use.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Start a project
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-32 border-t border-b border-[#0D0D0D]/[0.08] py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {["Brand Identity", "Product Design", "Web Development", "Motion", "Strategy", "Design Systems", "Prototyping", "User Research"].map((item, i) => (
              <span key={i} className="text-sm font-[JetBrains_Mono] text-[#0D0D0D]/40 flex items-center gap-8">
                {item}
                <span className="text-[#FF4D00]">+</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
