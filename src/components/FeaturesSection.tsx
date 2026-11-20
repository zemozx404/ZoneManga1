import {
  CloudDownload,
  Languages,
  Layers,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureItem {
  index: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  iconColorClass: string;
  spanClass: string;
}

const FEATURES: FeatureItem[] = [
  {
    index: '01',
    category: 'Akses Tanpa Hambatan',
    title: 'Cloudflare Bypass',
    description:
      'Melewati halaman verifikasi dan proteksi Cloudflare secara otomatis di balik layar agar halaman komik, novel, dan episode anime langsung terbuka tanpa hambatan.',
    icon: ShieldCheck,
    accentClass: 'from-violet-600/20 to-indigo-600/15 border-violet-500/30',
    iconColorClass: 'text-violet-300',
    spanClass: 'md:col-span-3',
  },
  {
    index: '02',
    category: 'Simpan ke Perangkat',
    title: 'Offline Reading',
    description:
      'Unduh chapter manga, manhua, dan volume light novel favorit ke memori ponsel untuk membaca dengan lancar kapan pun tanpa koneksi internet atau kuota.',
    icon: CloudDownload,
    accentClass: 'from-blue-600/20 to-cyan-600/15 border-blue-500/30',
    iconColorClass: 'text-blue-300',
    spanClass: 'md:col-span-3',
  },
  {
    index: '03',
    category: 'Lokal & Global',
    title: 'Multi-Language Support',
    description:
      'Filter dan jelajahi sumber ekstensi berbahasa Indonesia, Inggris, maupun berbagai bahasa global lainnya secara rapi dalam satu daftar.',
    icon: Languages,
    accentClass: 'from-indigo-600/20 to-violet-600/15 border-indigo-500/30',
    iconColorClass: 'text-indigo-300',
    spanClass: 'md:col-span-2',
  },
  {
    index: '04',
    category: 'Satu Aplikasi Terpadu',
    title: 'Manga, Novel & Anime',
    description:
      'Dukungan mode baca webtoon vertikal, pembaca teks novel yang nyaman di mode gelap, serta pemutar streaming anime resolusi HD.',
    icon: Layers,
    accentClass: 'from-violet-600/20 to-blue-600/15 border-violet-500/30',
    iconColorClass: 'text-violet-300',
    spanClass: 'md:col-span-2',
  },
  {
    index: '05',
    category: 'Riwayat Terjaga',
    title: 'Cloud Backup & Sync',
    description:
      'Masuk dengan akun Google untuk menyimpan daftar pustaka, penanda chapter terakhir, dan daftar ekstensi agar aman saat berganti perangkat.',
    icon: RefreshCw,
    accentClass: 'from-blue-600/20 to-indigo-600/15 border-blue-500/30',
    iconColorClass: 'text-blue-300',
    spanClass: 'md:col-span-2',
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs sm:text-sm font-semibold text-violet-400 tracking-wide mb-2">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Fitur Utama ZoneManga
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Dirancang untuk kenyamanan membaca komik, light novel, dan menonton anime di perangkat Android dengan performa ringan dan bebas iklan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`${feature.spanClass} flex flex-col justify-between p-6 rounded-2xl bg-[#13161F]/80 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/35 transition-colors duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.accentClass} border flex items-center justify-center shrink-0`}
                    >
                      <Icon
                        className={`w-5 h-5 ${feature.iconColorClass}`}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-semibold text-violet-300 tabular-nums">
                        {feature.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{feature.category}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
