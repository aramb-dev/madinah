# Interactive Arabic Grammar Rules - Madinah Book 1

This is a [Next.js](https://nextjs.org/) project designed to provide an interactive way to learn Arabic grammar, based on the content of Madinah Book 1 (دروس اللغة العربية لغير الناطقين بها - الجزء الأول).

## Features

- **Interactive Lessons:** Explore grammar rules from Madinah Book 1 with clear explanations.
- **Dynamic Navigation:** Easily switch between lessons using the sidebar.
- **Responsive Design:** Access the application on desktop and mobile devices.
- **Customizable Fonts:** 
    - **Font Scaling:** Adjust the Arabic text size for better readability.
    - **Font Selection:** Choose from multiple Arabic fonts (Noto Naskh Arabic, Noto Sans Arabic, Baloo Arabic) to suit your preference.
- **Self-Hosted Fonts:** Utilizes locally hosted fonts for consistent rendering and performance.

## Getting Started

First, ensure you have Node.js and npm (or yarn/pnpm/bun) installed. Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The main application logic can be found in `src/app/page.tsx` and related components within the `src/components/` directory.

This project uses self-hosted fonts managed via `@font-face` in `src/app/custom-globals.css` and leverages Next.js's App Router.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
