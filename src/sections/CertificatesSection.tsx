import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, ExternalLink } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translation } from '../i18n/translations'

type CertKey = keyof Translation['certificates']['items']

interface Certificate {
  key: CertKey
  year: string
  image: string
  width: number
  height: number
}

// Intrinsic sizes are declared so the grid reserves space before the lazy
// images load — otherwise the reveal measures against a collapsed layout.
const CERTIFICATES: Certificate[] = [
  { key: 'pythonMl', year: '2026', image: '/certificates/PythonML.jpg', width: 992, height: 727 },
  { key: 'cpp', year: '2024', image: '/certificates/CPP.jpg', width: 1052, height: 814 },
  { key: 'googleAi', year: '2024', image: '/certificates/GoogleAI.jpg', width: 681, height: 526 },
]

function CertificateCard({
  cert,
  index,
  t,
  onSelect,
}: {
  cert: Certificate
  index: number
  t: Translation
  onSelect: () => void
}) {
  const info = t.certificates.items[cert.key]

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      className="group block w-full text-left rounded-2xl border border-[#0C0C0C]/10 bg-white p-3 shadow-[0_12px_36px_-15px_rgba(12,12,12,0.35)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-15px_rgba(12,12,12,0.45)] sm:p-4 cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl bg-[#F2F2F7]">
        <img
          src={cert.image}
          alt={`${info.title} — ${info.issuer}`}
          loading="lazy"
          decoding="async"
          width={cert.width}
          height={cert.height}
          className="block h-auto w-full object-contain transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex items-start justify-between gap-3 px-1 pb-1 pt-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium uppercase leading-tight tracking-wide text-[#0C0C0C] sm:text-base">
            {info.title}
          </span>
          <span className="text-xs font-light uppercase tracking-widest text-[#0C0C0C] opacity-50 sm:text-sm">
            {info.issuer}
          </span>
        </div>
        <span className="shrink-0 rounded-full bg-[#0C0C0C]/5 px-3 py-1 text-xs font-medium tracking-widest text-[#0C0C0C] opacity-70">
          {cert.year}
        </span>
      </div>

      <span className="mt-2 inline-flex items-center gap-1 px-1 text-xs font-light uppercase tracking-widest text-[#0C0C0C] opacity-50 transition-opacity duration-300 group-hover:opacity-90">
        <span>{t.certificates.viewFull}</span>
        <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.button>
  )
}

export default function CertificatesSection() {
  const { t } = useLanguage()
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCert])

  return (
    <section id="diplome" className="bg-white px-5 pb-14 pt-4 sm:px-8 sm:pb-32 sm:pt-8 md:px-10">
      <FadeIn y={40}>
        <h2
          className="mb-8 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          {t.certificates.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-10 lg:grid-cols-3 lg:gap-8">
        {CERTIFICATES.map((cert, i) => (
          <CertificateCard
            key={cert.key}
            cert={cert}
            index={i}
            t={t}
            onSelect={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6 md:p-10"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121214] p-3 shadow-2xl sm:rounded-3xl sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside Modal */}
              <div className="mb-3 flex items-center justify-between px-1">
                <div>
                  <h3 className="text-sm font-medium uppercase text-[#D7E2EA] sm:text-base">
                    {t.certificates.items[selectedCert.key].title}
                  </h3>
                  <p className="text-xs font-light text-[#D7E2EA]/60">
                    {t.certificates.items[selectedCert.key].issuer} · {selectedCert.year}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[#D7E2EA] transition-colors hover:bg-white/10"
                    title="Open original"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[#D7E2EA] transition-colors hover:bg-white/10"
                    title="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Certificate Image Frame */}
              <div className="overflow-hidden rounded-xl bg-white p-1">
                <img
                  src={selectedCert.image}
                  alt={t.certificates.items[selectedCert.key].title}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
