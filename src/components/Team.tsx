const team = [
  { name: "John Doe", job: "Director" },
  { name: "Mike Doe", job: "Senior Designer" },
  { name: "Jane Doe", job: "Senior Designer" },
  { name: "Karen Doe", job: "Project Manager" },
];

export default function Team() {
  return (
    <section id="team" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="card text-center group">
              <div className="w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors">
                <span className="text-primary-400 font-bold text-2xl">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.job}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
