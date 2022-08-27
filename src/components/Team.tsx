const team = [
  { name: "John Doe", role: "Founder" },
  { name: "Mike Doe", role: "Design Lead" },
  { name: "Jane Doe", role: "Engineering" },
  { name: "Karen Doe", role: "Strategy" },
];

export default function Team() {
  return (
    <section id="team" className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">Team</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
          Small team, senior only.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i}>
              <div className="aspect-square bg-white/[0.03] rounded-lg mb-4" />
              <div className="font-medium text-sm">{member.name}</div>
              <div className="text-xs text-gray-500 mt-1">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
