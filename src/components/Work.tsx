const projects = [
  { title: "Fintech Platform", category: "Product Design", year: "2022" },
  { title: "E-commerce Rebrand", category: "Brand Identity", year: "2022" },
  { title: "Healthcare App", category: "Product Design", year: "2021" },
  { title: "SaaS Dashboard", category: "Development", year: "2021" },
];

export default function Work() {
  return (
    <section id="work" className="band band--stripe">
      <div className="content">
        <p className="eyebrow mb-8">Work</p>

        <h2 className="mb-16">Selected projects</h2>

        <div className="border-t border-[rgba(15,15,15,0.12)]">
          {projects.map((project, i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-4 py-8 border-b border-[rgba(15,15,15,0.12)] group cursor-pointer"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-muted">0{i + 1}</span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold font-display group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <span className="text-sm text-muted">{project.category}</span>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-xs font-mono text-muted">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
