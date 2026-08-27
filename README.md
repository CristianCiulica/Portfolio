# Cristian Ciulică — Portfolio

A responsive, bilingual personal portfolio website built to showcase my work in full-stack web development, AI, and UI/UX design.

The website presents selected projects, technical skills, certifications, downloadable CV, and contact links in a visual, motion-driven experience.


## Highlights

- Romanian and English interface with an instant language switcher
- Responsive layout for mobile, tablet, and desktop
- Animated hero section with a magnetic terminal card and floating technology labels
- Scroll-based text reveals, image marquee, and stacked project cards
- Project showcase with live-demo and GitHub links
- Certificate gallery with full-size previews
- Contact, social media, and CV download actions
- Accessible external links and lazy-loaded project/certificate images

## Featured projects


| Project | Focus | Technologies |
| --- | --- | --- |
| FitTrack | Workout and running tracking application | Angular, TypeScript, Firebase |
| SkinAlert | AI-assisted skin-image screening | Python, TensorFlow, CNN |
| BacPro | Learning and exam-preparation platform | Angular, TypeScript, Firebase |
The portfolio also links to OctaCare, a Crypto Market Aggregator, a 7 Wonders Duel AI project, and a Regex-to-DFA converter.

## Tech stack

- React 19 and TypeScript
- Vite 
- Tailwind CSS
- Framer Motion
- Lucide React icons
- OXLint

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation


```bash
git clone https://github.com/<your-username>/Portfolio.git
cd Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Type-checks the app and creates a production build. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs OXLint. |

## Project structure

```text
src/
├── components/      # Reusable UI and animation components
├── i18n/            # Language context, provider, and translations
├── sections/        # Portfolio page sections
├── App.tsx          # Page composition
└── main.tsx         # Application entry point
public/
├── certificates/    # Certificate images
├── projects/        # Project screenshots
└── CV_Cristian_Ciulica.pdf
```

## Customization

- Update portfolio copy and supported languages in `src/i18n/translations.ts`.
- Replace project details and external URLs in `src/sections/ProjectsSection.tsx`.
- Add or replace screenshots in `public/projects/`.
- Update the CV file at `public/CV_Cristian_Ciulica.pdf`.
- Change contact and social URLs in `src/sections/ContactSection.tsx` and `src/components/ContactButton.tsx`.

## Contact

Cristian Ciulică — [GitHub](https://github.com/CristianCiulica) · [LinkedIn](https://www.linkedin.com/in/cristian-ciulic%C4%83-66299038a) · [Email](mailto:cristianciulica2024@gmail.com)
