import FadeIn from '../components/FadeIn'

const SKILLS = [
  {
    number: '01',
    name: 'AI & Machine Learning',
    description:
      'Python, TensorFlow și rețele neuronale convoluționale — de la screening foto al pielii (SkinAlert) până la adversari AI pentru jocuri de strategie.',
  },
  {
    number: '02',
    name: 'Full-Stack Web',
    description:
      'React, TypeScript, Node.js, Angular și Spring Boot — aplicații web complete, de la tracking de antrenamente până la dashboard-uri crypto în timp real.',
  },
  {
    number: '03',
    name: 'UI/UX & Web Design',
    description:
      'Figma, Design Systems și micro-animații — atenție la detalii vizuale, tipografie modernă, layout-uri responsive și experiențe de utilizare fluide și intuitive.',
  },
  {
    number: '04',
    name: 'DevOps & Cloud',
    description:
      'Docker, Firebase și AWS — containerizare și deployment automatizat pentru aplicații web.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
