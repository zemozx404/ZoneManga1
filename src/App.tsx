import { useCallback, useEffect, useRef, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { GuideSection } from './components/GuideSection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RepoSection } from './components/RepoSection';
import { type ThemeMode } from './components/ThemeSwitcher';
import { Toast } from './components/Toast';

const THEME_STORAGE_KEY = 'zonemanga-theme';

function getInitialTheme(): ThemeMode {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'high-contrast' || saved === 'deep-midnight') {
      return saved;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'deep-midnight';
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  const showToast = useCallback((message: string) => {
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToastMessage(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
      toastTimerRef.current = null;
    }, 2600);
  }, []);

  const handleCopy = useCallback(
    async (text: string, customMessage = 'URL Repo berhasil disalin!') => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast(customMessage);
      } catch {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(customMessage);
      }
    },
    [showToast]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--zm-canvas)] text-[var(--zm-text-primary)] transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero theme={theme} onChangeTheme={setTheme} />
        <FeaturesSection />
        <RepoSection onCopyUrl={handleCopy} />
        <GuideSection onCopyText={handleCopy} />
        <ContactSection />
      </main>
      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
