# Sai Saketh Nagavalli — Portfolio V2

Professional portfolio built with React, TypeScript, and Vite.

**Live website:** https://saisakethnagavalli.vercel.app/

## Run on Windows / VS Code

1. Install Node.js 22 or newer with npm, if it is not already installed.
2. Extract `sai-saketh-portfolio-v2.zip` with Windows **Extract All**. Use a separate location from your original portfolio.
3. Open VS Code → **File → Open Folder** → select the extracted `sai-saketh-portfolio-v2` folder. `package.json` must be directly inside the folder you open.
4. Choose **Terminal → New Terminal**. PowerShell and Command Prompt both work.
5. Install exactly the dependencies in the lockfile:

```powershell
npm ci
```

6. Start development:

```powershell
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`. Keep the terminal running. Stop with **Ctrl+C**. If that port is busy, use the URL Vite actually prints.

To check types independently:

```powershell
npm run typecheck
```

To create the production build:

```powershell
npm run build
```

To preview that production build:

```powershell
npm run preview
```

Open the URL printed by Vite, normally `http://localhost:4173/`. The preview command requires a successful build first. Do not double-click `index.html`; Vite serves the React application and its assets.

If PowerShell blocks `npm.ps1`, select **Command Prompt** from the VS Code terminal dropdown and run the same commands. No global Vite installation or API keys are needed.

## Visual direction

Midnight blue and warm off-white with copper accents. Self-hosted IBM Plex Mono gives headings, navigation, and controls a consistent developer character; IBM Plex Sans keeps paragraphs readable. Open numbered sections use left labels and right content on larger screens, and stack naturally on mobile. Experience is presented as structured rows. Projects use straight, labeled conceptual workflow diagrams rather than invented employer screenshots. Light mode uses a warm neutral palette and a deeper burnt-orange accent.

## Content and behavior

- Approved content is retained in `src/data/portfolio.ts`.
- Only Included Health and Neon IT Systems appear as employers.
- All four existing professional case studies retain their original content and scope notes. They are not represented as public personal repositories or demos.
- Education includes all three requested GPA values.
- The original photograph is preserved. The single PDF resume retains the approved content and includes the current portfolio address in its header. The hero uses a new AI-enhanced portrait with a neutral grey studio background.
- Social and phone destinations match the source and requested phone number.
- Dark is the default theme. A separate `portfolio-v2-theme` localStorage key stores the visitor's choice without changing the original site's preference.
- Filtering updates visible case studies. Native modal dialogs include explicit keyboard focus wrapping, Escape and close actions, focus restoration, and scroll locking.
- The contact form opens a **Gmail draft**, with the visitor's input encoded in its URL. It does not send email, save submissions, or call a backend. A prepared-draft link is shown as a popup fallback. Gmail may require sign-in.
- Copy email uses the Clipboard API on secure origins, a browser copy fallback when needed, and manual-copy guidance if copying fails.
- The hero rotates through AI Engineer, Data Scientist, Data Engineer, GenAI Engineer, and Machine Learning Engineer every 3.6 seconds. A pause/resume control is provided. Reduced-motion preferences stop rotation and remove transitions and smooth scrolling. No sections delay reading.

## Edit the portfolio

| File                                            | Purpose                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `src/data/portfolio.ts`                         | Approved profile, experience, case studies, skills, certifications, and Gmail URL helper |
| `src/App.tsx`                                   | Page order, About, experience, skills, education, certifications, footer                 |
| `src/components/Navbar.tsx`                     | Navigation, mobile menu, theme persistence                                               |
| `src/components/Hero.tsx`                       | Hero and photograph                                                                      |
| `src/components/Projects.tsx`                   | Filters and accessible case-study dialogs                                                |
| `src/components/ProjectPreview.tsx`             | Conceptual workflow visuals                                                              |
| `src/components/Contact.tsx`                    | Contact links, copy button, Gmail draft form                                             |
| `src/index.css`                                 | Theme tokens, typography, layout, responsive and reduced-motion rules                    |
| `public/resume/Sai_Saketh_Nagavalli_Resume.pdf` | The only downloadable resume                                                             |
| `public/images/sai-saketh.png`                  | Original selected photo                                                                  |
| `public/images/sai-saketh-grey.webp` | AI-enhanced grey-background hero portrait |

The fonts and their original open-source license files are included under `public/fonts/`; there are no runtime font-service requests.

## Vercel compatibility

The original generic `vercel.json` is retained: Vite framework, `npm run build`, and `dist` output. No account identifiers, `.vercel` state, tokens, or deployment credentials are included. This project is deployed separately as `sai-saketh-portfolio-v2` on Vercel, with `saisakethnagavalli.vercel.app` configured as its public personal address.

## Verification and screenshots

See `docs/VERIFICATION.md` for the checks actually performed and environment limitations. Actual browser captures are in `docs/screenshots/`. The screenshots show the working React application, not generated mockups.

The source ZIP excludes `node_modules`, `dist`, `.git`, `.vercel`, temporary QA files, build metadata, and secrets. Recreate the build locally using the commands above.

## Requested revision

Full-name branding now reads Sai Saketh Nagavalli in the header and footer. The education labels distinguish Computer Science and Engineering (CSE): 9.09 / 10.00 and Data Science (Minor): 9.17 / 10.00. The FAU GPA stays 3.90 / 4.00. Role headings describe focus areas and do not change the approved employment titles. The neutral grey-background portrait follows the user’s corrected visual direction; see `docs/AI-PORTRAIT.md` for generation details.
