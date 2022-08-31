const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8", label: "Years independent" },
  { value: "12", label: "Design awards" },
];

export default function Stats() {
  return (
    <section className="py-8 md:py-16 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#fc5000] rounded-[40px] p-6 md:p-10 text-white">
            <p className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wide">
              {stat.label}
            </p>
            <div className="text-[clamp(40px,8vw,80px)] leading-[1.1] text-white mt-2" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
