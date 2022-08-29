const team = [
  { name: "John Doe", role: "Founder / Design" },
  { name: "Mike Doe", role: "Engineering" },
  { name: "Jane Doe", role: "Strategy" },
  { name: "Karen Doe", role: "Motion" },
];

export default function Team() {
  return (
    <section id="team" className="band band--plain">
      <div className="content">
        <p className="eyebrow mb-8">Team</p>

        <h2 className="mb-16">The people</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-ink/[0.04] rounded-[4px] mb-4 group-hover:bg-accent/10 transition-colors" />
              <div className="font-semibold text-sm font-display">{member.name}</div>
              <div className="text-xs text-muted mt-1 font-mono">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
