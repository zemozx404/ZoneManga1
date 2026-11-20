import { useState } from 'react';
import { Check, Copy, GlobeLock } from 'lucide-react';
import { GUIDE_STEPS } from '../data/repositories';

interface GuideSectionProps {
  onCopyText: (value: string, toastMessage?: string) => void;
}

export function GuideSection({ onCopyText }: GuideSectionProps) {
  const [dnsCopied, setDnsCopied] = useState(false);

  const handleCopyDns = () => {
    onCopyText('dns.google', 'Hostname DNS "dns.google" berhasil disalin!');
    setDnsCopied(true);
    window.setTimeout(() => setDnsCopied(false), 2000);
  };

  return (
    <section id="panduan" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs sm:text-sm font-semibold text-blue-400 tracking-wide mb-2">
            Instalasi Cepat
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Panduan Singkat Cara Pasang Repo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Ikuti 4 langkah mudah berikut untuk mulai mengakses ratusan sumber Manga, Anime, dan Light Novel langsung dari aplikasi.
          </p>
        </div>

        {/* 4 Visual Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUIDE_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#13161F]/75 backdrop-blur-xl border border-white/[0.08]"
            >
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/25 to-blue-600/25 border border-violet-500/30 text-sm font-extrabold text-violet-200 tabular-nums mb-4">
                  {step.stepNumber}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.pathHint && (
                <div className="mt-5 pt-3.5 border-t border-white/[0.06]">
                  <p className="text-xs font-mono text-blue-300 truncate">{step.pathHint}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Private DNS Tips Box */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#13161F]/90 backdrop-blur-xl border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <GlobeLock className="w-5 h-5 text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Tips Mengatasi Pemblokiran Operator Seluler
              </h3>
              <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                Jika jaringan operator memblokir akses ekstensi atau gambar gagal termuat, aktifkan{' '}
                <strong className="font-semibold text-white">DNS Pribadi (Private DNS)</strong> di pengaturan Android dengan hostname{' '}
                <code className="px-1.5 py-0.5 rounded bg-[#090A0F] border border-white/10 font-mono text-xs text-violet-300">
                  dns.google
                </code>
                .
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyDns}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#090A0F] hover:bg-white/[0.06] text-slate-200 border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            {dnsCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span className="text-emerald-300">dns.google Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                <span>Salin dns.google</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
