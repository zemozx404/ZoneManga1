import { Download } from 'lucide-react';
import { AppLogo } from './AppLogo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--zm-border)] bg-[var(--zm-header-bg)] backdrop-blur-xl hc:backdrop-blur-none">
      <div className="mx-auto max-w-6xl px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2.5 sm:gap-8">
        {/* Zone 1: Brand Logo + ZONEMANGA + Version Badge */}
        <a
          href="#top"
          className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 hc:focus-visible:ring-white rounded-xl"
        >
          <AppLogo size="sm" />
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="text-sm sm:text-lg font-extrabold tracking-tight text-white whitespace-nowrap">
              ZONEMANGA
            </span>
            <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide bg-violet-500/15 text-violet-300 border border-violet-500/25 hc:bg-white hc:text-black hc:border-white whitespace-nowrap">
              <span className="sm:hidden">v0.9.97</span>
              <span className="hidden sm:inline">v0.9.97 • Android</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Single-Line Nav Links (Desktop) */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--zm-text-secondary)]"
        >
          <a
            href="#fitur"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 hc:underline-offset-4 hc:hover:underline"
          >
            Fitur
          </a>
          <a
            href="#daftar-repo"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 hc:underline-offset-4 hc:hover:underline"
          >
            Daftar Repo
          </a>
          <a
            href="#panduan"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 hc:underline-offset-4 hc:hover:underline"
          >
            Cara Pasang
          </a>
          <a
            href="#kontak"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 hc:underline-offset-4 hc:hover:underline"
          >
            Lapor Bug
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center shrink-0">
          <a
            href="https://www.mediafire.com/file/j3s6sccmq4ablsc/ZoneManga-v0.9.97.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 hc:bg-none hc:bg-white hc:text-black hc:hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-violet-950/50 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 hc:focus-visible:ring-white"
          >
            <Download className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Download APK</span>
          </a>
        </div>
      </div>
    </header>
  );
}
