# Sai Saketh Nagavalli — Portfolio

Personal portfolio featuring my experience, selected project case studies, skills, education, and resume.

**Live website:** [saisakethnagavalli.vercel.app](https://saisakethnagavalli.vercel.app/)

Built with React, TypeScript, and Vite, with responsive layouts, light and dark themes, and accessible project dialogs.

## Run locally on Windows / VS Code

1. Install Node.js 22 or newer with npm.
2. Clone this repository or extract the source ZIP.
3. In VS Code, select **File → Open Folder** and open the project folder containing `package.json`.
4. Select **Terminal → New Terminal**, then run:

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`. Stop the server with **Ctrl+C**.

If PowerShell blocks `npm.ps1`, select **Command Prompt** from the terminal dropdown and run the same commands.

## Build and preview

```powershell
npm run typecheck
npm run verify:content
npm run build
npm run preview
```

Build before running preview. Open the URL printed by Vite, normally `http://localhost:4173/`.

## Deployment

Vercel settings: **Vite**, build command `npm run build`, output directory `dist`.

## Project files

- `src/data/portfolio.ts` — professional experience and typed content contract.
- `src/data/projects.json` — shared project catalog for cards, filters and case studies.
- `src/components/` — page components.
- `src/index.css` — themes, typography, and responsive styles.
- `public/` — images, self-hosted fonts, and downloadable resume.

Verification notes and screenshots are available in [docs/VERIFICATION.md](docs/VERIFICATION.md) and [docs/screenshots/](docs/screenshots/). Font licenses are included in `public/fonts/`.

## Maintaining the engineering portfolio

The selected work presents UrbanLake, KnowDoc AI, CareFlow AI, CollabDocs and Diamonds analytics, with explicit status, source links, historical evidence and limitations. Professional experience is separate. See [content maintenance](docs/CONTENT.md); `npm run export:profile` produces the matching GitHub profile project block. The RUC document and private interview material are never part of the site.
