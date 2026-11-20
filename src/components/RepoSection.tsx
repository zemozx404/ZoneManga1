import { useState } from 'react';
import { BookOpen, Check, Copy, Film, FileText } from 'lucide-react';
import { REPOSITORIES, type RepoItem } from '../data/repositories';

interface RepoSectionProps {
  onCopyUrl: (url: string, toastMessage?: string) => void;
}

type FilterOption = 'all' | 'manga' | 'anime' | 'novel';

export function RepoSection({ onCopyUrl }: RepoSectionProps) {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredRepos =
    filter === 'all'
      ? REPOSITORIES
      : REPOSITORIES.filter((repo) => repo.filterGroup === filter);

  const handleCopy = (repo: RepoItem) => {
    onCopyUrl(repo.url, 'URL Repo berhasil disalin!');
    setCopiedId(repo.id);
    window.setTimeout(() => {
      setCopiedId((current) => (current === repo.id ? null : current));
    }, 2000);
  };

  const renderCategoryIcon = (group: RepoItem['filterGroup']) => {
    if (group === 'anime') {
      return <Film className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />;
    }
    if (group === 'novel') {
      return <FileText className="w-4 h-4 text-indigo-400 shrink-0" aria-hidden="true" />;
    }
    return <BookOpen className="w-4 h-4 text-violet-400 shrink-0" aria-hidden="true" />;
  };

  return (
    <section id="daftar-repo" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading & Interactive Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-violet-400 tracking-wide mb-2">
              Ekstensi Terkurasi
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Daftar Repository Ekstensi Terbaik
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Pilih dan salin URL repository sesuai kebutuhan bacaan atau tontonan kamu. Cukup 1 klik untuk menyalin lalu tempel di menu Pengaturan ZoneManga.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#13161F] border border-white/[0.08] self-start md:self-auto"
            role="group"
            aria-label="Filter Kategori Repository"
          >
            {(
              [
                { key: 'all', label: 'Semua' },
                { key: 'manga', label: 'Manga' },
                { key: 'anime', label: 'Anime' },
                { key: 'novel', label: 'Novel' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  filter === tab.key
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Repository Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo) => {
            const isCopied = copiedId === repo.id;
            return (
              <article
                key={repo.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#13161F]/80 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/35 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {renderCategoryIcon(repo.filterGroup)}
                      <span className="font-semibold text-violet-300 tabular-nums">
                        Kategori {repo.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{repo.subtitle}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {repo.category}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                {/* URL Box + Copy Button */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <div className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-[#090A0F]/90 border border-white/[0.07]">
                    <code className="block text-xs font-mono text-slate-300 truncate select-all">
                      {repo.url}
                    </code>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(repo)}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                      isCopied
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-md shadow-violet-950/40'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Salin URL</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
