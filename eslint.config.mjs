import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.node },
    plugins: {
      eslintPluginUnusedImports,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'capitalized-comments': ['error', 'always'],
      'eslintPluginUnusedImports/no-unused-imports': 'error',
      'eslintPluginUnusedImports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  tseslint.configs.recommended,
  eslintPluginPrettier,
]);
