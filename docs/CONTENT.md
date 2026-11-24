# Portfolio content maintenance

`src/data/projects.json` is the single project catalog. Its TypeScript contract is `Project` in `src/data/portfolio.ts`. Cards, categories, case-study dialogs and links derive from this catalog. Run `npm run export:profile` to generate the matching profile project block; review and commit it to the profile repository. No GitHub API or external content service is called at runtime.

Verify source at the repository HEAD before changing a capability, demo, result or status. `lastVerified` records a source review, not a repeat of every historical experiment. Historical metrics must name their recorded scope and limitations. Hosted and local editions require separate descriptions. Never add private preparation content or employer diagrams.

Experience uses the user-confirmed resume from November 2026. Business outcomes are resume-reported, not independently audited. The public resume preserves its body and replaces its header with the explicitly requested Florida/Gmail contact details; the phone is omitted. The RUC document is private reference material and must never be uploaded.

Update `npm run verify:content`, typecheck and build after changes. Review desktop/mobile navigation, every filter and dialog, focus restoration and assets before deployment. The site has no configured lint script; typecheck is not a substitute for lint. Existing Vercel project and configuration are preserved.
