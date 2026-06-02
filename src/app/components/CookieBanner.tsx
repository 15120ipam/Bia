import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 max-md:bottom-4 max-md:left-4 max-md:right-4">
      <div className="max-w-[500px] mx-auto bg-[var(--warm-white)] rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[rgba(180,120,90,0.08)] overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[rgba(180,120,90,0.1)] flex items-start justify-between">
          <div>
            <h3 className="font-[var(--font-display)] text-[1.1rem] font-normal text-[var(--espresso)] mb-1">
              Cookies
            </h3>
            <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.6]">
              Utilizamos cookies para melhorar a sua experiência no nosso site.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-[var(--text-light)] hover:text-[var(--espresso)] transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preferences */}
        {showPreferences && (
          <div className="px-6 py-4 space-y-3 border-b border-[rgba(180,120,90,0.1)] bg-[var(--cream)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[0.7rem] font-medium text-[var(--espresso)] mb-0.5">
                  Necessários
                </div>
                <div className="text-[0.65rem] text-[var(--text-light)]">
                  Essenciais para o funcionamento do site
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="w-4 h-4 accent-[var(--terra)]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-[0.7rem] font-medium text-[var(--espresso)] mb-0.5">
                  Analíticos
                </div>
                <div className="text-[0.65rem] text-[var(--text-light)]">
                  Ajudam-nos a melhorar o site
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 accent-[var(--terra)]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-[0.7rem] font-medium text-[var(--espresso)] mb-0.5">
                  Marketing
                </div>
                <div className="text-[0.65rem] text-[var(--text-light)]">
                  Permitem publicidade personalizada
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="w-4 h-4 accent-[var(--terra)]"
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-6 py-4">
          {!showPreferences ? (
            <div className="flex gap-2">
              <button
                onClick={handleRejectAll}
                className="flex-1 font-[var(--font-body)] text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[var(--text-mid)] bg-transparent border border-[rgba(180,120,90,0.25)] px-4 py-2.5 cursor-pointer hover:bg-[var(--cream)] transition-all rounded-full"
              >
                Rejeitar
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="flex-1 font-[var(--font-body)] text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[var(--espresso)] bg-transparent border border-[var(--espresso)] px-4 py-2.5 cursor-pointer hover:bg-[var(--espresso)] hover:text-[var(--warm-white)] transition-all rounded-full"
              >
                Personalizar
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 font-[var(--font-body)] text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border-none px-4 py-2.5 cursor-pointer hover:bg-[var(--mocha)] transition-all rounded-full"
              >
                Aceitar Todos
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 font-[var(--font-body)] text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[var(--text-mid)] bg-transparent border border-[rgba(180,120,90,0.25)] px-4 py-2.5 cursor-pointer hover:bg-[var(--cream)] transition-all rounded-full"
              >
                Voltar
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 font-[var(--font-body)] text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border-none px-4 py-2.5 cursor-pointer hover:bg-[var(--mocha)] transition-all rounded-full"
              >
                Guardar Preferências
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
