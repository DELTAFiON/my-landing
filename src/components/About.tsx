const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8", label: "Years independent" },
  { value: "12", label: "Design awards" },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-[#0D0D0D]/[0.08]">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-sm text-[#FF4D00] font-[JetBrains_Mono]">Studio</p>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-12 font-[Space_Grotesk]">
              We believe good design is invisible. It gets out of the way and lets the work speak.
            </h2>

            <div className="grid grid-cols-3 gap-8 border-t border-[#0D0D0D]/[0.08] pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-semibold font-[Space_Grotesk] mb-2">{stat.value}</div>
                  <div className="text-xs text-[#0D0D0D]/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
