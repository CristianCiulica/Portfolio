import { FileDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export const CV_HREF = '/CV_Cristian_Ciulica.pdf'

interface DownloadCvButtonProps {
  variant?: 'solid' | 'outline'
}

export default function DownloadCvButton({
  variant = 'outline',
}: DownloadCvButtonProps) {
  const { t } = useLanguage()

  const styles =
    variant === 'solid'
      ? 'bg-[#D7E2EA] text-[#0C0C0C] hover:scale-105 hover:bg-white'
      : 'border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10'

  return (
    <a
      href={CV_HREF}
      download
      className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[10px] font-medium uppercase tracking-widest transition-all duration-200 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${styles}`}
    >
      <FileDown className="h-4 w-4 shrink-0" />
      {t.contact.downloadCv}
    </a>
  )
}
