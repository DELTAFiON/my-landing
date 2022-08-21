import { MapPin, Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-900/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-400">4321 California St, San Francisco, CA 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+1 123 456 1234</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400">info@company.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <Facebook className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Social</h3>
                <div className="flex gap-4 text-gray-400">
                  <a href="#" className="hover:text-primary-400 transition-colors">Facebook</a>
                  <a href="#" className="hover:text-primary-400 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-primary-400 transition-colors">YouTube</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
