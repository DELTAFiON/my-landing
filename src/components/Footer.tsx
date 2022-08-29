export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[rgba(15,15,15,0.12)]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold tracking-tight font-display">Landing</span>
          <p className="text-xs text-muted mt-1 font-mono">&copy; 2022 Landing Studio</p>
        </div>

        <div className="flex gap-6 text-xs text-muted">
          <a href="#" className="hover:text-ink transition-colors">Twitter</a>
          <a href="#" className="hover:text-ink transition-colors">GitHub</a>
          <a href="#" className="hover:text-ink transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-ink transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
