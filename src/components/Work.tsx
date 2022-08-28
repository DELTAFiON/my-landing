const projects = [
  { title: "Fintech Platform", category: "Product Design", year: "2022" },
  { title: "E-commerce Rebrand", category: "Brand Identity", year: "2022" },
  { title: "Healthcare App", category: "Product Design", year: "2021" },
  { title: "SaaS Dashboard", category: "Development", year: "2021" },
];

export default function Work() {
  return (
    <section id="work" className="section-padding border-t border-[#0D0D0D]/[0.08] bg-[#0D0D0D] text-white">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <p className="text-sm text-[#FF4D00] font-[JetBrains_Mono]">Work</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-[Space_Grotesk]">Selected projects</h2>
          </div>
        </div>

        <div className="border-t border-white/[0.08]">
          {projects.map((project, i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-4 py-8 border-b border-white/[0.08] group cursor-pointer"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-[JetBrains_Mono] text-white/30">0{i + 1}</span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-xl font-medium font-[Space_Grotesk] group-hover:text-[#FF4D00] transition-colors">{project.title}</h3>
              </div>
              <div className="md:col-span-4">
                <span className="text-sm text-white/50">{project.category}</span>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-xs font-[JetBrains_Mono] text-white/30">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
