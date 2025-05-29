# TODO: Convert to Next.js Application

## Initialize Next.js Project:

- [x] Set up a new Next.js application. ~~Consider if you want to do this in the current directory or a new subdirectory (e.g., `my-next-app`).~~ (Done by creating in `nextjs-temp-install` and moving to root)
- [x] Run `npx create-next-app@latest nextjs-temp-install` and move contents to root.
- [x] Choose options during setup (TypeScript, ESLint, Tailwind CSS, src/, App Router selected).

## Project Setup & Basic Structure:

- [x] **Initialize shadcn/ui:**
  - [x] Run `npx shadcn@latest init`.
  - [x] You will be asked a few questions:
    - `Would you like to use TypeScript (recommended)?` -> Yes
    - `Which style would you like to use?` -> Default
    - `Which color would you like to use as base color?` -> Slate
    - `Where is your global CSS file?` -> `src/app/globals.css`
    - `Do you want to use CSS variables for colors?` -> Yes
    - `Where is your tailwind.config.js file?` -> `tailwind.config.ts`
    - `Configure import alias for components:` -> `@/components`
    - `Configure import alias for utils:` -> `@/lib`
    - `Are you using React Server Components?` -> Yes
    - `Write configuration to components.json.` -> Yes
- [x] Verify `tailwind.config.ts` has been updated by shadcn/ui.
- [x] `lib/utils.ts` file was created by shadcn/ui.

- [x] Create necessary directories:
  - [x] Create `components/ui` directory for shadcn/ui components.
  - [x] Create other `components` subdirectories as needed (e.g., `components/custom`, `components/layout`).
  - [x] Install shadcn/ui components: button, sheet, card, dialog, toggle (5 components created in `src/components/ui/`)
  - [x] Add utility files to `lib/` as needed.

## Migrate Core HTML Structure (Layout):

- [x] Create a `components/layout/Layout.tsx` component.
- [x] Move the main HTML structure (body, overall div layout, sidebar, main content area placeholder) from `index.html` into `Layout.tsx`.
- [x] Convert HTML tags to JSX (e.g., `class` to `className`, `for` to `htmlFor`).
- [x] Create a Header component in `components/layout/Header.tsx`.
- [x] Create a LessonContent component in `components/custom/LessonContent.tsx`.
- [x] Update the main page component to use these components.

## Migrate CSS:

- [x] **Tailwind CSS**: Ensure Tailwind is configured correctly.
- [x] **Custom CSS in `<style>` tags**:
- [x] Move the CSS rules from the `<style>` block in `index.html` into `styles/globals.css`.
- [x] Ensure font imports (`Inter`, `Noto Kufi Arabic`) are handled using `next/font`.
- [x] Update any selectors if necessary due to JSX structure changes.

## Migrate Static Assets (Fonts):

- [x] The Google Fonts import has been implemented using Next.js font optimization (`next/font/google`) in `src/app/layout.tsx` for Inter and Noto Kufi Arabic fonts.
- [ ] If you had local images/icons (none apparent in `index.html` but good to keep in mind), they would go into the `public` directory.

## Migrate JavaScript Logic & Data:

- [x] **`lessonsData` Array:**
- [x] Move the `lessonsData` array into a separate file, created as `data/lessons.ts`. Export it from there.
- [x] **Core Page (`src/app/page.tsx`):**
- [x] Create the main page. Import `lessonsData`.
- [x] Replicate the initial rendering of the lesson list and the main content area.
- [x] Use React state (`useState`) and effects (`useEffect`) to manage:
  - [x] The currently selected lesson.
  - [x] AI feature toggle state.
- [x] **Sidebar Navigation:**
  - [x] Create sidebar navigation within the Layout component.
  - [x] Port the JavaScript logic for populating the lesson list and handling lesson selection clicks.
  - [x] Manage sidebar open/close state (for mobile) using React state.
- [x] **Modal Implementation:**
  - [x] Implement the Gemini modal functionality.
  - [x] Port the `openGeminiModal`, `closeGeminiModal` logic.
- [x] **API Calls (`callGeminiAPI` function):**
  - [x] Create a client-side API wrapper for making calls to Gemini API.
  - [x] Implement the Gemini API call functionality.
  - [x] Migrate the `generateCacheKey`, `handleExplainFurther`, `handleGenerateExamples` functions.
  - [x] Port the caching logic (`localStorage`).

## Create Dynamic Pages for Lessons (Optional but Recommended for SEO & Structure):

- [x] Instead of rendering all lesson content on one page via JavaScript, consider using dynamic routes, e.g., `pages/lessons/[lessonId].js`.
- [x] This would involve fetching or filtering `lessonsData` based on the `lessonId` from the route.
- [x] Implemented with Next.js App Router using `/lessons/[lessonId]/page.tsx`
- [x] Updated Layout component to use Next.js Link components for navigation
- [x] Added a `/lessons` index page that redirects to the first lesson to prevent 404 errors
- [x] Implemented home page navigation with a fixed home button in the Layout component

## Install Dependencies:

- [x] `npm install showdown tailwindcss postcss autoprefixer` (if not already done).
- [x] Any other libraries you might decide to use (e.g., a state management library).

## Testing:

- [x] Run the development server: `npm run dev`.
- [x] Thoroughly test all functionalities:
  - [x] Lesson selection and display.
  - [x] Sidebar opening/closing on mobile.
  - [x] AI feature toggle.
  - [x] Modal opening/closing, loading state, and content display.
- [x] (Once API route is set up) AI feature calls.
- [x] Check for console errors and fix them.
- [x] Ensure styles are applied correctly.

## Accessibility and Performance Issues:

- [x] Fix accessibility issues in DialogContent component:
  - [x] Add `DialogTitle` to make the component accessible for screen reader users
  - [x] Add `DialogDescription` or `aria-describedby` attribute for better accessibility
  - [x] Refer to Radix UI documentation: https://radix-ui.com/primitives/docs/components/dialog
- [x] Fix font preloading warning for WOFF2 font:
  - [x] The font resource is being preloaded but not used within a few seconds
  - [x] Ensure the font preloading has appropriate `as` value in the preload link
  - [x] Consider adjusting font loading strategy in Next.js config

## Mobile Optimization and Responsive Design:

- [x] Test the application on various mobile devices and screen sizes.
- [x] Enhance the mobile sidebar/navigation experience:
  - [x] Improve touch targets for better mobile accessibility.
  - [x] Ensure sidebar closes properly after selecting a lesson on mobile.
  - [x] Test scrolling behavior within the sidebar on small screens.
- [x] Optimize lesson content display on narrow screens:
  - [x] Ensure Arabic text is properly sized and readable on mobile.
  - [x] Adjust spacing and padding for better mobile experience.
  - [x] Test AI feature modals on mobile screens.
- [ ] Address any mobile-specific bugs or issues:
  - [x] Fix accessibility issue with SheetContent requiring DialogTitle (commit: 82d9b10).ge
  - [x] Fix any layout issues on small screens (RTL close button in sheet - commit: <COMMIT_HASH_PLACEHOLDER>).
  - [ ] Ensure proper font scaling on different device sizes.
  - [ ] Test performance on lower-end mobile devices.

## Build and Deploy (Later Stage):

- [ ] Create a production build: `npm run build`.
- [ ] Test the production build locally: `npm run start`.
- [ ] Plan for deployment (e.g., Vercel, Netlify).
- [ ] Set up environment variables for production.

## Cleanup:

- [x] Once the Next.js app is fully functional, remove the original `index.html` (if the Next.js app is in the same directory and replaces it).

## Update TODO.md (Post-Conversion):

- [x] Mark the main conversion task as complete in this file.
- [x] Add references to relevant commits or PRs for the conversion.

# ✅ Next.js Application Conversion Complete

The conversion from vanilla HTML/JavaScript to a modern Next.js application has been successfully completed. The application now uses:

- Next.js with App Router for better SEO and routing
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components for UI
- Self-hosted Arabic fonts
- Proper i18n support for Arabic and English text
- Mobile-responsive design
- Accessibility improvements

## Future Enhancements:

1. Add more lessons and content
2. Implement user authentication for personalized learning
3. Add a progress tracking system
4. Implement a quiz system to test understanding
5. Create a standalone API route for Gemini AI integration
6. Add animations and transitions for better UX
