# Verification report

Date: October 24, 2026

## Sources and accuracy

- Inspected the supplied source ZIP, reference screenshot, and PDF resume bundled inside the ZIP. No separate resume attachment was present.
- Reviewed the reference website through web retrieval and visually reviewed the supplied screenshot. The current portfolio's live URL could not be retrieved by the web tool; the uploaded source was the primary implementation and content source.
- The bundled resume agrees with the source on Included Health and Neon IT Systems roles, dates, and stated metrics. It does not list BTech details or GPA values. Those were preserved from the approved source and explicit user instructions. No conflicting material fact was identified among the supplied sources.
- The original `src/data/portfolio.ts`, photo, PDF resume, and `vercel.json` were verified byte-for-byte against the source ZIP.
- No Ecore Data Analytics content, new projects, invented links, employers, credentials, or employment claims were added. The user explicitly requested role headings including Data Engineer and a revised AI portrait.

## Build and package checks

- `npm ci` completed successfully using the supplied lockfile and retained dependencies.
- `npm run typecheck` passed.
- `npm run build` passed (TypeScript and Vite production build).
- Reviewed React components for stable keys, hook cleanup, semantic controls, labels, focus handling, and unnecessary animation.
- Checked text/accent color contrast against theme backgrounds numerically; normal UI text uses at least 4.5:1 contrast for the checked token pairs. This is not a full automated accessibility audit.
- Checked packaged files for excluded directories, environment files, credential patterns, and a single resume PDF.

## Browser method

The available Chrome interface did not expose window-resizing or media-emulation controls. A temporary same-origin QA page rendered the real app in fixed-width browser frames at **375px, 768px, and 1440px**. It was removed from the delivered project. These tests exercise real CSS viewport breakpoints; they do not emulate mobile hardware, touch, or a device browser.

The frames used native 15px scrollbars. Measured layout widths were 360, 753, and 1425px respectively. In every case `scrollWidth === clientWidth`, so no horizontal overflow was observed. The app was also inspected in the normal top-level browser viewport.

## Initial Version 2 browser checks performed

| Check                               | Result                                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hero, photo, primary buttons        | Inspected at all three widths; original image loaded at its expected intrinsic dimensions                                                                                      |
| Text, spacing, and project previews | Visually reviewed; tablet previews changed to a single column for readability                                                                                                  |
| Mobile/tablet navigation            | Opened, used section link, verified dismissal; Escape closes the menu                                                                                                          |
| Project filters                     | All work shows four; each of the four discipline filters shows its one corresponding case study                                                                                |
| Case studies                        | All four opened; titles and content rendered                                                                                                                                   |
| Keyboard dialog opening             | Enter on trigger opened the modal                                                                                                                                              |
| Dialog focus                        | Initial close-button focus; Tab wraps from final action to close; Shift+Tab wraps back; focus remains inside                                                                   |
| Escape and focus restoration        | Dialog dismisses and focus returns to the originating case-study button                                                                                                        |
| Dialog width                        | No horizontal overflow in mobile and desktop modal measurements                                                                                                                |
| Themes                              | Dark default, light switching, and persistence after reload verified; both themes visually reviewed on mobile                                                                  |
| Social and phone URLs               | Rendered hrefs match GitHub, LinkedIn, and `tel:+15613039292` from the approved sources                                                                                        |
| Gmail draft form                    | Filled with dummy QA values; submit opened Google sign-in with the composed recipient, subject, and body in the continuation URL; fallback link held the same encoded draft    |
| Copy-email action                   | Button acknowledged copying; remote clipboard readback returned empty, so actual clipboard contents were not independently confirmed                                           |
| Assets and console                  | Photo and self-hosted fonts rendered; no app-origin warnings/errors observed in inspected logs. Browser-extension metadata errors were present and are unrelated to app source |

## Limits and remaining local checks

- Gmail was not signed into and no email was sent. A signed-in draft editor and final delivery were not tested.
- The PDF resume and download-link attributes are present and the bundled PDF is byte-identical to the original. A browser download-event wait timed out, so completion of the browser's Save/download flow is unverified. Please click Download Resume once in your local browser.
- Reduced-motion rules were inspected in source. OS/browser media emulation was not available, so that preference was not toggled during browser testing. The revised role heading has a brief fade transition and a 3.6-second rotation; JavaScript stops rotation under reduced motion, and CSS removes the transition and smooth scrolling.
- External GitHub and LinkedIn hrefs were checked for correct destinations; external profile availability was not tested.
- The phone href was verified; no phone call was placed.
- No Safari, Firefox, real-device, screen-reader, or full automated accessibility audit was run.
- No deployment or repository push was performed. Production hosting behavior has not been tested.

## Captures

- `screenshots/desktop-1440.jpg`: actual 1440px-wide desktop frame, hero.
- `screenshots/mobile-375.jpg`: actual 375px-wide mobile frame, hero.
- `screenshots/projects-desktop.jpg`: actual desktop project section.

Captures were cropped only to the frame bounds to remove unused space from the QA wrapper. Page content was not retouched.

## Revision: copper palette, full name, education labels, rotating roles, grey portrait

- Replaced the charcoal/mint palette with midnight blue/copper and a warm light theme, retaining the fonts and overall section arrangement.
- Replaced the hero image with an optimized 640px AI-enhanced neutral-grey-background portrait (about 33 KB); kept the original photo unchanged.
- Added full-name header/footer branding, explicit Computer Science and Engineering (CSE) and Data Science (Minor) GPA labels, and the expanded BTech degree wording requested by the user.
- Added five rotating focus-area headings with a pause/resume control, a stable-height area, no repeated screen-reader announcements, and reduced-motion handling.
- Re-ran TypeScript and the production build after implementation. See subsequent browser observations below.


### Revision browser observations

- Rechecked fixed browser frames at 375px, 768px, and 1440px: no horizontal overflow (scrollWidth matched clientWidth: 360, 753, and 1425px).
- The longest title, Machine Learning Engineer, fit within the 320px mobile content area without overflow. Rotation was observed between GenAI Engineer and Machine Learning Engineer, with other focus areas also appearing during review.
- Pause/resume controls changed state correctly, and a paused desktop title remained unchanged across subsequent checks.
- The neutral-grey portrait loaded from the new WebP asset. The full name was visible in the header, and the expanded CSE and Data Science GPA labels were checked in the rendered page.
- Reviewed the revised dark and light desktop themes and the mobile/tablet layouts. Mobile section navigation to Education worked.
- No app-origin warnings or errors appeared in the inspected revision console logs.
- Captures were refreshed for this revision. Reduced-motion media emulation and the other external-service limits above remain unverified.


## Publication and portfolio migration

The Vite production build was published successfully to a separate Vercel project. The public personal address is https://saisakethnagavalli.vercel.app/. A paid .com was not registered because the user requested a free address.

The downloadable resume header now includes the personal address and a clickable HTTPS link. Text below the header was compared with the approved original and is unchanged. A Git bundle preserves the complete history of the old source repository before any removal. GitHub source publication, profile links, and retirement of the old resources are tracked separately; do not assume those steps are complete from this note.
