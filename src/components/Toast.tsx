import { CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-4 w-full max-w-sm flex justify-center"
      role="status"
      aria-live="polite"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[var(--zm-surface-solid)]/95 backdrop-blur-xl hc:backdrop-blur-none border border-violet-500/35 hc:border-white shadow-2xl shadow-violet-950/60 text-sm font-medium text-white"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 hc:text-emerald-300 shrink-0" aria-hidden="true" />
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
