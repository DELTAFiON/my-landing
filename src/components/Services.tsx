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
    <section id="services" className="band band--plain">
      <div className="content">
        <p className="eyebrow mb-8">Services</p>

        <h2 className="mb-16">Capabilities</h2>

        <div className="border-t border-[rgba(15,15,15,0.12)]">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid md:grid-cols-12 gap-4 py-10 border-b border-[rgba(15,15,15,0.12)] group"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-muted">{service.number}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold font-display group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
