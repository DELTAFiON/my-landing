const team = [
  { name: "John Doe", role: "Founder / Design" },
  { name: "Mike Doe", role: "Engineering" },
  { name: "Jane Doe", role: "Strategy" },
  { name: "Karen Doe", role: "Motion" },
];

export default function Team() {
  return (
    <section id="team" className="py-12 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-0 mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            Team
          </h2>
          <span className="text-xs text-[#070607]/40 uppercase tracking-[0.18em]">
            The people
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-[#f7f6f2] rounded-[40px] p-4 md:p-6">
              <div className="aspect-square bg-[#e2e2df] rounded-[40px] mb-4 md:mb-6" />
              <div className="text-sm md:text-base tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>{member.name}</div>
              <div className="text-[10px] md:text-xs text-[#070607]/40 mt-1 font-mono">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
