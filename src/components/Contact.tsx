export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-white/[0.06]">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Let's talk.
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project in mind? We'd love to hear about it.
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-500">Email</span>
                <div className="text-gray-300 mt-1">hello@landing.studio</div>
              </div>
              <div>
                <span className="text-gray-500">Location</span>
                <div className="text-gray-300 mt-1">San Francisco, CA</div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/[0.1] py-3 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/[0.1] py-3 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/[0.1] py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
