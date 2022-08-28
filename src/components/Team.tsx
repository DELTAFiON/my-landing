const team = [
  { name: "John Doe", role: "Founder / Design" },
  { name: "Mike Doe", role: "Engineering" },
  { name: "Jane Doe", role: "Strategy" },
  { name: "Karen Doe", role: "Motion" },
];

export default function Team() {
  return (
    <section id="team" className="section-padding border-t border-[#0D0D0D]/[0.08]">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <p className="text-sm text-[#FF4D00] font-[JetBrains_Mono]">Team</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-[Space_Grotesk]">The people</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-[#0D0D0D]/[0.04] rounded-lg mb-4 group-hover:bg-[#FF4D00]/10 transition-colors" />
              <div className="font-medium text-sm">{member.name}</div>
              <div className="text-xs text-[#0D0D0D]/50 mt-1">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
