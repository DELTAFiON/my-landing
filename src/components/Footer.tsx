import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Community", "Templates", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-bold gradient-text mb-4 inline-block">
              Landing
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Building the future of web experiences, one page at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2022 Landing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
