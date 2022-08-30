const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8", label: "Years independent" },
  { value: "12", label: "Design awards" },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#fc5000] rounded-[40px] p-10 text-white">
            <p className="text-sm text-white/70 font-medium uppercase tracking-wide">
              {stat.label}
            </p>
            <div className="text-[clamp(48px,6vw,80px)] leading-[1.1] text-white mt-2" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
