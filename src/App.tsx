import { useCallback, useRef, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GuideSection } from './components/GuideSection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RepoSection } from './components/RepoSection';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

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
    <div className="min-h-screen flex flex-col bg-[#090A0F] text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RepoSection onCopyUrl={handleCopy} />
        <GuideSection onCopyText={handleCopy} />
        <ContactSection />
      </main>
      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
