import { CheckCircle } from "lucide-react";

const whyItems = [
  "Lorem ipsum dolor",
  "Tempor incididunt",
  "Lorem ipsum dolor",
  "Incididunt ut labore",
  "Aliquip ex ea commodo",
  "Lorem ipsum dolor",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {whyItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
