export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-10 bg-[#e2e2df]">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-base tracking-wide text-[#070607]" style={{ fontFamily: "Anton, Impact, sans-serif" }}>Caldera</span>
          <p className="text-xs text-[#070607]/40 mt-1 font-mono">
            &copy; 2022 Caldera Studio
          </p>
        </div>

        <div className="flex gap-6 text-xs text-[#070607]/40">
          <a href="#" className="hover:text-[#070607] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#070607] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#070607] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
