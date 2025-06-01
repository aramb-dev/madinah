export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: '0.5.0',
    date: 'YYYY-MM-DD', // Update with actual date
    changes: [
      "Fixed 'Event handlers cannot be passed to Client Component props' error by removing `onLessonSelect` from `Layout` and relying on `Link` components. (Commit: 30bff0b)",
      "Fixed misplaced 'use client' directive in Layout.tsx. (Commit: b61d44f)",
      "Fixed `usePathname` client component error in Layout. (Commit: 54b0d43)",
      "Fixed missing layout (sidebar and homepage button) on Changelog page. (Commit: de1b501)",
    ],
  },
  {
    version: '0.4.0',
    date: 'YYYY-MM-DD', // Update with actual date
    changes: [
      "Added 'Return to Homepage' link to sidebars. (Commit: acc5bd0)",
      'Implemented changelog feature based on commit history. (Commit: 5adfafb)',
      'Implemented page transitions and mobile sidebar animations. (Commit: 5dbd11a)',
    ],
  },
  {
    version: '0.3.0',
    date: 'YYYY-MM-DD', // Update with actual date
    changes: [
      'Updated README.md to reflect current application state. (Commit: 2ef4d9f)',
      'Implemented font selection UI for Noto Sans Arabic and Baloo Arabic. (Commit: e20ff26)',
      'Updated primary Arabic font to Noto Naskh Arabic. (Commit: 8f1406a)',
    ],
  },
  {
    version: '0.2.0',
    date: 'YYYY-MM-DD', // Update with actual date
    changes: ['Removed AI features from the application. (Commit: d94ef83)'],
  },
  {
    version: '0.1.0',
    date: 'YYYY-MM-DD', // Update with actual date
    changes: [
      'Initial conversion to Next.js application.',
      'Implemented dynamic lesson pages.',
      'Migrated CSS and static assets.',
      'Fixed various accessibility and mobile responsiveness issues.',
    ],
  },
];