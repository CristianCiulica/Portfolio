import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translation } from './translations'
import { LanguageContext, STORAGE_KEY } from './LanguageContext'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ro'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ro' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('ro') ? 'ro' : 'en'
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'ro' ? 'en' : 'ro')),
    [],
  )

  const value = useMemo(
    () => ({ lang, t: translations[lang] as Translation, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
