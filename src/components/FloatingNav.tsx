import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'

const NAV_ITEMS = [
  { key: 'about', href: '#despre' },
  { key: 'skills', href: '#skills' },
  { key: 'certificates', href: '#diplome' },
  { key: 'projects', href: '#proiecte' },
  { key: 'contact', href: '#contact' },
] as const

export default function FloatingNav() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling past hero (~500px)
      if (window.scrollY > 450) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -60, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: -60, opacity: 0, x: '-50%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 left-1/2 z-40 flex items-center gap-2 rounded-full border border-white/15 bg-[#121214]/85 px-3 py-2 shadow-[0_12px_36px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:gap-3 sm:px-5 sm:py-2.5"
        >
          {/* Scroll to Top Logo/Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 font-bold text-xs text-[#D7E2EA] transition-all hover:bg-white hover:text-black sm:h-8 sm:w-8"
            title="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>

          {/* Links on desktop */}
          <div className="hidden items-center gap-1 sm:flex md:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.key === 'certificates'
                  ? t.certificates.heading
                  : t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Mobile concise links */}
          <div className="flex items-center gap-1 sm:hidden">
            <a
              href="#skills"
              className="rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white"
            >
              {t.nav.skills}
            </a>
            <a
              href="#proiecte"
              className="rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white"
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              className="rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="h-4 w-px bg-white/15" />

          {/* Language Toggle */}
          <LanguageToggle />
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
