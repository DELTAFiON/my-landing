const principles = [
  {
    title: "Clarity over cleverness",
    description: "Every element serves a purpose. If it doesn't communicate, it doesn't belong.",
  },
  {
    title: "Restraint in motion",
    description: "Animation guides attention. It never decorates for decoration's sake.",
  },
  {
    title: "Typography leads",
    description: "Words are the interface. Hierarchy, spacing, and weight do the heavy lifting.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Design with intention.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This template was built to demonstrate that great design doesn't need gimmicks. No gradients, no glassmorphism, no decorative noise. Just solid fundamentals: good type, generous space, and purposeful interaction.
            </p>
          </div>

          <div className="space-y-8">
            {principles.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-xs text-gray-600 mt-1 font-mono">0{i + 1}</span>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
