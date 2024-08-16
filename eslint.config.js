/* eslint-env node */

const typescriptEslintParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');

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
        project: './tsconfig.json', // Ensure this path points to your tsconfig.json
        sourceType: 'module',
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
    },
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
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
