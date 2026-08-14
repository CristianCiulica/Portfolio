import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import LiveProjectButton from './LiveProjectButton'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translation } from '../i18n/translations'

type OtherKey = keyof Translation['projects']['other']

interface OtherProject {
  num: string
  key: OtherKey
  href: string
}

const OTHER_PROJECTS: OtherProject[] = [
  {
    num: '#01',
    key: 'octacare',
    href: 'https://github.com/pterodactylstfw/krontech-2026-octacare',
  },
  {
    num: '#02',
    key: 'crypto',
    href: 'https://github.com/CristianCiulica/DevOps-FinalProject',
  },
  {
    num: '#03',
    key: 'sevenWonders',
    href: 'https://github.com/pterodactylstfw/7WondersDuel',
  },
  {
    num: '#04',
    key: 'regex',
    href: 'https://github.com/CristianCiulica/RegexToDFA',
  },
]

function StreamCard({
  project,
  index,
  total,
  t,
}: {
  project: OtherProject
  index: number
  total: number
  t: Translation
}) {
  const info = t.projects.other[project.key]
  const stackItems = info.stack.split('·').map((s) => s.trim())

  return (
    <div
      className="flex h-[300px] w-[82vw] max-w-[320px] shrink-0 flex-col justify-between rounded-3xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 transition-colors duration-200 hover:bg-[#D7E2EA]/[0.02] sm:h-[340px] sm:max-w-[400px] sm:rounded-[40px] sm:p-7 md:h-[360px] md:w-[460px] md:max-w-none md:rounded-[48px] md:p-8 lg:w-[500px]"
    >
      {/* Header: Project Number & Index */}
      <div className="flex items-center justify-between">
        <span
          className="hero-heading font-black leading-none"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 56px)' }}
        >
          {project.num}
        </span>
        <span className="font-mono text-xs font-light tracking-widest text-[#D7E2EA] opacity-50 sm:text-sm">
          {index + 1 < 10 ? `0${index + 1}` : index + 1} / {total < 10 ? `0${total}` : total}
        </span>
      </div>

      {/* Center: Title and Role */}
      <div className="my-auto flex flex-col gap-1 sm:gap-2">
        {info.role && (
          <span className="text-[11px] font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-xs">
            {info.role}
          </span>
        )}
        <h4
          className="font-medium uppercase leading-snug text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
        >
          {info.name}
        </h4>
      </div>

      {/* Footer: Tech Stack & Centered GitHub Button */}
      <div className="flex flex-col items-center gap-3 border-t border-[#D7E2EA]/15 pt-3.5 sm:gap-4 sm:pt-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {stackItems.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#D7E2EA]/30 px-2.5 py-0.5 text-[10px] font-light uppercase tracking-wider text-[#D7E2EA] sm:text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <LiveProjectButton href={project.href} label={t.projects.viewOnGithub} />
        </div>
      </div>
    </div>
  )
}

export default function OtherProjectsStream() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(1)
  const [maxTranslateX, setMaxTranslateX] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Measure dynamic scroll distance based on real DOM track width vs viewport
  useEffect(() => {
    const updateScrollWidth = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        // Calculate the exact travel distance needed to reveal card #04 with comfortable padding
        const rightPad = window.innerWidth < 640 ? 24 : 48
        const distance = Math.max(0, trackWidth - viewportWidth + rightPad)
        setMaxTranslateX(distance)
      }
    }

    updateScrollWidth()

    // Observe changes via ResizeObserver and window resize
    const observer = new ResizeObserver(updateScrollWidth)
    if (trackRef.current) {
      observer.observe(trackRef.current)
    }
    window.addEventListener('resize', updateScrollWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateScrollWidth)
    }
  }, [])

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  })

  // Horizontal translation for cards from 0 to -maxTranslateX in pixels
  const x = useTransform(smoothProgress, [0, 1], [0, -maxTranslateX])

  // Header progress bar width
  const progressPercent = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = OTHER_PROJECTS.length
    const index = Math.min(Math.floor(latest * total) + 1, total)
    setActiveSlide(index)
  })

  return (
    <div
      ref={sectionRef}
      className="relative z-10 w-full"
      style={{ height: '300vh' }}
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 flex h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#0C0C0C] pt-[4.75rem] pb-5 sm:pt-20 sm:pb-8 md:pt-24 md:pb-12">
        {/* TOP HEADER */}
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8 md:px-10">
          <h3
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            {t.projects.otherHeading}
          </h3>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="font-mono text-sm font-medium tracking-widest text-[#D7E2EA] sm:text-base">
              0{activeSlide}{' '}
              <span className="text-xs font-light text-[#D7E2EA] opacity-50 sm:text-sm">
                / 0{OTHER_PROJECTS.length}
              </span>
            </div>
            {/* Scrubber Line */}
            <div className="h-0.5 w-14 overflow-hidden rounded-full bg-[#D7E2EA]/20 sm:w-20">
              <motion.div
                className="h-full bg-[#D7E2EA]"
                style={{ width: progressPercent }}
              />
            </div>
          </div>
        </div>

        {/* HORIZONTAL CARDS TRACK */}
        <div className="my-auto flex w-full items-center overflow-visible py-2">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-4 pl-5 pr-8 sm:gap-6 sm:pl-8 sm:pr-12 md:gap-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24"
          >
            {OTHER_PROJECTS.map((project, index) => (
              <StreamCard
                key={project.num}
                project={project}
                index={index}
                total={OTHER_PROJECTS.length}
                t={t}
              />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM PAGINATION DOTS */}
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-40 sm:px-8 md:px-10">
          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs">
            <span>Scroll</span>
            <ArrowDownRight size={13} />
          </span>
          <div className="flex items-center gap-2">
            {OTHER_PROJECTS.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSlide === i + 1
                    ? 'w-6 bg-[#D7E2EA] opacity-100'
                    : 'w-1.5 bg-[#D7E2EA] opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

