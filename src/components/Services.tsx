const services = [
  {
    title: "Brand Identity",
    description: "Positioning, naming, visual systems, and voice. Everything a brand needs to be remembered.",
  },
  {
    title: "Product Design",
    description: "Research, flows, interfaces, and prototypes. From zero to launch-ready product design.",
  },
  {
    title: "Development",
    description: "Design systems, component libraries, and production code. Built to scale with your team.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            Services
          </h2>
          <span className="hidden md:block text-xs text-[#070607]/40 uppercase tracking-[0.18em]">
            What we do
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-[#f7f6f2] rounded-[40px] p-10">
              <h3 className="text-xl tracking-wide text-[#070607] mb-4" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-sm text-[#070607]/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
