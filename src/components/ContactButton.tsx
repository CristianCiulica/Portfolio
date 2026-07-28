import { useLanguage } from '../i18n/LanguageContext'

interface ContactButtonProps {
  label?: string
  href?: string
}

export default function ContactButton({
  label,
  href = 'mailto:cristianciulica2024@gmail.com',
}: ContactButtonProps) {
  const { t } = useLanguage()

  return (
    <a
      href={href}
      className="inline-block rounded-full bg-[#D7E2EA] px-6 py-2.5 text-[10px] font-medium uppercase tracking-widest text-[#0C0C0C] transition-all duration-200 hover:scale-105 hover:bg-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
    >
      {label ?? t.common.contactCta}
    </a>
  )
}
