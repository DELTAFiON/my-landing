export default function Contact() {
  return (
    <section id="contact" className="band band--stripe band--last">
      <div className="content">
        <p className="eyebrow mb-8">Contact</p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="leading-[0.95]">
              Let&apos;s build something.
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-xs text-muted uppercase tracking-[0.18em] font-mono">Email</span>
              <div className="text-lg font-semibold mt-2 font-display">hello@landing.studio</div>
            </div>
            <div>
              <span className="text-xs text-muted uppercase tracking-[0.18em] font-mono">Location</span>
              <div className="text-lg font-semibold mt-2 font-display">San Francisco, CA</div>
            </div>
            <a href="mailto:hello@landing.studio" className="btn-sharp">
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
