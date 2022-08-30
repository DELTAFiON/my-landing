const projects = [
  { title: "Fintech Platform", category: "Product Design", year: "2022" },
  { title: "E-commerce Rebrand", category: "Brand Identity", year: "2022" },
  { title: "Healthcare App", category: "Product Design", year: "2021" },
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            Work
          </h2>
          <span className="hidden md:block text-xs text-[#070607]/40 uppercase tracking-[0.18em]">
            Selected projects
          </span>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#f7f6f2] rounded-[40px] p-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <span className="inline-block bg-[#f5f28e] text-[#070607] rounded-full px-3 py-1 text-xs font-medium mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
                  {project.title}
                </h3>
              </div>
              <span className="text-xs text-[#070607]/40 font-mono">{project.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
