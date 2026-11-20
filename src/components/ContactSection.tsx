import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="kontak" className="py-16 sm:py-24 border-t border-[var(--zm-divider)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm font-semibold text-[var(--zm-accent-violet)] tracking-wide mb-2">
          Dukungan &amp; Masukan
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
          Hubungi Developer / Lapor Bug
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[var(--zm-text-secondary)] max-w-xl mx-auto leading-relaxed">
          Menemukan kendala pada ekstensi, error pemutaran, atau ingin mengajukan fitur baru? Hubungi pengembang secara langsung melalui kanal resmi di bawah ini.
        </p>

        {/* 2 Iconic Rounded Dark Card Buttons Side-by-Side (No phone number or username text) */}
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-lg mx-auto">
          {/* Official WhatsApp Card Button */}
          <a
            href="https://wa.me/628219043995"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi Developer melalui WhatsApp"
            className="group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-[var(--zm-surface)] backdrop-blur-xl hc:backdrop-blur-none border border-[var(--zm-border)] hover:border-[#25D366]/60 hc:hover:border-white hover:bg-[#161B26] hc:hover:bg-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 hc:border-[#25D366] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                {/* Official WhatsApp Logo SVG */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-7 h-7 fill-[#25D366]"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M16.004 2.667C8.64 2.667 2.671 8.636 2.671 16c0 2.352.616 4.648 1.787 6.672L2.559 29.6l7.088-1.859A13.277 13.277 0 0 0 16.004 29.333C23.368 29.333 29.337 23.364 29.337 16S23.368 2.667 16.004 2.667zm0 24.427a11.05 11.05 0 0 1-5.636-1.545l-.404-.24-4.207 1.103 1.123-4.101-.263-.419A11.033 11.033 0 0 1 4.911 16c0-6.117 4.976-11.093 11.093-11.093 6.116 0 11.093 4.976 11.093 11.093 0 6.117-4.977 11.094-11.093 11.094zm6.084-8.308c-.333-.167-1.973-.973-2.279-1.084-.305-.111-.528-.167-.751.167-.223.333-.862 1.084-1.057 1.307-.195.222-.389.25-.723.083-.333-.167-1.408-.519-2.681-1.655-.991-.884-1.66-1.976-1.855-2.309-.194-.334-.021-.514.146-.68.15-.15.334-.389.5-.584.167-.194.222-.333.334-.556.111-.222.055-.417-.028-.584-.084-.166-.751-1.807-1.029-2.474-.271-.651-.546-.563-.751-.573-.194-.01-.417-.012-.639-.012s-.584.083-.89.417c-.305.334-1.167 1.14-1.167 2.78 0 1.64 1.195 3.225 1.362 3.448.167.222 2.352 3.591 5.698 5.035.796.344 1.417.549 1.901.703.799.254 1.526.218 2.101.132.641-.096 1.973-.806 2.251-1.585.278-.778.278-1.445.195-1.584-.084-.14-.306-.223-.64-.39z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">WhatsApp</span>
            </div>
            <ArrowUpRight
              className="w-4 h-4 text-[var(--zm-text-muted)] group-hover:text-[#25D366] transition-colors shrink-0"
              aria-hidden="true"
            />
          </a>

          {/* Official Telegram Card Button */}
          <a
            href="https://t.me/ZhuuVerzon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi Developer melalui Telegram"
            className="group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-[var(--zm-surface)] backdrop-blur-xl hc:backdrop-blur-none border border-[var(--zm-border)] hover:border-[#2AABEE]/60 hc:hover:border-white hover:bg-[#161B26] hc:hover:bg-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2AABEE]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2AABEE]/15 border border-[#2AABEE]/30 hc:border-[#2AABEE] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                {/* Official Telegram Logo SVG */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-7 h-7 fill-[#2AABEE]"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16S8.636 29.333 16 29.333 29.333 23.364 29.333 16 23.364 2.667 16 2.667zm6.544 9.091l-2.189 10.312c-.164.736-.599.918-1.212.571l-3.348-2.467-1.615 1.555c-.179.179-.329.329-.675.329l.24-3.412 6.211-5.612c.27-.24-.059-.374-.419-.135l-7.676 4.833-3.306-1.033c-.719-.225-.733-.719.15-1.064l12.926-4.982c.599-.216 1.123.144.913 1.105z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">Telegram</span>
            </div>
            <ArrowUpRight
              className="w-4 h-4 text-[var(--zm-text-muted)] group-hover:text-[#2AABEE] transition-colors shrink-0"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
