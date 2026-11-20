import { useState } from 'react';
import { BookOpen, ChevronRight, Download, Film, FileText, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { AppLogo } from './AppLogo';

type PreviewTab = 'manga' | 'anime' | 'novel';

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

export function Hero() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('manga');
  const currentCatalog = PREVIEW_CATALOG[activeTab];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      {/* Subtle atmospheric electric purple-blue ambient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[920px] h-[480px] rounded-full bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-blue-600/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Copy & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-violet-300 mb-5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
              <span>Cloudflare Bypass Bawaan</span>
              <span className="text-slate-600" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-300">Bebas Blokir Operator</span>
            </div>

            <h1 className="text-[clamp(2.15rem,4.3vw,3.6rem)] font-extrabold tracking-tight leading-[1.12] text-white text-balance">
              Baca Manga, Manhua, Novel &amp; Nonton Anime{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                dalam Satu Aplikasi
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Nikmati pengalaman membaca komik, light novel, dan streaming anime tanpa blokir dengan fitur{' '}
              <strong className="font-semibold text-white">Cloudflare Bypass bawaan</strong>. Ringan, cepat, bebas iklan, dan mendukung ratusan ekstensi bahasa Indonesia.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="/ZoneManga-v0.9.97.apk"
                download="ZoneManga-v0.9.97.apk"
                className="btn-glow-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 transition-all duration-200 active:scale-[0.99] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0F]"
              >
                <Download className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Download APK v0.9.97 (45 MB)</span>
              </a>

              <a
                href="#daftar-repo"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 bg-[#13161F]/80 hover:bg-[#1A1E2B] border border-white/10 hover:border-violet-500/40 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Lihat Daftar Repo</span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Quiet Unboxed Technical Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-400 tabular-nums">
              <span>Versi 0.9.97</span>
              <span aria-hidden="true">·</span>
              <span>Ukuran 45 MB</span>
              <span aria-hidden="true">·</span>
              <span>Android 8.0+</span>
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
            <div className="w-full max-w-[380px] rounded-[28px] bg-[#13161F]/85 backdrop-blur-xl border border-white/10 p-4 sm:p-5 shadow-2xl shadow-black/70">
              {/* Mock Phone App Header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.07]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <AppLogo size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white truncate">ZoneManga Reader</p>
                    <p className="text-[11px] text-slate-400 truncate">{currentCatalog.sourceLabel}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-medium text-emerald-300 shrink-0">
                  <ShieldCheck className="w-3 h-3 shrink-0" aria-hidden="true" />
                  <span>CF Bypass</span>
                </span>
              </div>

              {/* Interactive Category Switcher */}
              <div
                className="mt-4 grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#090A0F]/90 border border-white/[0.06]"
                role="tablist"
                aria-label="Pratinjau Kategori Aplikasi"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'manga'}
                  onClick={() => setActiveTab('manga')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                    activeTab === 'manga'
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
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
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                    activeTab === 'anime'
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
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
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                    activeTab === 'novel'
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Novel</span>
                </button>
              </div>

              {/* Interactive Sample Feed List */}
              <div className="mt-4 space-y-2.5">
                {currentCatalog.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#090A0F]/65 border border-white/[0.06]"
                  >
                    <div
                      className={`w-11 h-14 rounded-lg bg-gradient-to-br ${item.accent} border border-white/10 flex items-center justify-center shrink-0`}
                    >
                      {activeTab === 'manga' && (
                        <BookOpen className="w-4 h-4 text-violet-200" aria-hidden="true" />
                      )}
                      {activeTab === 'anime' && (
                        <Film className="w-4 h-4 text-blue-200" aria-hidden="true" />
                      )}
                      {activeTab === 'novel' && (
                        <FileText className="w-4 h-4 text-indigo-200" aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{item.chapter}</p>
                      <p className="text-[11px] font-medium text-violet-300 mt-1">{item.source}</p>
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
