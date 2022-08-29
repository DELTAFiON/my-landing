const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8", label: "Years independent" },
  { value: "12", label: "Design awards" },
];

export default function About() {
  return (
    <section id="studio" className="band band--stripe">
      <div className="content">
        <p className="eyebrow mb-8">Studio</p>

        <h2 className="max-w-[20ch]">
          We believe good design is invisible. It gets out of the way and lets the work speak.
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-[rgba(15,15,15,0.12)]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-2 uppercase tracking-[0.18em] font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
