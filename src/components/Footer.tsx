import { AppLogo } from './AppLogo';

export function Footer() {
  return (
    <footer className="border-t border-[var(--zm-divider)] bg-[var(--zm-canvas)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <AppLogo size="sm" />
          <span className="text-sm font-bold tracking-tight text-white">ZONEMANGA</span>
        </div>

        <p className="text-xs sm:text-sm text-[var(--zm-text-muted)] text-center sm:text-right">
          Copyright © 2026 ZoneManga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
