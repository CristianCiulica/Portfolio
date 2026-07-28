import { motion } from 'framer-motion'
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
}: {
  cert: Certificate
  index: number
  t: Translation
}) {
  // Alternating tilt so the diplomas turn toward the reader from opposite sides.
  const from = index % 2 === 0 ? -42 : 42
  const info = t.certificates.items[cert.key]

  return (
    <div style={{ perspective: 1400 }}>
      <motion.a
        href={cert.image}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, rotateY: from, rotateX: 22, scale: 0.82, y: 90 }}
        whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.14,
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="group block rounded-2xl border border-[#0C0C0C]/10 bg-white p-3 shadow-[0_18px_50px_-20px_rgba(12,12,12,0.45)] transition-shadow duration-300 hover:shadow-[0_28px_70px_-18px_rgba(12,12,12,0.55)] sm:p-4"
      >
        <div className="overflow-hidden rounded-xl bg-[#F2F2F7]">
          <img
            src={cert.image}
            alt={`${info.title} — ${info.issuer}`}
            loading="lazy"
            decoding="async"
            width={cert.width}
            height={cert.height}
            className="block h-auto w-full object-contain transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
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

        <span className="mt-2 inline-block px-1 text-xs font-light uppercase tracking-widest text-[#0C0C0C] opacity-0 transition-opacity duration-300 group-hover:opacity-60">
          {t.certificates.viewFull} ↗
        </span>
      </motion.a>
    </div>
  )
}

export default function CertificatesSection() {
  const { t } = useLanguage()

  return (
    <section id="diplome" className="bg-white px-5 pb-24 pt-8 sm:px-8 sm:pb-32 md:px-10">
      <FadeIn y={40}>
        <h2
          className="mb-14 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          {t.certificates.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8">
        {CERTIFICATES.map((cert, i) => (
          <CertificateCard key={cert.key} cert={cert} index={i} t={t} />
        ))}
      </div>
    </section>
  )
}
