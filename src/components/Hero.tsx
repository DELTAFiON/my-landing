export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 mb-6 tracking-wide uppercase">
            Landing Page Template
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-8">
            We build
            <br />
            digital products.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
            A modern template for startups and studios. Clean design, thoughtful interactions, and everything you need to launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-center">
              Start a project
            </a>
            <a href="#services" className="btn-secondary text-center">
              View services
            </a>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: "120+", label: "Projects shipped" },
            { value: "8", label: "Years experience" },
            { value: "100%", label: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-semibold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
