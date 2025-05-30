import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js'; // Import @eslint/js
import { FlatCompat } from '@eslint/eslintrc';
import { parser as tsParser, configs as tsConfigs } from 'typescript-eslint';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'; // Keep for now, might remove if extends works
import prettierPlugin from 'eslint-plugin-prettier'; // Import eslint-plugin-prettier

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  // resolvePluginsRelativeTo: __dirname, // Commented out as per previous troubleshooting
});

const eslintConfig = [
  {
    ignores: ['.next/**', 'public/**', 'node_modules/**'],
  },
  js.configs.recommended, // Use native flat config for eslint:recommended
  ...compat.extends('plugin:react/recommended'), // Try extending react rules
  ...compat.extends('plugin:react/jsx-runtime'), // Add jsx-runtime for Next.js
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:jsx-a11y/recommended'),
  // ...compat.extends('plugin:import/recommended'), // Temporarily remove import plugin
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('prettier'), // Re-enable prettier
  // Add TypeScript recommended type-checked config with file pattern restriction
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...tsConfigs.recommendedTypeChecked,
  },
  
  // TypeScript-specific configuration - only apply to .ts and .tsx files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser, // Use the imported parser
      parserOptions: {
        project: true, // Use project-level type information
        tsconfigRootDir: __dirname, // Or your project root
      }
    },
    plugins: {
      'prettier': prettierPlugin, // Add prettier plugin
    },
    rules: {
      // '@typescript-eslint/no-unused-vars': [
      //   'warn',
      //   { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      // ],
      // 'import/no-unresolved': 'off', // Temporarily turn off for testing
      'prettier/prettier': 'error', // Re-enable prettier rule
      'react/react-in-jsx-scope': 'off', // Next.js 17+ doesn't require React to be in scope
      'react/prop-types': 'off', // Not needed with TypeScript
    },
  },
];

export default eslintConfig;
