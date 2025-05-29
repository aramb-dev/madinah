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
  - [ ] Add utility files to `lib/` as needed.

## Migrate Core HTML Structure (Layout):

- [ ] Create a `components/Layout.js` component.
- [ ] Move the main HTML structure (body, overall div layout, sidebar, main content area placeholder) from `index.html` into `Layout.js`.
- [ ] Convert HTML tags to JSX (e.g., `class` to `className`, `for` to `htmlFor`).
- [ ] In `pages/_app.js`, import and use this `Layout` component to wrap `Component {...pageProps}`.

## Migrate CSS:

- [ ] **Tailwind CSS**: Ensure Tailwind is configured correctly. Most of your utility classes from the CDN link will work.
- [ ] **Custom CSS in `<style>` tags**:
- [ ] Move the CSS rules from the `<style>` block in `index.html` into `styles/globals.css` (or a more specific CSS module if preferred for some parts).
- [ ] Ensure font imports (`Inter`, `Noto Kufi Arabic`) are handled, likely in `globals.css` or `_app.js`. Next.js also has built-in font optimization (`next/font`).
- [ ] Update any selectors if necessary due to JSX structure changes.

## Migrate Static Assets (Fonts):

- [ ] The Google Fonts import can be moved to `pages/_document.js` (for `<link>` tags in `<Head>`) or imported in `styles/globals.css` using `@import`. Next.js also has built-in font optimization (`next/font`).
- [ ] If you had local images/icons (none apparent in `index.html` but good to keep in mind), they would go into the `public` directory.

## Migrate JavaScript Logic & Data:

- [ ] **`lessonsData` Array:**
- [ ] Move the `lessonsData` array into a separate file, e.g., `lib/lessonsData.js` or `data/lessons.js`. Export it from there.
- [ ] **Core Page (`pages/index.js`):**
- [ ] This will be your main page. Import `lessonsData`.
- [ ] Replicate the initial rendering of the lesson list and the main content area.
- [ ] Use React state (`useState`) and effects (`useEffect`) to manage:
  - [ ] The currently selected lesson.
  - [ ] Displaying lesson content.
  - [ ] AI feature toggle state (consider React Context or a state management library for global state like this if it grows).
- [ ] **Sidebar Navigation (`components/Sidebar.js`):**
  - [ ] Create a `Sidebar` component.
  - [ ] Port the JavaScript logic for populating `lessonListContainer` and handling lesson selection clicks.
  - [ ] Manage sidebar open/close state (for mobile) using React state.
- [ ] **Modal (`components/GeminiModal.js`):**
  - [ ] Create a `GeminiModal` component.
  - [ ] Manage modal visibility and content using props and React state.
  - [ ] Port the `openGeminiModal`, `closeGeminiModal` logic.
- [ ] **Markdown Conversion (`showdown.js`):**
  - [ ] Install Showdown: `npm install showdown`.
  - [ ] Import and use Showdown within components where Markdown rendering is needed (likely in the modal or where lesson rules are displayed if they were Markdown).
- [ ] **API Calls (`callGeminiAPI` function):**
  - [ ] This logic will likely live within a component method or a custom hook.
- [ ] **Security Note**: The API key should NOT be hardcoded in client-side JavaScript. Use Next.js API Routes (`pages/api`) to create a backend endpoint that makes the call to the Gemini API. The client-side code would then call your Next.js API route.
- [ ] Migrate the `generateCacheKey`, `handleExplainFurther`, `handleGenerateExamples` functions.
- [ ] Caching logic (`localStorage`) can remain similar but ensure it's only accessed on the client-side (e.g., within `useEffect`).
- [ ] **AI Toggle Logic:**
  - [ ] Manage `aiFeaturesEnabled` state in React.
  - [ ] Port `updateAIToggleState` and `loadAITogglePreference` logic, adapting it to React state and `useEffect` for `localStorage` interaction.

## Create Dynamic Pages for Lessons (Optional but Recommended for SEO & Structure):

- [ ] Instead of rendering all lesson content on one page via JavaScript, consider using dynamic routes, e.g., `pages/lessons/[lessonId].js`.
- [ ] This would involve fetching or filtering `lessonsData` based on the `lessonId` from the route.

## Install Dependencies:

- [ ] `npm install showdown tailwindcss postcss autoprefixer` (if not already done).
- [ ] Any other libraries you might decide to use (e.g., a state management library).

## Testing:

- [ ] Run the development server: `npm run dev`.
- [ ] Thoroughly test all functionalities:
  - [ ] Lesson selection and display.
  - [ ] Sidebar opening/closing on mobile.
  - [ ] AI feature toggle.
  - [ ] Modal opening/closing, loading state, and content display.
- [ ] (Once API route is set up) AI feature calls.
- [ ] Check for console errors and fix them.
- [ ] Ensure styles are applied correctly.

## Build and Deploy (Later Stage):

- [ ] Create a production build: `npm run build`.
- [ ] Plan for deployment (e.g., Vercel, Netlify).

## Cleanup:

- [ ] Once the Next.js app is fully functional, remove the original `index.html` (if the Next.js app is in the same directory and replaces it).

## Update TODO.md (Post-Conversion):

- [ ] Mark the main conversion task as complete in this file.

- [ ] Add references to relevant commits or PRs for the conversion.
