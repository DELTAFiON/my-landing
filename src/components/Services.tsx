const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Positioning, naming, visual systems, and voice. Everything a brand needs to be remembered.",
  },
  {
    number: "02",
    title: "Product Design",
    description: "Research, flows, interfaces, and prototypes. From zero to launch-ready product design.",
  },
  {
    number: "03",
    title: "Development",
    description: "Design systems, component libraries, and production code. Built to scale with your team.",
  },
  {
    number: "04",
    title: "Motion & Interaction",
    description: "Prototypes, micro-interactions, and animation systems that make products feel alive.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding border-t border-[#0D0D0D]/[0.08]">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <p className="text-sm text-[#FF4D00] font-[JetBrains_Mono]">Services</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-[Space_Grotesk]">Capabilities</h2>
          </div>
        </div>

        <div className="border-t border-[#0D0D0D]/[0.08]">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid md:grid-cols-12 gap-4 py-8 border-b border-[#0D0D0D]/[0.08] group hover:bg-[#0D0D0D]/[0.02] transition-colors -mx-4 px-4"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-[JetBrains_Mono] text-[#0D0D0D]/40">{service.number}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-medium font-[Space_Grotesk] group-hover:text-[#FF4D00] transition-colors">{service.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-[#0D0D0D]/60 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
