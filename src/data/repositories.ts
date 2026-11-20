export interface RepoItem {
  id: string;
  index: string;
  filterGroup: 'manga' | 'anime' | 'novel';
  category: string;
  subtitle: string;
  url: string;
  description: string;
}

export interface GuideStep {
  stepNumber: string;
  title: string;
  description: string;
  pathHint?: string;
}

export const REPOSITORIES: RepoItem[] = [
  {
    id: 'manga-primary',
    index: '01',
    filterGroup: 'manga',
    category: 'Manga, Manhua & Manhwa',
    subtitle: 'Utama & Paling Lengkap',
    url: 'https://m2k3a.github.io/mangayomi-extensions/index.json',
    description: 'Mendukung Komikcast, Kiryuu, Komiku, MangaDex, Asura Scans, dll.',
  },
  {
    id: 'manga-secondary',
    index: '02',
    filterGroup: 'manga',
    category: 'Manga & Manhua Tambahan',
    subtitle: 'Kompatibel Mihon/Tachiyomi',
    url: 'https://raw.githubusercontent.com/yuzono/manga-repo/repo/index.min.json',
    description: 'Sumber global & Indonesia ter-update setiap hari.',
  },
  {
    id: 'anime-sub-indo',
    index: '03',
    filterGroup: 'anime',
    category: 'Anime Sub Indo & Global',
    subtitle: 'Streaming & Resolusi HD',
    url: 'https://m2k3a.github.io/mangayomi-extensions/anime_index.json',
    description: 'Mendukung Otakudesu, Samehadaku, HiAnime, Animepahe, dll.',
  },
  {
    id: 'novel-light-novel',
    index: '04',
    filterGroup: 'novel',
    category: 'Novel & Light Novel',
    subtitle: 'Mendukung Bahasa Indonesia',
    url: 'https://raw.githubusercontent.com/LNReader/lnreader-plugins/plugins/v3.0.0/.dist/plugins.min.json',
    description: 'Kumpulan sumber bacaan novel Indonesia & terjemahan.',
  },
];

export const GUIDE_STEPS: GuideStep[] = [
  {
    stepNumber: '01',
    title: 'Login Akun Google',
    description: 'Buka aplikasi ZoneManga lalu masuk menggunakan akun Google kamu untuk sinkronisasi pustaka.',
    pathHint: 'Masuk dengan Google',
  },
  {
    stepNumber: '02',
    title: 'Buka Menu Pengaturan Jelajahi',
    description: 'Arahkan ke menu Lainnya (...) kemudian masuk ke Pengaturan dan pilih bagian Jelajahi.',
    pathHint: 'Lainnya (...) > Pengaturan > Jelajahi',
  },
  {
    stepNumber: '03',
    title: 'Tempel URL Repo Pilihan',
    description: 'Salin URL Repo di atas dan tempelkan ke kolom repository sesuai kategori (Manga, Anime, atau Novel).',
    pathHint: 'Tempel URL JSON > Simpan',
  },
  {
    stepNumber: '04',
    title: 'Filter Bahasa & Instal Sumber',
    description: 'Masuk ke tab Jelajahi > Ekstensi, aktifkan filter bahasa Indonesia, lalu tekan Instal pada sumber favoritmu.',
    pathHint: 'Jelajahi > Ekstensi > Filter ID',
  },
];
