const team = [
  { name: "John Doe", role: "Founder / Design" },
  { name: "Mike Doe", role: "Engineering" },
  { name: "Jane Doe", role: "Strategy" },
  { name: "Karen Doe", role: "Motion" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>
            Team
          </h2>
          <span className="hidden md:block text-xs text-[#070607]/40 uppercase tracking-[0.18em]">
            The people
          </span>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-[#f7f6f2] rounded-[40px] p-10">
              <div className="aspect-square bg-[#e2e2df] rounded-[40px] mb-6" />
              <div className="text-base tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>{member.name}</div>
              <div className="text-xs text-[#070607]/40 mt-1 font-mono">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
