# Madinah Book Resources — Adversarial Audit

> Evidence-based audit conducted against the actual codebase.
> **VERIFIED** = read the code that proves it · **INFERRED** = reasoned risk, not run · **GAP** = not assessable from static code.

---

## Executive Verdict

**Not launch-ready as described. The product description oversells on at least three load-bearing claims that the code contradicts.** This is a well-organized *content repository* with a thin, partly-broken delivery shell — not the "performant RSC, SEO-optimized, progress-tracking" app the brief advertises. The Arabic data work is substantial and clearly the real asset. The engineering around it has dead code shipping to production, a self-defeating rendering architecture, and zero automated tests guarding ~25k lines of hand-entered Arabic.

The single most damning finding: **three of the headline features are either false or non-functional in the code.** An audit board does not extend trust to a description that the source refutes on first inspection.

**Trust posture: LOW-to-MEDIUM.** Not because the app is dangerous — it's a public read-only data site, so blast radius is small — but because the gap between claimed and actual is wide enough that *every* remaining claim now requires independent proof.

---

## Catastrophic Risks

Nothing here can leak user data or take down infrastructure (no auth, no DB, no PII, no writes). "Catastrophic" for this product = **destroys trust or silently teaches wrong Arabic.** Two qualify:

1. **CAT-1 — Unverifiable curriculum correctness over ~25k lines, with the safety net deliberately disabled.** `tsconfig.json:38-42` **excludes `src/data/vocab/book2` and `src/data/vocab/book3` from type-checking** (4,459 + 7,472 + 1,786 lines). The largest data files in the app — the ones served verbatim to learners — are not type-checked, not tested (zero test files, VERIFIED), and not reviewable by a non-Arabist. A single wrong ḥarakah (diacritic) silently teaches an error to every user, and nothing in the toolchain would catch it. *Severity: Critical. Confidence: High. Failure mode: silent miseducation — the worst outcome for a teaching tool, and the least guarded.*

2. **CAT-2 — "Progress tracking" does not exist.** Brief and README imply learner progress tracking. **VERIFIED:** the only `localStorage` usage in the entire codebase is `selectedArabicFont` (`FontSelector.tsx`) and `font-scale` (`FontScaler.tsx`). No progress, completion state, or resume. Presenting this as a feature is a factual misrepresentation. *Severity: Critical (to credibility). Confidence: High.*

---

## Launch Blockers

- **BLK-1 — Core content pages are `'use client'` and fetch data in `useEffect`.** `books/[bookId]/lessons/[lessonId]/page.tsx:1` is a client component calling `getBookById`/`getLessonById` inside `useEffect` (`:20-22`). **Consequences:** (a) initial HTML contains **no lesson content** — crawlers and link previews see an empty shell; (b) the full grammar dataset (`book1/2/3.ts`) is pulled into the **client** bundle. This refutes both "React Server Components for performance" and "SEO Optimized." *Severity: High. Confidence: High.*

- **BLK-2 — SEO is broken on the primary route.** The main lesson route has **no `generateMetadata`** (only `lessons/[lessonId]/layout.tsx` and the two vocabulary pages have it). Every `/books/.../lessons/...` page falls back to **root metadata**, which hardcodes `'...شرح كتاب المدينة ١'` and `home.png` (`layout.tsx:13-15`). **Every lesson in every book ships an identical title, description, and OG image claiming "Book 1."** *Severity: High. Confidence: High.*

- **BLK-3 — Dead font preload pointing at a non-existent file.** `head.tsx` preloads `/fonts/noto-arabic.ttf`, which **does not exist** (real files: `noto-naskh-arabic.ttf`, `noto-sans-arabic.ttf`, `baloo-arabic.ttf`). Worse, `app/head.tsx` is **not a valid App Router file** (the `head.js` convention was removed before App Router stabilized). Dead code that would 404 if it ran. *Severity: Medium-High. Confidence: High.*

- **BLK-4 — `middleware.ts` on Next 16 is the deprecated form.** The project's own `CLAUDE.md` documents the rename: `middleware.ts` → `proxy.ts`, `middleware` → `proxy`. **VERIFIED:** the file is `src/middleware.ts` exporting `middleware`; no `proxy.ts` exists. The CORS headers it sets (`middleware.ts:9-11`) may not apply. *Severity: Medium-High. Confidence: Medium (needs a build to confirm).*

- **BLK-5 — No `error.tsx`, `loading.tsx`, or `global-error.tsx` anywhere** (VERIFIED). Core pages fetch in `useEffect`; if `getLessonById` returns nothing or throws, there is no route-level boundary and no loading UI. *Severity: Medium-High. Confidence: High.*

---

## High-Severity Defects

- **HI-1 — Duplicate, competing route systems for the same content.** Both `/lessons/[lessonId]` (old) and `/books/[bookId]/lessons/[lessonId]` (new) exist. TODO.md confirms a migration that never removed the old route. With **no canonical tags** (no `alternates.canonical` anywhere), this is classic duplicate-content cannibalization. *Confidence: High.*
- **HI-2 — Zero automated tests** guarding hand-entered Arabic + 16 API routes (VERIFIED). No smoke test asserting every lesson has a title, every vocab item a translation, no empty `arabicText`. *Confidence: High.*
- **HI-3 — No `sitemap.ts`, no `robots.ts`, no structured data** (VERIFIED). For a content site whose discoverability *is* its growth model, the primary acquisition channel is unbuilt. *Confidence: High.*
- **HI-4 — `metadataBase` is not set** (absent from `layout.tsx`). OG/Twitter images use root-relative paths; without `metadataBase`, Next can't resolve them to absolute URLs and many scrapers reject relative OG images. (TODO claims this was "addressed"; the code says otherwise.) *Confidence: High.*

---

## Medium-Severity Defects

- **MED-1 — `lang="ar" dir="rtl"` hardcoded on `<html>` for the entire document** (`layout.tsx:40`), including English chrome. Screen readers announce English content as Arabic-language. Needs per-node `dir`/`lang`. *Confidence: High; a11y impact INFERRED.*
- **MED-2 — Fonts are uncompressed `.ttf`, not `woff2`** (`noto-sans-arabic.ttf` is **823 KB**; ~1.4 MB total if a user cycles fonts). woff2 typically cuts 40–50%. *Confidence: High (sizes verified); savings INFERRED.*
- **MED-3 — Fragile fixed-banner spacer.** Banner is `fixed … z-50` (`layout.tsx:44`) with a hardcoded `pt-20` (80px) spacer (`:56`). On a 320px viewport the English banner wraps to 2–3 lines and **overlaps content**. TODO.md itself logs a banner z-index bug — known and unfixed. *Confidence: Medium-High.*
- **MED-4 — `overflow-x: hidden` on `body`** (`custom-globals.css:30`) masks layout overflow instead of fixing it; can break sticky scrolling. *Confidence: Medium.*
- **MED-5 — Wildcard CORS on the public API** (`middleware.ts:9`) — acceptable for read-only public data, but combined with BLK-4 it's security theater: a header you think is set may not be. *Confidence: Medium.*

---

## Low-Severity Defects

- **LOW-1** — Default template assets ship to production (`next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg`).
- **LOW-2** — `package.json` `name` is still `"nextjs-temp-install"`, `version: 0.1.0`.
- **LOW-3** — `new Date().toISOString()` in every API response makes responses non-deterministic / harder to cache.
- **LOW-4** — `target: ES2017` is conservative for a Next 16 app.
- **LOW-5** — Inconsistent response envelope: some routes use `api-errors.ts` helpers, others hand-roll `{ success, error }` inline.

---

## Evidence Gaps (could not verify statically — trust neither way)

1. **Curriculum & grammar accuracy** — not assessable from source. **Requires a qualified Arabist/teacher review — the highest-value unfilled gap.** The *Badal* sub-types task is still open in TODO.md.
2. **Actual rendered color contrast** — needs an automated axe/Lighthouse pass.
3. **Screen-reader & keyboard reality** — Radix gives a baseline; custom sidebar/modal/toggles need a real NVDA/VoiceOver pass.
4. **Whether `middleware.ts` executes on Next 16** — needs `next build` + header inspection.
5. **Core Web Vitals / real bundle size** — inferred; needs a production Lighthouse run.
6. **Offline/PWA behavior** — no service worker seen; unconfirmed either way.

---

## Adversarial Test Plan

- **Crawler test:** `curl` a lesson URL; grep raw HTML for the Arabic rule text. *Prediction: absent (BLK-1).*
- **Social card test:** run book/lesson URLs through an OG validator. *Prediction: all show "Book 1" + `home.png`.*
- **Duplicate-title crawl:** count unique `<title>`s vs page count. *Prediction: collapse to one title.*
- **Mobile overlap:** load any page at 320×568. *Prediction: banner wraps and clips content.*
- **Data integrity fuzz:** script over `book1/2/3.ts` + vocab — assert no empty `arabicText`, no missing translations, no duplicate IDs.
- **404 JSON contract:** hit `/api/books/book9/lessons/lesson999` and `/api/nonsense`; confirm JSON (not HTML) + correct status.
- **Middleware liveness:** `curl -I` an `/api/` route; check for CORS headers. *Prediction: missing (BLK-4).*
- **Font 404:** confirm `/fonts/noto-arabic.ttf` 404s or that `head.tsx` is inert (BLK-3).
- **RTL/lang:** VoiceOver on the English beta banner — confirm it's announced with an Arabic voice (MED-1).

---

## Remediation Roadmap

**Stop-ship (before any public/presentation claim):**
1. Stop claiming **progress tracking** until built, or build the minimal `localStorage` version. (CAT-2)
2. Convert lesson pages to **Server Components**; render content in initial HTML; isolate interactivity into client islands. (BLK-1)
3. Add **`generateMetadata`** to primary lesson + book routes; set **`metadataBase`**. (BLK-2/HI-4)
4. Delete `head.tsx`; fix or remove the font preload. (BLK-3)
5. Resolve the middleware/`proxy.ts` rename; prove headers apply on a real build. (BLK-4)
6. Re-enable type-checking for `book2`/`book3` vocab; fix what surfaces. (CAT-1)

**Next cycle:**
7. Add a **data-integrity test suite** (cheapest, highest-ROI safety net). (HI-2/CAT-1)
8. `sitemap.ts`, `robots.ts`, JSON-LD; canonical tags; delete the old `/lessons` route system. (HI-1/HI-3)
9. `error.tsx` + `loading.tsx` per route segment. (BLK-5)
10. Convert fonts to **woff2**. (MED-2)
11. Fix the banner spacer with real layout (not hardcoded `pt-20`); remove `overflow-x: hidden`. (MED-3/4)

**Future hardening:**
12. **Commission an Arabist review** of all grammar/vocab data — the only way to close CAT-1.
13. Full axe + Lighthouse + screen-reader pass; per-node `lang`/`dir`. (MED-1, gaps 2–3)
14. Content-governance process (who edits Arabic, who signs off); CONTRIBUTING contract.
15. Rename the package, set a real version, strip template assets.

---

## Final Confidence Score

**Audit confidence: 7.5 / 10.**

- **High because:** the launch-blockers and catastrophic findings are **code-verified** — the tsconfig exclusion, the `'use client'`+`useEffect` data path, the missing `generateMetadata`, the non-existent font file, the `middleware.ts` name, the storage layer's actual usage.
- **Capped below 9 because:** no production build, Lighthouse, or assistive-tech run was performed, and — decisively — **the correctness of the Arabic grammar content cannot be vouched for**, which is the product's entire reason to exist.
- **Would raise it:** `next build` + Lighthouse (+1.0), Arabist sign-off on the data (+1.0), axe/screen-reader pass (+0.5) → ~9.5.
- **Would lower it:** if a build reveals the client pages *do* SSR content via a mechanism not traced, BLK-1's magnitude drops — treat BLK-1's *direction* as high-confidence, *magnitude* as build-confirmed.

## Ruthless Prioritized Action Plan

- **IMMEDIATE / STOP-SHIP:** Drop the "progress tracking," "RSC-performant," and "SEO-optimized" claims from any presentation unless fixes ship first — the code contradicts all three. Fix BLK-1–4. Re-enable type-checking on book2/book3.
- **NEXT CYCLE:** data-integrity tests, sitemap/robots/canonical, kill the duplicate route system, error/loading boundaries, woff2.
- **FUTURE HARDENING:** Arabist content review (non-negotiable for trust), full a11y/CWV audit, content governance, repo hygiene.

**Bottom line:** the content is the asset; the shell is undersold engineering oversold in prose. Close the claim-vs-code gap before this goes in front of anyone who can check.
