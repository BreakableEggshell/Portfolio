# Portfolio

My personal portfolio website, built with Next.js and Tailwind CSS. Stylized with a flashcard-like view.

https://gubaton-portfolio.vercel.app/

## Pages

| Page | What's on it |
| --- | --- |
| **Home** | Intro and navigation |
| **My works** | Selected projects: Mindfulness, LugarLang, and the UPLB COSS Game Jam |
| **Tools** | Languages, frameworks and tools I use, viewable as icons or names |
| **About me** | Background and current practicum |
| **Reach out** | Email and LinkedIn |

## Built with

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- Icons from [Devicon](https://devicon.dev) and [SVG Logos](https://github.com/gilbarbara/logos), via Iconify
- Deployed on [Vercel](https://vercel.com)

## Running locally

The app lives in the `portfolio/` folder.

```bash
cd portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
portfolio/
├── app/
│   ├── page.tsx            # Home
│   ├── my-works/           # Projects
│   ├── tools/              # Tools & techstacks (icon data in tools-data.ts)
│   ├── about/              # About me
│   ├── reach-out/          # Contact
│   ├── components/         # Page shell, background, icons
│   ├── layout.tsx          # Root layout and fonts
│   └── globals.css         # Theme colors and animations
└── public/                 # Images for logos not in the icon sets
```