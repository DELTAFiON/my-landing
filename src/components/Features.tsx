const features = [
  {
    title: "Responsive by default",
    description: "Every layout adapts gracefully from mobile to desktop. No exceptions.",
  },
  {
    title: "Performance first",
    description: "Sub-second loads. Optimized assets. No render-blocking resources.",
  },
  {
    title: "Accessible",
    description: "WCAG AA compliant. Keyboard navigable. Screen reader friendly.",
  },
  {
    title: "SEO optimized",
    description: "Semantic HTML, meta tags, and structured data built in.",
  },
  {
    title: "Easy to customize",
    description: "CSS custom properties make theming a one-line change.",
  },
  {
    title: "No dependencies",
    description: "Built with native web technologies. No bloated frameworks.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 max-w-xl">
          Built to work. Not to impress.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="border-l border-white/[0.08] pl-6">
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
