## TODO: Convert to Next.js Application

### Initialize Next.js Project:

- [x] Successfully initialized a new Next.js application by running `npx create-next-app@latest nextjs-temp-install`, moving its contents to the root directory, and selecting TypeScript, ESLint, Tailwind CSS, `src/` directory, and App Router during setup.

### Project Setup & Basic Structure:

- [x] Initialized `shadcn/ui` with TypeScript, default style, Slate base color, `src/app/globals.css` for global CSS, CSS variables for colors, `tailwind.config.ts`, `@/components` and `@/lib` import aliases, and React Server Components. Verified `tailwind.config.ts` update and `lib/utils.ts` creation. Created `components/ui`, `components/custom`, and `components/layout` directories, installed button, sheet, card, dialog, and toggle `shadcn/ui` components, and added necessary utility files.

### Migrate Core HTML Structure (Layout):

- [x] Migrated the core HTML structure by creating `components/layout/Layout.tsx`, moving the main layout from `index.html` into it, converting HTML to JSX, and creating `components/layout/Header.tsx` and `components/custom/LessonContent.tsx`, then updating the main page to use these new components.

### Migrate CSS:

- [x] Ensured Tailwind CSS was configured correctly, moved custom CSS from `index.html`'s `<style>` block to `styles/globals.css`, handled `Inter` and `Noto Kufi Arabic` font imports using `next/font`, and updated selectors as needed for JSX.

### Migrate Static Assets (Fonts):

- [x] Implemented Google Fonts import for Inter and Noto Kufi Arabic using Next.js font optimization (`next/font/google`) in `src/app/layout.tsx`.
- [ ] If you had local images/icons (none apparent in `index.html` but good to keep in mind), they would go into the `public` directory.

### Migrate JavaScript Logic & Data:

- [x] Moved `lessonsData` to `data/lessons.ts`. Created the core page (`src/app/page.tsx`), imported `lessonsData`, replicated lesson list and content area rendering, and managed selected lesson and AI toggle state with React. Implemented sidebar navigation, ported lesson list population and selection logic, and managed mobile sidebar state. Implemented Gemini modal functionality, ported its control logic, and created a client-side API wrapper for Gemini calls, migrating related functions and caching logic.

### Create Dynamic Pages for Lessons (Optional but Recommended for SEO & Structure):

- [x] Implemented dynamic lesson pages using Next.js App Router (`/lessons/[lessonId]/page.tsx`), updated the Layout component with `Link` components for navigation, added a `/lessons` index page redirecting to the first lesson, and implemented home page navigation with a fixed home button.

### Install Dependencies:

- [x] Installed necessary dependencies including `showdown`, `tailwindcss`, `postcss`, and `autoprefixer`.

### Testing:

- [x] Ran the development server and thoroughly tested lesson selection/display, mobile sidebar functionality, AI feature toggle, modal operations (opening/closing, loading, content), AI feature calls (post-API setup), console error checks, and style application.

### Accessibility and Performance Issues:

- [x] Addressed accessibility in `DialogContent` by adding `DialogTitle` and `DialogDescription`/`aria-describedby` as per Radix UI docs. Fixed WOFF2 font preloading warning by ensuring correct `as` value and considering adjustments to Next.js font loading strategy.

### Mobile Optimization and Responsive Design:

- [x] Tested on various mobile devices, enhanced mobile sidebar/navigation (improved touch targets, ensured proper closing after lesson selection, tested scrolling), and optimized lesson content display (ensured readable Arabic text, adjusted spacing/padding, tested AI modals). Fixed `SheetContent` accessibility (commit: 82d9b10), resolved RTL layout issues for the close button (commit: 546d376), and implemented font scaling controls (commit: d1aedd9).

  - [ ] Test performance on lower-end mobile devices.

- [ ] Address `metadataBase` warning in Next.js configuration.

### Build and Deploy (Later Stage):

- [ ] Create a production build: `npm run build`.
- [ ] Test the production build locally: `npm run start`.
- [ ] Plan for deployment (e.g., Vercel, Netlify).
- [ ] Set up environment variables for production.

### Cleanup:

- [x] Removed the original `index.html` after ensuring the Next.js app was fully functional.

## Update TODO.md (Post-Conversion):

- [x] Marked the main Next.js conversion task as complete and added relevant commit/PR references.

- [x] Remove AI features from the application.

- [ ] Configure ESLint and Prettier.

## Future Enhancements:

1. Add more lessons and content
2. Implement user authentication for personalized learning
3. Add a progress tracking system
4. Implement a quiz system to test understanding
5. Create a standalone API route for Gemini AI integration
6. Add animations and transitions for better UX
