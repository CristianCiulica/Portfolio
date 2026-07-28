import { createContext, useContext } from 'react'
import type { Lang, Translation } from './translations'

export const STORAGE_KEY = 'portfolio-lang'

export interface LanguageContextValue {
  lang: Lang
  t: Translation
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
