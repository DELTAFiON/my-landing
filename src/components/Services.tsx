const services = [
  {
    id: "01",
    title: "Product Design",
    description: "End-to-end design from research to high-fidelity prototypes. Systems thinking applied to every touchpoint.",
  },
  {
    id: "02",
    title: "Development",
    description: "Clean, maintainable code with modern frameworks. Performance budgets enforced from day one.",
  },
  {
    id: "03",
    title: "Brand Identity",
    description: "Visual systems that scale. Logos, typography, color, and voice unified into one coherent language.",
  },
  {
    id: "04",
    title: "Strategy",
    description: "Market research, competitive analysis, and positioning that informs every design decision downstream.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What we do.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {services.map((service) => (
            <div key={service.id} className="bg-[#0a0a0a] p-8 md:p-12 group">
              <span className="text-xs text-gray-600 font-mono">{service.id}</span>
              <h3 className="text-xl font-medium mt-4 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
