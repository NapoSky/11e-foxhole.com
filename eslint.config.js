/* eslint-env node */

const typescriptEslintParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const nextPlugin = require('@next/eslint-plugin-next');

module.exports = [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      next: nextPlugin, // Assurez-vous que le plugin est bien ajouté
    },
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      // Next.js recommended rules
      'next/no-html-link-for-pages': 'warn',
      'next/no-img-element': 'off', // Désactivé car le projet utilise une gestion d'images personnalisée
      'next/no-unwanted-polyfillio': 'warn',
      'next/no-page-custom-font': 'warn',
      'next/no-css-tags': 'warn',
      'next/no-sync-scripts': 'warn',
      'next/no-title-in-document-head': 'warn',
      'next/no-document-import-in-page': 'warn',
      'next/no-head-import-in-document': 'warn',
      'next/google-font-display': 'warn',
      'next/google-font-preconnect': 'warn',
      'next/next-script-for-ga': 'warn',
      'next/no-before-interactive-script-outside-document': 'warn',
      'next/no-head-element': 'warn',
      'next/no-styled-jsx-in-document': 'warn',
      'next/no-typos': 'warn',
      'next/no-duplicate-head': 'warn',
    },
    ignores: [
      'build/',
      'dist/',
      'node_modules/',
      'public/',
      'out/',
    ],
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
