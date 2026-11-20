import { Contrast, Moon } from 'lucide-react';

export type ThemeMode = 'deep-midnight' | 'high-contrast';

interface ThemeSwitcherProps {
  theme: ThemeMode;
  onChangeTheme: (theme: ThemeMode) => void;
}

export function ThemeSwitcher({ theme, onChangeTheme }: ThemeSwitcherProps) {
  return (
    <div
      className="grid grid-cols-2 sm:inline-flex items-center gap-1 p-1 rounded-xl bg-[var(--zm-surface-solid)] border border-[var(--zm-border)] w-full sm:w-auto"
      role="radiogroup"
      aria-label="Pilih Tema Tampilan"
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'deep-midnight'}
        onClick={() => onChangeTheme('deep-midnight')}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
          theme === 'deep-midnight'
            ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-sm'
            : 'text-[var(--zm-text-muted)] hover:text-white'
        }`}
      >
        <Moon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Deep Midnight</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === 'high-contrast'}
        onClick={() => onChangeTheme('high-contrast')}
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
          theme === 'high-contrast'
            ? 'bg-white text-black shadow-sm'
            : 'text-[var(--zm-text-muted)] hover:text-white'
        }`}
      >
        <Contrast className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>High Contrast</span>
      </button>
    </div>
  );
}
