const tsEslint = require('typescript-eslint');
const eslintImport = require('eslint-plugin-import');
const sortKeysPlus = require('eslint-plugin-sort-keys-plus');
const { includeIgnoreFile } = require('@eslint/compat');
const path = require('node:path');

const gitignorePath = path.resolve(__dirname, '.gitignore');

module.exports = [
  includeIgnoreFile(gitignorePath),
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { '@typescript-eslint': tsEslint.plugin, import: eslintImport, 'sort-keys-plus': sortKeysPlus },
    rules: {
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/named': 'error',
      'import/no-duplicates': 'warn',
      'import/no-unresolved': 'error',
      'sort-keys-plus/sort-keys': 'warn',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
  },
];
