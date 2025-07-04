## Multi-Book Support Implementation:

- [x] Refactor the site for multi-book support and other enhancements.
- [x] Create a landing page for book selection (Madinah Book 1, 2, 3, etc.) (commit: 45b4a55)
- [x] Refactor lessons.ts data structure to support multiple books
  - [x] Option 1: Separate files (book1.ts, book2.ts, book3.ts)
  - [-] Option 2: Single file with book categorization
- [x] Update routing structure to support /books/[bookId]/lessons/[lessonId]
- [x] Update Layout component to handle book-specific navigation
  - [x] Fix active lesson highlighting in sidebar for book-specific lessons (commit: 79687f2)
  - [x] Fix sidebar not populating on book pages - wrapped book page with Layout component (book page sidebar integration)
- [x] Make Header component dynamic based on chosen book (commit: df2d78d)
- [x] Fix home button navigation to be context-aware - home button on lesson pages goes to book page, home button on book pages goes to root "/" (feat: implement context-aware home button navigation - Modified Header component to accept homeUrl prop, updated book and lesson pages to pass appropriate home URLs)
- [ ] Update metadata and titles to reflect selected book
- [ ] Create book selection UI components
- [x] Update Home Page UI to match design provided in `/Users/aramb/Documents/GitHub/madinah-book-grammar-rules/tmp/home.png`
  - [x] Add FontSelector and FontScaler components to the landing page (commit: b65a9ee)
- [x] Update Book Page UI to match design provided in `/Users/aramb/Documents/GitHub/madinah-book-grammar-rules/tmp/book.png`
- [x] Update existing lesson pages to work with new book structure
- [ ] Test performance on lower-end mobile devices.
- [ ] Address `metadataBase` warning in Next.js configuration.
- [ ] Separate the rules for badal (الْبَدَلُ - Apposition) with four types: Total (كُلِّ مِنْ كُلِّ), Partial (بَعْضٍ مِنْ كُلِّ), Inclusive (اشْتِمَالٍ), and Error/Forgetfulness (الْمُبَايِنِ)
- [ ] Fix beta banner z-index issue - banner is stuck behind home and sidebar buttons
- [ ] **Fix API 404 handling - Create custom not-found.tsx for API routes to return JSON instead of HTML for non-existent endpoints**

## Future Enhancements:

1. Add more lessons and content
2. Implement user authentication for personalized learning
3. Add a progress tracking system
4. Implement a quiz system to test understanding
5. Create a standalone API route for Gemini AI integration
6. Add animations and transitions for better UX

## Completed Tasks:

- Successfully initialized a new Next.js application by running `npx create-next-app@latest nextjs-temp-install`, moving its contents to the root directory, and selecting TypeScript, ESLint, Tailwind CSS, `src/` directory, and App Router during setup.
- Initialized `shadcn/ui` with TypeScript, default style, Slate base color, `src/app/globals.css` for global CSS, CSS variables for colors, `tailwind.config.ts`, `@/components` and `@/lib` import aliases, and React Server Components. Verified `tailwind.config.ts` update and `lib/utils.ts` creation. Created `components/ui`, `components/custom`, and `components/layout` directories, installed button, sheet, card, dialog, and toggle `shadcn/ui` components, and added necessary utility files.
- Migrated the core HTML structure by creating `components/layout/Layout.tsx`, moving the main layout from `index.html` into it, converting HTML to JSX, and creating `components/layout/Header.tsx` and `components/custom/LessonContent.tsx`, then updating the main page to use these new components.
- Ensured Tailwind CSS was configured correctly, moved custom CSS from `index.html`'s `<style>` block to `styles/globals.css`, handled `Inter` and `Noto Kufi Arabic` font imports using `next/font`, and updated selectors as needed for JSX.
- Implemented Google Fonts import for Inter and Noto Kufi Arabic using Next.js font optimization (`next/font/google`) in `src/app/layout.tsx`.
- Moved `lessonsData` to `data/lessons.ts`. Created the core page (`src/app/page.tsx`), imported `lessonsData`, replicated lesson list and content area rendering, and managed selected lesson and AI toggle state with React. Implemented sidebar navigation, ported lesson list population and selection logic, and managed mobile sidebar state. Implemented Gemini modal functionality, ported its control logic, and created a client-side API wrapper for Gemini calls, migrating related functions and caching logic.
- Implemented dynamic lesson pages using Next.js App Router (`/lessons/[lessonId]/page.tsx`), updated the Layout component with `Link` components for navigation, added a `/lessons` index page redirecting to the first lesson, and implemented home page navigation with a fixed home button.
- Installed necessary dependencies including `showdown`, `tailwindcss`, `postcss`, and `autoprefixer`.
- Ran the development server and thoroughly tested lesson selection/display, mobile sidebar functionality, AI feature toggle, modal operations (opening/closing, loading, content), AI feature calls (post-API setup), console error checks, and style application.
- Addressed accessibility in `DialogContent` by adding `DialogTitle` and `DialogDescription`/`aria-describedby` as per Radix UI docs. Fixed WOFF2 font preloading warning by ensuring correct `as` value and considering adjustments to Next.js font loading strategy.
- Tested on various mobile devices, enhanced mobile sidebar/navigation (improved touch targets, ensured proper closing after lesson selection, tested scrolling), and optimized lesson content display (ensured readable Arabic text, adjusted spacing/padding, tested AI modals). Fixed `SheetContent` accessibility (commit: 82d9b10), resolved RTL layout issues for the close button (commit: 546d376), and implemented font scaling controls (commit: d1aedd9).
- Fix README.md with correct project information, commands, and technology stack - Updated project title, corrected npm commands, added proper technology badges for Next.js and Tailwind CSS, fixed typos, and improved project description and features section
- Build and Deploy:

  - Created production build with `npm run build`
  - Tested locally using `npm run start`
  - Configured deployment settings for Vercel/Netlify
  - Set up production environment variables

- [x] Marked the main Next.js conversion task as complete and added relevant commit/PR references.

- [x] Remove AI features from the application. (commit: d94ef83)

- [x] Update primary Arabic font to Noto Naskh Arabic. (commit: 8f1406a)
- [x] Implement font selection UI for Noto Sans Arabic and Baloo Arabic. (commit: e20ff26)
- [x] Update README.md to reflect current application state. (commit: 2ef4d9f)
- [x] Convert `readme` to `README.md` (HTML to Markdown conversion).
- [x] Convert `readme` to `README.md` (HTML to Markdown conversion).
- [x] Implement page transitions and mobile sidebar animations. (5dbd11a)
- [x] Remove all transitions from the project. (commit: cb687ab)
- [x] Refactor Book and Lesson type definitions to `src/data/lessons.ts`. (commit: 863c529)
- [x] Fix build error related to Book type import in `src/data/books.ts`. (commit: 874c1b2)
- [x] Remove all transitions from the project. (commit: cb687ab)
- [x] Refactor Book and Lesson type definitions to `src/data/lessons.ts`. (commit: 863c529)
- [x] Fix build error related to Book type import in `src/data/books.ts`. (commit: 874c1b2)
- [x] Implement changelog feature based on commit history. (5adfafb)
- [x] Add 'Return to Homepage' link to sidebars. (acc5bd0)
- [x] Fix missing layout (sidebar and homepage button) on Changelog page. (de1b501)
- [x] Fix `usePathname` client component error in Layout. (54b0d43)
- [x] Fix misplaced 'use client' directive in Layout.tsx. (b61d44f)
- [x] Configure ESLint and Prettier.
- [x] Commit `README.md` changes. (commit: 2d3a1fbcbd4d4c1d0ef17a3479285e4c938d3978)
- [x] Convert the `Changelog` page to Next.js, ensuring it uses the shared `Layout` and `Header` components. Added a changelog card to the main landing page with bilingual content (Arabic/English) that links to the changelog page. Updated to use full-width layout without sidebar for better content presentation.
- [x] Fix 'Event handlers cannot be passed to Client Component props' error by removing `onLessonSelect` from `Layout` and relying on `Link` components. (399736d)
- [x] Remove `onLessonSelect` prop from `Layout` component and its usage.
- [x] Update changelog with latest changes. (257d2d5)
- [x] Fix Next.js page export issue in lessons/[lessonId]/page.tsx. (252a4a2)
- [x] Fix type error for `currentBookId` prop in Layout component.
- [x] Fix sidebar positioning for Arabic RTL layout - move sidebar to right side. (fixes positioning issue for Arabic applications)
- [x] Fix desktop spacing issues - resolved sidebar layout and positioning problems
- [x] Fix mobile home button positioning for RTL layout - changed from left-4 to right-4
- [x] Fix duplicate Layout components in lesson pages - removed nested Layout wrapper causing duplicate UI elements
- [x] Adjust hamburger menu z-index to prevent conflicts - reduced from z-30 to z-20
- [x] Refactor sidebar into separate component - created dedicated Sidebar.tsx component for better modularity and maintainability
- [x] Complete home button removal from Layout component - removed duplicate home button and unused imports from Layout.tsx, home button now only exists in Header component on the left side
