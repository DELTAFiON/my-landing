import { Globe, ShoppingCart, Download, Languages, Plane, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    name: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
  },
  {
    icon: ShoppingCart,
    name: "Consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
  },
  {
    icon: Download,
    name: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
  },
  {
    icon: Languages,
    name: "Consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
  },
  {
    icon: Plane,
    name: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
  },
  {
    icon: BarChart3,
    name: "Consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-900/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of services to help you grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
