const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsEslint = require('typescript-eslint');

module.exports = [
  {
    files: ['**/*.js'],

    rules: {
      'no-duplicate-imports': 'error',
    },
  },

  ...tsEslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
        tsconfigRootDir: __dirname,
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
