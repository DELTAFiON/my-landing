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
    <section id="services" className="py-12 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-0 mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            Services
          </h2>
          <span className="text-xs text-[#070607]/40 uppercase tracking-[0.18em]">
            What we do
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-[#f7f6f2] rounded-[40px] p-6 md:p-10">
              <h3 className="text-lg md:text-xl tracking-wide text-[#070607] mb-3 md:mb-4" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
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
