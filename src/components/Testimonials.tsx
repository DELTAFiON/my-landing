const testimonials = [
  {
    quote: "The most thoughtful template I've used. Every detail feels considered.",
    name: "Alex Rivera",
    role: "Product Designer",
  },
  {
    quote: "Finally, a template that doesn't look like every other template.",
    name: "Jordan Kim",
    role: "Engineering Lead",
  },
  {
    quote: "Clean code, clear structure, and it just works out of the box.",
    name: "Sam Patel",
    role: "Indie Hacker",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
          What people say.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              <blockquote className="text-gray-300 leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </blockquote>
              <div>
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-gray-500 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
