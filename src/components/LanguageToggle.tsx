import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

const OPTIONS: Lang[] = ['ro', 'en']

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 rounded-full border border-[#D7E2EA]/30 p-0.5 sm:gap-1 sm:p-1"
      role="group"
      aria-label={t.langToggle.label}
    >
      {OPTIONS.map((option) => {
        const active = option === lang
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={active}
            className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider transition-colors duration-200 sm:px-2.5 sm:py-1 sm:text-[10px] md:px-3 md:text-xs ${
              active
                ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA]'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
