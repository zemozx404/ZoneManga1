import { useState } from 'react';

interface AppLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const LOGO_CANDIDATES = ['/logo.jpg', '/logo.jpg.jpeg'] as const;

export function AppLogo({ size = 'md' }: AppLogoProps) {
  const [candidateIndex, setCandidateIndex] = useState(0);

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  }[size];

  const currentSrc = LOGO_CANDIDATES[candidateIndex];

  if (currentSrc) {
    return (
      <div
        className={`${sizeClasses} relative overflow-hidden shrink-0 bg-[#13161F] ring-1 ring-white/15 shadow-lg shadow-violet-950/30`}
      >
        <img
          src={currentSrc}
          alt="Logo ZoneManga"
          referrerPolicy="no-referrer"
          onError={() => setCandidateIndex((prev) => prev + 1)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} relative flex items-center justify-center shrink-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 ring-1 ring-white/20 shadow-lg shadow-violet-900/40`}
      aria-label="Ikon ZoneManga"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        aria-hidden="true"
      >
        <path
          d="M9 10.5H25.5L11.5 25.5H27"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 7.5L27 10.5L23.5 13.5"
          stroke="#93C5FD"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
