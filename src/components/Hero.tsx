import { useState } from 'react';
import { BookOpen, ChevronRight, Download, Film, FileText, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { AppLogo } from './AppLogo';
import { ThemeSwitcher, type ThemeMode } from './ThemeSwitcher';

type PreviewTab = 'manga' | 'anime' | 'novel';

interface HeroProps {
  theme: ThemeMode;
  onChangeTheme: (theme: ThemeMode) => void;
}

const PREVIEW_CATALOG: Record<
  PreviewTab,
  {
    sourceLabel: string;
    items: { title: string; chapter: string; source: string; accent: string }[];
  }
> = {
  manga: {
    sourceLabel: 'Komikcast · Kiryuu · MangaDex',
    items: [
      {
        title: 'Solo Leveling: Ragnarok',
        chapter: 'Chapter 48 · Sub Indo',
        source: 'Komikcast',
        accent: 'from-violet-600/35 to-indigo-600/20',
      },
      {
        title: 'Omniscient Reader',
        chapter: 'Chapter 245 · Sub Indo',
        source: 'Kiryuu',
        accent: 'from-blue-600/35 to-cyan-600/20',
      },
      {
        title: 'One Piece',
        chapter: 'Chapter 1138 · Bahasa ID',
        source: 'Komiku',
        accent: 'from-indigo-600/35 to-violet-600/20',
      },
    ],
  },
  anime: {
    sourceLabel: 'Otakudesu · Samehadaku · HiAnime',
    items: [
      {
        title: 'Solo Leveling Season 2',
        chapter: 'Episode 12 · 1080p Sub Indo',
        source: 'Otakudesu',
        accent: 'from-blue-600/35 to-violet-600/20',
      },
      {
        title: 'Sakamoto Days',
        chapter: 'Episode 11 · 1080p Sub Indo',
        source: 'Samehadaku',
        accent: 'from-indigo-600/35 to-blue-600/20',
      },
      {
        title: 'Dandadan',
        chapter: 'Episode 12 · HD Sub Indo',
        source: 'HiAnime',
        accent: 'from-violet-600/35 to-fuchsia-600/20',
      },
    ],
  },
  novel: {
    sourceLabel: 'LNReader Indonesia · Terjemahan',
    items: [
      {
        title: 'Mushoku Tensei LN',
        chapter: 'Volume 26 · Lengkap ID',
        source: 'NovelIndo',
        accent: 'from-indigo-600/35 to-sky-600/20',
      },
      {
        title: 'Classroom of the Elite Y2',
        chapter: 'Volume 12.5 · Terjemahan',
        source: 'LNReader ID',
        accent: 'from-violet-600/35 to-blue-600/20',
      },
      {
        title: 'Lord of the Mysteries',
        chapter: 'Chapter 1432 · Bahasa ID',
        source: 'WebNovel ID',
        accent: 'from-blue-600/35 to-indigo-600/20',
      },
    ],
  },
};

export function Hero({ theme, onChangeTheme }: HeroProps) {
  const [activeTab, setActiveTab] = useState<PreviewTab>('manga');
  const currentCatalog = PREVIEW_CATALOG[activeTab];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-5 pb-14 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      {/* Subtle atmospheric electric purple-blue ambient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[920px] h-[480px] rounded-full bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-blue-600/20 blur-[120px] hc:hidden"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Mobile Quick Jump Links (replaces hidden desktop nav cleanly without increasing sticky height) */}
        <nav
          aria-label="Navigasi Cepat Mobile"
          className="md:hidden flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[var(--zm-divider)] text-xs font-medium text-[var(--zm-text-secondary)] overflow-x-auto"
        >
          <a href="#fitur" className="py-1.5 px-1 hover:text-white whitespace-nowrap shrink-0">
            Fitur
          </a>
          <span className="text-[var(--zm-text-muted)]" aria-hidden="true">·</span>
          <a href="#daftar-repo" className="py-1.5 px-1 hover:text-white whitespace-nowrap shrink-0">
            Daftar Repo
          </a>
          <span className="text-[var(--zm-text-muted)]" aria-hidden="true">·</span>
          <a href="#panduan" className="py-1.5 px-1 hover:text-white whitespace-nowrap shrink-0">
            Cara Pasang
          </a>
          <span className="text-[var(--zm-text-muted)]" aria-hidden="true">·</span>
          <a href="#kontak" className="py-1.5 px-1 hover:text-white whitespace-nowrap shrink-0">
            Lapor Bug
          </a>
        </nav>

        {/* Top Utility Row: Kicker + Theme Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 mb-6 sm:mb-10">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-[var(--zm-accent-violet)]">
            <ShieldCheck className="w-4 h-4 text-[var(--zm-accent-blue)] shrink-0" aria-hidden="true" />
            <span>Cloudflare Bypass Bawaan</span>
            <span className="text-[var(--zm-text-muted)]" aria-hidden="true">
              ·
            </span>
            <span className="text-[var(--zm-text-secondary)]">Bebas Blokir Operator</span>
          </div>

          <ThemeSwitcher theme={theme} onChangeTheme={onChangeTheme} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-10 items-center">
          {/* Left Column: Core Copy & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h1 className="text-[1.75rem] sm:text-4xl lg:text-[3.35rem] font-extrabold tracking-tight leading-[1.16] text-white text-balance">
              Baca Manga, Manhua, Novel &amp; Nonton Anime{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent hc:bg-none hc:text-violet-200">
                dalam Satu Aplikasi
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-[var(--zm-text-secondary)] leading-relaxed max-w-2xl">
              Nikmati pengalaman membaca komik, light novel, dan streaming anime tanpa blokir dengan fitur{' '}
              <strong className="font-semibold text-white">Cloudflare Bypass bawaan</strong>. Ringan, cepat, bebas iklan, dan mendukung ratusan ekstensi bahasa Indonesia.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="https://www.mediafire.com/file/j3s6sccmq4ablsc/ZoneManga-v0.9.97.apk/file"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-primary inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 hc:bg-none hc:bg-white hc:text-black hc:hover:bg-zinc-200 transition-all duration-200 active:scale-[0.99] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 hc:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--zm-canvas)]"
              >
                <Download className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Download APK v0.9.97 (60.4 MB)</span>
              </a>

              <a
                href="#daftar-repo"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold text-[var(--zm-text-secondary)] bg-[var(--zm-surface)] hover:bg-[#1A1E2B] hc:hover:bg-zinc-900 border border-[var(--zm-border)] hover:border-violet-500/40 hc:hover:border-white transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 hc:focus-visible:ring-white"
              >
                <span>Lihat Daftar Repo</span>
                <ChevronRight className="w-4 h-4 text-[var(--zm-text-muted)] shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Quiet Unboxed Technical Metadata */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[var(--zm-text-muted)] tabular-nums">
              <span>Versi 0.9.97</span>
              <span aria-hidden="true">·</span>
              <span>Ukuran 60.4 MB</span>
              <span aria-hidden="true">·</span>
              <span>Android 10+</span>
              <span aria-hidden="true">·</span>
              <span>Multi-Ekstensi Kompatibel</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Android App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[380px] rounded-3xl sm:rounded-[28px] bg-[var(--zm-surface)] backdrop-blur-xl hc:backdrop-blur-none border border-[var(--zm-border)] p-3.5 sm:p-5 shadow-2xl shadow-black/70">
              {/* Mock Phone App Header */}
              <div className="flex items-center justify-between gap-2.5 pb-3.5 sm:pb-4 border-b border-[var(--zm-divider)]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <AppLogo size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white truncate">ZoneManga Reader</p>
                    <p className="text-[11px] text-[var(--zm-text-muted)] truncate">{currentCatalog.sourceLabel}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 hc:bg-emerald-950 hc:border-emerald-300 text-[11px] font-medium text-emerald-300 hc:text-emerald-200 shrink-0">
                  <ShieldCheck className="w-3 h-3 shrink-0" aria-hidden="true" />
                  <span>CF Bypass</span>
                </span>
              </div>

              {/* Interactive Category Switcher */}
              <div
                className="mt-3.5 sm:mt-4 grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[var(--zm-surface-inner)] border border-[var(--zm-border)]"
                role="tablist"
                aria-label="Pratinjau Kategori Aplikasi"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'manga'}
                  onClick={() => setActiveTab('manga')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 sm:py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    activeTab === 'manga'
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm hc:bg-none hc:bg-white hc:text-black'
                      : 'text-[var(--zm-text-muted)] hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Manga</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'anime'}
                  onClick={() => setActiveTab('anime')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 sm:py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    activeTab === 'anime'
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm hc:bg-none hc:bg-white hc:text-black'
                      : 'text-[var(--zm-text-muted)] hover:text-white'
                  }`}
                >
                  <Film className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Anime</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'novel'}
                  onClick={() => setActiveTab('novel')}
                  className={`flex items-center justify-center gap-1.5 py-2.5 sm:py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    activeTab === 'novel'
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm hc:bg-none hc:bg-white hc:text-black'
                      : 'text-[var(--zm-text-muted)] hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Novel</span>
                </button>
              </div>

              {/* Interactive Sample Feed List */}
              <div className="mt-3.5 sm:mt-4 space-y-2.5">
                {currentCatalog.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[var(--zm-surface-inner)] border border-[var(--zm-border)]"
                  >
                    <div
                      className={`w-11 h-14 rounded-lg bg-gradient-to-br ${item.accent} border border-white/10 hc:border-white/40 flex items-center justify-center shrink-0`}
                    >
                      {activeTab === 'manga' && (
                        <BookOpen className="w-4 h-4 text-violet-200 hc:text-white" aria-hidden="true" />
                      )}
                      {activeTab === 'anime' && (
                        <Film className="w-4 h-4 text-blue-200 hc:text-white" aria-hidden="true" />
                      )}
                      {activeTab === 'novel' && (
                        <FileText className="w-4 h-4 text-indigo-200 hc:text-white" aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                      <p className="text-xs text-[var(--zm-text-muted)] truncate mt-0.5">{item.chapter}</p>
                      <p className="text-[11px] font-medium text-[var(--zm-accent-violet)] mt-1">{item.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
