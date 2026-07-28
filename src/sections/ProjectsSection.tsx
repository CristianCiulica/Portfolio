import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translation } from '../i18n/translations'

type CategoryKey = keyof Translation['projects']['categories']
type OtherKey = keyof Translation['projects']['other']

interface Project {
  number: string
  name: string
  categoryKey: CategoryKey
  liveHref: string
  githubHref: string
  images: string[]
  imagePositions?: string[]
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'FitTrack',
    categoryKey: 'fittrack',
    liveHref: 'https://fittrack-angular-7ca07.web.app/auth/login',
    githubHref: 'https://github.com/CristianCiulica/FitTrack-Angular',
    images: [
      '/projects/fittrack/dashboard.png',
      '/projects/fittrack/mobile.png',
    ],
    imagePositions: ['center', 'top'],
  },
  {
    number: '02',
    name: 'SkinAlert',
    categoryKey: 'skinalert',
    liveHref: 'https://skin-alert.netlify.app/',
    githubHref: 'https://github.com/CristianCiulica/SkinAlert',
    images: [
      '/projects/skinalert/landing.png',
      '/projects/skinalert/mobile.png',
    ],
    imagePositions: ['top', 'top'],
  },
  {
    number: '03',
    name: 'BacPro',
    categoryKey: 'bacpro',
    liveHref: 'https://bacpro-ba190.web.app/login',
    githubHref: 'https://github.com/CristianCiulica/BacPro-web',
    images: [
      '/projects/bacpro/dashboard.png',
      '/projects/bacpro/exam.png',
      '/projects/bacpro/session.png',
    ],
    imagePositions: ['top', 'top', 'center'],
  },
]

const OTHER_PROJECTS: { num: string; key: OtherKey; href: string }[] = [
  {
    num: '#1',
    key: 'octacare',
    href: 'https://github.com/pterodactylstfw/krontech-2026-octacare',
  },
  {
    num: '#2',
    key: 'crypto',
    href: 'https://github.com/CristianCiulica/DevOps-FinalProject',
  },
  {
    num: '#3',
    key: 'sevenWonders',
    href: 'https://github.com/pterodactylstfw/7WondersDuel',
  },
  {
    num: '#4',
    key: 'regex',
    href: 'https://github.com/CristianCiulica/RegexToDFA',
  },
]

function ProjectCard({
  project,
  index,
  total,
  progress,
  t,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
  t: Translation
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div
      className="sticky flex h-[100svh] items-start justify-center top-[calc(1.25rem+var(--stack-i)*10px)] sm:h-[85vh] sm:top-[calc(6rem+var(--stack-i)*28px)]"
      style={{ '--stack-i': index } as React.CSSProperties}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="w-full rounded-3xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {t.projects.categories[project.categoryKey]}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.4rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <LiveProjectButton href={project.liveHref} label={t.projects.viewLive} />
            <LiveProjectButton
              href={project.githubHref}
              label={t.projects.viewOnGithub}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-start lg:gap-6"
        >
          <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-2">
            <div className="relative w-full overflow-hidden rounded-xl bg-[#F2F2F7] aspect-[16/9]">
              <img
                src={project.images[0]}
                alt={`${project.name} — ${t.projects.captionAlt} 1`}
                loading="lazy"
                width="100%"
                height="100%"
                className="block h-full w-full object-contain"
                style={{ objectPosition: project.imagePositions?.[0] || 'center' }}
              />
            </div>
            {project.images[2] && (
              <div className="relative hidden w-full overflow-hidden rounded-xl bg-[#F2F2F7] aspect-[16/9] sm:block">
                <img
                  src={project.images[2]}
                  alt={`${project.name} — ${t.projects.captionAlt} 3`}
                  loading="lazy"
                  width="100%"
                  height="100%"
                  className="block h-full w-full object-contain"
                  style={{ objectPosition: project.imagePositions?.[2] || 'center' }}
                />
              </div>
            )}
          </div>
          <div className="relative mx-auto w-[42%] overflow-hidden rounded-2xl bg-[#F2F2F7] aspect-[9/19] sm:w-1/2 sm:rounded-xl lg:w-full lg:col-span-1">
            <img
              src={project.images[1]}
              alt={`${project.name} — ${t.projects.captionAlt} 2`}
              loading="lazy"
              width="100%"
              height="100%"
              className="block h-full w-full object-contain"
              style={{ objectPosition: project.imagePositions?.[1] || 'center' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="proiecte"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-28"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t.projects.heading}
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
            t={t}
          />
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-48 md:mt-[350px]">
        <FadeIn y={30}>
          <h3 className="mb-8 text-center text-xl font-medium uppercase tracking-widest text-[#D7E2EA] opacity-70 sm:text-2xl">
            {t.projects.otherHeading}
          </h3>
        </FadeIn>
        {OTHER_PROJECTS.map((p, i) => {
          const info = t.projects.other[p.key]
          return (
          <FadeIn key={p.key} delay={i * 0.1}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border-b border-[#D7E2EA]/15 py-6 transition-colors duration-200 hover:bg-[#D7E2EA]/5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-8"
              style={{ borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined }}
            >
              <div className="flex flex-col gap-1 sm:gap-2">
                <span
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.8rem)' }}
                >
                  <span className="mr-3 font-mono opacity-50">{p.num}</span>
                  {info.name}
                </span>
                {info.role && (
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                    {info.role}
                  </span>
                )}
              </div>
              <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-50 transition-opacity duration-200 group-hover:opacity-90 sm:text-base">
                {info.stack} ↗
              </span>
            </a>
          </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
