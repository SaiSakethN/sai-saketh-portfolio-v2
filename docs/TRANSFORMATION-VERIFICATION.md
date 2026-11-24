# Engineering portfolio verification

November 23, 2026. This record applies to the transformation branch; the older VERIFICATION.md is historical.

## Content and privacy

- Inventoried all 12 accessible user repositories and inspected source in every nonempty repository. Reference account listing had 24 repositories and an empty second page; large upstream forks received limited review.
- Read the complete one-page resume and 21-page RUC from user-confirmed files. The RUC describes illustrative architectures and remains private. No RUC binary, extracted text or interview answers enter Git or deployment.
- Experience titles now match the resume. Employer outcomes are resume-reported, not independently audited. Independent project cards are separate from experience.
- Public resume retains the authoritative source's body exactly, with an explicitly requested Delray Beach, Florida / Gmail header. Phone is omitted. Original PDFs are untouched. Header was rendered and visually reviewed; LinkedIn destination matches its original PDF annotation.
- BTech/GPA details absent from the latest resume were omitted. No new certifications or article publications invented.

## Checks actually run

- `npm ci`: successful with existing lockfile. One pre-existing moderate advisory reported; no unsolicited dependency upgrade performed.
- `npm run verify:content`, `npm run typecheck`, `npm run build`: passed.
- No lint script exists. CI now runs install, content validation, TypeScript and build; remote CI status must be checked after push.
- Forty local README asset/document links in profile and three flagship repositories resolved.
- Portfolio plus UrbanLake, KnowDoc and CollabDocs public URLs returned HTTP 200. This is availability evidence, not a full backend test.
- Browser inspection at 375, 768 and 1440 pixels. Mobile client/scroll widths 360/360; tablet 753/753; desktop scroll width 1425 within 1440 viewport. No observed horizontal overflow.
- All five project visuals loaded. All five dialogs opened and closed. KnowDoc Escape dismissal restored focus to its trigger. Mobile CareFlow dialog fit viewport; Shift+Tab wrapped from initial close to final action.
- Mobile navigation opened, displayed six section links and closed after selecting Projects. Data-engineering filter showed one result; All work restored the catalog.
- No app-origin console errors observed; an earlier reference-site Wix/Sentry error is unrelated.

## Limits

Historical full-data training, healthcare model experiments, RAG benchmark, Supabase persistence and remote inference were not rerun. Screenshots come from the actual repositories, using synthetic example content. Architecture assets are explicitly labeled illustrations. No real-device, Safari/Firefox, screen-reader or complete automated accessibility audit was performed. Reduced-motion CSS/JavaScript was inspected; OS preference emulation was not exercised. Social preview image was generated as a PNG; social-network cache refresh cannot be guaranteed.

Deployment, remote checks and PR references are recorded in the final output report after publication. Preserve previous Vercel deployment for rollback.
