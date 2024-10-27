import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';

export default tseslint.config(
  {
    // Global configuration
    ignores: ['dist/*', 'node_modules/*'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: { react: { version: 'detect' } },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tailwind.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
        },
      ],

      // General code style rules
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': ['error', 'always'],

      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'es5',
          jsxSingleQuote: true,
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    },
  },
  // Special config for test files
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);
