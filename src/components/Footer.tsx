export default function Footer() {
  return (
    <footer className="border-t border-[#0D0D0D]/[0.08] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-semibold tracking-tight font-[Space_Grotesk]">Landing</span>
          <p className="text-xs text-[#0D0D0D]/40 mt-1">&copy; 2022 Landing Studio</p>
        </div>

        <div className="flex gap-6 text-xs text-[#0D0D0D]/50">
          <a href="#" className="hover:text-[#0D0D0D] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#0D0D0D] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#0D0D0D] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#0D0D0D] transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
