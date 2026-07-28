export type Lang = 'ro' | 'en'

export const translations = {
  ro: {
    nav: {
      about: 'Despre',
      skills: 'Skills',
      projects: 'Proiecte',
      contact: 'Contact',
    },
    hero: {
      mobileHint: 'Pentru o experiență completă, deschide pe desktop ✦',
      heading: 'Sunt Cristian',
      tagline: 'Transform provocări reale în soluții software utile și scalabile.',
      terminal: {
        whoami: 'student informatică aplicată · full stack web & AI',
        lsCmd: 'ls proiecte/',
        status: 'deschis pentru internship-uri',
        buildCmd: './construieste ceva_memorabil',
        running: 'rulează…',
      },
    },
    about: {
      heading: 'Despre mine',
      text: 'Student în anul III la Informatică Aplicată in cadrul UNITBV, pasionat de dezvoltare web full-stack, algoritmi și inteligență artificială.',
    },
    skills: {
      heading: 'Skills',
      items: [
        {
          name: 'AI & Machine Learning',
          description:
            'Python, TensorFlow și rețele neuronale convoluționale — de la screening foto al pielii (SkinAlert) până la adversari AI pentru jocuri de strategie.',
        },
        {
          name: 'Full-Stack Web',
          description:
            'React, TypeScript, Node.js, Angular și Spring Boot — aplicații web complete, de la tracking de antrenamente până la dashboard-uri crypto în timp real.',
        },
        {
          name: 'UI/UX & Web Design',
          description:
            'Figma, Design Systems și micro-animații — atenție la detalii vizuale, tipografie modernă, layout-uri responsive și experiențe de utilizare fluide și intuitive.',
        },
        {
          name: 'DevOps & Cloud',
          description:
            'Docker, Firebase și AWS — containerizare și deployment automatizat pentru aplicații web.',
        },
      ],
    },
    projects: {
      heading: 'Proiecte',
      categories: {
        fittrack: 'Web App · Angular · TypeScript · Firebase',
        skinalert: 'AI · Python · TensorFlow · CNN',
        bacpro: 'Web App · Angular · TypeScript · Firebase',
      },
      otherHeading: 'Alte proiecte',
      other: {
        octacare: {
          name: 'OctaCare — Krontech Challenge 2026 (Locul 7)',
          role: 'Frontend Developer',
          stack: 'Angular · TypeScript',
        },
        crypto: {
          name: 'Crypto Market Aggregator',
          role: '',
          stack: 'Java · Spring Boot · Docker · AWS',
        },
        sevenWonders: {
          name: '7 Wonders Duel — AI',
          role: '',
          stack: 'Modern C++ · Game AI · Euristici',
        },
        regex: {
          name: 'Regex → DFA Converter',
          role: '',
          stack: 'C++ · Teoria automatelor',
        },
      },
      viewLive: 'Vezi Live',
      viewOnGithub: 'Vezi pe GitHub',
      captionAlt: 'captură',
    },
    contact: {
      heading: 'Hai să vorbim',
      tagline:
        'Deschis pentru internship-uri, colaborări și proiecte care merită construite.',
      emailCta: 'Scrie-mi un email',
      downloadCv: 'Descarcă CV',
      award: 'Locul 7 — Krontech Challenge 2026',
      certs: [
        'AI with Python — Machine Learning · Udemy 2026',
        'Coding for Everyone: C and C++ · UC Santa Cruz / Coursera 2024',
        'Google AI Essentials · Google / Coursera 2024',
      ],
      copyright: '© 2026 Cristian Ciulică · Brașov, România',
    },
    common: {
      contactCta: 'Contactează-mă',
    },
    langToggle: {
      label: 'Schimbă limba în engleză',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      mobileHint: 'For the full experience, open on desktop ✦',
      heading: "I'm Cristian",
      tagline: 'I turn real-world challenges into useful, scalable software.',
      terminal: {
        whoami: 'applied computer science student · full stack web & AI',
        lsCmd: 'ls projects/',
        status: 'open to internships',
        buildCmd: './build something_memorable',
        running: 'running…',
      },
    },
    about: {
      heading: 'About me',
      text: 'Third-year Applied Computer Science student at Transilvania University of Brașov, passionate about full-stack web development, algorithms and artificial intelligence.',
    },
    skills: {
      heading: 'Skills',
      items: [
        {
          name: 'AI & Machine Learning',
          description:
            'Python, TensorFlow and convolutional neural networks — from photo-based skin screening (SkinAlert) to AI opponents for strategy games.',
        },
        {
          name: 'Full-Stack Web',
          description:
            'React, TypeScript, Node.js, Angular and Spring Boot — complete web applications, from workout tracking to real-time crypto dashboards.',
        },
        {
          name: 'UI/UX & Web Design',
          description:
            'Figma, design systems and micro-animations — an eye for visual detail, modern typography, responsive layouts and smooth, intuitive user experiences.',
        },
        {
          name: 'DevOps & Cloud',
          description:
            'Docker, Firebase and AWS — containerization and automated deployment for web applications.',
        },
      ],
    },
    projects: {
      heading: 'Projects',
      categories: {
        fittrack: 'Web App · Angular · TypeScript · Firebase',
        skinalert: 'AI · Python · TensorFlow · CNN',
        bacpro: 'Web App · Angular · TypeScript · Firebase',
      },
      otherHeading: 'Other projects',
      other: {
        octacare: {
          name: 'OctaCare — Krontech Challenge 2026 (7th place)',
          role: 'Frontend Developer',
          stack: 'Angular · TypeScript',
        },
        crypto: {
          name: 'Crypto Market Aggregator',
          role: '',
          stack: 'Java · Spring Boot · Docker · AWS',
        },
        sevenWonders: {
          name: '7 Wonders Duel — AI',
          role: '',
          stack: 'Modern C++ · Game AI · Heuristics',
        },
        regex: {
          name: 'Regex → DFA Converter',
          role: '',
          stack: 'C++ · Automata theory',
        },
      },
      viewLive: 'View Live',
      viewOnGithub: 'View on GitHub',
      captionAlt: 'screenshot',
    },
    contact: {
      heading: "Let's talk",
      tagline: 'Open to internships, collaborations and projects worth building.',
      emailCta: 'Send me an email',
      downloadCv: 'Download CV',
      award: '7th place — Krontech Challenge 2026',
      certs: [
        'AI with Python — Machine Learning · Udemy 2026',
        'Coding for Everyone: C and C++ · UC Santa Cruz / Coursera 2024',
        'Google AI Essentials · Google / Coursera 2024',
      ],
      copyright: '© 2026 Cristian Ciulică · Brașov, Romania',
    },
    common: {
      contactCta: 'Get in touch',
    },
    langToggle: {
      label: 'Switch language to Romanian',
    },
  },
} as const

export type Translation = (typeof translations)['ro']
