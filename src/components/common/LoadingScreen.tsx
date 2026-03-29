import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

/**
 * Full-screen branded splash shown on app boot.
 * Fades out after ~1.4s and calls onComplete at ~1.9s.
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps): ReactElement {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1400);
    const doneTimer = setTimeout(() => onComplete(), 1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Company logo with soft glow */}
        <img
          src="/bintraq-logo.png"
          alt="Bintraq"
          className="h-16 w-auto object-contain"
          style={{ filter: 'drop-shadow(0 0 24px rgba(23, 207, 84, 0.4))' }}
        />

        {/* Staggered bounce loading dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-primary-container dark:bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface-variant/50 font-label">
          Loading Bintraq Portal
        </p>
      </div>
    </div>
  );
}
