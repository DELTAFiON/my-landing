import { MessageSquare, Megaphone, Users, Wand2 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
  },
  {
    icon: Megaphone,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
  },
  {
    icon: Users,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
  },
  {
    icon: Wand2,
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Features</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
