export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-[#0D0D0D]/[0.08]">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="text-sm text-[#FF4D00] font-[JetBrains_Mono] mb-4">Contact</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight font-[Space_Grotesk] leading-[0.95]">
              Let's build something.
            </h2>
          </div>

          <div className="md:col-span-7 md:pt-12">
            <div className="space-y-6 mb-12">
              <div>
                <span className="text-xs text-[#0D0D0D]/40 uppercase tracking-wider">Email</span>
                <div className="text-lg font-medium mt-1">hello@landing.studio</div>
              </div>
              <div>
                <span className="text-xs text-[#0D0D0D]/40 uppercase tracking-wider">Location</span>
                <div className="text-lg font-medium mt-1">San Francisco, CA</div>
              </div>
            </div>

            <a href="mailto:hello@landing.studio" className="btn-primary inline-block">
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
